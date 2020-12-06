import React from 'react';
import './index.css'

export default function Menu() {
    return (
        <ul className='menu-content'>
            <li><a href="/studentlist">学生列表</a></li>
            <li><a href="/addstudent">添加学生</a></li>
            <li><a href="/courselist">课程列表</a></li>
            <li><a href="/addcourse">添加课程</a></li>
        </ul>
    )
}
