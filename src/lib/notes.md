## Notes
**Client side rendering uitzetten:**

<br>

**Mapjes svelte uitleg:**

**Static** is public map (client side) 

CSS > global.css

***SRC** map meest belangrijkst > daar gebeurd het meeste in

<br>

**Handig om te weten**

> gebruikservaring is beter en lazy loading staat aan

**Routes** > daar staan alle pagina's

**Lib** > shorthand voor library, daar staan de componenten in, voor hergebruik van componenten.

+page.svelte -> lijkt op ejs -> hier combineer je data met html

In dit +page.svelte bestand krijg je html + css + js

Npm run dev (server starten)

Css definiëren per pagina

<br>

**Data ophalen:**

Export let data (in je +page.svelte) (haalt data op)

+page.server.js -> fetchjson -> functie load -> await -> return persons: persons 

In je routes mapje bijv. [id] -> page.server.js + page.svelte -> filters zoals persons/id

<br>

**Routes aanmaken**

Als je een map aanmaakt in het mapje routes met een page bestand maakt ie een route

In je page.server.js kan je data sturen naar deze page bestanden

<br>

**Svelte installatie**

-   npm create svelte@latest
-   Welcome to SvelteKit!
-   │
-   ◇ Where should we create your project?
-   │ (hit Enter to use current directory)
-   ◇ Directory not empty. Continue?
-   │ Yes
-   ◇ Which Svelte app template?
-   │ Skeleton project
-   ◇ Add type checking with TypeScript?
-   │ No
-   ◇ Select additional options (use arrow keys/space bar)
-   │ none
-   └ Your project is ready!


<br>
------------------------------------------

**WEEK 2**

**Figma babbel**

Teksten uitrekken = cool

**INSPO** **page**: Inspiratie zoeken, screenshots insta, Pinterest

**ASSETS page:** mapje voor overzicht

