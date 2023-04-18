import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuoteCard from "../components/quoteCard";
import ToastNotifications from "../components/ToastNotifications";

function Bookmarks(): JSX.Element {
  const [loading, setLoading] = useState(false);
  type idType = string;
  async function fetchBookmarkedQuote(props: idType): Promise<JSX.Element> {
    const response = await axios.get("https://api.quotable.io/quotes/" + props);
    response.data.bookmarked = true;
    return (
      <QuoteCard
        key={response.data._id}
        quote={response.data}
        update={updater}
      />
    );
  }
  const [update, setUpdate] = useState(true);
  function updater(update: boolean) {
    setUpdate(update);
  }
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setLoading(update);
    let bookmark_ids: Array<string> = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    Promise.all(
      bookmark_ids.map((bookmark_id) => fetchBookmarkedQuote(bookmark_id))
    )
      .then((results) => {
        setBookmarkedQuotes(results);
        setUpdate(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

  return (
    <div className="bg-bg-100 min-h-screen flex flex-col ">
      <Navbar />
      {loading ? <ToastNotifications context="Loading" /> : ""}
      {<div className="flex-start">{bookmarkedQuotes}</div>}
      <div className="pt-5"></div>
    </div>
  );
}

export default Bookmarks;
