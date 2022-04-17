import "./card.styles.css";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// import { Component } from "react";
// const Card = class extends Component {
//   render() {
//     const { id, name, email } = this.props;
//     return (
//       <div className="card-container">
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// };

export default Card;
