
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Book from './BookMatch/Book';
import Choose from './Choose/Choose';
import Results from './Results/Results';
import Squad from './Squad/Squad';
import Subscriptions from './Subscriptions/Subscriptions';
import Table from './Table/Table';

export default function Landing() {
  return (
    <>
      <Banner/>
      <Results />
      <Table/>
      <Book/>
      <Squad/>
      <AboutUs/>
      <Subscriptions/>
      <Choose/>
      
      
    </>
  );
}
