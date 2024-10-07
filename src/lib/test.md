## Sprint 13
### Week 1
***Leervragen***
- *Hoe maak ik gebruik van Svelte*
- *Hoe maak ik een stappenplan om complexe interacties te bouwen*
- *Hoe werk in een team met frameworks*
- *Hoe kan ik aan de hand van de i-love-web mijn bewijslast noteren*

<br>

*Maandag*
- We hebben de introductie gehad en zijn verdeeld in groepjes voor onze squad page.
- Vervolgens afgesproken woensdag allemaal een lofi-design af te hebben.

<br>

*Dinsdag*
- Lofi-design gemaakt in Figma. [Zie issue](https://github.com/rutgerkock/your-tribe-for-life-squad-page/issues/1)
- Svelte/Directus documentatie doorgelezen

<br>

*Woensdag*
- We hebben het gehad over onze designs en zijn samen tot een samenvoeging van onze designs gekomen waar we nu zelf verder aan kunnen werken. [Zie issue](https://github.com/rutgerkock/your-tribe-for-life-squad-page/issues/1(https://github.com/users/rutgerkock/projects/7?pane=issue&itemId=78311249))
- Opzetten van de Github repo en het maken van een team-canvas. [Zie issue](https://github.com/users/rutgerkock/projects/7/views/1?pane=issue&itemId=78310746)
- Ik heb een design gemaakt in Figma voor mijn visitekaartje.

<br>

*Donderdag*
- Ik heb vandaag gewerkt aan een animatie/loading state die we willen gebruiken voor de squad page, maar ik ook zelf wil gebruiken. [Zie issue](https://github.com/rutgerkock/your-tribe-for-life-profile-card/commit/8c64582d2b32e64710412be7ff628fc1267759f8)

<br>

*Vrijdag*
- Ik heb deze ochtend voor m'n eigen profile-card een loading animation gemaakt. [Zie commit](https://github.com/rutgerkock/your-tribe-for-life-profile-card/commit/40ab1d1367e0e61907de709e8a4ff8e77d426ef2)
- Later deze ochtend heb ik ervoor gezorgd dat de basis van mijn eigen profile-card voldoet aan contrast eisen en een prettige dark mode heeft.
- Eerstejaars voorzien van feedback. Ik heb aan halfuur met Rick gezeten en hem veel feedback gegeven. Hier wat issues die ik heb ingeschoten over code. 
[Zie issues (1)](https://github.com/RickFDND/your-tribe-profile-card/issues/5)
[Zie issues (2)](https://github.com/RickFDND/your-tribe-profile-card/issues/6)
[Zie issues (3)](https://github.com/RickFDND/your-tribe-profile-card/issues/7)

<br>

### Week 2
***Leervragen***
- *Hoe gebruik ik md in mn html?*
- *Hoe maak ik goede documentatie van mijn werk?*

<br>

*Maandag*
- Workshop Figma gevolgd van Cyd en samen met mijn groepje voor de squadpage ons Figma bestand helemaal up-to-date gemaakt met kleuren, inspiratie, voorbeelden, enz. [Zie Figma](https://www.figma.com/proto/PEQrMjR6rcW5XmCOwqrL4c/Squad-page-4?node-id=0-1&t=EgKQgChBYl1fPxqx-1)

<br>

*Dinsdag*
- Gepuzzeld met het inladen van MD, er niet uitgekomen :/

<br>

*Woensdag*
- Na de workshop over je kaartje opleuken heb ik vooral gewerkt aan mijn eigen kaartje en hier een nieuw design voor gemaakt.
- Ook ben ik begonnen met het refactoren van mijn code.

<br>

*Donderdag*
- Refactoren afgemaakt, bijv. kleuren zijn nu allemaal variabelen die ik makkelijk kan aanpassen en ik heb een global CSS toegevoegd. [Zie code](https://github.com/rutgerkock/your-tribe-for-life-profile-card/blob/main/static/css/global.css)
- Ook van desktop first naar mobile first gegaan (Had zo moeten beginnen).

<br>

*Vrijdag*
- Issues ingeschoten als feedback voor elkaars squad-pages en profile-cards.
[Zie issue (1)](https://github.com/DamianR2004/your-tribe-for-life-squad-page/issues/19#issue-2510398327) 
[Zie issue (2)](https://github.com/Lmikkers/your-tribe-for-life-profile-card/issues/5)
- Ook hebben we feedback gekregen over het project board/ReadMe van onze Squad page. 
- 's Ochtends mijn dark-mode afgemaakt voor mn eigen profile card.

<br>

### Week 3
***Leervragen***
- *Hoe werkt data inladen via de whoIsApi ook alweer?*
- *Hoe los ik problemen met mijn MD op?*

<br>

*Maandag*
- De feedback van vrijdag verwerkt. [Zie issue](https://github.com/users/rutgerkock/projects/7/views/1?pane=issue&itemId=79718654)
- Samen met het team gezeten en besloten wat er nog gedaan moet worden. Ik kreeg onder andere de taken de website live te zetten en de pagina wat meer leven te geven dmv. animaties. 
[Zie issiue (1)](https://github.com/users/rutgerkock/projects/7/views/1?pane=issue&itemId=79576268)
[Zie issiue (2)](https://github.com/users/rutgerkock/projects/7/views/1?pane=issue&itemId=78610442)
- Ook heb ik aan Justus gevraagd hoe ik een probleem met linken naar de ingeladen MD vanuit mijn HTML kan oplossen. [Oplossing!](https://github.com/remarkjs/remark-autolink-headings/tree/91254a60bfe03163cb49f08ec20ca5d34f677b7c?tab=readme-ov-file)

<br>

*Dinsdag*
- Mijn probleem opgelost met de oplossing van Justus! Ik laad **dit** bestand nu in als *HTML* terwijl ik het schrijf als *MD*, ook de headings worden dynamisch gemaakt met behulp van *remark-auto-headings* waardoor de navigatie-knoppen werken.
- Ik had een probleem met scrollen, dit is ook opgelost met hulp van oud-studenten! [Zie Discord-thread](https://discord.com/channels/1017099203882782750/1027275543755890799/threads/1285278923990503508)

<br>

*Woensdag*
- Squad page live gezet na wat problemen met Vercel [Zie issue](https://github.com/users/rutgerkock/projects/7/views/1?pane=issue&itemId=79576268)
- Ook hebben we als groepje besloten wat we nog gaan afmaken aan de hand van MoSCoW hebben we dit genoteerd in ons [project board](https://github.com/users/rutgerkock/projects/7/views/1)

<br>

*Donderdag*
- Gewerkt aan de taken van maandag voor de squad-page, ik heb wat animaties toegevoegd. [Zie commit](https://github.com/rutgerkock/your-tribe-for-life-squad-page/commit/573b89ad983ebdaa8404acfa01cc6316a6a21972)


<br>

*Vrijdag*
- Nu pas toegekomen aan data inladen voor mijn eigen visitekaartje, dit voor school geregeld. [Zie commit](https://github.com/rutgerkock/your-tribe-for-life-profile-card/commit/9158c02e98572376e02fedd1b92bea6b8b2b792f)
- Al mijn notities/i-love-web geupdate!

<br>

*Retrospect*

- 3.1.1: het projectboard/ de issues
- 3.1.2: snippets van code die je zelf gebruikt hebt/ bronnen verwerken (mdn, webstandaarden, svelte, gozillablog, mastodon, w3c, webkit blog, chrome developer)
- 3.1.3: usertest/ performace test/ accesibility test/ etc.

- 3.2.1: kampvuur/ teamcanvas/ projectboard
- 3.2.2: projectboard met issues/ kampvuursessie
- 3.2.3: uitleg wie iedereen is en hoe je met iedereen omgaat/ teamcanvas is de introductie hierop/ sprint review

- 3.3.1: briefing notities/ debriefing/ etc.
- 3.3.2: readme/ oplevering/ uitleg met hoe alles werkt/ bereid om vragen te beantwoorden.
- 3.3.3: issues met uitleg/ projectboard/ readme/ pullrequest/ etc.

- 3.4.1: leervragen/ briefing/ debriefing
- 3.4.2: lofi/hifi schetsen/ breakdown schets/ wireflow/ wireframe
- 3.4.3: code/ bronnen/ issues/ linken naar code

- 3.5.1: bronnen verwerken (mdn, webstandaarden, svelte, gozillablog, mastodon, w3c, webkit blog, chrome developer, we love web)/ journal bijhouden haha/
- 3.5.2: digital garden/ I love web/ code snippets/ etc.
- 3.5.3: zelf evaluatie/ I love web

<br>

*Verbeterpunten*
- Beginnen met uitgebreid project board (Hoeveelheid bij taken, DOD's, user stories, MoSCoW)
- Elkaar voorzien van duidelijke feedback en pull-requests serieus nemen (Feedback op code) 
- Figma bestand opzetten met styleguide (fonts/kleuren enz.) VOOR we beginnen met programmeren
- Communicatie was best heel aardig maar kan altijd beter 
- Standup op ma-wo-vrij had serieuzer moeten zijn 

Resultaat: Zeer tevreden

<br>
<br>

## Sprint 14
### Week 1
*Maandag*
- Vandaag zijn we begonnen met ons nieuwe project, bieb in bloei. We hebben met onze groep uitgezocht in welke github we moeten werken. [Zie repo (1)](https://github.com/rutgerkock/buurtcampus-oost/tree/release-candidate-bieb-in-bloei) 
[Zie projectboard (2)](https://github.com/orgs/fdnd-agency/projects/3/views/1)
- Ook hebben we een begin gemaakt aan de debriefing en hebben we ons team canvas gemaakt 
[debriefing (1)](https://github.com/orgs/fdnd-agency/projects/3/views/1?pane=issue&itemId=80740722) 
[Team canvas (2)](https://github.com/orgs/fdnd-agency/projects/3/views/1?pane=issue&itemId=80739668)

<br>

- Ook heb ik zelf gewerkt aan een aantal punten rondom mijn i-love-web website, waar je nu op zit. Hier heb ik ervoor gezorgd dat de pagina werkt zonder JS, dit was eerst niet het geval [Zie code](https://github.com/rutgerkock/your-tribe-for-life-profile-card/blob/main/src/routes/%2Blayout.svelte#L74-L80). Ook heb ik ervoor gezorgd dat de knoppen waarmee je door mijn blog navigeerd functioneren zonder JS, aan de hand van scroll-padding/margin, dat was een tip van Krijn. [Zie code](https://github.com/rutgerkock/your-tribe-for-life-profile-card/blob/dd7cf0e7f36bed1a9ec6b983e8c8a63250c7172b/src/routes/%2Bpage.svelte#L122)
- Verder heb ik afbeeldingen toegevoegd als enhanced:img waardoor ze erg snel laden. [Zie code (1)](https://github.com/rutgerkock/your-tribe-for-life-profile-card/blob/main/src/routes/%2Bpage.svelte#L42-L96) [Zie svelte docs over images(2)](https://kit.svelte.dev/docs/images#sveltejs-enhanced-img)
- Ook heb ik [Vercel-speedinsights](https://vercel.com/docs/speed-insights) toegevoegd aan mijn website zodat ik aan de hand van informatie van gebruikers in de gaten kan houden waar ik dingen kan verbeteren op het gebied van snelheid, hier zag een grote stap voorruit na het toevoegen van de enhanced:img i.p.v. img.

<br>

*Dinsdag*
- Vandaag onze briefing met Joost gedaan omdat Mariska niet beschikbaar was op korte termijn. Dit hebben we online gedaan, aan de hand hiervan hebben we een debriefing geschreven en deze naar Mariska opgestuurd. [Zie issue](https://github.com/orgs/fdnd-agency/projects/3/views/1?layout=table&pane=issue&itemId=80740722)

- vervolgens hebben we met ons groepje de opdracht verdeeld in Epics -> Stories -> User Stories -> Taken. Ook hebben we aan alle taken labels meegegeven voor ons overzicht (MoSCow, Gewicht, DLC, enz.) [Zie issue/project board](https://github.com/orgs/fdnd-agency/projects/3/views/1?layout=table&pane=issue&itemId=80741804)

<br>

*Woensdag*
-  Wat ik heb geleerd: Hoe je een datamodel maakt van een website
- Tijdens de les kregen wij als groepje de opdracht om van de website die op het bord stond een wireframe te maken. In die wireframe moesten we aangeven wat statische en dynamische data is.

- We hebben met ons groepje een Wireframe gemaakt van de website Bieb in bloei, we hebben daarna de wireframe verdeeld in statische data en dynamische data. [Zie wireframes onder het data model](https://github.com/fdnd-agency/buurtcampus-oost/issues/150)
- Ook hebben wij een sitemap gemaakt van de website [Zie github](https://github.com/fdnd-agency/buurtcampus-oost/issues/152)
- We zijn daarna bezig geweest met een data model te maken van de [website (1)](https://bieb-in-bloei.vercel.app/) [Zie data model (2)](https://github.com/fdnd-agency/buurtcampus-oost/issues/150)

<br>

*Donderdag*
- Vandaag ben ik bezig geweest met het weer weergeven. Dit is een deel van een van mijn taken voor de bieb-in-bloei opdracht, en heb uitgezocht hoe het werkt en op deze website toegepast. Ik heb dit gedaan met de OpenWeatherAPI, dit werkt erg goed en lukte vrij makkelijk. Nu kan ik aan de hand van bijv. de temperatuur of regenkans verschillende dingen weergeven op de website. [Zie code](https://github.com/rutgerkock/your-tribe-for-life-profile-card/blob/b0aae6a22a313a516b11040a9dfeb92eb4ca99a9/src/routes/%2Bpage.svelte#L8-L19)

<br>

*Vrijdag*
- Vanochtend was het mijn beurt om het mentorgroepje te helpen met hun project en te voorzien van feedback/hulp. Ik heb [Anouk](https://github.com/AnoukdeRooij24/the-client-website/issues/2), [Rapha](https://github.com/Rapha2002/the-client-website/issues/2), [Yaman](https://github.com/yamenAl/the-client-website/issues/3) en [Daan](https://github.com/dvdalfsen/the-client-website/issues/4) geholpen en heb bij ze allemaal issies ingeschoten met verbeterpunten en bronnen die ze kunnen helpen.
- Ook heb ik ze van feedback voorzien op hun portflow, op het samenwerken van de squadpage.

<br>

<img width="200" height="170" alt="portflow" src="https://github.com/user-attachments/assets/4d5d8a83-655a-457b-811a-bdc8b07c3ba2"><img width="200" height="170" alt="portflow" src="https://github.com/user-attachments/assets/641e87b8-0e9e-4bdb-a23d-bc602c023623"><img width="200" height="170" alt="portflow" src="https://github.com/user-attachments/assets/915d7046-7b7d-4d26-a5ad-b08d2974ac3e"><img width="200" height="170" alt="portflow" src="https://github.com/user-attachments/assets/91e0f311-169a-4c10-b91c-7aea7b855192">

<br>

- Vervolgens hebben we met ons bieb-in-bloei groepje feedback gekregen over de opzet van ons project, die best heel aardig was. Enige echte feedback punt was dat we bij het spelen van planning-poker echt een basislijn moeten stellen zodat we op 1 lijn zitten voor de rest van de punten. [Zie issue](https://github.com/rutgerkock/buurtcampus-oost/issues/1)

<br>

### Week 2
*Maandag*
- Vandaag eerst hoorcollege over Svelte, dit ging over een hele hoop dingen: Structuur, routing, error handling, data laden, library en components. Het meest interessante vond ik het stuk over error.svelte pagina's en error.hmtl pagina's om custom error-pages weer te kunnen geven. Dit is iets wat ik wil doen voor mijn i-love-web website.

<br>

- Vervolgens hebben we de [standup](https://github.com/rutgerkock/buurtcampus-oost/discussions/2?sort=new) gedaan en heb ik nieuwe taken bedacht voor de komende dagen.

<br>

*Dinsdag*
- Vandaag heb ik gewerkt aan de groepsopdracht, hoe ik aan de hand van het weer verschillende dingen kan weergeven. Bijv. afhankelijk van de temperatuur en de luchtvochtigheid, of het comfortabele omstindigheden zijn voor een specifieke plant. Dit is goed gelukt, nu moet ik dit alleen nog verbinden Harry, de mascotte van de website, dit zal ik ergens de komende dagen met Larissa regelen, dat is onze Harry expert. Ook moet de data nog uit Hygraph gaan komen ipv mijn mooie bestandje.

<br>

*Woensdag*
- Vandaag hebben we feedback op ons design gegeven en gekregen, van de websites voor de opdrachtgevers. Ik heb 4 groepjes van feedback voorzien, zie mijn issiues/comments: [Feedback (1)](https://github.com/Daan645/lose-your-head-the-client-case/issues/10) [Feedback (2)](https://github.com/orgs/fdnd-agency/projects/41/views/1?pane=issue&itemId=81897351) [Feedback (3)](https://github.com/Remy2072/fdnd/issues/3) [Feedback (4)](https://github.com/users/Robin1224/projects/9/views/1?pane=issue&itemId=81900534)
- Ook hebben we samen weer een stand-up gedaan. [Zie issue](https://github.com/rutgerkock/buurtcampus-oost/discussions/3)

<br>

- Vervolgens zijn we naar onze opdrachtgever gegaan om hier onze debriefing te bespreken, wat erg goed ging. Dit deden we bij de Buurtcampus oost op locatie. [Zie issue](https://github.com/orgs/fdnd-agency/projects/3/views/1?pane=issue&itemId=80740722)

<br>

*Donderdag*
- Gewerkt aan icoontjes koppelen aan het weer, dit is gelukt! In de openweather api zitten icoontjes ingebouwd. Het is me gelukt deze weer te geven. 

<br>

*Vrijdag*
- Vanochtend begonnen als mentor. Ik heb samen met Damian de css-layout-challange besproken in een groepje. We hebben bij de meeste layouts feedback kunnen geven.
- <img width="200" height="170" alt="portflow" src="https://github.com/user-attachments/assets/40b35a1f-45d2-4626-a478-2b367acba38c">
- #1 ipv grid-area: 2/1/3/2 -> nav main main | #2 Kan zonder css of met flex gemakkelijker -> zie https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction | #3 Let goed op welk element waar moet -> kan ook gewoon met nav main main, niet oneindige grid column starts/ends op elk element. | #5 Zet de elementen met een grid-column-start neer -> blanco kan ook  ". header header header"  -> grid-column-start netter, blancos kunnen ook meer onnodig ingewikkeld. | #7 gebruik postion: absolute (Met absolute zet je iets op een vaste plek binnen een blok, met fixed op de pagina. Gebruik geen percentages om de positie te geven. https://developer.mozilla.org/en-US/docs/Web/CSS/position | #8 sticky vs fixed -> fixed hier beter -> z-index om dingen over elkaar weer te geven -> centreren niet met margins! | #9 buttons met flex rest kan via grid op hoop manieren

- Advanced #1 Kan met flex alleen als je weet hoeveel blokken je hebt, anders masonry layout of multi-column-layout https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout, multi column beste.
- We hebben een hoop algemene tips kunnen geven met voorbeelden uit onze eigen code en mdn. Denk bijv. Aan sticky titels enz. 
Samen met Damian heb ik dit gedaan.

<br>
- Vervolgens heb ik Kate geholpen met haar project, the-client-case. Hier heb ik een hele hoop feedback op kunnen geven, [zie issues](https://github.com/Kitkatisvibing/the-client-website/issues/1)

<br>

- Ook hebben we feedback gehad van Suus en Koop, [zie issue](https://github.com/fdnd-agency/buurtcampus-oost/issues/182)

- Daarna de we love web van Nicolas Garnier. Hier de samenvatting van zijn verhaal:
- **Conclusion**
-     Think of animations and interactions as an extension to an original intent
-     Be open minded
-     Ask yourself what it brings and ask for feedback
-     Be ready to spend a lot of time on it


### Week 3
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*
<br>
<br>

## Sprint 15
### Week 1
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 2
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 3
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*
<br>
<br>

## Sprint 16
### Week 1
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 2
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 3
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*
<br>
<br>

## Sprint 17
### Week 1
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 2
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 3
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*
<br>
<br>

## Sprint 18
### Week 1
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 2
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 3
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*
<br>
<br>

## Sprint 19
### Week 1
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 2
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 3
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*
<br>
<br>

## Sprint 20
### Week 1
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 2
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*

### Week 3
*Maandag*

*Dinsdag*

*Woensdag*

*Donderdag*

*Vrijdag*
