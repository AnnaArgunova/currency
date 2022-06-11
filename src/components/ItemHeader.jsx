import {Box, Typography} from "@mui/material";

export default function ItemHeader({children, from, to}){
    return(
        <Box  component="div" sx={{ display:'flex', alignItems:'center', marginLeft:10}}>
            {children}
            <Typography component='span' sx={{marginLeft: 2}}>{from}/{to}</Typography>
        </Box>
    )
}