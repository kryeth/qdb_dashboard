import React from 'react';
import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons';

const BlogPostHeader = styled.div`
    display: flex;
    align-items: center;

    max-width: 300px;
`;

const StyledIcon = styled(StarFilled)`
    font-size: 24px;
    color: white;
    margin-right: 8px;
    background-color: #007bff;
    padding: 20px;
    border-radius: 10px;
`;

const Title = styled.h2`
    font-size: 16px;
    margin: 0;
`;

const Subtitle = styled.p`
    font-size: 12px;
    margin: 0;
`;

export const BlogPostsHeader = () => {
    return (
        <BlogPostHeader>
            <StyledIcon />
            <div>
                <Title>All Blog posts</Title>
                <Subtitle>Qatar Development Bank</Subtitle>
            </div>
        </BlogPostHeader>
    );
};
