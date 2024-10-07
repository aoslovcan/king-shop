## Before starting

Create a .env file with VITE_API_URL="https://dummyjson.com" variable.

### `npm install`

After creating .env file, you run this command to install all necessary libraries.

## Available Scripts

### `npm run dev`
Starts the development server using.

### `npm run lint`
Start the command which is checking styles of code which is defined by eslint.

### About app

When the application starts, the home page opens, displaying a list of products, a filter section, and a header with a search option.

Filtering: You can filter products by adjusting the price range or selecting any of the available categories. The filtering is performed on the frontend without making an API call.
Sorting: Products can be sorted by selecting one of the available sorting options. This triggers an API call to retrieve the sorted data from the backend.
Search: You can search for products by entering a keyword. The search is triggered after the user has typed at least two characters. This action will call an API that returns products matching the search query.
To view more details about a product, you can click the "See More" button, which opens a modal displaying the product details. In this modal, you can add the product to the cart.

Cart Management: Cart data is stored in the session storage, so it will be lost if the browser window is closed. The functionality for adding, deleting, and rendering cart data is handled through React Context and a Provider component.
The app also includes a login feature. Upon logging in, tokens are stored in session storage. If needed, a "Remember Me" option can be added to store tokens in local storage for persistent sessions.

All API management is handled using RTK Query and Redux. The component styling is done using Tailwind CSS.


