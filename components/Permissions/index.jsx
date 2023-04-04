import React from "react";

import styles from "./styles.module.css";

const Permissions = ({ permissions = "" }) => {
  const permissionList = permissions.split(",");
  const prefix =
    permissionList.length > 1 ? "Required permissions: " : "Requires ";
  const suffix = permissionList.length > 1 ? "" : "permission";

  return (
    <div className={`margin-bottom--sm ` + styles.permissions}>
      <div className={styles.svg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
          />
        </svg>
      </div>

      <div className="margin-left--sm">
        <div>
          {prefix}
          {permissionList.map((permission, idx) => (
            <span key={idx} className="badge badge--danger margin-right--sm">
              {permission}
            </span>
          ))}
          {suffix}
        </div>
      </div>
    </div>
  );
};

export default Permissions;
