import React from "react";
import Adyen from "../../static/img/apps/adyen.svg";
import Taxes from "../../static/img/apps/app-taxes.svg";
import CMS from "../../static/img/apps/cms-hub.svg";
import CRM from "../../static/img/apps/app-crm.svg";
import Data from "../../static/img/apps/app-data-importer.svg";
import Invoices from "../../static/img/apps/app-invoices.svg";
import Placeholder from "../../static/img/apps/placeholder.svg";
import ProductFeed from "../../static/img/apps/app-products-feed.svg";
import Search from "../../static/img/apps/search-hub.svg";
import Segment from "../../static/img/apps/segment.svg";
import Notification from "../../static/img/apps/notification-hub.svg";
import Stripe from "../../static/img/apps/app-payment-stripe.svg";
import TaxJar from "../../static/img/apps/app-taxes.svg";

import s from "./apps.module.css";

const Shell = ({ color, title, children, href = "" }) => {
  return (
    <a
      className={`${s.app} arrow-pointer`}
      href={href}
      style={{ "--hover-color": color }}
    >
      <div className={s.shell}>{children}</div>
      <span>{title}</span>
    </a>
  );
};
const Apps = () => {
  return (
    <div className={s.container}>
      <Shell color={"rgb(10, 191, 83)"} title={"Adyen"}>
        <Adyen />
      </Shell>
      <Shell color={"rgb(223, 110, 44)"} title={"Avatax"}>
        <Taxes />
      </Shell>
      <Shell color={"rgb(39, 180, 118)"} title={"CMS"}>
        <CMS />
      </Shell>
      <Shell color={"rgb(137, 82, 255)"} title={"CRM"}>
        <CRM />
      </Shell>
      <Shell color={"rgb(59, 213, 121)"} title={"Data importer"}>
        <Data />
      </Shell>
      <Shell color={"rgb(227, 149, 60)"} title={"Invoices"}>
        <Invoices />
      </Shell>
      <Shell color={"rgb(58, 86, 199)"} title={"Klaviyo"}>
        <Placeholder />
      </Shell>{" "}
      <Shell color={"rgb(122, 150, 176)"} title={"Product Feed"}>
        <ProductFeed />
      </Shell>
      <Shell color={"rgb(199, 58, 63)"} title={"Search"}>
        <Search />
      </Shell>
      <Shell color={"rgb(37, 195, 101)"} title={"Twilio Segment"}>
        <Segment />
      </Shell>
      <Shell color={"rgb(95, 58, 199)"} title={"Slack"}>
        <Placeholder />
      </Shell>
      <Shell color={"rgb(199, 159, 58)"} title={"SMTP"}>
        <Notification />
      </Shell>
      <Shell color={"rgb(99, 91, 255)"} title={"Stipe"}>
        <Stripe />
      </Shell>
      <Shell color={"rgb(86, 189, 104)"} title={"Taxjar"}>
        <TaxJar />
      </Shell>
    </div>
  );
};

export default Apps;
