import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index/index';
import MyMeeting from './pages/myMeeting/myMeeting';
import MeetingRooms from './pages/meetingRooms/meetingRooms';
import Mine from './pages/mine/mine';
import MyMsg from './pages/myMsg/myMsg';
import ProposeAMeeting from './pages/proposeAMeeting/proposeAMeeting';
import MeetingRoomDetail from './pages/meetingRoomDetail/meetingRoomDetail';
import OccupancyOfMeeting from './pages/occupancyOfMeeting/occupancyOfMeeting';

import './index.less';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import './assets/fonts/iconfont.css'
ReactDOM.render(
    ( <div>
        <Router>
        <Switch>
               <Route  exact path="/" component={Index} />
               <Route path="/meetingRooms" component={MeetingRooms} />
               <Route path="/mine" component={Mine} />
               <Route path="/myMsg" component={MyMsg} />
               <Route path="/proposeAMeeting" component={ProposeAMeeting} />
               <Route path="/occupancyOfMeeting" component={OccupancyOfMeeting} />
               <Route path="/meetingRoomDetail" component={MeetingRoomDetail} />
               <Route path="/myMeeting" component={MyMeeting} />
        </Switch>
        </Router>
        </div>

    )
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
