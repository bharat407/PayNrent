import React, { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../Services/FetchNodeServices";
import { useStyles } from "./HappCss";
const Cities = () => {
  const classes = useStyles();

  const [sanatize, setSanatize] = useState([]);

  const getCities = async () => {
    const result = await getData("user/display_all_sanatize");
    setSanatize(result.data);
  };
  useEffect(function () {
    getCities();
  }, []);

  const displayData = () => {
    return sanatize.map((item, index) => {
      return (
        <div key={item.sanatizeid}>
          <div className={classes.citiesCol} key={item.id}>
            <ul className={classes.mainList}>
              <li className={classes.subList}>
                <span className={classes.item}>
                  <a className={classes.hover}>
                    {/* Sanitized & safe cars{" "} */}
                    <div style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <img
                        src="/assets/a.jpg"
                        style={{
                          paddingLeft: 10,
                          paddingRight: 10,
                          borderRadius: 20,
                          width: 320,
                          height: 300,
                        }}
                      />
                      <img
                        src="/assets/b.jpg"
                        style={{
                          paddingLeft: 30,
                          paddingRight: 10,
                          borderRadius: 20,
                          width: 320,
                          height: 300,
                        }}
                      />
                      <img
                        src="/assets/c.jpg"
                        style={{
                          paddingLeft: 30,
                          borderRadius: 20,
                          paddingRight: 10,
                          width: 320,
                          height: 300,
                        }}
                      />
                    </div>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.subContainer}>
        <div className={classes.heading}>Happy Customer's</div>
        <div className={classes.citiesContainer}>{displayData()}</div>
      </div>
    </div>
  );
};

export default Cities;
