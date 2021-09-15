<template>
  <div>
    <form @submit.prevent="checkForm">
      <!-- <ValidateEach></ValidateEach> -->
      <va-input type="email" class="mb-4 mr-4" label = "Email" v-model="email"/>
      <va-input type="Password" class="mb-4 mr-4" label = "Password" v-model="password"/>
      <p>{{errors[3]}}</p>

      <va-button type='submit' >Submit</va-button>

    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';



let email = ref('');
let password = ref('');

let errors = ref(['', ''])

// const rules = computed(()=>({
//   firstName: {
//     required,
//     minLength: minLength(3)
//   }
// }))

// const v$ = useVuelidate(rules, {firstName})

const checkForm = (e: any)=>{
  

  if(password.value.length < 5){
    errors.value.splice(3,1,'Password should be of at least 5 characters')
  }
  else{
    errors.value.splice(3,1,'')
  }

  // v$.value.$touch();
  // console.log(v$.value.$touch())
  
}

</script>