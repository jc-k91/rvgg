$(() => { // WINDOW ONLOAD START

    // API key for RAWG; must include with every request
    const keyRAWG = 'e5b52324368b42a2b8079aae967d4128'
    $.ajax({ // AJAX CALL START
        url:`https://api.rawg.io/api/games?key=${keyRAWG}&page_size=24&page=4&dates=1970-01-01,1999-12-31`//&parent_platforms=12`,
    }).then(
        (data)=>{
            console.log(data)

        },
        ()=>{
            console.log('bad request')
        }
    ) // AJAX CALL END


//////// GLOBAL VARIABLES ////////
    // Used in parseFilters() to hold filter values to be used in API request
    let parsedPlatformFilterArr = []
    let parsedDateFilterArr = []


//////// FUNCTIONS ////////
    // Toggle menu visibility
    const toggleMenu = (event) => {
        event.preventDefault()
        $('#menu-container').toggleClass('hide')
    }

    // Checks if checkbox is checked (that's a lot of 'check' in one sentence)
    const checkboxCheckChecker = (filterArrIndex) => {
        filterArrIndex.checked == true
    }

    // Parses filter selections into values we can push into API request parameters
    const parseFilters = () => {
        parsedPlatformFilterArr = []
        let selectedFilters = $('input[type="checkbox"]')
        for (let i = 0; i < 6; i++) {//filterItem of selectedFilters) {
            console.log($(selectedFilters.eq(i)).attr('checked'));
            if ($(selectedFilters.eq(i)).attr('checked') == 'checked') {
                parsedPlatformFilterArr.push($(selectedFilters.eq(i)).val())
            }
        }
        parsedDateFilterArr = []
        for (let i = 6; i < 8; i++) {//filterItem of selectedFilters) {
            console.log($(selectedFilters.eq(i)).attr('checked'));
            if ($(selectedFilters.eq(i)).attr('checked') == 'checked') {
                parsedDateFilterArr.push($(selectedFilters.eq(i)).val())
            }
        }
        console.log(parsedPlatformFilterArr);
        console.log(parsedDateFilterArr);
    }

    // Renders API request results into cards
    const renderCards = () => {

    }

//////// LISTENERS ////////
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

    // Applies selected filters on apply button click
    $('#apply-filters').on('click', (event) => {
        event.preventDefault()
        parseFilters()
        platformFilter = parsedPlatformFilterArr.join(',')
        dateFilter = parsedDateFilterArr.join(',')

        // console.log($('input[type="checkbox"]').toArray());
        // console.log($('input[type="checkbox"]').prop('checked'));
    })




}) // WINDOW ONLOAD END
