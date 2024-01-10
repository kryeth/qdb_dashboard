import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from './useFetchPosts';

export const useFetchPost = (postId: number) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get<Post>(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [postId]);

    return { post, loading, error };
};
