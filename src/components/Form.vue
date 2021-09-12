<template>
  <div>
    <form @submit="checkForm">
      <va-input type="text" class="mb-4 mr-4" label = "First Name" v-model="firstName" name="firstName"/>
      <p>{{errors[0]}}</p>
      <va-input type="text" class="mb-4 mr-4" label = "Last Name" v-model="lastName" :rules="[value=> (value && value.length === 0) || 'Field is Required']"/>
      <p>{{errors[1]}}</p>
      <va-input type="email" class="mb-4 mr-4" label = "Email" v-model="email"/>
      <va-input type="Password" class="mb-4 mr-4" label = "Password" v-model="password"/>
      <p>{{errors[3]}}</p>
      <va-select type="select" class="mb-4 mr-4" label = "Gender" :options="['Bangladesh', 'Japan']" v-model="country"/>
      <p>{{errors[4]}}</p>
      <va-input type="textarea" class="mb-4" label = "About Yourself" v-model="about"/>

      <va-button type='submit' >Submit</va-button>

    </form>
  </div>
</template>

<script lang="ts" setup>
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators';
import { useVuelidate } from '@vuelidate/core';


import { ref, computed } from 'vue';

let firstName = ref('');
let lastName = ref('');
let email = ref('');
let password = ref('');
let country = ref('');
let about = ref('');

let errors = ref(['', '', '','', ''])

const checkForm = (e)=>{
  
  if(firstName.value.length < 3){
    errors.value.splice(0,1,'First Name should be of at least 3 characters')
  }
  else{
    errors.value.splice(0,1,'')
  }

  if(lastName.value.length < 3){
    errors.value.splice(1,1,'Last Name should be of at least 3 characters')
  }
  else{
    errors.value.splice(1,1,'')
  }

  if(password.value.length < 5){
    errors.value.splice(3,1,'Password should be of at least 5 characters')
  }
  else{
    errors.value.splice(3,1,'')
  }

  // if(lastName.value.length < 3){
  //   errors.value.splice(1,1,'Last Name should be of at least 3 characters')
  // }

  if(country.value.length < 0){
    errors.value.splice(4,1,'Please Insert your country')
  }
  else{
    errors.value.splice(4,1,'')
  }

  console.log(errors)
  e.preventDefault();
}

</script>