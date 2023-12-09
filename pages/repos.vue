<template>
    <div class="h-full flex sm:items-center sm:overflow-auto">
        <section class="w-full flex-wrap flex justify-center sm:items-center">
            <a
                v-for="(repo, i) in repos"
                :href="repo.html_url"
                target="_blank"
                rel="noreferrer"
                class="flex items-center md:w-96 w-full hover:transition hover:duration-200 shadow hover:-translate-y-1 m-2 rounded-md h-36 mobile:m-2 opacity-0 repo"
                :key="i"
            >
                <aside
                    class="bg-[#011221] text-xl w-1/4 h-full flex flex-col items-center justify-center rounded-tl-md rounded-bl-md space-y-2"
                >
                    <Icon
                        :name="
                            repo.language
                                ? icons[repo.language as keyof typeof icons]
                                : 'fa-regular:sticky-note'
                        "
                    />

                    <p class="flex items-center space-x-1">
                        <Icon name="fa6-solid:star" class="text-base" />
                        <span>{{ repo.stargazers_count }}</span>
                    </p>
                </aside>
                <header
                    class="bg-white bg-opacity-10 w-3/4 h-full text-sm p-3 items-center justify-center rounded-tr-md rounded-br-md"
                >
                    <p class="text-lg">{{ repo.full_name }}</p>

                    <p class="text-sm">{{ repo.description }}</p>
                </header>
            </a>
        </section>
    </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const { data: repos } = await useFetch<any[]>(
    "https://api.github.com/users/Drackin/repos"
);

const icons = {
    JavaScript: "simple-icons:javascript",
    TypeScript: "simple-icons:typescript",
    Vue: "simple-icons:vuedotjs",
    "C#": "devicon-plain:csharp",
};

onMounted(() => {
    gsap.to(
        ".repo",
        {
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: 'power4.out',
        }
    );
});
</script>
