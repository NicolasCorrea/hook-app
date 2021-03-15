import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('test on useForm', () => {
  const initialForm = {
    name: "nicolas",
    email: "nicolas@nicolas.com"
  }

  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm)
    expect(typeof handleInputChange).toEqual("function")
    expect(typeof reset).toEqual("function")
  })
  test('should change the form value (change name)', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current;
    const newName = "nicolas edit";
    act(() => {
      handleInputChange({ target: { name: "name", value: newName } });
    })
    const [values] = result.current;
    expect(values).toEqual({...initialForm, name: newName})
  })
  test('should reset form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current;
    const newName = "nicolas edit";
    act(() => {
      handleInputChange({ target: { name: "name", value: newName } });
      reset();
    })
    const [values] = result.current;
    expect(values).toEqual(initialForm)
  })

})
