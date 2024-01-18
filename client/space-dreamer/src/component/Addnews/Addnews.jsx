import React from 'react'
import { Container } from 'react-bootstrap';

const Addnews = () => {
    return (

        <Container>
            <div>
                <h1>Add news</h1>
                <form >
                <div class="mb-3">
                    <label for="coverImage" class="form-label">Title: </label>
                    <input type="file" class="form-control" id="coverImage" name="coverImage" aria-describedby="coverImage" />
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Title: </label>
                    <input type="text" class="form-control" id="title" name="title" aria-describedby="title" />
                </div>

                <div class="mb-3">
                    <label for="body">Body: </label>
                    <textarea name="body" id="body" class="form-control"></textarea>
                </div>

                <div class="mb-3">
                   <button class="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
        </Container>
    )
}

export default Addnews;