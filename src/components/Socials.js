import React, { Component } from 'react';
import { Button } from 'primereact/button';



console.log("called Socials");

const discordClicked = () => {
    window.open("https://discord.gg/ZaFABpJgC5", "_blank");
}

const twitterClicked = () => {
    window.open("", "_blank");
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

                        <Button className="telegram" onClick={twitterClicked} >
                            <i className="pi pi-send"></i>
                            <span className="">Telegram</span>
                        </Button>



                    </div>



                </div>











            </div>
        );
    }
}

export default Socials;

// buttons - https://primefaces.org/primereact/showcase/#/button