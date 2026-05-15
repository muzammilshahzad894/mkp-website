export function getApiBaseUrl() {
  const config = useRuntimeConfig()
  return String(config.public.apiBaseUrl).replace(/\/$/, '')
}

export function buildApiUrl(path, params) {
  const base = getApiBaseUrl()
  const normalizedPath = path.replace(/^\//, '')
  const url = new URL(`${base}/${normalizedPath}`)

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }
  }

  return url.toString()
}

export function apiGet(path, params) {
  return $fetch(buildApiUrl(path, params))
}
