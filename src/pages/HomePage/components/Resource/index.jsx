import React from "react";
import styles from "./index.module.scss";

export default function Resource() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>产品介绍</h3>
      <div className={styles.content}>
        <div className={styles.cellleftContent}>
          <div className={styles.infoBox}>
            <h6 className={styles.subTitle}>初心</h6>
            <p className={styles.desc}>
              宝宝总是在不经意间长大，稍不留神就会错过他们的成长瞬间。西柚宝贝是一款专属宝爸宝妈的记录App。在这里你可以：创建宝宝专属成长空间，存储宝宝成长图片、视频和数据，记录宝宝成长路上的大事小情，与家人共享宝宝成长记忆。
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
              <h6 className={styles.subTitle}>成长无小事</h6>
              <p className={styles.desc}>
                宝宝每次成长的背后，都藏着爸爸妈妈的默默付出，宝宝的每件事，都是成长路上的大事。在西柚宝贝，记录宝宝的每一次成长，监测宝宝各项生长数据指标。因为爱你，所以不能错过你的每次成长。
              </p>
            </div>
          </div>
          <div className={styles.bottomItemBodyitemBody}>
            <div className={styles.infoBox}>
              <h6 className={styles.subTitle}>安全承诺</h6>
              <p className={styles.desc}>
                一对一专属私密图库，宝宝隐私绝不外泄。
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
