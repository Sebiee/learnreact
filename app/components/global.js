import React from 'react';
import NavLink from '../modules/navlink';

/* Root CONTAINER */

const cont = (props) =>
    (
     <div>
         <h1>Hello world!</h1>
         <div id="main-content">
            {props.children}
         </div>
        <NavLink to="/home"> Home </NavLink>
		<NavLink to="/about"> About </NavLink>
		<NavLink to="/project"> Project </NavLink>
     </div>
   );

cont.propTypes = {
    children: React.PropTypes.element,
};

export default cont;
