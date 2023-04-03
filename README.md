# TTT_Test


## Test1
Write a simple FizzBuzz function, which should output a sequence of integers from 1 to 100 that returns “Fizz” for multiples of 3,  “Buzz” for multiples of 5, and “FizzBuzz” for multiples of both 3 and 5. 
This should result in something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz….

## Test1 Solution
function fizzBuzz(){
for(let i=1; i<=100; i++){
if(i % 15 === 0){
console.log("fizzBuzz")
}
else if (i % 3 === 0){
console.log("Fizz")
}else if(i % 5 === 0){
console.log("Buzz")
}else{
console.log(i)
}
}
}
console.log(fizzBuzz())


## Build
To Build a production Build
npm run build

## Dev
To Run the program on development use
npm run dev

## Start
To Run the program on production use
npm run start

## Routes
Get - http://localhost:4000
Post(Authentication) - http://localhost:4000/api/v1/auth/signup
Post(Authentication) - http://localhost:4000/api/v1/auth/signin
Protected Route(Admin Privilege with rate Limiter): Post http://localhost:4000/api/v1/transaction

## Env
Use this to run the test
PORT=
DB_URL=

//Stripe key not compulsory for the app to work
STRIPE_SECRET_TEST=
JWT_KEY=
JWT_ACCESS=ACCESS
JWT_REFRESH=REFRESH
JWT_ACCESS_TIME=
JWT_AUDIENCE=
JWT_ISSUER=
JWT_EXPIRY=600
JWT_REFRESH_TIME=600


## Hosted
The Project was hosted on Heroku and the Endpoint is https://fig-finance.herokuapp.com

## Routes
Get Events    - https://fig-finance.herokuapp.com/events?page=${page}&limit=${limit}

Search Events - https://fig-finance.herokuapp.com/event/category?category=${search}

##Test in Postman

Welcome 
<img width="1440" alt="Screenshot 2023-04-03 at 9 37 34 AM" src="https://user-images.githubusercontent.com/41308548/229457799-d3137226-18ff-46c9-a350-231d91071781.png">


SignUp
<img width="1440" alt="Screenshot 2023-04-03 at 8 57 27 AM" src="https://user-images.githubusercontent.com/41308548/229457976-670f1374-f1d0-414b-a322-4705db792a16.png">

SignIn Route
<img width="1440" alt="Screenshot 2023-04-03 at 8 57 33 AM" src="https://user-images.githubusercontent.com/41308548/229457887-487edc41-9ba5-40c9-a914-d720ea7c39e7.png">


Transaction Route
<img width="1440" alt="Screenshot 2023-04-03 at 8 57 40 AM" src="https://user-images.githubusercontent.com/41308548/229458077-7864d5a7-0997-469c-93d6-e4b298011d27.png">


Rate Limiter Working
<img width="1440" alt="Screenshot 2023-04-03 at 8 58 15 AM" src="https://user-images.githubusercontent.com/41308548/229458115-f5dd0464-bdbc-48d0-90eb-b2716eada177.png">
