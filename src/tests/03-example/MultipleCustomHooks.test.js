import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../hooks/useFetch"
jest.mock("../../hooks/useFetch");
describe('test on <MultipleCustomHooks />', () => {
  test('should render', () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot();
  })

  test('should show info', () => {
    useFetch.mockReturnValue({
      loading: false,
      data: [
        {
          author: "nicolas",
          quote: "Hello world"
        }
      ],
      error: null,
    })
    const wrapper = shallow(<MultipleCustomHooks />)

    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb').exists()).toBe(false)
  })


})
