export const getTopPosts = async (url: string, options: Object = {}) => {
    const response = await fetch(url, options);
    return response.json();
};