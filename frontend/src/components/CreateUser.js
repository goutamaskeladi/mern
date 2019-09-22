import React, { Component } from 'react'

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : ""
        }
    }
    handleChange = e => {
        this.setState({ name:e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault() 
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h2>Create User</h2>
                <hr></hr>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-info" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default CreateUser
