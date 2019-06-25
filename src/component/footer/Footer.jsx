import React,{Component} from 'react'
import { TabBar} from 'antd-mobile';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          // selectedTab: 'redTab',
          hidden: false,
          fullScreen: true,
          iocnsList:[
            {
              name:'预约会议室',
              icon:'iconfont icon-alarm',
              active:true,
              path:'/'
            },
            {
              name:'所有会议室',
              icon:'iconfont icon-huiyishi',
              active:false,
              path:'/meetingRooms'
            },
            // {
            //   name:'发起会议',
            //   icon:'iconfont icon-tianjia',
            //   active:false,
            //   path:'/proposeAMeeting'
            // },
            {
              name:'我的',
              icon:'iconfont icon-wode',
              active:false,
              path:'/mine'
            }
          ]
        };
      }
    render(){
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#2eb9aa"
              barTintColor="white"
              hidden={this.state.hidden}
            >
             {
               this.state.iocnsList.map((item,index)=>(
                
             <TabBar.Item
                title={item.name}
                key={item.name}
                icon={<div className={item.icon} />
                }
                selectedIcon={<div className={item.icon} style={{color:'#2eb9aa'}}/>}
                selected={this.props.path==item.path}
                onPress={() => {
                  this.props.getCurrentPath(item.path)
                }}
                data-seed="logId"
              >
              </TabBar.Item>
                
                ))
             } 
            </TabBar>
          </div>
        )
}
}

export default Footer;