import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";//@ts-ignore
import { setQuote } from "./store/quoteSlice";
import "./App.css";
import QuoteCard from "./components/quoteCard";
import {Navbar} from "./components/Navbar";
import ToastNotifications from "./components/ToastNotifications";

function App() {
  const quote = useSelector((state: any) => state.quote.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    <ToastNotifications context="Loading"/>
    const response = await axios.get("https://api.quotable.io/random");
    dispatch(setQuote(response.data));
  }

  function handleGenerateQuote() {
    fetchRandomQuote();
  }

  return (
    <div className="bg-bg-100 ">
      <Navbar />
      <div className=" min-h-screen flex items-center flex-col justify-center">
        <QuoteCard quote={quote} />
        <button
          onClick={handleGenerateQuote}
          className="bg-primary-200 rounded-full md:hover:bg-primary-200 hover:bg-primary-300 pl-3 pr-3 pt-1 pb-1  text-center text-sm text-text-100 hover:text-bg-300"
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}

export default App;
