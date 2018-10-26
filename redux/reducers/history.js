import injectionsites from '../../components/injectionsites';
import DefaultFirstInj from '../../components/defaultFirstInj';
import moment from 'moment';

export default function historyReducer (state = [new DefaultFirstInj().defaultFirstInj], action) {
    switch (action.type) {

        case 'history-save-injection':
            return state.concat([action.item]);

        case 'history-reset-defaults':
            return [{ site: injectionsites[injectionsites.length - 1], time: moment(), dbsync: true, medType: "Short" }];

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
