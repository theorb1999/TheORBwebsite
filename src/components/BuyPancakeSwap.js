import React, { Component } from 'react';

import { Button } from 'primereact/button';

import '../css/BuyPancakeSwap.css';


console.log("called Buy PancakeSwap");

const goToPancakeSwap = () => {
    // CHANGEIT - Need Address Here
    // window.open("https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x97a3A94D10C684437B538827316dA5816710Ea7d");
    window.open("https://app.uniswap.org/#/swap?outputCurrency=0x97a3A94D10C684437B538827316dA5816710Ea7d");
}

class BuyPancakeSwap extends Component {


    render() {

        return (
            <div className="buyPancakeSwapSection" id="buy" >

            <div className="spacerForBuyPancakeSwapSection"></div>

                <Button className="p-button-raised p-button-rounded p-button-lg"
                    icon="pi pi-money-bill"
                    style={{ fontWeight: 'bold' }}
                    label="Buy on PancakeSwap"
                    onClick={goToPancakeSwap} />

            </div>
        );
    }
}

export default BuyPancakeSwap;


// TODO - V2 read only knob to show Amount of Liquidity in PancakeSwap
// To find the existing liquidity, check the Uniswap LP Tokens, call the getReserveFunctions