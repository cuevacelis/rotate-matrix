import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
export default function InputSize(props: {
  size: number;
  onSizeChange: (size: number) => void;
}) {
  return (
    <>
      <Label htmlFor="matrix-size">Tamaño de la Matriz (NxN)</Label>
      <Input
        id="matrix-size"
        type="number"
        value={props.size}
        onChange={(e) => props.onSizeChange(parseInt(e.target.value) || 0)}
        className="w-full"
      />
    </>
  );
}
