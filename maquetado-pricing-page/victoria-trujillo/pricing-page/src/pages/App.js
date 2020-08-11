import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import TargetGet from '../components/TargetGet';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';


function App(){
    return (
<div className = "container">
    <Navbar/>
    <div className= "card-deck mb-3 text-center d-flex align-items-end">
    <TargetGet precio="0" gigas="10"/> 
    <TargetGet precio="15" gigas="20" popular="1"/> 
    <TargetGet precio="30" gigas="50" user=""/> 
    <Introduction/>
    <div className="text-center">
    <Footer/>    
    </div>
   
    </div>
</div>

)
}






export default App;
