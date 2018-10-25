import { saveInj, resetHistory, updateSyncStatus } from '../redux/actions/history';
import { nextInjSite, checkSites, resetSites, rotateNSites } from '../redux/actions/sites';

describe('actions', () => {
  it('should create an action to save injection', () => {
    const injection = 'Dummy injection'
    const expectedAction = {
      type: 'history-save-injection',
      item: injection,
    };
    expect(saveInj(injection)).toEqual(expectedAction)
  });

  it('should create an action to reset history', () => {
    const expectedAction = {
      type: 'history-reset-defaults',
    };
    expect(resetHistory()).toEqual(expectedAction);
  });

  it('should create an action to change dbsync status to true', () => {
    const expectedAction = {
      type: 'history-sync-status',
    }
    expect(updateSyncStatus()).toEqual(expectedAction);
  });

  it('should create an action to move to next inj site', () => {
    const expectedAction = {
      type: 'sites-next-injection-site',
    };
    expect(nextInjSite()).toEqual(expectedAction);
  });

  it('should create an action to rotate injection sites by n', () => {
    const n = 5;
    const expectedAction = {
      type: 'sites-rotate-n-sites',
      number: n,
    };
    expect(rotateNSites(n)).toEqual(expectedAction);
  });

  it('should create an action to reset injection sites', () => {
    const expectedAction = {
      type: 'sites-reset-defaults',
    };
    expect(resetSites()).toEqual(expectedAction)
  });

  it('should create an action to change the state of the checkbox', () => {
    const part = 'Thigh';
    const previousCheckedStatus = true;
    const expectedAction = {
      type: 'sites-checked',
      part: part,
      previousCheckedStatus: previousCheckedStatus
    }
    expect(checkSites(part, previousCheckedStatus)).toEqual(expectedAction)
  });
});
