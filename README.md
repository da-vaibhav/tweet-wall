# tweet-wall

To build this project run `npm install` then `npm run build` then to run `npm start`.

If search doesn't work, check the api endpoint in index.js file declared as variable `baseUrl`;

If search query yeilds some result, it saves the response date in localStorage, and then when the same query is made again, it loads the data, without making a network request.
