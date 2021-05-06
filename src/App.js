import React, { Component } from 'react';
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


console.log("called App");


class App extends Component {

  constructor(props) {
    super(props);

    this.itemsForTabMenu = [
      { label: 'Home', icon: 'pi pi-home', command: () => { window.location = "#home" } },
      { label: 'FAQ', icon: 'pi pi-question-circle', command: () => { window.location = "#faq" } },
      { label: 'Buy', icon: 'pi pi-money-bill', command: () => { window.location = "#buy" } },
      { label: 'Stake and Farm', icon: 'pi pi-dollar', command: () => { window.location = "#stake" } },
      { label: 'The Team', icon: 'pi pi-id-card', command: () => { window.location = "#team" } },
      { label: 'Socials', icon: 'pi pi-discord', command: () => { window.location = "#socials" } },
      { label: 'Connect to The ORB', icon: 'pi pi-shield', command: () => {  } }
    ];

    // window.location = "/home"
    window.location = "#home"
  }


  render() {
    return (
      <Router>
        <div className="App" >

          <TabMenu className="topNavMenu" model={this.itemsForTabMenu} activeItem={this.itemsForTabMenu[0]} style={{ }} />

          <Stars />

          <Home />

          <Stars />

          <FAQ />

          <Stars />

          <BuyPresale />

          {/* <BuyPancakeSwap /> */}

          <Stars />

          <Stake />

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