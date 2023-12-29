import React from 'react';
import { Sidebar, NavBar, MainContent, RightView } from '../../components/index';

import './HomePage.css'

export default function HomePage() {
  // return (
  //   <>
  //   <div className="contenido">
  //       <main className='mainContainer'>
  //         <NavBar />
  //         {/* <div className="row">
  //           <Sidebar />
  //         <MainContent />
  //         </div> */}
  //       </main>
  //       <RightView/>
  //   </div>
  //   </>
  // )


  return (
    <>
      <div className="contentApp">
        <div className="mainContainer">
          <NavBar />

          <div className="leftContent">
            <Sidebar />
            <MainContent />
          </div>
        </div>

        <RightView/>
      </div>
    </>
  );
}
