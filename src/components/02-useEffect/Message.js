import { useEffect, useState } from 'react'

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    console.log("inicio componente");
    const mouseMove = (e) => {
      setCoords({ y: e.y, x: e.x });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove)
      console.log("componente desmontado");
    }
  }, [])
  return (
    <div>
      <p>
        x: {x}
      </p>
      <p>
        y: {y}
      </p>
    </div>
  )
}
