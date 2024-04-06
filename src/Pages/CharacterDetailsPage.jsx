import { useParams } from "react-router-dom";
import { ImageComponent } from "../Components/ImageComponent/ImageComponent.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export const CharacterDetailsPage = () => {
  const { name } = useParams();
  const [characterData, setCharacterData] = useState(null);

  const API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
  const HASH = import.meta.env.VITE_MARVEL_HASH;
  const TS = import.meta.env.VITE_TS;
  const BASE_URL = "https://gateway.marvel.com";
  const URL = `${BASE_URL}/v1/public/characters?name=${name}&apikey=${API_KEY}&ts=${TS}&hash=${HASH}`;
  // https://${BASE_URL}/v1/public/${searchType}?${searchParam}=${searchQuery}&apikey=${API_KEY}&ts=${TS}&hash=${HASH}
  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await axios.get(URL);
        const jsonData = response.data.data.results[0];
        console.log(jsonData);
        setCharacterData(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCharacterData();
  }, [name]);

  return (
    <div>
      <ImageComponent data={characterData} />
      {characterData && (
        <div>
          <h1>{characterData.name}</h1>
          <p>{characterData.description}</p>
          <a
            href={characterData.urls.find((url) => url.type === "detail")?.url}
          >
            Marvel Link: {name}
          </a>
        </div>
      )}
    </div>
  );
};