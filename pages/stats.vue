<template>
    <div class="h-full flex items-center pb-2">
        <section class="w-full max-h-full flex-wrap flex justify-center sm:items-center">
            
            <div v-if="lanyard" class="shadow transition m-2 hover:-translate-y-1 w-96 h-36 rounded-xl flex p-2 space-x-2 bg-white bg-opacity-10">
                <aside class="flex shrink-0 h-full items-center">
                    <NuxtImg :src="`https://cdn.discordapp.com/app-assets/${lanyard.application_id}/${lanyard.assets!.small_image}.png`" placeholder="/discord.svg" alt="Album Art" class="w-32 h-32 rounded-lg object-cover" />
                </aside>
                <header class="h-full w-full text-sm flex flex-col">
                    <p class="flex items-center">
                        Current Activity
                        <Icon name="simple-icons:discord" class="mx-1" />
                    </p>

                    <p class="text-lg font-semibold line-clamp-2">{{ lanyard.name }}</p>

                    <p class="text-sm whitespace-pre-line">{{ lanyard.details }}</p>

                    <p class="text-gray-300 text-sm whitespace-pre-line line-clamp-1">{{ lanyard.state }}</p>
                </header>
            </div>

            <div v-else class="shadow transition m-2 hover:-translate-y-1 flex flex-col items-center justify-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                <span class="font-semibold">Not Doing Anything</span>
                <span class="text-gray-300 text-sm">on Discord</span>
            </div>

            <div class="shadow transition m-2 space-y-2 hover:-translate-y-1 flex flex-col items-center justify-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                <p>WakaTime</p>
                <p class="font-semibold text-2xl">{{ (wakatime as any).text }}</p>
                <p>All Time Since Today</p>
            </div>

            <Suspense>
                <a
                    v-if="currentlyPlaying || recentlyPlayed"
                    :href="track?.link"
                    target="_blank" rel="noreferrer"
                    class="shadow transition m-2 hover:-translate-y-1 w-96 h-36 rounded-xl flex p-2 space-x-2 bg-white bg-opacity-10"
                >
                    <aside class="flex shrink-0 h-full items-center">
                        <NuxtImg :src="track?.coverArt" placeholder="/spotify.svg" alt="Album Art" class="w-32 h-32 rounded-lg object-cover" />
                    </aside>

                    <header class="h-full w-full text-sm flex flex-col">
                        <p class="flex items-center">
                            {{ spoti.isPlaying ? "Listening Now" : "Recently Played" }}
                            <Icon name="simple-icons:spotify" class="mx-1" />
                        </p>

                        <p class="font-semibold text-lg line-clamp-2">{{ track?.name }}</p>

                        <p class="text-sm text-gray-300 whitespace-pre-line">by {{ track?.artist }}</p>

                    </header>
                </a>

                <template #fallback>
                    <div class="shadow transition m-2 hover:-translate-y-1 w-96 h-36 rounded-xl flex p-2 space-x-2 bg-white bg-opacity-10">
                        <p>Loading...</p>
                    </div>
                </template>
            </Suspense>

            <Suspense>
                <div v-if="spoti.topAll" class="shadow transition m-2 p-2 hover:-translate-y-1 flex flex-col justify-between items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <section class="w-full flex justify-between h-6">
                        <button class="h-full" @click="previousTrack">
                            <Icon name="mdi-light:chevron-left" class="w-6 h-6" />
                        </button>

                        <p>Top Tracks</p>

                        <button @click="nextTrack">
                            <Icon name="mdi-light:chevron-right" class="w-6 h-6" />
                        </button>
                    </section>


                    <div class="top-tracks w-full h-24">
                        <div
                            class="flex items-center space-x-2 h-full relative"
                        >
                            <aside class="flex shrink-0 h-full items-center">
                                <NuxtImg :src="currentTrack?.coverArt" placeholder="/spotify.svg" class="h-24 w-24 rounded-lg" alt="Album Art" />
                            </aside>

                            <p class="h-full w-full whitespace-nowrap text-ellipsis overflow-hidden">
                                <span class="text-lg font-semibold">{{ currentTrack?.name }}</span>
                                <br />
                                <span class="text-sm text-gray-300">by {{ currentTrack?.artist }}</span>
                            </p>
                        </div>

                    </div>
                </div>

                <template #fallback>
                    <div class="shadow transition m-2 hover:-translate-y-1 w-96 h-36 rounded-xl flex p-2 space-x-2 bg-white bg-opacity-10">
                        <p>Loading...</p>
                    </div>
                </template>
            </Suspense>


            <Suspense>
                <div v-if="spoti.topAll" class="shadow transition m-2 p-2 hover:-translate-y-1 flex flex-col justify-between items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl">
                    <section class="w-full flex justify-between h-6">
                        <button class="h-full" @click="previousArtist">
                            <Icon name="mdi-light:chevron-left" class="w-6 h-6" />
                        </button>

                        <p>Top Artists</p>

                        <button @click="nextArtist">
                            <Icon name="mdi-light:chevron-right" class="w-6 h-6" />
                        </button>
                    </section>


                    <div class="top-artists w-full h-24 flex space-x-2">
                        <aside class="flex shrink-0 h-full items-center">
                            <NuxtImg id="spoti-img" :src="currentArtist?.image" placeholder="/spotify.svg" alt="Album Art" class="w-24 h-24 rounded-lg object-cover" />
                        </aside>

                        <header class="h-full w-full text-sm flex flex-col">

                            <p class="font-semibold text-lg line-clamp-2">{{ currentArtist?.name }}</p>

                            <p class="line-clamp-1 text-sm text-gray-300 capitalize">{{ currentArtist?.genres.join(", ") }}</p>

                        </header>
                    </div>
                </div>

                <template #fallback>
                    <div class="shadow transition m-2 hover:-translate-y-1 w-96 h-36 rounded-xl flex p-2 space-x-2 bg-white bg-opacity-10">
                        <p>Loading...</p>
                    </div>
                </template>
            </Suspense>

            <a href="https://openani.me" target="_blank" rel="noreferrer" class="shadow transition m-2 p-2 hover:-translate-y-1 flex items-center w-96 h-36 bg-white bg-opacity-10 rounded-xl space-x-2">
                <aside class="text-xl flex shrink-0">
                    <img src="https://avatars.githubusercontent.com/u/102548574?s=200&v=4" alt="Album Art" class="w-32 h-32 rounded-lg bg-neutral-800" />
                </aside>

                <header class="w-full h-full text-sm space-y-1 flex flex-col rounded-tr-md rounded-br-md">
                    <p class="text-lg font-semibold flex items-center">
                        <span>
                            OpenAnime
                        </span>
                        <Icon name="fa-solid:external-link-alt" class="mx-2 text-sm" />
                    </p>

                    <p class="text-sm whitespace-pre-line">OpenAnime is an open source anime platform and a project with my team.</p>

                </header>
            </a>
        </section>
        </div>
