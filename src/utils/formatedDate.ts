export function getMonth(date: Date) {
  let month = "january";

  switch (date.getMonth()) {
    case 1:
      month = "february";
      break;
    case 2:
      month = "march";
      break;
    case 3:
      month = "april";
      break;
    case 4:
      month = "may";
      break;
    case 5:
      month = "june";
      break;
    case 6:
      month = "july";
      break;
    case 7:
      month = "august";
      break;
    case 8:
      month = "september";
      break;
    case 9:
      month = "october";
      break;
    case 10:
      month = "november";
      break;
    case 11:
      month = "december";
      break;
  }

  return month;
}

export function formatDate(date: string) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  let month = getMonth(newDate);
  
  const year = newDate.getFullYear();
  return `${day} ${month} ${year}`;
}
