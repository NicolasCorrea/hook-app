import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'


describe('test on useCounter', () => {

  test('should return default values', () => {
    const { result: { current } } = renderHook(() => useCounter());

    expect(current.counter).toBe(1);
    expect(typeof current.reset).toBe('function');
    expect(typeof current.increment).toBe('function');
    expect(typeof current.decrement).toBe('function');
  })

  test('should have counter in 1', () => {
    const { result: { current } } = renderHook(() => useCounter(100));

    expect(current.counter).toBe(100);
  })

  test('should increment counter on 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101)
  })
  
  test('should decrement counter on 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(99)
  })
 
  test('should reset counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;
    act(() => {
      decrement();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100)
  })



})
