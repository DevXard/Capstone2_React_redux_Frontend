# Tecnologies

## Backend
* Node.js
* Express
* PostgreSQL
* JsonWebToken
* bcrypt
* cors
* cookie-parser
* Node pg

## Frontend
* React.js
* Redux / ReduxToolkit
* Axios
* React Router Dom
* JsonWebToken
* Universal Cookies
* TailwindCSS
* react-google-maps

# Type Of Application

> This is going to be a MobileFrendly web page

# Goal 

> The goal of this application is to provide People who 
> grow there owne food with a marketplace and costumers
>   who whant to consume localy grown fruits, vegitables, and other.

# Demographic

### Costumers
* People Interested in Supporting localy grown produce
* People who would like to eat fresh from farm

### Sellers
* People who would like to get in to Gardning or Farming
* People with gardens or farms that would like to expand or look at diferent oportunities

# Data 

### User Data
* Name
* Email
* password
* location (as reference)
* address (for delivery optional)
* phone (optional)

### Sellers Data
* Name
* Email
* Phone
* Password
* address
* location (long, lat)


### Products Data
* type 
* quantity
* date
* price


# API

### Google Maps
> Using google maps i will load closest sellers of certin
> 
> product in x miles/km. 
>
> Using Nominatim maps will get long lat from sellers addres for free
> and avoid google paid geocoding api
> 
> Google maps will be used in multiple components. to give information Of
> product or user location

# Database

### Schema

![image info](./public/Screenshot_6.png)

# Expected difficulties

### Nominatim Api
* Getting turning adresses into long lat coordinates

### Google Api
* Loading markers in to google maps using long lat 

# Security

> Security will use bcrypt on the backend to encript passwords
> Front end will have an JWT token held in memory
> Refresh token will be used to refresh the main token and it will be
> held in cookies as HTTPOnly cookie for security purposes.
> On expiration Bouth tokens will be refreshed

# Functionaliry

* Show buyers closest sellers and there Products
* ability to search for products
* Ability to become a seller 
* Abiliti to create orders
* Ability to vew orders as a seller
* Ability to vew orders as a buyer
* Adding items to sell

# User flow

> When someone visits the web site he will be greated with
> a search bar and different products and see product detiles
> People that have rgistered will have the ability to purchese items from sellers and pick them up or get delivery if avalible.
> Users of the website will have the ability to become a seller and registeer there owne products.
> When user is looking at details page they will be able to see the distance to the seller and get route using google maps.