import { useRef, useState } from "react";
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BMIControls from "./components/BMIControls";
import BMIResult from "./components/BMIResult";

setupIonicReact();

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();

  const weightInputRefs = useRef<HTMLIonInputElement>(null);
  const heightInputRefs = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRefs.current!.value;
    const enteredHeight = heightInputRefs.current!.value;

    if (!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setCalculatedBMI(bmi);
  };

  const resetInputs = () => {
    weightInputRefs.current!.value = "";
    heightInputRefs.current!.value = "";
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Height</IonLabel>
                <IonInput ref={heightInputRefs}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput ref={weightInputRefs}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BMIControls calculateBMI={calculateBMI} resetInputs={resetInputs} />

          {calculatedBMI && <BMIResult calculatedBMI={calculatedBMI} />}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
