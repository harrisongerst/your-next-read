import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: .5fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
`