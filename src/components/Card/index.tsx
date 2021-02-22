import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'contexts/appContext';
import CardShape from 'types/CardShape';

interface Props {
    card: CardShape,
};

const StyledCard = styled.div<{score: number}>`
    border: 1px solid ${({score}) => score % 2 == 0 ? 'blue' : 'orange'};
    border-radius: 5px;
    box-shadow: 3px 3px 6px #AAA;
`;

const StyledImg = styled.div`
    margin: 15px auto;
    width: 400px;
    height: 300px;

    img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const StyledInfo = styled.dl`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin: 15px auto;
    width: 75%;

    dt {
        font-weight: bold;
    }
`;

const Card = ({ card: { author, created, score, url, title, permalink }}: Props) => {
    const { base } = useContext(AppContext);
    
    const parseDate = (date: Date) => {
        return date.toDateString();
    };
    
    return (
        <StyledCard score={score}>
            <StyledImg>
                <img src={url} />
            </StyledImg>
            <StyledTitle>
                <a href={`${base}${permalink}`} target="_blank">
                    {title}
                </a>
            </StyledTitle>
            <StyledInfo>
                <dt>Author</dt>
                <dd>{author}</dd>
                <dt>Created</dt>
                <dd>{parseDate(created)}</dd>
                <dt>Score</dt>
                <dd>{score}</dd>
            </StyledInfo>
        </StyledCard>
    );
};

export default Card;