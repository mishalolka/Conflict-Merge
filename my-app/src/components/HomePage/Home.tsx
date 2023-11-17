import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>

        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <Link to={"products"}>to products</Link>
      </div>
    </>
  );
};

export default Home;
