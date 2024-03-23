import React from 'react';
import "./Shop.css";

function Shop() {
  return (
    <div className="Main">
      <div className="columns"> 

        <div className="Avatar">
          <h1>Current Avatar</h1>
          <img className="Avatar-img" src="logo192.png" alt="Avatar" />
          <div className="Heading">
            <h2>Select or buy an Avatar</h2> 
          </div>
          <div className="ShopOptions">
            
                <div className="LeftShopOptionsAvatar">
                  <h3>Name of Avatar</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                
                <div className="RightShopOptionsAvatar">
                  <h3>Name of Avatar</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemRightShopOptionsAvatar">
                  <h3>Name of Avatar</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemLeftShopOptionsAvatar">
                  <h3>Name of Avatar</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

          </div>
          
        </div>


        <div className="Bin">
          <h1>Current Bin</h1>
          <img className="Avatar-img" src="logo192.png" alt="Avatar" />
          <div className="Heading">
            <h2>Select or buy an Bin</h2> 
          </div>
          <div className="ShopOptions">
            
                <div className="LeftShopOptionsAvatar">
                  <h3>Name of Bin</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                
                <div className="RightShopOptionsAvatar">
                  <h3>Name of Bin</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemRightShopOptionsAvatar">
                  <h3>Name of Bin</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemLeftShopOptionsAvatar">
                  <h3>Name of Bin</h3>
                  <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

          </div>
        </div>



      </div>  

      <div className="PowerUp">
        <div className="Heading">
            <h2>Select or buy an Power Up</h2> 
          </div>
          

          <div className="ShopOptionsPowerUps">
            
            <div className="LeftShopOptionsAvatar">
              <h3>Name of Bin</h3>
              <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
              <div className="itemInfo">
                <button className="WWButton">Equip or Buy</button>
                <div className="Price"><p>Price</p></div>
              </div>
            </div>

            
            <div className="RightShopOptionsAvatar">
              <h3>Name of Bin</h3>
              <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
              <div className="itemInfo">
                <button className="WWButton">Equip or Buy</button>
                <div className="Price"><p>Price</p></div>
              </div>
            </div>

            <div className="BottemRightShopOptionsAvatar">
              <h3>Name of Bin</h3>
              <img className="Avatar-option-img" src="logo.png" alt="Option Avatar" />
              <div className="itemInfo">
                <button className="WWButton">Equip or Buy</button>
                <div className="Price"><p>Price</p></div>
              </div>
            </div>
          </div>


       </div>
    </div>
  );
}

export default Shop;

