import { saveInj, resetHistory } from '../redux/actions/history';
import { nextInjSite, resetSites } from '../redux/actions/sites';

describe('actions', () => {
  it('should create an action to save injection', () => {
    const injection = 'Dummy injection'
    const expectedAction = {
      type: 'history-save-injection',
      item: injection
    }
    expect(saveInj(injection)).toEqual(expectedAction)
  })

  it('should reset history', () => {
    const expectedAction = {
      type: 'history-reset-defaults'
    }
    expect(resetHistory()).toEqual(expectedAction)
  })

  it('should create an action to move to next inj site', () => {
    const expectedAction = {
      type: 'sites-next-injection-site'
    }
    expect(nextInjSite()).toEqual(expectedAction)
  })
  
  it('should reset injection sites', () => {
    const expectedAction = {
      type: 'sites-reset-defaults'
    }
    expect(resetSites()).toEqual(expectedAction)
  })
})
