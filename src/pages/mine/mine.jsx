import React,{Component} from 'react'
import { List,Badge  } from 'antd-mobile';
import Footer from '../../component/footer/Footer'
import './mine.less'
const Item = List.Item;
const Brief = Item.Brief;

class Mine extends Component{
    constructor(props){
        super(props)
        this.state={
            path:'/mine',
            navLists:[
                {
                    title:'我的消息',
                    path:'/myMsg',
                    num:1
                },
                {
                    title:'我的会议室',
                    path:'/myMeetingRoom',
                    num:2
                },
                {
                    title:'我的会议',
                    path:'/myMeeting',
                    num:3
                }
            ]
        }
        this.getCurrentPath=this.getCurrentPath.bind(this)
    }
    // 底部跳转
    getCurrentPath(name){
         this.props.history.push(name)
    }
    // 点击中间的nav跳转
    navigationTo=(url)=>{
        // alert(1)
        this.props.history.push({
            pathname:url
        })
    }
    render(){
        // console.log(this)

        return (
            <div className="bgW">
                <div className="myBox ">
                {/* <div className="top flexCenter"> */}
                    <p className="name">张三</p>
                    <p className="iconfont icon-touxiang myImage"></p>
                    {/* <img src="../../assets/images/myImage.jpg" alt=""/> */}
                {/* </div> */}
                
                    <div className="lists">
                    <div className="eachList">
                    <List renderHeader={() => ''} className="my-list">
                    {
                        this.state.navLists.map((item,index)=>(
                             <Item extra={<Badge text={item.num} overflowCount={3} />} arrow="horizontal" key={index} onClick={() => {this.navigationTo(item.path)}}>{item.title}</Item>
                        ))
                    }
                    </List>
                    </div>
                   </div>
                </div>

                <Footer getCurrentPath={this.getCurrentPath} path={this.state.path}/>
            </div>
        )
    }
}
export default Mine;