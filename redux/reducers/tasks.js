import injectionsites from '../components/injectionsites';
import moment from 'moment';

const defaultState = {
  sites: injectionsites,
  history: [{ site: injectionsites[injectionsites.length - 1], time: moment() }],
};

export default function tasksReducer (state = defaultState, action) {
    switch (action.type) {
        case 'tasks-save-injection':
            return [ ...state.history, action.item ];

        case 'tasks-next-injection-site':
            return state.sites.slice(1).concat(state.sites[0]);

        default:
            return state;
    }
}
