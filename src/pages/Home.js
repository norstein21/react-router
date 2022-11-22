import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='section'>
      <h2>Halaman Berandaaa</h2>
      <Link to={'/coba'} className='btn'>
        URL Coba
      </Link>
    </section>
  );
};
export default Home;
