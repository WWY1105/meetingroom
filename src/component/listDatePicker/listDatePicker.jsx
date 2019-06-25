import React, { Component } from 'react'
import { DatePicker, List,WhiteSpace } from 'antd-mobile';
import './listDatePicker.less'


class ListDatePicker extends React.Component{
    constructor(props){
        super(props)
    }
 
    // 传入的参数
 
    componentDidMount(){
        // alert(this.props.title)
    }
  
    render(){
       
        return (
            <div>
                <List className="date-picker-list " style={{ backgroundColor: 'white' }}>
                    <DatePicker
                        mode="datetime"
                        value={this.props.date}
                        onChange={(date) => this.props.onChange(date)}
                        title={this.props.title}
                    >
                    <List.Item arrow={this.props.arrow}>{this.props.title}</List.Item> 
                    </DatePicker>

                </List>
            </div>
        )
    }
}
export default  ListDatePicker;