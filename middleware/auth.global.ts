export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data } = await useFetch('/api/auth',)
    console.log(data.value);
    
    const isAuthenticated = true
    if (isAuthenticated && ['/signin', '/signup'].some((val) => to.path == val)) {
        return navigateTo('/dashboard')
    }

    if (!isAuthenticated) {
        return navigateTo('/signin')
    }
    console.log('hello from auth');
})