import { useState } from "react";
import Person from "./Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const isDuplicate = (personName) => {
    const nameArray = persons.map((person) => person.name);
    console.log("this is ne persons but only names no new name", nameArray);
    const tryNewName = nameArray.concat(personName);
    console.log("this is persons but with new name", tryNewName);
    const checkValues = new Set(tryNewName);
    if (checkValues.size < tryNewName.length) {
      console.log("duplicate found");
      return true;
    }
  };
  const addData = (event) => {
    event.preventDefault();
    if (newName.trim() == "" || newNumber.trim() == "") {
      !newName && !newNumber
        ? alert("you have to input a Name and Number")
        : !newNumber
        ? alert("you have to input a Number")
        : alert("you have to input a Name");
      return true;
    } else {
      const dataObject = {
        name: newName,
        number: newNumber,
      };
      if (isDuplicate(dataObject.name)) {
        alert(`${dataObject.name} is already added to phonebook`);
        setNewName("");
        setNewNumber("");
      } else {
        setPersons(persons.concat(dataObject));
        setNewName("");
        setNewNumber("");
      }
    }
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addData}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
