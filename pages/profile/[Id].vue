<template>
    <MainLayout>
        <div class="pt-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 pr-2 w-[calc(100%-90px)] max-w-[1800px] 2xl:mx-auto">
            <div class="flex w-[calc(120vw-230)px]">
                <img class="max-w-[120px] rounded-full"
                src="https://fastly.picsum.photos/id/83/300/320.jpg?hmac=l9ZpmvOptn3rVS5tziPy5BPu72V9tbNc1O8mF1eW3E0">
                <div class="ml-5 w-full">
                    <div class="text-[30px] font-bold truncate">User Name</div>
                    <div class="text-[18px] truncate">User Name </div>
                    <button
                    @click="$event => $generaleStore.isLoginOpen = true"
                    class="flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px]  font-semi-bold border hover:bg-gray-100">
                        <Icon class="mt-0.5 mr-1" name="mdi:pencil" size="18"/>
                        <span>Edit profile</span>
                    </button>
                    <button
                    class="flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] text-white font-semi-bold border bg-[#F02C56]">
                        Follow
                    </button>
                </div>
            </div>
            <div class="flex items-center pt-4">
                <div class="mr-4">
                    <span class="font-bold" >10k</span>
                    <span class="text-gray-500 font-light text-[15px] pl-1.5"> Following</span>
                </div>
                <div class="mr-4">
                    <span class="font-bold" >10k</span>
                    <span class="text-gray-500 font-light text-[15px] pl-1.5"> Followers </span>
                </div>
                <div class="mr-4">
                    <span class="font-bold" >4k</span>
                    <span class="text-gray-500 font-light text-[15px] pl-1.5"> Likes </span>
                </div>
            </div>
            <div class="pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w[500px]">
                this a bio section
            </div>  
            <div class="w-full flex items-center pt-4  border-b">
                <div class="w-60 text-center py-2 text-[17px] font-semi-bold border-b-2 border-b-black">Videos</div>
                <div class="w-60 text-gray-500 text-center py-2 text-[17px] font-semi-bold">
                    <Icon name="material-symbols:lock-open" class="mb-0.5"/>Liked
                </div>
            </div>
            <div class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                <PostUser/>
            </div>
        </div>       
    </MainLayout>
</template>
<script setup>
    import MainLayout from '~/layouts/MainLayout.vue';
    import PostUser from '~/components/PostUser.vue'
    const {$generaleStore}=useNuxtApp();
    const isEditProfileOpen= ()=>{
        $generaleStore.isEditProfileOpen = true
    }
    const handleClick= ()=> {
        $generaleStore.isLogging = true
    console.log('this : ', $generaleStore.isEditProfileOpen )
    }

</script>