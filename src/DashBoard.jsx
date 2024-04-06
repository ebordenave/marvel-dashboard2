import "./DashBoard.css";
import { SearchBar } from "./Components/SearchBar/SearchBar.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Components/Card/Card.jsx";
import { CharacterBarChart } from "./Components/BarChart/CharacterBarChart.jsx";
import { ImageComponent } from "./Components/ImageComponent/ImageComponent.jsx";

function DashBoard() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState("characters");
  const [filteredData, setFilteredData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [pieChartData, setPieChartData] = useState([]);

  const API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
  const HASH = import.meta.env.VITE_MARVEL_HASH;
  const TS = import.meta.env.VITE_TS;
  const BASE_URL = "gateway.marvel.com";

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await handleSearch(query);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const filterData = (data) => {
    return data.filter((value) => {
      return (value.title || value.name)
        ?.toLowerCase()
        .includes(query.toLowerCase());
    });
  };

  const handleSearch = async (searchQuery) => {
    if (searchQuery === "") {
      setFilteredData([]);
      return;
    }
    const searchParam = isSubmitting ? "name" : "nameStartsWith";
    try {
      const response = await axios.get(
        `https://${BASE_URL}/v1/public/${searchType}?${searchParam}=${searchQuery}&apikey=${API_KEY}&ts=${TS}&hash=${HASH}`,
      );
      const jsonData = response.data.data.results;
      setResults(jsonData);
      setFilteredData(filterData(jsonData));
    } catch (err) {
      console.error("Error fetching Data: ", err);
    }
  };

  useEffect(() => {
    if (!isSubmitting) {
      handleSearch(query);
    }
  }, [query, searchType]);

  const cardCategories = {
    characters: ["appearance", "events", "series", "stories"],
    events: ["creators", "comics", "stories"],
  };

  return (
    <>
      <div className="overall">
        <div className="dashboard-wrapper">
          <div className="top-grid">
            <div className="image-container">
              <ImageComponent data={results[0]} />
            </div>
            <div className="sb-container">
              <SearchBar
                data={filteredData}
                query={query}
                onQueryChange={setQuery}
                onSearchTypeChange={handleSearchTypeChange}
                searchType={searchType}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
        {/* {(results ?? []).map((result, index) => ( */}
        {/*   <div key={index} className="cards-container"> */}
        {/*     <> */}
        {/*       <Card data={result} searchType={searchType} title={result.title} /> */}
        {/*     </> */}
        {/*   </div> */}
        {/* ))} */}
        <div className="cards-container">
          {cardCategories[searchType].map((category) => (
            <Card
              key={category}
              data={results[0]}
              title={results.title}
              searchType={searchType}
              isSubmitted={isSubmitted}
              cardCategory={category}
            />
          ))}
        </div>
        <div className="BarChart">
          <CharacterBarChart data={results[0]} />
        </div>
      </div>
    </>
  );
}

export default DashBoard;