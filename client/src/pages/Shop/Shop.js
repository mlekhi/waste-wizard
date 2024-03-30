import React from 'react';
import "./Shop.css";

function Shop() {
  return (
    <div>
      <div className="columns"> 

        <div className="Avatar">
          <div className="Heading">
            <h2>Select or buy an Avatar</h2> 
          </div>
          <div className="ShopOptions">
            
                <div className="LeftShopOptionsAvatar">
                  <h3>Whiskerbin Trashpaws</h3>
                  <img className="Avatar-option-img" src="catWizard.png" alt="LeftShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                
                <div className="RightShopOptionsAvatar">
                  <h3>Flexgar Dumpstrong</h3>
                  <img className="Avatar-option-img" src="strongWizard.png" alt="RightShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemRightShopOptionsAvatar">
                  <h3>Bulbous Rubbishrouse</h3>
                  <img className="Avatar-option-img" src="fatWizard.png" alt="BottemRightShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemLeftShopOptionsAvatar">
                  <h3>Grimmidge Filthcast</h3>
                  <img className="Avatar-option-img" src="niceWizard.png" alt="BottemLeftShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

          </div>
          
        </div>

        <div className="Bin">
          <div className="Heading">
            <h2>Select or buy an Bin</h2> 
          </div>
          <div className="ShopOptions">
            
                <div className="LeftShopOptionsAvatar">
                  <h3>EcoTag Bin</h3>
                  <img className="Avatar-option-img" src="graffitiRecycling.png" alt="LeftShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                
                <div className="RightShopOptionsAvatar">
                  <h3>StickIt Bin</h3>
                  <img className="Avatar-option-img" src="stickerTrashbin.png" alt="RightShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemRightShopOptionsAvatar">
                  <h3>CompostCash Bin</h3>
                  <img className="Avatar-option-img" src="moneyCompostBin.png" alt="BottemRightShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

                <div className="BottemLeftShopOptionsAvatar">
                  <h3>Glow Bin</h3>
                  <img className="Avatar-option-img" src="lightTrashBin.png" alt="BottemLeftShopOptionsAvatar" />
                  <div className="itemInfo">
                    <button className="WWButton">Equip or Buy</button>
                    <div className="Price"><p>Price</p></div>
                  </div>
                </div>

          </div>
        </div>
       </div>
    </div>
  );
}

export default Shop;

