import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import axios from '../axios';

import { Instrument } from '../components/Instrument';
import { fetchInstrument, fetchTags } from '../redux/slices/instrument';

export const Catalog = () => {
  const dispatch = useDispatch();
  const {instrument, tags} = useSelector((state) => state.instrument);

  const isInstrumentLoading = instrument.status==='loading'

  React.useEffect(()=>{
      dispatch(fetchInstrument());
      dispatch(fetchTags());
  }, []);

  return (
    <>
      { <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isInstrumentLoading ? [...Array(5)] : instrument.items).map((obj, index)=>
            isInstrumentLoading ? (
              <Instrument key={index} isLoading={true}/>
            ) : (
            < Instrument 
                  id={obj._id}
                  fullName={obj.fullName}
                  //createdAt={obj.createdAt}
                  category={obj.category}
                  quality={obj.quality}
                  price={obj.price}
                  description={obj.description}
                  isEditable
            />
          ))}
        </Grid>
      </Grid> }
    </>
  );
};