import React from 'react';
import './index.css'

export default function Header() {
    return (
        <div className='header-content'>
             <div className="left">
               <h2>学生管理系统</h2>
             </div>
             <div className="right">
                <span>xxx,已登录</span>
                <button>退出登录</button>
             </div>
        </div>
    )
}
