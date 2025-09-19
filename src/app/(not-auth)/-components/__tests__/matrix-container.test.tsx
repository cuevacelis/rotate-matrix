import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter, usePathname, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation'
import { MatrixContainer } from '../matrix-container'

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}))

// Mock useQueryString hook
jest.mock('@/hooks/use-query-string', () => ({
  useQueryString: () => ({
    createQueryString: jest.fn((key: string, value: string) => `${key}=${value}`)
  })
}))

// Mock UI components to simplify testing
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}))

// Mock all complex child components
jest.mock('../matrix-filter', () => ({
  MatrixFilter: ({ size, direction, onSizeChange, onDirectionChange }: {
    size: number;
    direction: string;
    onSizeChange: (size: number) => void;
    onDirectionChange: (direction: string) => void;
  }) => (
    <div data-testid="matrix-filter">
      <span data-testid="current-size">{size}</span>
      <span data-testid="current-direction">{direction}</span>
      <button onClick={() => onSizeChange(4)}>Change Size</button>
      <button onClick={() => onDirectionChange('counterclockwise')}>Change Direction</button>
    </div>
  )
}))

jest.mock('../matrix-editable/matrix', () => ({
  Matrix: ({ size }: { size: number }) => (
    <div data-testid="matrix">
      <span data-testid="matrix-size">{size}</span>
    </div>
  )
}))

jest.mock('../matrix-editable/matrix-empity', () => ({
  __esModule: true,
  default: ({ currentSize }: { currentSize?: number }) => (
    <div data-testid="matrix-empty">
      <span data-testid="empty-current-size">{currentSize}</span>
    </div>
  )
}))

jest.mock('../matrix-result', () => ({
  MatrixResult: ({ size, direction }: { size: number; direction: string }) => (
    <div data-testid="matrix-result">
      <span data-testid="result-size">{size}</span>
      <span data-testid="result-direction">{direction}</span>
    </div>
  )
}))

jest.mock('../matrix-editable/error-dialog', () => ({
  ErrorDialog: ({ open, error, onClose }: { open: boolean; error: string; onClose: () => void }) =>
    open ? (
      <div data-testid="error-dialog">
        <span data-testid="error-message">{error}</span>
        <button onClick={onClose}>Close Error</button>
      </div>
    ) : null
}))

// Mock matrix utilities
jest.mock('@/lib/utils/matrix-utils', () => ({
  createEmptyMatrix: (size: number) => Array(size).fill(null).map(() => Array(size).fill(0)),
  rotateMatrix: () => [[1, 2], [3, 4]]
}))

// Mock validation schemas
jest.mock('@/lib/validations/matrix-validation', () => ({
  matrixConfigSchema: {
    safeParse: () => ({ success: true })
  },
  matrixSchema: {
    safeParse: () => ({ success: true })
  }
}))

describe('MatrixContainer', () => {
  const mockPush = jest.fn()
  const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>
  const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>
  const mockUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams>

  beforeEach(() => {
    jest.clearAllMocks()

    mockUseRouter.mockReturnValue({
      push: mockPush,
      replace: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
    })

    mockUsePathname.mockReturnValue('/test-path')

    mockUseSearchParams.mockReturnValue({
      get: jest.fn((key: string) => {
        if (key === 'size') return '3'
        if (key === 'direction') return 'clockwise'
        return null
      }),
    } as unknown as ReadonlyURLSearchParams)
  })

  it('renders matrix container with default values', () => {
    render(<MatrixContainer />)

    expect(screen.getByTestId('matrix-filter')).toBeInTheDocument()
    expect(screen.getByTestId('current-size')).toHaveTextContent('3')
    expect(screen.getByTestId('current-direction')).toHaveTextContent('clockwise')
  })

  it('renders matrix when size is valid', () => {
    render(<MatrixContainer />)

    expect(screen.getByTestId('matrix')).toBeInTheDocument()
    expect(screen.getByTestId('matrix-size')).toHaveTextContent('3')
  })

  it('renders empty matrix component when size is invalid', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn((key: string) => {
        if (key === 'size') return '1' // Invalid size
        if (key === 'direction') return 'clockwise'
        return null
      }),
    } as unknown as ReadonlyURLSearchParams)

    render(<MatrixContainer />)

    expect(screen.getByTestId('matrix-empty')).toBeInTheDocument()
    expect(screen.getByTestId('empty-current-size')).toHaveTextContent('1')
  })

  it('renders rotate button', () => {
    render(<MatrixContainer />)

    const rotateButton = screen.getByRole('button', { name: /rotar matriz/i })
    expect(rotateButton).toBeInTheDocument()
  })

  it('handles size change correctly', () => {
    render(<MatrixContainer />)

    const changeSizeBtn = screen.getByText('Change Size')
    fireEvent.click(changeSizeBtn)

    expect(mockPush).toHaveBeenCalledWith('/test-path?size=4')
  })

  it('handles direction change correctly', () => {
    render(<MatrixContainer />)

    const changeDirectionBtn = screen.getByText('Change Direction')
    fireEvent.click(changeDirectionBtn)

    expect(mockPush).toHaveBeenCalledWith('/test-path?direction=counterclockwise')
  })

  it('handles matrix rotation', () => {
    render(<MatrixContainer />)

    const rotateButton = screen.getByRole('button', { name: /rotar matriz/i })
    fireEvent.click(rotateButton)

    expect(screen.getByTestId('matrix-result')).toBeInTheDocument()
  })

  it('uses search params for initial values', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn((key: string) => {
        if (key === 'size') return '5'
        if (key === 'direction') return 'counterclockwise'
        return null
      }),
    } as unknown as ReadonlyURLSearchParams)

    render(<MatrixContainer />)

    expect(screen.getByTestId('current-size')).toHaveTextContent('5')
    expect(screen.getByTestId('current-direction')).toHaveTextContent('counterclockwise')
  })

  it('uses default values when search params are missing', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    } as unknown as ReadonlyURLSearchParams)

    render(<MatrixContainer />)

    expect(screen.getByTestId('current-size')).toHaveTextContent('3')
    expect(screen.getByTestId('current-direction')).toHaveTextContent('clockwise')
  })

  it('renders matrix container structure', () => {
    render(<MatrixContainer />)

    // Check main container structure
    expect(screen.getByTestId('matrix-filter')).toBeInTheDocument()
    expect(screen.getByTestId('matrix')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /rotar matriz/i })).toBeInTheDocument()
  })
})