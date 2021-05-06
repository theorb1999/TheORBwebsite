import React, { Component } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';

console.log("called OrbImage");

class OrbImage extends Component {

    render() {

        return (
            <div className="orbSection" id="orbImage" >

                <Button className="p-button-raised p-button-rounded p-button-lg"
                    icon="pi pi-question-circle"
                    style={{ fontWeight: 'bold' }}
                    label="Orb" />

                <div className="spacerForFAQsections"></div>


                <Fieldset legend="Why am I here?">
                    <p>To suffer</p>
                </Fieldset>

                




            </div>
        );
    }
}

export default OrbImage;