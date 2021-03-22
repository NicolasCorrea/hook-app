import { shallow } from "enzyme"
import { TodoListItem } from "../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../fixtures/demoTodos"

describe('<TodoListItem />', () => {
  const handleDelete= jest.fn();
  const handleToggle= jest.fn();
  const index = 1;
  const wrapper = shallow(<TodoListItem
    todo={demoTodos[0]}
    handleDelete={handleDelete}
    handleToggle={handleToggle}
    index={index}
  />)

  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  })
  test('should call handleDelete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  })
  test('should call handleToggle', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('should show the text succefully', () => {
    const p = wrapper.find('p').text().trim();
    expect(p).toBe(`${index+1}. ${demoTodos[0].desc}`);
  })


  test('should have complete class when a todo is complete', () => {
    const wrapper = shallow(<TodoListItem
      todo={{...demoTodos[0], done: true}}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      index={index}
    />)

    const p = wrapper.find('p');
    expect(p.hasClass('complete')).toBe(true);
  
  })
  
})
