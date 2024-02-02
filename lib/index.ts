/* eslint-disable no-return-await */
import { Navigation } from "$types";
import { joinUrl } from "$util";
import axios from "axios";

export async function getNav() {
  return (await axios.get<Navigation[]>(joinUrl(process.env.NEXT_PUBLIC_API_URL, "navigation"))).data;
}
