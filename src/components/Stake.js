import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import '../css/Stake.css';

console.log("called Stake");





class Stake extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAccountConnected: false,
            contractOfORB: '',
            account: '',
            web3: '',

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

            timeUntilUnlockDetermined: 0,

            stakeButtonDisabled: true,
            unstakeButtonDisabled: true,
            isInputORBamountDisabled: true,
            AccountNotConnectedError: '\u00A0',
            isAllStakingUnlocked: false,

            stakingLoading: false,
            stakingReceipt: '',

            unStakingLoading: false,
            unStakingReceipt: '',

            countDownEnabled: false

        };

        this.checkIfStakingIsEnabled = this.checkIfStakingIsEnabled.bind(this);

        this.updateAmountsORBtoStake = this.updateAmountsORBtoStake.bind(this);

        this.stakeClicked = this.stakeClicked.bind(this);
        this.unstakeAndFarmClicked = this.unstakeAndFarmClicked.bind(this);

        this.setInvalidAmountORB = this.setInvalidAmountORB.bind(this);
        this.setValidAmountORB = this.setValidAmountORB.bind(this);


        this.accountConnectedForStaking = this.accountConnectedForStaking.bind(this);

        this.checkIfAllStakingUnlocked = this.checkIfAllStakingUnlocked.bind(this);

        this.countDownTillUnstakeThenUnstake = this.countDownTillUnstakeThenUnstake.bind(this);

        this.sleepFunction = this.sleepFunction.bind(this);

        this.getFormattedTime = this.getFormattedTime.bind(this);
        this.timeWithLeadingZeroes = this.timeWithLeadingZeroes.bind(this);

        this.getTimeLeftUntilUnlockString = this.getTimeLeftUntilUnlockString.bind(this);



    }

    // TODO - version 2 - reload page on transaction success?

    async checkIfStakingIsEnabled() {

        var isStakingReadyAfterSales = await this.state.contractOfORB.methods.isStakingReadyAfterSales().call();
        console.log("isStakingReadyAfterSales", isStakingReadyAfterSales);

        // var timeStakingIsEnabled = await this.state.contractOfORB.methods.timeStakingIsEnabled().call();
        // console.log("timeStakingIsEnabled", timeStakingIsEnabled);

        if (isStakingReadyAfterSales) {
            this.setState({ stakingEnabled: true });
            this.setState({ stakingLogoHeader: 'Staking is Enabled!' });
            this.setState({ isInputORBamountDisabled: false });
        }
        else {
            this.setState({ stakingEnabled: false });
            this.setState({ stakingLogoHeader: 'Staking is Disabled' });
            this.setState({ isInputORBamountDisabled: true });
            this.setState({ stakeButtonDisabled: true });
        }


    }


    // TODO - In version 2 I need to fix the logical mess that is the staking page lol

    async checkIfAllStakingUnlocked() {
        var isAllStakingUnlocked = await this.state.contractOfORB.methods.isAllStakingUnlocked().call();
        console.log("isAllStakingUnlocked", isAllStakingUnlocked);

        if (isAllStakingUnlocked) {
            this.setState({ isAllStakingUnlocked: true });
            this.setState({ unstakeButtonDisabled: false });

            this.setState({ AccountNotConnectedError: 'Staking is over. Unstakes only.' });
            this.setState({ isInputORBamountDisabled: true });
            this.setState({ stakeButtonDisabled: true });
        }
        else {
            this.setState({ isAllStakingUnlocked: false });
            this.setState({ unstakeButtonDisabled: true });
        }

    }


    timeWithLeadingZeroes(timePassedIn) {
        return (timePassedIn < 10 ? '0' : '') + timePassedIn;
    }

    getFormattedTime(dateTimePassed) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = dateTimePassed.getFullYear();
        var month = months[dateTimePassed.getMonth()];
        var date = this.timeWithLeadingZeroes(dateTimePassed.getDate());
        var hour = this.timeWithLeadingZeroes(dateTimePassed.getHours());
        var min = this.timeWithLeadingZeroes(dateTimePassed.getMinutes());
        var sec = this.timeWithLeadingZeroes(dateTimePassed.getSeconds());
        var dateFormatted = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return dateFormatted;
    }


    getTimeLeftUntilUnlockString(timePassedIn) {

        var timeDeterminations = timePassedIn;

        var hoursLeftUntilUnlock = Math.floor(timeDeterminations / 3600);
        // console.log("hoursLeftUntilUnlock", hoursLeftUntilUnlock);

        var minutesInSecondsModulo = timeDeterminations % 3600;
        // console.log("minutesInSecondsModulo", minutesInSecondsModulo);

        var minutesLeftUntilUnlock = Math.floor(minutesInSecondsModulo / 60);
        // console.log("minutesLeftUntilUnlock", minutesLeftUntilUnlock);

        var secondsLeftUntilUnlock = minutesInSecondsModulo % 60;
        // console.log("secondsLeftUntilUnlock", secondsLeftUntilUnlock);

        var stringBuildForTimeLeft = hoursLeftUntilUnlock + '.hrs ' + minutesLeftUntilUnlock + '.mins ' + secondsLeftUntilUnlock + '.s';
        this.setState({ timeUntilUnlockDetermined: stringBuildForTimeLeft });

    }





    async accountConnectedForStaking() {
        console.log("accountConnectedForStaking called");
        console.log("this.isAccountConnected", this.state.isAccountConnected);
        if (this.state.isAccountConnected) {
            this.setState({ AccountNotConnectedError: '\u00A0' });
            this.setState({ isInputORBamountDisabled: false });

            console.log("this.state.account", this.state.account);


            var balanceOfConnectedAccount = await this.state.contractOfORB.methods.balanceOf(this.state.account).call();
            var balancedCalculated = (balanceOfConnectedAccount / Math.pow(10, 9));
            // console.log("balancedCalculated", balancedCalculated);
            this.setState({ ORBinWallet: balancedCalculated });

            if (balancedCalculated < 1) {     // check if they have enough ORB to stake
                this.setState({ AccountNotConnectedError: 'Cannot Stake - 0 ORB in Wallet' });
                this.setState({ isInputORBamountDisabled: true });
                this.setState({ stakeButtonDisabled: true });
            }




            var hasAccountStakedOrb = await this.state.contractOfORB.methods.hasStakedORB(this.state.account).call();
            // console.log("hasAccountStakedOrb", hasAccountStakedOrb);

            if (hasAccountStakedOrb) {     // check if they have staked ORB already
                this.setState({ AccountNotConnectedError: 'Cannot Stake - Already Staked ORB' });
                this.setState({ isInputORBamountDisabled: true });
                this.setState({ stakeButtonDisabled: true });
            }

            // get the basic stats
            var amountOfORBstaked = await this.state.contractOfORB.methods.amountORBstaked(this.state.account).call();
            var amountOfORBstakedCalculated = (amountOfORBstaked / Math.pow(10, 9));
            // console.log("amountOfORBstakedCalculated", amountOfORBstakedCalculated);

            var howMuchORBhasBeenGeneratedSoFar = await this.state.contractOfORB.methods.howMuchORBhasBeenGeneratedSoFar(this.state.account).call();
            var howMuchORBhasBeenGeneratedSoFarCalculated = (howMuchORBhasBeenGeneratedSoFar / Math.pow(10, 9));
            // console.log("howMuchORBhasBeenGeneratedSoFarCalculated", howMuchORBhasBeenGeneratedSoFarCalculated);

            // get the unlocking stats
            var timeStartedStaking = await this.state.contractOfORB.methods.timeStartedStaking(this.state.account).call();
            var timeStartedStakingAsTime = new Date(timeStartedStaking * 1000);
            var timeStartedStakingConverted = this.getFormattedTime(timeStartedStakingAsTime);
            // console.log("timeStartedStakingConverted", timeStartedStakingConverted);

            var stakeUnlockTime = await this.state.contractOfORB.methods.stakeUnlockTime(this.state.account).call();
            var stakeUnlockTimeAsTime = new Date(stakeUnlockTime * 1000);
            var stakeUnlockTimeConverted = this.getFormattedTime(stakeUnlockTimeAsTime);
            // console.log("stakeUnlockTimeConverted", stakeUnlockTimeConverted);

            var timeUntilStakingUnlocks = await this.state.contractOfORB.methods.timeUntilStakingUnlocks(this.state.account).call();
            console.log("timeUntilStakingUnlocks", timeUntilStakingUnlocks);


            if (timeStartedStaking == 0) {        // if the user isn't staking yet, just put NA
                this.setState({ ORBstaked: 'N/A' });
                this.setState({ ORBgenereated: 'N/A' });

                this.setState({ timeUntilUnlock: 'N/A' });
                this.setState({ stakeStartDate: 'N/A' });
                this.setState({ unlockTimeDate: 'N/A' });

                this.setState({ timeUntilUnlockDetermined: 'N/A' });
            }
            else {
                this.setState({ ORBstaked: amountOfORBstakedCalculated });
                this.setState({ ORBgenereated: howMuchORBhasBeenGeneratedSoFarCalculated });

                this.setState({ timeUntilUnlock: timeUntilStakingUnlocks });
                this.setState({ stakeStartDate: timeStartedStakingConverted });
                this.setState({ unlockTimeDate: stakeUnlockTimeConverted });

                this.getTimeLeftUntilUnlockString(timeUntilStakingUnlocks);

                var hasAccountUnstakedOrb = await this.state.contractOfORB.methods.hasUnStakedORB(this.state.account).call();
                console.log("hasAccountUnstakedOrb", hasAccountUnstakedOrb);

                if (hasAccountUnstakedOrb) {
                    this.setState({ timeUntilUnlockDetermined: 'Already Unstaked' });
                    this.setState({ unstakeButtonDisabled: true });
                }
                else if (!this.state.isAllStakingUnlocked) {    // if all staking isn't unlocked, then check for unstaking normally
                    if (timeUntilStakingUnlocks != 0) {
                        this.setState({ unstakeButtonDisabled: true });
                        if (!this.state.countDownEnabled) {       // if it's not enabled, we need to enable this to get it ticking down
                            this.setState({ countDownEnabled: true });
                            this.countDownTillUnstakeThenUnstake();
                        }
                    }
                    else {
                        this.setState({ timeUntilUnlockDetermined: 'UNLOCK NOW!!' });
                        this.setState({ unstakeButtonDisabled: false });
                    }
                }
                else {
                    this.setState({ timeUntilUnlockDetermined: 'UNLOCK NOW!' });
                }


            }

        }
        else {
            this.setState({ AccountNotConnectedError: 'ERROR!!! - Acount not connected \n Please click Connect to The ORB \n in the top right menu.' });
            this.setState({ isInputORBamountDisabled: true });
            this.setState({ stakeButtonDisabled: true });
            this.setState({ unstakeButtonDisabled: true });
        }
    }



    setInvalidAmountORB(isMax) {

        this.setState({ stakeButtonDisabled: true });

        this.setState({ StyleOfORBinvalidError: { border: "1px solid red", borderRadius: "5px" } });

        if (isMax) {
            this.setState({ ORBinvalidError: '1,000 ORB Max' });
        }
        else {
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

        if (valueOfInputORB > 1000) {
            this.setInvalidAmountORB(true);
        }
        else if (valueOfInputORB < 1) {
            this.setInvalidAmountORB(false);
        }
        else {
            this.setValidAmountORB();
        }



    }

    stakeClicked() {
        console.log("called stakeClicked");
        var valueOfInputORB = this.state.valueOfInputORB;
        // might need to multiply by 10*9
        var valueOfInputORBConverted = (valueOfInputORB * Math.pow(10, 9));    // multiply by the decimals of the token
        console.log("valueOfInputORBConverted", valueOfInputORBConverted);

        this.setState({ stakingLoading: true, stakingReceipt: '' });
        this.state.contractOfORB.methods.stakeORB(valueOfInputORBConverted)
            .send({
                from: this.state.account
            })
            .once('receipt', (receipt) => {
                this.setState({ stakingLoading: false });
                this.setState({ stakingReceipt: receipt });
            })
    }



    unstakeAndFarmClicked() {
        console.log("called unstakeAndFarmClicked");
        this.setState({ unStakingLoading: true, unStakingReceipt: '' });
        this.state.contractOfORB.methods.unStakeORB()
            .send({
                from: this.state.account
            })
            .once('receipt', (receipt) => {
                this.setState({ stakingLoading: false });
                this.setState({ stakingReceipt: receipt });
            })
    }



    async countDownTillUnstakeThenUnstake() {
        console.log("countDownTillUnstakeThenUnstake called");

        while (this.state.countDownEnabled) {
            var timeUntilUnlockVar = this.state.timeUntilUnlock;
            console.log("timeUntilUnlockVar", timeUntilUnlockVar);

            var subtract1Second = timeUntilUnlockVar - 1;
            this.setState({ timeUntilUnlock: subtract1Second });

            this.getTimeLeftUntilUnlockString(subtract1Second);

            if (subtract1Second == 0) {
                console.log("set state called");
                this.setState({ countDownEnabled: false });
                this.setState({ unstakeButtonDisabled: false });
            }

            await this.sleepFunction(1000);
        }

    }
    sleepFunction(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
                                disabled={this.state.isInputORBamountDisabled}
                                mode="decimal"
                                minFractionDigits={2}
                                maxFractionDigits={2}
                                placeholder="1 ORB Minimum"
                                style={this.state.StyleOfORBinvalidError}
                                value={this.state.valueOfInputORB}
                                onChange={this.updateAmountsORBtoStake} />

                        </div>

                        <small id="ORBinvalidID" className="p-error">{this.state.ORBinvalidError}</small>

                        <div className="AccountNotConnectedError">
                            {this.state.AccountNotConnectedError}
                        </div>

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
                            <label className="labelsForAmountStaked" id="timeUntilUnlockID" >{this.state.timeUntilUnlockDetermined}</label>
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