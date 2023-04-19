import React, { useEffect } from "react";
import SearchBar from "@theme-original/SearchBar";
import AskAI from "@site/components/AskAI";
import { useColorMode } from "@docusaurus/theme-common";

const useRadixTheme = () => {
  const { colorMode } = useColorMode();

  //Radix color variables require a class on the root element
  useEffect(() => {
    //Add classes for radix color variables
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [colorMode]);
};
export default function SearchBarWrapper(props) {
  useRadixTheme();
  return (
    <>
      <span style={{ display: "flex" }}>
        <AskAI />
        <SearchBar {...props} />
      </span>
    </>
  );
}
