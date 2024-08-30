import "./SingleProperty.css";
import Hero from "../components/Hero/Hero";
import Deal from "../components/Deal/Deal";
import FeatureInfo from "../components/FeatureInfo/FeatureInfo";
import Accordion from "../components/Accordion/Accordion";
import SingleProp from "../components/SingleProp/SingleProp";
function SingleProperty() {
  return (
    <div className="content_Single">
      <Hero
        img={"images/page-heading-bg.jpg"}
        title={"SINGLE PROPERTY"}
        path={"HOME / SINGLE PROPERTY"}
      />
      <div className="container">
         <div className="middle_Single_Prop">
         <div className="left_Single_prop">
          <SingleProp />
          <Accordion />
        </div>
          <div className="features">
            <FeatureInfo
              img={"/images/info-icon-01.png"}
              header={"450 m2"}
              paragraph={"Total Flat Space"}
            />
            <hr className="h2" />
            <FeatureInfo
              img={"/images/info-icon-02.png"}
              header={"Contract"}
              paragraph={"contract Ready "}
            />
            <hr className="h2" />
            <div className="fix1">
            <FeatureInfo
              img={"/images/info-icon-03.png"}
              header={"Payment"}
              paragraph={"payment"}
            />
            </div>
            <hr className="h2" />
            <div className="fix2">
            <FeatureInfo
              img={"/images/info-icon-04.png"}
              header={"Safety"}
              paragraph={"24/7 Under"}
            />
            </div>
          </div>
         </div>
      </div>
         <Deal/>
    </div>
  );
}

export default SingleProperty;
