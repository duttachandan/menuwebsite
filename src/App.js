import React from 'react';
import './App.css';
import list from "./list";

function App() {
  function dragme(e) {
    const cursor = document.querySelector(".cursor");
    cursor.style.left=e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }

  return (
    <>
      <div className='main-div flex' onMouseMove={(e)=>dragme(e)}>
        {list.map((e, index) => {
          return (
            <div className="cards" key={index}>
              <div className='cards-img'>
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
  );
}

export default App;

