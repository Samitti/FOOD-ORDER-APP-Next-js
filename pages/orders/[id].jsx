import Image from 'next/image';
import React from 'react';
import styles from "../../styles/order.module.css";

const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Order Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr>                        
                        <td>
                            <span className={styles.name}>1234567</span>
                        </td>
                        <td>
                            <span className={styles.name}>
                                Samuel Tewelde
                            </span>
                        </td>
                        <td>
                            <span className={styles.address}>Rubaga st. 212-33 Kt</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>                    
                    </table>                    
                </div>
                <div className={styles.row}></div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>                                    
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>            
        </div>
    );
};

export default Order;
