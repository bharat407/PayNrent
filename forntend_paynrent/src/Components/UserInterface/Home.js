import Header from "./MyComponents/Header";
import SearchComponent from "./MyComponents/SearchComponent";
import FeaturedComponent from "./MyComponents/FeaturedComponent";
import OfferComponent from "./MyComponents/OfferComponent";
import WhyComponent from "./MyComponents/WhyComponent";
import Cities from "./MyComponents/Cities";
import { Faq } from "./MyComponents/Faq"; 
import Ourinvestors from "./MyComponents/Ourinvestor";
import { Ourjourney } from "./MyComponents/Ourjourney";
import PlayStore from "./MyComponents/PlayStore";
import Footer from "./MyComponents/Footer";
import Happy from "./MyComponents/Happy";
import Customer from "./MyComponents/Customer";
import { getData } from "../Services/FetchNodeServices";
import { useEffect, useState } from "react";
export default function Home(props) {
  const [features, setFeatures] = useState([]);

  const getAllFeature = async () => {
    var result = await getData("user/all_feature");
    console.log("REsssssssult:", result);
    setFeatures(result.data);
  };

  useEffect(function () {
    getAllFeature();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#dfe6e9",
      }}
    >
      <Header />
      <div>
        <SearchComponent />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "90%", marginTop: 40 }}>
          <FeaturedComponent title="Featured" images={features} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "90%" }}>
          <Happy title="Happy" />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "90%" }}>
          <OfferComponent title="Offers" />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "90%" }}>
          <WhyComponent title="Why Us?" />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "90%" }}>
          <Faq />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "90%" }}>
          <Customer title="Customer" />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <div style={{ width: "90%" }}>
          <PlayStore />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <div style={{ width: "90%" }}>
          <Ourjourney />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <div style={{ width: "90%" }}>
          <Ourinvestors />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "90%" }}>
          <Cities />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <div style={{ width: "90%" }}>
          <Footer />
        </div>
      </div>
      <br></br>
    </div>
  );
}
