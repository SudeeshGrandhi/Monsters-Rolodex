import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const { monster } = props;
  return (
    <div className="card-list">
      {monster.map(function (monster) {
        const { name, email, id } = monster;
        return <Card name={name} email={email} id={id} key={id} />;
      })}
    </div>
  );
};

// import { Component } from "react";
// const CardList = class extends Component {
//   render() {
//     const { monster } = this.props;

//     return (
//       <div className="card-list">
//         {monster.map(function (monster) {
//           const { name, email, id } = monster;
//           return <Card name={name} email={email} id={id} key={id} />;
//         })}
//       </div>
//     );
//   }
// };

export default CardList;
