<template>
  <div>
    <form @submit.prevent="checkForm">
      <va-input type="text" class="mb-4 mr-4" label = "First Name" v-model="firstName" name="firstName"/>
      <p v-if="status.firstName?.$error">Please Enter FirstName of minimum 3 characters</p>
      <va-input type="text" class="mb-4 mr-4" label = "Last Name" v-model="lastName"/>
      <p v-if="status.lastName?.$error">Please Enter LastName of minimum 3 characters</p>
      <va-input type="email" class="mb-4 mr-4" label = "Email" v-model="email" required/>
      <va-input type="Password" class="mb-4 mr-4" label = "Password" v-model="password"/>
      <p v-if="status.password?.$error">Please Enter Password of minimum 5 characters</p>
      <va-select type="select" class="mb-4 mr-4" label = "Country" :options="countries" v-model="country"/>
      <p v-if="status.country?.$error">Please Enter your country</p>
      <va-input type="textarea" class="mb-4" label = "About Yourself" v-model="about"/>
      <va-button type='submit' >Submit</va-button>

    </form>
  </div>
</template>

<script lang="ts" setup>

let firstName = ref('');
let lastName = ref('');
let email = ref('');
let password = ref('');
let country = ref('');
let about = ref('');

let status = ref('')

// let errors = ref(['', '', '','', ''])
// let countries = []

// console.log(countries)

const rules = computed(()=>({
  firstName: {
    required,
    minLength: minLength(3)
  },

  lastName: {
    required,
    minLength: minLength(3)
  },

  password: {
    required,
    minLength: minLength(5)
  },

  country: {
    required,
  },
}))

const checkForm = () =>{
  const $v = useVuelidate(rules, {firstName: firstName.value, lastName: lastName.value, password: password.value, country: country.value})
  $v.value.$touch();
  status.value = $v.value
  if(!$v.value.firstName.$error && !$v.value.lastName.$error && !$v.value.password.$error && !$v.value.country.$error){
    alert("Successfully signed up")
  }
}
</script>

<script lang= 'ts'>
import { useVuelidate } from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({

  data() {
    return {
      countries:[]
    }
  },
  async mounted(){
    let post  = await fetch(`https://restcountries.eu/rest/v2/all?fields=name`).then((r) => r.json())
    this.countries = post.map((item: { name: any; })=> item.name)
  }
})
</script>