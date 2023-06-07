import React from 'react';

import Grid from '@mui/material/Grid';

import { Instrument } from '../components/Instrument';


export const Vxod = () => {

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            < Instrument 
                fullName={"Ударные инструменты"}
                isEditable
            />
            < Instrument 
                fullName={"Струнные инструменты"}
                isEditable
            />
            < Instrument 
                fullName={"Духовые инструменты"}
                isEditable
            />
            < Instrument 
                fullName={"Клавишные инструменты"}
                isEditable
            />
        </Grid>
      </Grid>
    </>
    
  );
};