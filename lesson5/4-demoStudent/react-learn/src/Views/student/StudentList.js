import React,{useState,useEffect} from 'react';
import SearchBar from '../../Component/SearchBar';
import StudentTable from '../../Component/StudentTable';
import Page from '../../utils/Page/Page';
import {getSearchStudent} from '../../utils/getData';
import qs from 'query-string';


/**
 * 查看路由地址的变化
 * 根据路由地址的变化改变数据
 * @param {*} param0 
 */
function queryParams ({location}) {
    let df = {
        current : 1,
        limit : 5,
        search:"",
        sex:1,
    }
    let query = qs.parse(location.search);
        query = Object.assign({},df,query);
        query.sex = +query.sex;
        query.current = +query.current;
        query.limit = +query.limit;
    return query;
}


function useSearchStu ({sex,search,limit,current}) {
    const [res, setRes] = useState({
        datas:[],
        cont:0,
    });
    console.log(current);
    useEffect(()=>{
        getSearchStudent({
            sex: sex,
            search:search,
            current :current,
            limit : limit
        }).then(res=>{
            setRes(res);
        })
    },[sex ,search ,limit ,current])
    return res;
}


function changeLocation (query, history) {
    let params =  qs.stringify(query)
    history.push('?'+ params); 
}


export default function StudentList(props) {
    let query = queryParams(props);
    let res = useSearchStu(query);
    return (
        <div>
            <SearchBar defaultDatas={{
                sex: +query.sex,
                search: query.search || '',
            }}
            searchData={(data)=>{
                let newQuery = {
                    ...query,
                    ...data,
                    current:1,
                }
                changeLocation(newQuery,props.history);
            }}
            />
            <StudentTable datas={res.datas} history={props.history}/>
            <Page 
                current={query.current}
                count={res.cont}
                limit={query.limit}
                panelNumber={5}
                jumpFunc={(newpage)=>{
                    let newQuery = {
                        ...query,
                        current:newpage,
                    }
                    changeLocation(newQuery,props.history);
                }}
            />
        </div>
    )
}
// * 1. current  当前页数
// * 2. count    数据总数
// * 3. limit    每页限制的数据数
// * 4. panelNumber 最多显示几条数据 
// * 5. jumpFunc