import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import CountryContainer from "./components/CountryContainer";
import { CircularProgress } from "@mui/material";

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const base = "https://restcountries.com/v3.1/all";
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${base}`);
        setApiResponse(response.data);
      } catch (error) {
        alert("an error occurred/modal");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className="App">
          <CountryContainer responseData={apiResponse} />
        </div>
      )}
    </div>
  );
}

export default App;
