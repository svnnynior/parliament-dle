import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DailyPromise } from "@/lib/quiz";
import { ExternalLink } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { PartyPosition } from "@/data/party";

const PartyPositionToText = {
  [PartyPosition.Coalition]: "พรรคร่วมรัฐบาลปัจจุบัน",
  [PartyPosition.Opposition]: "พรรคฝ่ายค้านปัจจุบัน",
  [PartyPosition.NotElected]: "ไม่ได้อยู่ในคณะรัฐมนตรีปัจจุบัน",
};

function PromiseDialog({ promise }: { promise: DailyPromise }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2">ดูรายละเอียดคำสัญญา</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] md:max-w-[520px] max-h-[70vh] overflow-y-auto">
        <DialogHeader className="mt-4">
          <DialogTitle className="text-left leading-snug">
            📝 {promise.title}
          </DialogTitle>
          <DialogDescription className="text-left">
            พรรค{promise.party.name} <br />
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              ({PartyPositionToText[promise.party.currentPosition]})
            </span>
          </DialogDescription>
        </DialogHeader>
        <div>
          <StatusBadge status={"nodata"} />
        </div>
        <p>
          <span className="font-medium underline">คำอธิบาย:</span>{" "}
          {promise.explain}
        </p>
        {promise.link && (
          <DialogFooter className="mt-4">
            <Button variant="outline" asChild>
              <a href={promise.link} target="_blank">
                ดูแหล่งอ้างอิง <ExternalLink />
              </a>
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PromiseDialog;
