import React from "react";
import { Grid } from "@alifd/next";
import styles from "./index.module.scss";

const { Row, Col } = Grid;

const dataSource = [
  {
    title: "快速记录",
    pic: require("./images/img1.png"),
    desc:
      "随时记录，图片，视频文本等多种记录方式，认真记录宝宝每次成长"
  },
  {
    title: "安全无忧",
    pic: require("./images/img3.png"),
    desc: "内容加密存储，安全无忧，保证隐私安全"
  },
  {
    title: "一键生成",
    pic: require("./images/img4.png"),
    desc: "一键生成宝宝成长日记，用视频串联成长记忆"
  },
  {
    title: "多人共享",
    pic: require("./images/img2.png"),
    desc: "关爱无距离，邀请亲友关注，与长辈一起共享成长的快乐"
  }
];

export default function Feature() {
  return (
    <div className={styles.container}>
      <Row wrap className={styles.content}>
        {dataSource.map((item, index) => {
          return (
            <Col xxs="12" s="6" l="6" key={index} className={styles.item}>
              <img src={item.pic} className={styles.pic} alt="" />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
