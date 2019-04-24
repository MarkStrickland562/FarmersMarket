import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/farmersmarket.jpeg';

function Header(){
  return (
    <div style={{textAlign: 'center', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh'}}>
      <style global jsx>{`
        h1 {
          font-family: "Apple Chancery", cursive;
          color: white;
          font-size: 140px;
          padding-top: 20%;
          text-shadow: 1px 1px 2px black;
        }
        .link {
          font-family: sans-serif;
          font-size: 48px;
          color: white;
          text-decoration: none;
          text-shadow: 1px 1px 2px black;
        }
      `}
      </style>
      <h1>Farmer's Market</h1>
      <Link className="link" to="/showschedule">Market Schedule</Link>|<br></br><Link className="link" to="/showavailableproduce">Available Produce</Link>
    </div>
  );
}

export default Header;
