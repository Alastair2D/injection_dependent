import { shallow } from 'enzyme';
import React from 'react';
import moment from 'moment';
import PreviousSite from '../components/PreviousSite';
import injectionsites from "../components/injectionsites";

describe('PreviousSite', () => {
  it('renders text of previous site location and time', () => {
<<<<<<< HEAD
    const time = moment();
    const calTime = time.calendar();
    const app = shallow(<PreviousSite site='Left arm' time={time} />);
=======
    const time = moment()
    const calTime = time.calendar()
    const app = shallow(<PreviousSite site={ injectionsites[0] } time={time}/>);
>>>>>>> development
    const text = app
      .find('#site')
      .dive()
      .text();
<<<<<<< HEAD

    expect(text).toEqual(`Previous: Left arm,\n${calTime}`);
  });
=======
    expect(text).toEqual("Previous: Left Thigh 1, " + calTime);
  })
>>>>>>> development
});
