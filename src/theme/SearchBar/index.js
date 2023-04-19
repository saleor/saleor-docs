import React from "react";
import SearchBar from "@theme-original/SearchBar";
import AskAI from "@site/components/AskAI";
export default function SearchBarWrapper(props) {
  return (
    <>
      <span style={{ display: "flex" }}>
        <AskAI />
        <SearchBar {...props} />
      </span>
    </>
  );
}
