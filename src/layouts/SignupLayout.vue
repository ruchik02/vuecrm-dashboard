<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 rounded-lg">
          <v-row>
            <v-col cols="12" class="primary lighten-2 py-4">
              <v-card-title class="text-center justify-center">
                <h1 class="text-h4 font-weight-bold white--text">Create Account</h1>
              </v-card-title>
            </v-col>
          </v-row>
          
          <v-card-text class="pt-8">
            <v-form @submit.prevent="handleSignup" ref="form">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="firstName"
                    label="First Name"
                    prepend-inner-icon="mdi-account"
                    :rules="nameRules"
                    required
                    outlined
                    class="mb-4"
                  />
                </v-col>
                
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    prepend-inner-icon="mdi-account"
                    :rules="nameRules"
                    required
                    outlined
                    class="mb-4"
                  />
                </v-col>
              </v-row>

              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                type="email"
                :rules="emailRules"
                required
                outlined
                class="mb-4"
              />
              
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
                required
                outlined
                class="mb-4"
              />

              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                prepend-inner-icon="mdi-lock-check"
                :type="showPassword ? 'text' : 'password'"
                :rules="confirmPasswordRules"
                required
                outlined
              />

              <v-checkbox
                v-model="agreeToTerms"
                :rules="[v => !!v || 'You must agree to continue!']"
                required
              >
                <template v-slot:label>
                  <div>
                    I agree to the
                    Terms of Service
                    and
                    Privacy Policy
                  </div>
                </template>
              </v-checkbox>

              <v-btn
                block
                x-large
                color="primary"
                elevation="2"
                rounded
                type="submit"
                :loading="loading"
              >
                Sign Up
              </v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-center pb-6">
            <span class="text-body-2">Already have an account?</span>
            <v-btn text color="primary" class="px-2" @click="$router.push('/login')">
              Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignupLayout',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      agreeToTerms: false,
      loading: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 50 || 'Name must be less than 50 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters',
        v => /\d/.test(v) || 'Password must contain at least one number',
        v => /[A-Z]/.test(v) || 'Password must contain at least one uppercase letter',
        v => /[a-z]/.test(v) || 'Password must contain at least one lowercase letter'
      ]
    }
  },
  computed: {
    confirmPasswordRules() {
      return [
        v => !!v || 'Please confirm your password',
        v => v === this.password || 'Passwords do not match'
      ]
    }
  },
  methods: {
    async handleSignup() {
      if (!this.$refs.form.validate()) return

      this.loading = true
      try {
        // TODO: Implement signup logic here
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Signup failed:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}

.v-btn {
  text-transform: none;
  font-weight: 600;
}

.min-width-0 {
  min-width: 0 !important;
}
</style> 