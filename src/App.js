import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';

// Prime React
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


// Prime React Components
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { TabMenu } from 'primereact/tabmenu';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// Router
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


// Sections
import Home from './components/Home';
import './css/Home.css';
import Stars from './components/Stars';
import './css/Stars.css';
import FAQ from './components/FAQ';
import './css/FAQ.css';
import OrbImage from './components/OrbImage';
import './css/OrbImage.css';
import BuyPancakeSwap from './components/BuyPancakeSwap';
import './css/BuyPancakeSwap.css';
import BuyPresale from './components/BuyPresale';
import './css/BuyPresale.css';
import Stake from './components/Stake';
import './css/Stake.css';
import Team from './components/Team';
import './css/Team.css';
import Socials from './components/Socials';
import './css/Socials.css';


//import backgroundImg from './images/backgroundImageCompressed.jpg';

const { abi } = require('./web3/ContractInfo.json');
const { bytecode } = require('./web3/ContractInfo.json');

console.log("called App");


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAccountConnected: false,
      account: '',
      web3: '',
      addressOfORBcontract: '0x1ce2de406359853C7A8114E9009521d93d83b3bD',    // CHANGEIT - set the live contract address
      contractOfORB: ''
      
    }

    this.BuyPresaleElement = React.createRef();
    this.StakeElement = React.createRef();

    this.itemsForTabMenu = [
      { label: 'Home', icon: 'pi pi-home', command: () => { window.location = "#home" } },
      { label: 'FAQ', icon: 'pi pi-question-circle', command: () => { window.location = "#faq" } },
      { label: 'Buy', icon: 'pi pi-money-bill', command: () => { window.location = "#buy" } },
      { label: 'Stake and Farm', icon: 'pi pi-dollar', command: () => { window.location = "#stake" } },
      { label: 'The Team', icon: 'pi pi-id-card', command: () => { window.location = "#team" } },
      { label: 'Socials', icon: 'pi pi-discord', command: () => { window.location = "#socials" } },
      { label: 'Connect to The ORB', icon: 'pi pi-shield', command: () => { this.connectToORBclicked() } }
    ];


    this.connectToORBclicked = this.connectToORBclicked.bind(this);

    // window.location = "/home"
    window.location = "#home"
  }


  async connectToORBclicked() {
    console.log("called connectToORBclicked");
    if (typeof window.ethereum !== 'undefined') {
      console.log('ethereum detected!');
      const accountsFromMetaMask = await window.ethereum.send('eth_requestAccounts');
      this.setState({ account: accountsFromMetaMask[0] })

      // update children components
      this.BuyPresaleElement.current.state.account = accountsFromMetaMask[0];
      this.StakeElement.current.state.account = accountsFromMetaMask[0];

      const web3 = new Web3(window.ethereum);
      this.setState({ web3: web3 });
      const contractOfORB = new web3.eth.Contract(abi, this.state.addressOfORBcontract);
      this.setState({ contractOfORB: contractOfORB });
      // console.log("this.state.contractOfORB", this.state.contractOfORB);

      // need to update the children components that are using the Contract Address
      this.BuyPresaleElement.current.state.contractOfORB = contractOfORB;
      this.StakeElement.current.state.contractOfORB = contractOfORB;

      this.setState({ isAccountConnected: true });
      this.BuyPresaleElement.current.state.isAccountConnected = true;
      this.StakeElement.current.state.isAccountConnected = true;

      this.BuyPresaleElement.current.accountConnectedForPresale();
      this.StakeElement.current.accountConnectedForStaking();
      
      // example of a call, for a read variable
      const deadAddressVar = await contractOfORB.methods.deadAddress().call();
      // console.log("deadAddressVar", deadAddressVar);
    }
  }


  render() {
    return (
      <Router>
        <div className="App" >

          <TabMenu className="topNavMenu" model={this.itemsForTabMenu} activeItem={this.itemsForTabMenu[0]} style={{}} />

          <Stars />

          <Home />

          <Stars />

          <FAQ />

          <Stars />

          <BuyPresale ref={this.BuyPresaleElement} />

          {/* <BuyPancakeSwap /> */}

          <Stars />

          <Stake ref={this.StakeElement}  />

          <Stars />

          <Team />

          <Stars />

          <Socials />

          <Stars />





        </div>
      </Router>


    );
  }



}

export default App;