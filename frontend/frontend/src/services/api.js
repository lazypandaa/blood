
export const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:5000/');
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'Error fetching data';
    }
};