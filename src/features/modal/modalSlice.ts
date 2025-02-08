import { createSlice }                 from '@reduxjs/toolkit';
import { type ModalInitialState }      from '../../utils/types';


const initialState: ModalInitialState = {
  isOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  }
});

export const {
  closeModal,
  openModal,
} = modalSlice.actions;

export default modalSlice.reducer;


