import Link from "@docusaurus/Link";
import React from "react";

import Adyen from "../../static/img/apps/adyen.svg";
import ProductFeed from "../../static/img/apps/app-products-feed.svg";
import Avatax from "../../static/img/apps/avatax.svg";
import CMS from "../../static/img/apps/cms-hub.svg";
import Notification from "../../static/img/apps/notification-hub.svg";
import Search from "../../static/img/apps/search-hub.svg";
import Segment from "../../static/img/apps/segment.svg";
import s from "./apps.module.css";

const Shell = ({ color, title, children, href = "" }) => {
  return (
    <Link
      className={`${s.app} arrow-pointer`}
      href={href}
      style={{ "--hover-color": color }}
    >
      <div className={s.shell}>{children}</div>
      <span>{title}</span>
    </Link>
  );
};

const Apps = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Shell
          color={"rgb(10, 191, 83)"}
          title={"Adyen"}
          href={"developer/app-store/apps/adyen/overview"}
        >
          <Adyen />
        </Shell>
        <Shell
          color={"rgb(223, 110, 44)"}
          title={"AvaTax"}
          href={"developer/app-store/apps/avatax/overview"}
        >
          <Avatax />
        </Shell>
        <Shell
          color={"rgb(39, 180, 118)"}
          title={"CMS"}
          href={"developer/app-store/apps/cms"}
        >
          <CMS />
        </Shell>
        {/*missing docs*/}
        {/*<Shell color={"rgb(58, 86, 199)"} title={"Klaviyo"}>*/}
        {/*  <Placeholder />*/}
        {/*</Shell>{" "}*/}

        <Shell
          color={"rgb(122, 150, 176)"}
          title={"Product Feed"}
          href={"developer/app-store/apps/product-feed"}
        >
          <ProductFeed />
        </Shell>
        <Shell
          color={"rgb(199, 58, 63)"}
          title={"Search"}
          href={"developer/app-store/apps/search"}
        >
          <Search />
        </Shell>

        {/*missing docs*/}
        {/*<Shell color={"rgb(95, 58, 199)"} title={"Slack"}>*/}
        {/*  <Placeholder />*/}
        {/*</Shell>*/}

        <Shell
          color={"rgb(199, 159, 58)"}
          title={"SMTP"}
          href={"developer/app-store/apps/smtp/overview"}
        >
          <Notification />
        </Shell>

        <Shell
          color={"rgb(82, 189, 148)"}
          title={"Twilio Segment"}
          href={"developer/app-store/apps/segment/overview"}
        >
          <Segment />
        </Shell>

        {/*missing docs*/}
        {/*<Shell color={"rgb(99, 91, 255)"} title={"Stipe"}>*/}
        {/*  <Stripe />*/}
        {/*</Shell>*/}

        {/*missing docs*/}
        {/*<Shell color={"rgb(86, 189, 104)"} title={"Taxjar"}>*/}
        {/*  <TaxJar />*/}
        {/*</Shell>*/}
      </div>
    </div>
  );
};

export default Apps;
