// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@unocss/nuxt", "nuxt-icon", "@nuxt/image", "@pinia/nuxt"],
    css: ["@unocss/reset/tailwind.css", "~/assets/main.css"],
    image: {
        ipx: {
            maxAge: 60 * 60 * 1000
        }
    },
    app: {
        head: {
            title: "Drackin",
            link: [
                {
                    rel: "icon",
                    href: "https://avatars.githubusercontent.com/u/78258229",
                },
            ],
            meta: [
                { name: "theme-color", content: "#3b82f6" },
                { name: "author", content: "Drackin" },
                { name: "description", content: "Hello! I'm Drackin. I'm a Developer & Violinist & Athlete. This is My Personal Website. I Love Coding." },
                { property: "og:title", content: "Drackin" },
                { property: "og:site_name", content: "drackin.com" },
                { property: "og:image", content: "/banner.png" },
                { property: "og:description", content: "Hello! I'm Drackin. I'm a Developer & Violinist & Athlete. This is My Personal Website. I Love Coding." },
                { name: "keywords", content: "Drackin, drackin, drackin best, Drackin Best, github drackin, ess, portfolio, developer, blog drackin, drackin blog, blog, ess web, drackin website, drackin site, drackin me, drackin.com" }
            ],
            htmlAttrs: {
                lang: "en"
            },
        },
        pageTransition: { name: "page", mode: "out-in" }
    },
});
