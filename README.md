# [Pokédex App](https://kevinlee6.github.io/pokedex/)

![Pokedex Homepage](./images/pokedex-home.png)

A Pokédex designed with mobile responsiveness in mind. Starts with 3 set Pokémon, but able to add more within the app via a hidden button in the pokéball. Utilizes API from [PokéAPI](https://pokeapi.co).

## Pokédex made possible with:

- HTML
- SCSS
  - Bootstrap
- Javascript
  - ES6 Modules
  - Promises and Async/Await
  - Fetch API
- PokéAPI.co's API

## Information available from Pokédex app:

- Name/ID
- HP
- Attack
- Defense
- Abilities
- Type
- Sprite
- Moves
- Height
- Weight

## To run locally

- Clone repo
- Due to CORS issue with ES6 modules, you'd have to run it as a server
  - example: in command line / in project directory with python:
  ```
  python3 -m http.server 3000
  ```
  - then navigate to localhost:3000 in web browser

App available through [https://kevinlee6.github.io/pokedex/](https://kevinlee6.github.io/pokedex/)
