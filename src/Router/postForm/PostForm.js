import React, {useState} from "react";
import {Button, Form, Input, InputNumber} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import style from "./form.module.scss";

const PostForm = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState();
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location.state)
    const onFinish = (values) => {

        if(location.state){
            axios.put(`/api/workouts/${location.state}`,values).then((res)=>{
                toast.success("Successful");
                navigate("/");
            })
        }

        else {
            axios.post("/api/workouts", values).then((res) => {
                toast.success("Successful");
                navigate("/");
            });
        }

    };


    const onFinishFailed = (red) => console.log(red);
    return (<div className={style.main}>
            <Form
                className={style.form}
                form={form}
                layout={"vertical"}
                onFinish={onFinish}
                name="main-info"
                onFinishFailed={onFinishFailed}
                initialValues={{...data}}
            >

                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{
                        required: true, message: "Please input your title",
                    },]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="load"
                    label="Load"
                    rules={[{
                        required: true, message: "Please input your number!",
                    },]}
                >
                    <InputNumber style={{width: "100%"}}/>
                </Form.Item>

                <Form.Item
                    name="reps"
                    label="Reps"
                    rules={[{
                        required: true, message: "Please input your number!",
                    },]}
                >
                    <InputNumber style={{width: "100%"}}/>
                </Form.Item>

                <Button type="submit" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>);
};

export default PostForm;
