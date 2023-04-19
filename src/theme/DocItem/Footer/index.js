import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import Feedback from "@site/components/Feedback";

export default function FooterWrapper(props) {
  return (
    <>
      <Feedback />
      <Footer {...props} />
    </>
  );
}
