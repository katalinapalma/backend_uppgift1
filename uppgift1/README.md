# BongBong
>Denna README.md beskriver vad applikationen gör och hur man startar den. Applikationen består av ett simpelt API som hanterar studenter. Man får en tabell med alla studenter som finns och man kan ta bort varje student om så önskas. Dock kan man även lägga till nya studenter med hjälp av ett formulär som finns under tabellen. 

## Hur startar man applikationen?
- Först behöver du klona eller ladda ner detta repo till din dator.
- Öppna mappen i valfri konsol, ex. Git Bash.
- Inuti konsolen skriver du **npm i** för att installera alla dependencies som behövs.
- När det är klart så kör du **npm start** i konsolen för att köra igång applikationen.
- Applikationen kommer att köras i localhost:3000.

## Jag vill komma åt backend, hur gör jag?
- För att komma åt backend behöver du gå in i **backend-mappen** i konsolen.
- När du är inuti mappen så skriver du **nodemon index.js**.
- Gå sedan in på localhost:2000 eller localhost:2000/students för att direkt komma till alla studenter som finns.

## Metoder som stöds i detta API är följande: 
- GET,
- POST, 
- PUT,
- DELETE

>Nedanför kommer några exempel på hur man använder dessa metoder. 

### GET
För att hämta alla studenter: <br>
`curl -i -X GET "localhost:2000/students"`<br>
Förväntad response code: 200 OK

För att hämta en student med hjälp av det unika id:et varje student får. Ersätt siffrorna med ett id från en student som finns i databasen:<br>
`curl -i -X GET "localhost:2000/students/5eb1d181fa4ede4480628c9f"`<br>
Förväntad response code: 200 OK

För att hämta en student med hjälp av namnet. Byt ut Django mot ett av användarnas namn som finns i databasen:<br>
`curl -i -X GET "localhost:2000/students/?name=Django"`<br>
Förväntad response code: 200 OK

### POST 
För att skapa en ny student: 
`curl -i -X POST "localhost:2000/students" -H "Content-Type: application/json; charset=utf-8" -d '{"name":"Mr. Cobb", "email":"inception@dreams.com", "address":{"street":"Dreamz", "city":"Dreamland", "zipcode":"56789"}}'`
Förväntad response code: 201 Created

### PUT
För att ersätta studentens information. **Viktigt!** att man har med varje egenskap som ska finnas med i objektet även om det bara är en del av informationen man vill ändra. Glöm inte att även skicka med studentens id.<br>
`curl -i -X PUT "localhost:2000/students/5eb1d181fa4ede4480628c9f" -H "Content-Type: application/json; charset=utf-8" -d '{"name":"Mia Wallace", "email":"uma@thurman.com", "address":{street":"Vincent", "city":"Vega", "zipcode":"88788"}}'`<br>
Förväntad response code : 200 OK<br>
Om du skapar nytt: 201 Created<br>
Om inget uppdaterades: 204 No Content

### DELETE 
För att ta bort en specifik student. Glöm inte att ersätta siffrorna med studentens unika id. 
`curl -i -X DELETE "localhost:2000/students/5eb2b9487ca6c03a1cd8c2f5"`
Förväntad response code: 200 OK

