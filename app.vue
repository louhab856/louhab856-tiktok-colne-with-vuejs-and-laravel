<template>
    <NuxtPage/>
    <AuthOverLay  v-if="$generaleStore.isLoginOpen"/>
    <EditProfileOverLay  v-if="$generaleStore.isEditProfileOpen"  />
</template>
<script setup>
const {$generaleStore}=useNuxtApp();

</script>