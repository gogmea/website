import React from "react";
import styles from "./index.module.scss";
import href from "../../const";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>西柚宝贝，不负成长每一天。</div>
        <div className={styles.desc}>记录时光，见证成长。</div>
        <a className={styles.link} href={href}>
          下载应用
        </a>
      </div>
    </div>
  );
}
