import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Routers from './router'

import App from './App.js';
import './main.css'
import 'highlight.js/styles/atelier-cave-dark.css'
import './post.css'

render(<Routers />,document.getElementById('root'));
