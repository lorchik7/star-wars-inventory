import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
       <nav className="pa3 pa4-ns">
          <div className="tc pb3 bt b--yellow pt3 bb b--yellow">
              	<Link to="/"><div className="link dim white f6 f4-ns dib mr3" title="Home">Home</div></Link>
             	<Link to="/characters"><div className="link dim white f6 f4-ns dib mr3" title="Characters">Characters</div></Link>
              	<Link to="/films"><div className="link dim white f6 f4-ns dib" title="Films">Films</div></Link>
          </div>
      </nav>
	);
}
export default Menu;