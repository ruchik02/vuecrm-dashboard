<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 rounded-lg">
          <v-row>
            <v-col cols="12" class="primary lighten-2 py-4">
              <v-card-title class="text-center justify-center">
                <h1 class="text-h4 font-weight-bold white--text">Welcome Back</h1>
              </v-card-title>
            </v-col>
          </v-row>
          
          <v-card-text class="pt-8">
            <v-form @submit.prevent="handleLogin" ref="form">
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
              />

              <div class="d-flex justify-space-between align-center mt-2 mb-6">
                <v-checkbox
                  v-model="rememberMe"
                  label="Remember me"
                  color="primary"
                  hide-details
                />
                <v-btn text color="primary" class="px-4">
                  Forgot Password?
                </v-btn>
              </div>

              <v-btn
                block
                x-large
                color="primary"
                elevation="2"
                rounded
                type="submit"
                :loading="loading"
              >
                Sign In
              </v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-center pb-6">
            <span class="text-body-2">Don't have an account?</span>
            <v-btn text color="primary" class="px-2" @click="$router.push('/signup')">
              Sign Up
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginLayout',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      rememberMe: false,
      loading: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters'
      ]
    }
  },
  methods: {
    async handleLogin() {
      if (!this.$refs.form.validate()) return

      this.loading = true
      try {
        // TODO: Implement login logic here
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Login failed:', error)
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
</style> 