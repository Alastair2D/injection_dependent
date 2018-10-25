import injectionsites from './injectionsites';
import moment from 'moment';
// import timekeeper from 'timekeeper';

// timekeeper.freeze(new Date(1539760000000))

export default class DefaultFirstInj {
  constructor() {
    this.defaultFirstInj = {
      site: injectionsites[injectionsites.length - 1],
      time: moment(),
      dbsync: true,
      medType: 'Short',
    }
  }
}
