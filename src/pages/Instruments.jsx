import React from 'react';

import Grid from '@mui/material/Grid';


import { Instrument } from '../components/Instrument';


export const Instruments = () => {
  

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            < Instrument 
                fullName={"Гитара"}
                isEditable
            />
            < Instrument 
                fullName={"Скрипка"}
                isEditable
            />
            < Instrument 
                fullName={"Виолончель"}
                isEditable
            />
            < Instrument 
                fullName={"Арфа"}
                isEditable
            />
        </Grid>
      </Grid>
    </>
  );
};