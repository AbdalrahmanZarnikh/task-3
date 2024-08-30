import "../../style.css"
import "./Hero.css"

function Hero({img,path,title}) {
  return (
    <div className="content_hero">
        <img src={img} alt="" />
        <div className="text">
            <p className="path">{path}</p>
            <h1 className="title">{title}</h1>
        </div>
    </div>
  )
}

export default Hero