import React, { useState } from "react";
import Person from "./models";
import "./index.css";

const APP_NAME = "Let's Meet";

function Heading() {
  return <p className="heading">{APP_NAME}</p>;
}

const PeopleAdded = ({ people, removePerson }) => {
  return (
    <div className="container-people">
      {people.map((person) => {
        return (
          <PersonRecord
            key={person.id}
            id={person.id}
            pName={person.name}
            fromDate={person.startDate}
            toDate={person.endDate}
            removePerson={removePerson}
          ></PersonRecord>
        );
      })}
    </div>
  );
};
const PersonRecord = ({ id, pName, fromDate, toDate, removePerson }) => {
  return (
    <div className="row-person">
      <label className="person-name">{pName}</label>
      <label className="person-dates">
        {fromDate} - {toDate}
      </label>
      <div className="container-btn-delete-person">
        <button className="btn-delete-person" onClick={() => removePerson(id)}>
          DD
        </button>
      </div>
    </div>
  );
};
const AddPerson = ({
  pName,
  fromDate,
  toDate,
  setNewPersonName,
  setNewPersonFromDate,
  setNewPersonToDate,
  addPerson,
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <input
              type="text"
              className="ip-name"
              placeholder="Enter Name"
              value={pName}
              onChange={(e) => setNewPersonName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>From</label>
          </td>
          <td>
            <input
              type="date"
              className="ip-date"
              id="ipFromDate"
              value={fromDate}
              onChange={(e) => setNewPersonFromDate(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>To</label>
          </td>
          <td>
            <input
              type="date"
              className="ip-date"
              id="ipToDate"
              value={toDate}
              onChange={(e) => setNewPersonToDate(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button className="btn-add-item" onClick={addPerson}>
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

function RightSide() {
  const [peopleList, setPeopleList] = useState([]);
  const [newPersonName, setNewPersonName] = useState("");
  const [newPersonFromDate, setNewPersonFromDate] = useState("");
  const [newPersonToDate, setNewPersonToDate] = useState("");

  const removePerson = (id) => {
    let newList = peopleList.filter((item) => item.id !== id);
    setPeopleList(newList);
  };
  const addPerson = () => {
    if (newPersonName && newPersonFromDate && newPersonToDate) {
      const person = new Person(
        newPersonName,
        newPersonFromDate,
        newPersonToDate
      );
      console.log("Add Clicked");
      console.log(person);
      peopleList.push(person);
      setNewPersonName("");
      setNewPersonFromDate("");
      setNewPersonToDate("");
    } else {
      console.log("Empty Person not allowed");
    }
  };
  return (
    <div className="right-side">
      <AddPerson
        pName={newPersonName}
        fromDate={newPersonFromDate}
        toDate={newPersonToDate}
        setNewPersonName={setNewPersonName}
        setNewPersonToDate={setNewPersonToDate}
        setNewPersonFromDate={setNewPersonFromDate}
        addPerson={addPerson}
      />
      <PeopleAdded people={peopleList} removePerson={removePerson} />
    </div>
  );
}

function LeftSide() {
  return <div className="left-side"></div>;
}

function MainComponent() {
  return (
    <React.Fragment>
      <Heading />
      <div className="container-main">
        <div className="container-1">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </React.Fragment>
  );
}

function App() {
  return <MainComponent />;
}
export default App;
