export const fetchJsonId = async (tail) => {
    return await fetch(`${process.env.HASURA_HOST}${process.env.HASURA_API_ORIGIN}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
             query MyQuery($tailName: String!) {
                long_tails(where: {tail: {_similar: $tailName}}) {
                    json_id
                }
            }
            `,
                variables: {
                    tailName: tail
                },
            })
        }
    )
}