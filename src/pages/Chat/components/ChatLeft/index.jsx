import React, { Component } from 'react';
import { getServiceSatusAttr } from '../../../../utils/tools';
import { serviceSatus } from '../../../../utils/enum';
import { Avatar, Collapse, message, Popconfirm } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Panel } = Collapse;
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showServiceSatusView: false,
      serviceSatusType: 3,
    }
  }
  // 初始化
  componentDidMount() {
  }



  // 对话列表中 的时钟 点击事件
  handleClick = () => {
    message.success("小时钟");
  }
  // 显示客户在线状态的模态窗
  show = () => {
    this.setState({
      showServiceSatusView: !this.state.showServiceSatusView,
    })
  }
  // 关闭选着客户在线状态的模态窗
  close = e => {
    this.setState({
      showServiceSatusView: false,
      serviceSatusType: parseInt(e.target.dataset.status),
    })
  }
  render() {
    const { serviceSatusType, showServiceSatusView } = this.state;
    return (
      <div className={styles.chatLeft}>
        <header className={styles.leftHeader}>
          <div className={styles.avatarView}>
            <div 
              className={styles.avatar}
              onClick={this.show}
              id="satus"
            >
              <Avatar size={50} icon={<UserOutlined />} />
              <i className={getServiceSatusAttr(serviceSatusType,'iconFont')}
                style={{color: getServiceSatusAttr(serviceSatusType,'color')}}
              ></i>
            </div>
            {/* 获取客服在现状 */}
            <span style={{ marginLeft: 10 }}>{getServiceSatusAttr(serviceSatusType,'title')}</span>
          </div>
          {/* 客服可以选着的所有状态 */}
          <ul 
            style={showServiceSatusView ? {display:'block'}: {display:"none"}}
            className={styles.status}
            >
            {serviceSatus.map(item => (
              <li key={item.title}>
                <span 
                  className={styles.statusSpan}
                  style={{backgroundColor: item.color}}
                ></span>
                <span
                  data-status={item.type}
                  onClick={this.close}
                >{item.title}</span>
              </li>
            ))}
          </ul>
        </header>
        <main>
        <Collapse
          destroyInactivePanel={true}
          defaultActiveKey={["1"]}
         >
          <Panel header={`会话中 (2/4)`} key="1">
            <div className={styles.dialogueWrap}>
              <div className={styles.leftView}>
                <div>
                  <p>王一博</p>
                  <p>26秒</p>
                </div>
                <div>
                  <span>用户:{`asdasda${new Date().getTime()}`}</span>
                </div>
              </div>
              {/* 点击出现模态框 */}
              <Popconfirm
                title="锁定时间"
                okText="确认"
                cancelText="取消"
                onConfirm={this.handleClick}
              >
                <div className={styles.rightView}>
                  <i className="iconfont icon-paidui" style={{fontSize: 25}}></i>
                </div>
              </Popconfirm>
            </div>

            <div className={styles.dialogueWrap}>
              <div className={styles.leftView}>
                <div>
                  <p>王一博</p>
                  <p>26秒</p>
                </div>
                <div>
                  <span>用户:{`asdasda${new Date().getTime()}`}</span>
                </div>
              </div>
              <Popconfirm>
                <div className={styles.rightView}>
                  <i className="iconfont icon-paidui" style={{fontSize: 25}}></i>
                </div>
              </Popconfirm>
            </div>


  

          </Panel>
        </Collapse>
        </main>
      </div>
    )
  }
}
