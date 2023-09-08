export default defineEventHandler((event) => {
  setCookie(event, 'XSRF_TOKEN', 'd43d7dbd-5472-4c19-98aa-0bc3fb5854c2', )
  return {
    token: 'd43d7dbd-5472-4c19-98aa-0bc3fb5854c2',
    timestamp: Math.round(Date.now()/1000) + 86400
  }
})
