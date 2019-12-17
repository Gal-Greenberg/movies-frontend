
import React from "react"
import { List, Header, Rating } from "semantic-ui-react"

export const Movies = ({ movies }) => (
    <List>
        {movies.map(movie => (
            <List.Item key={movie.name}>
                <Header>{movie.name}</Header>
                <Rating rating={movie.rating} maxRating={5} disabled/>
            </List.Item>
        ))}
    </List>
)