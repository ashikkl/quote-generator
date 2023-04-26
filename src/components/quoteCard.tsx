import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type QuoteCardProps = {
  quote: {
    _id: string;
    content: string;
    author: string;
    bookmarked: boolean;
  };
  update?: Function;
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
  const [bookmarkStatus, setBookmarkStatus] = React.useState(
    props.quote.bookmarked
  );
  const [update, setUpdate] = React.useState(true);
  function bookmarker(id: string): void {
    if (typeof props.update !== "undefined") {
      setUpdate(!update);
      props.update(update);
    }

    let bookmark_ids: Array<string> = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );
    if (!bookmark_ids.includes(id)) {
      bookmark_ids.push(id);
      setBookmarkStatus(true);
    } else {
      bookmark_ids = bookmark_ids.filter((item) => item !== id);
      setBookmarkStatus(false);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmark_ids));
  }

  return (
    <AnimatePresence>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        style={{ marginLeft: "10%", marginRight: "10%" }}
        className="p-8 mb-5 flex-col items-center flex flex-wrap text-text-100 bg-bg-300 rounded-md max-w-5/6 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
      >
        <p>{props.quote.content}</p>
        <span className="flex flex-row w-full items-center ">
          <p className="basis-10/12 flex justify-around ">
            ~ {props.quote.author}
          </p>
          <span
            className="basis-2/12 flex justify-around pt-5 "
            onClick={() => {
              bookmarker(props.quote._id);
            }}
          >
            {(bookmarkStatus && bookmark.filled) || bookmark.normal}
          </span>
        </span>
      </motion.div>
    </AnimatePresence>
  );
}

export default QuoteCard;
