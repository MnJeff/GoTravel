import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "16.047199",
          tr_latitude: tr_lat ? tr_lat : "21.3999249521768",
          bl_longitude: bl_lng ? bl_lng : "108.219955",
          tr_longitude: tr_lng ? tr_lng : "108.224136",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "114cfd98aamsh05902f96577c893p187bd4jsn1b920e9e9b90",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (err) {
    return null;
  }
};
