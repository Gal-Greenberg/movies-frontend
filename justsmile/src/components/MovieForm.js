
import React, { useState } from "react"
import { Form, Input, Rating, Button } from "semantic-ui-react"

export const MovieForm = ({onNewMovie}) => {
    const [name, setName] = useState("")
    const [rating, setRating] = useState(1)

    return (
        <Form>
            <Form.Field>
                <Input
                    placeholder="Movie name"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
            </Form.Field>

            <Form.Field>
                <Rating icon="star" value={rating} maxRating={5} onRate={(_, data) => {
                    setRating(data.rating)
                }} 
                />
            </Form.Field>

            <Form.Field>
                <Button
                    onClick={async () => {
                        const movie = {name, rating}

                        const response = await fetch("/add_movie", {
                            method: "POST",
                            headers: {
                                "Content_Type": "application/json"
                            },
                            body: JSON.stringify(movie)
                        })

                        if (response.ok) {
                            setName("")
                            setRating(1)
                            onNewMovie(movie)
                        }
                    }} > submit
                </Button>
            </Form.Field>
        </Form>
    )
}