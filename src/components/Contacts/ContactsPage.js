import React, { Component } from "react";
import Contact from "./components/Contact.js";
import male from "./assets/img/male.svg";
import female from "./assets/img/female.svg";
import anonim from "./assets/img/anon.svg";
const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contracts extends Component {
  state = {
    contacts: [...contacts],
    search: "",
  };
  setGenderImage(gender) {
    if (gender === "male") {
      return male;
    } else if (gender === "female") {
      return female;
    } else {
      return anonim;
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value,
    });
    this.setState({
      contacts: [
        ...contacts.filter((el) => {
          return (
            el.lastName
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            el.firstName
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            el.phone.includes(event.target.value)
          );
        }),
      ],
    });
  };
  render() {
    return (
      <div className="Contacts">
        <div className="contacts__wrapper">
          <input
            value={this.state.search}
            onChange={this.handleSearchChange}
            placeholder="Search"
            className="input__search"
          />

          {this.state.contacts.map((contact, i) => (
            <Contact
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              gender={this.setGenderImage(contact.gender)}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Contracts;
