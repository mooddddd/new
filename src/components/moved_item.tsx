export const MovedItem = () => {
  /* <div className='aspect-[7/5]'></div> 사진 비율 고정*/

  const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const oddNumver = list.map((v) => {
    if (v.id % 2 == 1)
      return <div className='h-96 border' key={v.id}>{`${v.id}입니다`}</div>;
  });

  const evenNumver = list.map((v) => {
    if (v.id % 2 == 0)
      return <div className='h-96 border' key={v.id}>{`${v.id}입니다`}</div>;
  });

  return (
    <div className='flex w-3/6 justify-evenly h-screen'>
      <div className='left w-2/5'>{oddNumver}</div>
      <div className='right w-2/5'>{evenNumver}</div>
    </div>
  );
};
