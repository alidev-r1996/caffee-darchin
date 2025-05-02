export default function convertToPersianDigits(number: string) {
  
  const arabicToPersianDigits = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  return number.replace(/\d/g, (match) => arabicToPersianDigits[match]);
}
