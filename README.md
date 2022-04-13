# SIMPLE ECOMMERCE

This project implements an API consumption [https://fakestoreapi.com/](https://fakestoreapi.com/).

It has 3 pages with beautiful designs (inspired in [https://www.mercadolibre.com](https://www.mercadolibre.com)):

* Home: Shows all API products
* ProductDetail: Shows a detail of a selected product
* About: Shows information about me

### Features:
* Project was implement in **React using TypeScript**
* It is possible to mark as a favorite by clicking on the red heart.
* When the application is initialized, a random time is assigned to each product. When the time expires, it is not possible to navigate to its corresponding detail page. If you are on the details page, when the time is up, you will be redirected to the home page.
* To reset all counters, just refresh the page.

### How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run db`
Runs the local db, only if API is offline. You should change https://fakestoreapi.com by http://localhost:3001 in .env file to make it work.
