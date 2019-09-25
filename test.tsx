import React from "react";

type Props<T1, T2> = {
  blah: T1;
  doo: T2;
};

function TestComponent({}: Props) {
  return <>TestComponent</>;
}

function TestComponent<T1, T2>({}: Props<T1, T2>) {
  return <>TestComponent</>;
}

const TestComponent = <T1 extends {}>(type: T1)  => (
	props: Props<T1, T2>
) => {
  return <>TestComponent</>;
}

const blah = doo()

const valueTypeGuard = <T extends Props['type']>(type: T) => (
  props: Props | FormattedValueProps,
): props is PropsFromValueType<T> => props.type === type;

const isDateValue = valueTypeGuard('date');
const isAddressValue = valueTypeGuard('address');
const isListValue = valueTypeGuard('list');
const isTextValue = valueTypeGuard('text');



export default TestComponent;
