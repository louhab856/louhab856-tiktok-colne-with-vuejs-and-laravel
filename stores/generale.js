import { defineStore } from "pinia";

export const useGeneralStore = defineStore('generale', {
    state : ()=>({
        isLogging: '',
        isEditProfileOpen: '',
        SelectPost : '',
        ids : '',
        isBackUrl : '',
        postes: '',
        suggested: '',
        following: '',


    }),
    actions: {

    }
    
})