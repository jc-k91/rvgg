# retro_video_game_museum
Retro Videogame Museum (RVGM)

In its most basic form, RVGM will allow a user to access information on a limited scope of retro video games.

// BASIC FUNCTIONALITY //
    RVGM is a gallery of retro video games where users can pull up data about the displayed games.

// // Click UI // //
    Clickable card layout with title cards that include a picture of the game cover or the like, along with title. User will click on a card to flip and zoom into details.

// // Video Game UI // //
    Move your character to different displays using keyboard inputs and press a button to pull up details about each game.

// TECHNOLOGIES USED //


// APPROACH //
    I decided pretty early on that I want to create a site that calls info from some database for a user to view. I was originally thinking I wanted to use the Rick and Morty API, but opted to go for an API that was not in the provided list. I ended up going for a video game database API because, well, I like video games. To make things more interesting and challenge myself, I decided to make the primary UI in the style of a Pokemon game (4-directional movement with interactable displays or exhibits, so-to-speak, that would bring up information for the corresponding video game), but allow the user to opt out for a more familiar click interface.

    I found Twitch's IGDB API, but I couldn't get it working (I think it's broken?), so after a little searching and a bit of trial and error, I found the RAWG API, which functions exactly the way I need.

///// PROGRESS SUMMARY LOG /////
    04-09-21: Created a GitHub repository and cloned it to my computer. Trying out having multiple css and javascript folders to keep sections of code organized.

    04-09-21: IGDB, Twitch's gaming database API, is being really finicky with lots of 404 errors. Found a good substitute in RAWG.

    04-09-21: Developed ideas for potential web apps for project 1 and settled for a sort of database/museum type app that will allow users to pull up information on a limited scope of video games.
