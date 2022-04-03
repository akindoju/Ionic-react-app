import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const InputControl: React.FC<{
  selectedOption: "mkg" | "ftlbs";
  selectCalcUnitHandler: (value: "mkg" | "ftlbs") => void;
}> = ({ selectedOption, selectCalcUnitHandler }) => {
  const inputChangeHandler = (event: CustomEvent) => {
    selectCalcUnitHandler(event.detail.value);
  };

  return (
    <IonSegment value={selectedOption} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
