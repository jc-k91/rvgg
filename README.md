# retro_video_game_gallery
Retro Video Game Gallery (RVGG)

In its most basic form, RVGG will allow a user to access information on a limited scope of retro video games.

// BASIC FUNCTIONALITY //
    RVGG is a gallery of retro video games where users can pull up data about the displayed games.

// // Click UI // //
    Clickable card layout with title cards that include a picture of the game cover or the like, along with title. User will click on a card to flip and zoom into details.

// // Video Game UI // //
    Move your character to different displays using keyboard inputs and press a button to pull up details about each game.

// TECHNOLOGIES USED //

    W3Schools - https://www.w3schools.com/howto/howto_css_flip_card.asp - used CSS to make a simple 3D flipping animation.

    Used a ton of JavaScript and jQuery to create listeners, parse data from API requests, and add information and pictures from the parsed data to the DOM to show the content on the base HTML page.

// APPROACH //
    I decided pretty early on that I want to create a site that calls info from some database for a user to view. I was originally thinking I wanted to use the Rick and Morty API, but opted to go for an API that was not in the provided list. I ended up going for a video game database API because, well, I like video games. I wanted to make things more interesting and challenge myself and make the primary UI in the style of a Pokemon game (4-directional movement with interactable displays or exhibits, so-to-speak, that would bring up information for the corresponding video game), while allowing the user to opt out for a more familiar click interface, but I was out of commission for the weekend, so I decided shelving the videogame UI for the time being would be the right move.

    I found Twitch's IGDB API, but I couldn't get it working (I think it's broken? It's throwing tons of 404 errors), so after a little searching and a bit of trial and error, I found the RAWG API, which functions almost exactly the way I need. I initially planned to include each game's description/summary in their respective displays, but that's a paid feature for the RAWG API, so I changed my project's title from Retro Video Game Museum to Retro Video Game Gallery so I can do without the descriptions.

    The next phase was figuring out how many and which games to include. There was no way to distill decades worth of video games into a short concise list, so I opted to add filters via a checklist modal (something we haven't explored in class) and display only 24 tiles at a time. I knew from the beginning that I would want the cards to flip over and then zoom for more details, and that was a pain in the butt to implement, but I was able to get it working.

    I also had some UI ideas I wanted to implement, but decided on only adding a custom header. With the help of my UX/UI designer girlfriend, the custom headers were finished and looking great!

    Once I had the base functionality and styling done, I made the page responsive to larger window sizes (it's definitely not perfect, but good enough for me to call it quits for the day), and with that, the project is complete!

// UNSOLVED PROBLEMS

// // ALL // //
    - I think I was completely in over my head with the video game UI. I MIGHT have been able to do it if I was actually able to work Friday-Sunday.

    - I wanted the gallery to have clickable images that would pop out into a full screen image carousel, but didn't have enough time to complete it.

    - I want to make the JS a bit dryer.

    - I think I can make the responsiveness in the layout much more efficient next time around. This time, I had forgotten that I could change the base REM value of the page to automatically resize a TON of elements without having to write out each one. I realized way too late to go back and change the implementation to the REM method. (Checked on a few other browsers on different devices, and it's definitely broken in most of them)

    - Add more pages to go through all results, not just the first 24.

    - The filters break when there are no results. It sometimes applies a filter that includes EVERYTHING, even beyond the scope of my page, or doesn't return anything.

    - Image cards look ugly because

// FORESEEN CHALLENGES

// // Click UI // //
    - Making cards that flip and zoom into details/content

// // Video Game UI // //
    - Keeping character sprite centered while scrolling the map (background) underneath to simulate Pokemon style overworld gameplay

    - Scrolling the map and not having the entire screen get pushed around (i.e. when character is "moving" down, the map is actually scrolling down, which could push the entire site down if not implemented properly)

// UNFORESEEN CHALLENGES

// // GENERAL // //
    - API docs were TERRIBLE, not for the lack of information, but because it would keep refreshing the page automatically every few seconds.

// // Click UI // //
    - Flipping animation for cards was much more finicky than I had initially thought. I was able to make each side reverse on its own, but it wouldn't work when I added in the code for the animation. It seems to be really picky about the order in which you add styling and transform code. I thought it was weird that it would work if I copy the code from W3Schools but not when I type my own version, and then realized I had added a single extra comma in my implementation of the flip, and it was breaking everything.

    - CSS property application priority behaves very strangely. Took a little maneuvering and help from classmates to figure out how to fix some parts.

// // Checkboxes // //
    - Getting checkboxes to work for applying result filters was surprisingly complicated. I imagine there is a better way to implement them than in the way I did, but I didn't have time to dig through too many docs due to already being a bit behind schedule. The way I conceptualized it works, so I will go back to the docs after I'm finished with the project.
