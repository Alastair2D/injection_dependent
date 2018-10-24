import injectionsites from '../../components/injectionsites';
import moment from 'moment';

// const defaultHistory = [{ site: injectionsites[injectionsites.length - 1], time: moment() }];

export default function historyReducer (state = [{ site: injectionsites[injectionsites.length - 1], time: moment(), dbsync: false }], action) {
    switch (action.type) {

        case 'history-save-injection':
            return state.concat([action.item]);

        case 'history-reset-defaults':
            return [{ site: injectionsites[injectionsites.length - 1], time: moment(), dbsync: false }];

        case 'history-sync-status':
          let syncStatusNew = state.map((inj) => {
            inj.dbsync = true
            return inj
          })
          return syncStatusNew

        default:
            return state;
    }
}
