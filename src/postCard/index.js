import React from 'react';
import {Card} from "antd";
import PostCardTable from "./PostCardTable";

const PostCard = () => {
    return (
        <Card title="Post card">
            <PostCardTable/>

        </Card>
    );
};

export default PostCard;