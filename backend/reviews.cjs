import axios from "axios";

export const getReviewsData = async () => {
  const API_KEY = "AIzaSyDSHJmVivmIDxSR1gbAbWIX_K8Rvpts9Ss";
  const PLACE_ID = "ChIJ77qXCOop1i0RVjjzSwnVEJ0";
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}`);

    if (response.data.status === "OK") {
      const reviews = response.data.result.reviews;
      return reviews.filter((e) => {
        return e.rating >= 4;
      });
    } else {
      console.error("Failed to fetch reviews:", response.data.status);
      return [];
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};
