import React, {useEffect, useState} from 'react';
import {Button, Card, Modal, Table} from "antd";
import axios from "axios";
import {DeleteOutlined, EditFilled} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import {toast} from "react-toastify";

const PostCardTable = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'Title',
        },
        {
            title: 'Reps',
            dataIndex: 'reps',
            key: 'Load',
        },
        {
            title: 'Load',
            dataIndex: 'load',
            key: 'Reps',
        },
        {
            title: 'Options',
            key: 'options',
            render: (id, row) => (
                <>
                    <Button onClick={() => setIsModalVisible(row._id)}><DeleteOutlined/></Button>,
                    <Button>
                        <Link to="/edit" state={{data: row._id}}>
                            <EditFilled/>
                        </Link>
                    </Button>

                </>
            )
        },
    ];

    const [data, setData] = useState()
    const [isModalVisible, setIsModalVisible] = useState(null);
    const [confirmLoad, setrConfirmLoad] = useState(false);

    const fetchData = () => {
        axios.get("/api/workouts").then((res) => {
            setData(res.data);
        });
    };


    useEffect(() => {
        fetchData()
    }, [])

    const remove = () => {
        setrConfirmLoad(true)
        axios.delete(`/api/workouts/${isModalVisible}`).then((res) => {
            toast.success("Delete succsess")
            handleCancel()
        }).finally(() => {
            setrConfirmLoad(false)
            fetchData()
        })
    };

    const handleCancel = () => setIsModalVisible(false);

    return (

        <Card title={<Button><Link to="/create">Create</Link></Button>}>
            <Table columns={columns}
                   dataSource={data}
                   rowKey={(record) => record.title}
            />
            <Modal title="Delete text" visible={!!isModalVisible}
                   confirmLoading={confirmLoad}
                   onOk={remove}
                   onCancel={handleCancel}/>
        </Card>
    );
};

export default PostCardTable;