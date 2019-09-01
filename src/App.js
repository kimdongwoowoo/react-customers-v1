import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    name: "들짐승",
    birthday: "112345",
    gender: "남자",
    job: "없음"
  },
  {
    id: 2,
    name: "흑두루미",
    birthday: "112345",
    gender: "남자",
    job: "없음"
  },
  {
    id: 3,
    name: "흑우",
    birthday: "112345",
    gender: "남자",
    job: "없음"
  }
];
class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              id={c.id}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            ></Customer>
          );
        })}
      </div>
    );
  }
}

export default App;
