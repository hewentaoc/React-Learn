import React, { Component } from 'react'
import Page from './Page';
import StudentList from '../Student/StudentList';
import Model from '../Tools/Model';

export default class PageController extends Component {
    state = {
        current: 1,
        count: 20,
        limit: 3, 
        panelNumber:5,
        students:[],
        show:false,
    }
  
 
    componentDidMount() {
        this.fetchStudent();
    }
    async fetchStudent(){
        // this.setState({
        //     show:true,
        // })
        let res = await fetch(`http://open.duyiedu.com//api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
                    .then((res)=>res.json())
                    .then((res)=>res)
    
        this.setState({
            count:res.data.cont,
            students:res.data.findByPage,
            show:false,
        })
    }
    handJump = (newPage)=>{
       this.setState({//证明了setState是异步函数，需要在回调函数中调用新的函数
            current:newPage,
       },()=>{
          this.fetchStudent();
       })
    }
    render() {
        return (
            <div>
                <div className='mes'>
                    <StudentList students={this.state.students}></StudentList>
                </div>
                <div>
                    <Page {...this.state} jumpFunc={this.handJump}></Page>
                </div>
                <Model show={this.state.show}></Model>
            </div>
        )
    }
}
