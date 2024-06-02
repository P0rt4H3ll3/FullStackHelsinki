import { useState, useEffect } from "react";
import Person from "./Person";
import Filter from "./Filter";
import PersonForm from "./PersonForm";

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h2>Add a new</h2>
      <PersonForm
        addData={addData}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
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
