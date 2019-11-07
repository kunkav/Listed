import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default () => {
    const[results, setResults] =useState([]);
    const[errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async (searchTerm) => {
        try {
        console.log(`${searchTerm} api called`);        
        const response = await zomato.get('/search', {
            params: {
                apikey: 'b46cae0e0a2b67c9eb267fed7ae6307b',
                q: searchTerm,
                count: 50
            }
        });
        //console.log(response.data.restaurants.restaurant.name);
        setResults(response.data.restaurants);
    } catch (err) {
        console.log(err);
        setErrorMessage('OOPS, something went wrong!');
    }
    };
    useEffect( () => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
}