import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModal: false,
};
const modalSlice = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    openModal(state) {
      state.isModal = true;
    },
    closeModal(state) {
      state.isModal = false;
    },
  },
});

export default modalSlice.reducer;
export const { closeModal, openModal } = modalSlice.actions;
