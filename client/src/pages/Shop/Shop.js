import React from 'react';
import "./Shop.css"; 

function Shop() {
  return (
    <div className="Main">
        <div className="columns"> 
        <div className="Avatar">
            <h1>Current Avatar</h1>
            
            <img class="Avatar" src="Shop/tree-736885_1280.jpg"></img> 
            <div className="heading">
            <h2>Select or buy a Avatar</h2> 
            </div>
    
        </div>
        <div className="Bin">
        <h1>Current Bin</h1>
        <h2>Select or buy a Bin</h2>

        </div>
      </div>  
    </div>

  );
}

export default Shop;
