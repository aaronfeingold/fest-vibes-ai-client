import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAPI } from "../axiosAPI";

export const fetchArtistEvents = createAsyncThunk(
  "aes/fetchArtistEvents",
  // get req to AWS API gateway, calls Lambda scrapper python function
  async () => {
    try {
      const response = await axiosAPI.get("/ajf-live-re-wire");
      return response.data.body.data;
    } catch (error) {
      console.error("Error fetching from API:", error);
      throw error;
    }
  }
);
