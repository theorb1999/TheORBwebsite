import React, { Component } from 'react';

import { Card } from 'primereact/card';

import avatarYoshikoImg from '../images/AvatarYoshiko.jpg';
import avatarCatImg from '../images/AvatarCat.jpg';
import avatarNoxImg from '../images/AvatarNox.jpg';



console.log("called Team");


class Team extends Component {
    render() {
        return (
            <div className="teamSection" id="team" >

                <div className="spacerForTeamSection"></div>

                <div className="team-header">The ORB Team</div>


                <div className="teamCardContainer">

                    <div className="yoshikoCardDiv">

                        <Card title="Yoshiko" subTitle="Contract Developer" style={{ width: '15em' }} header={<img src={avatarYoshikoImg} alt="Yoshiko Avatar" />}>
                            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                                Discord
                                <br />
                                Yoshiko RIP APOLLO
                                <br />
                                LEGEND#4279
                            </p>
                        </Card>

                    </div>

                    <div className="noxCardDiv">

                        <Card title="Nox" subTitle="Marketer" style={{ width: '15em' }} header={<img src={avatarNoxImg} alt="Nox Avatar" />}>
                            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                                Discord
                                <br />
                                Nox#6777
                                <br />
                                <br />
                            </p>
                        </Card>

                    </div>


                    <div className="catCardDiv">

                        <Card title="Cat" subTitle="Manager" style={{ width: '15em' }} header={<img src={avatarCatImg} alt="Cat Avatar" />}>
                            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                                Discord
                                <br />
                                CoffeeCat#6551
                                <br />
                                <br />
                            </p>
                        </Card>

                    </div>



                </div>







            </div>
        );
    }
}

export default Team;

// show a card for each team member