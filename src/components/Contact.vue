<script>
</script>

<template>
    <div class="flex justify-center items-center h-16 border-b border-slate-300 bg-indigo">
        <router-link value="home" to="/">
            <img src="../../public/image/logo.svg" alt="" width="48px">
        </router-link>
    </div>

    <div class="flex flex-col justify-center items-center h-screen">
        <form action="" class="flex flex-col justify-center items-center bg-indigo-100 p-10 rounded-md">
            <label for="" class="">Name</label>
            <input type="text" class="w-96 h-14 m-4 text-xl bg-indigo-200 text-bg-indigo border-2 border-indigo-400">
            <label for="" class="">Email</label>
            <input type="text" class="w-96 h-14 m-4 text-xl bg-indigo-200 text-bg-indigo border-2 border-indigo-400">
            <label for="" class="">Text</label>
            <input type="text" class="w-96 h-14 m-4 text-xl bg-indigo-200 text-bg-indigo border-2 border-indigo-400">
            <input type="submit" value="Send" class="text-xl p-1 m-6 bg-indigo-400 text-bg-indigo border-2 border-indigo-300">
        </form>
    </div>
</template>