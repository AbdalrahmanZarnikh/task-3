import "../../style.css";
import "./Slider.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect,useRef } from "react";

function Slider() {
  
  const slide1=useRef(null)
  const slide2=useRef(null)
  const slide3=useRef(null)

  const slides=[slide1,slide2,slide3]
  const bull1=useRef(null)
  const bull2=useRef(null)
  const bull3=useRef(null)
  const bull =[bull1,bull2,bull3]

  var counter=0;
  useEffect(()=>{
    slides.forEach((slide,index)=>{
      slide.current.style.left=`${index*100}%`
      console.log(slide,index)
    })
  },[])


  const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.current.style.transform=`translateX(-${counter*100}%)`
    })
  }
  

  function goNext(){
    counter++;
    if(counter==3){
      counter=0;
    }
    slideImage();
    bull.forEach((item,index)=>{
      item.current.classList.remove("active");
      if(index==counter){
       item.current.classList.add("active")
      }
   })
  }
  function goPrev(){
    counter--;
    if(counter<0){
     counter=2;
    }
    slideImage();
    bull.forEach((item,index)=>{
      item.current.classList.remove("active");
      if(index==counter){
       item.current.classList.add("active")
      }
   })
  }




  return (
      <div className="content">
        <div className="images_slider">
        <img src="/images/banner-01.jpg" alt=""  ref={slide1}/>
        <img src="/images/banner-02.jpg" alt=""  ref={slide2}/>
        <img src="/images/banner-03.jpg" alt=""  ref={slide3}/>
        </div>
        <div className="items">
        <p>Toronto ,<span>canada</span></p>
        <p className="p2">HURRY! <br /> GET THE <br /> BEST VILLA <br /> FOR YOU</p>
        </div>
        <button className="leftSide" onClick={goPrev}>
        <FontAwesomeIcon icon={faAngleLeft}  />
        </button>
        <button className="rightSide" onClick={goNext}>
        <FontAwesomeIcon icon={faAngleRight}  />
        </button>
      
        <div className="bullets">
        <FontAwesomeIcon icon={faCircle}  className="bullet active" ref={bull1}/>
        <FontAwesomeIcon icon={faCircle} className="bullet" ref={bull2}/>
        <FontAwesomeIcon icon={faCircle} className="bullet" ref={bull3}/>
        </div>


      </div>
  )
}

export default Slider