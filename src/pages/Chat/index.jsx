import React from 'react';
import styles from './index.less';
import ChatLeft from './components/ChatLeft';
import ChatContext from './components/ChatContext';
import ChatRight from './components/ChatRight';
export default () => {
  return (
    <div className={styles.chat}>
      <ChatLeft className={styles.chatLeft} />
      <ChatContext className={styles.chatContext} />
      <ChatRight className={styles.chatRight} />
    </div>
  )
}
