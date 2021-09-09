<template>
  <div>
    <form @submit="checkForm">
      <va-input type="text" class="mb-4 mr-4" label = "First Name" v-model="firstName" name="firstName"/>
      <va-input type="text" class="mb-4 mr-4" label = "Last Name" v-model="lastName" :rules="[value=> (value && value.length === 0) || 'Field is Required']"/>
      <va-input type="email" class="mb-4 mr-4" label = "Email" v-model="email"/>
      <va-input type="Password" class="mb-4 mr-4" label = "Password" v-model="password"/>
      <va-select type="select" class="mb-4 mr-4" label = "Gender" :options="['Bangladesh', 'Japan']" v-model="country"/>
      <va-input type="textarea" class="mb-4" label = "About Yourself" v-model="about"/>

      <va-button type='submit' >Submit</va-button>

    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let firstName = ref('');
let lastName = ref('');
let email = ref('');
let password = ref('');
let country = ref('');
let about = ref('');

let errors = ref([])

function checkForm(e){

  e.preventDefault();
  // console.log(errors.value)
  // if(!firstName){
  //   errors.value.push("firstName is required")
  // }

  // const data = { firstName, lastName, email, password, country, about }
  // console.log(data)
  // e.preventDefault();
  // alert("form submitted")
}

</script>