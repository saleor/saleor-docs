import useIsBrowser from "@docusaurus/useIsBrowser";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.css";

const Feedback = () => {
  const isBrowser = useIsBrowser();
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [id, setId] = useState(null);

  const submit = () => {
    if (isBrowser && window.analytics) {
      window.analytics.track(feedback, {
        pathname: window.location.pathname,
        title: document.title,
        feedback: `feedback_${feedback}`,
        message,
        uuid: id,
      });
    }

    setFeedback("");
    setMessage("");
    setSent(true);
  };

  const formQuestion = () => {
    return feedback === "positive"
      ? "What was most helpful?"
      : "What can we improve?";
  };

  useEffect(() => {
    if (!id) {
      setId(uuid());
    }
  }, [id]);

  return (
    <>
      <hr className="docusaurus-mt-lg" />

      {feedback === "" && !sent && (
        <div className="row">
          <div className="col">
            <span className="padding-right--lg">Was this page helpful?</span>
            <span className={styles.buttons}>
              <button
                onClick={() => setFeedback("positive")}
                className="button button--primary button--sm margin-right--md"
              >
                Yes
              </button>
              <button
                onClick={() => setFeedback("negative")}
                className="button button--primary button--sm margin-right--md"
              >
                No
              </button>
            </span>
          </div>
        </div>
      )}

      {feedback !== "" && !sent && (
        <div className="row">
          <div className="col">
            <div>{formQuestion()}</div>
            <textarea
              className={styles.message}
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              autoFocus
            ></textarea>
            <div>
              <button
                className="button button--primary button--sm margin-right--md"
                onClick={submit}
              >
                Submit
              </button>
              <button
                className="button button--link button--sm"
                onClick={() => setFeedback("")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {sent && <strong>Thank you for your feedback!</strong>}

      <hr />
    </>
  );
};

export default Feedback;
