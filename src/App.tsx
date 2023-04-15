import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";//@ts-ignore
import { setQuote } from "./store/quoteSlice";
import "./App.css";
import QuoteCard from "./components/quoteCard";
import {Navbar} from "./components/Navbar";

function App() {
  const quote = useSelector((state: any) => state.quote.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    const response = await axios.get("https://api.quotable.io/random");
    dispatch(setQuote(response.data));
  }

  function handleGenerateQuote() {
    fetchRandomQuote();
  }

  return (
    <div className="bg-slate-200 ">
      <Navbar />
      <div className=" min-h-screen flex items-center flex-col justify-center">
        <QuoteCard quote={quote} />
        <button
          onClick={handleGenerateQuote}
          className="bg-red-500 rounded-full hover:bg-red-300 p-1 text-center text-sm text-slate-200"
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}

export default App;
