import React from 'react';
import {IonRow,IonCol,IonCard, IonCardContent} from '@ionic/react';
import { attachProps } from '@ionic/react/dist/types/components/utils';

const BMIResult:React.FC<{result:number | string;}> = (props) =>{
    return (
        <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h2>{props.result}</h2>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    );
}

export default BMIResult;