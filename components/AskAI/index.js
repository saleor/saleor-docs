import useIsBrowser from "@docusaurus/useIsBrowser";
import { Markprompt } from "markprompt";
import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.css";

const AskAI = () => {
  const isBrowser = useIsBrowser();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const handleEsc = useCallback((event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    if (!id) {
      setId(uuid());
    }

    document.addEventListener("keydown", handleEsc, false);

    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, [handleEsc, id]);

  const handleOpenModal = () => {
    setShowModal(true);

    if (isBrowser && window.analytics) {
      window.analytics.track("AskAI", {
        pathname: window.location.pathname,
        title: document.title,
        uuid: id,
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleOpenModal}
        type="button"
        className="DocSearch DocSearch-Button"
        aria-label="Ask AI"
      >
        <span className="DocSearch-Button-Container">
          <svg
            className="DocSearch-Search-Icon"
            viewBox="0 0 512 512"
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            fill="currentColor"
          >
            <path
              d="M474.123 209.81c11.525-34.577 7.569-72.423-10.838-103.904-27.696-48.168-83.433-72.94-137.794-61.414a127.14 127.14 0 00-95.475-42.49c-55.564 0-104.936 35.781-122.139 88.593-35.781 7.397-66.574 29.76-84.637 61.414-27.868 48.167-21.503 108.72 15.826 150.007-11.525 34.578-7.569 72.424 10.838 103.733 27.696 48.34 83.433 73.111 137.966 61.585 24.084 27.18 58.833 42.835 95.303 42.663 55.564 0 104.936-35.782 122.139-88.594 35.782-7.397 66.574-29.76 84.465-61.413 28.04-48.168 21.676-108.722-15.654-150.008v-.172zm-39.567-87.218c11.01 19.267 15.139 41.803 11.354 63.65-.688-.516-2.064-1.204-2.924-1.72l-101.152-58.49a16.965 16.965 0 00-16.687 0L206.621 194.5v-50.232l97.883-56.597c45.587-26.32 103.732-10.666 130.052 34.921zm-227.935 104.42l49.888-28.9 49.887 28.9v57.63l-49.887 28.9-49.888-28.9v-57.63zm23.223-191.81c22.364 0 43.867 7.742 61.07 22.02-.688.344-2.064 1.204-3.097 1.72L186.666 117.26c-5.161 2.925-8.258 8.43-8.258 14.45v136.934l-43.523-25.116V130.333c0-52.64 42.491-95.13 95.131-95.302l-.172.172zM52.14 168.697c11.182-19.268 28.557-34.062 49.544-41.803V247.14c0 6.02 3.097 11.354 8.258 14.45l118.354 68.295-43.695 25.288-97.711-56.425c-45.415-26.32-61.07-84.465-34.75-130.052zm26.665 220.71c-11.182-19.095-15.139-41.802-11.354-63.65.688.516 2.064 1.204 2.924 1.72l101.152 58.49a16.965 16.965 0 0016.687 0l118.354-68.467v50.232l-97.883 56.425c-45.587 26.148-103.732 10.665-130.052-34.75h.172zm204.54 87.39c-22.192 0-43.867-7.741-60.898-22.02a62.439 62.439 0 003.097-1.72l101.152-58.317c5.16-2.924 8.429-8.43 8.257-14.45V243.527l43.523 25.116v113.022c0 52.64-42.663 95.303-95.131 95.303v-.172zM461.22 343.303c-11.182 19.267-28.729 34.061-49.544 41.63V264.687c0-6.021-3.097-11.526-8.257-14.45L284.893 181.77l43.523-25.116 97.883 56.424c45.587 26.32 61.07 84.466 34.75 130.053l.172.172z"
              fillRule="nonzero"
            />
          </svg>

          <span className="DocSearch-Button-Placeholder">Ask AI</span>
        </span>
      </button>

      {showModal && (
        <div className={"ai-modal " + styles.modal} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalPrompt}>
              <Markprompt
                placeholder="Ask me anything... eg. 'How to query products?'"
                projectKey="WNDN2YD8Z1HZwy5fOMVkUTzdL7pazDwN"
              />
            </div>

            <footer class="DocSearch-Footer">
              <ul class="DocSearch-Commands">
                <li>
                  <kbd class="DocSearch-Commands-Key">
                    <svg
                      width="15"
                      height="15"
                      aria-label="Enter key"
                      role="img"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                      >
                        <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path>
                      </g>
                    </svg>
                  </kbd>
                  <span class="DocSearch-Label">to select</span>
                </li>
                <li>
                  <kbd class="DocSearch-Commands-Key">
                    <svg
                      width="15"
                      height="15"
                      aria-label="Escape key"
                      role="img"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                      >
                        <path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path>
                      </g>
                    </svg>
                  </kbd>
                  <span class="DocSearch-Label">to close</span>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default AskAI;
