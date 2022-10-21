import { BASE_URL } from "../constants"

export const fetchFromApi = async (param: string) =>{
   const responsePromise = await fetch(BASE_URL + param);
   const response = await responsePromise.json();
return response;
}