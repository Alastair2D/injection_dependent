import reducer from '../redux/reducers/index'
import injectionsites from '../components/injectionsites';
import DefaultFirstInj from '../components/defaultFirstInj';
import moment from 'moment';
import timekeeper from 'timekeeper';

describe('sites reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}).sites).toEqual(injectionsites)
  })
  it('should handle sites-next-injection-site', () => {
    expect(
      reducer({
        sites: [1,2,3,4,5],
        history: [1]
      }, {
        type: 'sites-next-injection-site'
      })
    ).toEqual({ sites: [2,3,4,5,1], history: [1] })
  })
  it('should handle sites-rotate-n-sites', () => {
    expect(
      reducer({
        sites: [1,2,3,4,5],
        history: [1]
      }, {
        type: 'sites-rotate-n-sites',
        number: 3
      })
    ).toEqual({ sites: [4,5,1,2,3], history: [1] })
  })
  it('should handle site reset', () => {
    expect(reducer({
      sites: [3,4,5,1,2],
      history: [1]
    }, {
      type: 'sites-reset-defaults'
    })).toEqual({ sites: injectionsites, history: [1] })
  })

  it('should handle site checked for one part', () => {
    expect(
      reducer({
        sites: [{part: 3, active: true}],
        history: [1]
      }, {
        type: 'sites-checked',
        part: 3,
        previousCheckedStatus: true
      })
    ).toEqual({ sites: [{part: 3, active: false}], history: [1] })
  })

  it('should handle site checked for several parts', () => {
    expect(
      reducer({
        sites: [{part: 3, active: true}, {part: 3, active: true}, {part: 1, active: true}],
        history: [1]
      }, {
        type: 'sites-checked',
        part: 3,
        previousCheckedStatus: true
      })
    ).toEqual({ sites: [{part: 3, active: false},
              {part: 3, active: false},
              {part: 1, active: true}], history: [1] })
  })
})

describe('history reducer', () => {
  timekeeper.freeze(new Date(1539760000000))

  it('should return the initial state', () => {
    expect(reducer(undefined, {}).history).toEqual([new DefaultFirstInj().defaultFirstInj])
  })
  it('should handle history-save-injection', () => {
    expect(
      reducer({
        sites: [1,2,3,4,5],
        history: [1]
      }, {
        type: 'history-save-injection',
        item: 2
      })
    ).toEqual({ sites: [1,2,3,4,5], history: [1, 2] })
  })
  it('should handle history reset', () => {
    expect(reducer({
      sites: [3,4,5,1,2],
      history: [1]
    }, {
      type: 'history-reset-defaults'
    })).toEqual({ sites: [3,4,5,1,2], history: [new DefaultFirstInj().defaultFirstInj] })
  })

  it('changes history sync to true', () => {
    expect(reducer({
      sites: [1,2,3,4],
      history: [{ site: 1, dbsync: false }, { site: 2, dbsync: false }]
    }, {
      type: 'history-sync-status',
    })).toEqual({ sites: [1,2,3,4], history: [{ site:1, dbsync: true }, { site: 2, dbsync: true }] })

  });
})
