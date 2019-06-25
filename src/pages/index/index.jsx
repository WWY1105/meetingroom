import React,{Component} from 'react';
import Footer from '../../component/footer/Footer';
import { List,WhiteSpace ,WingBlank,TextareaItem,Flex,Button } from 'antd-mobile';
import ListDatePicker from '../../component/listDatePicker/listDatePicker'
import CustomPicker from '../../component/customPicker/customPicker'
import './index.less'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            path:'/',
            startTimeTitle:'开始时间',
            endTimeTitle:'结束时间',
            startTime:now,
            endTime:now,
            mainSpeakerTitle:'主讲人',
            ParticipantTitle:"参与者",
            meetingRoomTitle:'会议室',
            roomname:''
        }
        this.getCurrentPath=this.getCurrentPath.bind(this)
  
    }
    // 获取当前页面路径
    getCurrentPath(name){
         this.props.history.push(name)
    }
    // 选择会议室
    toChooseMettingRoom=()=>{
        this.props.history.push({
            pathname:'occupancyOfMeeting',
            state:{
                startTime:this.state.startTime,
                endTime:this.state.endTime
            }
        })
    }
    // 选择完会议室带回来的名字
    componentDidMount(){
        console.log(this.props.location)
        if(!!this.props.location.state){
            this.setState({
                roomname:this.props.location.state.roomname
            })
        }
        
    }
    formatTime=(val)=>{
        
        let formatTime=new Date(val).getFullYear() + '-' + (new Date(val).getMonth() + 1) + '-' + new Date(val).getDate() + ' ' + new Date(val).getHours() + ':' + new Date(val).getMinutes();
        
        return formatTime
    }
    // 时间 选择器change
    startTimeChange(val){
       
      let  startTime=new Date(this.formatTime(val))
      this.setState({
        startTime
      })
    }
    endTimeChange(val){
        let  endTime=new Date(this.formatTime(val))
        this.setState({endTime})
    }
    render(){
        return (
         <div className="indexBox">
            
            <List>
               <div>
               <WhiteSpace size="sm"/>
                {/* 顶部textarea */}
                <TextareaItem
                    title=""
                    placeholder="请输入会议主题/内容"
                    data-seed="logId"
                    rows={5}
                    ref={el => this.customFocusInst = el}
                />
               <WingBlank size='md'>
                    <p className="tips bgW textRight">100字以内</p>
               </WingBlank>
               </div>
               {/* 会议时间 */}
               <WhiteSpace size="lg"/>
                    <ListDatePicker arrow="horizontal"  date={this.state.startTime} onChange={this.startTimeChange.bind(this)} title={this.state.startTimeTitle}/>
                    <ListDatePicker arrow="horizontal"  date={this.state.endTime} onChange={this.endTimeChange.bind(this)} title={this.state.endTimeTitle}/>
               <WhiteSpace size="lg"/>
               {/* 主讲人/参与人 */}
               <CustomPicker title={this.state.mainSpeakerTitle}/>
               <CustomPicker title={this.state.ParticipantTitle}/>
                <WhiteSpace size="lg"/>
                {/* 会议室 */}
               <CustomPicker title={this.state.meetingRoomTitle} value={this.state.roomname} clickMethod={this.toChooseMettingRoom}/>
           </List>
           <WhiteSpace size="lg"/>
           <WhiteSpace size="lg"/>
            {/* 提交按钮 */}
            <WingBlank size='md'>  <Button className="longbtn">提交</Button> </WingBlank>
            {/* 底部tab */}
            <Footer getCurrentPath={this.getCurrentPath} path={this.state.path}/>
            </div>
        )
    }
}
export default Index;