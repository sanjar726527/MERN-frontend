import React, {useEffect, useState} from 'react';
import Main from "../create/Main";
import axios from "axios";
import {useLocation} from "react-router-dom";

const EditPostCard = () => {
    const [data, setData] = useState()
    const id = useLocation()

    const fetchData = () => {
        axios.get(`/api/workouts/${id.state.data}`).then((res) => {
            setData(res.data);
        });
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Main data={data}/>
        </div>
    );
};

export default EditPostCard;