// paramters : props.params.id
// 여기서 id는 내가 디렉터리명을 id로 설정해서임

const Read = (props: any) => {
  return (
    <>
      <h2>Read</h2>
      {props.params.id}
    </>
  );
};

export default Read;
