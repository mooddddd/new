'use client';

export const StickyItem = () => {
  return (
    <div className='w-3/6'>
      <div className='w-full h-screen flex flex-col justify-between sticky top-0'>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/116302592?v=4'
            className=' rounded-full'
          />
        </div>
        <div>내용</div>
      </div>
    </div>
  );
};
