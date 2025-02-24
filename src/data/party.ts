export interface Party {
  id: number;
  name: string;
  codeTH: string;
  codeEN: string;
  currentPosition: PartyPosition;
}

export enum PartyPosition {
    Coalition = "coalition",
    Opposition = "opposition",
    NotElected = "notElected",
}

export const parties: Party[] = [
  { id: 1, name: "ประชาธิปัตย์", codeTH: "ปชป", codeEN: "DP", currentPosition: PartyPosition.Coalition },
  { id: 2, name: "ประชากรไทย", codeTH: "ปชท", codeEN: "TCP", currentPosition: PartyPosition.NotElected },
  { id: 3, name: "มหาชน", codeTH: "พมช", codeEN: "MCP", currentPosition: PartyPosition.NotElected },
  { id: 4, name: "กสิกรไทย", codeTH: "กท", codeEN: "KT", currentPosition: PartyPosition.NotElected },
  { id: 5, name: "เพื่อฟ้าดิน", codeTH: "พฟด", codeEN: "FHAE", currentPosition: PartyPosition.NotElected },
  { id: 6, name: "ความหวังใหม่", codeTH: "ควม", codeEN: "NAP", currentPosition: PartyPosition.NotElected },
  { id: 7, name: "เครือข่ายชาวนาแห่งประเทศไทย", codeTH: "พนท", codeEN: "FNTP", currentPosition: PartyPosition.NotElected },
  { id: 8, name: "เพื่อไทย", codeTH: "พท", codeEN: "PT", currentPosition: PartyPosition.Coalition },
  { id: 9, name: "เพื่อแผ่นดิน", codeTH: "พผ", codeEN: "PP", currentPosition: PartyPosition.NotElected },
  { id: 10, name: "ชาติพัฒนา", codeTH: "ชพน", codeEN: "CPN", currentPosition: PartyPosition.Coalition },
  { id: 11, name: "แทนคุณแผ่นดิน", codeTH: "ทคผ", codeEN: "TKP", currentPosition: PartyPosition.NotElected },
  { id: 12, name: "ชาติไทยพัฒนา", codeTH: "ชทพ", codeEN: "CP", currentPosition: PartyPosition.Coalition },
  { id: 13, name: "อนาคตไทย", codeTH: "อท", codeEN: "TF", currentPosition: PartyPosition.NotElected },
  { id: 14, name: "ธรรมาภิบาลสังคม", codeTH: "ธภส", codeEN: "GGSP", currentPosition: PartyPosition.NotElected },
  { id: 15, name: "ภูมิใจไทย", codeTH: "ภท", codeEN: "BJT", currentPosition: PartyPosition.Coalition },
  { id: 16, name: "ประชาธรรม", codeTH: "พปธ", codeEN: "PCT", currentPosition: PartyPosition.NotElected },
  { id: 17, name: "สังคมประชาธิปไตยไทย", codeTH: "สปท", codeEN: "TSDP", currentPosition: PartyPosition.NotElected },
  { id: 18, name: "ไทยรักษาชาติ", codeTH: "ทษช", codeEN: "TSN", currentPosition: PartyPosition.NotElected },
  { id: 19, name: "พลังคนกีฬา", codeTH: "พก", codeEN: "SPOT", currentPosition: PartyPosition.NotElected },
  { id: 20, name: "รักประเทศไทย", codeTH: "รปท", codeEN: "RTLP", currentPosition: PartyPosition.NotElected },
  { id: 21, name: "ประชาสามัคคี", codeTH: "ปส", codeEN: "HPP", currentPosition: PartyPosition.NotElected },
  { id: 22, name: "ไทยมหารัฐพัฒนา", codeTH: "ทมรพ", codeEN: "TMRP", currentPosition: PartyPosition.NotElected },
  { id: 23, name: "เพื่อธรรม", codeTH: "พธ", codeEN: "PHT", currentPosition: PartyPosition.NotElected },
  { id: 24, name: "ประชาธิปไตยใหม่", codeTH: "ปธม", codeEN: "NDP", currentPosition: PartyPosition.Opposition },
  { id: 25, name: "รักษ์สันติ", codeTH: "รส", codeEN: "RSP", currentPosition: PartyPosition.NotElected },
  { id: 26, name: "พลังชล", codeTH: "พช", codeEN: "PC", currentPosition: PartyPosition.NotElected },
  { id: 27, name: "สร้างไทย", codeTH: "สท", codeEN: "ST", currentPosition: PartyPosition.NotElected },
  { id: 28, name: "ยางพาราไทย", codeTH: "ยพท", codeEN: "TR", currentPosition: PartyPosition.NotElected },
  { id: 29, name: "ครูไทยเพื่อประชาชน", codeTH: "คพช", codeEN: "TTPP", currentPosition: PartyPosition.Opposition },
  { id: 30, name: "พลังสหกรณ์", codeTH: "พพส", codeEN: "COP", currentPosition: PartyPosition.NotElected },
  { id: 31, name: "พลังท้องถิ่นไทย", codeTH: "พทท", codeEN: "TLP", currentPosition: PartyPosition.NotElected },
  { id: 32, name: "พลังเครือข่ายประชาชน", codeTH: "พคป", codeEN: "PNP", currentPosition: PartyPosition.NotElected },
  { id: 33, name: "ถิ่นกาขาวชาววิไล", codeTH: "ถกชว", codeEN: "TKCV", currentPosition: PartyPosition.NotElected },
  { id: 34, name: "รักษ์ผืนป่าประเทศไทย", codeTH: "รป", codeEN: "FCP", currentPosition: PartyPosition.NotElected },
  { id: 35, name: "ชาติประชาธิปไตยก้าวหน้า", codeTH: "ชปก", codeEN: "PDN", currentPosition: PartyPosition.NotElected },
  { id: 36, name: "เพื่อสันติ", codeTH: "พสต", codeEN: "PSTP", currentPosition: PartyPosition.NotElected },
  { id: 37, name: "พลังประเทศไทย", codeTH: "พลปท", codeEN: "PPTT", currentPosition: PartyPosition.NotElected },
  { id: 38, name: "ไทรักธรรม", codeTH: "ทธ", codeEN: "TT", currentPosition: PartyPosition.NotElected },
  { id: 39, name: "เสรีรวมไทย", codeTH: "สร", codeEN: "TLP", currentPosition: PartyPosition.Coalition },
  { id: 40, name: "รักษ์ธรรม", codeTH: "รธ", codeEN: "RT", currentPosition: PartyPosition.NotElected },
  { id: 41, name: "รวมพลังไทย", codeTH: "รพท", codeEN: "RPT", currentPosition: PartyPosition.NotElected },
  { id: 42, name: "เพื่อชาติ", codeTH: "พช", codeEN: "PC", currentPosition: PartyPosition.NotElected },
  { id: 43, name: "เพื่ออนาคต", codeTH: "พอ", codeEN: "FTEP", currentPosition: PartyPosition.NotElected },
  { id: 44, name: "พลังไทยเครือข่าย", codeTH: "พทค", codeEN: "PTK", currentPosition: PartyPosition.NotElected },
  { id: 45, name: "ชาติไทยสามัคคี", codeTH: "ชทส", codeEN: "CSP", currentPosition: PartyPosition.NotElected },
  { id: 46, name: "พลังประชาธิปไตย", codeTH: "พปต", codeEN: "DF", currentPosition: PartyPosition.NotElected },
  { id: 47, name: "ภราดรภาพ", codeTH: "ภดภ", codeEN: "PDP", currentPosition: PartyPosition.NotElected },
  { id: 48, name: "พลังไทยรักชาติ", codeTH: "พทรช", codeEN: "PTRC", currentPosition: PartyPosition.NotElected },
  { id: 49, name: "เมืองไทยของเรา", codeTH: "มขร", codeEN: "MKR", currentPosition: PartyPosition.NotElected },
  { id: 50, name: "เพื่อชีวิตใหม่", codeTH: "พชม", codeEN: "PCM", currentPosition: PartyPosition.NotElected },
  { id: 51, name: "เงินเดือนประชาชน", codeTH: "งดช", codeEN: "PWP", currentPosition: PartyPosition.NotElected },
  { id: 52, name: "ปฏิรูปไทย", codeTH: "ปท", codeEN: "TRF", currentPosition: PartyPosition.NotElected },
  { id: 53, name: "คนธรรมดาแห่งประเทศไทย", codeTH: "พคท", codeEN: "CPT", currentPosition: PartyPosition.NotElected },
  { id: 54, name: "รักท้องถิ่นไทย", codeTH: "รถท", codeEN: "RTT", currentPosition: PartyPosition.NotElected },
  { id: 55, name: "พลังเกษตรกรไทย", codeTH: "พกกท", codeEN: "PKP", currentPosition: PartyPosition.NotElected },
  { id: 56, name: "ร่วมพัฒนาชาติไทย", codeTH: "รพท", codeEN: "RPCT", currentPosition: PartyPosition.NotElected },
  { id: 57, name: "มหาประชาชน", codeTH: "มป", codeEN: "MP", currentPosition: PartyPosition.NotElected },
  { id: 58, name: "เพื่อสหกรณ์ไทย", codeTH: "พพสท", codeEN: "PST", currentPosition: PartyPosition.NotElected },
  { id: 59, name: "เอกราชไทย", codeTH: "อรท", codeEN: "TID", currentPosition: PartyPosition.NotElected },
  { id: 60, name: "ประชาธิปไตยเพื่อประชาชน", codeTH: "ปพป", codeEN: "DFP", currentPosition: PartyPosition.NotElected },
  { id: 61, name: "ทางเลือกใหม่", codeTH: "ทลม", codeEN: "NEWA", currentPosition: PartyPosition.NotElected },
  { id: 62, name: "มติประชา", codeTH: "มปช", codeEN: "PVP", currentPosition: PartyPosition.NotElected },
  { id: 63, name: "ประชาภิวัฒน์", codeTH: "ปชภ", codeEN: "PRA", currentPosition: PartyPosition.NotElected },
  { id: 64, name: "พลเมืองไทย", codeTH: "พล", codeEN: "PONT", currentPosition: PartyPosition.NotElected },
  { id: 65, name: "รวมใจไทย", codeTH: "รจท", codeEN: "RJP", currentPosition: PartyPosition.NotElected },
  { id: 66, name: "พลังธรรมใหม่", codeTH: "พธม", codeEN: "NPD", currentPosition: PartyPosition.NotElected },
  { id: 67, name: "ประชาชนปฏิรูป", codeTH: "ปชช", codeEN: "PPR", currentPosition: PartyPosition.NotElected },
  { id: 68, name: "ก้าวไกล/ประชาชน", codeTH: "กก", codeEN: "FWP", currentPosition: PartyPosition.Opposition },
  { id: 69, name: "ไทยธรรม", codeTH: "ทธม", codeEN: "THMP", currentPosition: PartyPosition.NotElected },
  { id: 70, name: "เพื่อนไทย", codeTH: "พ", codeEN: "TF", currentPosition: PartyPosition.NotElected },
  { id: 71, name: "ไทยศรีวิไลย์", codeTH: "ทศล", codeEN: "TCL", currentPosition: PartyPosition.NotElected },
  { id: 72, name: "รวมพลังประชาชาติไทย", codeTH: "รปช", codeEN: "ACT", currentPosition: PartyPosition.NotElected },
  { id: 73, name: "สยามพัฒนา", codeTH: "สพน", codeEN: "SD", currentPosition: PartyPosition.NotElected },
  { id: 74, name: "เพื่อคนไทย", codeTH: "พคท", codeEN: "PKTP", currentPosition: PartyPosition.NotElected },
  { id: 75, name: "พลังปวงชนไทย", codeTH: "พลท", codeEN: "PLPT", currentPosition: PartyPosition.NotElected },
  { id: 76, name: "พลังไทยรักไทย", codeTH: "พทรท", codeEN: "PTRT", currentPosition: PartyPosition.NotElected },
  { id: 77, name: "พลังชาติไทย", codeTH: "พพชท", codeEN: "TNPP", currentPosition: PartyPosition.NotElected },
  { id: 78, name: "ประชาชาติ", codeTH: "ปช", codeEN: "PCC", currentPosition: PartyPosition.Coalition },
  { id: 79, name: "แผ่นดินธรรม", codeTH: "ผธ", codeEN: "LDHP", currentPosition: PartyPosition.NotElected },
  { id: 80, name: "คลองไทย", codeTH: "คลท", codeEN: "KTP", currentPosition: PartyPosition.NotElected },
  { id: 81, name: "ประชาธรรมไทย", codeTH: "ปธม", codeEN: "TPJ", currentPosition: PartyPosition.NotElected },
  { id: 82, name: "ประชานิยม", codeTH: "ปย", codeEN: "PYP", currentPosition: PartyPosition.NotElected },
  { id: 83, name: "พลังประชารัฐ", codeTH: "พปชร", codeEN: "PPRP", currentPosition: PartyPosition.Coalition },
  { id: 84, name: "เศรษฐกิจใหม่", codeTH: "ศม", codeEN: "NEP", currentPosition: PartyPosition.NotElected },
  { id: 85, name: "ไทยรุ่งเรือง", codeTH: "ทรร", codeEN: "TRRP", currentPosition: PartyPosition.NotElected },
  { id: 86, name: "พลังรัก", codeTH: "พลร", codeEN: "PFL", currentPosition: PartyPosition.NotElected },
  { id: 87, name: "ชาติพันธุ์ไทย", codeTH: "ชพท", codeEN: "TEP", currentPosition: PartyPosition.NotElected },
  { id: 88, name: "ภูมิพลังเกษตรกรไทย", codeTH: "พภกท", codeEN: "BKTP", currentPosition: PartyPosition.NotElected },
  { id: 89, name: "พลังสังคม", codeTH: "พพส", codeEN: "PPS", currentPosition: PartyPosition.NotElected },
  { id: 90, name: "พลังแรงงานไทย", codeTH: "พรงท", codeEN: "TPLP", currentPosition: PartyPosition.NotElected },
  { id: 91, name: "พลังไทสร้างชาติ", codeTH: "พทช", codeEN: "PBN", currentPosition: PartyPosition.NotElected },
  { id: 92, name: "พลังศรัทธา", codeTH: "พลศธ", codeEN: "POFP", currentPosition: PartyPosition.NotElected },
  { id: 93, name: "พลังแผ่นดินทอง", codeTH: "พผดท", codeEN: "PPDT", currentPosition: PartyPosition.NotElected },
  { id: 94, name: "กลาง", codeTH: "พก", codeEN: "GP", currentPosition: PartyPosition.NotElected },
  { id: 95, name: "พลังเพื่อไทย", codeTH: "พลพท", codeEN: "PWTP", currentPosition: PartyPosition.NotElected },
  { id: 96, name: "ประชาไทย", codeTH: "ปรชท", codeEN: "TPPTP", currentPosition: PartyPosition.NotElected },
  { id: 97, name: "กรีน", codeTH: "กร", codeEN: "GREEN", currentPosition: PartyPosition.NotElected },
  { id: 98, name: "พัฒนาประเทศไทย", codeTH: "พพปท", codeEN: "TDPT", currentPosition: PartyPosition.NotElected },
  { id: 99, name: "ฐานรากไทย", codeTH: "ฐรท", codeEN: "FDP", currentPosition: PartyPosition.NotElected },
  { id: 100, name: "สามัญชน", codeTH: "พสมช", codeEN: "CMP", currentPosition: PartyPosition.NotElected },
  { id: 101, name: "พลังครูไทย", codeTH: "พพคท", codeEN: "TTP", currentPosition: PartyPosition.NotElected },
  { id: 102, name: "ภาคีเครือข่ายไทย", codeTH: "ภคท", codeEN: "THN", currentPosition: PartyPosition.NotElected },
  { id: 103, name: "พลังไทยดี", codeTH: "พพทด", codeEN: "TDPP", currentPosition: PartyPosition.NotElected },
  { id: 104, name: "เพื่อไทยพัฒนา", codeTH: "พทพ", codeEN: "PHTP", currentPosition: PartyPosition.NotElected },
  { id: 108, name: "พัฒนาชาติ", codeTH: "พนช", codeEN: "NTD", currentPosition: PartyPosition.NotElected },
  { id: 109, name: "คนงานไทย", codeTH: "พคงท", codeEN: "TWP", currentPosition: PartyPosition.NotElected },
  { id: 110, name: "ผึ้งหลวง", codeTH: "ผล", codeEN: "PL", currentPosition: PartyPosition.NotElected },
  { id: 111, name: "รวมไทยสร้างชาติ", codeTH: "รทสช", codeEN: "RTS", currentPosition: PartyPosition.Coalition },
  { id: 112, name: "พลังสังคมใหม่", codeTH: "พสม", codeEN: "PPS", currentPosition: PartyPosition.Coalition },
  { id: 113, name: "ท้องที่ไทย", codeTH: "ทท", codeEN: "TT", currentPosition: PartyPosition.Coalition },
  { id: 114, name: "ไทยสร้างไทย", codeTH: "ทสท", codeEN: "TST", currentPosition: PartyPosition.Opposition },
  { id: 115, name: "เป็นธรรม", codeTH: "ธร", codeEN: "TTP", currentPosition: PartyPosition.Opposition },
  { id: 116, name: "ใหม่", codeTH: "หม", codeEN: "N", currentPosition: PartyPosition.Opposition },
  { id: 117, name: "ไทยก้าวหน้า", codeTH: "ทก", codeEN: "TLP", currentPosition: PartyPosition.Opposition },
  { id: 118, name: "ไทรวมพลัง", codeTH: "ทรพล", codeEN: "TRP", currentPosition: PartyPosition.Coalition },
];

