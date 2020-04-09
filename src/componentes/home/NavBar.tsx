import * as React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {

  return (
      <React.Fragment>
        {/* <Link to="/" replace={true} className="link">Home</Link> */}
        
        <Link to="/add/0" className="link">Add Profile</Link>
        
        <Link to="/" className="link">Profiles App</Link>
      </React.Fragment>
  );

};

