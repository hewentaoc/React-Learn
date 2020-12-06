import React, { Component } from 'react'
import propTypes from 'prop-types';
import './index.css';

export default class StudentTable extends Component {
    static defaultProps = {
        datas:[]
    }
    static propTypes = {
        datas: propTypes.array
    }
    render() {
        let ts = this.props.datas.map(rs=>{
            return (
                <tr key={rs.id}>
                    <td>{rs.sNo}</td>
                    <td>{rs.name}</td>
                    <td>{rs.birth}</td>
                    <td>{rs.sex === 1 ? '女' : '男'}</td>
                    <td>{rs.email}</td>
                    <td><button onClick={()=>{
                        console.log(this.props.history)
                        this.props.history.push('/studentlist/'+rs.sNo)
                    }}
                    style={{
                        border:'none',
                        backgroundColor:'#fff',
                        color:'blue',
                        cursor:'pointer'
                    }}
                    
                    >详情页</button></td>
                </tr>
            )
        })
        return (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>学号</th>
                            <th>姓名</th>
                            <th>出生日期</th>
                            <th>性别</th>
                            <th>邮箱</th>
                            <th>详情页</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ts}
                    </tbody>
                </table>
        )
    }
}
