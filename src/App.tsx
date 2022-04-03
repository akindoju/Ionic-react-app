import { useRef, useState } from "react";
import {
  IonAlert,
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
import InputControl from "./components/InputControl";

setupIonicReact();

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnit, setCalcUnit] = useState<"mkg" | "ftlbs">("mkg");

  const weightInputRefs = useRef<HTMLIonInputElement>(null);
  const heightInputRefs = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRefs.current!.value;
    const enteredHeight = heightInputRefs.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Invalid Input");
      return;
    }

    const weightConversionFactor = calcUnit === "ftlbs" ? 2.2 : 1;
    const heightConversionFactor = calcUnit === "ftlbs" ? 3.28 : 1;

    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;

    const bmi = weight / (height * height);

    setCalculatedBMI(bmi);
  };

  const resetInputs = () => {
    weightInputRefs.current!.value = "";
    heightInputRefs.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };

  const selectCalcUnitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnit(selectedValue);
  };

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      ></IonAlert>
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl
                  selectedOption={calcUnit}
                  selectCalcUnitHandler={selectCalcUnitHandler}
                />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Your Height ({calcUnit === "mkg" ? "meters" : "feet"})
                  </IonLabel>
                  <IonInput type="number" ref={heightInputRefs}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Your Weight ({calcUnit === "mkg" ? "kilograms" : "pounds"}){" "}
                  </IonLabel>
                  <IonInput type="number" ref={weightInputRefs}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BMIControls
              calculateBMI={calculateBMI}
              resetInputs={resetInputs}
            />

            {calculatedBMI && <BMIResult calculatedBMI={calculatedBMI} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default App;
