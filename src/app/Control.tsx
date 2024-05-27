'use client';

import { useParams } from 'next/navigation';

export const Control = () => {
  const params = useParams(); // 이렇게 따로 컴포넌트 빼서 훅 사용하면 됨!!
  const id = params.id;
  return (
    <ul>
      <li>
        <a href='/create'>Create</a>
      </li>
      {id ? (
        <>
          <li>
            <a href={`/update/` + id}>Update</a>
          </li>
          <li>
            <input type='button' value='delete' />
          </li>
        </>
      ) : null}
    </ul>
  );
};
