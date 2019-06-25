import React, { Component } from 'react'
import { DatePicker, List, WhiteSpace ,Flex, InputItem,Button} from 'antd-mobile';
import './customPicker.less';
import PropTypes from 'prop-types';



class CustomPicker extends React.Component {
    constructor(props) {
        super(props) 
    }
    state = {
        
    }
    static propTypes={
        title:PropTypes.string.isRequired
    }
    
    render() {
        return (
            <div>
                <List className="date-picker-list textRight" style={{ backgroundColor: 'white' }}>
                    <InputItem
                        clear
                        ref={el => this.autoFocusInst = el}
                        value={this.props.value}
                        extra={<i className="iconfont icon-add"></i>}
                        onExtraClick={this.props.clickMethod}
                    >{this.props.title}</InputItem>
                    
                </List>
            </div>
        )
    }
}

export default CustomPicker;