import {useEffect, useState} from "react";
import {getCurrency} from '../query/getCurrency';

export default function useApi() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [UAH_EUR, setUAH_EUR] = useState(null);
    const [EUR_UAH, setEUR_UAH] = useState(null);
    const [USD_UAH, setUSD_UAH] = useState(null);
    const [UAH_USD, setUAH_USD] = useState(null);

    useEffect( ()=>{
        setLoading(true);

        getCurrency('UAH', 'EUR')
            .then(data=>{
                setUAH_EUR(data.result);
            })
            .catch(error=>{
                setError(error)
            })

        getCurrency( 'EUR', 'UAH')
            .then(data=>{
                console.log(data.result)
                setUSD_UAH(data.result);
            })
            .catch(error=>{
                setError(error)
            })

        getCurrency( 'USD', 'UAH')
            .then(data=>{
                console.log(data.result)
                setEUR_UAH(data.result);
            })
            .catch(error=>{
                setError(error)
            })

        getCurrency( 'UAH', 'USD')
            .then(data=>{
                console.log(data.result)
                setUAH_USD(data.result);
            })
            .catch(error=>{
                setError(error)
            })
        setLoading(false);

    },[])


    return {
        UAH_EUR,
        EUR_UAH,
        USD_UAH,
        UAH_USD,
        loading,
        error,
    };
}
