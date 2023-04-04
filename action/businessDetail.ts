export const businessDetail = (payload: any) => (
    {
      type: 'ADD_DETAIL',
      payload: payload,
    }
  );

  export const deleteBusinessDetail = (index: number) => (
    {
      type: 'DELETE_DETAIL',
      payload: index,
    }
  );