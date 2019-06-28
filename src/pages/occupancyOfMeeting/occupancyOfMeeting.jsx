import React,{Component} from 'react'
import './occupacyOfMeeting.less'
import EachMeetingRoom from '../../component/eachMeetingRoom/eachMeetingRoom'
import ListDatePicker from '../../component/listDatePicker/listDatePicker'
import {WhiteSpace,Flex} from 'antd-mobile'
class OccupancyOfMeeting extends Component{
    constructor(props){
        super(props)
            this.state = {
                roomList:[{
                    roomId:1,
                    roomName:'11楼5室'
                }]
              }
    }
  
    //   点击预定
    clickBooking(roomIndex){
        let roomObj=this.state.roomList[roomIndex]
        this.props.history.push({
            pathname:"/",
            state:{
                roomname:roomObj.roomName,
                roomId:roomObj.roomId
            }
        })
    }
   
    render(){
        return (
            <div className="occupancyOfMeeting bgW">
             {/* 顶部日期选择 */}
                <div className="datePickerBox" >
                    <Flex>
                        <Flex justify="center">
                            <i className="iconfont icon-riqi"></i>
                            <Flex.Item>
                                <ListDatePicker arrow="empty" date={this.props.location.state.startTime} title={this.state.startTimeTitle}/>
                            </Flex.Item>
                        </Flex>
                        <Flex justify="center">
                            <i className="iconfont icon-riqi"></i>
                            <Flex.Item>
                                <ListDatePicker  arrow="empty"  date={this.props.location.state.endTime} title={this.state.endTimeTitle}/>  
                            </Flex.Item>
                        </Flex>
                    </Flex>
                </div>
               
                <WhiteSpace size="lg"/>
                {/* 循环每一个会议室 */}
                {
                    this.state.roomList.map((item,index)=>{
                        return  <EachMeetingRoom key={index} from="occupancyOfMeeting" roomName={item.roomName} roomIndex={index}  clickBooking={this.clickBooking.bind(this)}/>
                    })
                }
                
            </div>
        )
    }
}
export default OccupancyOfMeeting;