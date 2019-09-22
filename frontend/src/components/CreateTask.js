import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css"

class CreateTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            date: new Date(),
            users: [],
            successMsg: false,
            errorMsg : ""
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/users")
            .then(response => {
                let users = response.data.map(user => user.name)
                this.setState({
                    users: users
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
    handleChange = e => {
        if (e instanceof Date) {
            this.setState({ date: e })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3000/task/add", {
            name: this.state.name,
            description: this.state.description,
            date: this.state.date
        })
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
                <h2>Create Task</h2>
                <hr></hr>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Select User</label>
                        <select className="form-control" id="name" name="name" onChange={this.handleChange}>
                        <option value="" selected disabled hidden>Choose here</option>
                            {
                                this.state.users ?
                                    this.state.users.map(item => {
                                        return (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        )
                                    }) : ""
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Select Date</label><br></br>
                        <DatePicker
                            name="date"
                            selected={this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Enter Description</label>
                        <textarea className="form-control" rows="5" id="description" name="description" onChange={this.handleChange}></textarea>
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
                        <strong>Success: </strong> New task has been added successfully!
                    </div>
                    : ""
                }
            </div>
        )
    }
}

export default CreateTask