import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h3>HOME</h3>

      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};
