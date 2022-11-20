import type {NextPage} from "next";
import Main from "../component/Main/Main";
import Contacts from "../component/contacts/contacts";
import classes from '../styles/firefly.module.css';
import Fireflies from "../component/contacts/fireflies/fireflies";
const Home: NextPage = () => {
  return (
      <>
        <Contacts/>
        <Main/>
        <Fireflies/>
      </>
  );
};

export default Home;
