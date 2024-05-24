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
