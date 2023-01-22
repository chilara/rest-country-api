import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import CountryContainer from "./components/CountryContainer";
import { CircularProgress } from "@mui/material";

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("https://restcountries.com/v3.1/all");
        console.log(response.data);
        // setLoading(false);
      } catch (error) {
        alert("an error occurred");
        // setLoading(false);
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
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
          <CountryContainer />
        </div>
      )}
    </>
  );
}

export default App;