[figma-file](https://www.figma.com/community/file/1414605941438286466)

Design system: styleguide maar dan groter, kleuren, iconen, buttons, componenten.

TIP: 

-   maak afspraken met team voor typografie kleuren etc

Je kunt een eigen type aanmaken: Dit kun je doen door een nieuwe text style toe te voegen , zet px erbij zodat het extra duidelijk is.

<br>

**Typografie en kleuren:**

-   Niet te veel font stylen
-   Lettersparing mee spelen
-   Lineheight, tenminste 1.2, 120% (spacing in % want gaat mee met tekstformaat)

**Formaten artboard**

Mobiel 375px max

Desktop 1440px

<br>

**Woensdag: 11 sept** 🐪

<br>

**Progressive enhancement met Svelte**

<br>

**enhancement:**Een strategie waar je gebaseerd op de browser features van de gebruiker extra dingen kan doen. Iedereen krijgt basisfunctionaliteit. Als iemand sneller internet/nieuwere browser enz. Krijgen ze een enhanced version.

Creative coding 

=== 

Progressive Enhancement (*should be) 

=== 

content(html, kan server-side gerenderde html zijn) first

<br>

**Stappenplan:** voor een schoon Svelte project

Progressive Enhancement: content first

1.  Maak een tijdelijk kopie van de folder van de squadpage repo
2.  Installer een clean install van SvelteKit voor de squadpage
3.  Voeg in /routes/+page.js deze regel code toe `export let cs = false`
4.  Neem in /lib/fetch-node.js de code over uit hetzelfe bestand van je laatste node.js project van sprint 12
5.  Importeer deze function in /routes/+page.server.js
6.  Check aan de hand van het voorbeeld of je alles goed gedaan hebt
7.  Copy / paste jullie toegevoegde svelte code terug in /route/+page.svelte

@supports > feature detection zorgt ervoor dat de pagina css blijft werken

<br>

**Sveltekit creative coding live coding Justus**

-   Fetchjson bestand met zelfde code als die we al hebben
-   Routes aanmaken
-   +page.svelte data ophalen + checken of links geldig zijn
-   Svelte for vs-code, svelte intellisense, svelte snippets


<br>

**Creative coding met JS 👍**

github repo met voorbeeld
Niet alles is op te lossen met css;
Bijv. Als je iets creatiefs wil doen op basis van interactie met de gebruiker. Dan kan je met client-side-js de interface verder enhancen.

- svelte:window
- +page.js === export let csr = true (Client side rendering van js aan/uitzetten)
- Static, daar komt sveltekit niet aan
- Door onMount te gebruiken kun je client side console log gebruiken, door de onMount.
- Als je het wil doen net als vorig jaar, kun je dit doen door alles in de static folder te zetten, of om onMount te gebruiken.🐥
- Svelte transition module (svelte docs) 👍
- Pagina staggeren (inladen op scroll?) kan hier ook mee👽
- Dingen laten zien met checkbox en svelte.fade -> tadaaa 

<br>

**Vrijdag: 13 sept** 🦉

<br>

**We love web -** [**Vasilis**](http://www.vasilis.nl) **van Gemert**

<br>

**Achtergrond**: 

-   Opgeleid als kunstenaar
-   Is half Grieks
-   Liefde met het web begon omdat ie het tof vond, toffe dingen maken en gratis.
-   Kan veel met het web, hij vind web van tegenwoordig erg SAAI
-   Maak toffe dingen en zet er alt teksten bij
-   Doel: laten zien dat je van alles kan maken en creatief kan zijn het web, maar gebruik wel alt tekst bv je kunt het altijd toegankelijk maken.

**Pagina's die hij heeft gemaakt\
Homepage: **

-   Update zijn website wanneer er iets nieuws uitkomt, zoals animaties, lettertype, css
-   Gemaakt toen Flexbox uitkwam om te experimenteren
-   CSS animaties, nieuw dan zet hij het in zijn website\

<br>

**Love Nonsense**

-   [Favoriete website](https://lovenonsense.com)

-   Liefde voor onzinnige dingen
-   Poppetjes: 2010, is een lettertype, wat iemand heeft gemaakt > nut van onzin

<br>

**Flipping things** [Vasilis/flipping-things](http://www.vasilis.nl/flipping-things) 

-   Flipt schilderijen, met achterkant schilderij en voorkant
-   Veel kleurtjes en gekke dingen
-   Houdt van Eastereggs🐣

<br>

**Clocks.** [**allemaal klokkies**](https://vasilis.nl/clocks/)

-   Houdt van klokken maken: omdat het beweegt
-   [Vasilis/greek-time](http://www.vasilis.nl/greek-time) -> klok die precies de tijd geeft (+/- een uurtje) (daar begon zn onderzoek naar klokken)
-   [Vasilis/binary-clock](http://www.vasilis.nl/binary-clock) -> nerd klok die telt in binary -> dingen flippen was nieuw toen hij het maakte (3D)
-   [Vasilis/wowclock](http://www.vasilis.nl/wowclock) -> WOW ⌚️
-   [Vasilis/decimal-clock](http://www.vasilis.nl/decimal-clock) -> moeilijk leesbaar, leuk concept
-   [Vasilis.nl/clocks/hsl-clock/02/](https://vasilis.nl/clocks/hsl-clock/02/)
-   [Vasilis.nl/clocks/pix-clock/](http://Vasilis.nl/clocks/pix-clock/) -> Toegankelijkheid > hij heeft van elke foto een beschrijving gemaakt voor blinde mensen

<br>

**Toegankelijkheid**

-   **HvA nieuw schoolgebouw:** getest 100% toegankelijk > theoretisch, maar is het totaal niet.
-   Denk echt na en zorg ervoor dat mensen er echt iets mee kunnen
-   **Screenreader:** 

-   Leest alle headings op
-   Houdt het kort voor screenreaders en overzichtelijk
-   Iconen, goede naam geven
-   Laat zien dat screenreaders alles op lezen, heel het menu door etc. Duurt erg lang en werkt slecht

-   Kun je oplossen door bv navigatie weg te halen
-   Mensen komen voor de content

<br>


**Feedback squadpage project board 13/9**

Table view GitHub project denk aan priorities

Project board tips: prio's, dod's, in een issue moet een taak duidelijk worden. Uitleggen hoe zwaar/lang een taak is. Bijv, 5-10-20 punten.

In GitHub commit description #6 voor bijv. issue om hem te koppelen.

<br>


**WEEK 3**
<br>



**Project Management**

**Epic > Stories > Tasks**

**Epics:** Een handige manier om werk te organiseren en een hiërarchie te creëren. Het idee is om werk op te splitsen in opleverbare stukken, zodat grote projecten kunnen worden afgerond en klanten op regelmatige basis waarde krijgen. Epics helpen teams werk op te splitsen terwijl ze naar een groter doel werken.

Epics zijn dus grote stukken werk die worden opgesplitst in kleinere taken, die vervolgens in sprints kunnen worden voltooid. Dit helpt teams om gefocust te werken en regelmatig waarde te leveren.

Voorbeelden: 

-   De website van ... optimaliseren in zoekmachines (Hema, kruidvat etc)
-   De website van ... verbeteren
-   In een zin noemen van wat je in een project gaat doen

**Stories:**

Dingen die je moet doen die onder een Epic vallen

Voorbeelden:

Een nieuwe e-commerce website lanceren voor...

-   Een winkelmand toevoegen
-   Betalingsmogelijkheid toevoegen
-   Een klantenserviceportal toevoegen

Een bestaande website verbeteren voor...

-   Website sneller maken (-> begin met testen)
-   Website gebruiksvriendelijker maken (-> testen)
-   Website toegankelijker maken (-> testen!!!)\
**User stories**

-   Als bezoeker, wil ik producten kunnen verwijderen uit mijn winkelmandje als ik iets gevonden heb wat beter past bij wat ik nodig heb.
-   Als bezoeker, wil ik producten in mijn winkelmandje kunnen doen om overzicht te houden wat ik aanschaf.
-   Als bezoeker, wil ik overzicht houden op het uit te geven bedrag zodat ik het gevoel heb in controle te zijn.
-   Betalingsmogelijkheden toevoegen

Met **Userstories** heb je meer grip op je project

-   Kan je taken maken?
-   Heb je genoeg grip?

Voorbeeld taken onder user story een winkelmandje toevoegen:

-   Database voor winkelmandje
-   Overzicht winkelmandje tonen in HTML+CSS
-   Producten verwijderen uit DB

---> Wees specifieker dan dit

Voorbeelden: 

-   Interface ontwerpen voor het verwijden van producten. (Nadenken over elementen, semantiek, enz.)
-   Interface ontwerpen voor het aantal producten aanpassen.
-   Enz.

**Planning poker**

Is een consensus-gebaseerde techniek voor het schatten. Leden van de squad geven schattingen door genummerde kaarten op tafel te leggen of op schrijven zonder hardop te zeggen.\
Kaarten worden omgedraaid of besproken en de schattingen worden vervolgens gesproken.\
Zo heb je als team door wat er moet gebeuren en krijg je een goed beeld van je taken.

<br>

**WOENSDAG: 18 sept**

**Wrap up: over hoe je projecten oplevert **

-   Codeconventies
-   ReadMe
-   Hoe? -> debriefing
-   Live zetten / publiceren
-   Cms uitleg -> readme
-   Huisstijl -> readme/ PDF
-   Gestructureerde code/ semantiek/ tabs/ comments weg / console.log weg
-   Refactor

# wrap-up
- **Refactored code**: gestructureerde code (conventies), semantiek, geen commented code, geen console.log(), goede tabs
- **readme.md**: kenmerken, live link, screenshot (s?),  Instructies (uitleg over gebruik), installatiehandleiding, CMS uitleg, huisstijl (of waar die te vinden is), bijdragen? (Hints voor volgende dev-teams), gebruikte bronnen.
- Live zetten: Github pages, Vercel, Netlify, ondrender.