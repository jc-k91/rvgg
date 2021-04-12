# retro_video_game_museum
Retro Video Game Gallery (RVGG)

In its most basic form, RVGM will allow a user to access information on a limited scope of retro video games.

// BASIC FUNCTIONALITY //
    RVGM is a gallery of retro video games where users can pull up data about the displayed games.

// // Click UI // //
    Clickable card layout with title cards that include a picture of the game cover or the like, along with title. User will click on a card to flip and zoom into details.

// // Video Game UI // //
    Move your character to different displays using keyboard inputs and press a button to pull up details about each game.

// TECHNOLOGIES USED //
    W3Schools - https://www.w3schools.com/howto/howto_css_flip_card.asp

// APPROACH //
    I decided pretty early on that I want to create a site that calls info from some database for a user to view. I was originally thinking I wanted to use the Rick and Morty API, but opted to go for an API that was not in the provided list. I ended up going for a video game database API because, well, I like video games. I wanted to make things more interesting and challenge myself and make the primary UI in the style of a Pokemon game (4-directional movement with interactable displays or exhibits, so-to-speak, that would bring up information for the corresponding video game), while allowing the user to opt out for a more familiar click interface, but I was out of commission for the weekend, so I decided shelving the videogame UI for the time being would be the right move.

    I found Twitch's IGDB API, but I couldn't get it working (I think it's broken? It's throwing tons of 404 errors), so after a little searching and a bit of trial and error, I found the RAWG API, which functions exactly the way I need.

// FORESEEN CHALLENGES

// // Click UI // //
    - Making cards that flip and zoom into details/content

// // Video Game UI // //
    - Keeping character sprite centered while scrolling the map (background) underneath to simulate Pokemon style overworld gameplay

    - Scrolling the map and not having the entire screen get pushed around (i.e. when character is "moving" down, the map is actually scrolling down, which could push the entire site down if not implemented properly)

// UNFORESEEN CHALLENGES

// // Click UI // //
    - Flipping animation for cards was much more finicky than I had initially thought. I was able to make each side reverse on its own, but it wouldn't work when I added in the code for the animation. It seems to be really picky about the order in which you add styling and transform code. I thought it was weird that it would work if I copy the code from W3Schools but not when I type my own version, and then realized I had added a single extra comma in my implementation of the flip, and it was breaking everything.
