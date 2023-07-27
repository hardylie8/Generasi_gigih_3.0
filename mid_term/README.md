# Gigih play

For the mid-term project in Generasi Gigih 3.0, the goal is to create an interactive live shopping platform that enables users to engage in live shopping events, explore a variety of products, and actively participate by posting comments during the live sessions.

## Database Structure

![Alt text](/mid_term/readmeAsset/Untitled.png)

Reference inside the database

- User can have multiple comment

- Video can have multiple comment

- Video can have multiple Products

## Run Locally

Clone the project

```bash
  git clone https://github.com/hardylie8/Generasi_gigih_3.0.git
```

Go to the project directory

```bash
  cd Generasi_gigih_3.0/mid_term
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Api Structure

In this project, the application handles API requests from different routes. These routes define the endpoints that the application exposes for clients to interact with the API. Each route corresponds to a specific URL path and an associated HTTP method (e.g., GET, POST, PUT, DELETE) that defines the type of action to be performed on the server.

Before executing any actions, incoming requests are first intercepted and checked by middleware functions. For example, in the application there is a middleware that is used to verify whether a user is authenticated before granting access to certain parts of the application. Another example is validation middleware. This middleware is utilized to validate user input and ensure that it adheres to specific criteria or requirements.

After being validated by the middleware the request is then being handled by controller, service and repository.

The controller is responsible for handling user requests and generating responses. It receives incoming requests from the client.
The controller does not contain business logic but serves as a coordinator between the client and the service layer. It calls the appropriate functions in the service layer, and generates responses to be sent back to the client.
After receiving data from the service layer, the controller formats the data into JSON.

The service layer is where the business logic resides. It contains functions that implement the application's business rules, perform computations, and coordinate data processing.
When the controller calls a function from the service, the service performs necessary business logic operations on the input data.

The repository is responsible for interacting with the database. It contains functions that handle data access operations like querying, updating, deleting, and inserting data into the database. The service layer calls functions from the repository to perform CRUD operations or retrieve data from the database.

Overview

- User send request to server
- The middleware validates the request (if middleware exists on that requests)
- The controller calls a relevant function in the service layer, passing the necessary input data.
- The service layer processes the data, applies business logic, and interacts with the repository to fetch or modify data from the database.
- The repository accesses the database, performs the required operations, and returns the results to the service layer.
- The service layer processes the data further, assembles the final result, and returns it to the controller.
- The controller formats the response in JSON or another appropriate format and sends it back to the user.

## Api Reference

#Users

- User object

```
{
    _id: integer
    username: string
    password: string
    email: string
    created_at: datetime(iso 8601)
    updated_at: datetime(iso 8601)
}

```

## **Post api/auth/login**

User login endpoint.

- **URL Params**  
  None
- **Data Params**

```
{
    email       : String,
    password    : String
}
```

- **Headers**  
  None
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message : "login success",
    data    : {
        token: String
    }
}
```

## **Post api/auth/Register**

User Register endpoint.

- **URL Params**  
  None
- **Data Params**

```
{
    email       : String,
    Username    : String,
    password    : String
}
```

- **Headers**  
  None
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message : "register success",
    data    : {
        token: String
    }
}
```

#Video

- Video object

```
{
    _id: integer
    title: string
    thumbnailUrl: string
    embeddedComponent: string
    created_at: datetime(iso 8601)
    updated_at: datetime(iso 8601)
}
```

## **GET api/video**

Returns video in the system.

- **URL Params**
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `page` | `integer` | **optional**. Page number of the results to fetch. |
  | `limit` | `integer` | **optional**. The number of results per page (max 100). |

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message : "data has been successfully retrieved "
    data    : {
        docs:[
            {<video_object>},
            {<video_object>},
        ],
        totalDocs: integer,
        limit: integer,
        totalPages: integer,
        page: integer,
        pagingCounter: integer,
        hasPrevPage: boolean,
        hasNextPage: boolean,
        prevPage: integer,
        nextPage: integer
    }
}
```

## **GET /video/:id**

Returns the specified user.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message : "data has been successfully retrieved "
    data    : <video_object>
}
```

## **Post api/video**

Creates a new Video and returns the new object.

- **URL Params**  
  None
- **Data Params**

```
{
    title             : String,
    thumbnailUrl      : String,
    embeddedComponent : String
}
```

- **Headers**  
  None
- **Success Response:**
- **Code:** 201  
  **Content:**

```
{
    message : "data has been successfully created",
    data    : <video_object>
}
```

#Product

- Product object

```
{
    _id       : integer
    title     : string
    price     : integer
    url       : string
    videoId   : string
    created_at: datetime(iso 8601)
    updated_at: datetime(iso 8601)
}
```

## **GET api/product**

Returns all product from a video.

- **URL Params**
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `page` | `integer` | **optional**. Page number of the results to fetch. |
  | `limit` | `integer` | **optional**. The number of results per page (max 100). |
  | `videoId` | `string` | **required**. The number of results per page (max 100). |

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message : "data has been successfully retrieved "
    data    : {
        docs:[
            {<product_object>},
            {<product_object>},
        ],
        totalDocs: integer,
        limit: integer,
        totalPages: integer,
        page: integer,
        pagingCounter: integer,
        hasPrevPage: boolean,
        hasNextPage: boolean,
        prevPage: integer,
        nextPage: integer
    }
}
```

## **Post api/product**

Creates a new Product and returns the new object.

- **URL Params**  
  None
- **Data Params**

```
{
    title     : string,
    price     : integer,
    url       : string,
    videoId   : string
}
```

- **Headers**  
  None
- **Success Response:**
- **Code:** 201  
  **Content:**

```
{
    message : "data has been successfully created",
    data    : <product_object>
}
```

#Comment

- Comment object

```
{
    _id       : integer
    userId    : string
    videoId   : string
    message   : string
    created_at: datetime(iso 8601)
    updated_at: datetime(iso 8601)
}
```

## **GET api/comment**

Returns all Comment from a video.

- **URL Params**
  | Parameter | Type | Description |
  | :-------- | :------- | :------------------------- |
  | `page` | `integer` | **optional**. Page number of the results to fetch. |
  | `limit` | `integer` | **optional**. The number of results per page (max 100). |
  | `videoId` | `string` | **required**. The number of results per page (max 100). |

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    message : "data has been successfully retrieved "
    data    : {
        docs:[
            {<comment_object>},
            {<comment_object>},
        ],
        totalDocs: integer,
        limit: integer,
        totalPages: integer,
        page: integer,
        pagingCounter: integer,
        hasPrevPage: boolean,
        hasNextPage: boolean,
        prevPage: integer,
        nextPage: integer
    }
}
```

## **Post api/comment**

Creates a new Comment and returns the new object.

- **URL Params**  
  None
- **Data Params**

```
{
    title     : string,
    price     : integer,
    url       : string,
    videoId   : string
}
```

- **Headers**  
  Authorization: Bearer `<OAuth Token>`
- **Success Response:**
- **Code:** 201  
  **Content:**

```
{
    message : "data has been successfully created",
    data    : <comment_object>
}
```
