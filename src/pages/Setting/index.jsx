import React, { Component } from 'react';
import { Tabs, Space } from 'antd';
import ServiceSetting from './components/ServiceSetting';
import ServiceList from './components/ServiceList';

const { TabPane } = Tabs;
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'left',
      activeKey: "0",
      title:['服务类型设置', '客户列表设置']
    };
  }

  changeTabPosition = activeKey => {
    this.setState({ activeKey: activeKey })
    // this.setState({ tabPosition: e.target.value });
  };
  render() {
    const { tabPosition, activeKey, title } = this.state;
    return (
      <>
        <div>
          <Space>
            <div style={{width:130,marginLeft:20}}>设置</div>
            <div>{title[parseInt(activeKey)]}</div>
          </Space>
          <Tabs 
            tabPosition={tabPosition}
            onChange={this.changeTabPosition}
            tabBarStyle={{width: 120}}
            activeKey={activeKey}
            type="card"
            tabBarStyle={{width:120,height:700,backgroundColor:"#fff", borderRight: "1px solid #eee"}}
          >
            <TabPane 
              tab="Tab 1" 
              key="0"
            >
              <ServiceSetting />
            </TabPane>
            <TabPane tab="Tab 2" key="1">
              <ServiceList />
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  }
}
