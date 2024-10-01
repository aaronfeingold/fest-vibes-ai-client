import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAPI } from "../axiosAPI";

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // get req to AWS API gateway, calls Lambda scrapper python function
  async () => {
    if (process.env.REACT_APP_DEV_ENV === "development") {
      try {
        // const response = await fetch("/data.json"); // Fetch the local JSON file
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        // const json = await response.json(); // Parse the response body as JSON
        // return json.data;
        throw new Error("Forced API error");
      } catch (error) {
        throw error;
      }
    }
    try {
      const response = await axiosAPI.get("/");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching from API:", error);
      throw error;
    }
  }
);
