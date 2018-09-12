import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
       <nav className="pa3 pa4-ns">
          <div className="tc pb3 bt b--yellow pt3 bb b--yellow">
              <Link to="/"><a className="link dim white f6 f4-ns dib mr3" title="Home">Home</a></Link>
              <Link to="/characters"><a className="link dim white f6 f4-ns dib mr3" title="Characters">Characters</a></Link>
              <Link to="/"><a className="link dim white f6 f4-ns dib mr3" title="Characters">Films</a></Link>
              <Link to="/"><a className="link dim white f6 f4-ns dib mr3" title="Characters">Starships</a></Link>
              <Link to="/"><a className="link dim white f6 f4-ns dib mr3" title="Characters">Vehicles</a></Link>
              <Link to="/"><a className="link dim white f6 f4-ns dib mr3" title="Characters">Planets</a></Link>
              <Link to="/"><a className="link dim white f6 f4-ns dib" title="Characters">Species</a></Link>
          </div>
      </nav>
	);
}
export default Menu;