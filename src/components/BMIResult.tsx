import React from 'react';
import {IonCard, IonCardContent} from '@ionic/react';
import { attachProps } from '@ionic/react/dist/types/components/utils';
import './BMIResult.css';

const BMIResult:React.FC<{result:number}> = (props) =>{
    return (
        <IonCard id="result">
          <IonCardContent>
              <h2 className="ion-text-center">Your Body-Mass-Index</h2>
              <h3 className="ion-text-center">{props.result.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
    );
}

export default BMIResult;