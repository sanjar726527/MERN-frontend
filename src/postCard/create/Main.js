import React, {useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber} from "antd";
import axios from "axios";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";

const Main = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState()
    const onFinish = (values) => {
        axios.post("/api/workouts", values).then((res) => {
            toast.success("Successful")
            navigate("/")
        });
    }

    const onFinishFailed = (red) => console.log(red)

    const fetchData = (id) => {
        axios.get(`/api/workouts/${id}`).then((res) => {
            const data = res.data
            setData(res.data)
            form.setFieldValue({
                title: data.title
            })
        });
    };


    useEffect(() => {
        if (location.state !== null) {
            const id = location.state.data
            fetchData(id)
        }
    }, [])
    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            name="main-info"
            onFinishFailed={onFinishFailed}
            initialValues={{...data}}
        >
            <Form.Item
                name="title" label="Title"
                rules={[{
                    required: true,
                    message: 'Please input your username!'
                }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="load" label="Load"
                rules={[{
                    required: true,
                    message: 'Please input your username!'
                }]}
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item
                name="reps" label="Reps"
                rules={[{
                    required: true,
                    message: 'Please input your username!'
                }]}
            >
                <InputNumber/>
            </Form.Item>
            <Button type="submit" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Main;