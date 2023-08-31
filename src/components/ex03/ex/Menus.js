export const Menus = ({ breakfast, lunch, dinner }) => {
  return (
    <div>
      <h3>오늘의 메뉴!</h3>
      <ul>
        <li>아침메뉴: {breakfast}</li>
        <li>점심메뉴: {lunch}</li>
        <li>저녁메뉴: {dinner}</li>
      </ul>
    </div>
  );
};
