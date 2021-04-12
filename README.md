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
    W3Schools - https://www.w3schools.com/howto/howto_css_flip_card.asp

// APPROACH //
    I decided pretty early on that I want to create a site that calls info from some database for a user to view. I was originally thinking I wanted to use the Rick and Morty API, but opted to go for an API that was not in the provided list. I ended up going for a video game database API because, well, I like video games. To make things more interesting and challenge myself, I decided to make the primary UI in the style of a Pokemon game (4-directional movement with interactable displays or exhibits, so-to-speak, that would bring up information for the corresponding video game), but allow the user to opt out for a more familiar click interface.

    I found Twitch's IGDB API, but I couldn't get it working (I think it's broken?), so after a little searching and a bit of trial and error, I found the RAWG API, which functions exactly the way I need.

// FORESEEN CHALLENGES

// // Click UI // //
    - Making cards that flip and zoom into details/content

// // Video Game UI // //
    - Keeping character sprite centered while scrolling the map (background) underneath to simulate Pokemon style overworld gameplay

    - Scrolling the map and not having the entire screen get pushed around (i.e. when character is "moving" down, the map is actually scrolling down, which could push the entire site down if not implemented properly)

// UNFORESEEN CHALLENGES

// // Click UI // //
    - Flipping animation for cards was much more finicky than I had initially thought. I was able to make each side reverse on its own, but it wouldn't work when I added in the code for the animation. It seems to be really picky about the order in which you add styling and transform code. I thought it was weird that it would work if I copy the code from W3Schools but not when I type my own version, and then realized I had added a single extra comma in my implementation of the flip, and it was breaking everything.

///// PROGRESS SUMMARY LOG /////
    04-12-21: Brain seems to be working properly today. Starting off the day by fine tuning search filters.

    04-11-21: Having a really difficult time focusing on any given task. I suspect this might be a lingering side-effect from the COVID vaccine. Shelving the video game UI for now.

    04-10-21: Turns out the animation was breaking because I was adding an extra comma in the CSS... marking the line in style/main.css.

    04-10-21: Struggling to get the card flip animation working. Strangely enough, it works if I paste it directly from W3Schools, but it refuses to work if I write my own code.

    04-09-21: Set up project Trello board to keep tasks and ideas organized

    04-09-21: Created a GitHub repository and cloned it to my computer. Trying out having multiple css and javascript folders to keep sections of code organized.

    04-09-21: IGDB, Twitch's gaming database API, is being really finicky with lots of 404 errors. Found a good substitute in RAWG.

    04-09-21: Developed ideas for potential web apps for project 1 and settled for a sort of database/museum type app that will allow users to pull up information on a limited scope of video games.
