import thanksCheckmark from "../assets/images/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-8">
      <img src={thanksCheckmark} className="w-16" />
      <div className="flex flex-col gap-2 pb-6 items-center text-center">
        <h1 className="font-bold text-primaryMarineBlue text-3xl">
          Thank you!
        </h1>
        <span className="text-neutralCoolGray sm:w-1/2">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </span>
      </div>
    </div>
  );
}
