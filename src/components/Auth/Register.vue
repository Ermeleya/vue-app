<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="dark"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>
    
               
              </v-toolbar>
              <v-card-text>
                <v-form ref="form"
                  v-model="valid"
                  lazy-validation>

                  <v-text-field 
                    label="Email"
                    name="email"
                    type="email"
                    v-model="email"
                    :rules="emailRules">
                    </v-text-field>
                    
                 

                  <v-text-field
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                  />
                   <v-text-field
                    label="Confirm password"
                    name="confirm-password"
                    type="password"
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                  />
                 
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="dark" @click="onSubmit" :disabled="!valid">Create Account</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ,
      ],
      passwordRules: [
         value => !!value || 'Required.',
        value => (value && value.length >= 6)
      ],
      confirmPasswordRules: [
       value => !!value || 'Required.',
       value => value === this.password || 'Password should match'
      ],
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
const user = {
  email: this.email,
  password: this.password
}
      }
      console.log(user)
    }
  }
  }


</script>