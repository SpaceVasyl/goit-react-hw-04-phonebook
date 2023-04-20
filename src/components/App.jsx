import React, { Component } from "react";
import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from "nanoid";
import { Search } from "./Search/Search";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addFilterToState = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  contactFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  takeData = (data) => {
    data.id = nanoid();
    const { contacts } = this.state;

    if (contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <Form takeData={this.takeData} />
        <Search addFilterToState={this.addFilterToState} />
        <Contacts
          contactFilter={this.contactFilter()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}