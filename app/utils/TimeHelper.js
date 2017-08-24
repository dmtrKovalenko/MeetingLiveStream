/*eslint-disable*/

export function formatSS(ss) {
  let seconds = parseInt(ss % 60);
  let hours = parseInt(ss % 3600 / 3600);
  let minutes = parseInt(ss % 3600 / 60);

  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  if (hours === 0) {
    return `${minutes}:${seconds}`;
  }

  hours = (hours < 10) ? `0${hours}` : hours;

  return `${hours}:${minutes}:${seconds}`;
}
