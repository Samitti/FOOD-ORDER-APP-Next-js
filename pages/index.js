import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Featured from '../component/Featured';
import PizzaList from '../component/PizzaList';
import styles from '../styles/Home.module.css';

export default function Home({pizzaList}) {
  return (
    <div >
      <Head>
        <title>Pizza Restaurant in Kitchener</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    }
  }
}
