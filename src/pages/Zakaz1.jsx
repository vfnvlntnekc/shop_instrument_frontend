import React from 'react';

import Grid from '@mui/material/Grid';


import { Instrument } from '../components/Instrument';


export const Zakaz1 = () => {
  

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            < Instrument 
                  fullName={"Заказ 1"}
                  isEditable
            />
            < Instrument 
                  fullName={"Заказ 2"}
                  isEditable
            />
            < Instrument 
                  fullName={"Заказ 3"}
                  isEditable
            />
        </Grid>
      </Grid>
    </>
  ); 
};