import { useState } from 'react';
import { Button, Avatar, Dropdown, Menu, Divider, MenuProps } from 'antd';

import {
    CalendarOutlined,
    BellOutlined,
    DownOutlined,
    BookOutlined,
    BarChartOutlined,
    SendOutlined,
    InfoCircleOutlined,
    MenuOutlined,
    MailOutlined
} from '@ant-design/icons';
import QdbLogo from '../../assets/images/logo.png';
import UserAvatar from '../../assets/images/user.jpg';
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useProfile } from '../../hooks';
import Sider from 'antd/lib/layout/Sider';

const StyledSider = styled(Sider)`
    && {
        background: white;
    }

    .ant-menu-item-group-title {
        padding: 16px;
        font-weight: bold;
        color: black;
    }

    .ant-menu-item {
        margin: 0;
    }

    .ant-menu-item-icon {
        margin-right: 12px;
    }

    .ant-menu-item-selected {
        background-color: #e6f7ff !important;
    }

    .ant-dropdown-link {
        color: currentColor;
        &:hover {
            color: currentColor;
        }
    }
`;

const StyledSubMenu = styled(Menu.SubMenu)`
    &.ant-menu-submenu {
        color: #000;
        font-weight: 700;
        text-transform: uppercase;

        .ant-menu-submenu-title {
            padding-left: 0;
        }
    }
`;

const StyledDivider = styled(Divider)`
    margin: 0;
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

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const profile = useProfile(Number(process.env.REACT_APP_USER_ID));
    const location = useLocation();
    const selectedKeys = [location.pathname];

    return (
        <StyledSider
            theme="light"
            width={260}
            className="site-layout-background"
            collapsed={collapsed}
        >
            <div
                style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    background: '#1677FF',
                    color: '#fff',
                    padding: '10px 20px'
                }}
            >
                {!collapsed && <img src={QdbLogo} width="90px" alt="Logo" />}

                <Button
                    type="text"
                    icon={
                        <MenuOutlined
                            style={{ fontSize: '28px', color: '#fff' }}
                        />
                    }
                    onClick={() => {
                        setCollapsed(!collapsed);
                        console.log('test');
                    }}
                    style={{
                        width: 48,
                        height: 48
                    }}
                />
            </div>

            <div
                style={{
                    padding: '24px 0',
                    textAlign: 'center',
                    borderBottom: '1px solid #f0f0f0'
                }}
            >
                <Avatar size={80} src={UserAvatar} />
                <p style={{ margin: '14px 0 0 0' }}>Hello,</p>
                <Dropdown menu={{ items: userMenu }}>
                    <Button
                        style={{
                            marginTop: 0,
                            border: 0,
                            boxShadow: 'none',
                            fontSize: '18px',
                            fontWeight: 500
                        }}
                    >
                        {profile?.name}
                        <DownOutlined />
                    </Button>
                </Dropdown>

                <Button
                    type="primary"
                    block
                    style={{ maxWidth: '200px', marginTop: '10px' }}
                >
                    <MailOutlined /> Live metrics
                </Button>
            </div>

            <Menu
                mode="inline"
                selectedKeys={selectedKeys}
                style={{ borderRight: 0 }}
            >
                <Menu.ItemGroup key="g1" title="Dashboards">
                    <Menu.Item
                        key="/dashboards/overview"
                        icon={<BarChartOutlined />}
                    >
                        <Link to="dashboards/overview">Overview</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/dashboards/calendar"
                        icon={<CalendarOutlined />}
                    >
                        <Link to="/dashboards/calendar">Calendar</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/dashboards/schedule-actions"
                        icon={<SendOutlined />}
                    >
                        <Link to="/dashboards/schedule-actions">
                            Schedule Actions
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/dashboards/live-alerts"
                        icon={<BellOutlined />}
                    >
                        <Link to="/dashboards/live-alerts"> Live Alerts</Link>
                    </Menu.Item>
                </Menu.ItemGroup>

                <Menu.ItemGroup key="g2" title="Blogs">
                    <Menu.Item key="/blogs/all-posts" icon={<BookOutlined />}>
                        <Link to="/blogs/all-posts">All</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/blogs/latest-posts"
                        icon={<InfoCircleOutlined />}
                    >
                        <Link to="/blogs/latest-posts">Latest</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/blogs/archived"
                        icon={<CalendarOutlined />}
                    >
                        <Link to="/blogs/archived">Archived</Link>
                    </Menu.Item>
                </Menu.ItemGroup>

                <StyledSubMenu key="sub3" title="Documentation"></StyledSubMenu>
                <StyledDivider />
                <StyledSubMenu key="sub4" title="Reports"></StyledSubMenu>
                <StyledDivider />
                <StyledSubMenu key="sub5" title="Need Help?"></StyledSubMenu>
                <StyledDivider />
            </Menu>
        </StyledSider>
    );
};
