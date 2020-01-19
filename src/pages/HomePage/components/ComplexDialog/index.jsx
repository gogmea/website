import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Dialog, Button, Icon } from '@alifd/next';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';
import href from '../../const';

export default function Index(props) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

 
  const showDialog = () => {
    setVisible(true);
  };
  const hideDialog = () => {
    setVisible(false);

  };
  const go = ()=>{
    window.location.href = href;
  }
 useEffect(() => {
    enquireScreenRegister();
    showDialog();
  }, []);

  const renderFooter = () => {
    return (
      <div className={styles.footer}>
        <Button onClick={go} type="primary">
          下载应用
        </Button>
      </div>
    );
  };

  const dialogStyle = {
    width: isMobile ? 'auto' : '640px',
    height: isMobile ? 'auto' : '340px',
  };

  return (
    <IceContainer>
      <Dialog
        className="complex-dialog"
        style={{ ...dialogStyle }}
        autoFocus={false}
        footer={renderFooter()}
        title="西柚宝贝"
        isFullScreen
        onClose={hideDialog}
        {...props}
        visible={visible}
      >
        <div className={styles.dialogContent}>
          <img
            className={styles.icon}
            src="//img.alicdn.com/tfs/TB1GOHLXyqAXuNjy1XdXXaYcVXa-52-52.png"
            srcSet="//img.alicdn.com/tfs/TB1h_K_b4rI8KJjy0FpXXb5hVXa-104-104.png"
            alt=""
          />
          <div className={styles.info}>
            欢迎您访问西柚宝贝官网
          </div>
          <div className={styles.extraInfo}>
            官网建设中，部分功能不可用，敬请期待。
          </div>
          {/* <div className={styles.authList}>
            <div className={styles.authItem}>
              <Icon className={styles.authItemIcon} size="xs" type="select" />
              V 标头像
            </div>
            <div className={styles.authItem}>
              <Icon className={styles.authItemIcon} size="xs" type="select" />
              角色标志
            </div>
            <div className={styles.authItem}>
              <Icon className={styles.authItemIcon} size="xs" type="select" />
              优先发表
            </div>
          </div> */}
        </div>
      </Dialog>
    </IceContainer>
  );
}
