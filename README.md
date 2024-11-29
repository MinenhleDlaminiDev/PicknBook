# Pick 'n Book
### Video Demo: 
### Description: Pick 'n Book is an e-commerce platform designed to make buying second-hand textbooks a smooth and efficient experience. Built with Express JS it ensures fast data retrieval, enabling customers to quickly browse and purchase books. The platform features a cart and ordering system that makes the entire buying process seamless, from browsing to checking out. Each customer has a personalized profile allowing them to track their orders and interact with the site more easily. With its clean user-friendly interface Pick 'n Book is focused on improving the online textbook shopping experience. <br /> For the front-end development I used ReactJS to build the user interface, leveraging JSX for structuring components. React’s component-based architecture allowed me to create reusable pieces of UI making the development process more efficient. To style the components I used TailwindCSS which is a utility-first CSS framework that enabled me to quickly design a responsive and visually appealing layout. This approach made the platform both easy to use and visually consistent across all pages. <br /> To retrieve and display data I utilized the Fetch API, which allowed me to make RESTful API calls to get information like user profiles and books from the database. This made it possible for customers to view their profiles as well as access their order history when they log in. I also used Fetch to update the cart and track customer orders ensuring that everything is saved correctly in the database. Each time a customer logs in their previous order information is fetched from the database and displayed on their profile. <br /> Managing the application’s state across various components was another challenge that I addressed with the Context API and reducers. The Context API allowed me to share state across all components making it easy to manage global variables like user profiles, book data, and access tokens. With reducers I could control how state changes in response to actions such as updating the list of books after applying a filter or sorting option. This system kept the data consistent and synchronized throughout the platform. <br /> For filtering and sorting the books I used the Context API to ensure users could easily find what they were looking for. The books are sortable by price (from highest to lowest or vice versa) and by rating (starting from 4 stars or more). I also implemented filtering options that allow customers to view only books that are in stock or books that are bestsellers. These filtering options made the shopping experience more personalized and efficient helping users find exactly what they wanted faster. <br /> To improve site navigation I implemented React Router which allows users to switch between different pages without refreshing the whole site. This made the app feel faster and more responsive as it behaves like a single-page application. Additionally I stored the user's theme preference (light or dark mode) and their authentication token in local storage. This way when users return to the site it remembers their last theme choice ensuring a consistent experience across sessions. <br /> For security I used JSON Server Auth to create an authentication system. When users register they receive a unique token that is stored in the database alongside their personal details. This token is used to validate whether a user is logged in granting them access to restricted pages such as the cart, checkout, and order history. Without a valid token the system will not recognize the user as registered ensuring that only authenticated users can access their private data and make purchases. I also implemented custom routes using JSON to manage this token validation further securing the platform. <br /> One important feature of the platform is the search functionality which helps users find specific books. I implemented search using the useRef hook to remember the search terms and the useNavigate hook to dynamically show search results based on the query entered. This search feature works by using URL query parameters allowing users to easily navigate to books that match their search criteria. <br /> To improve the user experience I created a custom useTitle hook to manage page titles dynamically. This hook allows each page to have its own unique title which changes as users navigate through the site. Without this hook all pages would share the same title but this solution helps keep the app organized. <br /> Customer orders are saved in their profiles in the database ensuring that users can track their order history no matter which device they are using. When a user logs out their authentication token is deleted from the local storage and the site no longer recognizes them as logged in. This locks any pages that require authentication, such as the cart or checkout pages until they log in again. <br /> Overall Pick 'n Book is designed to be a fast, secure, and user-friendly platform for buying second-hand textbooks. With a focus on seamless navigation, personalized profiles, and a smooth checkout process, the platform aims to make the textbook shopping experience as easy as possible for every customer.
