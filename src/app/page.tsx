"use client";

import QuoteText from "@/components/QuoteText";
import ThemeToggle from "@/components/ThemeToggle";
import PartyInput from "@/components/PartyInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { parties, Party } from "@/data/party";
import PromiseDialog from "@/components/PromiseDialog";
import { DailyPromise } from "@/data/promise";
import { animated, config, useSpring } from "@react-spring/web";
import { useReward } from "react-rewards";
import HowToDialog from "@/components/HowToDialog";
import { Guess } from "./types";
import GuessResult from "@/components/GuessResult";
import { PersonStanding, Share2 } from "lucide-react";
import { toast } from "sonner";
import { getDailyPromise } from "@/lib/quiz";

const EmptyGuess: React.FC = () => {
  return (
    <div className="w-full bg-zinc-100 dark:bg-zinc-900 border rounded-md px-3 py-2">
      &nbsp;
    </div>
  );
};

const generateShareText = (promise: DailyPromise, guesses: Guess[]) => {
  return `Promisdle #${promise.number} (${guesses.length}/6)\n\n${guesses
    .map((guess) => (guess.isCorrect ? "🟩" : "🟥"))
    .join(
      ""
    )}\n\nคุณยังจำสิ่งที่พรรคการเมืองพูดได้มั้ย?\nลองมาเล่นกันที่: https://parliamentdle.fun`;
};

const REWARD_EMOJI_LIST = [
  "🤓",
  "😊",
  "🥳",
  "😎",
  "😮‍💨",
  "📚",
  "📖",
  "🔖",
  "📝",
  "📃",
  "💡",
];

export default function PromiseDle() {
  const MAX_GUESSES = 6;
  const promise: DailyPromise = getDailyPromise(new Date());

  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [selectedParty, setSelectedParty] = useState<Party | null>(null);
  const [isDone, setIsDone] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const [resultAnimation, resultAnimationApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: config.molasses,
  }));
  const [footerAnimation, footerAnimationApi] = useSpring(() => ({
    from: { y: -100 },
    config: config.molasses,
  }));
  const { reward: correctReward } = useReward("correctReward", "emoji", {
    startVelocity: 30,
    elementCount: 20,
    lifetime: 100,
    emoji: REWARD_EMOJI_LIST.sort(() => 0.5 - Math.random()).slice(0, 3),
  });

  const onPartyChange = (party: Party | null) => {
    setSelectedParty(party);
  };

  const onGuess = useCallback(
    (party: Party) => {
      const isCorrect = promise.partyId === party.id;
      const guess: Guess = {
        partyId: party.id,
        partyName: party.name,
        isCorrect: isCorrect,
      };
      setGuesses((prevGuesses) => [...prevGuesses, guess]);
      setSelectedParty(null);

      if (isCorrect || guesses.length >= MAX_GUESSES - 1) {
        setIsDone(true);
        setIsCorrect(isCorrect);
      }
    },
    [guesses, promise.partyId]
  );

  const numGuesses = guesses.length;
  const partyList = parties.filter(
    (party) => !guesses.some((guess) => guess.partyId === party.id)
  );

  useEffect(() => {
    if (isDone) {
      resultRef.current?.scrollIntoView({ behavior: "smooth" });
      resultAnimationApi.start({
        to: { opacity: 1 },
        delay: 500,
      });
      footerAnimationApi.start({
        to: { y: 0 },
      });
    }
    if (isCorrect) {
      setTimeout(() => {
        correctReward();
      }, 600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDone, isCorrect, footerAnimationApi, resultAnimationApi]);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-row justify-between items-center p-4 border-b border-gray-200">
        <HowToDialog />
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-3xl font-bold">
            🇹🇭 Parliament-dle
          </span>
          <span className="text-sm md:text-base">
            Guess who made the promise
          </span>
        </div>
        <ThemeToggle />
      </header>
      <main className="flex flex-col px-14 w-full justify-center items-center">
        <div className="flex flex-col gap-4 max-w-[300px] md:max-w-[380px] justify-center items-center">
          <QuoteText text={promise.title} />
          <p className="mt-4">พรรคการเมืองไหนเคยให้คำสัญญานี้ไว้ ?</p>
          <div className="w-full  flex flex-col gap-2">
            {guesses.map((guess) => (
              <GuessResult key={guess.partyId} guess={guess} />
            ))}
            {!isDone && (
              <div className="flex flex-row gap-2">
                <PartyInput
                  numGuess={guesses.length}
                  partyList={partyList}
                  selectedParty={selectedParty}
                  onPartyChange={onPartyChange}
                />
                <Button
                  disabled={!selectedParty}
                  onClick={() => {
                    if (!selectedParty) return;
                    onGuess(selectedParty);
                  }}
                >
                  ทาย
                </Button>
              </div>
            )}
            {Array.from({ length: MAX_GUESSES - numGuesses - 1 }).map(
              (_, index) => (
                <EmptyGuess key={index} />
              )
            )}
            {isDone && guesses.length < MAX_GUESSES && <EmptyGuess />}
          </div>
          <animated.div
            id="correctReward"
            ref={resultRef}
            style={{
              ...resultAnimation,
              willChange: "opacity",
            }}
            className="flex flex-col gap-2 mt-4 items-center"
          >
            {isCorrect ? (
              <p className="text-center">
                เก่งมาก ! 👍🏼
                <br />
                คุณจำสิ่งที่เขาพูดได้ แต่คนที่พูดจะยังจำได้อยู่มั้ยนะ ?
              </p>
            ) : (
              <div>
                <p className="text-center">
                  👋🏼 &nbsp; ไม่เป็นไรนะ <br />
                  ขนาดคนที่เป็นคนให้คำสัญญาเอง บางทีเขาก็ยังจำไม่ได้เลย...
                </p>
                <div className="flex flex-col text-lg mt-4 text-center">
                  <p>
                    เฉลย: <b>พรรค{promise.partyName}</b>
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-row gap-2">
              <PromiseDialog promise={promise} />
              <Button
                variant="outline"
                className="border border-zinc-600 dark:border-zinc-300"
                onClick={() => {
                  const text = generateShareText(promise, guesses);
                  navigator.clipboard.writeText(text);
                  toast.success("คัดลอกผลลัพธ์สำเร็จ");
                }}
              >
                <Share2 />
              </Button>
            </div>
          </animated.div>
        </div>
      </main>
      <animated.footer
        style={{
          ...footerAnimation,
          willChange: "transform",
        }}
        className="pb-4 md:pb-8 w-full flex flex-col gap-3 items-center justify-center"
      >
        <span className="flex flex-row">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          &nbsp; Created using data from &nbsp;
          <a
            className="flex bold underline underline-offset-2 hover:underline-offset-4 -ml-1"
            href="https://wevis.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeVIS
          </a>
        </span>
        <span className="flex flex-row text-sm text-zinc-400 dark:text-zinc-600">
          <PersonStanding size={18} />
          &nbsp;Made by &nbsp;&nbsp;
          <a
            className="flex bold underline underline-offset-2 hover:underline-offset-4 -ml-1"
            href="https://github.com/svnnynior"
            target="_blank"
            rel="noopener noreferrer"
          >
            @svnnynior
          </a>
        </span>
      </animated.footer>
    </div>
  );
}
