import React,{Component} from 'react'
import Footer from '../../component/footer/Footer'
import EachMeetingRoom from '../../component/eachMeetingRoom/eachMeetingRoom'

class MeetingRooms extends Component{
    constructor(props){
        super(props)
        this.state={
            path:'/meetingRooms'
        }
        this.getCurrentPath=this.getCurrentPath.bind(this)
        // this.bookMeetingRoom=this.bookMeetingRoom.bind(this)
    }
    // 底部跳转
    getCurrentPath(name){
         this.props.history.push(name)
    }
    // 去预定
    bookMeetingRoom(e){
        e.stopPropagation()
        console.log(this)
        this.props.history.push('/meetingRoomDetail')
    }
    // 查看占用情况
    toSeeOccupancy(){
       
    }
    render(){
        return (
            <div style={{paddingBottom:'70px'}}>
                <EachMeetingRoom roomName="11楼5室" bookMeetingRoom={this.bookMeetingRoom.bind(this)} toSeeOccupancy={this.toSeeOccupancy.bind(this)}/>
                <EachMeetingRoom roomName="11楼5室" bookMeetingRoom={this.bookMeetingRoom.bind(this)} toSeeOccupancy={this.toSeeOccupancy.bind(this)}/>
                <EachMeetingRoom roomName="11楼5室" bookMeetingRoom={this.bookMeetingRoom.bind(this)} toSeeOccupancy={this.toSeeOccupancy.bind(this)}/>
                <Footer getCurrentPath={this.getCurrentPath} path={this.state.path}  />
            </div>
        )
    }
}
export default MeetingRooms;