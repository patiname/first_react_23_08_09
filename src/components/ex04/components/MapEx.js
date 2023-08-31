const nums = [1, 2, 3, 4, 5];

export const MapEx = () => {
  return (
    <div>
      {nums.map((a) => (
        <li key={a}>{a * 10}🤣</li>
      ))}
    </div>
  );
};

// *map메서드
// =>배열의 반복문 대신 map메서드를 이용하여 배열의 개수 만큼
// 반복시킬수 있음
// =>map 메서드는 콜백함수를 사용 및 각 요소를 호출하여
// 해당값을 변환 및 출력 할 수 있음
// =>map 메서드를 사용할땐 반드시 첫번째 엘리먼트에게
// key 속성을 넣어줘야되며, key값은 유니크(중첩되지않는)값 으로
// 적용할것
// ex)
// 배열명.map(함수)
