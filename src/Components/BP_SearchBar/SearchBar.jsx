// import "./SearchBar.css";
// import { useMemo, useState } from "react";
// import PropTypes from "prop-types";
//
// export const SearchBar = ({ data }) => {
//   const [query, setQuery] = useState("");
//
//   const filteredItems = useMemo(() => {
//     return data.filter((item) => {
//       return item.toLowerCase().includes(query.toLowerCase());
//     });
//   }, [data, query]);
//
//   // useEffect(() => {
//   //   setItems(["item 1", "item 2", "item 3"]);
//   // }, []);
//
//   const handleFilter = (e) => {
//     const searchInput = e.target.value;
//     setQuery(searchInput);
//     // const newFilter = data.filter((value) => {
//     //   return value.includes(searchInput);
//     // });
//     // setFilteredData(newFilter);
//   };
//
//   return (
//     <>
//       <input
//         value={query}
//         type="search"
//         id="search"
//         name="search"
//         placeholder="search here"
//         onChange={handleFilter}
//       />
//       {filteredItems.map((item) => (
//         <p key={item}>{item}</p>
//       ))}
//     </>
//   );
// };
//
// SearchBar.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       filter: PropTypes.func,
//     }),
//   ).isRequired,
// };