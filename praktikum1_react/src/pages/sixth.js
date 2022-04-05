import React from 'react'
import AlertProps from "../component/alert_props";

export default class Sixth extends React.Component{
    constructor(){
        super()
        this.state = ({
            type: "success",
            title: "Alert with Props and State",
            content: "This is Content"
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <br />
                <AlertProps type={this.state.type} title={this.state.title}>
                    {this.state.content}
                </AlertProps>
                <hr />
                <h5 className="text-center">Alert Control</h5>
                <b>Alert Type</b>
                <select className="form-control" name="type" value={this.state.type} onChange={this.handleChange}>
                    <option value="Info">Info</option>
                    <option value="danger">Danger</option>
                    <option value="warning">Warning</option>
                    <option value="success">Success</option>
                </select>
                <b>Alert Title</b>
                <input className="form-control" name="title" value={this.state.title} onChange={this.handleChange} />
                <b>Alert Content</b>
                <input className="form-control" name="content" value={this.state.content} onChange={this.handleChange} />
            </div>
        )
    }
}