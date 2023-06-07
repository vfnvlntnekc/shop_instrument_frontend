import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import {Order} from '../components/Order'


export const Zakaz = () => {
  

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            <Typography  variant="h5">
                Стоимость:
            </Typography>
            <Typography  variant="h5">
                Статус:
            </Typography>
        </Grid>
      </Grid>
    </>
  ); 
};