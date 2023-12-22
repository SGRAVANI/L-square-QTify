import axios from "axios";
export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";
export async function fetchTopAlbums()
{
    let url=`${BACKEND_ENDPOINT}/albums/top`
    try{
    let response=await axios.get(url)
    let data=await response.data;
    //console.log(data)
    return data
    }
    catch(e)
    {
    console.log(e)
    }
}
export async function fetchNewAlbums()
{
    let url=`${BACKEND_ENDPOINT}/albums/new`
    try{
    let response=await axios.get(url)
    let data=await response.data;
    //console.log(data)
    return data;

    }
    catch(e)
    {
    console.log(e)
    }
}
export async function fetchSongs()
{
    let url=`${BACKEND_ENDPOINT}/songs`
    try{
    let response=await axios.get(url)
    let data=await response.data;
   // console.log(data)
    return data
    }
    catch(e)
    {
    console.log(e)
    }
}

export async function fetchFilters()
{
    let url=`${BACKEND_ENDPOINT}/genres`
    try{
    let response=await axios.get(url)
    let data=await response.data;
    console.log(data)
    return data
    }
    catch(e)
    {
    console.log(e)
    }
}
