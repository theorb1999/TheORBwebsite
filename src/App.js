import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { TabMenu } from 'primereact/tabmenu';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Sections
import Home from './Home';
import FAQ from './FAQ';
import OrbImage from './OrbImage';
import BuyPancakeSwap from './BuyPancakeSwap';
import BuyPresale from './BuyPresale';
import Stake from './Stake';


//import backgroundImg from './images/backgroundImageCompressed.jpg';



console.log("called App");


class App extends Component {



    constructor(props) {
        super(props);
        this.itemsForTabMenu = [
            { label: 'Home', icon: 'pi pi-home', command: () => { window.location = "/#home" } },
            { label: 'FAQ', icon: 'pi pi-question-circle', command: () => { window.location = "/#faq" } },
            { label: 'Buy', icon: 'pi pi-money-bill', command: () => { window.location = "/#buy" } },
            { label: 'Stake and Farm', icon: 'pi pi-dollar', command: () => { window.location = "/#stake" } },
            { label: 'The Team', icon: 'pi pi-id-card', command: () => { window.location = "/#team" } },
            { label: 'Socials', icon: 'pi pi-discord', command: () => { window.location = "/#socials" } }
        ];

        window.location = "/#faq"

    }



    render() {
        return (
            <Router>
                <div className="App" >

                    <div class="backgroundImgSection">
                        
                        <div class="stars">
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
        <div class="container">
          <div class="star"></div>
        </div>
      </div>
                    </div>

                    <div className="topNavMenu" >
                        <TabMenu model={this.itemsForTabMenu} activeItem={this.itemsForTabMenu[0]} style={{ textAlign: 'right' }} />
                    </div>

                    

                    <Home />

                    <FAQ />

                    <BuyPresale />

                    {/* <BuyPancakeSwap /> */}

                    <Stake />

                    

=

                    <div className="logoSection" id="whitepaper" >
                    
                    </div>

                    <div className="logoSection" id="team" >
                   
                    </div>

                    <div className="logoSection" id="socials" >
                    
                    </div>



                </div>
            </Router>
        );
    }



}

export default App;