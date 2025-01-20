import QuoteText from "@/components/QuoteText";
import Image from "next/image";

export default function Home() {
  const promiseTitle = "จัดตั้งกองทุนส่งเสริมดิจิทัล Start Up 5,000 ล้านบาท";
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <header className="flex flex-row justify-between items-center p-4 border-b border-gray-200">
        <span className="text-sm md:text-base">How-to</span>
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-3xl font-bold">
            🇹🇭 Parliament-dle
          </span>
          <span className="text-sm md:text-base">
            Guess who made the promise
          </span>
        </div>
        <span className="text-sm md:text-base">Stats</span>
      </header>
      <main className="flex flex-col px-12 w-full justify-center items-center">
        <div className="flex flex-col gap-4 w-full md:w-2/3 lg:w-1/3">
          <QuoteText text={promiseTitle} />
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
