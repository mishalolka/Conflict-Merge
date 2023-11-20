import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <div className="container">

        <div>Products</div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          aspernatur debitis ex porro corporis accusantium nam deserunt
          quibusdam nulla totam natus sequi eaque, possimus at rerum ipsa
          sapiente. Repellendus, facilis.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          aspernatur debitis ex porro corporis accusantium nam deserunt
          quibusdam nulla totam natus sequi eaque, possimus at rerum ipsa
          sapiente. Repellendus, facilis.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          aspernatur debitis ex porro corporis accusantium nam deserunt
          quibusdam nulla totam natus sequi eaque, possimus at rerum ipsa
          sapiente. Repellendus, facilis.
        </div>
        <Link to={"/"}>to Home</Link>
      </div>
      </div>

    </>
  );
};

export default Products;
