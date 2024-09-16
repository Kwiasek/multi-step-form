import StepLayout from "./StepLayout";
import { plans, addonsTemplate } from "../utils/planUtils";
import { useRegister } from "../context/RegisterContext";
import { useMemo } from "react";

export default function Step4() {
  const { monthlyPayment, addons, selectedPlan, jumpToStep } = useRegister();

  const chosenPlan = plans[selectedPlan];

  let addonsCost = 0;
  addonsTemplate.forEach((addon, index) => {
    if (addons[index]) {
      addonsCost += monthlyPayment ? addon.priceMo : addon.priceYr;
    }
  });

  const calculateValue = () => {
    return (
      (monthlyPayment ? chosenPlan.priceMo : chosenPlan.priceYr) + addonsCost
    );
  };

  const total = useMemo(calculateValue, [
    addonsCost,
    chosenPlan.priceMo,
    chosenPlan.priceYr,
    monthlyPayment,
  ]);

  return (
    <StepLayout
      header={"Finishing up"}
      subtext="Double-check everything looks OK before confirming."
      goBackButton
      confirmButton
    >
      <div className=" flex-col bg-neutralMagnolia rounded-md mb-5 p-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="font-medium text-primaryMarineBlue">
              {chosenPlan.name} ({monthlyPayment ? "Monthly" : "Yearly"})
            </p>
            <button
              className="w-fit text-neutralCoolGray underline hover:text-primaryPurplishBlue duration-200"
              onClick={() => jumpToStep(1)}
            >
              Change
            </button>
          </div>
          <p className="font-medium text-primaryMarineBlue">
            $
            {`${
              monthlyPayment
                ? chosenPlan.priceMo + "/mo"
                : chosenPlan.priceYr + "/yr"
            } `}
          </p>
        </div>
        <div className="h-px w-full bg-neutralLightGray my-4" />
        {Object.values(addons).map((addon, index) => {
          if (addon) {
            return (
              <div key={index} className="flex justify-between items-center">
                <p>{addonsTemplate[index].text}</p>
                <p>
                  +$
                  {monthlyPayment
                    ? addonsTemplate[index].priceMo + "/mo"
                    : addonsTemplate[index].priceYr + "/yr"}
                </p>
              </div>
            );
          }
        })}
        <div className="mt-4 flex justify-between">
          <p className="text-neutralCoolGray">
            Total (per {`${monthlyPayment ? "month" : "year"}`})
          </p>
          <span className="font-medium text-lg text-primaryPurplishBlue">
            ${`${total}`}/{`${monthlyPayment ? "mo" : "yr"}`}
          </span>
        </div>
      </div>
    </StepLayout>
  );
}
