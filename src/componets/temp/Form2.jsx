import React, { useEffect, useState } from 'react';
import { HighlightTwoTone } from '@ant-design/icons';
import Dexie from "dexie";
import { Row, Col, Button, Form, Input } from 'antd';
const { TextArea } = Input;



const Form2 = () => {
    const formName = `contact`

    const db = new Dexie("ReactDexie");
    db.version(1).stores({
        posts: "subject, text"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })


    const [postSubject, setSubject] = useState("");
    const [postText, setText] = useState("");
    const [posts, setPosts] = useState("");


    const deletePost = async (id) => {
        console.log("id - ", id);
        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        setPosts(allPosts);
    }

    const handleSubmit = (e, values) => {

        if (e[`bot-field`] === undefined) {
            delete e[`bot-field`]
        }

        if (postSubject !== "" && postText !== "") {
            let post = {
                title: postSubject,
                content: postText
            }
            db.posts.add(post).then(async () => {
                let allPosts = await db.posts.toArray();
                setPosts(allPosts);
            });
        }
    }



    useEffect(() => {
        const getPosts = async () => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
        }
        getPosts();
    }, []);

    let postData;

    if (posts.length > 0) {

        postData = <div className="postsContainer">
            {
                posts.map(post => {
                    console.log(" posts -", posts);

                    return <div className="post" key={post.title}>
                        <div />
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <button className="delete" onClick={() => deletePost(post.title)}>Delete</button>
                    </div>
                })
            }
        </div>
    } else {
        postData = <div className="message">
            <p>There are no posts to show</p>
        </div>
    }

    return (
        <>
            <Row
                justify="space-around"
            >
                <Col
                    xs={22}
                    sm={18}
                    md={16}
                    lg={8}
                >
                    <form
                        name={formName}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        hidden
                    >
                        <input type="text" name="subject" />
                        <textarea name="text"></textarea>
                    </form>

                    <Form
                        name="cf"
                        method="post"
                        onFinish={handleSubmit}
                        layout="vertical"
                    >

                        <Form.Item
                            label="Don't fill this out"
                            className={`hidden`}
                            style={{ display: `none` }}
                            name="bot-field"
                        >
                            <Input type={`hidden`} />
                        </Form.Item>
                        <Form.Item
                            label="Subject"
                            rules={[{ required: true, message: `Please enter subject.` }]}
                            name="subject"
                        >
                            <Input
                                placeholder="Subject"
                                prefix={<HighlightTwoTone className="site-form-item-icon" />}
                                onChange={e => setSubject(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Text"
                            rules={[{ required: true, message: `Please enter your text.` }]}
                            name="text"

                        >
                            <TextArea
                                placeholder="Your text"
                                rows={5}
                                onChange={e => setText(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={false} >
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            {postData}
        </>
    )
}


export default Form2;