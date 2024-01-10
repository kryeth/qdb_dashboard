import '../../matchMedia.mock';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import '@testing-library/jest-dom';
import axios from 'axios';
import { mocked } from 'jest-mock';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = mocked(axios);

describe('Sidebar', () => {
    it('fetches and displays user details', async () => {
        const mockRoute = '/blogs/all-posts';

        mockedAxios.get.mockResolvedValueOnce({
            data: { name: 'John Doe' }
        });

        render(
            <MemoryRouter initialEntries={[mockRoute]}>
                <Sidebar />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('John Doe')).toBeInTheDocument();
        });
    });
});
