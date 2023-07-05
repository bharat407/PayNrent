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
                    <div id="offer" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <img
                        src="/assets/banner_sanitised_04-min.jpg"
                        style={{ borderRadius: 20, width: 350, height: 190 }}
                      />

                      <img
                        src="/assets/banner_sanitised_01-min.jpg"
                        style={{
                          paddingLeft: 10,
                          borderRadius: 20,
                          width: 350,
                          height: 190,
                        }}
                      />

                      <img
                        src="/assets/banner_sanitised_02-min.jpg"
                        style={{
                          paddingLeft: 10,
                          borderRadius: 20,
                          width: 350,
                          height: 190,
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
        <div className={classes.heading}>Sanitized & safe cars</div>
        <div className={classes.citiesContainer}>{displayData()}</div>
      </div>
    </div>
  );
};

export default Cities;
