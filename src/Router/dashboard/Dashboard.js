import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import PostRow from "./PostRow";
import Table from 'react-bootstrap/Table';
import './main.css'
function Dashboard(props) {

  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("/api/workouts").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    console.log(data);
    getData();
  }, []);

  return (
    <Card

      title={
        <Button   type="primary" danger ghost>
          <Link to="post" style={{textDecoration:'none'}}>Create</Link>
        </Button>
      }
    >

      <Table  striped bordered hover variant="dark"  >
        <thead className='w-100'>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Reps</th>
            <th>Load</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product ,inedx ) => {
            return (
              <PostRow product={product} index={inedx} key={product._id} getData={getData} />
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
}

export default Dashboard;
