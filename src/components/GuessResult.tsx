import { Guess } from "@/app/types";
import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const GuessResult: React.FC<{ guess: Guess }> = ({ guess }) => {
  const [style, api] = useSpring(() => ({
    from: { opacity: 0, y: -20 },
    config: config.molasses,
  }));

  useEffect(() => {
    api.start({
      to: { opacity: 1, y: 0 },
      delay: 250,
    });
  }, [api]);

  return (
    <animated.div
      style={{
        ...style,
        willChange: "opacity, transform",
      }}
      className={cn(
        "w-full border rounded-md px-3 py-2 text-center",
        guess.isCorrect
          ? "bg-green-400 dark:bg-green-600"
          : "bg-red-300 dark:bg-red-900"
      )}
    >
      พรรค{guess.partyName}
    </animated.div>
  );
};

export default GuessResult;
