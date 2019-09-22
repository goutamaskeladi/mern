import React, { Component } from 'react'
import axios from 'axios'

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            successMsg: false,
            errorMsg : ""
        }
    }
    handleChange = e => {
        this.setState({ name:e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault() 
        axios.post("http://localhost:3000/users/add", this.state)
        .then(response => {
            this.setState({
                successMsg : true
            })
        })
        .catch(error => {
            let message;
            if(error.response.data.errmsg) {
                message = error.response.data.errmsg
            } else if (error.response.data.message) {
                message = error.response.data.message
            } else {
                message = "Some problem occured. Please contact system admin"
            }
            this.setState({errorMsg: message})
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <h2>Create User</h2>
                <hr></hr>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-info" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                <br></br>
                {
                    this.state.errorMsg ? 
                    <div className="alert alert-danger alert-dismissible">
                      <button type="button" className="close" data-dismiss="alert">&times;</button>
                      <strong>Error: </strong>{this.state.errorMsg}
                    </div>
                    : ""
                }
                {
                    this.state.successMsg ?
                    <div className="alert alert-success alert-dismissible">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Success: </strong> User {this.state.name} has been added successfully!
                    </div>
                    : ""
                }
            </div>
        )
    }
}

export default CreateUser
