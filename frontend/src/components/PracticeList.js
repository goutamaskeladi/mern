import React, { Component } from 'react'
import axios from 'axios'

class PracticeList extends Component {
    state = {
        tasks: []
    }
    componentDidMount() {
        axios.get("http://localhost:3000/task")
            .then(response => {
                this.setState({tasks:response.data})
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="table-responsive-sm">
                <br></br>
                <h4>Task List</h4>
                <hr></hr>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.tasks.map(item => {
                               return(
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{new Date(item.date).toDateString()}</td>
                                    <td>{item.description}</td>
                                </tr>
                               )
                           })
                       }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PracticeList