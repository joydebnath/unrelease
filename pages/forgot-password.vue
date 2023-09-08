<template>
  <div class="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-sm space-y-10">
      <div>
        <ApplicationLogo class="mx-auto h-10 w-auto"/>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot your password?</h2>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div class="relative -space-y-px rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address" />
          </div>
        </div>
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset password</button>
        </div>
      </form>
      <p class="text-center text-sm leading-6 text-gray-500">
        Don't have an account?
        {{ ' ' }}
        <a href="/signup" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ApplicationLogo from '~/components/ApplicationLogo.vue';
</script>
