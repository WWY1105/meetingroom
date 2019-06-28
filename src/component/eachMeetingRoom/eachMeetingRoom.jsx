import React,{Component} from 'react'
import {Button} from 'antd-mobile'
import './eachMeetingRoom.less'
 class EachMeetingRoom extends Component {
    constructor(props){
        super(props)
       
    }
 
    render() {
       let btns;
       // 如果从预约会议室进来直接预定；如果从所有会议室进来就是查看占用    
       if(this.props.from=="meetingRoom"){
            btns=<Button type="primary" style={{marginRight:'10px'}} className="mainbtn" onClick={this.props.bookMeetingRoom}>查看占用</Button>  
       }else{
            btns=<Button type="primary" className="mainbtn"  onClick={()=>{this.props.clickBooking(this.props.roomIndex)}}>预定</Button>
       }
        return (
            <div className="eachPart" onClick={this.props.toSeeOccupancy}>
                <div className="titleBox">
                    <span className="titleText">会议室：{this.props.roomName}</span>
                </div>
                <div className="contentBox">
                    <p>设施：一个投影仪、一张桌子、一台电脑、十把椅子</p>
                    <p>容纳：10-20人</p>
                    <p>地址：11楼东侧</p>
                </div>
                <div className="btnBox flexEnd">
                 {btns}
                </div>
            </div>
        )
    }
}

export default EachMeetingRoom; 