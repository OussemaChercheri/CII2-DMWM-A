# API Documentation

## Get All Services

- **Endpoint:** `/api/services`
- **Method:** GET
- **Description:** Retrieves all touristic services.
- **Parameters:** None
- **Response:**
  - Status: 200 OK
  - Body: Array of service objects with details including category information.
- **Error Responses:**
  - Status: 500 Internal Server Error
    - Body: `{ "message": "Internal server error" }`

---

## Get Service by ID

- **Endpoint:** `/api/services/:id`
- **Method:** GET
- **Description:** Retrieves a specific touristic service by its ID.
- **Parameters:**
  - `id` (URL parameter): ID of the service to retrieve.
- **Response:**
  - Status: 200 OK
  - Body: Service object with details including category information.
- **Error Responses:**
  - Status: 404 Not Found
    - Body: `{ "message": "Service not found" }`
  - Status: 500 Internal Server Error
    - Body: `{ "message": "Internal server error" }`

---

## Create Service

- **Endpoint:** `/api/services`
- **Method:** POST
- **Description:** Creates a new touristic service.
- **Request Body:**
  ```json
  {
    "name": "Service Name",
    "description": "Service Description",
    "category": "Category ID",
    "image": "Image File",
    "document": "Document File"
  }
- **Response:**
   - Status: 200 ok
   - - Body: `{ "message": "Created service object" }`
- **Error Responses:**
   - Status: 400 Bad Request
     - Body: `{ "message": "Error details if the request is invalid." }`
   - Status: 500 Bad Request
     - Body: `{ "message": "Category not found." }`

---

## Update Service

- **Endpoint:** `/api/services/:id`
- **Method:** PUT
- **Description:** Updates an existing touristic service.
- **Parameters:**
  - `id` (URL parameter): ID of the service to update.
- **Request Body:**
  ```json
  {
    "name": "Updated Name",
    "description": "Updated Description",
    "category": "Updated Category ID",
    "image": "Updated Image File",
    "document": "Updated Document File"
  }
