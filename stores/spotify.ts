/* --------------------------

MANY THANKS @d3r1n
https://github.com/d3r1n

-------------------------- */

import { ref } from 'vue'
import { Spotify, type TopAll, type Track } from '~/utils/spotify'
const env = import.meta.env

const spotify = new Spotify(env.VITE_SP_CLIENT_ID, env.VITE_SP_CLIENT_SECRET, env.VITE_SP_REFRESH_TOKEN)

export const useSpotifyStore = defineStore('spotify', () => {
    const isPlaying = ref<boolean>(false)
    const currentlyPlaying = ref<Track | null>(null)
    const recentlyPlayed = ref<Track | null>(null)
    const topAll = ref<TopAll | null>(null)

    // Intervals
    const intervalFn = async () => {
        // Refresh access token to prevent repeated refreshing
        // for parallel requests
        await spotify.refreshAccessToken()

        const playing = await spotify.getIsPlaying()
        const current = await spotify.getCurrentlyPlaying()
        const recent = await spotify.getRecentlyPlayed()
        const tops = await spotify.getTopAll()
        
        isPlaying.value = playing
        currentlyPlaying.value = current
        recentlyPlayed.value = recent
        topAll.value = tops
    }
    

    intervalFn()
    setInterval(intervalFn, 10000)

    // Async function that does not resolve until everything is loaded
    // Used in the Spotify component for Suspense
    // I know it's kinda hacky but it works :P
    // TODO: better solution?
    async function isLoaded(): Promise<void> {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                if (currentlyPlaying.value || recentlyPlayed.value) {
                    clearInterval(interval)
                    resolve()
                }
            }, 100)
        })
    }

    return {
        currentlyPlaying,
        isPlaying,
        recentlyPlayed,
        topAll,
        isLoaded
    }
})