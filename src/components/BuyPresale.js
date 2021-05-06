import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { InputNumber } from 'primereact/inputnumber';


console.log("called Buy Presale");

const updateAmountsORBBNB = () => {
    console.log("called updateAmountsORBBNB");
    // TODO - update the amount of ORB or BNB depending on what is input
    // for example, if inputting 1 BNB, update the other side to have 100 ORB

}


const buyOrbClicked = () => {
    console.log("called buyOrbClicked");

}

class BuyPresale extends Component {


    render() {

        return (
            <div className="buyPresaleSection" id="buy" >

                <div className="spacerForBuyPresaleSection"></div>

                <Card>

                    <div className="insideCardForPresale">
                        <div className="presaleIsLiveHeader">
                            PreSale is Live!
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="presaleRate">
                            Rate is 1 BNB = 100 ORB
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="inputBNBAmountdiv">
                            <label className="labelsForORBandBNBamount" >BNB to Sell:  </label>
                            <InputNumber id="inputBNBamountID" onChange={updateAmountsORBBNB} />
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="inputORBAmountdiv">
                            <label className="labelsForORBandBNBamount">ORB to Sell:  </label>
                            <InputNumber id="inputORBamountID" onChange={updateAmountsORBBNB} />
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>



                        <Button className="p-button-raised p-button-rounded p-button-lg"
                            icon="pi pi-money-bill"
                            style={{ fontWeight: 'bold' }}
                            label="Buy ORB!"
                            onClick={buyOrbClicked} />
                    </div>




                </Card>


            </div>
        );
    }
}

export default BuyPresale;


// Card
// inside of card is FloatLabel and Buttons
// Amount left or 