export const QUERY_UPDATE = 'QUERY_UPDATE'

export function updateQuery(queryString) {
  return {
    type: QUERY_UPDATE,
    payload: { queryString },
  }
}
