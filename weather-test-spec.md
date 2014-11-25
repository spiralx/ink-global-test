## Weather Station Test

This test is to create a simple application that can pull data from a web service and display it to the user, it should take no more than a couple of hours.


#### API

Using the [Open Weather Map API](http://www.openweathermap.org/API) you can fetch data for cities around the world. Everything you need to know about how to call the service and what the data means is on that site.


#### The problem

Create a simple application that can show the user a selection of UK cities (London, Luton,  Manchester and Birmingham). Allow the user to select a city, show the weather information for that city (using the API).


You must display:

- Name of the city
- Location (longitude and latitude)
- The current weather conditions
- Icon for the weather conditions
- The temperate and temperature range
- The current atmospheric pressure
- The current humidity


Implement the following features:

- Ability to sort the cities by temperature in ascending & descending order
- Ability to select any city and display the details as described above
- Once the data has been displayed the user should be able to pick another city if they choose.


Design considerations

- Application of OO design best practises
- Demonstrate separation of concerns
- Well refactored code
- Code should be performant if scaled


#### Tips

Before starting please consider the following tips: 

- Follow a strict TDD approach
- Have an appreciation for separation of concerns 
- Include integration and acceptance tests
- DON’T PUT ALL TESTS IN ONE FILE, make sure they are modularised  
- Tests should be written for all classes
- Tests should be well separated with line breaks between: given/when/then etc... 
- Your code should be simple and not too bloated (i.e. DO NOT put everything in one class) 
- Your javascript code should be well organised and structured
- Write HTML and CSS in a way that demonstrates an understanding of semantic markup and responsive design.
- Your HTML code should be simple, clean and easy to read
- Do NOT use ExtJS when trying to create a responsive design across different browsers/platforms 


