import React, { useEffect, useState } from 'react';
import { HighlightTwoTone } from '@ant-design/icons';
import Dexie from "dexie";
import { Row, Col, Button, Form, Input } from 'antd';
const { TextArea } = Input;

const GetContent = () => {
    
    const db = new Dexie("ReactDexie");
    db.version(1).stores({
        posts: "subject, text"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })

    const [posts, setPosts] = useState("");


    const deletePost = async (id) => {
        console.log("id - ", id);
        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        setPosts(allPosts);
    }

    useEffect(() => {
        const getPosts = async () => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
        }
        getPosts();
    }, []);

    console.log("Posts - ", posts);

    return (
        <>
         Get Content
        </>
    )
};

export default GetContent;