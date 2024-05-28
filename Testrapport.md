# ----------------------------------
# .: T E S T R A P P O R T :.
# ----------------------------------

## - INTRODUKTION - 

Syftet med testerna är att testa ett fullt fungerande API,
både manuellt och automatiskt med Mongo DB Atlas.

Användning av Postman för att testa, utveckla och dokumentera
API:er.

Populering av databasen sker med hjälp av Faker.js som 
är ett JavaScript-bibliotek som används för att generera
stora mängder dummydata.

## - TESTMÅL - 

Skriv fullt fungerande kod i Visual Studio Code.

Kontrollera att mongoose connection-sträng fungerar felfritt.

Populera en databas i Mongo DB Atlas med hjälp
av en seedDB.js-fil som seedar dummydata.

Dokumentation som är övergripande och välorganiserad.

Skriv en testrapport som är detaljerad och beskriver
testprocessen.

Gör en README.md-fil som fungerar som en "How To"
för att använda sig av testerna.

Manuella samt automatiska tester i Postman.

## - TESTPLAN - 

Val av API tema.

Genomgång av kod i Visual Studio Code så jag kan connecta
till Mongo DB Atlas och köra CRUD-API:er
(Create, Read, Update och Delete) i Postman.

Skriftligen anteckna utkast till kommande
dokumentation och testrapport.

Utöka manuella och automatiska tester utifrån
givna riktlinjer.

Skapa seedDB.js-fil och populera databasen med
hjälp av Faker.js.

Skapa filer för dokumentation, testrapport
och README.md samt lägga till information.

Fixa en länk till min Postman-collection.

## - MANUELLA TESTER -

### 1. Verify that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request.

MOTIVERING: 
Manuellt testa och felsöka att förfrågan får korrekt statuskod 200.
Kontroll av att hämta alla böcker och författare i databasen.

TESTPROCESS:
Skapade GET-requester för både books och authors.

FÖRVÄNTNING:
Att testernas förfrågningar ska ge korrekt statuskod 200.

RESULTAT:
Statuskod 200.

### 2. Check if the API returns the expected data format (e.g., JSON, XML) in the response.

MOTIVERING:
Manuellt testa och felsöka samt kontrollera att headers har rätt dataformat.

TESTPROCESS:
Skapade en GET-request för books och får manuellt kolla av i headers att önskat dataformat finns.

FÖRVÄNTNING:
Att det i headers ska finnas att Content-Type är application/json; charset=utf-8.

RESULTAT:
Det finns i headers:
Content-Type är application/json; charset=utf-8.

### 3. Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request.

MOTIVERING:
Manuellt testa ogiltiga endpoints och se till att det visas korrekt statuskod av 400.
 
TESTPROCESS:
Jag skrev in ogiltiga id:n i URL-adresser i GET-requesterna.

FÖRVÄNTNING:
Att det visas korrekt statuskod av 400.

RESULTAT:
Det visas statuskod 400.

### 4. Test if the API returns the correct data when querying with specific filters or search criteria.

MOTIVERING:
Testa ifall sökning via filter eller sökkriterier ger väntat utfall.

TESTPROCESS:
Jag testar senaste bok och författaren genom att söka och sortera fram via egen endpoint i VSC.

FÖRVÄNTNING:
Se de senaste objekten i databasen av respektive typ (bok + författare).

RESULTAT:
Jag kunde se de senaste objekten i databasen av respektive typ (bok + författare).

### 5. Verify that the API returns paginated results when a large number of records are requested.

MOTIVERING:
Kontroll av visning av antal resultat per sida. Motverka en lång lista vid för många objekt i databasen.

TESTPROCESS:
Skapade en egen endpoint som gör:
Val av sidnummer. Om sidnummer inte specificeras så är standardvalet 1.
Val av antal böcker att hämta per sida. Standardval är 10.
Sorteringsfält där "_id" är satt som standard.
Sorteringsalternativ där 'asc'(stigande ordning) är satt som standard.
Beräkning av antal dokument i boksamlingen i databasen.
Beräkning av totala antalet sidor baserat på totala antalet böcker
och limit av antal böcker per sida.
Beräkning av antal böcker att hoppa över baserat på sidnummer och
limit av antal böcker per sida.
 
FÖRVÄNTNING:
Att testet visar antal sidor, sidgräns och alla objekt i databasen (i detta fallet antal böcker).

RESULTAT:
Testet visar antal sidor, sidgräns och alla böcker i databasen.


### 6. Check if the API handles special characters and non-English text correctly in input data and returned responses.

MOTIVERING:
Manuell kontroll av specialtecken och icke-engelska ord.

TESTPROCESS:
Jag lade manuellt in ett objekt innehållandes specialtecken och ryska kyrilliska tecken ("Российская Федерация###"). Sökning sker via korrekt
URL-adress för titel.

FÖRVÄNTNING:
Att testet ska visa rätt objekt med korrekt titel.

RESULTAT:
Testresultatet visar rätt objekt med korrekt titel.

