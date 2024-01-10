import { Pagination } from 'antd';
import styled from 'styled-components';
import BlogPostImage from '../../assets/images/blog_post_image.png';
import { Post, useFetchPosts } from '../../hooks';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const BlogPost = styled.div`
    display: flex;
    flex-direction: row;
    background: #fff;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

const BlogHeader = styled.h2`
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const BlogContent = styled.p`
    color: #666;
    margin-bottom: 16px;
`;

const ReadMoreButton = styled.button`
    align-self: flex-start;
    background-color: transparent;
    color: #1e90ff;
    border: none;
    margin-top: 8px;
    padding: 0;
    cursor: pointer;
`;

const BlogDate = styled.div`
    align-self: flex-end;
    color: #999;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
`;

const StyledPagination = styled(Pagination)`
    width: 100%;
    text-align: center;
    margin-top: 30px;
`;

const POSTS_PER_PAGE = 3;

export const AllPosts = () => {
    const { posts, isLoading, error } = useFetchPosts(
        Number(process.env.REACT_APP_USER_ID)
    );
    const [paginatedPosts, setPaginatedPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const from = (currentPage - 1) * POSTS_PER_PAGE;
        const to = from + POSTS_PER_PAGE;
        const post = posts.slice(from, to);
        setPaginatedPosts(post);
    }, [currentPage, posts]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <BlogList>
            {paginatedPosts.map((post) => (
                <Link to={`/blogs/${post.id}`} key={post.id}>
                    <BlogPost>
                        <img
                            src={BlogPostImage}
                            alt="Blog post thumbnail"
                            style={{ marginRight: '20px' }}
                            height={100}
                        />
                        <div style={{ width: '100%' }}>
                            <BlogHeader>
                                {post.title}
                                <BlogDate>August 15, 2022</BlogDate>
                            </BlogHeader>

                            <BlogContent>{post.body}</BlogContent>
                            <ReadMoreButton>Read more</ReadMoreButton>
                        </div>
                    </BlogPost>
                </Link>
            ))}

            <StyledPagination
                defaultCurrent={currentPage}
                total={posts.length}
                pageSize={POSTS_PER_PAGE}
                onChange={onPageChange}
            />
        </BlogList>
    );
};
