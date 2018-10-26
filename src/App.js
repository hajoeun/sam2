import React, { Component } from 'react';
// import logo from './logo.svg';

import Meetup from './component/Meetup'

class App extends Component {
  render() {
    const data = [{ id: 1, name: 'Joeun' }, { id: 2, name: 'Nara' }, { id: 3, name: 'Janet' }];
    return (
      <div id="sam">
        <div className="header">
          <div className="title">
            LOGO
          </div>
        </div> 
        <div className="body">
          <div className="meetups">
            <div className="band meet_list"> 
              {data.map(obj => <Meetup key={obj.id} value={obj.name}/> ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
