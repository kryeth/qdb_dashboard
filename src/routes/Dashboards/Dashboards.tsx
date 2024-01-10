import { Tabs, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';
import { DashboardsTabs } from '../../utils/DashboardsTabs';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        key: '1',
        label: DashboardsTabs.OVERVIEW,
        children: 'Content of Tab Pane 1'
    },
    {
        key: '2',
        label: DashboardsTabs.CALENDAR,
        children: 'Content of Tab Pane 2'
    },
    {
        key: '3',
        label: DashboardsTabs.SCHEDULE_ACTIONS,
        children: 'Content of Tab Pane 3'
    },
    {
        key: '4',
        label: DashboardsTabs.LIVE_ALERTS,
        children: 'Content of Tab Pane 4'
    }
];

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

export const Dashboards = () => {
    const { token } = theme.useToken();
    const navigate = useNavigate();

    const handleTabChange = (activeKey: string) => {
        const tabPaths: { [key: string]: string } = {
            '1': '/dashboards/overview',
            '2': '/dashboards/calendar',
            '3': '/dashboards/schedule-actions',
            '4': '/dashboards/live-alerts'
        };

        navigate(tabPaths[activeKey]);
    };

    return (
        <>
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
