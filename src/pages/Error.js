import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>Page 404 Not Found</h2>
      <Link to={'/'}>Return to Home</Link>
    </section>
  );
};
export default Error;
 