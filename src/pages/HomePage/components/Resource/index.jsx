import React from 'react';
import styles from './index.module.scss';

export default function Resource() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>产品介绍</h3>
      <div className={styles.content}>
        <div className={styles.cellleftContent}>
          <div className={styles.infoBox}>
            <h6 className={styles.subTitle}>初心</h6>
            <p className={styles.desc}>
              宝宝总是在不经意间长大，稍不留神就会错过他们的成长瞬间，西柚宝贝是一款专属宝爸宝妈的记录app，记录宝宝成长路上的大事小情，永久存储美好成长记忆。西柚宝贝，因为爱你，所以不能错过你的每次成长。
            </p>
            
          </div>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/VvGnZYfUXGmgkJklZRDH.png_.webp"
            alt=""
            className={styles.imga}
          />
        </div>
        <div className={styles.cellrightContent}>
          <div className={styles.topItemBodyitemBody}>
            <div className={styles.itemBodyImg}>
              <img
                src="https://img.alicdn.com/tfs/TB1Od0ZnH_I8KJjy1XaXXbsxpXa-276-200.png_.webp"
                alt=""
                className={styles.imgt}
              />
            </div>
            <div className={styles.infoBox}>
              <h6 className={styles.subTitle}>快速记录</h6>
              <p className={styles.desc}>
                随时记录，图片，视频文本等多种记录方式，认真记录宝宝每次成长。
                含有丰富小部件，迅速记录不错过。
              </p>
            
            </div>
          </div>
          <div className={styles.bottomItemBodyitemBody}>
            <div className={styles.infoBox}>
              <h6 className={styles.subTitle}>安全无忧</h6>
              <p className={styles.desc}>
                内容加密存储，安全无忧，保证隐私安全，免费使用，更轻松。
              </p>
            
            </div>
            <div className={styles.itemBodyImg}>
              <img
                src="https://img.alicdn.com/tfs/TB1M00ZnH_I8KJjy1XaXXbsxpXa-352-240.png_.webp"
                alt=""
                className={styles.imgtr}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
