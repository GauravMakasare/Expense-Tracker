import React, { Component } from 'react';
import AppNav from './AppNav';

class Home extends Component {
    state = {}

    render() { 
        return (
            <div>
             <AppNav/>
             <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'50vh'}}>
                 Welcome to Easy Expense Manager! 
             </h3>
             </div>
            );
    }
}
 
export default Home;