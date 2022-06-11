import './App.css';
import {createContext} from "react";
import Header from "./components/Header";
import useApi from "./hook/useApi";
import Main from "./components/Main";

export const currencyContext = createContext({});

function App() {
    const {UAH_EUR, EUR_UAH, USD_UAH, UAH_USD, EUR_USD, USD_EUR, error,loading} = useApi();

    if(error) return <div>Error {error}</div>
    if(loading) return <div>Loading...</div>

  return (
      <currencyContext.Provider value={{UAH_EUR, EUR_UAH, USD_UAH, UAH_USD, EUR_USD, USD_EUR}}>
         <div>
             <Header/>
             <Main/>
         </div>
      </currencyContext.Provider>
  );
}

export default App;
