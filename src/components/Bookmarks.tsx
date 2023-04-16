import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import QuoteCard from "./quoteCard";
import ToastNotifications from "./ToastNotifications";

function Bookmarks(): JSX.Element {
  const [loading, setLoading] = useState(false);
  type idType = string;
  async function fetchBookmarkedQuote(props: idType): Promise<JSX.Element> {
    const response = await axios.get("https://api.quotable.io/quotes/" + props);
    response.data.bookmarked = true;
    return <QuoteCard key={response.data._id} quote={response.data} />;
  }

  const [bookmarkedQuotes, setBookmarkedQuotes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let bookmark_ids: Array<string> = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    setLoading(true);
    Promise.all(
      bookmark_ids.map((bookmark_id) => fetchBookmarkedQuote(bookmark_id))
    )
      .then((results) => {
        setBookmarkedQuotes(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-bg-100 min-h-screen ">
      <Navbar />
      {loading ? <ToastNotifications context="Loading" /> : bookmarkedQuotes}
      <div className="pt-5"></div>
    </div>
  );
}

export default Bookmarks;
