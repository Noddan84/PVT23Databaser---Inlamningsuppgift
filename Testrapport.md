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

## - TESTER -

Korrekt statuskoder för samtliga tester.

### CRUD API:er
För både books och authors.
För att se till så att enklare API:er
fungerar i samband med VSC-kod och Mongo DB Atlas.
(GET, POST, PUT och DELETE)
Se till så det är rätt användning av varje specifikt
ID för books och authors.

### Get-request för att hitta bok baserat på titel.
Efter POST-request av både author och book
med exempelvis "Российская Федерация###" som titel
kunde jag testa så API:et hanterar specialtecken och
icke-engelsk text. 
Se till så det är rätt användning av varje specifikt
ID för books och authors.

### API expected data format
API som kontrollerar att API:et returnerar
förväntat data format (application/json).
Detta görs genom pm-response av att header är
"Content-Type".

### Ett API som testar pagination.
Val av sidnummer. Om sidnummer inte specificeras så är standardvalet 1.
Val av antal böcker att hämta per sida. Standardval är 10.
Sorteringsfält där "_id" är satt som standard.
Sorteringsalternativ där 'asc'(stigande ordning) är satt som standard.
Beräkning av antal dokument i boksamlingen i databasen.
Beräkning av totala antalet sidor baserat på totala antalet böcker
och limit av antal böcker per sida.
Beräkning av antal böcker att hoppa över baserat på sidnummer och
limit av antal böcker per sida.

### API som testar hantering av flera samtidiga användare.
Genom att loopa igenom antalet förfrågningar för att hämta
både böcker och författare så testar vi förväntade responser
för att säkerställa flera samtidiga förfrågningar.
Ändra värdet på "numberOfRequests" efter eget tycke.

### Belastningstest - Manuellt
Manuellt belastningstest för att utvärdera prestanda
med flera samtidiga förfrågningar.
Antalet iterationer och fördefinierad gräns kan
ändras efter eget tycke.
### Obs!
Resultatet kan variera beroende på datorns prestanda, uppkoppling
och om du har flera program igång samtidigt samt om
datatrafiken är hög.

### Databasanslutningstest genom pre-request script.
Genom att kontrollchecka ifall miljövariabeln är
inställd på "disconnected" så skall det skicka tillbaka felstatuskod.
Exempelvis kan det stå "Error: connect ECONNREFUSED 127.0.0.1:3333"
om man inte är ansluten till databasen.
Annars ska det returnera att anslutningen är OK i Postmans console.