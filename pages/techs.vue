<template>
    <div class="h-full flex md:items-center">
        <section class="w-full flex-wrap flex justify-center md:items-center p-3">
            <a
                v-for="tech, i in techs"
                :href="tech.url"
                target="_blank"
                rel="noreferrer"
                class="flex items-center md:w-48 w-full shadow md:mx-2 my-2 rounded-md h-16 transition duration-200 hover:-translate-y-1"
                :key="i"
            >
                <aside class="bg-[#011221] text-xl w-1/3 h-full flex items-center justify-center rounded-tl-md rounded-bl-md">
                    <Icon :name="tech.icon" />
                </aside>
                <p class="bg-white bg-opacity-10 w-2/3 h-full text-sm flex items-center justify-center rounded-tr-md rounded-br-md">
                    {{ tech.tech }}
                </p>
            </a>
        </section>
    </div>
</template>

<script setup>
const techs = [
    {
        tech: "JavaScript",
        url: "https://developer.mozilla.org/en/docs/Web/JavaScript",
        icon: "simple-icons:javascript",
    },
    {
        tech: "Python",
        url: "https://python.org/",
        icon: "simple-icons:python",
    },
    {
        tech: "Java",
        url: "https://java.com/",
        icon: "fa6-brands:java",
    },
    {
        tech: "Kotlin",
        url: "https://kotlinlang.org",
        icon: "simple-icons:kotlin",
    },
    {
        tech: "C",
        url: "https://www.tutorialspoint.com/cprogramming/",
        icon: "devicon-plain:c",
    },
    {
        tech: "C++",
        url: "https://cplusplus.com/",
        icon: "devicon-plain:cplusplus",
    },
    {
        tech: "C#",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        icon: "devicon-plain:csharp",
    },
    {
        tech: "Rust",
        url: "https://rust-lang.org",
        icon: "simple-icons:rust",
    },
    {
        tech: "TypeScript",
        url: "https://typescriptlang.org/",
        icon: "simple-icons:typescript",
    },
    {
        tech: "HTML",
        url: "https://w3schools.com/html/",
        icon: "simple-icons:html5",
    },
    {
        tech: "SASS",
        url: "https://sass-lang.com/",
        icon: "simple-icons:sass",
    },
    {
        tech: "React.js",
        url: "https://reactjs.org/",
        icon: "simple-icons:react",
    },
    {
        tech: "Vue.js",
        url: "https://vuejs.org/",
        icon: "simple-icons:vuedotjs",
    },
    {
        tech: "Svelte",
        url: "https://svelte.dev/",
        icon: "simple-icons:svelte",
    },
    {
        tech: "Git",
        url: "https://git-scm.com/",
        icon: "simple-icons:git",
    },
    {
        tech: "GitHub",
        url: "https://github.com",
        icon: "simple-icons:github",
    },
    {
        tech: "Tailwind",
        url: "https://tailwindcss.com/",
        icon: "simple-icons:tailwindcss",
    },
    {
        tech: "VS Code",
        url: "https://code.visualstudio.com/",
        icon: "simple-icons:visualstudiocode",
    },
    {
        tech: "Next.js",
        url: "https://nextjs.org/",
        icon: "simple-icons:nextdotjs",
    },
    {
        tech: "Nuxt.js",
        url: "https://nuxtjs.org/",
        icon: "simple-icons:nuxtdotjs",
    },
    {
        tech: "Node.js",
        url: "https://nodejs.org/",
        icon: "simple-icons:nodedotjs",
    },
    {
        tech: "Photoshop",
        url: "https://www.adobe.com/products/photoshop.html",
        icon: "simple-icons:adobephotoshop",
    },
    {
        tech: "Premiere Pro",
        url: "https://www.adobe.com/products/premiere.html",
        icon: "simple-icons:adobepremierepro",
    }
];
</script>