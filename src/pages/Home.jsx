import Slider from "../components/Silder/Slider"
import Featured from "../components/Featured/Featured"
import VideoView from "../components/VideoView/VideoView"
import Deal from "../components/Deal/Deal"
import Properties from "../components/Properties/Properties"
import ContactUs from "../components/ContactUs/ContactUs"
function Home() {
  return (
     <>
       <Slider/>
       <Featured/>
       <VideoView/>
       <Deal/>
      <Properties/>
      <ContactUs/>

     </>
  )
}

export default Home