import { shallow } from "enzyme"
import App from "../App"

describe('test on App', () => {
  
  test('should render', () => {
      const wrapper = shallow(<App />)

      expect(wrapper).toMatchSnapshot();

  })
  

})
