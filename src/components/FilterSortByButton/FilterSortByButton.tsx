import styled from 'styled-components';
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const FilterSortButton = styled(Button)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border: none;
    border-radius: 15px;
    padding: 5px 15px;
    color: #000;

    &:hover,
    &:focus {
        background-color: #e6e6e6;
        color: #000;
    }

    .anticon {
        margin-right: 8px;
    }
`;

export const FilterSortByButton = () => {
    return (
        <FilterSortButton>
            <FilterOutlined />
            Filter/Sort by
        </FilterSortButton>
    );
};
