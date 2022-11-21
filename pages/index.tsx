import type {NextPage} from "next";
import Main from "../component/Main/Main";
import Contacts from "../component/contacts/contacts";
import Fireflies from "../component/fireflies/fireflies";


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