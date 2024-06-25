<template>
    <div class="w-[100] relative  flex justify-center">
        <div 
        :class="errorType ?  'visible' : 'invisible' "
        class="absolute top-6 z-50 mx-auto bg-black bg-opacity-70 text-white px-14 py-4 rouded-sm">
            {{ error }} 
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['errorType'])
const {errorType} = toRefs(props);
let error = ref('');
watch(()=>errorType.value , ()=>{
    
    if(errorType.value = 'caption'){
        error = 'Maximum is 150 caracteres' 
    }
    else if(errorType.value = 'bio'){
          error = 'Maximum 80 caracteres'
    } else if(errorType.value = 'file'){
        error = 'Unsuported file , use MP4 unsted' 
    }
})
</script>