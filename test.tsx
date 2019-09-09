import React from "react";

type Props<T1, T2> = {
  blah: T1;
  doo: T2;
};

const TestComponent = <T1, T2>({  }: Props<T1, T2>) => {
  return <>TestComponent</>;
};

export default TestComponent;
