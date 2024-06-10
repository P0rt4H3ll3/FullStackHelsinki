import { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";
import updateService from "./service/updateserver";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    updateService.getAll().then((initialPhonebook) => {
      setPersons(initialPhonebook);
    });
  }, []);

  const isDuplicate = (personName) => {
    // checking if name already exists in Persons Usestate Array
    const nameArray = persons.map((person) => person.name); // get only names in new array
    const tryNewName = nameArray.concat(personName); // never mutate state objects directly so use .concat or ... spread operator
    const checkValues = new Set(tryNewName);
    if (checkValues.size < tryNewName.length) {
      // if true, duplicate is found
      return true;
    }
  };
  const deleteData = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      updateService.deleteEntry(person.id).then((deletedPhoneEntry) => {
        setPersons(persons.filter((n) => n.id !== person.id));
      });
    }
  };

  const addData = (event) => {
    event.preventDefault();
    // first verify that imput fields are not empty to avoid adding empty names
    if (newName.trim() == "" || newNumber.trim() == "") {
      !newName && !newNumber
        ? alert("you have to input a Name and Number")
        : !newNumber
        ? alert("you have to input a Number")
        : alert("you have to input a Name");
      return true;
    } else {
      const dataObject = {
        // new object to add to phonebook, (no id, is handled by backend)
        name: newName,
        number: newNumber,
      };
      if (isDuplicate(dataObject.name)) {
        alert(`${dataObject.name} is already added to phonebook`);
        setNewName("");
        setNewNumber("");
      } else {
        updateService.create(dataObject).then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson)); //setPerson([...persons, returnedPerson]) spread operator also for new Array
          setNewName("");
          setNewNumber("");
        });
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
          <Person key={person.name} person={person} deleteData={deleteData} /> // hier nochmal gucken Key vllt als person.id is mehr unique identifier ?
        ))}
      </ul>
    </div>
  );
};

export default App;
