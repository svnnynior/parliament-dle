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

const EmptyGuess: React.FC = () => {
  return (
    <div className="w-full bg-zinc-100 dark:bg-zinc-900 border rounded-md px-3 py-2">
      &nbsp;
    </div>
  );
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
  const promise: DailyPromise = {
    title:
      "จัดให้มี Mini Sport Complex ในทุกอำเภอเพื่อการออกกำลังกายและฝึกทักษะด้านกีฬา",
    partyId: 1,
    partyName: "ประชาธิปัตย์",
    status: "nodata",
    explain:
      "ในสังคมไทยมีผู้สูงอายุ 1 ใน 5 ของประชาชนทั้งหมด พรรคเพื่อชาติมีนโยบายที่จากเดิมเงินช่วยเหลือผู้สูงอายุคิดแบบขั้นบันได เป็นตั้งแต่อายุ 60 ปีขึ้นไป ได้เงิน 2,000บาทต่อเดือน เท่ากันหมด ตลอดชีพ ซึ่งปัจจุบันเป็นแจกเบี้ยยังชีพผู้สูงอายุเป็นระบบขั้นบันได โดยผู้มีอายุ 60 ปี ถึง 69 ปี ได้รับเบี้ยยังชีพคนชรา 600 บาทต่อเดือน อายุ 70 ปี ถึง 79 ปี ได้รับเงิน 700 บาทต่อเดือน อายุ 80 ปี ถึง 89 ปี ได้รับ 800 บาทต่อเดือน อายุ 90ปีขึ้นไป 1,000 บาทต่อเดือน และเพิ่มแค่กลุ่มเปราะบางที่ถือบัตรสวัสดิการแห่งรัฐ\n\nตั้งแต่ปลายเดือนเมษายน 2565 รัฐบาลมีมติออกมาเกี่ยวกับการเพิ่มเงินช่วยเหลือพิเศษแก่ผู้สูงอายุที่ได้รับสิทธิ์สวัสดิการเบี้ยยังชีพในปีงบประมาณ 2565  โดยจะได้รับเงินช่วยเหลือพิเศษเพิ่มเติมแบบขั้นบันได 100-250 บาท  เป็นระยะเวลา 6 เดือน",
    link: "https://www.bangkokbiznews.com/advertorials/news/1259",
  };

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
  }, [isDone, isCorrect]);

  return (
    <div className="min-h-screen flex flex-col gap-8">
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
        <div className="flex flex-col gap-4 max-w-96 justify-center items-center">
          <QuoteText text={promise.title} />
          <p className="mt-4">พรรคการเมืองไหนเคยให้คำสัญญานี้ไว้ ?</p>
          <div className="w-full  flex flex-col gap-2">
            {guesses.map((guess) => (
              <GuessResult guess={guess} />
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
            className="flex flex-col gap-4 mt-4 items-center"
          >
            {isCorrect ? (
              <p className="text-center">
                เก่งมาก ! 👍🏼
                <br />
                คุณจำสิ่งที่เขาพูดได้ แต่คนที่พูดจะยังจำได้อยู่มั้ยนะ ?
              </p>
            ) : (
              <p className="text-center">
                👋🏼 &nbsp; ไม่เป็นไรนะ <br />
                ขนาดคนที่เป็นคนให้คำสัญญาเอง บางทีเขาก็ยังจำไม่ได้เลย...
              </p>
            )}
            <PromiseDialog promise={promise} />
          </animated.div>
        </div>
      </main>
      <animated.footer
        style={{
          ...footerAnimation,
          willChange: "transform",
        }}
        className="pb-4 md:pb-8 w-full flex items-center justify-center"
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
      </animated.footer>
    </div>
  );
}
