import {useEffect, useState} from "react";
import {getCurrency} from '../query/getCurrency';

export default function useApi() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [UAH_EUR, setUAH_EUR] = useState(null);
    const [EUR_UAH, setEUR_UAH] = useState(null);
    const [USD_UAH, setUSD_UAH] = useState(null);
    const [UAH_USD, setUAH_USD] = useState(null);
    const [EUR_USD, setEUR_USD] = useState(null);
    const [USD_EUR, setUSD_EUR] = useState(null);

    useEffect( ()=>{
        setLoading(true);

        getCurrency('UAH', 'EUR')
            .then(data=>{
                const props = data.result.EUR *1000;
                setUAH_EUR(props);
            })
            .catch(error=>{
                setError(error)
            })

        getCurrency( 'EUR', 'UAH')
            .then(data=>{
                const props =+ data.result.UAH.toFixed(2);
                setUSD_UAH(props);
            })
            .catch(error=>{
                setError(error)
            })

        getCurrency( 'USD', 'UAH')
            .then(data=>{
                const props = +data.result.UAH.toFixed(2);
                setEUR_UAH(props);
            })
            .catch(error=>{
                setError(error)
            })

        getCurrency( 'UAH', 'USD')
            .then(data=>{
                const props = data.result.USD * 1000;
                setUAH_USD(props);
            })
            .catch(error=>{
                setError(error)
            })

        getCurrency( 'EUR', 'USD')
            .then(data=>{
                const props = +data.result.USD.toFixed(2);
                setEUR_USD(props);
            })
            .catch(error=>{
                setError(error)
            })


        getCurrency( 'USD', 'EUR')
            .then(data=>{
                const props = +data.result.EUR.toFixed(2);
                setUSD_EUR(props);
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
        EUR_USD,
        USD_EUR,
        loading,
        error,
    };
}
