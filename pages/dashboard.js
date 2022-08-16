import styles from "../styles/Home.module.css";
import Layout from "../components/mainlayout";

const Dashboard = () => {
  return <h6>Welcome to Dashboard</h6>;
};

Dashboard.getLayout = (page) => <Layout meta={{}}>{page}</Layout>;

export default Dashboard;
