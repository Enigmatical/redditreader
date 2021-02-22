import { useState, useContext, useEffect } from 'react';
import AppContext from 'contexts/appContext';
import { getTopPosts } from 'services/reddit';
import CardShape from 'types/CardShape';

interface Data {
    isLoading: boolean,
    error: string,
    cards: Array<CardShape>,
};

interface ResponseData {
    data: {
        children: Array<{ data: {
            id: string,
            author: string,
            created: number,
            score: number,
            url: string,
            title: string,
            permalink: string,
        }}>,
    },
};

const initialData: Data = {
    isLoading: true,
    error: '',
    cards: [],
};

const parseCards = ({ data: { children: posts } }: ResponseData, count: number) => {
    const subset = posts.slice(0, count);

    return subset.map(({ data }) => {
        const { 
            id,
            author, 
            created, 
            score,
            url,
            title,
            permalink,  
        } = data;

        return {
            id,
            author,
            created: new Date(created * 1000),
            score,
            url,
            title,
            permalink,
        };
    });
};

const useGetCardData = () => {
    const { base, sub, query, count } = useContext(AppContext);
    const [data, setData] = useState(initialData);

    useEffect(() => {
        setData(initialData);

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchCardData = async () => {
            try {
                const response = await getTopPosts(`${base}${sub}${query}`, { signal });
                const cards = parseCards(response, count);
                setData({
                    isLoading: false,
                    error: '',
                    cards,
                });
            } catch(e) {
                setData({
                    isLoading: false,
                    error: `${e.message}`,
                    cards: [],
                });
            }
        };

        fetchCardData();

        return (() => {
            controller.abort();
        });
    }, [base, sub, query, count]);

    return data;
};

export default useGetCardData;
