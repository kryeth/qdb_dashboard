import React from 'react';
import { Tabs, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BlogPostsHeader } from '../../components/BlogPostsHeader/BlogPostsHeader';
import { AllPosts } from '../../components/AllPosts/AllPosts';
import { FilterSortByButton } from '../../components/FilterSortByButton/FilterSortByButton';

interface TabItem {
    key: string;
    label: string;
    children: React.ReactNode;
}

const items: TabItem[] = [
    {
        key: '1',
        label: 'All Posts',
        children: <AllPosts />
    },
    {
        key: '2',
        label: 'Latest Posts',
        children: <div>Content of Tab Pane 2</div>
    },
    {
        key: '3',
        label: 'Archived',
        children: <div>Content of Tab Pane 3</div>
    }
];

const StyledContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 20px 0 20px;
`;

const StyledTabs = styled(Tabs)`
    .ant-tabs-tab {
        text-transform: uppercase;
    }
`;

const StyledContent = styled(Content)`
    margin: 24px 16px;
    padding: 16px 24px;
    min-height: 280px;
    background: ${(props: any) => props.theme.colorBgContainer};
    border-radius: ${(props: any) => props.theme.borderRadiusLG}px;
`;

export const Blogs: React.FC = () => {
    const navigate = useNavigate();
    const { token } = theme.useToken();

    const handleTabChange = (activeKey: string) => {
        const tabPaths: { [key: string]: string } = {
            '1': '/blogs/all-posts',
            '2': '/blogs/latest-posts',
            '3': '/blogs/archived'
        };

        navigate(tabPaths[activeKey]);
    };

    return (
        <>
            <StyledContentHeader>
                <BlogPostsHeader />
                <FilterSortByButton />
            </StyledContentHeader>

            <StyledContent theme={token}>
                <StyledTabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={handleTabChange}
                />
            </StyledContent>
        </>
    );
};
