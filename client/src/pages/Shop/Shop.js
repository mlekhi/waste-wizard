import React, { useState, useEffect } from 'react';
import "./Shop.css";

function Shop() {
  const [avatar0, setAvatar0] = useState(false);
  const [avatar1, setAvatar1] = useState(false);
  const [avatar2, setAvatar2] = useState(false);
  const [avatar3, setAvatar3] = useState(false);
  const [avatar4, setAvatar4] = useState(false);
  const [avatar5, setAvatar5] = useState(false);
  const [avatar6, setAvatar6] = useState(false);
  const [avatar7, setAvatar7] = useState(false);
  
  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch('/show-purchased');
        if (!response.ok) {
          throw new Error('Failed to fetch avatars');
        }
        const data = await response.json();
        data.avatars.forEach(avatar => {
          switch (avatar.avatarID) {
            case 0:
              setAvatar0(true);
              break;
            case 1:
              setAvatar1(true);
              break;
            case 2:
              setAvatar2(true);
              break;
            case 3:
              setAvatar3(true);
              break;
            case 4:
              setAvatar4(true);
              break;
            case 5:
              setAvatar5(true);
              break;
            case 6:
              setAvatar6(true);
              break;
            case 7:
              setAvatar7(true);
              break;
            default:
              break;
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div>
        <div>
          <div className="Heading">
            <h1>Shop</h1> 
          </div>
          <div className="ShopOptions">
            
                <div className="avatar-box-2">
                  <h3>Whiskerbin Trashpaws</h3>
                  <img className="Avatar-option-img" src="avatars/catWizard.png" alt="LeftShopOptionsAvatar" />
                  <div>
                  {avatar0 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>

                
                <div className="avatar-box-1">
                  <h3>Flexgar Dumpstrong</h3>
                  <img className="Avatar-option-img" src="avatars/strongWizard.png" alt="RightShopOptionsAvatar" />
                  <div>
                  {avatar1 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>

                <div className="avatar-box-2">
                  <h3>Grimmidge Filthcast</h3>
                  <img className="Avatar-option-img" src="avatars/niceWizard.png" alt="BottemLeftShopOptionsAvatar" />
                  <div>
                  {avatar2 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>
                
                <div className="avatar-box-1">
                  <h3>Bulbous Rubbishrouse</h3>
                  <img className="Avatar-option-img" src="avatars/fatWizard.png" alt="BottemRightShopOptionsAvatar" />
                  <div>
                  {avatar3 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>


                <div className="avatar-box-1">
                  <h3>Whiskerbin Trashpaws</h3>
                  <img className="Avatar-option-img" src="avatars/catWizard.png" alt="LeftShopOptionsAvatar" />
                  <div>
                  {avatar4 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>

                
                <div className="avatar-box-2">
                  <h3>Flexgar Dumpstrong</h3>
                  <img className="Avatar-option-img" src="avatars/strongWizard.png" alt="RightShopOptionsAvatar" />
                  <div>
                  {avatar5 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>

                <div className="avatar-box-1">
                  <h3>Grimmidge Filthcast</h3>
                  <img className="Avatar-option-img" src="avatars/niceWizard.png" alt="BottemLeftShopOptionsAvatar" />
                  <div>
                  {avatar6 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>
                
                <div className="avatar-box-2">
                  <h3>Bulbous Rubbishrouse</h3>
                  <img className="Avatar-option-img" src="avatars/fatWizard.png" alt="BottemRightShopOptionsAvatar" />
                  <div>
                  {avatar7 ? (
                    <div className="Owned">Owned</div>
                  ) : (
                    <div className="itemInfo">
                      <button className="WWButton">Buy</button>
                      <div className="Price"><p>Price</p></div>
                    </div>
                  )}
                  </div>
                </div>
          </div>
        </div>
      </div>
  );
}

export default Shop;

