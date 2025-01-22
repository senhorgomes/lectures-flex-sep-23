import './App.css';
import Component1 from './components/Component1';
import Header from './components/Header';
import PetOwner from './components/PetOwner';
// functional component
function App() {
  const singlePetowner = {
    id: 2,
    name: "Page",
    petName: "Garfield",
    petType: "Cat"
  };
  const listOfPetOwners = [{
    id: 1,
    name: "Rushi",
    petName: "Clifford",
    petType: "Dog"
  }, {
    id: 2,
    name: "Page",
    petName: "Garfield",
    petType: "Cat"
  }, {
    id: 3,
    name: "Ginnie",
    petName: "Stark",
    petType: "Dog"
  }, {
    id: 4,
    name: "Daile",
    petName: "Jones",
    petType: "Cat"
  }, {
    id: 5,
    name: "Charlie",
    petName: "Snoopy",
    petType: "Dog"
  }];
  // {
  //     id: 5,
  //     name: "Charlie",
  //     petName: "Snoopy",
  //     petType: "Dog"
  //   }
  // React cannot render a single object

  const petOwnerList = listOfPetOwners.map((petOwner) =>
      <PetOwner
      // We want to avoid using indexs for keys
      // In the event you can't use id's or combinations of information, you can use a UUID generator
        key={petOwner.id}
        ownerName={petOwner.name}
        petName={petOwner.petName}
        petType={petOwner.petType}
      />
    );

  return (
    <div className="App">
      <header className="App-header">
        {/* Anytime we want to use a Javascript variable within our JSX, it needs to be wrapped in {} */}
        {/* Instead of class we used className */}
        <Header />
        {/* Props -> when we pass information directly into the component */}
        {/* <PetOwner
          ownerName={"Charlie"}
          petName={"Snoopy"}
          petType={"Dog"}
        /> */}

        {/* We can invoke .map or other methods directly in our JSX/return */}
        {/* Anytime we have a list of components, React needs a way to keep track of them, by using keys */}
        {petOwnerList}
        <Component1 info={"Random String"}/>
        {/* <PetOwner
          // Typically for components, we shouldn't pass in a whole object, but only the values we need
          ownerName={singlePetowner.name}
          petName={singlePetowner.petName}
          petType={singlePetowner.petType}
        // owner={singlePetowner}
        /> */}
      </header>
    </div>
  );
}

export default App;
