import React, { Children } from "react";

import styles from "./styles.module.css";

const Guide = ({ children }) => {
  const childrenWithProps = Children.map(children, (child, index) =>
    React.cloneElement(child, { number: index + 1 }),
  );

  return <div className={styles.root}>{childrenWithProps}</div>;
};

const Step = ({ children, number }) => {
  return (
    <div className={styles.step}>
      <div className={styles.connection}>
        <div className={styles.stepNumber}>{number}</div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.stepSection}>{children}</div>
    </div>
  );
};

const Details = ({ children }) => {
  return <div className={styles.details}>{children}</div>;
};

const Code = ({ children }) => {
  return <div className={styles.code}>{children}</div>;
};

const Column = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};

Guide.Step = Step;
Guide.Details = Details;
Guide.Code = Code;
Guide.Column = Column;

export default Guide;
