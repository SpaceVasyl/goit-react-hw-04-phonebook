import { useState , useEffect} from "react";
import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from "nanoid";
import { Search } from "./Search/Search";

export const App = () => {
const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem("contacts"))||[]);
const [filter, setFilter] = useState('');

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
},[contacts])

const takeData = (data) => {
  data.id = nanoid();
  if (contacts.find((contact) => contact.name === data.name)){
    alert(`${data.name} is already in contacts`);
    return;
  }
  setContacts(prevState => [...prevState, data])
}

const addFilterToState = ({ target }) => {
      const { value } = target;
    setFilter(value );
}

const contactFilter = () => {
  return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
}

const deleteContact = (id) => {
setContacts(prevState => prevState.filter((contact) => contact.id !== id));

}
  return (
      <div>
        <Form takeData={takeData} />
        <Search addFilterToState={addFilterToState} />
        <Contacts
          contactFilter={contactFilter()}
          deleteContact={deleteContact}
        />
      </div>
    );
}