import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage } from "utils/common";

let isUserExist = null;
const fetchUser = async () => {
  try {
    isUserExist = await getFromStorage("isUser");
  } catch (error) {
    console.log("Error retrieving isUser from storage:", error);
  }
};

async function script() {
  await fetchUser();
}
script().then(() => {});

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    isUser: isUserExist ? isUserExist : null,
  },
  reducers: {
    setIsUser: (state, action) => {
      state.isUser = action.payload;
    },
  },
});

export const { setIsUser } = authReducer.actions;
export default authReducer.reducer;
