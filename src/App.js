import React, {Component} from 'react';
import Menu from './components/Menu'
import Cargo from './components/Cargo'
import Rent from './components/Rent'
import Deals from './components/Deals'
import Contact from './components/Contact'
import Ecom from './components/Ecom'
import Hail1 from './components/Hail1'
import {Switch,Route} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <div className="x">
        <Switch>
          <Route exact path='/' component={Menu}/>
          <Route path='/cont1' component={Contact}/>
          <Route path='/ecom' component={Ecom}/>
          <Route path='/cargo' component={Cargo}/>
          <Route path='/rent' component={Rent}/>
          <Route path='/deals' component={Deals}/>
          <Route path='/hail1' component={Hail1}/>
        </Switch>
      </div>
    )
  }
}
export default App 