import "./search-box.styles.css";
const SearchBox = (props) => {
  const { placeholder, onChange, className } = props;
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange={onChange}
    />
  );
};

// import { Component } from "react";
// const SearchBox = class extends Component {
//   render() {
//     const { placeholder, onChange, className } = this.props;
//     return (
//       <input
//         type="search"
//         placeholder={placeholder}
//         className={`search-box ${className}`}
//         onChange={onChange}
//       />
//     );
//   }
// };
export default SearchBox;
