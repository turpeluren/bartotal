---
title: "Liten tutorial av hur man gör en post med tips"
author: 
  - "turpelurpeluren"
publishDate: "27 January 2023"
description: "An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter"
tags: ["example", "blog", "image"]
ogImage: "/social-card.png"
coverImage:
  src: "src/assets/img_2698.jpeg"
  alt: "Astro build wallpaper"
draft: true
---

###### Hej mina vackra vänner!

## Vad man behöver i en post

- fyll i titel
- fyll i författare. Skriv alltid ditt namn ***exakt*** likadant annars skapas flera olika authors. Flera författare till en post går bra och uppmuntras. Flera författare separeras med komma. eg. `ture, Glenn`
- fyll i datum på formen dag(en siffra), månad(hursom), år(20xx). eg `7 Juli 2024`
- fyll i bekskrivning (tror ej det behövs men kan vara fint för den syns på vissa ställen).
- tags är optional. Separera dem med komma. eg. `tag1, tag2`
- Skriv själva posten i "body". Går att lägga in bilder och allt möjligt.

Testa gärna vad ni kan göra i "body"-editorn. Det går att redigera som rå markdown om man vill, annars är standard så kallad Rich Text.

## Publicera/spara

För att spara, klicka "Spara" högst upp. Posten sparas då automatiskt som ett draft. Klicka ner där det står "Status: Draft" för att välja antingen "In Review" om ni vill ha feedback från övriga bar totalister, eller "Ready" om ni vill publicera. För att publicera, klicka på "Publish" och "Publish now".

Under fliken "Workflow" kan man se alla drafts, in review och redo artiklar. Vill vi köra ett riktigt redaktionsupplägg kan vi använda denna flik på riktigt.

Säg till mig (ture) om något krånglar/inte blir publicerat pga nån bugg.

## Fler tips:

### Fotnötter

Denna text har en fotnöt[^1]. Denna har en annnan[^2].

### Lägga till cover-image till en post

Även kallat hero eller featured image. Hamnar stort över titeln på posten. I denna post bilden på ludde med ljuset. Välj/ladda upp en bild under "coverImage" och skriv en alternativ text till ifall bilden ej laddar/för folk med synnedsättning. Cover image behövs ej det är helt frivilligt.

### Lägga till og-image

Og-image (open graph image) är den bild som visas som kort när man delar en länk till posten i sociala medier/meddelanden. Ludvig har gjort en universell og-image men vill man ha en specifik i sin post kan man välja en under "og-image". Den bör vara 1280x640 pixlar, men det funkar säkert ändå.


[^1]: Första fotnöten hänvisar till här nere.
[^2]: Och den andra till här nere.
