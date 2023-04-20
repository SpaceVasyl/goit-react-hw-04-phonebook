import { Component } from 'react';
import css from './Form.module.css';

export class  Form extends Component  {
  state = {
    name: '',
    number: ''
  }
handleSubmit = (e) => {
e.preventDefault()
this.props.takeData(this.state)
this.setState({
  name: '',
  number: ''
})
} 
handleChange = ({target}) => {
  const {value, name} = target;
  this.setState({[name]:value})
  
}
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <h3>Name</h3>
    <div><input
      type="text"
      name="name"
      value={this.state.name}
      onChange={this.handleChange}
      className={css.nameinput}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required/></div>
      <div><input
      type="tel"
      name="number"
      value={this.state.number}
      onChange={this.handleChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    /></div>
    <button type="submit">Add contact</button>
    </form>)}   
}

