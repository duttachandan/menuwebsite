import React,{useEffect, useState} from 'react';
import './App.css';
import list from "./list";
import Loading from './components/loading';

function App() {
  const [loader, setLoader] = useState(true);
  const [state, setState ] = useState(false);
  function dragme(e) {
    const cursor = document.querySelector(".cursor");
    cursor.style.left=e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
  function dblClick(){
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  }
 useEffect(()=>{
    setTimeout(() => {
      setLoader(false);
    },2000);
  },[])
    return (
      <>
      {
        !loader
        ?<>
        <div className='main-div flex' onMouseMove={(e)=>dragme(e)}>
          {list.map((e, index) => {
            return (
              <div className="cards" onDoubleClick={()=>dblClick()} key={index}>
                <div className='cards-img'>
                {state &&
                   (<i className="fa-solid fa-heart"></i>)
                }
                  <img src={e.img} alt="" />
                </div>
                <div className='content'>
                  <h2 className='content-header'>{e.header}</h2>
                  <p className='content-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus esse recusandae dolores asperiores ullam beatae perspiciatis iusto eos iure!</p>
                  
                </div>
              </div>
            )
          })}
          </div>
        <div className='cursor'></div>
        </>
        :
        <Loading/>
      }
      </>
    );
}

export default App;

