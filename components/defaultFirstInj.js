import moment from 'moment';
import injectionsites from './injectionsites';

export default class DefaultFirstInj {
  constructor() {
    this.defaultFirstInj = {
      site: injectionsites[injectionsites.length - 1],
      time: moment(),
      dbsync: true,
      medType: 'Short',
    };
  }
}
