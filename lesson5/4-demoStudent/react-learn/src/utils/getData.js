
async function getSearchStudent ({sex = 1,search = '',current = 1,limit = 5}={}) {
    // 
    if(search) {
        // var value="中文";
        // value= encodeURI("中文");//将中文进行编码
        // alert(value);
        // value= decodeURI(value);//将已编码的字符串进行解码
        // alert(value)
        let res = await fetch(`/api/student/searchStudent?appkey=demo13_1545210570249&sex=${sex}&search=${search}&page=${current}&size=${limit}`)
                .then(res=>res.json()).then(res=>res.data);
            res.datas = res.searchList;
            delete res.searchList;
        return res;
    }else{
        let res = await getStudentByPage(current,limit);
        res.datas = res.findByPage;
        delete res.findByPage;
        return res;
    }
}

async function getStudentByPage(current = 1,limit = 5){
    return await fetch(`/api/student/findByPage?appkey=demo13_1545210570249&page=${current}&size=${limit}`)
    .then((res)=>res.json())
    .then((res)=>res.data);
}
export {
    getSearchStudent,
}