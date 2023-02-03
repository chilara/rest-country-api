import "./App.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CountryContainer from "./components/CountryContainer";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./redux/country/action";

function App({ loading, country, error, getCountries }) {
  useEffect(() => {
    getCountries();
    console.log("hhhhhhh");
  }, []);

  // const countryData = useSelector((state) => state.countryReducer);

  console.log(country, loading, getCountries);

  // const [apiResponse, setApiResponse] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const base = "https://restcountries.com/v2/all";
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await Axios.get(`${base}`);
  //       setApiResponse(response.data);
  //     } catch (error) {
  //       alert("an error occurred");
  //     } finally {
  //       setLoading(false);o
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>God is an OG!</div>

    // <div>
    //   {loading ? (
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         height: "100vh",
    //       }}
    //     >
    //       <CircularProgress size={50} />
    //     </div>
    //   ) : (
    //     <div className="App">
    //       <CountryContainer responseData={apiResponse} />
    //     </div>
    //   )}
    // </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.countryReducer.loading,
  country: state.countryReducer.country,
  error: state.countryReducer.error,
});
export default connect(mapStateToProps, { getCountries })(App);
