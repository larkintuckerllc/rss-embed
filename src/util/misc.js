const MIN_POLLING = 60;
const MIN_CYCLE = 5;
export const parseQueryString = () => {
  const parsed = {};
  const qs = window.location.search;
  if (!qs) {
    return parsed;
  }
  const qsArray = qs.substr(1).split('&');
  for (let i = 0; i < qsArray.length; i += 1) {
    const parameterArray = qsArray[i].split('=', 2);
    if (parameterArray.length === 1) {
      parsed[parameterArray[0]] = '';
    } else {
      parsed[parameterArray[0]] =
      decodeURIComponent(parameterArray[1].replace(/\+/g, ' '));
    }
  }
  return parsed;
};
export const validPolling = (value) => {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) return MIN_POLLING;
  if (parsed < MIN_POLLING) return MIN_POLLING;
  return parsed;
};
export const validCycling = (value) => {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) return MIN_CYCLE;
  if (parsed < MIN_CYCLE) return MIN_CYCLE;
  return parsed;
};