const getFieldsValue = (ref: HTMLFormElement | null, fields: string[]) => {
  const values: { [key: string]: string } = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields.forEach((id: any) => {
    values[id] = ref!.current![id].value;
  });

  return values;
};

export default getFieldsValue;
