import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Alert from '../component/alert'
import First from './first'

export default class Second extends React.Component{
    render(){
        return(
            <div className='container'>
                <First />
                <First />
                <Alert />
                <Alert />
                <Alert />
            </div>
        )
    }
}