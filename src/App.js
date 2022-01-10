import React from 'react';
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom';
import Layout from './HOC/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import * as urlConst from './Helper/constant';
import Principal from './Pages/administration/Principal';
import ViceChancellor from './Pages/administration/ViceChancellor';
import Hostel from './Pages/administration/Hostel';
import ViewAdmin from './Pages/admin/ViewAdmin';
import AddAdmin from './Pages/admin/AddAdmin';
import HomeAdmin from './Pages/admin/HomeAdmin';
import SingleAdmin from './Pages/admin/SingleAdmin';
import UpdateAdmin from './Pages/admin/UpdateAdmin';
import AddDepartment from './Pages/department/AddDepartment';
import ShowDepartment from './Pages/department/ShowDepartment';
import AddFaculty from './Pages/faculty/AddFaculty';
import AdminLogin from './Pages/AdminLogin';
import FacultyLogin from './Pages/FacultyLogin';
import ViewFaculty from './Pages/faculty/ViewFaculty';
import UpdateFaculty from './Pages/faculty/UpdateFaculty';
import SingleFaculty from './Pages/faculty/SingleFaculty';

const App = () => {
  return (
    <>
      <Switch>
        {/* HOME ROUTE */}
        <Route exact path={urlConst.HOME} component={() => (
          <Layout>
            <Home />
          </Layout>
        )
        } />

        {/* ADMINISTRATION ROUTE*/}
        <Route exact path={urlConst.PRINCIPAL} component={() => (
          <Layout>
            <Principal />
          </Layout>
        )
        } />

        <Route exact path={urlConst.VICECHANCELLOR} component={() => (
          <Layout>
            <ViceChancellor />
          </Layout>
        )
        } />

        <Route exact path={urlConst.HOSTEL} component={() => (
          <Layout>
            <Hostel />
          </Layout>
        )
        } />

        {/* ADMIN LOGIN ROUTE */}

        <Route exact path={urlConst.ADMINLOGIN} component={() => (
            <Layout>
               <AdminLogin />
            </Layout>
          
        )} />

        {/* FACULTY LOGIN ROUTE */}

        <Route exact path={urlConst.FACULTYLOGIN} component={() => (
            <Layout>
               <FacultyLogin />
            </Layout>
          
        )} />

        {/* ADMIN ROUTE */}

        <Route exact path={urlConst.ADMIN} component={HomeAdmin} />
        <Route exact path={urlConst.ADDADMIN} component={AddAdmin} />
        <Route exact path={urlConst.VIEWADMIN} component={ViewAdmin} />
        <Route exact path='/admin/getSingleAdmin/:_id' component={SingleAdmin} />
        <Route exact path='/admin/update/:_id' component={UpdateAdmin} />
        <Route exact path={urlConst.ADD_DEPARTMENT} component={AddDepartment} />
        <Route exact path={urlConst.SHOW_DEPARTMENT} component={ShowDepartment} />
        <Route exact path={urlConst.ADD_FACULTY} component={AddFaculty}/>
        <Route exact path={urlConst.VIEWFACULTY} component={ViewFaculty} />
        <Route exact path='/faculty/getSingleFaculty/:_id' component={SingleFaculty} />
        <Route exact path='/faculty/update/:_id' component={UpdateFaculty}/>


      </Switch>
    </>
  )
}

export default App
