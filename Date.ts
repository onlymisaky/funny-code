function getDaysDiffBetweenDates(date1: Date, date2 = new Date()) {
  const timeDifference = Math.abs(date1 - date2);
  return Math.floor(timeDifference / 1000 / 60 / 60 / 24);
}

function dayOfYear(date: Date) {
  const yearStart = new Date(date.getFullYear(), 0, 0)
  const timeDifference = date - yearStart;
  return Math.floor(timeDifference / 1000 / 60 / 60 / 24);
}

function getTime() {
  const time = new Date();
  const year = time.getFullYear();
  const month = `0${time.getMonth() + 1}`.slice(-2);
  const date = `0${time.getDate()}`.slice(-2);
  const hour = `0${time.getHours()}`.slice(-2);
  const min = `0${time.getMinutes()}`.slice(-2);
  const sec = `0${time.getSeconds()}`.slice(-2);
  const msec = `00${time.getMilliseconds()}`.slice(-3);
  return {
    year, month, date, hour, min, sec, msec,
    toString() {
      return `${year}-${month}-${date} ${hour}:${min}:${sec}`;
    },
  };
}
