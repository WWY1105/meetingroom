import React,{Component} from 'react'
import {Button} from 'antd-mobile'
import './eachMeeting.less'
 class EachMeeting extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.meetingStatus=='true')
    }
    render() {
       
        return (
            <div className="eachPart" onClick={this.props.toSeeOccupancy}>
                <div className="contentBox flexStart">
                    <p className="line"></p>
                    <div className="content">
                        <p className="flexStart"><span style={{flexBasis:'20%'}}>会议主题：</span><span>主题主题主题主题主题主题主题主题主题主题</span></p>
                        <p className="flexStart"><span style={{flexBasis:'20%'}}> 会议时间：</span><span>2019-06-25 16:43-2019-06-25 16:43</span></p>
                        <p className="flexStart"><span style={{flexBasis:'20%'}}> 负责人：</span><span>11楼东侧</span></p>
                        <p className="flexStart"><span style={{flexBasis:'20%'}}> 参会人数：</span><span>6人</span></p>
                    </div>
                </div>
                <div className="btnBox flexEnd">
                 {/* <Button type="primary" className="mainbtn" onClick={this.props.bookMeetingRoom}>已开始</Button> */}
                 <Button 
                    type="primary" 
                    className={this.props.meetingStatus=='true'?'mainbtn':'notActivebtn'} 
                    onClick={this.props.bookMeetingRoom}>
                    {this.props.meetingStatus=='true'?'已开始':'已结束'}
                    </Button>
                </div>
            </div>
        )
    }
}

export default EachMeeting; 