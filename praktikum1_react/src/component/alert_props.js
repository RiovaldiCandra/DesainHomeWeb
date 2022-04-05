import React from 'react'

export default class Alert_props extends React.Component{
    render(){
        return(
            <div className={'text-center alert alert-' + this.props.type}>
                <h3>{this.props.title}</h3>
                <p>{this.props.children}</p>
            </div>
        )
    }
}