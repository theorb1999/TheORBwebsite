import React, { Component } from 'react';


import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { InputNumber } from 'primereact/inputnumber';

import '../css/BuyPresale.css';


console.log("called Buy Presale");

class BuyPresale extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAccountConnected: false,
            contractOfORB: '',
            account: '',
            web3: '',

            valueOfInputBNB: 0,
            valueOfInputORB: 0,

            presaleBuyLoading: '',

            buyButtonDisabled: true,
            ORBinvalidError: '\u00A0',
            BNBinvalidError: '\u00A0',
            StyleOfBNBinvalidError: {},
            StyleOfORBinvalidError: {},

            AccountNotConnectedError: '\u00A0',

            isInputBNBamountDisabled: true,
            isInputORBamountDisabled: true

        };

        this.updatedAmountBNB = this.updatedAmountBNB.bind(this);
        this.updatedAmountORB = this.updatedAmountORB.bind(this);
        this.setInvalidAmountsORBandBNB = this.setInvalidAmountsORBandBNB.bind(this);
        this.setValidAmountsORBandBNB = this.setValidAmountsORBandBNB.bind(this);
        this.buyOrbClicked = this.buyOrbClicked.bind(this);

        this.accountConnectedForPresale = this.accountConnectedForPresale.bind(this);
    }


    async accountConnectedForPresale() {
        console.log("accountConnectedForPresale called");
        console.log("this.isAccountConnected", this.state.isAccountConnected);
        if(this.state.isAccountConnected){
            this.setState({ AccountNotConnectedError: '\u00A0' });
            this.setState({ isInputBNBamountDisabled: false });
            this.setState({ isInputORBamountDisabled: false });

            var balanceOfConnectedAccount = await this.state.contractOfORB.methods.balanceOf(this.state.account).call();
            console.log("balanceOfConnectedAccount", balanceOfConnectedAccount);

            if(balanceOfConnectedAccount > 1000000000000){
                this.setState({ AccountNotConnectedError: 'ERROR!!! - You have too much ORB! \n 1,000 ORB Limit.' });
                this.setState({ isInputBNBamountDisabled: true });
                this.setState({ isInputORBamountDisabled: true });
            }

        }
        else{
            this.setState({ AccountNotConnectedError: 'ERROR!!! - Acount not connected \n Please click Connect to The ORB \n in the top right menu.' });
            this.setState({ isInputBNBamountDisabled: true });
            this.setState({ isInputORBamountDisabled: true });
            
        }


    }

    
    setInvalidAmountsORBandBNB(isMax) {

        this.setState({ buyButtonDisabled: true });
        this.setState({ StyleOfBNBinvalidError: { border: "1px solid red", borderRadius: "5px" } });
        this.setState({ StyleOfORBinvalidError: { border: "1px solid red", borderRadius: "5px" } });

        if(isMax){
            this.setState({ BNBinvalidError: '1 BNB Max' });
            this.setState({ ORBinvalidError: '1,000 ORB Max' });
        }
        else{
            this.setState({ BNBinvalidError: 'At least 0.01 BNB Required' });
            this.setState({ ORBinvalidError: 'At least 10 ORB Required' });
        }
        
    }

    setValidAmountsORBandBNB() {
        this.setState({ buyButtonDisabled: false });
        this.setState({ StyleOfORBinvalidError: {} });
        this.setState({ ORBinvalidError: '\u00A0' });
        this.setState({ StyleOfBNBinvalidError: {} });
        this.setState({ BNBinvalidError: '\u00A0' });
    }




    updatedAmountBNB(event) {
        console.log("called updatedAmountBNB");
        var valueOfInputBNB = event.value;
        this.setState({ valueOfInputBNB: valueOfInputBNB });
        var newORBvalue = valueOfInputBNB * 1000;
        console.log("newORBvalue", newORBvalue);
        this.setState({ valueOfInputORB: newORBvalue });

        if (valueOfInputBNB > 1) {
            this.setInvalidAmountsORBandBNB(true);
        }
        else if (valueOfInputBNB < 0.01) {
            this.setInvalidAmountsORBandBNB(false);   
        }
        else {
            this.setValidAmountsORBandBNB();
        }
    }



    updatedAmountORB(event) {
        console.log("called updatedAmountORB");
        var valueOfInputORB = event.value;
        this.setState({ valueOfInputORB: valueOfInputORB });
        var newBNBvalue = valueOfInputORB / 1000;
        console.log("newBNBvalue", newBNBvalue);
        this.setState({ valueOfInputBNB: newBNBvalue });

        if (valueOfInputORB > 1000) {
            this.setInvalidAmountsORBandBNB(true);
        }
        else if (valueOfInputORB < 10) {
            this.setInvalidAmountsORBandBNB(false);   
        }
        else {
            this.setValidAmountsORBandBNB();
        }
    }

    async buyOrbClicked() {
        console.log("called buyOrbClicked");

        // const deadAddressVar = await this.state.contractOfORB.methods.deadAddress().call();
        // console.log("deadAddressVar", deadAddressVar);


        var payableBNBAmount = this.state.valueOfInputBNB;
        var payableBNBAmountConverted = this.state.web3.utils.toWei(payableBNBAmount.toString(), 'ether');
        console.log("payableBNBAmountConverted", payableBNBAmountConverted);

        var keyCode = 1337;

        this.setState({ presaleBuyLoading: true, presaleBuyReceipt: '' });
        this.state.contractOfORB.methods.presaleBuy(keyCode)
            .send({ 
                from: this.state.account,
                value: payableBNBAmountConverted
            })
            .once('receipt', (receipt) => {
                this.setState({ presaleBuyLoading: false });
                this.setState({ presaleBuyReceipt: receipt });
            })
    }


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
                            Rate is 1 BNB = 1,000 ORB
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="maxMinOrbWarning">
                            Maximum 1,000 ORB per Address.
                            <br />
                            Maximum 1 BNB per Address.
                            <br />
                            Minimum 0.01 BNB per Address.
                            <br />
                            Minimum 10 ORB per Address.
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="inputBNBAmountdiv">
                            <label className="labelsForORBandBNBamount" >BNB to Sell:  </label>
                            <InputNumber
                                id="inputBNBamountID"
                                disabled={this.state.isInputBNBamountDisabled}
                                value={this.state.valueOfInputBNB}
                                mode="decimal"
                                minFractionDigits={2}
                                maxFractionDigits={2}
                                style={this.state.StyleOfBNBinvalidError}
                                onChange={this.updatedAmountBNB} />
                        </div>

                        <small id="BNBinvalidID" className="p-error">{this.state.BNBinvalidError}</small>

                        {/* <div className="spacerForCardBuyPresaleSection"></div> */}

                        <div className="inputORBAmountdiv">
                            <label className="labelsForORBandBNBamount">ORB to Buy:  </label>
                            <InputNumber
                                id="inputORBamountID"
                                disabled={this.state.isInputORBamountDisabled}
                                value={this.state.valueOfInputORB}
                                style={this.state.StyleOfORBinvalidError}
                                onChange={this.updatedAmountORB} />
                        </div>

                        <small id="ORBinvalidID" className="p-error">{this.state.ORBinvalidError}</small>

                        {/* <div className="spacerForCardBuyPresaleSection"></div> */}

                        <div className="AccountNotConnectedError">
                            {this.state.AccountNotConnectedError}
                        </div>



                        <Button className="p-button-raised p-button-rounded p-button-lg"
                            icon="pi pi-money-bill"
                            style={{ fontWeight: 'bold' }}
                            label="Buy ORB!"
                            loading={this.state.buyButtonDisabled}
                            onClick={this.buyOrbClicked} />
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