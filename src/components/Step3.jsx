/* eslint-disable react/prop-types */
import { useRegister } from "../context/RegisterContext";
import StepLayout from "./StepLayout";
import { addonsTemplate } from "../utils/planUtils";
import checkmark from "../assets/images/icon-checkmark.svg";

export default function Step3() {
  const { monthlyPayment } = useRegister();

  return (
    <StepLayout
      header="Pick add-ons"
      subtext="Add-ons help enhance your gaming experience."
      goBackButton
    >
      <div className="flex-1 flex flex-col gap-3">
        {addonsTemplate.map((addon, index) => {
          return (
            <ListItem
              key={index}
              text={addon.text}
              subtext={addon.subtext}
              price={monthlyPayment ? addon.priceMo : addon.priceYr}
              index={index}
            />
          );
        })}
      </div>
    </StepLayout>
  );
}

function ListItem({ text, subtext, price, index }) {
  const { monthlyPayment, addons, toggleAddons } = useRegister();
  return (
    <div
      className={`flex gap-4 items-center  border hover:border-primaryMarineBlue rounded-md px-3 py-3 cursor-pointer duration-200 ${
        addons[index] ? "border-primaryMarineBlue" : "border-neutralCoolGray"
      }`}
      onClick={() => toggleAddons(index)}
    >
      {addons[index] ? (
        <div className="w-6 h-6 p-1 rounded-sm bg-primaryMarineBlue flex duration-150">
          <img src={checkmark} />
        </div>
      ) : (
        <div className="w-6 h-6 p-1 rounded-sm border border-neutralCoolGray duration-150" />
      )}
      <div className="flex-1 flex flex-col justify-start">
        <p className="font-medium text-primaryMarineBlue">{text}</p>
        <span className="text-neutralCoolGray">{subtext}</span>
      </div>
      <p className="text-primaryPurplishBlue">
        +${price}/{monthlyPayment ? "mo" : "yr"}
      </p>
    </div>
  );
}
