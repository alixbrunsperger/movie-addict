import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from '../HomeContainer';
import Header from '../../common/Header';
import SearchPopup from '../../common/SearchPopup'
describe('HomeContainer', () => {
  it('is rendered', () => {
    const component = shallow(<HomeContainer />);
    expect(component).toMatchSnapshot();
  });

describe('setIsPopupActive', () => {
  it('modify the state when called', () => {
    const component = shallow(<HomeContainer />);
    expect(component.instance().state.isPopupActive).toEqual(false);
    component.instance().setIsPopupActive(true);
    expect(component.instance().state.isPopupActive).toEqual(true);
  });
});

describe('SearchPopup', () => {
  it('pass down isPopupActive from state', () => {
    const component = shallow(<HomeContainer/>);
    const value = "value";
    component.instance().setIsPopupActive(value);
    expect(component.find(SearchPopup).prop("isPopupActive")).toEqual(value);
  });

  it('set hidePopup prop', () => {
    const component = shallow(<HomeContainer/>);
    expect(component.find(SearchPopup).prop("hidePopup")).toEqual(component.instance().hidePopup);
  });
});


describe('Header', () => {
  it('set showPopup prop', () => {
    const component = shallow(<HomeContainer/>);
    const prop = () => component.instance().setIsPopupActive(true);
    expect(component.find(Header).prop("showPopup")).toEqual(component.instance().showPopup);
  });
});
});
