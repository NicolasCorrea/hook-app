import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks"
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch"
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe('test on <MultipleCustomHooks />', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({ counter: 1, increment(){}})
  })

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
    expect(wrapper.find('.mb-2').text().trim()).toBe("Hello world")
  })


})
