const MIN_POLLING = 60;
const MIN_CYCLE = 10;
const MIN_SIZE = 10;
const MIN_MAX_AGE = 60;
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
export const validURL = (value) => {
  if (value === undefined) return null;
  return value;
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
export const validSize = (value) => {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) return MIN_SIZE;
  if (parsed < MIN_SIZE) return MIN_SIZE;
  return parsed;
};
export const validLight = (value) => {
  if (value === 'true') return true;
  return false;
};
export const validMarquee = (value) => {
  if (value === 'true') return true;
  return false;
};
export const validPubDates = (value) => {
  if (value === 'true') return true;
  return false;
};
export const validMaxAge = (value) => {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) return Infinity;
  if (parsed < MIN_MAX_AGE) return Infinity;
  return parsed;
};
