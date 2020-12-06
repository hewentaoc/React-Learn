import React, { Component } from 'react';
import Layout from '../Component/Layout';
import Header from '../Component/Header';
import Menu from '../Component/Menu';
import {Route,Switch} from 'react-router-dom';
import Welcome from './Welcome';
import StudentList from './student/StudentList';
import AddStudent from './student/AddStudent';
import StudentDetail from './student/StudentDetail';
import CourseList from './course/CourseList';
import AddCourse from './course/AddCourse';
export default class Home extends Component {
    render() {
        return (
               <Layout
                  header={<Header/>}
                  menu={<Menu />}
               >
                 <Switch>
                    <Route path='/' exact component={Welcome}></Route>
                    <Route path='/studentlist' exact  component={StudentList}></Route>
                    <Route path='/studentlist/:id' exact  component={StudentDetail}></Route>
                    <Route path='/addstudent' exact   component={AddStudent}></Route>
                    <Route path='/courselist' exact component={CourseList}></Route>
                    <Route path='/addcourse' exact component={AddCourse}></Route>
                 </Switch>
               </Layout>
        )
    }
}
