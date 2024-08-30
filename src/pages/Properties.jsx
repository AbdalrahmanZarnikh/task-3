import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import "./Properties.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef ,useEffect} from "react";

function Properties() {
  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const btn3 = useRef(null);
  const btn4 = useRef(null);
  const btns = [btn1, btn2, btn3, btn4];

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);
  const card6 = useRef(null);
  const cards=[card1,card2,card3,card4,card5,card6]


  useEffect(()=>{

    btns.forEach((ele)=>{
      ele.current.addEventListener("click",removeActive);
      ele.current.addEventListener("click",ManageCard);
    })
    
    function removeActive(){
      btns.forEach((ele)=>{
        ele.current.classList.remove("active_btn");
        this.classList.add("active_btn");
       })
    }

    function ManageCard(){
      cards.forEach((item)=>{
        item.current.style.display="none";
      })
      document.querySelectorAll(this.dataset.type).forEach((ele)=>{
        ele.style.display="block"
      })
    }


  },[])



  return (
    <div className="content_page_properties">
      <Hero
        img={"images/page-heading-bg.jpg"}
        path={"HOME / PROPERTIES"}
        title={"PROPERTIES"}
      />
      <div className="btns">
        <button className="active_btn" data-type=".all" ref={btn1}>
          Show All
        </button>
        <button data-type=".appartment" ref={btn2}>
          Appartment
        </button>
        <button data-type=".villa" ref={btn3}>
          Villa House
        </button>
        <button data-type=".penthouse" ref={btn4}>
          Penthouse
        </button>
      </div>
      <div className="container">
        <div className="cards" ref={cards}>
          <div ref={card1} className="all villa">
            <Card
              image="/images/property-01.jpg"
              NBedroom={"8"}
              NBathroom={"8"}
              area={"125"}
              floor={"3"}
              parking={"6 spots"}
              header={"18 New Street Miami, OR 97219"}
              text={"Luxury Villa"}
              price={"2.264.000"}
            />
          </div>
          <div className="all villa" ref={card2}>
            <Card
              image="/images/property-02.jpg"
              NBedroom={"6"}
              NBathroom={"5"}
              area={"450"}
              floor={"3"}
              parking={"8 spots"}
              header={"54 Mid Street Florida, OR 27001"}
              text={"Luxury Villa"}
              price={"1.180.000"}
            />
          </div>
          <div className="all villa" ref={card3}>
            <Card
              image="/images/property-03.jpg"
              NBedroom={"5"}
              NBathroom={"4"}
              area={"225"}
              floor={"3"}
              parking={"10 spots"}
              header={"26 Old Street Miami, OR 38540"}
              text={"Luxury Villa"}
              price={"1.460.000"}
            />
          </div>
          <div className="all appartment" ref={card4}>
            <Card
              image="/images/property-04.jpg"
              NBedroom={"4"}
              NBathroom={"3"}
              area={"125"}
              floor={"25th"}
              parking={"2 cars"}
              header={"12 New Street Miami, OR 12650"}
              text={"Appartment"}
              price={"584.500"}
            />
          </div>
          <div className="all penthouse" ref={card5}>
            <Card
              image="/images/property-05.jpg"
              NBedroom={"4"}
              NBathroom={"4"}
              area={"180"}
              floor={"38th"}
              parking={"2 cars"}
              header={"34 Beach Street Miami, OR 42680"}
              text={"Penthouse"}
              price={"925.600"}
            />
          </div>
          <div className="all penthouse" ref={card6}>
            <Card
              image="/images/property-06.jpg"
              NBedroom={"3"}
              NBathroom={"2"}
              area={"165"}
              floor={"26th"}
              parking={"3 cars"}
              header={"22 New Street Portland, OR 16540"}
              text={"Modern Condo"}
              price={"450.000"}
            />
          </div>
        </div>
        <div className="numbers">
          <a href="">1</a>
          <a href="" className="active_btn">
            2
          </a>
          <a href="">3</a>
          <a href="">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Properties;
