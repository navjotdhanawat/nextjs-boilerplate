import styles from "../styles/Home.module.css";
import Layout from "../components/mainlayout";

const Login = () => {
  return <h6>Welcome to Login</h6>;
};

Login.getLayout = (page) => <Layout meta={{}}>{page}</Layout>;

export default Login;
