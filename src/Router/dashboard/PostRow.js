import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
const PostRow = (props) => {
  const navigate = useNavigate();
  const remove = (id) => {
    axios.delete(`/api/workouts/${id}`).then((res) => {
      props.getData();
    });
  };

  const edit = (id) => {
    navigate("post", { state: id });
  };

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.product.title}</td>
      <td>{props.product.load}</td>
      <td>{props.product.reps}</td>
      <td  className='m-auto d-flex gap-2 align-items-center justify-content-center' >
          <Button
              onClick={() => {
                  edit(props.product._id);
              }}
              type="primary"
              ghost

          >
              <EditOutlined />
          </Button>

        <Button
          onClick={() => remove(props.product._id)}
          type="primary"
          danger
          ghost
        >
          <DeleteFilled />
        </Button>

      </td>
    </tr>
  );
};

export default PostRow;
