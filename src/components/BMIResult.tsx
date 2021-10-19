import React from 'react';
import {IonRow,IonCol,IonCard, IonCardContent} from '@ionic/react';
import { attachProps } from '@ionic/react/dist/types/components/utils';

const BMIResult:React.FC<{result:number}> = (props) =>{
    return (
        <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                    <h2 className="ion-text-center">Your Body-Mass-Index</h2>
                    <h2 className="ion-text-center">{props.result.toFixed(2)}</h2>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    );
}

export default BMIResult;