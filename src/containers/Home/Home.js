import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export const Home = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>
        Простое онлайн планирование для вашей команды
      </h1>
      <div>
        <Link to="/register" className={`${styles.link}`}>
          Войти в систему
        </Link>
        <Link to="/register" className={`${styles.link} ${styles.primary}`}>
          Зарегистрироваться
        </Link>
      </div>
    </section>
  );
};
