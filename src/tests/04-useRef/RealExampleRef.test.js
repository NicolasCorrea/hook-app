import { shallow } from 'enzyme'
import { RealExampleRef } from '../../components/04-useRef/RealExampleRef'

describe('test on <RealExampleRef />', () => {
  
  test('should render', () => {
    const wrapper = shallow(<RealExampleRef />)
    expect(wrapper).toMatchSnapshot();
  })
  
  test('should show <MultipleCustomHooks />', () => {
    const wrapper = shallow(<RealExampleRef />)
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  })
  

})
