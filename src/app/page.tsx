import QuoteText from "@/components/QuoteText";
import ThemeToggle from "@/components/ThemeToggle";
import PartyInput from "@/components/PartyInput";
import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-react";
import Image from "next/image";

const EmptyGuess = () => {
  return (
    <div className="w-full bg-zinc-200 dark:bg-zinc-800 border rounded-md px-3 py-2">
      &nbsp;
    </div>
  );
};

export default function Home() {
  const promiseTitle = "จัดตั้งกองทุนส่งเสริมดิจิทัล Start Up 5,000 ล้านบาท";
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <header className="flex flex-row justify-between items-center p-4 border-b border-gray-200">
        <Button variant="outline" size="icon">
          <CircleHelp />
        </Button>
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
          <QuoteText text={promiseTitle} />
          <p className="mt-6">พรรคการเมืองไหนเคยให้คำสัญญานี้ไว้ ?</p>
          <div className="w-full mt-4 flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <PartyInput />
              <Button>ทาย</Button>
            </div>
            <EmptyGuess />
            <EmptyGuess />
            <EmptyGuess />
            <EmptyGuess />
          </div>
        </div>
      </main>
      <footer className="absolute bottom-0 pb-4 md:pb-8 w-full flex items-center justify-center">
        <span className="flex flex-rol">
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
      </footer>
    </div>
  );
}
