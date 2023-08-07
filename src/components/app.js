import React, { Component} from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./pages/home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import PageWrapper from "./PageWrapper";
export default class App extends Component{
    render(){
        return (
            <Router>
                <PageWrapper>
                    <Route
                    exact={true}
                    path="/"
                    component={Home}
                    />
                    <Route 
                    path="/projects"
                    component={Projects}
                    />
                    <Route 
                    path="/about"
                    component={About}
                    />
                </PageWrapper>
            </Router>
    );
    }
}

const appDiv = document.getElementById("app");
render(<App />,appDiv);