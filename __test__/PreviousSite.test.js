import {shallow} from 'enzyme';
import React from 'react';
import sinon from 'sinon'

import PreviousSite from '../src/PreviousSite';

import MockStorage from './MockStorage';

describe('PreviousSite', () => {
  // it('renders something', () => {
  //   let wrapper = shallow(<PreviousSite />);
  //   expect(wrapper.length > 0).toBe(true);
  // });

  // it('should work fine', done => {
  //   const mockedCallback = () => Promise.resolve({foo: 'bar'});
  //   let promise;
  //   const loadData = () => {
  //     promise = Promise.resolve().then(mockedCallback);
  //     return promise;
  //   };
  //
  //   const wrapper = shallow(<PreviousSite loadData={loadData} />);
  //   expect(wrapper.text()).toEqual('loading');
  //   promise.then(() => {
  //     wrapper.update();
  //     expect(wrapper.text()).toEqual('bar');
  //     done();
  //   });
  // });

  // it('invokes the getComments method', () => {
  //
  //   const storageCache = {"foo": "bar"};
  //   const AsyncStorage = new MockStorage(storageCache);
  //
  //   jest.setMock('AsyncStorage', AsyncStorage)
  //
  //   const wrapper = shallow(<PreviousSite asyncStorageKey={'foo'} />);
  //   return new Promise((resolve) => {
  //     setImmediate(() => {
  //       wrapper.update();
  //       resolve();
  //     });
  //   }).then(() => {
  //     expect(wrapper.text()).toEqual("bar");
  //   });
  // });
  it('uses sinon', () => {
    sinon.spy(PreviousSite.prototype, 'getPrevious');

    // const storageCache = {"foo": "bar"};
    // const AsyncStorage = new MockStorage(storageCache);
    // jest.setMock('AsyncStorage', AsyncStorage)

    const wrapper = shallow(<PreviousSite asyncStorageKey={'foo'}/>);
    // wrapper.find("#loadPrevious").simulate('click');
    wrapper.instance().getPrevious()
    expect.assertions(2)
    expect(PreviousSite.prototype.getPrevious.calledOnce).toEqual(true);
    wrapper.update()
    // setTimeout(() => {
    //   expect(wrapper.text()).toEqual("bar");
    // }, 3000)
    expect(wrapper.text()).toEqual("bar");
  })

});