### 7. Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency.

MOTIVERING:
Har lite svårt att se hur man kan göra detta test helt manuellt. 
Kontroll av hur koden hanterar många förfrågningar/förfrågningar för att motverka krascher.

TESTPROCESS:
Genom att loopa igenom antalet förfrågningar för att hämta
både böcker och författare så testar vi förväntade responser
för att säkerställa flera samtidiga förfrågningar.
Ändra värdet på "numberOfRequests" efter eget tycke.

FÖRVÄNTNING:
Att testet ska ge statuskod 200 för samtliga förfrågningar/responser.

RESULTAT:
Testet gav korrekt antal statuskoder av 200 för samtliga förfrågningar/responser.

### 8. Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.

MOTIVERING:
Kontrollera att requests och endpoints fungerar korrekt.

TESTPROCESS:
Skapade CRUD API:er för både böcker och författare baserat på senaste ID:t.
 
FÖRVÄNTNING:
Korrekta statuskoder och att testerna går igenom i ett flöde när man kör "Run Folder".

RESULTAT:
Korrekta statuskoder och testerna går igenom i ett flöde när man kör "Run Folder".

### 9. Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests.

MOTIVERING:
Att kontrollera att ett objekt ändras korrekt efter PUT-request.

TESTPROCESS:
Skapade GET, POST och PUT-requester för kontroll av uppdatering av objektet.
Genom att ändra ex. titel med förklarande namn kan jag via visning av databasen kontrollera
att testet har gått igenom.

FÖRVÄNTNING:
Att databasen visar korrekt ändring av databasens objekt.

RESULTAT:
Databasen visar korrekt ändring av databasens objekt.

### 10. Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously.

MOTIVERING:
Manuellt belastningstest för att utvärdera prestanda
med flera samtidiga förfrågningar.

TESTPROCESS:
Antalet iterationer och fördefinierad gräns kan
ändras efter eget tycke.
- OBS!
Resultatet kan variera beroende på datorns prestanda, uppkoppling
och om du har flera program igång samtidigt samt om
datatrafiken är hög.

FÖRVÄNTNING:
Korrekt statuskoder och meddelanden ska dyka upp vid fungerande testutfall samt icke-fungerande.

RESULTAT:
Via ändring av kodens iterationer och fördefinierad gräns kunde jag få olika resultat beroende
på:
1. Antal program igång samtidigt på datorn
2. Nedladdning av data från internet.
3. Antal iterationer
4. Fördefinierad gräns.

Vid Iterationer: 25 och Fördefinierad gräns: 5000 ms så gick testet igenom.

### 11. Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity.

MOTIVERING:
Manuellt kontrollera att du får rätt statuskod 200 vid fungerande uppkoppling och någon form 
av information vid icke-fungerande uppkoppling.

TESTPROCESS:
En GET-request som visar på statuskod 200 om programmet har uppkoppling till databasen.
Vid manuell avstängning ska programmet visa via testkörning någon form av felmeddelande.

FÖRVÄNTNING:
Att testet visar statuskod 200 om testet har tillgång till fungerande uppkoppling.
Att programmet visar: Error: connect ECONNREFUSED 127.0.0.1:3333 om uppkopplingen är nere.

RESULTAT:
Testets resultat speglar förväntningen.

### 12. Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned.

MOTIVERING:
Korrekt felmeddelande via användning av fel parametrar.
Försäkran om att rätt statuskoder och meddelanden dyker upp.

TESTPROCESS:
Använde min tidigare endpoint för att försäkra mig om att rätt statuskod av 400 dyker upp.

FÖRVÄNTNING:
Att statuskoden 400 dyker upp.

RESULTAT:
Statuskod 400 visas.

### 13. Verify that the API correctly implements rate limiting or throttling mechanisms to prevent abuse or excessive use of resources.

.: Ej hunnit med detta test :.


## - AUTOMATISKA TESTER - 


### 1. Validate that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request.

MOTIVERING:
Automatiskt kontrollera statuskod 200.

TESTPROCESS:
Hämta alla böcker och författare och kontroll av statuskod genom:
pm.test('status code is 200', function () {
    pm.response.to.have.status(200);
})

FÖRVÄNTNING:
Att testerna ska visa statuskod 200.

RESULTAT:
Statuskod 200.

### 2. Verify that the API returns the expected data format (e.g., JSON, XML) in the response.

MOTIVERING:
Automatiskt kontrollera att testet visar på rätt dataformat.

TESTPROCESS:
Genom att testet använder sig av:
pm.test("Response Headers properties and values", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");               
});
kan testet kontrollera att headers har rätt dataformat.

FÖRVÄNTNING:
Testet går igenom och visar statuskod 200.

RESULTAT:
Testet går igenom och visar statuskod 200.

### 3. Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid requests.

MOTIVERING:
Att testet visar rätt statuskod vid fel förfrågningar.

TESTPROCESS:
Genom att lägga till kontroll av statuskod i scripts i testerna kan testerna kontrollera
statuskod 400.

