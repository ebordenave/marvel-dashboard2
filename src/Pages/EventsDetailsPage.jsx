import { useParams } from "react-router-dom";
import { ImageComponent } from "../Components/ImageComponent/ImageComponent.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export const EventsDetailsPage = () => {
  const { name } = useParams();
  const [eventsData, setEventsData] = useState(null);

  const API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
  const HASH = import.meta.env.VITE_MARVEL_HASH;
  const TS = import.meta.env.VITE_TS;
  const BASE_URL = "https://gateway.marvel.com";
  const URL = `${BASE_URL}/v1/public/events?name=${encodeURIComponent(name)}&apikey=${API_KEY}&ts=${TS}&hash=${HASH}`;

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get(URL);
        const jsonData = response.data.data.results[0];
        console.log("👀" + URL);
        setEventsData(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchEventsData();
  }, [name]);

  return (
    <div>
      <ImageComponent data={eventsData} />
      {eventsData && (
        <div>
          <h1>{eventsData.title}</h1>
          <p>{eventsData.description}</p>
          <a href={eventsData.urls.find((url) => url.type === "detail")?.url}>
            Marvel Link: {name}
          </a>
        </div>
      )}
    </div>
  );
};