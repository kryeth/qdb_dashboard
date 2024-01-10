import { Layout } from 'antd';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { TopBar } from './components/TopBar/TopBar';

const StyledLayout = styled(Layout)`
    height: 100vh;
    flex-direction: row;
`;

const App = () => {
    return (
        <StyledLayout>
            <Sidebar />
            <Layout>
                <TopBar />
                <Outlet />
            </Layout>
        </StyledLayout>
    );
};

export default App;
