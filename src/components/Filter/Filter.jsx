import { Input, Label } from "./Filter.styled";

export const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
      />
    </Label>
  );
};
