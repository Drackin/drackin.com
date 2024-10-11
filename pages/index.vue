<template>
    <div class="w-full h-full flex text-white justify-center items-center">
        <div class="flex w-7/10 rounded-xl items-center justify-center flex-col-reverse md:flex md:flex-row text-center md:text-start justify-evenly md:space-x-5 space-y-3 md:space-x-0">
            <main class="h-[60%] flex flex-col justify-center items-center md:items-start space-y-4 pt-3 md:pt-0">
                <p class="text-gray-300">Hi Everybody! I am</p>

                <h1 class="md:text-5xl text-4xl">Drackin</h1>

                <section class="md:w-96 w-12/10 backdrop-blur-sm">
                    <header class="w-full h-8 bg-black bg-opacity-40 rounded-t-xl flex space-x-1 items-center px-3">
                        <div v-for="color in colors" :class="`w-3 h-3 rounded-full ${color}`" />
                    </header>

                    <main class="w-full bg-black bg-opacity-20 p-3 rounded-b-xl text-start space-y-3">
                        <p class="text-blue-400 text-2xl">> $ whoami</p>

                        <p class="text-sm">
                            I'm 19 years old and I'm a Full-Stack Developer. I live in Izmir/Turkey. My hobbies are playing violin and guitar, sports and programming.
                        </p>
                    </main>

                </section>

            </main>

            <NuxtImg
                src="https://avatars.githubusercontent.com/u/78258229"
                alt="Drackin's Avatar"
                placeholder
                format="webp"
                class="md:w-[20rem] md:h-[20rem] w-60 h-60 rounded-xl"
            />
        </div>
    </div>
</template>

<script setup>
const colors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
]
</script>