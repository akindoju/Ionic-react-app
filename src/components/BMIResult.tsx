import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";

const BMIResult: React.FC<{ calculatedBMI: number }> = ({ calculatedBMI }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Body-Mass-Index</h2>
            <h3>{calculatedBMI.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResult;
