import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard.jsx";
import { CharacterDetailsPage } from "./Pages/CharacterDetailsPage.jsx";
import { EventsDetailsPage } from "./Pages/EventsDetailsPage.jsx";
import { NavBar } from "./Components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route
          path="/charactersdetail/:name"
          element={<CharacterDetailsPage />}
        />
        <Route path="/eventsdetail/:name" element={<EventsDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;