import React from "react";
import PostForm from "./postCard/index";
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreatePostCard from "./postCard/create";
import EditPostCard from "./postCard/edit";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={ <PostForm/>}/>
               <Route path="/create" element={ <CreatePostCard/>}/>
               <Route path="/edit" element={ <EditPostCard/>}/>
           </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
