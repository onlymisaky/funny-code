
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
    year,
    month,
    date,
    hour,
    min,
    sec,
    msec,
    toString() {
      return `${year}-${month}-${date} ${hour}:${min}:${sec}`;
    },
  };
}
