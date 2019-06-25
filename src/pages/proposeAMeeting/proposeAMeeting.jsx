import React,{Component} from 'react'
import Footer from '../../component/footer/Footer'
class ProposeAMeeting extends Component{
    constructor(props){
        super(props)
        this.state={
            path:'/proposeAMeeting'
        }
        this.getCurrentPath=this.getCurrentPath.bind(this)
    }
    getCurrentPath(name){
         this.props.history.push(name)
    }
    render(){
        console.log(this)
        return (
            <div>
                <Footer getCurrentPath={this.getCurrentPath} path={this.state.path}/>
            </div>
        )
    }
}
export default ProposeAMeeting;