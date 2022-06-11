import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState, useContext, useEffect} from "react";
import {currencyContext} from "../App";

export default function Main(){
    const {UAH_EUR, EUR_UAH, USD_UAH, UAH_USD, EUR_USD, USD_EUR} = useContext(currencyContext)
    const [current1, setCurrent1] = useState('');
    const [current2, setCurrent2] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const handleChangeCurrent1 = (event) => {
        setCurrent1(event.target.value);
    };

    const handleChangeCurrent2 = (event) => {
        setCurrent2(event.target.value);
    };

    useEffect(()=>{
        handleChangeValue2(value1);
    }, [current1])

    useEffect(()=>{
        handleChangeValue1(value2);
    }, [current2])

    const handleChangeValue2 = (value) => {
        if(current1 === current2){
            setValue2(value)
        }

        if(current1 === 'UAH' && current2 === 'USD'){
            const convert = +value / +UAH_USD;
            setValue2(convert.toString())
        }

        if(current1 === 'UAH' && current2 === 'EUR'){
            const convert = +value / +UAH_EUR;
            setValue2(convert.toString())
        }

        if(current1 === 'USD' && current2 === 'EUR'){
            const convert = +value / +USD_EUR;
            setValue2(convert.toString())
        }

        if(current1 === 'USD' && current2 === 'UAH'){
            const convert = +value * +USD_UAH;
            setValue2(convert.toString())
        }

        if(current1 === 'EUR' && current2 === 'UAH'){
            const convert = +value * +EUR_UAH;
            setValue2(convert.toString())
        }

        if(current1 === 'EUR' && current2 === 'USD'){
            const convert = +value * +EUR_USD;
            setValue2(convert.toString())
        }
    };

    const handleChangeValue1 = ( value) => {
        if(current1 === current2){
            setValue1(value)
        }

        if(current1 === 'UAH' && current2 === 'USD'){
            const convert = +value * +USD_UAH;
            setValue1(convert.toString())
        }

        if(current1 === 'UAH' && current2 === 'EUR'){
            const convert = +value * +EUR_UAH;
            setValue1(convert.toString())
        }

        if(current1 === 'USD' && current2 === 'EUR'){
            const convert = +value * +EUR_USD;
            setValue1(convert.toString())
        }

        if(current1 === 'USD' && current2 === 'UAH'){
            const convert = +value / +UAH_USD;
            setValue1(convert.toString())
        }

        if(current1 === 'EUR' && current2 === 'UAH'){
            const convert = +value / +UAH_EUR;
            setValue1(convert.toString())
        }

        if(current1 === 'EUR' && current2 === 'USD'){
            const convert = +value / +USD_EUR;
            setValue1(convert.toString())
        }
    };

    return (
        <>
            <Box component='div'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        id="standard-basic"
                        label="From"
                        variant="standard"
                        value={value1}
                        type='number'
                        onChange=
                            {(event)=> {
                                setValue1(event.target.value)
                                handleChangeValue2(event.target.value)
                            }}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={current1}
                        onChange={(event)=>{
                            handleChangeCurrent1(event)
                            handleChangeValue2(value1)
                        }}
                        label="Age"
                    >
                        <MenuItem value='UAH'>UAH</MenuItem>
                        <MenuItem value='USD'>USD</MenuItem>
                        <MenuItem value='EUR'>EUR</MenuItem>
                    </Select>
                </FormControl>

            </Box>

            <Box component='div'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        id="standard-basic"
                        label="From"
                        variant="standard"
                        value={value2}
                        type='number'
                        onChange=
                            {(event)=> {
                                setValue2(event.target.value)
                                handleChangeValue1(event.target.value)
                            }}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={current2}
                        onChange={(event)=> {
                            handleChangeCurrent2(event)
                            handleChangeValue1(value2)
                        }}
                        label="Age"
                    >
                        <MenuItem value='UAH'>UAH</MenuItem>
                        <MenuItem value='USD'>USD</MenuItem>
                        <MenuItem value='EUR'>EUR</MenuItem>
                    </Select>
                </FormControl>

            </Box>
        </>
    )
}