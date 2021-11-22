
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import {BrowserRouter} from 'react-router-dom'

reactDOM.render(

<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"))