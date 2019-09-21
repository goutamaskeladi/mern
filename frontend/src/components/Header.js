import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-light">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Practice List</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/edit/:id">Edit Practice</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/create">Add Practice</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/user">Create User</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header