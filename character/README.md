# Character Queries

This directory contains GraphQL queries and results for characters with IDs 1 to 4 from the Rick and Morty API.

Each `.graphql` file contains the query, and each corresponding `.json` file contains the API response.

# All Characters Query

This task fetches a paginated list of characters using the `characters(page: Int)` field.

Each `.graphql` file contains the query for a specific page (1–4), and the corresponding `.json` file contains the response from the Rick and Morty GraphQL API.

Each character includes:
- id
- name
- status
- image

