import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import QuoteCard from "./quoteCard";

function Bookmarks(): JSX.Element {
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

    Promise.all(
      bookmark_ids.map((bookmark_id) => fetchBookmarkedQuote(bookmark_id))
    )
      .then((results) => {
        setBookmarkedQuotes(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-bg-100 min-h-screen ">
      <Navbar />
      {bookmarkedQuotes}
    </div>
  );
}

export default Bookmarks;
