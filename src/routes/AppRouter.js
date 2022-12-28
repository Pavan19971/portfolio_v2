import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import BlogCardDemo from '../components/BlogCardDemo'
import Footer from '../components/Footer'
import MyEducationTimeline from '../components/MyEducationTimeline'
import MyWorkTimeline from '../components/MyWorkTimeline'
import MyWork from '../components/MyWork'
import DemoCarousel from '../components/DemoCarousel' 
const AppRouter = () => (
    <BrowserRouter>

        <Switch>
        <Route exact path="/" component={HomePage} />
            <Route exact path="/test" component={DemoCarousel} />
            <Route path ="/mywork" component={MyWork}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
)
export default AppRouter