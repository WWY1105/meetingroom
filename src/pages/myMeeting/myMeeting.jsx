import React,{Component} from 'react'
import TopTab from '../../component/topTab/topTab'
import EachMeeting from '../../component/eachMeeting/eachMeeting';
import {WhiteSpace} from 'antd-mobile'

export default class MyMeeting extends Component{
    constructor(props){
        super(props);
        this.state={
            tabIndex:0,
            tabs:[
                {title:"未开始"},{title:"已开始"},{title:"已结束"},
            ]
        }
    }
    // 顶部tab点击，刷新数据
    topTabClick=(tab, index)=>{
        console.log('onTabClick', index, tab)
        this.setState({
            tabIndex:index
        })
    }
    render(){
        return (
            <div className="bgW">
               <TopTab  tabs={this.state.tabs} topTabClick={this.topTabClick} tabContent={
                  <div>
                       <EachMeeting  meetingStatus={this.state.tabIndex} isMine="true"/>
                       <WhiteSpace size="lg"/>
                       <EachMeeting  meetingStatus={this.state.tabIndex} isMine="false"/>
                  </div>
               }/>
            </div>
        )
    }

}