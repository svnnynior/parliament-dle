import React, { useEffect } from "react";
import { animated, useTrail } from "@react-spring/web";

const QuoteText = ({ text }: { text: string }) => {
  const [trails, api] = useTrail(text.length, () => ({
    from: { opacity: 0 },
    config: { duration: 50 },
  }));

  useEffect(() => {
    api.start({ opacity: 1 });
  }, [api]);

  const finishAnimation = () => {
    api.start({ opacity: 1, immediate: true });
  };

  return (
    <blockquote className="flex flex-col text-xl italic font-semibold dark:text-white">
      <div>
        <svg
          className="w-8 h-8 mb-2 -ml-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 290 290"
          fill="#777"
        >
          <path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"></path>
        </svg>
      </div>
      <div className="text-xl text-center" onClick={finishAnimation}>
        {trails.map((props, index) => (
          <animated.span
            key={index}
            style={{
              ...props,
              willChange: "opacity",
            }}
          >
            {text[index]}
          </animated.span>
        ))}
      </div>
      <div className="self-end">
        <svg
          className="w-8 h-8 mt-2 -mr-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 290 290"
          fill="#777"
        >
          <path d="M267.88 145V47.35h-97.65V145h48.82c0 26.92-21.9 48.82-48.82 48.82v48.82c53.93.01 97.65-43.71 97.65-97.64zM22.12 193.82v48.82c53.93 0 97.65-43.72 97.65-97.65V47.35H22.12V145h48.82c.01 26.92-21.89 48.82-48.82 48.82z"></path>
        </svg>
      </div>
    </blockquote>
  );
};

export default QuoteText;
