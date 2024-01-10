import { Header } from 'antd/es/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import { UserHeader } from '../UserHeader/UserHeader';
import { Input, theme } from 'antd';
import { styled } from 'styled-components';

const StyledSearch = styled(Input.Search)`
    & {
        width: 300px;
        margin: 15px;
    }

    .ant-input {
        border-radius: 19px;
        padding: 4px 11px;
        height: auto;
        background-color: #f0f2f5;
        border: none;
        font-weight: 500;
    }

    .ant-input:focus,
    .ant-input-focused {
        box-shadow: none;
        border: none;
    }

    .ant-input-affix-wrapper {
        background-color: #f0f2f5;
    }

    .ant-input-affix-wrapper .ant-input-prefix {
        color: #bfbfbf;
    }

    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
        border-color: none;
    }

    .ant-input-search-button {
        display: none;
    }
`;

export const TopBar = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken();

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <StyledSearch
                placeholder="Type here to search..."
                prefix={<SearchOutlined />}
            />

            <UserHeader />
        </Header>
    );
};
