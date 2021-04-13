$(() => { // WINDOW ONLOAD START

/////////////////////////////////////////
/////////// GLOBAL VARIABLES ////////////
/////////////////////////////////////////

    // Used in parseFilters() to hold filter values to be used in API request
    let parsedPlatformFilterArr = []
    let parsedDateFilterArr = []

    // Filters parsed through parseFilters() to be added to API request URL
    let platformFilter = ''
    let dateFilter = ''
    let filterURLReady = ''

    // API key for RAWG; must include with every request
    const keyRAWG = 'e5b52324368b42a2b8079aae967d4128'
    let requestURL = `https://api.rawg.io/api/games?key=${keyRAWG + filterURLReady}&page_size=24`


/////////////////////////////////////////
/////////////// FUNCTIONS ///////////////
/////////////////////////////////////////

    // Toggles menu visibility
    const toggleMenu = (event) => {
        event.preventDefault()
        $('#menu-container').toggleClass('hide')
    } // -------- toggleMenu() END --------

    // Checks if checkbox is checked (that's a lot of 'check' in one sentence); has a funny name
    const checkboxCheckChecker = (filterArrIndex) => {
        filterArrIndex.checked == true
    } // -------- checkboxCheckChecker() END --------

    // Parses platform and date filter selections into values we can push into API request parameters
    const parseFilters = () => {
        // Part 1 parses platform filters
        parsedPlatformFilterArr = []
        let selectedFilters = $('input[type="checkbox"]')
        for (let i = 0; i < 6; i++) {
            if ($(selectedFilters.eq(i)).attr('checked') == 'checked') {
                parsedPlatformFilterArr.push($(selectedFilters.eq(i)).val())
            }
        }
        // Part 2 parses date filters
        parsedDateFilterArr = []
        for (let i = 6; i < 8; i++) {
            if ($(selectedFilters.eq(i)).attr('checked') == 'checked') {
                parsedDateFilterArr.push($(selectedFilters.eq(i)).val())
            }
        }
    } // -------- parseFilters() END --------

    // Concatenates filters to interpolate into API request URL. If no boxes are checked, all filters are added automatically to limit scope of site.
    const concatFilters = () => {
        // Part 1 concatenates platform filters
        platformFilter = `&parent_platforms=${parsedPlatformFilterArr.join(',')}`
        if (platformFilter === '&parent_platforms=') {
            platformFilter = '&parent_platforms=2,7,9,11,12,13'
        }
        // Part 2 concatenates date filters
        dateFilter = `&dates=${parsedDateFilterArr.join(',')}`
        if (dateFilter === '&dates=') {
            dateFilter = '&dates=1970-01-01,1999-12-31'
        }
        // Part 3 concatenates platform and date filters and assigns the resulting string into a single variable
        filterURLReady = platformFilter + dateFilter
        requestURL = `https://api.rawg.io/api/games?key=${keyRAWG + filterURLReady}&page_size=24`
    } // -------- concatFilters() END --------

    // Renders API request results into cards and appends to pages
    const renderCards = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            // Render setup
            const gameImageURL = arr[i].background_image
            const gameTitle = arr[i].name
            const esrb = arr[i].esrb_rating?.name || 'ESRB rating unavailable'
            const releaseDate = arr[i].released

            // content insertion into DOM elements
            const $title = $('<h3>').text(gameTitle)
            const $rating = $('<p>').text(esrb)
            const $releaseDate = $('<p>').text(releaseDate)

            // jQuery parts setup
            const $card = $('<div>').addClass('card')
            const $cardSleeve = $('<div>').addClass('card-sleeve')
            const $cardFront = $('<div>').addClass('card-front')
            const $cardBack = $('<div>').addClass('card-back')
            const $gameDetails = $('<div>').addClass('game-details')

            // Appendages (from outside in)
            $('.card-container').append($card)
            $card.append($cardSleeve)
            $cardSleeve.append($cardFront).append($cardBack)
            $cardBack.append($title).append($rating).append($releaseDate)

            // Adds click listener to each card for flip animation
            $cardSleeve.on('click', (event) => {
                $(event.currentTarget).toggleClass('flip')
            })
        }
    } // -------- renderCards() END --------

    // Requests data with selected filter parameters
    const requestData = () => {
        $.ajax({
            url: requestURL,
        }).then(
            (data)=>{
                console.log(data)
                // RENDER TEST
                let dataArr = data.results
                renderCards(dataArr)
            },
            ()=>{
                console.log('Bad request. Check API data request URL.')
            }
        ) // AJAX CALL END
    } // -------- requestData() END --------


/////////////////////////////////////////
/////////////// LISTENERS ///////////////
/////////////////////////////////////////

    // Toggles filter menu modal visibility
    $('#menu-button').on('click', toggleMenu)

    // Toggles checked attribute on checkbox click
    $('input[type="checkbox"]').on('click', (event) => {
        $(event.target).attr('checked', !$(event.target).attr('checked'))
    })

    // Close filter menu on close button click
    $('#close-filters').on('click', toggleMenu)

    // Clears filter checkboxes on clear button click
    $('#clear-filters').on('click', (event) => {
        event.preventDefault()
        // console.log($('input[type="checkbox"]').prop('checked'));
        $('input[type="checkbox"]').prop('checked', false)
    })

    // Applies selected filters and renders new results onto page on apply button click
    $('#apply-filters').on('click', (event) => {
        event.preventDefault()
        $('card-container').empty()
        parseFilters()
        concatFilters()
        requestData()
        toggleMenu(event)
    })


/////////////////////////////////////////
/////// TESTING, ATTENTION PLEASE ///////
/////////////////////////////////////////
    // $('.card-sleeve').on('click', (event) => {
    //     $(event.currentTarget).toggleClass('flip')
    // })



}) // WINDOW ONLOAD END
