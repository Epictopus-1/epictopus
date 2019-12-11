import Layout from "../components/Layout";
import Space from "../components/Space";
// import Loader from "../components/loader/Loader";
import SubmitButton from "../components/buttons/SubmitButton";

export default function Test() {
  return (
    <Layout>
      <Space />
      {/* <Loader /> */}
      <SubmitButton />
      <Space />
      <div>
        <button>UP !</button>
      </div>
    </Layout>
  );
}
