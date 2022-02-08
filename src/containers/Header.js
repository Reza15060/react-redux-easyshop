import React from "react";

const Header = () => {

  const mystyle = {
    display: 'flex',
    alineItem : "center",
    justifyContent: 'center',
    color : 'green',
    padding: '10px',
    fontSize : '40px'
  
  };
  return (
    <div>
      <div >
        <h2 style={mystyle}
        >EasyShop</h2>
      </div>
    </div>
  );
};

export default Header;