export const currentAssemblyParties: Party[] = [
  { id: 29, name: "ครูไทยเพื่อประชาชน", codeTH: "คพช", codeEN: "TTPP", currentPosition: PartyPosition.Opposition },
  { id: 12, name: "ชาติไทยพัฒนา", codeTH: "ชทพ", codeEN: "CP", currentPosition: PartyPosition.Coalition },
  { id: 78, name: "ประชาชาติ", codeTH: "ปช", codeEN: "PCC", currentPosition: PartyPosition.Coalition },
  { id: 24, name: "ประชาธิปไตยใหม่", codeTH: "ปธม", codeEN: "NDP", currentPosition: PartyPosition.Opposition },
  { id: 1, name: "ประชาธิปัตย์", codeTH: "ปชป", codeEN: "DP", currentPosition: PartyPosition.Coalition },
  { id: 8, name: "เพื่อไทย", codeTH: "พท", codeEN: "PT", currentPosition: PartyPosition.Coalition },
  { id: 15, name: "ภูมิใจไทย", codeTH: "ภท", codeEN: "BJT", currentPosition: PartyPosition.Coalition },
  { id: 83, name: "พลังประชารัฐ", codeTH: "พปชร", codeEN: "PPRP", currentPosition: PartyPosition.Coalition },
  { id: 10, name: "ชาติพัฒนา", codeTH: "ชพน", codeEN: "CPN", currentPosition: PartyPosition.Coalition },
  { id: 39, name: "เสรีรวมไทย", codeTH: "สร", codeEN: "TLP", currentPosition: PartyPosition.Coalition },
  { id: 68, name: "ก้าวไกล/ประชาชน", codeTH: "กก", codeEN: "FWP", currentPosition: PartyPosition.Opposition },
  { id: 111, name: "รวมไทยสร้างชาติ", codeTH: "รทสช", codeEN: "RTS", currentPosition: PartyPosition.Coalition },
  { id: 112, name: "พลังสังคมใหม่", codeTH: "พสม", codeEN: "PPS", currentPosition: PartyPosition.Coalition },
  { id: 113, name: "ท้องที่ไทย", codeTH: "ทท", codeEN: "TT", currentPosition: PartyPosition.Coalition },
  { id: 114, name: "ไทยสร้างไทย", codeTH: "ทสท", codeEN: "TST", currentPosition: PartyPosition.Opposition },
  { id: 115, name: "เป็นธรรม", codeTH: "ธร", codeEN: "TTP", currentPosition: PartyPosition.Opposition },
  { id: 116, name: "ใหม่", codeTH: "หม", codeEN: "N", currentPosition: PartyPosition.Opposition },
  { id: 117, name: "ไทยก้าวหน้า", codeTH: "ทก", codeEN: "TLP", currentPosition: PartyPosition.Opposition },
];
