import "./ContactUs.css";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import SubTitle from "../components/SubTitle/SubTitle";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Form from "../components/Form/Form";

function ContactUs() {
  return (
    <div className="content_conatct_page">
   
      <Hero
        img={"images/page-heading-bg.jpg"}
        path={"HOME / CONTACT US"}
        title={"CONTACT US"}
      />
      <div className="container">
        <div className="middle">
          <div className="left_middle">
            <Title title={"contact us"} />
            <SubTitle subTitle={"Get In Touch With Our Agents"} />
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium nesciunt in sequi totam? Ab deserunt, unde provident,
              libero corporis deleniti ducimus minima id aliquid inventore
              doloremque, blanditiis at dignissimos harum.
            </p>
            <div className="info1">
              <ContactInfo
                className="test"
                image="images/phone-icon.png"
                text1="010-020-0340"
                text2="Phone Number"
              />
            </div>
            <div className="info2">
              <ContactInfo
                image="images/email-icon.png"
                text1="info@villa.co"
                text2="Buisness Email"
              />
            </div>
          </div>
          <div className="right_middle">
            <Form />
          </div>
        </div>
        <iframe
          className="map"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103885.2875067226!2d35.63612179696933!3d35.54344583290378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ac2d61d4607d%3A0x8e325bf8a14195de!2sLatakia%2C%20Syria!5e0!3m2!1sen!2snl!4v1724134357945!5m2!1sen!2snl"
        />
      </div>
    
    </div>
  );
}

export default ContactUs;
