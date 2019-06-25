import React,{Component} from 'react'
import { List, Switch, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const extra = {
  '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

// Object.keys(extra).forEach((key) => {
//   const info = extra[key];
//   const date = new Date(key);
//   if (!Number.isNaN(+date) && !extra[+date]) {
//     extra[+date] = info;
//   }
// });

class DatePicker extends React.Component {
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

  constructor(props) {
    super(props);
    this.state = {
      en: false,
      config: {},
    };
  }

  renderBtn(zh, en, config = {}) {
    config.locale = this.state.en ? enUS : zhCN;

    return (
      <div style={{textAlign:'center'}}
        onClick={() => {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
          this.setState({
            show: true,
            config,
          });
        }}
      >
        {this.state.en ? en : zh}
        <i className="iconfont icon-riqi"></i>
      </div>
    );
  }

  changeLanguage = () => {
    this.setState({
      en: !this.state.en,
    });
  }

  onSelectHasDisableDate = (dates) => {
    console.warn('onSelectHasDisableDate', dates);
  }



  onCancel = () => {
    alert(1)
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined,
    });
  }

//   getDateExtra = date => extra[+date];

  render() {
    return (
      <div>
        {this.renderBtn(new Date().getFullYear()+"-"+(Number(new Date().getMonth())+1)+"-"+new Date().getDate(), 'Select Date', { type: 'one' })}
        <Calendar
          {...this.state.config}
          visible={this.props.show}
          onCancel={this.onCancel}
          onConfirm={this.props.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          defaultDate={now}
          minDate={new Date(+now - 5184000000)}
          maxDate={new Date(+now + 31536000000)}
        />
      </div>
    );
  }
}



export default DatePicker;
