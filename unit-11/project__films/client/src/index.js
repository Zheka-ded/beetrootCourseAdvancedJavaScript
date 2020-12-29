import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
/**
 * groot - "Avengers" :-)
 */
render(
    <Router>
        <App />
    </Router>, document.getElementById('groot'))
