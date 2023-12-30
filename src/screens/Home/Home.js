import { useEffect, useState } from "react";
import { ScrollView, View, Image, ActivityIndicator } from "react-native";
import { AppText } from "components";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { db } from "../../config/firebase";
import { onValue, ref } from "firebase/database";

function HomeScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = ref(db, "DHT");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        if (Object.keys(data).length) {
          setData({
            temperature: data.temperature,
            humidity: data.humidity,
            heat_index: data.Heat_index,
          });
        } else {
          setData({
            temperature: 0,
            humidity: 0,
            heat_index: 0,
          });
        }
      }
      setLoading(false);
    });
  }, []);

  return (
    <View className="flex-1">
      <View className="px-5 py-3.5 flex flex-row items-center justify-between border-solid border-b-[1px] border-gray-200">
        <Image
          source={require("../../assets/uni-logo.png")}
          className="h-[45px] w-[45px] rounded-full bg-gray-100"
          style={{ resizeMode: "contain" }}
        />
        <View className="flex items-center">
          <AppText className="font-Bold text-[22px] text-black-700">
            Mango Orchard
          </AppText>
          <AppText className="font-Regular text-[14px] text-black-700">
            Weather Monitoring System
          </AppText>
        </View>

        <Image
          source={require("../../assets/mango-logo.jpg")}
          className="h-[45px] w-[45px] rounded-full bg-gray-100"
          style={{ resizeMode: "contain" }}
        />
      </View>
      {loading ? (
        <View className="flex items-center justify-center flex-1">
          <ActivityIndicator size="large" color="#FFD93A" />
        </View>
      ) : (
        <ScrollView className="flex-1 py-7 px-5">
          <View className="flex flex-col gap-5">
            <View className="py-5 px-6 rounded-[16px] bg-[#62ebfc] flex flex-row items-center">
              <View className="flex flex-1">
                <AppText className="font-Medium text-5xl text-black-700 mb-2">
                  {data?.temperature ? data.temperature.toFixed(2) : 0}
                </AppText>
                <AppText className="font-Regular text-[20px]">
                  Temperature
                </AppText>
              </View>
              <View className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center">
                <Ionic name="thermometer" size={28} />
              </View>
            </View>
            <View className="py-5 px-6 rounded-[16px] bg-[#84fcc9] flex flex-row items-center">
              <View className="flex flex-1">
                <AppText className="font-Medium text-5xl text-black-700 mb-2">
                  {data?.humidity ? data?.humidity : 0}
                </AppText>
                <AppText className="font-Regular text-[20px]">Humidity</AppText>
              </View>
              <View className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center">
                <Entypo name="air" size={28} />
              </View>
            </View>
            <View className="py-5 px-6 rounded-[16px] bg-[#FFD93A] flex flex-row items-center">
              <View className="flex flex-1">
                <AppText className="font-Medium text-5xl text-black-700 mb-2">
                  {data?.heat_index ? data?.heat_index.toFixed(2) : 0}
                </AppText>
                <AppText className="font-Regular text-[20px]">
                  Heat Index
                </AppText>
              </View>
              <View className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center">
                <Entypo name="light-up" size={28} />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default HomeScreen;
