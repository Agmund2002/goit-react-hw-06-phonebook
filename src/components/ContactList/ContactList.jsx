import { Contact } from "components/Contact/Contact";
import { Item, List } from "./ContactList.styled";

export const ContactList = ({arr, onDelete}) => {
  return (
    <List>
      {arr.map(item => (
        <Item key={item.id}>
          <Contact data={item} onDelete={onDelete} />
        </Item>
      ))}
    </List>
  );
};
