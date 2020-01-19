import React from "react";
import styles from "./index.module.scss";

export default function Introduction() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>产品简介</h3>
      <p className={styles.desc}>
        宝宝总是在不经意间长大，稍不留神就会错过他们的成长瞬间，西柚宝贝是一款专属宝爸宝妈的记录app，记录宝宝成长路上的大事小情，永久存储美好成长记忆。西柚宝贝，因为爱你，所以不能错过你的每次成长。
      </p>
    </div>
  );
}
