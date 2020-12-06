import React from 'react';
import './Page.css';
/**
 * @param {*} props 
 * 
 * 1. current  当前页数
 * 2. count    数据总数
 * 3. limit    每页限制的数据数
 * 4. panelNumber 最多显示几条数据 
 * 5. jumpFunc
 */
export default function Page(props) {
    let pageAll = pageNumber(props.count,props.limit);
    let minPage = getMinPage(props);
    let maxPage = getMaxPage(props, minPage ,pageAll);
    let arr = [];
    for (let i = minPage ; i <= maxPage ; i++) {
      arr.push(<span 
                    className={props.current === i ? 'number active' : 'number'}
                    onClick={()=>{jumpPage(i,props)}}key={i}
                > {i} 
               </span>)
    }
    return (
        <>
           <span className={props.current === 1 ? 'item disabled' : 'item' }
                 onClick={()=>{jumpPage(1,props)}}
           >首页
           </span> 
           <span className={props.current === 1 ? 'item disabled' : 'item'}
                 onClick={()=>{jumpPage(props.current - 1 < 1 ? 1 : props.current - 1 ,props)}}
           >上一页
           </span>
           {/* 此时的页数 */}
           {arr}
           <span className={props.current === pageAll ? 'item disabled' : 'item' }
                 onClick={()=>{jumpPage(props.current + 1 > pageAll ? pageAll : props.current + 1 ,props)}}
           >下一页
           </span>
           <span className={props.current === pageAll ? 'item disabled' : 'item' }
                 onClick={()=>{jumpPage(pageAll,props)}}
           >尾页</span>
           <span className='fitem'>{props.current}</span>
           /
           <span className='fitem'>{pageAll}</span>
        </>
    )
}

/**
 * 
 * @param {*} count 数据总数
 * @param {*} limit 每页显示的数据
 */
function pageNumber(count,limit) {
    return Math.ceil(count / limit);
}

/**
 * 
 * @param {*} props   函数属性
 * @param {*} pageAll 总页数
 */
function getMinPage (props) {
    let minPage = props.current - Math.floor(props.panelNumber / 2);
    if(minPage < 1) {
        minPage = 1;
    }
    return minPage;
} 
/**
 * 
 * @param {*} props   函数属性
 * @param {*} minPage 最小数
 * @param {*} pageAll 总数
 */
function getMaxPage (props, minPage ,pageAll) {
    let maxPage = minPage + props.panelNumber - 1;
    if(maxPage > pageAll) {
        maxPage = pageAll;
    }
    return maxPage;
}

/**
 * 
 * @param {*} target 跳到哪页
 * @param {*} props  函数属性
 */
function jumpPage(target, props) {
    if(target === props.current) {
        return ;
    }
    props.jumpFunc && props.jumpFunc(target);
}