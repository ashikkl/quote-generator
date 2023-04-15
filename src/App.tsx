import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setQuote } from './store/quoteSlice';
import './App.css'

function App() {

  const quote = useSelector((state:any) => state.quote.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    const response = await axios.get('https://api.quotable.io/random');
    dispatch(setQuote(response.data.content));
  }

  function handleGenerateQuote() {
    fetchRandomQuote();
  }

  return (
    <div className="bg-slate-200 ">
      <nav className="bg-red-800 text-lg pt-5 pb-3 pl-3 text-slate-100">
        <h1 className="">Quotably</h1>
      </nav>
      <div className="min-h-screen flex items-center flex-col justify-center">
        <p>{quote}</p>
        <button onClick={handleGenerateQuote} className="bg-red-500 text-slate-200">
          Generate Quote
        </button>
      </div>
    </div>
  );
}


export default App
