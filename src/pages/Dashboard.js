const Dashboard = ({user}) => {


  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <article>
        <h5>Welcome, {user.name}</h5>
      </article>
    </section>
  );
};
export default Dashboard;
