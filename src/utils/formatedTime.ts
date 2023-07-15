export function formatedTime(date: number) {
  const _date = new Date(date);
  const hours = _date.getHours();
  const minutes = _date.getMinutes();

  if (hours < 12) {
    return `${addZero(hours)}:${addZero(minutes)} AM`;
  } else {
    return `${addZero(hours - 12)}:${addZero(minutes)} PM`;
  }
}

function addZero(num: number) {
  return num < 10 ? `0${num}` : num;
}
