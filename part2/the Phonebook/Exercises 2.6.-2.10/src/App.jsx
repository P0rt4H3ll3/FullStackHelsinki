import { useState } from "react";
import Person from "./Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const isDuplicate = (personObject) => {
    const propationaryNewName = persons.concat(personObject);
    const checkValues = new Set(propationaryNewName.map((v) => v.name));
    if (checkValues.size < propationaryNewName.length) {
      console.log("duplicate found");
      return true;
    }
  };
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      //id: persons.length,
    };
    if (isDuplicate(personObject)) {
      alert(`${personObject.name} is already added to phonebook`);
      setNewName("");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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