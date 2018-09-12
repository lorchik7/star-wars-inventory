import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Characters from './Characters'

const Content = () => {
	return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/characters" component={Characters}/>
    </Switch>
	);
}
export default Content;