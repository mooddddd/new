'use client';

export const StickyItem = () => {
  return (
    <div className='w-3/6 max-lg:w-full'>
      <div className='w-full h-screen flex flex-col justify-center sticky top-0'>
        <div className='flex justify-center overflow-hidden max-lg:h-1/2 mb-10'>
          <img
            src='https://avatars.githubusercontent.com/u/116302592?v=4'
            className='rounded-full max-lg:rounded-none'
          />
        </div>
        <div className='px-10'>
          <div>
            <div className=' text-4xl font-bold'>안뇽하세요 은지예요</div>
            <div className=' text-xl mt-2'>
              이건 소제목이고 열심히 하겟습니다
            </div>
            <p className='mt-4'>
              저 짱 열심히 해욤 다 배울 수 있어여 시켜만 주세여
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
