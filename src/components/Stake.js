import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';


console.log("called Stake");





class Stake extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAccountConnected: false,
            contractOfORB: '',
            account: '',

            stakingEnabled: false,

            stakingLogoHeader: '',
            ORBinWallet: 0,
            ORBstaked: 0,
            ORBgenereated: 0,

            valueOfInputORB: null,
            ORBinvalidError: '\u00A0',
            StyleOfORBinvalidError: {},

            timeUntilUnlock: 0,
            stakeStartDate: 0,
            unlockTimeDate: 0,

            stakeButtonDisabled: true,
            unstakeButtonDisabled: true
        };

        this.checkIfStakingIsEnabled = this.checkIfStakingIsEnabled.bind(this);

        this.updateAmountsORBtoStake = this.updateAmountsORBtoStake.bind(this);

        this.stakeClicked = this.stakeClicked.bind(this);
        this.unstakeAndFarmClicked = this.unstakeAndFarmClicked.bind(this);

        this.setInvalidAmountORB = this.setInvalidAmountORB.bind(this);
        this.setValidAmountORB = this.setValidAmountORB.bind(this);


        this.accountConnectedForStaking = this.accountConnectedForStaking.bind(this);
    }
    componentDidMount() {
        this.checkIfStakingIsEnabled();
        this.accountConnectedForStaking();

    }

    async checkIfStakingIsEnabled() {
        if (this.state.stakingEnabled) {
            this.setState({ stakingLogoHeader: 'Staking is Enabled!' });
            // TODO - need to write a bunch of writes, will probably need to make a recall once they connect to wallet
        }
        else{
            this.setState({ stakingLogoHeader: 'Staking is Disabled' });
        }
    }



    accountConnectedForStaking() {
        console.log("accountConnectedForStaking called");
    }



    setInvalidAmountORB(isMax) {

        this.setState({ stakeButtonDisabled: true });

        this.setState({ StyleOfORBinvalidError: { border: "1px solid red", borderRadius: "5px" } });

        if(isMax){
            this.setState({ ORBinvalidError: '1,000 ORB Max' });
        }
        else{
            this.setState({ ORBinvalidError: 'At least 1 ORB Required' });
        }
        
    }

    setValidAmountORB() {
        this.setState({ stakeButtonDisabled: false });
        this.setState({ StyleOfORBinvalidError: {} });
        this.setState({ ORBinvalidError: '\u00A0' });
    }




    updateAmountsORBtoStake(event) {
        console.log("called updateAmountsORBtoStake");
        var valueOfInputORB = event.value;
        this.setState({ valueOfInputORB: valueOfInputORB });

        // TODO - check if user has already staked, if so just disable it all and tell them.

        // TODO - check if staking is disabled already

        if (valueOfInputORB > 1000) {
            this.setInvalidAmountORB(true);
        }
        else if (valueOfInputORB < 1) {
            this.setInvalidAmountORB(false);   
        }
        else{
            this.setValidAmountORB();
        }



    }

    stakeClicked() {
        console.log("called stakeClicked");
    }

    unstakeAndFarmClicked() {
        console.log("called unstakeAndFarmClicked");
    }




    render() {

        return (
            <div className="stakeSection" id="stake" >

                <div className="spacerForStakeSection"></div>

                <Card>

                    <div className="insideCardForStake">
                        <div className="stakingIsLiveHeader">
                            {this.state.stakingLogoHeader}
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="apyAmountHeader">
                            APY: 1,000,000%
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="orbOwnedDiv">
                            <label className="labelsForAmountStaked" >ORB in Wallet: </label>
                            <label className="labelsForAmountStaked" id="amountORBwallet" >{this.state.ORBinWallet}</label>
                        </div>

                        <div className="orbStakedDiv">
                            <label className="labelsForAmountStaked" >Staked ORB: </label>
                            <label className="labelsForAmountStaked" id="amountORBstaked" >{this.state.ORBstaked}</label>
                        </div>

                        <div className="orbGeneratedDiv">
                            <label className="labelsForAmountStaked" >ORB Generated: </label>
                            <label className="labelsForAmountStaked" id="amountORBgenerated" >{this.state.ORBgenereated}</label>
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="amountToStakeDiv">
                            <label className="labelsForORBtoStakeAmount" >ORB to Stake:  </label>
                            <InputNumber id="inputBNBamountID"
                                mode="decimal"
                                minFractionDigits={2}
                                maxFractionDigits={2}
                                placeholder="1 ORB Minimum"
                                style={this.state.StyleOfORBinvalidError}
                                value={this.state.valueOfInputORB}
                                onChange={this.updateAmountsORBtoStake} />
                            
                        </div>

                        <small id="ORBinvalidID" className="p-error">{this.state.ORBinvalidError}</small>

                        <div className="stakeAndUnstakeButtons">
                            <Button className="p-button-raised p-button-rounded p-button-lg"
                                icon="pi pi-sun"
                                style={{ fontWeight: 'bold', margin: 10 }}
                                label="Stake ORB!"
                                loading={this.state.stakeButtonDisabled}
                                onClick={this.stakeClicked} />

                            <Button className="p-button-raised p-button-rounded p-button-lg"
                                icon="pi pi-moon"
                                style={{ fontWeight: 'bold', margin: 10 }}
                                label="Unstake and Harvest ORB!"
                                loading={this.state.unstakeButtonDisabled}
                                onClick={this.unstakeAndFarmClicked} />
                        </div>

                        <div className="spacerForCardBuyPresaleSection"></div>

                        <div className="timeUntilUnlockDiv">
                            <label className="labelsForAmountStaked" >Time Until Unlock: </label>
                            <label className="labelsForAmountStaked" id="timeUntilUnlockID" >{this.state.timeUntilUnlock}</label>
                        </div>

                        <div className="stakeStartDateDiv">
                            <label className="labelsForAmountStaked" >Stake Start Date: </label>
                            <label className="labelsForAmountStaked" id="stakeStartDateID" >{this.state.stakeStartDate}</label>
                        </div>

                        <div className="unlockDateDiv">
                            <label className="labelsForAmountStaked" >Unlock Date: </label>
                            <label className="labelsForAmountStaked" id="unlockTimeDateID" >{this.state.unlockTimeDate}</label>
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