import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import PracticeList from './components/PracticeList'
import EditPractice from './components/EditPractice'
import CreateTask from './components/CreateTask'
import CreateUser from './components/CreateUser'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={PracticeList} />
                    <Route path="/edit/:id" component={EditPractice} />
                    <Route path="/createtask" component={CreateTask} />
                    <Route path="/user" component={CreateUser} />
                </div>
            </Router>
        );
    }
}

export default App;