import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../../styles/product.module.css";

const Product = ({pizza}) => {
    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);

    const changePrice = (number) => {
        setPrice(price + number);
    }

    const handleSize = (sizeIndex) => {
        const difference = pizza.prices[sizeIndex] -
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;handleSize
    }
   
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} objectFit='contain' layout='fill' alt='' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}> {pizza.title}</h1>
                <span  className={styles.price}>${pizza.prices[size]}</span>
                <p className={styles.desc}>{ pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt='' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt='' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt='' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose addtional ingredients</h3>
                <div className={styles.ingredients}>
                    {pizza.extraOptions.map((option) => (
                        <div className={styles.option} key={option._id}>
                            <input
                                type="checkbox"
                                id={option.text}
                                name={option.text}
                                className={styles.checkbox}
                                onChange={(e) => handleChange(e, option)}
                            />
                            <label htmlFor="double">{ option.text }</label>
                        </div> 
                    ))}                                     
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      pizza: res.data,
    }
  }
}

export default Product;
