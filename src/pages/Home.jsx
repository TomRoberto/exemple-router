import { Link } from "react-router-dom";

const Home = () => {
  const id = 123;
  return (
    <div>
      <h1>Je suis sur la page home</h1>
      <Link to="/details">
        <button>Naviguer vers details</button>
      </Link>
      <Link to={`/offer/${id}`}>Naviguer vers Offer</Link>
    </div>
  );
};

export default Home;
