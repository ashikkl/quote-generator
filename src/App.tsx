import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"; //@ts-ignore
import { setQuote } from "./store/quoteSlice";
import "./App.css";
import QuoteCard from "./components/quoteCard";
import { Navbar } from "./components/Navbar";
import ToastNotifications from "./components/ToastNotifications";
import TagsMenu from "./components/TagsDropdownMenu";

function App() {//@ts-ignore
  const quote = useSelector((state) => state.quote.quote);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote(selectedTag:string='') {
    setLoading(true);
    let url = "https://api.quotable.io/random";
    if (selectedTag.length > 0) {
      url += `?tags=${selectedTag}`;
    }
    const response = await axios.get(url);
    response.data.bookmarked = false;
    
    dispatch(setQuote(response.data));
    setLoading(false);
  }

  function handleGenerateQuote(tag:string) {
    fetchRandomQuote(tag);
  }

  function handleTagSelect(tag:string) {
    setSelectedTag(tag);
  }

  return (
    <div className="bg-bg-100">
      <Navbar />
      <div className="min-h-screen flex items-center flex-col justify-center">
        {loading ? (
          <ToastNotifications context="Loading" />
        ) : (
          <div className="flex-start">
            <QuoteCard key={quote._id} quote={quote} />
          </div>
        )}
        <div className="flex space-x-16">
          <TagsMenu
            onTagSelect={
              handleTagSelect
            }
          />
          <button
            onClick={() => {
              handleGenerateQuote(selectedTag);
            }}
            className="bg-primary-200 rounded-full hover:bg-primary-300 pl-3 pr-3 pt-1 pb-1 text-center text-sm text-text-100 hover:text-bg-300"
          >
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
