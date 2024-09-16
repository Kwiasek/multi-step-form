import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ThankYou from "./components/ThankYou";
import { useRegister } from "./context/RegisterContext";

function App() {
  const { step } = useRegister();
  let child = null;

  switch (step) {
    case 0:
      child = <Step1 />;
      break;
    case 1:
      child = <Step2 />;
      break;
    case 2:
      child = <Step3 />;
      break;
    case 3:
      child = <Step4 />;
      break;
    case 4:
      child = <ThankYou />;
      break;
    default:
      break;
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-primaryLightBlue">
      <div className="flex bg-neutralWhite rounded-lg p-5 gap-12">
        <Sidebar />
        <div className="pt-12 sm:w-[40vw] lg:w-[50vw]">{child}</div>
      </div>
    </main>
  );
}

export default App;
