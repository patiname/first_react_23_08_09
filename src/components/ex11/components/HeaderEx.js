import { Link } from "react-router-dom";

export const HeaderEx = () => {
  return (
    <ul>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/sub01"}>SUB01</Link>
      </li>
      <li>
        <Link to={"/sub02"}>SUB02</Link>
      </li>
    </ul>
  );
};
