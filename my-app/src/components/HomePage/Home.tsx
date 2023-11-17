import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in repellendus
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in repellendus
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <Link to={"products"}>to products</Link>
      </div>
    </>
  );
};

export default Home;
