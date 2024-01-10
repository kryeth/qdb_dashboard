import { useState, useEffect } from 'react';
import axios from 'axios';

export type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

type UseFetchPostsReturn = {
    posts: Post[];
    isLoading: boolean;
    error: Error | null;
};

export const useFetchPosts = (userId: number): UseFetchPostsReturn => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
                );
                setPosts(response.data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        if (userId) {
            fetchPosts();
        }
    }, [userId]);

    return { posts, isLoading, error };
};
