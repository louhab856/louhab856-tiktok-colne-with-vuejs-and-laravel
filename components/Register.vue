<template>
    <div class="text-center text-[28px] mb-4 font-bold">Register </div>
    <!--Full name -->
    <div class="px-6 pb-1.5 text-[15px]">Full name </div>
    <div class="px-6 pb-2">
      <Textinput
        placeholder="full  name"
        v-model:input="name"
        inputType="text"
        :autoFocus="true"
        error=""
      />
      <span v-if="error" class="text-red-500 text-[14px] font-semibold">
        {{ error }}
      </span>
    </div>
  <!--Email: -->
  <div class="px-6 pb-1.5 text-[15px]">Email :  </div>
   <div class="px-6 pb-2">
     <Textinput
       placeholder="Email"
       v-model:input="email"
       inputType="email"
       :autoFocus="true"
       error=""
     />
     <span v-if="error" class="text-red-500 text-[14px] font-semibold">
       {{ error }}
     </span>
   </div>
  <!--Password: -->
  <div class="px-6 pb-1.5 text-[15px]">Password :  </div>
   <div class="px-6 pb-2">
     <Textinput
       placeholder="Password"
       v-model:input="password"
       inputType="password"
       :autoFocus="true"
       error=""
     />
     <span v-if="error" class="text-red-500 text-[14px] font-semibold">
       {{ error }}
     </span>
   </div>



    <!-- Confirm Password: -->
  <div class="px-6 pb-1.5 text-[15px]">Confirm Password :  </div>
   <div class="px-6 pb-2">
     <Textinput
       placeholder="confirm Password"
       v-model:input="confirmpassword"
       inputType="password"
       :autoFocus="true"
       error=""
     />
     <span v-if="error" class="text-red-500 text-[14px] font-semibold">
       {{ error }}
     </span>
   </div>


   <div class="px-6 pb-2 mt-6">
        <button 
            :disabled="(!email || !password || !name || !confirmpassword )"
            :class="(!email || !password || !name || !confirmpassword ) ? 'bg-gray-200' : 'bg-[#F02C56]'"
            @click="register()" 
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
        >
            Sing up
        </button>
    </div>


  </template>
  
<script setup>
  import { ref } from 'vue';
  const name = ref('');

  const email = ref('');
  const password = ref('');
  const confirmpassword = ref('');
  
  const error = ref(null);
  
  
</script>
  