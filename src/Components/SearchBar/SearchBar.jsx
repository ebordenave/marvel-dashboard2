import PropTypes from "prop-types";
import "./SearchBar.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SearchBar = ({
  query,
  onQueryChange,
  searchType = "characters",
  onSearchTypeChange,
  onSubmit,
  data,
}) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [results, setResults] = useState([]);

  const handleMouseEnter = () => {
    setIsDropDownVisible(true);
  };
  const handleMouseLeave = () => {
    setIsDropDownVisible(false);
  };
  const handleClickOutside = (event) => {
    if (!event.target.closest(".data-result")) {
      setIsDropDownVisible(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  // handleChange will change every time text is entered in the search bar
  const handleChange = (e) => {
    onQueryChange(e.target.value);
  };

  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCharacterSelect = (name) => {
    navigate(`/${searchType}detail/${name}`, {
      state: { prevQuery: query },
    });
  };

  return (
    <div className="search-bar-wrapper">
      <div className="form-container">
        <select value={searchType} onChange={onSearchTypeChange}>
          <option value="characters">Characters</option>
          <option value="events">Events</option>
        </select>
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={handleChange} />
          {data.length !== 0 && (
            <div
              className="data-result"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {data.slice(0, 15).map((value, key) => {
                const identifier =
                  searchType === "characters" ? value.name : value.title;
                return (
                  <Link
                    key={key}
                    className="data-item"
                    // href={value.urls.find((url) => url.type ===
                    // "detail")?.url} target="_blank"
                    to={`/${searchType}detail/${identifier}`}
                    onClick={() => handleCharacterSelect(identifier)}
                  >
                    {value.title || value.name}
                  </Link>
                );
              })}
            </div>
          )}
        </form>
        {/* <button type="submit">Submit</button> */}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  searchType: PropTypes.string,
  onSearchTypeChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


// {query && (
//   <div className="data-result">
//     {data.map((item, index) => (
//       <div key={index} className="data-item">
//         {item.name}
//       </div>
//     ))}
//   </div>
// )}