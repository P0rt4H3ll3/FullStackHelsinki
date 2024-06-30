import { useState, useEffect } from "react";
import MyComponent from "./components/MyComponent";
import FormComponent from "./components/FormComponent";
import apiService from "./service/apiService";


const App = () => {

  useEffect(() => {
    // display initial DB
    apiService
      .getAll()
      .then((initialPhonebook) => {
        setPersons(initialPhonebook);
      })
      .catch((error) => {
        setErrorMessage("Entries could not be loaded");
      })
      .finally(() => {
        setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 10000);
      });
  }, []);

  const addData = (event) => {
    event.preventDefault();
    //updateData(dataObject);
    //creatingData(dataObject);


  const creatingData = (dataObject) => {
    apiService
      .create(dataObject)
      .then((returnedObject) => {
        setPersons(persons.concat(returnedObject)); //setPerson([...persons, returnedPerson]) spread operator also for new Array
        resetTextField();
        setSuccessMessage(`Added ${}`);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      })
      .finally(() => {
        setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 10000);
      });
  };

  const deleteData = (person) => {
    apiService
      .deleteEntry() //need the id to delete the right entry
      .then(() => {
      })
      .catch((error) => {
        setErrorMessage(
          `Information of ${person.name} has already been removed from the server`
        );
      })
      .finally(() => {
        setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 10000);
      });
    }
  };

  const updateData = () => {
    apiService
      .update()
      .then(() => {

      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      })
      .finally(() => {
        setTimeout(() => {
          setSuccessMessage(null);
          setErrorMessage(null);
        }, 10000);
      });
  };


  const resetTextField = () => {
    setNewName("");
    setNewNumber("");
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

    </div>
  );
};

export default App;
