/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}



export function isWeekend(day: string): boolean {
  if (day === Weekdays.SATURDAY || day === Weekdays.SUNDAY) {
    console.log(`Is ${day} a weekend day? true!`);
    return true;
  } else {
    console.log(`Is ${day} a weekend day? false!`);
    return false;
  }
}

