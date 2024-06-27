export const MovedItem = () => {
  /* <div className='aspect-[7/5]'></div> 사진 비율 고정*/

  const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const oddNumver = list.map((v) => {
    if (v.id % 2 == 1)
      return (
        <div
          className='h-96 border max-lg:h-20'
          key={v.id}
        >{`${v.id}입니다`}</div>
      );
  });

  const evenNumver = list.map((v) => {
    if (v.id % 2 == 0)
      return (
        <div
          className='h-96 border max-lg:h-20'
          key={v.id}
        >{`${v.id}입니다`}</div>
      );
  });

  // 컴포넌트 만들어놓고 if문으로 홀수 짝수 구분해서 값 넘긴 다음에 컴포넌트에 활용하기?

  return (
    <div className='flex w-3/6 justify-evenly bg-white h-full max-lg:w-full max-sm:flex-col'>
      <div className='left w-2/5 max-sm:w-full px-2'>{oddNumver}</div>
      <div className='right w-2/5 max-sm:w-full px-2'>{evenNumver}</div>
    </div>
  );
};
