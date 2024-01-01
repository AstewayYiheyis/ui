import * as React from 'react';
import Box from '@mui/system/Box';

export default function BoxBasic({data}) {
    return (
        data && (<Box component="section" sx={{ p: 2, border: '1px dashed grey', marginTop: '10px'}}>
            <h3>Package Information: </h3>
            <p>Package Name: {data.productName}</p>
            <p>Description: {data.productDescription}</p>
            <p>Shipped Date: {data.shippedDate}</p>
        </Box>)
    );
}