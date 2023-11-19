import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  
  return (
    <>
      <div className="container">
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <div className={styles.logo}>Home</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          laudantium, sed suscipit nobis, exercitationem qui libero iure
          excepturi dolorem earum omnis, fugiat sint veritatis voluptatem
          assumenda repellat ullam dicta labore.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          laudantium, sed suscipit nobis, exercitationem qui libero iure
          excepturi dolorem earum omnis, fugiat sint veritatis voluptatem
          assumenda repellat ullam dicta labore.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          laudantium, sed suscipit nobis, exercitationem qui libero iure
          excepturi dolorem earum omnis, fugiat sint veritatis voluptatem
          assumenda repellat ullam dicta labore.
        </div>
        <Link to={"products"}>to products</Link>
      </div>
    </>
  );
};

export default Home;
