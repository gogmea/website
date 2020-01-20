import React from "react";
import { Grid } from "@alifd/next";
import styles from "./index.module.scss";

const { Row, Col } = Grid;

const dataSource = [
  {
    title: "记录",
    pic: require("./images/img1.png"),
    desc: "创建宝宝的专属成长空间，记录宝宝成长。"
  },
  {
    title: "共享",
    pic: require("./images/img3.png"),
    desc: "添加家人，共享成长。即便远隔千里，也不错过宝宝成长瞬间。"
  },
  {
    title: "回顾",
    pic: require("./images/img4.png"),
    desc:
      "从宝宝出生到第一次喊爸爸妈妈，在西柚宝贝，回顾宝宝成长路上的每个第一次。"
  },
  {
    title: "免费",
    pic: require("./images/img2.png"),
    desc: "西柚宝贝提供免费存储服务，存储空间不限。"
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
