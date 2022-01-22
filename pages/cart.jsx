import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../styles/cart.module.css";
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const Cart = () => {
    const [open, setOpen] = useState(false);

    // This values are the props in the UI
    const amount = "2";
    const currency = "USD";
    const style = { "layout": "vertical" };

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  
    // Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            // Your code here after capture the order
                        });
                    }}
                />
            </>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        </tr>
                        </tbody>
                    {cart.products.map((product) => (
                        <tbody>
                        <tr className={styles.tr} key={product._id}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src={product.img} layout="fill" objectFit="cover" alt="" />
                                </div>                            
                            </td>
                            <td>
                                <span className={styles.name}>{ product.title }</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    {product.extras.map(extra => (
                                        <span key={extra._id}>{ extra.text}, </span>
                                    ))}
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>${product.price}</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>{ product.quantity }</span>
                            </td>
                            <td>
                                <span className={styles.total}>${product.price * product.quantity}</span>
                            </td>
                            </tr> 
                            </tbody>
                    ))}
                                       
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>                                    
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>${cart.total}
                    </div>
                    {open ? (
                        <div className={styles.paymentMethods}>
                            <button className={styles.payButton}>CASH ON DELIVERY</button>
                            <PayPalScriptProvider
                                options={{
                                    "client-id": "AffZgVW5v3mGtCpEw0x2Aj7arJRJu73x505s839Q_v9MKL6bCtiFXC3WMnQ_5w4uFsx4hDLUMSB7nrCL",
                                    components: "buttons",
                                    currency: "USD",
                                    "disable-funding":"credit,card,p24"
                                }}
                            >
                                <ButtonWrapper
                                    currency={currency}
                                    showSpinner={false}
                                />
                                </PayPalScriptProvider>
                            </div>
                    ) : (                           
                            <button onClick={() => setOpen(true)} className={styles.button}>CHECKOUT NOW!</button>                        
                    )}
                    
                </div>
            </div>

        </div>
    );
};

export default Cart;
