import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-react";
import MiniQuoteText from "./MiniQuoteText";
import GuessResult from "./GuessResult";

const EXAMPLE_PROMISE = {
  id: 73,
  party: "พลังท้องถิ่นไท",
  topic: "equality",
  promiseTitle: "จัดให้ทุกชุมชนและท้องถิ่นได้เรียนฟรีหลายภาษา",
  status: "nodata",
  explain:
    'นโยบายพรรคประชาชาติ "ชัดเจนเพื่อคนไทย จริงใจเพื่อท้องถิ่น 4ช.8จ." จ. นี้ คือ จัดให้ ทุกชุมชนและท้องถิ่นได้เรียนฟรีหลายภาษา\n\nจัดให้ทุกชุมชนและท้องถิ่นได้เรียนฟรีหลายภาษา',
  isNCPO: false,
  images:
    "%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%96%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%97_2.png(https://sheets.wevis.info/dl/promise_tracker_9tvh/db/nc_9tvh__promises/image_fg1iji_%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%96%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%97_2.png)",
  vdo: null,
  nameLink1: "พลังท้องถิ่นไทแถลงนโยบาย - mthai",
  urlLink1: "https://news.mthai.com/politics-news/699571.html",
  nameLink2: null,
  urlLink2: null,
  nameLink3: null,
  urlLink3: null,
  nameLink4: null,
  urlLink4: null,
};

function HowToDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <CircleHelp />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] md:max-w-[520px] max-h-[70vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <DialogTitle>💡 How to play</DialogTitle>
          <DialogDescription>
            ทายว่าพรรคการเมืองไหนเป็นคนให้คำสัญญาไว้ภายใน 6 ครั้ง
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm md:text-base">
          &bull; อ่านคำสัญญาที่ปรากฏ
          แล้วเลือกทายว่าพรรคการเมืองไหนเป็นคนให้คำสัญญานั้นไว้
        </p>
        <div className="flex flex-row justify-center">
          <div className="w-3/4">
            <MiniQuoteText text={EXAMPLE_PROMISE.promiseTitle} />
          </div>
        </div>
        <p className="text-sm md:text-base">
          &bull; หากทายผิด ผลลัพธ์จะถูกแสดงเป็นสีแดง
        </p>
        <div className="flex flex-row justify-center">
          <div className="w-3/4">
            <GuessResult
              guess={{
                partyId: 1,
                partyName: "ประชาธิปัตย์",
                isCorrect: false,
              }}
            />
          </div>
        </div>
        <p className="text-sm md:text-base">
          &bull; หากทายถูก ผลลัพธ์จะถูกแสดงเป็นสีเขียว
        </p>
        <div className="flex flex-row justify-center">
          <div className="w-3/4">
            <GuessResult
              guess={{
                partyId: 73,
                partyName: "พลังท้องถิ่นไท",
                isCorrect: true,
              }}
            />
          </div>
        </div>
        <p className="text-sm md:text-base">
          คำสัญญาจะถูกเปลี่ยนทุก ๆ เที่ยงคืน
          เพราะฉะนั้นอย่าลืมเข้ามาเล่นกันทุกวันนะ ! 🤓
        </p>
        <div className="border-t border-zinc-600 mt-4"></div>
        <a
          className="text-sm font-light underline underline-offset-2 hover:underline-offset-4 -ml-1"
          href="https://wevis.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          📁 ข้อมูลคำสัญญาและพรรคการเมือง อ้างอิงมาจาก WeVis
        </a>
      </DialogContent>
    </Dialog>
  );
}

export default HowToDialog;
