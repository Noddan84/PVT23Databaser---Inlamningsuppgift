# -----------------------
# .: API-DOKUMENTATION :.
# -----------------------

## ÖVERSIKT

- Detta API tillhandahåller metoder för att hantera böcker/författare och deras relaterade information.

## AUTENTISERING

- API:et kräver ingen autentisering för att använda sig av offentliga resurser.

## SLUTPUNKTER (ENDPOINTS)

### HÄMTA ALLA BÖCKER

 URL: /api/books/all
 Metod: GET
 Beskrivning: Hämtar alla böcker från databasen tillsammans med information om författaren.
 Parametrar: Inga
 Svarskoder:
 200: Lyckad begäran. Returnerar en lista med alla böcker.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### HÄMTA EN SPECIFIK BOK BASERAT PÅ ID

 URL: /api/books/:id
 Metod: GET
 Beskrivning: Hämtar en specifik bok från databasen baserat på dess ID.
 Parametrar:
 id (obligatorisk): ID för den önskade boken.
 Svarskoder:
 200: Lyckad begäran. Returnerar boken med angivet ID.
 404: Boken hittades inte.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### SKAPA EN NY BOK

 URL: /api/books
 Metod: POST
 Beskrivning: Skapar en ny bok och lägger till den i databasen.
 Parametrar: JSON-objekt med följande fält:
	title (obligatorisk): Titeln på boken.
	author (obligatorisk): ID för författaren till boken.
	genre: Genre för boken.
	releaseDate: Datum då boken släpptes.
	isbnCode: ISBN-kod för boken.
	description: Beskrivning av boken.
 Svarskoder:
 201: Boken har skapats framgångsrikt.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### UPPDATERA EN BEFINTLIG BOK

 URL: /api/books/:id
 Metod: PUT
 Beskrivning: Uppdaterar informationen för en befintlig bok baserat på dess ID.
 Parametrar:
 id (obligatorisk): ID för den bok som ska uppdateras.
 Svarskoder:
 200: Boken har uppdaterats framgångsrikt.
 404: Boken hittades inte.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### TA BORT EN BOK

 URL: /api/books/:id
 Metod: DELETE
 Beskrivning: Tar bort en befintlig bok från databasen baserat på dess ID.
 Parametrar:
 id (obligatorisk): ID för den bok som ska tas bort.
 Svarskoder:
 200: Boken har tagits bort framgångsrikt.
 404: Boken hittades inte.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### SÖK EFTER BÖCKER MED TITEL

 URL: /api/books
 Metod: GET
 Beskrivning: Söker efter böcker baserat på en given titel.
 Parametrar:
	title: Titeln på böckerna att söka efter.
 Svarskoder:
 200: Lyckad begäran. Returnerar en lista med böcker som matchar titeln.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### PAGINERING AV BÖCKER

 URL: /api/bookslimit
 Metod: GET
 Beskrivning: Hämtar en viss mängd böcker beroende på sidnummer och gränser.
 Parametrar:
	page: Sidnummer för att hämta böcker från.
	limit: Antal böcker per sida.
	sortField: Fältet att sortera böckerna efter (standard: _id).
	sortOrder: Sorteringsordningen (asc för stigande, desc för fallande).
 Svarskoder:
 200: Lyckad begäran. Returnerar en lista med böcker enligt specificerade parametrar.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### BELASTNINGSTEST

 URL: /api/load-test
 Metod: GET
 Beskrivning: Hämtar alla böcker från databasen för att simulera en belastningstest.
 Svarskoder:
 200: Lyckad begäran. Returnerar en lista med alla böcker.
 500: Serverfel. Något gick fel vid hantering av förfrågan.



## SLUTPUNKTER (ENDPOINTS) --- author

### HÄMTA ALLA FÖRFATTARE

 URL: /api/authors
 Metod: GET
 Beskrivning: Hämtar alla författare från databasen tillsammans med deras tillhörande böcker.
 Svarskoder:
 200: Lyckad begäran. Returnerar en lista med alla författare och deras böcker.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### HÄMTA EN SPECIFIK FÖRFATTARE BASERAT PÅ ID

 URL: /api/authors/:id
 Metod: GET
 Beskrivning: Hämtar en specifik författare med ett angivet ID från databasen tillsammans med dess tillhörande böcker.
 Parametrar:
 id: ID:t på författaren att hämta.
 Svarskoder:
 200: Lyckad begäran. Returnerar författaren och dess böcker.
 404: Författaren hittades inte.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### LÄGG TILL NY FÖRFATTARE

 URL: /api/authors
 Metod: POST
 Beskrivning: Skapar en ny författare med angivet fullständigt namn och tillhörande böcker.
 Body: JSON-objekt med följande fält:
	fullName: Fullständigt namn på författaren.
	books: ID:n på de böcker som författaren har skrivit.
 Svarskoder:
 201: Författaren har skapats framgångsrikt. Returnerar den nya författaren.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### UPPDATERA EN FÖRFATTARE

 URL: /api/authors/:id
 Metod: PUT
 Beskrivning: Uppdaterar en befintlig författare med angivet ID med nya uppgifter.
 Parametrar:
 id: ID:t på författaren att uppdatera.
 Body: JSON-objekt med nya uppgifter för författaren.
 Svarskoder:
 200: Författaren har uppdaterats framgångsrikt. Returnerar den uppdaterade författaren.
 404: Författaren hittades inte.
 500: Serverfel. Något gick fel vid hantering av förfrågan.

### RADERA EN FÖRFATTARE

 URL: /api/authors/:id
 Metod: DELETE
 Beskrivning: Raderar en författare med angivet ID från databasen.
 Parametrar:
 id: ID:t på författaren att radera.
 Svarskoder:
 200: Författaren har raderats framgångsrikt.
 404: Författaren hittades inte.
 500: Serverfel. Något gick fel vid hantering av förfrågan.