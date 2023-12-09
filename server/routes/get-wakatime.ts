import { encode } from "js-base64"

export default defineEventHandler(async (event) => {
    const res = await $fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
        headers: {
            Authorization: `Basic ${encode(process.env.VITE_WT_API_KEY as string)}`,
        }
    })
    
    return (res as any).data
})