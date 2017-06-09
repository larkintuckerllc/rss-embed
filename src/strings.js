import {
  parseQueryString,
  validCycling,
  validLight,
  validMarquee,
  validPolling,
  validPubDates,
  validSize,
} from './util/misc';

const parsed = parseQueryString();
export const ACTION_PREFIX = 'app/';
// TODO: TAKE FROM QUERY
export const FEED = 'http://rss.cnn.com/rss/cnn_topstories.rss';
export const FILTER = parsed.filter !== undefined ? parsed.filter : '^[^<]+';
export const CYCLING = validCycling(parsed.cycling);
export const POLLING = validPolling(parsed.polling);
export const SIZE = validSize(parsed.size);
export const LIGHT = validLight(parsed.light);
export const MARQUEE = validMarquee(parsed.marquee);
export const PUBDATES = validPubDates(parsed.pubdates);
