import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BMIControls: React.FC<{
  calculateBMI: () => void;
  resetInputs: () => void;
}> = ({ calculateBMI, resetInputs }) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={calculateBMI}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>

      <IonCol className="ion-text-right">
        <IonButton onClick={resetInputs}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BMIControls;
