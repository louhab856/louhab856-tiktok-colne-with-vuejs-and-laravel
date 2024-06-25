import { useUserStore } from "../stores/user.";
import {useProfileStore} from '../stores/profile';
import {useGeneralStore} from '../stores/generale';



export default defineNuxtPlugin(()=>{
    return {
        provide : {
            userStore     : useUserStore(),
            profileStore  : useProfileStore(),
            generaleStore : useGeneralStore()
        }
    }
})

