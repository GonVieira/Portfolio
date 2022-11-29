import styled from 'styled-components';

export const ThirdSlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(23, 30, 34);
`

export const ThirdSlideContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75%;
    height: 90%;
`

export const ProjectSlideTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 85%;
    height: 10%;

    h1 {
        color: #689af8;
        font-weight: bold;
        font-size: 2rem;
    }
`

export const ProjectsContainer = styled.div`
    display: grid;
    width: 100%;
    height: auto;
    align-items: center;
    justify-items: center;
    gap: 0rem;
    grid-template-columns: auto auto;
    grid-column-start: 1;
    grid-column-end: 2;
`

export const GitAccContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 10%;
    margin-top: 5%;
`

