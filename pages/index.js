import Head from "next/head";
import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";

export default function Home() {
  return (
    <div className="appContainer">
      <Head>
        <title>Next JS - Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
      </Head>
      <NavBar />
      <MainContainer/>
    </div>
  );
}
