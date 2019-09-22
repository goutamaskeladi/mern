import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

class CreateTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            date: new Date(),
            users: ["John", "Tony"]
        }
    }
    handleChange = e => {
       if(e instanceof Date) {
           this.setState({date:e})
       } else {
           this.setState({[e.target.name] : e.target.value})
       }
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
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
                            {
                                this.state.users.map(item => {
                                    return(
                                        <option key = {item} value = {item}>
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Task Date</label><br></br>
                        <DatePicker
                            name="date"
                            selected={this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Task Description</label>
                        <textarea className="form-control" rows="5" id="description" name="description" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                       <button type="button" className="btn btn-info" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTask