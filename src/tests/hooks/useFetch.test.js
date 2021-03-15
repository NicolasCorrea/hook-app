import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('test on useFetch', () => {


  test('should return default values', () => {
    const { result } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"));
    const { data, error, loading } = result.current
    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(true);
  });

  test('should have desire data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"));
    await waitForNextUpdate({ timeout: 5000 });
    const { data, error, loading } = result.current;
    expect(data.length).toBe(1)
  })

  test('should return a proper error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/aspi/users?page=2")
    );
    await waitForNextUpdate({ timeout: 5000 });
    const { data, error, loading } = result.current;
    expect(error).toBe("no se pudo obtener la data")

  })


})
