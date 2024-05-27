'use client';

import { useParams, useRouter } from 'next/navigation';

export const Control = () => {
  const params = useParams(); // 이렇게 따로 컴포넌트 빼서 훅 사용하면 됨!!
  const router = useRouter();
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
            <input
              type='button'
              value='delete'
              onClick={() => {
                const options = { method: 'DELETE' };
                fetch('http://localhost:9999/topics/' + id, options)
                  .then((res) => res.json())
                  .then((result) => {
                    router.push('/');
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
};
