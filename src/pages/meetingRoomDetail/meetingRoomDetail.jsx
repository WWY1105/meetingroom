import React,{Component} from 'react'
import ListDatePicker from '../../component/listDatePicker/listDatePicker'
import EachMeeting from '../../component/eachMeeting/eachMeeting'
import {WhiteSpace,Flex,Button} from 'antd-mobile'
import './meetingRoomDetail.less'
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
class MeetingRoomDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            path:'/meetingRoomDetail',
            date:now
        }
        
    }
    getCurrentPath(name){
        
    }
    render(){
        console.log(this)
        return (
            <div className="meetingRoomDetail">
                 {/* 顶部日期选择 */}
                 <div className="datePickerBox">
                    <Flex justify="between">
                        <Flex justify="center">
                            <i className="iconfont icon-riqi"></i>
                            <Flex.Item>
                                <ListDatePicker arrow="empty" date={this.state.date} title={this.state.startTimeTitle}/>
                            </Flex.Item>
                        </Flex>
                        <Flex justify="center">
                            <Button type="primary" size="small" style={{background:'#2dbaac',borderColor:'#2dbaac'}} inline><i className="iconfont icon-add activeColor"></i></Button>
                        </Flex>
                    </Flex>
                </div>
                <WhiteSpace size="sm"/>
                {/* 循环每一个会议 */}
                <EachMeeting meetingStatus='true'/>
                <WhiteSpace size="sm"/>
                <EachMeeting meetingStatus='false'/>
            </div>
        )
    }
}
export default MeetingRoomDetail;