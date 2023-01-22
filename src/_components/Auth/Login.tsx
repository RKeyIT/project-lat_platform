import React from 'react';
import styles from './styles.module.css'

const Login = () => {


    return (
            <div className={styles.formWrapper}>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="login">Login</label>
                    <input className={styles.input} id="login" type="text" placeholder="Login"/>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={styles.input} id="password" type="password" placeholder="Password"/>
                    <div className={styles.formButtons}>
                        <button className={styles.button} type="submit">Login</button>
                        <button className={styles.button} type="reset">Registration</button>
                    </div>
                </form>
            </div>
    );
};

export default Login;