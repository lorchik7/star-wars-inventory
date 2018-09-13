import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Characters from './Characters'
import Films from './Film'

const Content = () => {
	return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/characters" component={Characters}/>
      <Route path="/films" component={Films}/>
    </Switch>
	);
}
export default Content;