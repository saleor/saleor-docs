import React, { useEffect } from "react";
import Footer from "@theme-original/DocItem/Footer";
import Feedback from "@site/components/Feedback";
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

export default function FooterWrapper(props) {
  //This hook can be added in any component that has access to the colorMode, at the time of writing this is the only ejected component
  useRadixTheme();
  return (
    <>
      <Feedback />
      <Footer {...props} />
    </>
  );
}
