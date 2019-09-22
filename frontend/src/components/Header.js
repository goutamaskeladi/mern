import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">MERN</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Task List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/edit/:id">Edit Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createtask">Create Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header