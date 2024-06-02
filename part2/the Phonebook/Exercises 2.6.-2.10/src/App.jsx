import { useState, useEffect } from "react";
import Person from "./Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [matchName, setMatchName] = useState(persons);

  useEffect(() => {
    setMatchName(
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }, [searchName, persons]);

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
        setPersons(persons.concat(dataObject)); //setPerson([...persons, dataObject]) spread operator also for new Array
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

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  /*
  const displaySearch = () => {
    console.log(matchName);
    if (matchName) {
      matchName.map((person) => <Person key={person.name} person={person} />);
    } else {
      persons.map((person) => <Person key={person.name} person={person} />);
    }
  };
  */

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={searchName} onChange={handleSearchName} />
      </div>

      <h2>add a new</h2>
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
        {matchName.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
