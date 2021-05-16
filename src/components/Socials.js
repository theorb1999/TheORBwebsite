import React, { Component } from 'react';
import { Button } from 'primereact/button';

import '../css/Socials.css';



console.log("called Socials");

const discordClicked = () => {
    window.open("https://discord.gg/ZaFABpJgC5", "_blank");
}

const telegramClicked = () => {
    window.open("https://t.me/theORB_The_Staking_Game", "_blank");
}

const twitterClicked = () => {
    window.open("https://twitter.com/TheOrbToken", "_blank");
}

const redditClicked = () => {
    window.open("https://www.reddit.com/r/TheOrbToken/", "_blank");
}

class Socials extends Component {


    render() {

        return (
            <div className="socialsSection" id="socials" >

                <div className="spacerForSocialsSection"></div>

                <div className="socials-header">Social Media</div>

                <div className="button-demo">

                    <div className="templateForButtons">

                        <Button className="discord" onClick={discordClicked} >
                            <i className="pi pi-discord"></i>
                            <span className="">Discord</span>
                        </Button>

                        <Button className="twitter" onClick={twitterClicked} >
                            <i className="pi pi-twitter"></i>
                            <span className="">Twitter</span>
                        </Button>

                        <Button className="telegram" onClick={telegramClicked} >
                            <i className="pi pi-send"></i>
                            <span className="">Telegram</span>
                        </Button>


                        <Button className="reddit" onClick={redditClicked} >
                            <i className="pi pi-eye"></i>
                            <span className="">Reddit</span>
                        </Button>



                    </div>



                </div>











            </div>
        );
    }
}

export default Socials;

// buttons - https://primefaces.org/primereact/showcase/#/button