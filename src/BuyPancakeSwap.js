import React, { Component } from 'react';

import { Button } from 'primereact/button';


console.log("called Buy PancakeSwap");

const goToPancakeSwap = () => {
    // CHANGEIT - Need Address Here
    // window.location.href = 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xC9c7C6A590E82C576de7553142d47a5fb63f9e90';
    window.location.href = 'https://app.uniswap.org/#/swap?outputCurrency=0x868eb37Bedd5906D0c21e17a5CeAA46A5e4cab94';
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


// TODO - read only knob to show Amount of Liquidity in PancakeSwap

// To find the existing liquidity, check the Uniswap LP Tokens, call the getReserveFunctions