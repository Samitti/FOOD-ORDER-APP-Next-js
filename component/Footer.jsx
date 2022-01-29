import Image from 'next/image';
import styles from "../styles/footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit='cover' layout="fill" alt='' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID THE MESOB PIZZA, WELL BACKEDSLICE OF PIZZA. 
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        34349 R. Rubaga Road #304.
                        <br /> Kitchener, 68272
                        <br /> (256) 702-079287
                    </p>
                    <p className={styles.text}>
                        34349 R. Rubaga Road #304.
                        <br /> Kitchener, 68272
                        <br /> (256) 702-079287
                    </p>
                    <p className={styles.text}>
                        34349 R. Rubaga Road #304.
                        <br /> Kitchener, 68272
                        <br /> (256) 702-079287
                    </p>
                    <p className={styles.text}>
                        34349 R. Rubaga Road #304.
                        <br /> Kitchener, 68272
                        <br /> (256) 702-079287
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

