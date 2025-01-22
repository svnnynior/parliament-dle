import React from "react";
import { Badge } from "@/components/ui/badge";
import { Promise } from "@/data/promise";

function StatusBadge({ status }: { status: Promise["status"] }) {
  if (status === "paused") {
    return (
      <Badge className="bg-red-400 dark:bg-red-500">
        สถานะ: หยุดการดำเนินการ
      </Badge>
    );
  }
  if (status === "working") {
    return (
      <Badge className="bg-yellow-400 dark:bg-yellow-500">
        สถานะ: กำลังดำเนินการ
      </Badge>
    );
  }
  if (status === "proposed") {
    return (
      <Badge className="bg-blue-400 dark:bg-blue-500">สถานะ: กำลังนำเสนอ</Badge>
    );
  }
  if (status === "done") {
    return (
      <Badge className="bg-green-400 dark:bg-green-500">
        สถานะ: ดำเนินการแล้ว
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="border-black dark:border-white">
      สถานะ: ไม่พบความเคลื่อนไหว
    </Badge>
  );
}

export default StatusBadge;
