import { gql } from "@apollo/client"

export const GET_ANIMALS = gql`
    query Animals {
        animals {
            id
            type
            name
            age
            nickname
            birthMonth
            image
        }
    }
`