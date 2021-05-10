import React, { Component } from 'react';
// import logoImg from './images/theORBlogo.png';
import { Card } from 'primereact/card';

console.log("called Home");



class Home extends Component {

    render() {

        return (
            <div className="homeSection" id="home" >
                <div id="orbimg"></div>

                <div className="spacerForHomesection"></div>

                <div className="insideCardForHome">

                    <div className="orbHomeHeadline">
                        WELCOME TO THE ORB
                    </div>

                    <div className="orbHomeText">

                        <p><div class="sentence">
                            <span class="bolded">The ORB</span> is an intense money game with high risks and high rewards. </div>
                            <div class="sentence">
                                Players buy <span class="bolded">ORB</span>, stake <span class="bolded">ORB</span>, and harvest <span class="bolded">ORB</span>.</div>
                            <div class="sentence">
                                Staked <span class="bolded">ORB</span> is locked up for 3 days.</div>
                            <div class="sentence">
                                When it's unlocked, players can sell the generated <span class="bolded">ORB</span>.
                            </div>

                            <div class="sentence">
                                Oh did we mention, <span class="boldedFarm">APY farm rates are 1,000,000%</span>.
                            </div>

                            <div class="sentence">
                                This is the first of it's kind. A rug-proof high-stakes crypto game.
                            </div>





                        </p>


                        <div class="buttonsDiv">
                            <h4><a href="#faq" class="fancyButton2">Learn More</a></h4>
                            <h4><a href="#buy" class="fancyButton2">Buy Now!</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;