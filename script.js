fetch('https://included-moth-26.hasura.app/v1/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({
    query: `{
      users {
        id
        username
        statuses {
          text
          id
          created_at
        }
      }
    }`
  })
})
.then(data => data.json())
.then(data => console.log(data))