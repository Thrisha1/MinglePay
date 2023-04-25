import { createSlice } from '@reduxjs/toolkit'

export const adSlice = createSlice({
  name: 'ad',
  initialState: {
    CurrentAds: [
      {
        id: 1,
        image: "/assets/images/eid ads.svg",
        title: 'Eid',
        description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        amt: "1000"
      },
      {
        id: 2,
        image: "/assets/images/eid ads.svg",
        title: 'Sale',
        description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        amt: "1000"
      },
      {
        id: 3,
        image: "/assets/images/eid ads.svg",
        title: 'Dress',
        description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        amt: "1000"
      }
    ],
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = adSlice.actions

export default adSlice.reducer