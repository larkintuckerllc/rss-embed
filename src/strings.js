import { parseQueryString, validCycling, validPolling } from './util/misc';

const parsed = parseQueryString();
export const ACTION_PREFIX = 'app/';
// TODO: TAKE FROM QUERY
export const FEED = 'http://rss.cnn.com/rss/cnn_topstories.rss';
export const FILTER = parsed.filter !== undefined ? parsed.filter : '^[^<]+';
export const CYCLING = validCycling(parsed.cycling) * 1000;
export const POLLING = validPolling(parsed.polling) * 1000;
