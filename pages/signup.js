import styles from "../styles/Home.module.css";
import Layout from "../components/mainlayout";

const Singup = () => {
  return <h6>Welcome to Singup</h6>;
};

Singup.getLayout = (page) => <Layout meta={{}}>{page}</Layout>;

export default Singup;
