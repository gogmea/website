import React from 'react';
import styles from './index.module.scss';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>产品简介</h3>
      <p className={styles.desc}>
        我需要一个文案这里。
        </p>
    </div>
  );
}
