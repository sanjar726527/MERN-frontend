import React, {useEffect} from 'react';
import {Routes,Route} from "react-router-dom";
import 'antd/dist/antd.css';
import '../src/assets/basic/basic.scss'
import Layout from "./Router/layout/Layout";
import PostForm from "./Router/postForm/PostForm";
import Dashboard from "./Router/dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css'
function App(props) {
    return (
       <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Dashboard/>}/>
           <Route  path='post' element={<PostForm/>}/>
        </Route>
       </Routes>
    );
}

export default App;