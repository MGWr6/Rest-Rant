# Project REST-Rant
#### REST-Rant is an app where users can review restaurants.

## Planning
#### User Stories
#### TBD
#### Wireframes
#### TBD

## Routes

| Method | Path                       | Purpose                                          |
| :----- | :------------------------- | :----------------------------------------------- |
| GET    | `/`                        | Home Page                                        |
| GET    | `/places`                  | Places Index Page                                |
| POST   | `/places`                  | Create new place                                 |
| GET    | `/places/new`              | Form page for creating a new places              |
| GET    | `/places/:id`              | Details about a particular place                 |
| PUT    | `/places/:id`              | Update a particular place                        |
| GET    | `/places/:id/edit`         | Form page for editing an existing place          |
| DELETE | `/places/:id`              | Delete a particular place                        |
| POST   | `/places/:id/rant`         | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
| GET    | `*`                        | 404 page (matches any route not defined above)   |

## Database
#### Places

| Field    | Type   |
| :------- | :----- |
| Name     | string |
| City     | string |
| State    | string |
| Cuisines | string |
| pic      | string |