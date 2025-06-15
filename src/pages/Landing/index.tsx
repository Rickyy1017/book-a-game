import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Book from "./BookMatch/Book";
import Choose from "./Choose/Choose";
import Results from "./Results/Results";
import Squad from "./Squad/Squad";
import Subscriptions from "./Subscriptions/Subscriptions";
import Table from "./Table/Table";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";

export default function Landing() {
  return (
    <>
      <Header />
      <Banner />
      <Results />
      <Table />
      <Book />
      <Squad />
      <AboutUs />
      <Subscriptions />
      <Choose />
      <Footer />
      <BackToTopButton />
    </>
  );
}
