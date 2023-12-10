<template>
    <nav class="w-full h-10 border-b border-gray-800 flex items-center justify-between text-[#607B96] z-50 relative">
        <div class="flex items-center text-sm h-full">
            <NuxtLink
                href="/"
                class="md:border-r border-0 pl-5 md:w-56 pr-5 text-sm border-gray-800 h-full flex items-center transition duration-200 hover:text-white hover:border-b-2 hover:border-b-orange-500"
            >
                drackin.com
            </NuxtLink>

            <NuxtLink
                v-for="nav, i in navs"
                :href="nav.link"
                :key="i"
                :class="
                    $route.path === nav.link
                        ? 'border-r border-gray-800 hidden px-7 h-full md:flex items-center justify-center text-white border-b-2 border-b-orange-500 transition duration-200'
                        : 'border-r border-gray-800 hidden px-7 h-full md:flex items-center justify-center hover:border-b-2 hover:border-b-blue-500 hover:text-white transition duration-200'
                "
            >
                {{ nav.name }}
            </NuxtLink>
        </div>

        <div class="md:flex w-44 items-center hidden text-sm h-full border-l justify-center border-gray-800 ">
            <a
                href="/go/spotify"
                class="h-full w-full flex space-x-2 items-center hover:border-b-2 hover:border-b-blue-500 justify-center hover:text-white transition duration-200"
                target="_blank"
                rel="noreferrer"
            >
                <Icon name="simple-icons:spotify" class="text-lg" />
                <p>spotify</p>
            </a>
        </div>

        <button
            class="md:hidden flex p-5 h-full items-center"
            @click="handleClick"
        >
            <Icon :name="!menuOpen ? 'solar:hamburger-menu-linear' : 'uil:times'" class="text-2xl" />
        </button>

        <nav ref="mobileNav" class="hidden absolute top-10 right-0 w-full backdrop-blur-xl z-50" style="height: calc(100vh - 2.5rem);">
            <div class="w-full h-full flex flex-col justify-between">
                <main class="flex flex-col text-base w-full text-white justify-between">
                    <NuxtLink
                        v-for="nav, i in navs"
                        :href="nav.link"
                        :key="i"
                        @click="handleClick"
                        :class="
                            $route.path === nav.link
                            /* if path equals to item's name */
                            ? 'border-b border-l-2 py-3 border-gray-800 pl-5 w-full flex items-center border-l-orange-500 hover:text-white transition duration-200'
                            : 'border-b hover:border-l-2 py-3 border-b-gray-800 pl-5 w-full flex items-center hover:border-l-blue-500 hover:text-white transition duration-200'
                        "
                    >
                        {{ nav.name }}
                    </NuxtLink>
    
                    <a
                        href="/go/spotify"
                        target="_blank"
                        rel="noreferrer"
                        class="border-b hover:border-l-2 py-3 border-b-gray-800 pl-5 w-full flex items-center space-x-2 hover:border-l-blue-500 hover:text-white transition duration-200"
                    >
                        <Icon name="simple-icons:spotify" class="text-lg" />
                        <span>spotify</span>
                    </a>
                </main>
    
                <footer class="h-10 flex w-full border-t border-gray-800 items-center justify-between">
                    <a
                        v-for="footer, i in footers"
                        :href="footer.url"
                        :key="i"
                        target="_blank"
                        rel="noreferrer"
                        class="md:w-[20%] flex w-full justify-center border-l border-gray-800 h-full items-center"
                    >
                        <Icon :name="footer.icon" />
                    </a>
                </footer>
            </div>

        </nav>
    </nav>
</template>

<script setup lang="ts">
import gsap from 'gsap';
const menuOpen = ref(false)
const mobileNav = ref<HTMLElement | null>(null)

const handleClick = () => {
    const screenWidth = window.innerWidth;

    if(!menuOpen.value)
        gsap.fromTo(
            mobileNav.value,
            {
                x: screenWidth,
            },
            {
                x: 0,
                duration: 0.5,
                display: 'block',
                ease: 'power2.out',
            },
        );
    else
        gsap.to(mobileNav.value, {
            x: screenWidth,
            duration: 0.5,
            display: "none",
            ease: 'power2.out',
        });

    menuOpen.value = !menuOpen.value
}

const navs = [
    {
        name: "about",
        link: "/",
    },
    {
        name: "techs",
        link: "/techs",
    },
    {
        name: "repos",
        link: "/repos",
    },
    {
        name: "stats",
        link: "/stats",
    },
];

const footers = [
    {
        url: "https://twitter.com/s_gmss35",
        icon: "simple-icons:x",
    },
    {
        url: "https://instagram.com/9gmss",
        icon: "simple-icons:instagram",
    },
    {
        url: "https://linkedin.com/in/drackin",
        icon: "simple-icons:linkedin",
    },
    {
        url: "https://discord.com/users/607507574018801664",
        icon: "simple-icons:discord",
    },
    {
        url: "mailto:contact@drackin.com",
        icon: "simple-icons:maildotru",
    },
];
</script>