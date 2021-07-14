import React,{Component} from "react";
import a from './static/1.jpg';
import b from './static/2.jpg';
import c from './static/3.jpg';
import d from './static/4.png';
import e from './static/5.jpg';

class Banner extends Component{
  constructor(props){
    super(props);
    this.state={
      num:0,
      bannerList:[
        {
          id:1,
          src:a
        },
        {
          id:2,
          src:b
        },
        {
          id:3,
          src:c
        },
        {
          id:4,
          src:d
        },
        {
          id:5,
          src:e
        }
      
      ]
    }
  }
  setinter = ()=>{
    let {num,bannerList} = this.state;
    setInterval(()=>{
      num++;
      if(num>=bannerList.length){
        num = 0;      
      }
      this.setState(state=>({
        num
      }))
    },1500);
  
  }
  componentDidMount(){
    this.setinter()
  }

  switch=(i,e)=>{
    this.setState({
      num:i
    })
  }
  render(){
    let {num,bannerList} = this.state;
    return (
      <div>
        <ul className="banner">
            {
            bannerList.map((item,i)=>{
              return (
                 <li key={item.id}> 
                 <div>
                 {
              i===num?<img src={item.src} alt={item.src} className="img"  /> :null
             
              }
                 </div>
              </li>
              ) 
            })
            }
            <li>
            {
 bannerList.map((item,i)=>{
return  <span key={item.id} onClick={this.switch.bind(this,i)} className={[i===num?'checked':null,'dot'].join(' ')}></span> 
 })
            }
            </li>  
        </ul>
      </div>
    )
  }
}

export default Banner;