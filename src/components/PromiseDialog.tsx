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
import { DailyPromise } from "@/data/promise";
import { ExternalLink } from "lucide-react";
import StatusBadge from "./StatusBadge";

function PromiseDialog({ promise }: { promise: DailyPromise }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2">ดูรายละเอียดคำสัญญา</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] md:max-w-[520px]">
        <DialogHeader className="mt-4">
          <DialogTitle className="text-left leading-snug">
            📝 {promise.title}
          </DialogTitle>
          <DialogDescription className="text-left">
            พรรค{promise.partyName}
          </DialogDescription>
        </DialogHeader>
        <div>
          <StatusBadge status={"nodata"} />
        </div>
        <p>
          <span className="font-medium">คำอธิบาย: </span>
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
