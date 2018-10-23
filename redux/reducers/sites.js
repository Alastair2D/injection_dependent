import injectionsites from '../../components/injectionsites';
import moment from 'moment';

const defaultSites = injectionsites

export default function sitesReducer (state = defaultSites, action) {
    switch (action.type) {

        case 'sites-next-injection-site':
            return [ ...state.slice(1), state[0] ];

        case 'sites-rotate-n-sites':
            return [
              ...state.slice(action.number),
              ...state.slice(0, action.number)
            ];

        case 'sites-reset-defaults':
            return defaultSites;

        default:
            return state;
    }
}
