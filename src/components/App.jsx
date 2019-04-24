import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import AvailableProduce from './AvailableProduce';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/showschedule' component={MarketSchedule} />
        <Route path='/showavailableproduce' component={AvailableProduce} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
