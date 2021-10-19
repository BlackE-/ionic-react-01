import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

const InputControl:React.FC<{
        selectedValue:'mkg'| 'ftlbs';
        onSelectValue:(value:'mkg' | 'ftlbs')=> void;
    }> = (props) =>{

    const inputChangeHadler = (event:CustomEvent) =>{
        props.onSelectValue(event.detail.value);
    };

    return ( 
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHadler}>
            <IonSegmentButton value="mkg">
                <IonLabel>m/km</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
}

export default InputControl;