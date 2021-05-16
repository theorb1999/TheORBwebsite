import React, { Component } from 'react';
import { Button } from 'primereact/button';
import '../css/Whitepaper.css';

import WhitepaperPDF from '../documents/TheORBWhitepaper.pdf';


console.log("called Whitepaper");


const faqButtonClicked = () => {
    window.location = "#faq"
}

class Whitepaper extends Component {

    render() {

        return (
            <div className="whitepaperSection" id="whitepaper" >

                <div className="spacerForWhitepaperSection"></div>

                <Button className="p-button-raised p-button-rounded p-button-lg"
                    icon="pi pi-paperclip"
                    style={{ fontWeight: 'bold' }}
                    label="Read the FAQ!"
                    onClick={faqButtonClicked}

                />


                <div className="orWhitePaperSection"> OR </div>


                <form method="get" target="_blank" rel="noopener noreferrer" action={WhitepaperPDF} >
                    <Button className="p-button-raised p-button-rounded p-button-lg"
                        icon="pi pi-paperclip"
                        style={{ fontWeight: 'bold' }}
                        label="Download the PDF Whitepaper!"
                    />
                </form>




            </div>
        );
    }
}

export default Whitepaper;