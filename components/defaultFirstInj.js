import injectionsites from './injectionsites';
import moment from 'moment';

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
