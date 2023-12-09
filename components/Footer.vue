<template>
    <footer class="hidden z-[99] w-full h-10 border-t border-gray-800 md:flex justify-between items-center font-fira text-[#607B96]">
        <aside class="flex h-full">

            <p class="border-r text-sm border-gray-800 h-full flex items-center justify-center px-10">
                i am here:
            </p>

            <div class="flex items-center text-sm h-full">
                <NuxtLink
                    v-for="footer, i in footers"
                    :href="footer.url"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="footer"
                    class="border-r border-gray-800 px-7 h-full flex items-center hover:border-b-2 hover:border-b-orange-500 justify-center hover:text-white transition duration-200"
                    :key="i"
                >
                    <Icon :name="footer.icon" />
                </NuxtLink>
            </div>
        </aside>

        <NuxtLink
            href="/go/github"
            rel="noreferrer"
            target="_blank"
            class="md:flex items-center justify-center hidden px-5 border-l border-gray-800 h-full hover:text-white transition duration-200 hover:border-b-2 hover:border-b-orange-500"
        >
            <Icon name="simple-icons:github" />
            <p class="pl-2">@Drackin</p>
        </NuxtLink>
    </footer>
</template>

<script setup>
const footers = [
    {
        url: "/go/x",
        icon: "simple-icons:x",
    },
    {
        url: "/go/instagram",
        icon: "simple-icons:instagram",
    },
    {
        url: "/go/linkedin",
        icon: "simple-icons:linkedin",
    },
    {
        url: "/go/discord",
        icon: "simple-icons:discord",
    },
    {
        url: "mailto:contact@drackin.com",
        icon: "simple-icons:maildotru",
    },
];
</script>