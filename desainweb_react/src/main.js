import React from 'react'
import Home from './pages/home'
import Buku from './pages/buku'
import {Route, Switch} from 'react-router-dom'

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/buku" component={Buku} />
            </Switch>
        )
    }
}