# Teoretisk del
>Denna del svarar på de teoretiska frågorna vi fick inför inlämningsuppgift 1. För att se vad applikationen gör och hur man startar den så finns det en README.md inuti src mappen.

## Frågor
### Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar.<br>
>HTTP-protokollet används för att skicka en förfrågan och ta emot ett svar.<br>
**http://www.smp.se/kultur-noje** som exempel:<br>
**Metod:** GET,<br>
**Path:** /kultur-noje,<br>
**URI:** http://www.smp.se/kultur-noje,<br>
**Response Code:** 200 OK,<br>
**Body:** Hemsidans innehåll, HTML.

### Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
- **GET:** hämtar en viss typ av information beroende på vad det är för förfrågan som skickas. Förfrågningar med denna metod bör endast hämta data. Exempel så kan man hämta alla användare, eller en specifik användare.
- **POST:** denna metod används för att skicka information till servern som sedan uppdaterar i databasen. Exempel är när man vill skapa en ny användare så använder man POST.
- **PUT:** kan skapa eller ersätta information. När man använder PUT metoden så ersätter den allt. Därför behöver man skicka med hela objektet även om man bara vill ändra en sak.
- **PATCH:** kan skapa eller ersätter delar av informationen. Tillskillnad från PUT så ersätter inte Patch hela objektet utan ändrar bara det den matchar med. 
- **DELETE:** Tar bort information. Exempel, används när man vill ta bort användare.

### "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.
>URI = Uniform Resource Identifier. Delar den består av är: <br>
- http (scheme), 
- //localhost:3000 (authority), 
- /users (path), 
- ?username=something (queryn).

### På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.
- curl -i -X GET "localhost:2000/students" (path)
- curl -i -X GET "localhost:2000/students" -H "key":"value" (head)
- curl -i -X GET "localhost:2000/students/?name=Django" (query)

## Feedback
### Kursens takt
>I början av kursen kändes det som att kursens takt gick väldigt fort. Det var mycket ny information att ta till sig på en gång. Dock blev det lättare efter varje föreläsning eftersom man hade mer kunskap. Det hjälpte också att du hade Recaps för då hann man ta till sig informationen och kunde ta emot det på ett lättare sätt andra gången. 

>De två första veckorna kändes det som att det var väldigt mycket med övningsuppgifter och inlämningen. Det kändes som att det var mycket att göra men när man väl började med övningsuppgifterna så gick det rätt bra och man blev lugnare. 


### Kursmaterial
>Jag tycker att boken har varit bra (det jag läst) men det är också väldigt mycket information. Den var lite jobbig att läsa ibland. 

>Exempelkoden tycker jag var bra och blev ännu bättre när kommenterarna las till! Det hjälpte mig mycket att förstå helheten och förstå varje steg. Exempelkoden tycker jag var bättre än boken. Jag tyckte att det var bra att det var indelat i små delar, det var lättare att kunna förstå koden och se hur det byggdes upp stegvis.


### Format
>Jag personligen tycker att det är jobbigt med online kurser då jag föredrar att lära mig på plats. Dock har det gått mycket bättre än förväntat. 

>Inlämningsuppgift 1 tycker jag att du kunde förtydligat att man fick fria händer när det kom till frontend delen. Det är ovanligt för oss att inte ha riktlinjer på vad uppgiften ska innehålla för saker så man var lite osäker på vad som gällde här. Jag tycker dock att det varit en bra lärdom att man fick "tänka själv" och inte vara så beroende av riktlinjer inför uppgiften. 

>Kanske att man efter en timme tar en ca 10 minuters paus. Ibland har det varit väldigt långa pass med endast fem minuters paus eller mindre och man blir rätt trött i huvudet i efterhand. Detta har dock blivit bättre på senare tid :) Annars tycker jag att allt funkat rätt bra, det är jätteroligt men lite klurigt ibland. Tekniken har funkat och du hjälper en snabbt om man behöver hjälp eller har frågor vilket är väldigt bra!!
