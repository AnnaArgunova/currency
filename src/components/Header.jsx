import {useContext} from "react";
import {currencyContext} from "../App";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import ItemHeader from "./ItemHeader";

export default function Header(){
    const {UAH_EUR, EUR_UAH, USD_UAH, UAH_USD} = useContext(currencyContext)

if(!UAH_EUR || !EUR_UAH || !USD_UAH || !UAH_USD) return <div>Error</div>
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <ItemHeader from={USD_UAH} to={UAH_USD}>
                            <MonetizationOnOutlinedIcon />
                        </ItemHeader>
                        <ItemHeader from={EUR_UAH} to={UAH_EUR}>
                            <EuroOutlinedIcon />
                        </ItemHeader>
                    </Toolbar>
            </AppBar>
        </Box>
    )
}