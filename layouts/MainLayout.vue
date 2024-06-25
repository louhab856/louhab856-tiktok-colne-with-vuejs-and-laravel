<template>
    <div class="components">
        <TopNav/>
        <div :class="route.fullPath === '/' ? 'max-w-[1140px]' : ''"  class="flex justif-between mx-auto w-full lg:px-2.5 px-0 ">
            <div>
                <SideNavMain />
            </div>
        </div>
        <slot/>
    </div>
</template>
<script setup>
const route = useRoute()




</script>