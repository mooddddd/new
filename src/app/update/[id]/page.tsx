'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const Update = () => {
  // read 기능은 서버 컴포넌트이기 때문에 use Client에 맞춰서 다시 만들어야 함!
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch('http://localhost:9999/topics/' + id)
      .then((res) => res.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);

  return (
    <form
      onSubmit={(e): React.FormEvent<HTMLFormElement> => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        const options = {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`http://localhost:9999/topics/` + id, options)
          .then((res) => res.json())
          .then((result) => {
            const lastId = result.id;
            router.refresh();
            router.push(`/read/${lastId}`);
          });
      }}
    >
      <p>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name='body'
          placeholder='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      <p>
        <input type='submit' value='update' />
      </p>
    </form>
  );
};

export default Update;
