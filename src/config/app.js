// 服务器 http://172.16.97.180:18080
// const root = '/lx'
// const root = '/smartdevice';
export const IS_MOCK = false
export const API_BASE_URL = IS_MOCK ? '/mock/' : (process.env.NODE_ENV === 'development' ? 'http://172.16.98.68:8090' : 'http://172.16.98.68:8088')
export const TOKEN_KEY = 'X-Token'
export const HISTORY_KEY = 'History-Key'
