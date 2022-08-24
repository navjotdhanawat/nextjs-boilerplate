import styles from "../styles/Home.module.css";
import Layout from "../components/mainlayout";
import { Button } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <Button>Button</Button>
    </>
  );
};

Home.getLayout = (page) => <Layout meta={{}}>{page}</Layout>;

export default Home;
