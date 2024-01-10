import { useState } from 'react';
import { Input, Button, Form, message, Modal } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchPost } from '../../hooks';
import axios from 'axios';
import BlogPostImage from '../../assets/images/blog_post_image.png';

export const BlogPostDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [form] = Form.useForm();
    const postId = Number(params.id);
    const { post } = useFetchPost(postId);

    const handleEdit = () => {
        setIsEditing(true);
        form.setFieldsValue(post);
    };

    const handleSave = () => {
        form.validateFields()
            .then((values) => {
                axios
                    .put(
                        `${process.env.REACT_APP_BASE_URL}/posts/${params.id}`,
                        values
                    )
                    .then(() => {
                        message.success('Post updated successfully!');
                        setIsEditing(false);
                    })
                    .catch((err) => {
                        message.error('Failed to update post!');
                        console.error(err);
                    });
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    const handleDelete = () => {
        Modal.confirm({
            title: 'Are you sure you want to delete this post?',
            content: 'This action cannot be undone.',
            onOk: () => {
                axios
                    .delete(
                        `${process.env.REACT_APP_BASE_URL}/posts/${params.id}`
                    )
                    .then(() => {
                        message.success('Post deleted successfully!');
                        navigate('/blogs/all-posts');
                    })
                    .catch((err) => {
                        message.error('Failed to delete post!');
                        console.error(err);
                    });
            }
        });
    };

    return (
        <div style={{ margin: '20px' }}>
            {isEditing ? (
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="body"
                        label="Content"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the post content!'
                            }
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Button onClick={handleSave} type="primary">
                        Save
                    </Button>
                </Form>
            ) : (
                <div>
                    <img
                        src={BlogPostImage}
                        alt="Blog post thumbnail"
                        height={100}
                    />

                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                    <Button onClick={handleEdit} type="primary">
                        Edit
                    </Button>
                    <Button danger onClick={handleDelete}>
                        Delete Post
                    </Button>
                </div>
            )}
        </div>
    );
};
