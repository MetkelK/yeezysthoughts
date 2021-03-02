import React from "react";
import QuoteBlock from "./QuoteBlock";

const QuotePage = (props) => {
  const { quote, isLoaded, isLoading } = props.quote;
  const { handleClick } = props;

  let quoteDisplay;

  if (!isLoaded) {
    quoteDisplay = <QuoteBlock quote={"Sorry, I can't think right now"} />;
  } else {
    quoteDisplay = <QuoteBlock quote={quote} />;
  }

  let loadingQuote;

  if (!isLoading) {
    loadingQuote = "Read My Thoughts";
  } else {
    loadingQuote = "Hold on I'm thinking";
  }

  return (
    <div className="quote">
      {quoteDisplay}
      <button
        className="button"
        onClick={handleClick}
        disabled={isLoading ? true : false}
      >
        {loadingQuote}
      </button>
    </div>
  );
};

export default QuotePage;
