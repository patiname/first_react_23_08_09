export const WeekMenu = ({ menuList }) => {
  console.log(menuList);

  return (
    <>
      <div>
        <h3>{menuList[0].week}</h3>
        <ul>
          <li>아침메뉴: {menuList[0].breakfast}</li>
          <li>점심메뉴: {menuList[0].lunch}</li>
          <li>저녁메뉴: {menuList[0].dinner}</li>
        </ul>
      </div>
      <div>
        <h3>{menuList[1].week}</h3>
        <ul>
          <li>아침메뉴: {menuList[1].breakfast}</li>
          <li>점심메뉴: {menuList[1].lunch}</li>
          <li>저녁메뉴: {menuList[1].dinner}</li>
        </ul>
      </div>
      <div>
        <h3>{menuList[2].week}</h3>
        <ul>
          <li>아침메뉴: {menuList[2].breakfast}</li>
          <li>점심메뉴: {menuList[2].lunch}</li>
          <li>저녁메뉴: {menuList[2].dinner}</li>
        </ul>
      </div>
    </>
  );
};
