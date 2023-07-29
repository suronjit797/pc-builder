import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  isComplete: false,
  categoryList: [
    {
      id: "cpu",
      name: "CPU/Processor",
      link: "/category/cpu",
      item: {},
    },
    {
      id: "motherboard",
      name: "Motherboard",
      link: "/category/motherboard",
      item: {},
    },
    {
      id: "ram",
      name: "RAM",
      link: "/category/ram",
      item: {},
    },
    {
      id: "powerSupplyUnit",
      name: "Power Supply Unit",
      link: "/category/powerSupplyUnit",
      item: {},
    },
    {
      id: "storageDevice",
      name: "Storage Device",
      link: "/category/storageDevice",
      item: {},
    },
    {
      id: "monitor",
      name: "Monitor",
      link: "/category/monitor",
      item: {},
    },
    {
      id: "others",
      name: "Others",
      link: "/category/others",
      item: {},
    },
  ],
};

export const categorySlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    addCategoryItem(state, action) {
      const findItem = state.categoryList.find(
        (item) => item.id === action?.payload?.category
      );
      state.price += action?.payload?.price;

      const updatedItem = { ...findItem, item: action?.payload };
      state.categoryList = state.categoryList.map((item) => {
        if (item?.id === findItem?.id) {
          return updatedItem;
        }
        return item;
      });

      const complete = state.categoryList.filter(
        (element) => Object.keys(element.item).length > 0
      );
      if (complete.length >= 5) {
        state.isComplete = true;
      }
    },
  },
});

export const { addCategoryItem } = categorySlice.actions;

export default categorySlice.reducer;
