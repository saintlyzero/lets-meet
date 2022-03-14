import React from "react";
import "./index.css";

const APP_NAME = "Let's Meet";

function Heading() {
  return <p className="heading">{APP_NAME}</p>;
}

function PeopleAdded() {
  return (
    <div className="container-people">
      <PersonRecord />
    </div>
  );
}
function PersonRecord() {
  return (
    <div className="container-people">
      <div className="row-person">
        <label class="person-name">Shubham</label>
        <label class="person-dates">10-02-2022 - 10-02-2023</label>
        <button class="btn-delete-person">DL</button>
      </div>
    </div>
  );
}
function AddPerson() {
  return (
    <table>
      <tr>
        <td>
          <label>Name</label>
        </td>
        <td>
          <input type="text" className="ip-name" placeholder="Enter Name" />
        </td>
      </tr>
      <tr>
        <td>
          <label>Dates</label>
        </td>
        <td>
          <input type="date" className="ip-date" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button class="btn-add-item">Add</button>
        </td>
      </tr>
    </table>
  );
}

function RightSide() {
  return (
    <div className="right-side">
      <AddPerson />
      <PeopleAdded />
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
