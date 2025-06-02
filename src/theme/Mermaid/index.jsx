/**
 * Custom implementation of the Mermaid component that adds a full-screen modal
 * when the diagram is clicked.
 */

import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { ErrorBoundaryErrorMessageFallback } from "@docusaurus/theme-common";
import {
  MermaidContainerClassName,
  useMermaidRenderResult,
} from "@docusaurus/theme-mermaid/client";
import React, { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

// Modal component for displaying the diagram in full screen
function MermaidModal({ isOpen, onClose, svg, bindFunctions }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current && bindFunctions) {
      bindFunctions(modalRef.current);
    }

    // Add keyboard event listener to close modal on Escape key press
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, bindFunctions, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div
          ref={modalRef}
          className={styles.modalSvgContainer}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </div>
  );
}

function MermaidRenderResult({ renderResult }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !renderResult?.bindFunctions) return;

    const div = ref.current;
    renderResult.bindFunctions(div);
  }, [renderResult]);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.wrapper} onClick={handleClick}>
        <div
          ref={ref}
          className={`${MermaidContainerClassName} ${styles.container}`}
          dangerouslySetInnerHTML={{ __html: renderResult.svg }}
        />
        <div className={styles.clickMessage}>Click to view fullscreen</div>
      </div>
      <MermaidModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        svg={renderResult.svg}
        bindFunctions={renderResult.bindFunctions}
      />
    </>
  );
}

function MermaidRenderer({ value }) {
  const renderResult = useMermaidRenderResult({ text: value });

  if (renderResult === null) {
    return null;
  }
  return <MermaidRenderResult renderResult={renderResult} />;
}

export default function Mermaid(props) {
  return (
    <ErrorBoundary
      fallback={(params) => <ErrorBoundaryErrorMessageFallback {...params} />}
    >
      <MermaidRenderer {...props} />
    </ErrorBoundary>
  );
}
