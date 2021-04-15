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

    // Click counter to determine first user's first click on filter menu icon
    let clickCounter = 0


/////////////////////////////////////////
/////////////// FUNCTIONS ///////////////
/////////////////////////////////////////

    // Toggles menu visibility
    const toggleMenu = (event) => {
        event.preventDefault()
        $('#menu-container').toggleClass('hide')
        if (clickCounter === 0) {
            $('#onboarding').addClass('slide-out')
        }
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
            // Pics
            const gameImageArr = []

            // Render setup
            const gameImageURL = arr[i].background_image
            const gameTitle = arr[i].name
            const esrb = arr[i].esrb_rating?.name || 'Not available'
            const releaseDate = arr[i].released


            // content insertion into DOM elements
            const $title = $('<h3>').text(gameTitle).addClass('details-title')
            const $ratingHeading = $('<h5>').text('ESRB Rating').addClass('details-heading')
            const $rating = $('<p>').text(esrb).addClass('details-p')
            const $releaseDateHeading = $('<h5>').text('Release Date').addClass('details-heading')
            const $releaseDate = $('<p>').text(releaseDate).addClass('details-p')


            // jQuery parts setup
            const $card = $('<div>').addClass('card')
            const $cardSleeve = $('<div>').addClass('card-sleeve')
            const $cardCoverImg = $('<img>').attr('src', gameImageURL)
            const $cardFront = $('<div>').addClass('card-front')
            const $cardBack = $('<div>').addClass('card-back')
            const $gameDetails = $('<div>').addClass('game-details')
            const $galleryContainer = $('<div>').addClass('gallery-container hide')
            const $detailsButtonContainer = $('<div>').addClass('details-button-container')
            const $moreDetailsButton = $('<button>').text('Gallery').addClass('details-button button')

            // Appendages (from outside in)
            $('.card-container').append($card)
            $card.append($cardSleeve)
            $cardSleeve.append($cardFront).append($cardBack)
            $cardFront.append($cardCoverImg)
            $detailsButtonContainer.append($moreDetailsButton)
            $cardBack.append($title).append($ratingHeading).append($rating).append($releaseDateHeading).append($releaseDate).append($galleryContainer).append($detailsButtonContainer)

            // Adds gallery photos to gallery photo container
            for (let j = 0; j < (arr[i].short_screenshots[j] < 6 ? arr[i].short_screenshots[j].length : 6); j++) {
                const $galleryImage = $('<img>').attr('src', arr[i].short_screenshots[j].image)
                $galleryContainer.append($galleryImage)
            }

            // Adds click listener to each card for flip animation
            $cardSleeve.on('click', (event) => {
                if (!$(event.target).is('button')) {
                    $(event.currentTarget).toggleClass('flip')
                }
            })

            // Adds click listener to each card's more details button; enlarges details on click and makes gallery visible and changes button text to close, which closes the details on click.
            $card.on('click', (event) => {
                if ($(event.target).hasClass('details-button')) {
                    $(event.currentTarget).toggleClass('selected-card')
                    $card.children().eq(0).children().eq(1).children().eq(5).toggleClass('hide')
                    // for (let k = 0; k < $('.'); k++)
                    // toggleScroll($('.card-container'))
                    if ($('.details-close-button').hasClass('details-close-button')) {
                        $('.card-container').toggleClass('disable-scroll')
                        $('.details-button').text('Gallery').removeClass('details-close-button').addClass('details-button')
                    } else {
                        $('.details-button').text('Close').addClass('details-close-button')
                    }
                }
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
                let dataArr = data.results
                renderCards(dataArr)
            },
            ()=>{
                console.log('Bad request. Check API data request URL.')
            }
        ) // AJAX CALL END
    } // -------- requestData() END --------

    const loadingScreen = () => {
        let loadingText = 'Loading'
        const $loadingContainer = $('<div>').attr('id', 'loading-container')
        const $loadingTextContainer = $('<p>').text(loadingText).attr('id', 'loading-text')

        $loadingContainer.append($loadingTextContainer)
        $('body').append($loadingContainer)

        let intervalIteration = 0
        const loadingTextUpdater = () => {
            loadingText += '.'
            intervalIteration++
            $loadingTextContainer.text(loadingText)
            if (intervalIteration == 4) {
                clearInterval(interval)
                $loadingContainer.remove()
            }
        }
        let interval = setInterval(loadingTextUpdater, 550)
    } // -------- loadingScreen() END --------

    const toggleScroll = (jQueryObject) => {
        jQueryObject.addClass('disable-scroll')
    } // -------- toggleScroll() END --------



/////////////////////////////////////////
/////////////// LISTENERS ///////////////
/////////////////////////////////////////

    // Toggles filter menu modal visibility
    $('#menu-button').on('click', toggleMenu)

    // Toggles menu button styling on hover
    $('header').on('hover', (event) => {
        $(event.currentTarget).attr('src', 'imgs/icon_filter-red.png')
    })

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
        $('.card-container').empty()
        parseFilters()
        concatFilters()
        requestData()
        toggleMenu(event)
        loadingScreen()
    })


}) // WINDOW ONLOAD END
