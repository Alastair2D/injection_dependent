import injectionsites from '../../components/injectionsites';
import moment from 'moment';

const defaultHistory = [{ site: injectionsites[injectionsites.length - 1], time: moment() }];

export default function historyReducer (state = defaultHistory, action) {
    switch (action.type) {

        case 'history-save-injection':
            return state.concat([action.item]);

        case 'history-reset-defaults':
            return defaultHistory;

        default:
            return state;
    }
}
