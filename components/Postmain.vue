<template>
    <div  class="flex border-b py-6">
        <div class="cursor-pointer">
            <img class="rounded-full max-h-[60px]" width="60" 
            src="https://fastly.picsum.photos/id/83/300/320.jpg?hmac=l9ZpmvOptn3rVS5tziPy5BPu72V9tbNc1O8mF1eW3E0">
        </div>
        <div class="pl-3 w-full px-4">
            <div class="flex items-center justify-between pb-0.5">
                <button >
                    <span class="font-bold hover:underline cursor-pointer">
                        User Name
                    </span>
                    <span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer">
                       Use Name
                    </span>
                </button>
                <button class="border text-[15px] px-[21px] py-0.5 border-[#F02C56] text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md">
                    Follow
                </button>
            </div>
            <div class="text-[15px] pb-0.5 break-words md:max-w[400] max-w-[300px]">
                    this some text
            </div>
            <div class="text-[14px] text-gray-500 pb-0.5" >Fun cool supperAwsomme </div>
            <div class="text-[14px] pb-0.5 flex items-center font-semibold">
                <Icon name="mdi:music" size="17"/>
                <div class="px-1">Origin sound Awsome </div>
                <Icon size="20" name="❤️"/>
            </div>
            <div class="mt-2.5 flex">
                <div class="relative min-h-[480px] mx-h-[580] max-w-[260] flex items-center bg-black rounded-xl cursor-pointer">
                    <video 
                    ref="video"
                    loop
                    muted
                    src="/public/the_first_video.mp4"></video>
                    <img 
                        class="absolute right-2 bottom-14" 
                        width="90" 
                        src="~/assets/images/tiktok-logo-white.png"
                    >
                </div>
                <div class="relative mr-[75px]">
                    <div class="absolute bottom-0 pl-2">
                        <div class="pb-4 text-center">
                            <button
                  
                                class="rounded-full bg-gray-200 p-2 cursor-pointer"
                            >
                                <Icon 
                                    name="mdi:heart" 
                                    size="25" 
                                    color="#F02C56"
                                />
                            </button>
                            <span class="text-xs text-gray-800 font-semibold">31</span>
                        </div>

                        <div class="pb-4 text-center">
                            <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                                <Icon name="bx:bxs-message-rounded-dots" size="25"/>
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">43</span>
                        </div>

                        <div class="text-center">
                            <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                                <Icon name="ri:share-forward-fill" size="25"/>
                            </div>
                            <span class="text-xs text-gray-800 font-semibold">55</span>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>

<script setup>
    let video = ref(null)
    onMounted(()=>{video.value.play()})
</script>