<template>
  <div class="home">
    <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
              <v-row>
                <v-col
                  v-for="n in 3"
                  :key="n"
                  cols="12"
                  lg="4"
                  sm="12"
                >
                  <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="overline mb-4">OVERLINE</div>
                        <v-list-item-title class="headline mb-1"
                          >Headline 5</v-list-item-title
                        >
                        <v-list-item-subtitle
                          >Greyhound divisely hello coldly
                          fonwderfully</v-list-item-subtitle
                        >
                      </v-list-item-content>

                      <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                      ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                      <v-btn text :to="{path: '/edit-entry'}" target="_blank">
                        <v-icon>mdi-pencil</v-icon>
                        Edit</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
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
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <v-bottom-sheet persistent
    attach hide-overlay="false" v-model="sheet">
      <v-sheet class="text-center">
          <v-row align="center" justify="end">
            <v-col cols="12" sm="3">
              <v-btn icon color="indigo">
                <v-icon>mdi-camera</v-icon>
                Take picture
              </v-btn>
            </v-col>
          </v-row>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
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
    getObject() {
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
