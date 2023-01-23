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
          <CountryContainer responseData={apiResponse} />
        </div>
      )}
    </>
  );
}

export default App;

// const list = [];
// list.map(item =>  (
//   <div>
//     {/* -------------------flag of country ------------------------*/}
//     <img src={item.flags.png} />

//     {/* -------------Name of country ----------------- */}
//     <p>{item.name.common}</p>

//     {/* --------------- region of country ------------------ */}
//     <p>{item.region}</p>

//     {/*----------------- Population of country -------------- */}
//     <p>{Number(item.population).toLocaleString()}</p>

//     {/* --------------- capital of country ------------------ */}
//     <p>{item.capital.map(item_ => (<span>{item_}</span>))}</p>
//   </div>
// ))
