import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

const RateLimitedUI = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    let timer;
    if(isWaiting && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev)=> prev - 1);
      }, 1000);
    }

    // reload page automatically after 60s
    if(timeLeft === 0 && isWaiting) {
      window.location.reload();
    }

    return () => clearInterval(timer);
  }, [timeLeft, isWaiting]);

  return (
    <div className="wrapper fixed inset-0 z-20">

      {/* overlay */}
      <div className="overlay absolute inset-0 bg-black/85 backdrop-blur-xs">
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 fixed top-1/2 left-1/2 -translate-1/2 z-30">
        <div className="bg-primary/20 border-1 border-primary/40 rounded-3xl shadow-md shadow/20 backdrop-brightness-30 backdrop-blur-[2px]">
          <div className="flex flex-col md:flex-row items-center p-6">

            {/* Icon Section */}
            <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
              <Zap className="size-10 text-primary" />
            </div>

            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
              <p className="text-base-content mb-1">
                You've made too many requests in a short period. Please wait a
                moment.
              </p>
              <p className="text-sm text-base-content/70 mt-2">
                Please wait {timeLeft} {timeLeft > 1 ? "seconds" : "second"}. The page will refresh automatically.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
