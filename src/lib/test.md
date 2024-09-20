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
- Opzetten van de Github repo en het maken van een team-canvas. [Zie issue](href='https://github.com/users/rutgerkock/projects/7/views/1?pane=issue&itemId=78310746)
- Ik heb een design gemaakt in Figma voor mijn visitekaartje.

<br>

*Donderdag*
- Ik heb vandaag gewerkt aan een animatie/loading state die we willen gebruiken voor de squad page, maar ik ook zelf wil gebruiken. [Zie issue](href='https://github.com/rutgerkock/your-tribe-for-life-profile-card/commit/8c64582d2b32e64710412be7ff628fc1267759f8)

<br>

*Vrijdag*
- Ik heb deze ochtend voor m'n eigen profile-card een loading animation gemaakt. [Zie commit](https://github.com/rutgerkock/your-tribe-for-life-profile-card/commit/40ab1d1367e0e61907de709e8a4ff8e77d426ef2)
- Later deze ochtend heb ik ervoor gezorgd dat de basis van mijn eigen profile-card voldoet aan contrast eisen en een prettige dark mode heeft.
- Eerstejaars voorzien van feedback. Ik heb aan halfuur met Rick gezeten en hem veel feedback gegeven. Hier wat issues die ik heb ingeschoten over code. 
[Zie issues (1)](href='https://github.com/RickFDND/your-tribe-profile-card/issues/5)
[Zie issues (2)](href='https://github.com/RickFDND/your-tribe-profile-card/issues/6)
[Zie issues (3)](href='https://github.com/RickFDND/your-tribe-profile-card/issues/7)

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
<br>

## Sprint 14
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