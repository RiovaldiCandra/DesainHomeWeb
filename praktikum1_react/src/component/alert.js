import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

export default class Alert extends React.Component{
    render(){
        return(
            <div className='alert alert-success text-center'>
                <h3>info</h3>
                <p>Belajar react itu menyusahkan</p>
            </div>
        )
    }
}