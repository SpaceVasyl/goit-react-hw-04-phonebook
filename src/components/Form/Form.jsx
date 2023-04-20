import {  useState } from 'react';
import css from './Form.module.css';

export const Form = ({takeData}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  takeData({name , number});
  setName('');
  setNumber('');
}
const handleChange = (e) => {
  const {value, name} = e.target
  switch (name) {
    case 'name':
    setName(value)
      break;
    case 'number':
    setNumber(value) 
      break;
    default:
      break;
  }
}
  return (
    <form onSubmit={handleSubmit}>
    <h3>Name</h3>
    <div><input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      className={css.nameinput}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required/></div>
      <div><input
      type="tel"
      name="number"
      value={number}
      onChange={handleChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    /></div>
    <button type="submit">Add contact</button>
    </form>)
}
