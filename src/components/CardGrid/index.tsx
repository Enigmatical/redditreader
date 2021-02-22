import React, { useContext } from 'react';
import styled from 'styled-components';
import useGetCardData from 'hooks/useGetCardData';
import Card from 'components/Card';
import AppContext from 'contexts/appContext';
import CardShape from 'types/CardShape';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin: 15px;
`;

const CardGrid = () => {
    const { count, sub } = useContext(AppContext);
    const { isLoading, error, cards } = useGetCardData();

    if (isLoading) {
        return (
            <div>
                <h2>Top {count} posts from {sub}</h2>
                <div>Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h2>Oops.</h2>
                <p>Encounter an error:</p>
                <pre>{error}</pre>
            </div>
        );
    }

    return (
        <div>
            <h2>Top {count} posts from {sub}</h2>
            <StyledGrid>
                {cards.map((card: CardShape) => (
                    <Card key={card.id} card={card} />
                ))}
            </StyledGrid>
        </div>
    );
};

export default CardGrid;
