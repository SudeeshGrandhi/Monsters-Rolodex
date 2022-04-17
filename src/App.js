import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(function (res) {
        return res.json();
      })
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};

// import { Component } from "react";

// const App = class extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then(function (res) {
//         return res.json();
//       })
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }
//   onSearchChange = (e) => {
//     this.setState(() => {
//       return { searchField: e.target.value.toLocaleLowerCase() };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           placeholder="search monsters"
//           onChange={onSearchChange}
//         />
//         <CardList monster={filteredMonsters} />
//       </div>
//     );
//   }
// };

export default App;
