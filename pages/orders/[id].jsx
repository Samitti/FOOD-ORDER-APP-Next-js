import Image from 'next/image';
import React from 'react';
import styles from "../../styles/order.module.css";

const Order = () => {
    const status = 0;
    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                    <tbody>
                    <tr className={styles.trTitle}>
                        <th>Order Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    </tbody>
                     <tbody> 
                    <tr className={styles.tr}>                        
                        <td>
                            <span className={styles.id}>1234567</span>
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
                    </tbody>  
                    </table>                    
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/paid.png" width={30} height={30} alt="" />
                        <span className={styles.payment}>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/bake.png" width={30} height={30} alt="" />
                        <span className={styles.payment}>preparing</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/bike.png" width={30} height={30} alt="" />
                        <span className={styles.payment}>On the way</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/delivered.png" width={30} height={30} alt="" />
                        <span className={styles.payment}>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
                        </div>
                    </div>
                </div>
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
