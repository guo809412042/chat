import React, { Component } from 'react';
import { Popconfirm, message } from 'antd';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import styles from './index.less';



export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState(null),

    };
  }
  // 发送消息
  sendMsg = (e) => {
    const { editorState } = this.state
    // 如果输入内容为空
    if(!editorState.toText()) {
      message.info("不能发送空内容")
      return 'handled'
    }
    // 按回车键 + shiftKey 发送信息
    if(e.keyCode === 13 && e.shiftKey === true) {
      console.log(editorState.toHTML())

      // 阻止换行事件
      return 'handled'
    }
    // // 换行  
    // if(e.keyCode === 13 && e.ctrlKey === true) {
    //   console.log(e)
    // }


  }
  // 结束服务事件
  serviceClose = () => {
    message.error("结束服务");
  }
  // 编辑输入框内容  更改状态值
  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }
  render() {
    const { editorState } = this.state;
    // 富文本可编辑选项
    const controls = [
      'emoji', 'bold', 'italic', 'underline',
      'text-color', 'list-ul', 'list-ol', 'link', 'media',
  ]
    return (
      <div className={styles.chatContent}>
        <div className={styles.chatHeaderView}>
          <Popconfirm
            title="确认结束服务?"
            okText="确认"
            cancelText="取消"
            // 确认事件
            onConfirm={this.serviceClose}
          >
            <a>结束服务</a>
          </Popconfirm>
        </div>
        <ul className={styles.chatContentView}>
          <li>asdas</li>
        </ul>
      
        <div>
          <BraftEditor 
            set="apple"
            value={editorState}
            controls={controls}
            contentStyle={{height:150}}
            onChange={this.handleEditorChange}
            handleReturn={this.sendMsg}

            />
        </div>
        <div 
          className={styles.sendView}
        >
          <span>按Enter换行 按ShiftKey + Enter发送</span>
        </div>
      </div>

    )
  }
}
