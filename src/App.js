import Home from './MyComponent/Home'
import React, { useState } from 'react'
import NavBar from './component/NavBar'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './MyComponent/Login';
import Civil from './MyComponent/Dept/Civil';
import ComputerScience from './MyComponent/Dept/ComputerScience';
import Electrical from './MyComponent/Dept/Electrical';
import BasicScience from './MyComponent/Dept/BasicScience';
import Electronic from './MyComponent/Dept/Electronic';
import About from './MyComponent/About';
import Footer from './component/Footer';
import Card from './cardApi';
import GridCard from './MyComponent/GridCard';


function App() {

    const [cardData, setCardData] = useState(Card);



    return (
        <>
            <NavBar />

            <Switch>
                {/* Home */}
                <Route exact path="/" >
                    <Home />
                    <GridCard cardData={cardData} />
                    
                </Route>
                {/* Login */}
                <Route exact path="/login" component={Login} />

                {/* About */}
                <Route exact path="/about" component={About} />

                {/* Department */}
                <Route exact path="/civil" component={Civil} />
                <Route exact path="/electronic" component={Electronic} />
                <Route exact path="/computer" component={ComputerScience} />
                <Route exact path="/basic" component={BasicScience} />
                <Route exact path="/electrical" component={Electrical} />
            </Switch>

            <Footer />

        </>
    )
}

export default App
