import React from "react";
import SingleCard from "../../singleCard/singleCard";

const Home = () => {
  return(
   <div className={'content_page'}>
     <div className="fake_sidebar"/>
     <div style={{color: '#fff', padding: '50px 20px', display: 'flex'}}>

       <SingleCard/>
       <SingleCard/>
       <SingleCard/>

     </div>
   </div>
  )
}

export default Home;