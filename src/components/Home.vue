<script setup>

document.title = 'Repeat English - English exercices';

</script>

<template>
    <div class="bg-indigo-100 lg:h-screen">
        <div class="h-full flex flex-column justify-center items-center">
            <div>
                <img src="../../public/image/logo.svg" alt="logo" class="w-36 color-indigo-100" width="144px" height="144px">
            </div>
            <div>
                <h1 class="font-sans text-5xl font-bold pt-12 pb-16 text-center text-clip text-wrap">Free exercices to improve your english!</h1>
            </div>
            <div class="font-sans text-4xl text-center ">
                <ul class="flex justify-center flex-wrap gap-6 w-89">
                    <li class="flex flex-col justify-center items-center min-w-80 sm:w-4 rounded-xl p-16 bg-gradient-to-r from-indigo-400 to-blue-300">
                        <h2>Write</h2>
                        <span><img src="../../public/image/keyboard.svg" alt="keyboard icon" class="w-14 m-2"></span>
                    </li>
                    <li class="flex flex-col justify-center items-center min-w-80 sm:w-4 rounded-xl p-16 bg-gradient-to-r from-indigo-400 to-blue-300">
                        <h2>Check</h2>
                        <span><img src="../../public/image/done.svg" alt="done icon" class="w-14 m-2"></span>
                    </li>
                    <li class="flex flex-col justify-center items-center min-w-80 sm:w-4 rounded-xl p-16 bg-gradient-to-r from-indigo-400 to-blue-300">
                        <h2>Repeat</h2>
                        <span><img src="../../public/image/restart.svg" alt="restart icon" class="w-14 m-2"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