FÖRVÄNTNING:
Testerna visar statuskod 400.

RESULTAT:
Testerna visar statuskod 400.

### 4. Create an automated test that sends a request with specific filters or search criteria and checks if the API returns the correct data.

MOTIVERING:
Skapa ett test som kollar specifikt filter eller sökkriterier och kolla om testet visar korrekt data.

TESTPROCESS:
Via kontroll av senaste bok/författar-id:t och dess properties samt att objektets innehåll innehåller
värden kan testet kontrollera objektets typ och "form" är korrekt. 

FÖRVÄNTNING:
Att varje pm.test passerar och visar rätt statuskod av 200. 

RESULTAT:
Att varje pm.test passerar och visar rätt statuskod av 200.

### 5. Write an automated test to verify that the API returns paginated results when a large number of records are requested.

MOTIVERING:
Automatiskt test av pagination för kontroll av stora förfrågningar.

TESTPROCESS:
Genom pm.expect(results).to.equal(resultsPerPage); kan testet kontrollera att förväntat resultat är likvärdigt med
faktiska resultatet. Ändring av vissa parametrar behöver fortfarande dock ändå ske i VSC beroende på hur man vill 
göra testet.

FÖRVÄNTNING:
Är koden const resultsPerPage = 10; likvärdig med const limit = parseInt(req.query.limit) || 10;
i books.js så ska testet gå igenom och visa statuskod 200.

RESULTAT:
Resultatet speglar förväntningen.

### 6. Test if the API handles special characters and non-English text correctly in input data and returned responses using an automated testing tool.

MOTIVERING:
Automatiskt kontroll och hantering av att specialtecken och icke-engelsk text visas korrekt.

TESTPROCESS:
Liknande mitt manuella test men skillnaden är att jag genom regEx i testscript kan kontrollera att titeln
matchar specialtecken samt kyrilliskt text.

FÖRVÄNTNING:
Testet går igenom och visar på statuskod 200. 

RESULTAT:
Testet går igenom och visar på statuskod 200.

### 7. Develop an automated test that sends concurrent requests to the API to ensure that it can handle multiple users and maintain data consistency.

MOTIVERING:
Kontroll och hantering av multipla användare för att se till så att dataflödet är jämnt och stabilt.

TESTPROCESS:
Genom att använda mig av mitt manuella test och kör "Run Folder" och sedan också välja hur många iterationer man vill göra
så kan testet köras och eventuellt visa på en del negativa faktorer

FÖRVÄNTNING:
Testerna går igenom och visar korrekt statuskoder.

RESULTAT:
Testerna går igenom och visar korrekt statuskoder.

### 8. Create an automated test and test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.

MOTIVERING:
Automatisk kontroll av requests och endpoints.

TESTPROCESS:
CRUD API:er och test och kontroll av dessa genom att testa senaste boken.
DELETE-requesten visar sig ha varit skiftande. Troligtvis har det något med
ID-hantering i script att göra.

FÖRVÄNTNING:
Testerna ska gå igenom vid "Run Folder" och visa korrekt statuskod.

RESULTAT:
Sista testet med DELETE-request fungerande ej som det skulle. Troligtvis något med ID-hantering.

### 9. Write an automated test to check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests.

MOTIVERING:
Hantering av POST och PUT och kontroll av dessa.

TESTPROCESS:
Genom kontroll av id så kan man i PUT-requesten se ifall ändringar har skett. 
Via miljövariabelhantering av id:t.

FÖRVÄNTNING:
Testerna går igenom och visar korrekt statuskod 200.

RESULTAT:
Testerna går igenom och visar korrekt statuskod 200.

### 10. Design an automated performance test that simulates a large number of users making requests simultaneously to check the API’s performance under heavy load

MOTIVERING:
Simulera flertal hantering för att kontrollera samtidiga förfrågningar.

TESTPROCESS:
Via egen endpoint testat flertal "användare" genom att köra "Run Folder" och valfritt antal iterationer.

FÖRVÄNTNING:
Testerna går igenom och visar korrekt statuskod 200.

RESULTAT:
Testerna går igenom och visar korrekt statuskod 200.

### 11. Create an automated test that verifies the API can recover gracefully from failures, such as database connection issues or third-party service outages, without compromising data integrity.

- EJ HUNNIT MED - 

### 12. Develop an automated test to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned.

MOTIVERING:
Test av statuskod 400 som är automatiserad.

TESTPROCESS:
pm.test("Statuscode is 400", function (){
    pm.response.to.have.status(400);
}); i script visar på rätt statuskod från fel url/endpoint.

FÖRVÄNTNING:
Statuskod 400.

RESULTAT:
Statuskod 400.

### 13. Write an automated test to verify that the API correctly implements any rate limiting or throttling mechanisms to prevent abuse or excessive use of resources.

- EJ HUNNIT MED - 




.: Kim Nordin PVT23 Programvarutestare 2024-05-28 :.