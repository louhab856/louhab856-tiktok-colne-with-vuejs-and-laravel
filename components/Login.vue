<template>
    <div class="text-center text-[28px] mb-4 font-bold">Log in </div>

    <div class="px-6 pb-1.5 text-[15px]">Email Address</div>
    <!--email-->
    <div class="px-6 pb-2">
      <Textinput
        placeholder="Email Address"
        v-model:input="email"
        inputType="email"
        :autoFocus="true"
        error=""
      />
      <span v-if="error" class="text-red-500 text-[14px] font-semibold">
        {{ error }}
      </span>
    </div>

    <!--password-->
    <div class="px-6 pb-1.5 text-[15px]">Password</div>

    <div class="px-6 pb-2">
      <Textinput
        placeholder="Passwword"
        v-model:input="password"
        inputType="password"
        :autoFocus="true"
        error=""
      />
      <span v-if="error" class="text-red-500 text-[14px] font-semibold">
        {{ error }}
      </span>
    </div>


      <!-- forget password-->

    <div class="px-6 text-[12px] text-gray-600">Forget a password ?</div>


 
    <div class="px-6 pb-2 mt-6">
        <button 
            :disabled="(!email || !password)"
            :class="(!email || !password) ? 'bg-gray-200' : 'bg-[#F02C56]'"
            @click="login()" 
            class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
        >
            Log in
        </button>
    </div>

  </template>
  
<script setup>
  import { ref } from 'vue';
  const email = ref('');
  const password = ref('');
  const error = ref(null);
  
  
</script>
  