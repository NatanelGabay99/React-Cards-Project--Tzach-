import React, { useCallback, useMemo, useState } from "react";
import MyButton from "./MyButton";

export default function RenderComponent() {
  console.log("The components is rendered");

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);


  const doSomethingLong = useMemo(() => {
    console.log("The long function is render");
    return 5 * value2;
  }, [value2]);

  const handleClick1 = useCallback(() => setValue((prev) => prev + 1), []);

  const handleClick2 = useCallback(() => setValue2((prev) => prev + 1), []);

  return (
    <div>
      <h1>{value}</h1>
      <MyButton handleClick={handleClick1}>+</MyButton>

      <h1>{value2}</h1>
      <MyButton handleClick={handleClick2}>++++++</MyButton>
      <p>{doSomethingLong}</p>
    </div>
  );
}