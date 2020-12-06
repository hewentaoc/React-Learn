import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        const def = {
            sex:-1,
            search:"",
        }
        this.state = Object.assign({},def,this.props.defaultDatas)
    }
    handChangeSex = e=>{
        this.setState({
            sex:+e.target.value
        })
    }
    render() {
        return (
            <div>
                关键字:
                <input type="text" value={this.state.search} onChange={(e)=>{
                    this.setState({
                        search:e.target.value,
                    })
                }}/>
                性别:
                <label ><input type="radio" checked={this.state.sex === -1} value='-1' name="sex" onChange={this.handChangeSex} />不限</label>
                <label ><input type="radio" checked={this.state.sex === 0} value='0' name="sex"   onChange={this.handChangeSex}/>男</label>
                <label ><input type="radio" checked={this.state.sex === 1} value='1' name="sex"   onChange={this.handChangeSex}/>女</label>
                <button onClick={()=>{
                    this.props.searchData && this.props.searchData(this.state);
                }}>搜索</button>
            </div>
        )
    }
}
