import { useColorMode } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import Giscus from "@giscus/react";
import Paginator from "@theme-original/DocItem/Paginator";
import React from "react";

export default function PaginatorWrapper(props) {
  const { colorMode } = useColorMode();
  const { metadata } = useDoc();

  const { frontMatter } = metadata;
  const { disableComments } = frontMatter;

  return (
    <>
      <Paginator {...props} />
      {!disableComments && (
        <div className="docusaurus-mt-lg">
          <Giscus
            repo="saleor/saleor-docs"
            repoId="MDEwOlJlcG9zaXRvcnkxOTM3MjgyODc="
            category="General"
            categoryId="DIC_kwDOC4wPH84CU6ci"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="en"
            loading="lazy"
            crossorigin="anonymous"
            async
          />
        </div>
      )}
    </>
  );
}
