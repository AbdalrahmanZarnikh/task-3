import "../../style.css";
import "./Featured.css";

import FeatureInfo from "../FeatureInfo/FeatureInfo";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import Accordion from "../Accordion/Accordion";

function Featured() {
  return (
    <div className="container">
      <div className="content_featured">
        <div className="images_featured">
          <img src="/images/featured.jpg" className="image_featured" alt="" />
          <div className="icon_featured">
            <img src="/images/featured-icon.png" alt="" />
          </div>
        </div>
        <div className="text_featured">
          <Title title="Featured" />
          <SubTitle subTitle="Best Appartment & Sea View" />
          <Accordion />
        </div>
        <div className="features">
          <FeatureInfo
            img={"/images/info-icon-01.png"}
            header={"250 m2"}
            paragraph={"Total Flat Space"}
          />
          <hr className="h2" />
          <FeatureInfo
            img={"/images/info-icon-02.png"}
            header={"Contract"}
            paragraph={"contract Ready "}
          />
          <hr className="h2" />
          <FeatureInfo
            img={"/images/info-icon-03.png"}
            header={"Payment"}
            paragraph={"payment"}
            underImage={"Process"}
          />
          <hr className="h2" />
          <div className="fix2">
            <FeatureInfo
              img={"/images/info-icon-04.png"}
              header={"Safety"}
              paragraph={"24/7 Under"}
              underImage={"Control"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
