import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID yogMvFAi76EO4-zoevIQDbGj-JsqO2CcpTbZSiKEjks",
  },
});
