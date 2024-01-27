import React, { useEffect, useState } from "react";

import Loading from "../../utils/Loading/Loading";
import { apiV1 } from "../../API/apiList";
import { onAuthenticated } from "../../API/Axios";

import style from "./emailInquery.module.scss";
import moment from "moment";

const EmailInquery = () => {
  const [emailData, setEmailData] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    async function getEmail() {
      setPageLoading(true);
      const payload = {
        url: `${apiV1}/inquery`,
        method: "get",
      };
      await onAuthenticated(payload)
        .then((apiRes) => {
          setEmailData(apiRes.data);
          console.log(apiRes.data);
          setPageLoading(false);
        })
        .catch((err) => {
          setPageLoading(false);
          console.log(err);
        });
    }

    if (!emailData) {
      getEmail();
    }
  }, []);

  return (
    <div className={style.emailInqueryContainer}>
      {pageLoading ? (
        <Loading />
      ) : (
        <div className={style.container}>
          <h2>Email Inquires</h2>
          <ul className={style.responsiveTable}>
            <li className={style.tableHeader}>
              <div className={`${style.col} ${style.col1}`}>Date</div>
              <div className={`${style.col} ${style.col2}`}>Name</div>
              <div className={`${style.col} ${style.col3}`}>Email</div>
              <div className={`${style.col} ${style.col4}`}>Phone</div>
              <div className={`${style.col} ${style.col5}`}>Message</div>
            </li>
            {Array.isArray(emailData) &&
              emailData.map((m) => (
                <li className={style.tableRow} key={m._id}>
                  <div
                    className={`${style.col} ${style.col1}`}
                    data-label="Job Id"
                  >
                    {moment(m.date).format("MM DD YYYY, h:mm:ss a")}
                  </div>
                  <div
                    className={`${style.col} ${style.col2}`}
                    data-label="Customer Name"
                  >
                    {m.name}
                  </div>
                  <div
                    className={`${style.col} ${style.col3}`}
                    data-label="Amount"
                  >
                    {m.email}
                  </div>
                  <div
                    className={`${style.col} ${style.col4}`}
                    data-label="Payment Status"
                  >
                    {m.phone}
                  </div>
                  <div
                    className={`${style.col} ${style.col5}`}
                    data-label="Payment Status"
                  >
                    {m.message}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmailInquery;
