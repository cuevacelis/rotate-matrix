import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RotationDirection } from "../../page";

export default function SelectOrientation(props: {
  direction: RotationDirection;
  onDirectionChange: (direction: RotationDirection) => void;
}) {
  return (
    <>
      <Label htmlFor="rotation-direction">Dirección de Rotación</Label>
      <Select
        value={props.direction}
        onValueChange={(value: RotationDirection) =>
          props.onDirectionChange(value)
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona la dirección" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="clockwise">Horaria</SelectItem>
          <SelectItem value="counterclockwise">Antihoraria</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
