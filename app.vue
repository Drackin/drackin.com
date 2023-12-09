<template>
    <main class="wl h-screen flex justify-center items-center">
        <NuxtLoadingIndicator
            :throttle="0"
            :duration="3000"
            color="repeating-linear-gradient(to right, #3b82f6 0%, #ec4899 50%, #a855f7 100%)"
        />
        <div class="w-[100vh] md:w-full rotate-90 fixed md:rotate-0 -z-1">
            <img src="/bg.svg" class="w-full blur-[100px] md:blur-[175px]" alt="">
        </div>
        <div class="w-full h-full">
            <Navbar />
            <div class="w-full px-2" id="main" style="height: calc(100% - 5rem)">
                <NuxtPage />
            </div>
            <Footer />
        </div>
    </main>
</template>

<style>
@media (min-width: 768px) {
    #main {
        height: calc(100% - 2.5rem);
    }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-to,
.page-leave-from {
    opacity: 1;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
