import React from 'react';
import styled from 'styled-components';
import { Button, Badge, Avatar, Dropdown, MenuProps } from 'antd';
import {
    BellOutlined,
    MailOutlined,
    PlusOutlined,
    CaretDownOutlined,
    BorderOuterOutlined
} from '@ant-design/icons';
import UserAvatar from '../../assets/images/user.jpg';

const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;

    .action-item {
        margin-right: 20px;
    }

    .avatar-dropdown {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

const userMenu: MenuProps['items'] = [
    {
        key: '1',
        label: 'Profile'
    },
    {
        key: '2',
        label: 'Settings'
    },
    {
        key: '3',
        label: 'Logout'
    }
];

export const UserHeader = () => {
    return (
        <ActionContainer>
            <Button className="action-item" type="text" icon={<PlusOutlined />}>
                Add
            </Button>
            <Badge className="action-item" count={1} size="small" dot={true}>
                <BellOutlined />
            </Badge>
            <Badge className="action-item" count={2} size="small">
                <MailOutlined />
            </Badge>
            <Badge className="action-item" count={3} size="small">
                <BorderOuterOutlined />
            </Badge>
            <Dropdown menu={{ items: userMenu }} trigger={['click']}>
                <div className="avatar-dropdown">
                    <Avatar src={UserAvatar} />
                    <CaretDownOutlined style={{ marginLeft: 8 }} />
                </div>
            </Dropdown>
        </ActionContainer>
    );
};
