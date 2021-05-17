import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';

// Prime React
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


// Prime React Components
// import { Sidebar } from 'primereact/sidebar';
// import { Menu } from 'primereact/menu';
import { TabMenu } from 'primereact/tabmenu';
// import { Fieldset } from 'primereact/fieldset';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';

// Router
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';


// Sections
import Home from './components/Home';
// import Stars from './components/Stars';
import FAQ from './components/FAQ';
import Whitepaper from './components/Whitepaper';
import BuyPresale from './components/BuyPresale';
// import BuyPancakeSwap from './components/BuyPancakeSwap';   // CHANGEIT - comment or uncomment when needed
import Stake from './components/Stake';
import Team from './components/Team';
import Socials from './components/Socials';



// import WalletConnectProvider from "@walletconnect/web3-provider"; // wallet connect
// import Web3Modal from "web3modal";
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";
import detectEthereumProvider from '@metamask/detect-provider'





//import backgroundImg from './images/backgroundImageCompressed.jpg';

const { abi } = require('./web3/ContractInfo.json');        // CHANGEIT - Update the ContractInfo.json with the new stuff
// const { bytecode } = require('./web3/ContractInfo.json');

console.log("called App");


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAccountConnected: false,
      account: '',
      web3: '',
      addressOfORBcontract: '0x23103FE58009cE4F6870245b84031f4A56523b3f',    // CHANGEIT - set the live contract address
      contractOfORB: ''

    }

    this.BuyPresaleElement = React.createRef();
    this.StakeElement = React.createRef();

    this.itemsForTabMenu = [
      { label: 'Home', icon: 'pi pi-home', command: () => { window.location = "#home" } },
      { label: 'FAQ', icon: 'pi pi-question-circle', command: () => { window.location = "#faq" } },
      { label: 'Whitepaper', icon: 'pi pi-paperclip', command: () => { window.location = "#whitepaper" } },
      { label: 'Buy', icon: 'pi pi-money-bill', command: () => { window.location = "#buy" } },
      { label: 'Stake and Farm', icon: 'pi pi-dollar', command: () => { window.location = "#stake" } },
      { label: 'The Team', icon: 'pi pi-id-card', command: () => { window.location = "#team" } },
      { label: 'Socials', icon: 'pi pi-discord', command: () => { window.location = "#socials" } },
      { label: 'Connect to The ORB', icon: 'pi pi-shield', command: () => { this.connectToORBclicked() } }
    ];


    this.connectToORBclicked = this.connectToORBclicked.bind(this);
    this.checkIfAlreadyConnected = this.checkIfAlreadyConnected.bind(this);
    this.makeConnectionsToORBcontract = this.makeConnectionsToORBcontract.bind(this);

    // window.location = "/home"
    window.location = "#home"
  }
  componentDidMount() {

    this.checkIfAlreadyConnected();


  }


  async checkIfAlreadyConnected() {

    

    if (typeof window.ethereum !== 'undefined') {
      // set the state of web3

      const provider = await detectEthereumProvider()

      // const web3 = new Web3(window.ethereum);
      const web3 = new Web3(provider);
      this.setState({ web3: web3 });
      this.BuyPresaleElement.current.state.web3 = web3;
      this.StakeElement.current.state.web3 = web3;

      const accountsFromWeb3Check = await web3.eth.getAccounts();
      if (accountsFromWeb3Check.length == '0') {
        console.log("User is not logged in to MetaMask");
        this.setState({ isAccountConnected: false });
        this.BuyPresaleElement.current.state.isAccountConnected = false;
        this.StakeElement.current.state.isAccountConnected = false;
      }
      else {
        console.log("User is logged in to MetaMask");
        this.makeConnectionsToORBcontract();
      }
    }


  }


  async makeConnectionsToORBcontract() {




    // old way that doesn't work with trust wallet
    // var accountsFromMetaMask = await window.ethereum.send('eth_requestAccounts');   // trust wallet does not like that
    // console.log("accountsFromMetaMask.result[0]", accountsFromMetaMask.result[0]);
    // this.setState({ account: accountsFromMetaMask.result[0] });
    // this.BuyPresaleElement.current.state.account = accountsFromMetaMask.result[0];
    // this.StakeElement.current.state.account = accountsFromMetaMask.result[0];



    var accountsFromMetaMask = await window.ethereum.request({ method: 'eth_requestAccounts' });   // trust wallet does not like that
    console.log("accountsFromMetaMask[0]", accountsFromMetaMask[0]);
    this.setState({ account: accountsFromMetaMask[0] });
    this.BuyPresaleElement.current.state.account = accountsFromMetaMask[0];
    this.StakeElement.current.state.account = accountsFromMetaMask[0];




    var contractOfORB = new this.state.web3.eth.Contract(abi, this.state.addressOfORBcontract);
    this.setState({ contractOfORB: contractOfORB });
    this.BuyPresaleElement.current.state.contractOfORB = contractOfORB;
    this.StakeElement.current.state.contractOfORB = contractOfORB;

    this.setState({ isAccountConnected: true });
    this.BuyPresaleElement.current.state.isAccountConnected = true;
    this.StakeElement.current.state.isAccountConnected = true;

    // set the Web3 stuff
    this.BuyPresaleElement.current.state.web3 = this.state.web3;
    this.StakeElement.current.state.web3 = this.state.web3;

    // Call Presale Loading Functions
    this.BuyPresaleElement.current.accountConnectedForPresale();

    // Call Stake Loading Functions 
    this.StakeElement.current.checkIfStakingIsEnabled();
    this.StakeElement.current.checkIfAllStakingUnlocked();
    this.StakeElement.current.accountConnectedForStaking();


    // example of a call, for a read variable
    // var deadAddressVar = await contractOfORB.methods.deadAddress().call();
    // console.log("deadAddressVar", deadAddressVar);


  }


  async connectToORBclicked() {
    console.log("called connectToORBclicked");
    if (typeof window.ethereum !== 'undefined') {
      console.log('ethereum detected!');
      this.makeConnectionsToORBcontract();
    }
  }


  render() {
    return (
      <Router>


        <div className="App" >

          <TabMenu className="topNavMenu" model={this.itemsForTabMenu} activeItem={this.itemsForTabMenu[0]} style={{}} />

          <div id="orbimg"></div>



          <Home />



          <FAQ />



          <Whitepaper />



          <BuyPresale ref={this.BuyPresaleElement} />

          {/* <BuyPancakeSwap /> */}



          <Stake ref={this.StakeElement} />



          <Team />



          <Socials />



        </div>
      </Router>


    );
  }



}

export default App;