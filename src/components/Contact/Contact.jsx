import { Button, Icon } from "./Contact.styled";

export const Contact = ({ data: {id, name, number}, onDelete }) => {
  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <Button type='button' onClick={() => onDelete(id)}><Icon /></Button>
    </>
  );
};
