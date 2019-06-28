import React,{Component} from 'react'
import {Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './topTab.less'

export default class TopTab extends Component{
    constructor(props){
        super(props)
        this.state={
            tabs:this.props.tabs
        }
    }
    render(){
        return (
            <div className="topTab bgW">
                <Tabs tabs={this.state.tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index)=>{this.props.topTabClick(tab, index)}}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    {
                        this.props.tabContent
                    }
                </div>
                </Tabs>
            </div>
        )
    }

}