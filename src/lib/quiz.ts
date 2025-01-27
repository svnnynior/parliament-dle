import { parties } from "@/data/party";
import { DailyPromise } from "@/data/promise";
import { promises } from "@/data/promise";

function seedRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  return function () {
    h = Math.imul(48271, h) % 2147483647;
    return (h & 2147483647) / 2147483648;
  };
}

function shuffleArray<T>(array: T[], seed: string): T[] {
  const random = seedRandom(seed);
  const newArray = array.slice(); // Create a new instance of the array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }

  return newArray;
}

function getQuizNumber(date: Date): number {
  const startDate = new Date(2025, 0, 27); // January 27, 2025

  // Calculate the difference in time
  const timeDifference = date.getTime() - startDate.getTime();

  // Convert time difference from milliseconds to days
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return dayDifference;
}

const SEED_PHRASE = "we_love_ingchin_<3";
const THE_PROMISE_LIST = shuffleArray(promises, SEED_PHRASE);
const DEFAULT_PROMISE: DailyPromise = {
  number: 0,
  title: "หยุดไฟใต้ สร้างสังคมสันติสุขสมานฉันท์",
  partyId: 39,
  partyName: "เสรีรวมไทย",
  status: "nodata",
  explain:
    "ปี 2564 พรรคเสรีรวมไทยกล่าวว่า เนื่องจากไม่ได้เป็นพรรครัฐบาล จึงไม่สามารถดำเนินการให้นโยบาย 6 หยุด ที่พรรคหาเสียงไว้ก่อนเลือกตั้งเกิดขึ้นได้จริง แต่ในฐานะฝ่ายค้าน โดยเฉพาะคณะกรรมาธิการป้องกันและปราบปรามการทุจริตประพฤติมิชอบ (ป.ป.ช.) ที่มีพล.ต.อ.เสรีพิศุทธ์ เตมียเวส หัวหน้าพรรคเป็นประธานกรรมาธิการฯ ได้ทำหน้าที่อย่างเต็มที่ ทั้ง การตรวจสอบคุณสมบัติของท่าน ส.ส. ผู้ทรงเกียรติหลายท่านที่ขาดคุณสมบัติ แต่มาลงสมัครรับเลือกตั้ง เป็นอีกทางที่ช่วยประชาชนตรวจสอบและคัดกรองผู้ที่เหมาะสม",
  link: "https://www.facebook.com/sereeruamthai/posts/339249500043736/",
};

export function getDailyPromise(date: Date): DailyPromise {
  const quizNumber = getQuizNumber(date);
  const dayIndex = quizNumber % THE_PROMISE_LIST.length;
  const selectedPromise = THE_PROMISE_LIST[dayIndex];
  const party = parties.find((party) => party.name === selectedPromise.party);
  if (!party) {
    return DEFAULT_PROMISE;
  }
  const todayPromise: DailyPromise = {
    number: quizNumber,
    title: selectedPromise.promiseTitle,
    partyId: party?.id,
    partyName: party?.name,
    status: selectedPromise.status,
    explain: selectedPromise.explain,
    link: selectedPromise.urlLink1,
  };
  return todayPromise;
}
