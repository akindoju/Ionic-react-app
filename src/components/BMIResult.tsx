import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";

const BMIResult: React.FC<{ calculatedBMI: number | string }> = ({
  calculatedBMI,
}) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <h2>{calculatedBMI}</h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResult;
