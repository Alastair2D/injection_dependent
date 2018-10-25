import injectionsites from './injectionsites';
import moment from 'moment';
import timekeeper from 'timekeeper';

timekeeper.freeze(new Date(1539760000000))
const defaultHistory = [
  { site: injectionsites[injectionsites.length - 1], time: moment(), dbsync: true, medType: 'Short' }
];

export default defaultHistory;
