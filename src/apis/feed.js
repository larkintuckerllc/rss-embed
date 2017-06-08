import jsonp from 'jsonp';
import moment from 'moment';
import { FEED, FILTER } from '../strings';

const TIMEOUT = 10 * 1000;
const RE = new RegExp(FILTER, 'm');
const YQL_ENDPOINT = 'https://query.yahooapis.com/v1/public/yql';
const YQL_SELECT = encodeURI('select pubDate, description ');
const YQL_FROM = encodeURI('from rss ');
const YQL_WHERE = encodeURI(`where url="${FEED}"`);
const YQL_URL = `${YQL_ENDPOINT}?q=${YQL_SELECT}${YQL_FROM}${YQL_WHERE}&format=json`;
const DATE_TIME_FORMAT = 'ddd, DD MMM YYYY HH:mm:ss Z';
// eslint-disable-next-line
export const get = () => (
  new Promise((resolve, reject) => {
    jsonp(YQL_URL, { timeout: TIMEOUT }, (err, data) => {
      if (err !== null) {
        reject({
          message: '500',
        });
        return;
      }
      if (
        !data.query ||
        !data.query.results ||
        !Array.isArray(data.query.results.item)
      ) {
        reject({
          message: '500',
        });
        return;
      }
      const transformed = data.query.results.item.map((o, i) => {
        let description = o.description;
        if (description === undefined) return null;
        const match = RE.exec(description);
        if (match === null) return null;
        description = match[0];
        if (description === '') return null;
        const dateM = moment(o.pubDate, DATE_TIME_FORMAT);
        if (!dateM.isValid()) return null;
        return {
          id: i,
          description,
          pubDate: dateM.valueOf(),
        };
      });
      resolve(transformed);
    });
  })
);
