<template>
  <div>
    <v-card flat>
      <h1>Edit Entry form</h1>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items.tab"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      rules: [
        (value) => !value || value.size < 2000000 || 'Picture size should be less than 2 MB!',
      ],
      sheet: true,
      tab: null,
      items: [
        { tab: 'Browse', content: 'Tab 1 Content' },
        { tab: 'Create', content: 'Tab 2 Content' },
      ],
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  components: {},
  methods: {
    getContent() {
      axios.get('api__here')
        .then((response) => {
          console.info(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>

</style>
