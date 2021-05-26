import React, { Component } from 'react';
import { Collapse, Form, Input, Select, Tooltip } from 'antd';
import styles from './index.less';

const { Panel } = Collapse;
const { Option } = Select;
export default class Index extends Component {


  copy = (e) => {
    alert("copy");
  }

  render() {

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const collapseheaderRightContext = () => {
      return (
        <div className={styles.collapseheaderRightContext}>
          <span>客户信息</span>
          <a onClick={this.copy}>一键复制</a>
        </div>
      )
    }
    return (
      <div className={styles.chatRight}>
        <div className={styles.rightHeader}>用户信息</div>
        <div className={styles.userInfo}>
          <Collapse defaultActiveKey={['1', '2', '3']} expandIconPosition="right">
            {/* 客户信息 */}
            <Panel header={collapseheaderRightContext()} key="1">
              <div style={{maxHeight:200,overflow:'auto'}}>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
              </div>
            </Panel>
            {/* 服务总结 */}
            <Panel header="服务总结" key="2">
              <div style={{maxHeight:150,overflow:'auto'}}>
                <Form
                  {...layout}
                  layout="vertical"
                >
                  <Form.Item
                    label="服务标签"
                    name="username"
                  >
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="备注"
                    name="password"
                  >
                    <Input />
                  </Form.Item>
                </Form>
              </div>
            </Panel>

            {/* 服务记录 */}
            <Panel header="服务记录" key="3">
              <div style={{maxHeight:160,overflow:'auto'}}>
                <Tooltip title={"提示的文字"}>
                  <p>asdasd</p>
                </Tooltip>
                <Tooltip title={"提示的文字"}>
                  <p>asdasd</p>
                </Tooltip>
                <Tooltip title={"提示的文字"}>
                  <p>asdasd</p>
                </Tooltip>
                <Tooltip title={"提示的文字"}>
                  <p>asdasd</p>
                </Tooltip>
                <Tooltip title={"提示的文字"}>
                  <p>asdasd</p>
                </Tooltip>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    )
  }
}
