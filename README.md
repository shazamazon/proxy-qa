# Shazamazon Proxy and Q&A Functionality

### About

<a href="https://github.com/shazamazon/modules-qa">Shazamazon Q&A</a> is one component of a full stack, responsive, e-commerce portal delivered as an app built on microservices architecture, and inspired by Amazon.

It was built as part of a <a href="https://github.com/shazamazon">e-commerce product page MVP</a> but can be used as a stand-alone product questions&answers component or combined with other services/components to create a full e-commerce site.

In addition to the Q&A section, I also developed this proxy to bring all the distributed microservices together, whose developers are listed below.

### Contributors

Q&A service and proxy developed by <a href="https://github.com/Jibbscript">Jibbscript</a>, other components to the full e-commerce site devloped by:

 <a href="https://github.com/jkcryptolock">jkcryptolock</a> - Cart and Footer

<a href="https://github.com/SeanMcCarthy3223">SeanMcCarthy3223</a> - NavBar and Search

<a href='https://github.com/JeffSalinas'>JeffSalinas</a> - Carousel

<a href='https://github.com/Jibbscript'>Jibbscript</a> - Q&A

<a href='https://github.com/jxkim'>jxkim</a> - Product Images

<a href='https://github.com/ArohanD'>ArohanD</a> - Product Ratings

<a href='https://github.com/wiggitywhitney'>wiggitywhitney</a> - Product Description

### Tech Stack

_Shazamazon Cart Service_ was built primarily with ReactJS on the front end, Node/Express on the backend, and MongoDB for the database.

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://cloud.mongodb.com/static/images/mdb_logo.svg" width='100'/>

### Technical Challenges / Research

Some unexpected issues I ran into while building this app:

1. Replicating Amazon's styling in Vanilla CSS and React.js without the use of pre-built component libraries.

2. Deciding whether to use a broadcast channel, or custom event dispatch and listeners for 

#### User Stories

- As a User, I should be able to see the questions asked of the current product.
- As a User, I should be able to see the corresponding answers to each product question.
- As a User, I should be able to expand the list of viewable questions/answers.
- As a User, I should be able to upvote or downvote questions/answers.
- As a User, I should be able be able to see the current number of questions answered for the current product on the Product Description.

### Minimum Viable Product (MVP)

The MVP of the app displays all questions and answers with the ability to vote on each. The MVP displays a mock search-bar for Q&A filtering and renders Q&As based on the current product being viewed.

### How the App Works

Behind the scenes, the app collects data from each product page in the form of questions, answers, and their authors and stores the data in Mongo, thereby enabling querying based upon the current product id.

When imported as a script to a page and given a div with an ID of 'qa-app', _Shazamazon QA_ renders a complete Q&A section to the page via React.js

It also communicates to the Product Description by sending the current quantity of questions stored for the current Product on page reload, which updates the number of questions displayed in the Product Description.

The proxy imports the javascript and css files for each microservice from their respective EC2 instance servers, and inserts them into a single HTML page based upon their React Div IDs. Custom Events are created and dispatched to individual event listeners in each component to update the product view for each component.
