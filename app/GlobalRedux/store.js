'use client';

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import adReducers from './features/ad/adSlice'

export default configureStore({
  reducer: {
    ad:adReducers
  }
})

