import React from 'react';
import styles from './index.module.scss';
import href from '../../const';

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>西柚宝贝，喜爱宝贝。</div>
        <div className={styles.desc}>和宝宝一起成长，记录每个幸福瞬间。</div>
        <a className={styles.link} href={href}>下载应用</a>
      </div>
    </div>
  );
}
