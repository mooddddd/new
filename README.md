기록용

1.

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    // 실 서버를 위한 배포판을 만드는 명렁어
    "start": "next start",
    // 빌드한 배포판을 서비스하는 명령어
    "lint": "next lint"
  }
```

```
npm run next build => .next 폴더 생성 (사용자에게 서비스되는 내용이 담겨있음)
npm run next start => 서비스 시작됨

뭐가 다름? => 실서버용 배포판은 서버에서 클라이언트로 전송하는 리소스의 용량이 엄청나게 줄어듦을 볼 수 있음
내가 여러가지로 제어하는 대로 배포되는 것을 확인할 수 있음????
```

2. SAP를 고려하여 a 태그 보다는 Link 사용하면 좋음

3. 정적 자원 활용하기
   > public 디렉터리 안에 넣어서 사용할 수 있음

```js
// public/hello.png 파일이 있을 때
<img src='hello.png' />
// 이런 식으로 바로 경로 써주면 됨
```

4. json-server 사용하여 백앤드 구축하기

```
npx json-server@0.17.4 --port 9999 --watch db.json
  > port 9999로 서버 열고, db.json 파일 변경되면 바로 재시동 될 수 있게 --watch 붙여줌
  (버전 이슈로 인해 @로 버전 지정해줌)
```

5. 어떤 컴포넌트를 서버에 두고, 클라이언트에 두면 좋을까?
   > 기본적으로 넥스트 공식문서에 관련 내용이 있음

- 정보를 표현하는 데 사용자와 상호작용하지 않는 것들은 서버 컴포넌트로 만드는 것이 유리
  서버 컴포넌트 안에서 버튼이나 검색 등 사용자와 직접 상호작용하는 것들은 클라이언트 컴포넌트로 만들면 된다.

  > react의 useState, useEffect 혹은 onClick, onChange 같은 것들은 클라이언트 컴포넌트에서만 가능
  > 반면에 cookie, header, secure data 등등은 서버 컴포넌트에서만 사용할 수 있음

- 기본적으로 페이지를 만들면 서버 컴포넌트로 인지함. 클라이언트 컴포넌트를 위해서는 'use client' 를 반드시 파일 맨 윗줄에 붙여줘야 함
