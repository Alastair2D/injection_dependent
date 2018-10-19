import injectionsites from '../../components/injectionsites';
import moment from 'moment';

const defaultState = {
  sites: injectionsites,
  history: [{ site: injectionsites[injectionsites.length - 1], time: moment() }],
};

export default function tasksReducer (state = defaultState, action) {
    switch (action.type) {
        case 'tasks-save-injection':
            return {
              sites: state.sites,
              history: [ ...state.history, action.item ]
            };

        case 'tasks-next-injection-site':
            return {
              sites: [ ...state.sites.slice(1), state.sites[0] ],
              history: state.history
            }

        default:
            return state;
    }
}
