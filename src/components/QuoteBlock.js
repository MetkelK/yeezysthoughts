import React from "react";

const QuoteBlock = (props) => {
  return (
    <blockquote>
      <p>{props.quote}</p>
      <footer>
        <cite>- Yeezy</cite>
      </footer>
    </blockquote>
  );
};

export default QuoteBlock;
