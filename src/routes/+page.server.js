import fetchJson from "$lib/fetch-json.js"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/53'
  const persons = await fetchJson(url)

  return {
    persons: persons.data
  }
}
