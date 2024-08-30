
import "./Accordion.css"

function Accordion() {

     function Show(number){
        document.querySelector(`.par${number}`).classList.toggle("accord")
        document.querySelector(`.head${number}`).classList.toggle("active_accord")
     }

  return ( 
    <div className="box_accordion">
    <h3 className="head1 active_accord" onClick={()=>Show(1)}>Best useful links ?</h3>
    <p className="par1" >
        Get The best villa website template in HTML CSS and bootstrap for your buisness. TemplateMo Provides you the best free CSS templates in the world. please tell your friends about it.
    </p>
    <h3 className="head2" onClick={()=>Show(2)} >How does this work ?</h3>
    <p className="par2 accord">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque ratione reprehenderit animi nemo unde illum quis beatae expedita dolor accusantium, minus, et aliquid ex? Voluptates eum corrupti ducimus error?
    </p>
    <h3 className="head3" onClick={()=>Show(3)}>Why is villa Agency the best ?</h3>
    <p className="par3 accord">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae obcaecati praesentium quasi aliquid! Amet, laborum maiores qui nostrum voluptates magnam repellat assumenda cupiditate quo. Accusantium nemo quia nam ipsum.
    </p>
</div>
  )
}

export default Accordion