import React from "react";
import { useStyles } from "./HappCss";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { usePoofSocialLinkStyles } from "@mui-treasury/styles/socialLink/poof";
import { Box, Stack } from "@mui/system";
import { ImageOutlined } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <div>
        <div
          style={{
            textAlign: "center",

            marginTop: "3%",
          }}
        >
          <div
            style={{
              height: "auto",
              width: "96%",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 0px 10px -5px black",
            }}
          >
            <Stack
              sx={{ display: "flex", justifyContent: "space-around" }}
              direction={{ xs: "column", sm: "column", md: "row" }}
            >
              <Box
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0px 10px",
                }}
              >
                <Box sx={{ padding: "10px 0px", textAlign: "center" }}>
                  <div>
                    <img src="assets/logo4.png" width="200px" />
                  </div>
                </Box>
              </Box>
              <Box
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0px 10px",
                }}
              >
                <Box
                  sx={{
                    padding: "10px 0px",
                    textAlign: "center",
                    color: "#4D4D4D",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <Stack
                    spacing={2}
                    direction={{ md: "column", sm: "row", xs: "row" }}
                  >
                    <box style={{ cursor: "pointer" }}>
                      <a href="/home">HOME</a>
                    </box>
                    <box style={{ cursor: "pointer" }}>
                      <a href="#faq">FAQ'S</a>
                    </box>
                    <box style={{ cursor: "pointer" }}>
                      <a href="">SEARCH</a>
                    </box>
                    <box style={{ cursor: "pointer" }}>
                      <a href="#offer">OFFER'S</a>
                      {/* id="hey" */}
                    </box>
                  </Stack>
                </Box>
              </Box>
              <Box
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0px 10px",
                }}
              >
                <Box
                  sx={{
                    padding: "10px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <h3 style={{ lineHeight: 0.1 }}>Social</h3>
                  </Box>
                  <Box>
                    <SocialProvider useStyles={usePoofSocialLinkStyles}>
                      <SocialLink
                        href="https://bharat407.github.io/bharat1407/"
                        brand={"Dribbble"}
                      />
                      <SocialLink
                        href="https://www.linkedin.com/in/bharatkushwah407/"
                        brand={"LinkedIn"}
                      />
                      <SocialLink
                        href="https://www.instagram.com/bharatkushwah407/"
                        brand={"Instagram"}
                      />
                      <SocialLink
                        href="https://twitter.com/BharatK407"
                        brand={"Twitter"}
                      />
                      <SocialLink
                        href="https://github.com/bharat407"
                        brand={"GithubCircle"}
                      />
                    </SocialProvider>
                  </Box>
                  <h3 style={{ color: "#4D4D4D", lineHeight: 0.2 }}>
                    Download the PayNRent App!
                  </h3>

                  <Stack spacing={1} direction={{ xs: "column" }}>
                    <Box
                      sx={{
                        height: "50px",
                        width: "230px",
                        border: "1px solid #4D4D4D",
                        borderRadius: "5px",
                        display: "flex",
                      }}
                    >
                      <a>
                        <img
                          style={{ marginTop: 10, marginLeft: 10 }}
                          src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/playstore_google.webp"
                          width="25px"
                        />
                        Download <b>App Store</b>
                      </a>
                    </Box>

                    <Box
                      sx={{
                        height: "50px",
                        width: "230px",
                        border: "1px solid #4D4D4D",
                        borderRadius: "5px",
                        display: "flex",
                        alignContent: "center",
                      }}
                    >
                      <a>
                        <img
                          style={{ marginTop: 10, marginLeft: 10 }}
                          width="25px"
                          src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/appstore_apple.webp"
                        />
                        Download <b>Apple Store</b>
                      </a>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </div>
        </div>
        <br></br>
        <div>
          <h3
            style={{
              marginTop: 30,
              marginBottom: 30,
              textAlign: "left",
              lineHeight: 0.3,
              fontSize: "26px",
              color: "#7e8898",
            }}
          >
            Safe, Sanitized Car Subscription You Can Count On
          </h3>
          <p style={{ fontSize: "16px", textAlign: "left", color: "#7e8898" }}>
            Car subscription from PayNRent provides the flexibility of having a
            car anytime you want, as well as the assurance of a sanitized and
            virus free vehicle for your own self drive. The car sanitization
            process encompasses all the preventive hygiene best practices
            directed by the World Health Organization (WHO) and is diligently
            conducted for each vehicle delivered to the car subscribers. The
            safety measures that are implemented consist of:
          </p>
          <ul
            class="pa-list"
            style={{
              fontSize: "16px",
              alignItems: "inherit",
              color: "#7e8898",
            }}
          >
            <li>
              Industrial standards sanitization and disinfection before delivery
              for all surfaces of the vehicle
            </li>
            <li>
              Drivers wear Personal Protective Equipment (PPE) including masks
              and gloves while delivering the cars
            </li>
            <li>Paperless agreements for minimum contact</li>
            <li>Upon return, digital receipt sent to the customer’s e-mail.</li>
          </ul>
        </div>
        <div>
          <h3
            style={{
              marginTop: 30,
              marginBottom: 30,
              textAlign: "left",
              lineHeight: 0.3,
              fontSize: "26px",
              color: "#7e8898",
            }}
          >
            Why PayNrent
          </h3>
          <h3 style={{ color: "#7e8898" }}>
            When you choose a car{" "}
            <strong style={{ fontWeight: "bolder" }}>subscription</strong> with
            PayNrent, you can enjoy:
          </h3>
          <ul
            class="pa-list"
            style={{
              fontSize: "16px",
              alignItems: "inherit",
              color: "#7e8898",
            }}
          >
            <li>
              Flexible Rentals – You decide whether you’d like to rent a car for
              an hour, a week, a month, or on a daily basis.
            </li>
            <li>
              Several Options – Pick from our wide range of classy hatchbacks,
              comfortable sedans and spacious SUVs.
            </li>
            <li>
              All-India Permits – PayNrent cars come with an All India Tourist
              Permit, so you can drive from Kashmir to Kanyakumari without any
              worries.
            </li>
            <li>
              Unending Opportunities – The cars you rent from PayNrent can be
              used for trips out of the city or for daily travels through town.
              PayNrent also provides cars for pick up and drop off services at
              airports and bus and train stations.
            </li>
          </ul>
        </div>
        <div>
          <h3
            style={{
              marginTop: 30,
              marginBottom: 30,
              textAlign: "left",
              lineHeight: 0.3,
              fontSize: "26px",
              color: "#7e8898",
            }}
          >
            Rent a Car
          </h3>
          <h3 style={{ color: "#7e8898" }}>
            To rent one of our{" "}
            <strong style={{ fontWeight: "bolder" }}>sanitized</strong> cars,
            you can follow these simple steps:
          </h3>
          <ul
            class="pa-list"
            style={{
              fontSize: "16px",
              alignItems: "inherit",
              color: "#7e8898",
            }}
          >
            <li>
              Download the PayNrent app from the Apple App Store or Google Play
              Store.
            </li>
            <li>
              Pick your favourite car and let us know when and where you need
              it.
            </li>
            <li>
              The car will be delivered to your doorstep at the date and time
              promised.
            </li>
            <li>
              Start the engine and enjoy your road trip without worrying about
              the kilometres.
            </li>
            <li>
              Let us know where we need to pick up the car from once you’re
              done.
            </li>
            <li>
              You’ll receive an invoice in your email 48 hours after your trip
              is completed.
            </li>
            <li>Use the app to reschedule or cancel bookings as required.</li>
          </ul>
        </div>
        <a
          style={{
            fontSize: "16px",
            alignItems: "inherit",
            color: "#7e8898",
          }}
        >
          With Revv, exploring and travelling has become easy, convenient and
          completely hassle-free unlike in cabs & taxis!
        </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
