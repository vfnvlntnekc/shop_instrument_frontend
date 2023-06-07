import React from 'react';

import Grid from '@mui/material/Grid';

import { Instrument } from '../components/Instrument';
import { Button } from '@mui/material';
import { CheckCategory} from "./Category_1"

export const Category = () => {

  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            <Button href="/category/Ударные инструменты">
            < Instrument 
                fullName={"Ударные инструменты"}
                //export const category = {"Ударные инструменты"}
                isEditable
            />
            </Button>
            <Button href="/category/Струнные инструменты">
            < Instrument 
                fullName={"Струнные инструменты"}
                isEditable
            />
            </Button>
            <Button href="/category/Духовые инструменты">
            < Instrument 
                fullName={"Духовые инструменты"}
                isEditable
            />
            </Button>
            <Button href="/category/Клавишные инструменты">
            < Instrument 
                fullName={"Клавишные инструменты"}
                isEditable
            />
            </Button>
        </Grid>
      </Grid>
    </>
  );
};