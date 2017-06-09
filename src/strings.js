import {
  parseQueryString,
  validCycling,
  validLight,
  validMarquee,
  validMaxAge,
  validPolling,
  validPubDates,
  validSize,
  validURL,
} from './util/misc';

const parsed = parseQueryString();
export const ACTION_PREFIX = 'app/';
export const URL = validURL(parsed.url);
window.console.log(URL);
export const FEED = 'http://rss.cnn.com/rss/cnn_topstories.rss';
export const FILTER = parsed.filter !== undefined ? parsed.filter : '^[^<]+';
export const CYCLING = validCycling(parsed.cycling);
export const POLLING = validPolling(parsed.polling);
export const SIZE = validSize(parsed.size);
export const LIGHT = validLight(parsed.light);
export const MARQUEE = validMarquee(parsed.marquee);
export const PUB_DATES = validPubDates(parsed['pub-dates']);
export const MAX_AGE = validMaxAge(parsed['max-age']);
