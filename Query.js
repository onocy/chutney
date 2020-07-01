export default function queryFetch(query, variables) {
  return fetch("http://10.0.2.2:3000/graphql/marketplace", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  }).then((res) => res.json());
}
