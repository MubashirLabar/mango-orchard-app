// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const setToStorage = async (key, value) => {
//   const jsonValue = JSON.stringify(value);
//   try {
//     await AsyncStorage.setItem(key, jsonValue);
//   } catch (error) {
//     console.log("Error get from storing:", error);
//   }
// };

// export const getFromStorage = async (key) => {
//   try {
//     const value = await AsyncStorage.getItem(key);
//     if (value) {
//       return JSON.parse(value);
//     }
//   } catch (error) {
//     console.log("Error set to storage:", error);
//   }
// };

// export const removeStorage = async (key) => {
//   try {
//     await AsyncStorage.removeItem(key);
//   } catch (error) {
//     console.log("Error removing storage:", error);
//   }
// };

// export const updateStorage = async (key, value) => {
//   try {
//     const item = await AsyncStorage.getItem(key);
//     const result = { ...JSON.parse(item), ...value };

//     await AsyncStorage.setItem(key, JSON.stringify(result));
//   } catch (error) {}
// };

// export function capitalizeFirstLetter(str) {
//   if (str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
//   return null;
// }

export const formatTime = (minutes, seconds) => {
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};
