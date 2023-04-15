import React from "react";

type QuoteCardProps = {
  quote: {
    _id: string;
    content: string;
    author: string;
    bookmarked:boolean;
  };
};

function QuoteCard(props: QuoteCardProps) {
  const bookmark = {
    normal: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-bookmark"
        viewBox="0 0 16 16"
      >
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </svg>
    ),
    filled: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-bookmark-check-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
        />
      </svg>
    ),
  };
const [bookmarkStatus, setBookmarkStatus] = React.useState(props.quote.bookmarked);
  function bookmarker(id: string): void {
    let bookmark_ids: Array<string> = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    if (!bookmark_ids.includes(id)) {
      bookmark_ids.push(id);
      setBookmarkStatus(true);
    }
    else {
      bookmark_ids = bookmark_ids.filter((item) => item !== id);
      setBookmarkStatus(false)
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmark_ids));
  }

  return (
    <div className="p-8 flex-col items-center flex flex-wrap bg-red-200 rounded-md">
      <p>{props.quote.content}</p>
      <span className="flex flex-row items-center">
        <p className="l-0">~ {props.quote.author}</p>
        <span
          className="r-0"
          onClick={() =>{bookmarker(props.quote._id);}}
        >
          {bookmarkStatus&&bookmark.filled || bookmark.normal}
        </span>
      </span>
    </div>
  );
}

export default QuoteCard;
