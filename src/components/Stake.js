import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';


console.log("called Stake");

const stakeClicked = () => {
    console.log("called stakeClicked");
}

const unstakeAndFarmClicked = () => {
    console.log("called unstakeAndFarmClicked");
}

const updateAmountsORBtoStake = () => {
    console.log("called updateAmountsORBtoStake");
}

class Stake extends Component {


    render() {

        return (
            <div className="stakeSection" id="stake" >

                <div className="spacerForStakeSection"></div>

                <Card>

                    <div className="insideCardForStake">
                        <div className="stakingIsLiveHeader">
                            Staking is Enabled!
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="apyAmountHeader">
                            APY: 1,000,000%
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="orbOwnedDiv">
                            <label className="labelsForAmountStaked" >ORB in Wallet: </label>
                            <label className="labelsForAmountStaked" id="amountORBwallet" >3</label>
                        </div>

                        <div className="orbStakedDiv">
                            <label className="labelsForAmountStaked" >Staked ORB: </label>
                            <label className="labelsForAmountStaked" id="amountORBstaked" >3</label>
                        </div>

                        

                        <div className="orbGeneratedDiv">
                            <label className="labelsForAmountStaked" >ORB Generated: </label>
                            <label className="labelsForAmountStaked" id="amountORBgenerated" >3</label>
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="amountToStakeDiv">
                            <label className="labelsForORBtoStakeAmount" >ORB to Stake:  </label>
                            <InputNumber id="inputBNBamountID" onChange={updateAmountsORBtoStake} />
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="stakeAndUnstakeButtons">
                            <Button className="p-button-raised p-button-rounded p-button-lg"
                                icon="pi pi-sun"
                                style={{ fontWeight: 'bold', margin: 10 }}
                                label="Stake ORB!"
                                onClick={stakeClicked} />

                            <Button className="p-button-raised p-button-rounded p-button-lg"
                                icon="pi pi-moon"
                                style={{ fontWeight: 'bold', margin: 10 }}
                                label="Unstake and Harvest ORB!"
                                onClick={stakeClicked} />
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="timeUntilUnlockDiv">
                            <label className="labelsForAmountStaked" >Unlock Date: </label>
                            <label className="labelsForAmountStaked" id="amountORBwallet" >3</label>
                        </div>

                        <div className="stakeStartDateDiv">
                            <label className="labelsForAmountStaked" >Stake Start Date: </label>
                            <label className="labelsForAmountStaked" id="amountORBwallet" >3</label>
                        </div>

                        <div className="unlockDateDiv">
                            <label className="labelsForAmountStaked" >Unlock Date: </label>
                            <label className="labelsForAmountStaked" id="amountORBwallet" >3</label>
                        </div>


                    </div>




                </Card>


            </div>
        );
    }
}

export default Stake;



// amount must be at least 1 ORB
// cannot stake while already staking
// can only stake once