</template>

<script setup lang="ts">
import { useLanyard } from "~/utils/lanyard"
import gsap from "gsap";
const spoti = useSpotifyStore()
const lanyard = ref<Activity | null>(null)

const currentlyPlaying = computed(() => spoti.currentlyPlaying)
const recentlyPlayed = computed(() => spoti.recentlyPlayed)

const track = computed(() => currentlyPlaying.value || recentlyPlayed.value)

const currentTrackIndex = ref(0);
const currentTrack = ref(spoti.topAll?.tracks[0]);

const currentArtistIndex = ref(0);
const currentArtist = ref(spoti.topAll?.artists[0]);

onMounted(() => useLanyard({
    userId: "607507574018801664",
    onUpdate(presence) {
        lanyard.value = presence.activities.filter(activity => activity.id !== "custom" && activity.id !== "spotify:1")[0];
    },
}))


const nextTrack = () => {
    gsap.to(".top-tracks", {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            currentTrackIndex.value = (currentTrackIndex.value + 1) % spoti.topAll!.tracks!.length;
            currentTrack.value = spoti.topAll?.tracks[currentTrackIndex.value];
            gsap.to(".top-tracks", { opacity: 1, duration: 0.2 })
        }
    })
};

const previousTrack = () => {
    gsap.to(".top-tracks", {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            currentTrackIndex.value =
                (currentTrackIndex.value - 1 + spoti.topAll!.tracks!.length) % spoti.topAll!.tracks.length;
            currentTrack.value = spoti.topAll!.tracks[currentTrackIndex.value];
            gsap.to(".top-tracks", { opacity: 1, duration: 0.2 })
        }
    })
};

const nextArtist = () => {
    gsap.to(".top-artists", {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            currentArtistIndex.value = (currentArtistIndex.value + 1) % spoti.topAll!.artists!.length;
            currentArtist.value = spoti.topAll?.artists[currentArtistIndex.value];
            gsap.to(".top-artists", { opacity: 1, duration: 0.2 })
        }
    })
};

const previousArtist = () => {
    gsap.to(".top-artists", {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            currentArtistIndex.value =
                (currentArtistIndex.value - 1 + spoti.topAll!.artists!.length) % spoti.topAll!.artists.length;
            currentArtist.value = spoti.topAll!.artists[currentArtistIndex.value];
            gsap.to(".top-artists", { opacity: 1, duration: 0.2 })
        }
    })
};

const { data: wakatime } = await useFetch("/get-wakatime")

await spoti.isLoaded()

</script>