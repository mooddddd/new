// paramters : props.params.id
// 여기서 id는 내가 디렉터리명을 id로 설정해서임

const Read = async (props: any) => {
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
};

export default Read;

// 이 페이지는 사용자와 상호작용 하지 않음! 데이터를 뿌려주기만 할 뿐
// => 즉, 서버 컴포넌트로 만들면 됨!!
