import React, { Component } from 'react';
// import logoImg from './images/theORBlogo.png';
import { Card } from 'primereact/card';

console.log("called Home");

class Home extends Component {

    render() {

        return (
            <div className="homeSection" id="home" >

                        <div className="spacerForHomesection"></div>

                        <div className="insideCardForHome">
                        <div className="welcomeHeaderhome">
                            Welcome to The ORB!
                        </div>
                        <div className="welcomeTexthome">
                        <p>The ORB is an intense money game with explosive APY farm rates. <br />
                        Players buy ORB, stake ORB, harvest ORB. <br />
                        ORB Staked is locked up for 3 days.<br />
                        When it's unlocked players can sell the generated ORB.</p>
                        </div>
                    </div>




            </div>
        );
    }
}

export default Home;