import React, { Component } from 'react';

import { Card } from 'primereact/card';

import avatarYoshikoImg from '../images/AvatarYoshiko.jpg';
import avatarYsImg from '../images/AvatarYs.jpg';
import avatarNoxImg from '../images/AvatarNox.jpg';

import '../css/Team.css';



console.log("called Team");


class Team extends Component {
    render() {
        return (
            <div className="teamSection" id="team" >

                <div className="spacerForTeamSection"></div>

                <div className="team-header">The ORB Team</div>


                <div className="teamCardContainer">

                    <div className="yoshikoCardDiv">

                        <Card title="Yoshiko" subTitle="Developer" style={{ width: '15em' }} header={<img src={avatarYoshikoImg} alt="Yoshiko Avatar" />}>
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


                    <div className="ysCardDiv">

                        <Card title="YS" subTitle="Marketer" style={{ width: '15em' }} header={<img src={avatarYsImg} alt="YS Avatar" />}>
                            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                                Discord
                                <br />
                                YS#6954
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