import React, {useRef, useState } from 'react';

import { IonApp, IonHeader , IonContent, IonToolbar, 
  IonTitle, IonGrid, IonRow, IonCol, IonLabel ,IonInput, 
  IonItem, IonAlert, IonCard, IonCardContent } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import BMIControls from './components/BMIControls';
import BMIResult from './components/BMIResult';
import InputControl from './components/InputControl';

const App: React.FC = () => {
  const [ calculatedBMI, setCalculatedBMI ] = useState<number>();
  const [ error,setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'mkg' | 'ftlbs'>('mkg');

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const calculateBMI = () =>{
    const enteredWeight = weightInputRef.current?.value;
    const enteredHeight = heightInputRef.current?.value;

    if(!enteredHeight || !enteredWeight || +enteredHeight <= 0 || +enteredWeight <=0){
      setError('Please enter a valid ( non-negative ) input number')
      return;
    }
    const weigthConversionFactor = (calcUnits) === 'ftlbs' ? 2.2 : 1;
    const heightConversionFactor = (calcUnits) === 'ftlbs' ? 3.28 : 1;

    const weight = +enteredWeight / weigthConversionFactor;
    const height = +enteredHeight / heightConversionFactor;
    const bmi = weight / (height * height);
    setCalculatedBMI(bmi);

  };
  const resetInputs = () =>{
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBMI(0);
  };

  const clearError = () =>{
    setError('');
  };

  const selectCalcUnitHandler = (selectedValue:'mkg' | 'ftlbs') =>{
      setCalcUnits(selectedValue);
  };

  return (
    <React.Fragment>
      <IonAlert 
                isOpen={!!error} 
                message={error} 
                buttons={[{text:'OK',handler:clearError}]}></IonAlert>
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI CALCULATOR</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol size-ms="8" offset-sm="2" size-md="6" offset-md="3">
                <IonCard className="ion-no-margin">
                  <IonCardContent>
                    <IonGrid className="ion-no-padding">
                      <IonRow>
                        <IonCol>
                          <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler}></InputControl>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">Height ({calcUnits === 'mkg' ? 'meters' : 'feet'})</IonLabel>
                            <IonInput type="number" ref={heightInputRef}></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">Weight ({calcUnits === 'mkg' ? 'kg' : 'lbs' })</IonLabel>
                            <IonInput type="number" ref={weightInputRef}></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <BMIControls onCalculate={calculateBMI} onReset={resetInputs}/>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                { calculatedBMI && (
                  <BMIResult result={calculatedBMI}/>
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>);
};

export default App;
