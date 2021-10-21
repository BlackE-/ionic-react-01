import React from 'react';
import {  IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BMIControls: React.FC<{
    onCalculate:() => void; 
    onReset:()=>void;
}> = (props) =>{
    return (
        <IonRow className="ion-margin-top">
          <IonCol className="ion-text-center" size="12" size-md="6">
            <IonButton color="secondary" expand="block" onClick={props.onCalculate}>
              <IonIcon slot="start" icon={calculatorOutline}/>
              CALCULATE
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center" size="12" size-md="6">
            <IonButton color="medium" fill="clear" onClick={props.onReset}>
              <IonIcon slot="start" icon={refreshOutline}/>
              RESET
            </IonButton>
          </IonCol>
        </IonRow>
    );
};

export default BMIControls;