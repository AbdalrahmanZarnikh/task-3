import "../../style.css";
import "./Deal.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import FeatureInfo from "../FeatureInfo/FeatureInfo";
import BtnNav from "../BtnNav/BtnNav";
import { useRef,useState,useEffect } from "react";
function Deal() {
  const info=[
    {
      img:"/images/deal-01.jpg",
      title:"Extra Info About Property",
      head1:"185 m2",
      head2:"26 th",
      head3:"4",
      head4:"Yes",
      head5:"Bank"
    },
    {
      img:"/images/deal-02.jpg",
      title:"Detail Info About Villa",
      head1:"250 m2",
      head2:"26 th",
      head3:"5",
      head4:"Yes",
      head5:"Bank"
    },
    {
      img:"/images/deal-03.jpg",
      title:"Extra Info About Penthouse",
      head1:"320 m2",
      head2:"34 th",
      head3:"6",
      head4:"Yes",
      head5:"Bank"
    }
  ]
   const [data,setdata]=useState(info[0])
   const [counter,setcounter]=useState(0)
    const btn1=useRef(null);
    const btn2=useRef(null);
    const btn3=useRef(null);

    const btns=[btn1,btn2,btn3];

    useEffect(()=>{ 
      btns.forEach((item)=>{
          item.current.classList.remove("active");
          btns[counter].current.classList.add("active")
      })
     },[counter])
     

    


    
    console.log(data);
    

  return (
     <div className="contentPrime">
          <div className="container">
      <div className="content_Deal">
        <div className="text_Deal">
          <Title title={"Best Deal"} />
          <SubTitle subTitle="Find Your Best Deal Right Now!" />
        </div>
        <div className="buttons">
          <button className="active" ref={btn1} onClick={()=>{setdata(info[0]);setcounter(0)}}>Appartment</button>
          <button ref={btn2} onClick={()=>{setdata(info[1]);setcounter(1)}}>VillaHouse</button>
          <button ref={btn3} onClick={()=>{setdata(info[2]);setcounter(2)}}>Penthouse</button>
        </div>
      </div>
      <div className="body_Deal">
         <div className="features2">
        <FeatureInfo underImage={"Total Flat Space"} header={data.head1}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Floor number"} header={data.head2}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Number of rooms"} header={data.head3}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Parking Available"} header={data.head4}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Payment Process"} header={data.head5}/>
         </div>
         <img src={data.img} alt="" className="my_image" />
         <div className="text">
              <h3 className="title">{data.title}</h3>
              <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate, vero ipsum et quae autem necessitatibus enim. Deserunt explicabo molestiae eligendi! Sapiente.</p>
              <br />
              <p className="paragraph2">
                When You need free CSS templates,You can simply type TemplateMo in any search engine website. In addition,You can type TemplateMo portfolio,TemplateMo One Page Layouts , etc.
              </p>
              <div className="BTN">
              <BtnNav/>
              </div>
         </div>

      </div>

    </div>
     </div>
  );
}

export default Deal;
