import React from 'react';
import { shallow } from 'enzyme';
import SearchPopup from '../SearchPopup';
describe('SearchPopup', () => {
  it('is rendered', () => {
    const component = shallow(<SearchPopup />);
    expect(component).toMatchSnapshot();
  });

describe('prop isPopupActive', () => {
  it('when isPopupActive is true is rendered', () => {
    const component = shallow(<SearchPopup isPopupActive />);
    expect(component).toMatchSnapshot();
  });

  it('when isPopupActive is false is rendered', () => {
    const component = shallow(<SearchPopup isPopupActive={false} />);
    expect(component).toMatchSnapshot();
  });
});

  it('pass down hidePopup prop', () => {
    const hidePopup= jest.fn();
    const component = shallow(<SearchPopup hidePopup={hidePopup}/>);
    expect(component.find("img").prop("onClick")).toEqual(hidePopup);
  });
});
