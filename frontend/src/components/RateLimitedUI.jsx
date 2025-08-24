import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="wrapper fixed inset-0 z-20">

      {/* overlay */}
      <div class="overlay absolute inset-0 bg-black/85 backdrop-blur-xs">
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 fixed top-1/2 left-1/2 -translate-1/2 z-30">
        <div className="bg-primary/20 border-1 border-primary/40 rounded-3xl shadow-md shadow/20 backdrop-brightness-30 backdrop-blur-[2px]">
          <div className="flex flex-col md:flex-row items-center p-6">

            {/* Icon Section */}
            <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
              <ZapIcon className="size-10 text-primary" />
            </div>

            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
              <p className="text-base-content mb-1">
                You've made too many requests in a short period. Please wait a
                moment.
              </p>
              <p className="text-sm text-base-content/70 mt-2">
                Try again in a few seconds for the best experience.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
