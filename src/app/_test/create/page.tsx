'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

// 이 페이지는 사용자와 상호작용을 하므로 클라이언트 컴포넌트여야 함!

export const Create = () => {
  const router = useRouter();
  return (
    <form
      onSubmit={(e): React.FormEvent<HTMLFormElement> => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        const options = {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            const lastId = result.id;
            router.push(`/read/${lastId}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input type='text' name='title' placeholder='title' />
      </p>
      <p>
        <textarea name='body' placeholder='body' />
      </p>
      <p>
        <input type='submit' value='create' />
      </p>
    </form>
  );
};

export default Create;

// 업로드 후 반영 => cache 공부하기
// patch로 인해 만들어진 cache를 지워야 함
// => next 공식문서에서 revalidating data & caching data 공부하면 됨
// 여기서는 간단하게 해결하기 위해 fetch를 이용하여 데이터를 가져온 이후에 이를 캐시로 저장하지 않는 방법 사용
