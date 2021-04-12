$(() => { // WINDOW ONLOAD START

    // API key for RAWG; must include with every request
    const keyRAWG = 'e5b52324368b42a2b8079aae967d4128'
    $.ajax({ // AJAX CALL START
        url:`https://api.rawg.io/api/games?key=${keyRAWG}&page_size=24&page=4&dates=1970-01-01,1999-12-31&parent_platforms=12`,
    }).then(
        (data)=>{
            console.log(data)

        },
        ()=>{
            console.log('bad request')
        }
    ) // AJAX CALL END

    // FUNCTIONS
    // Toggle menu visibility
    const toggleMenu = (event) => {
        event.preventDefault()
        $('#menu-container').toggleClass('hide')
    }

    // Renders API request results into cards
    const renderCards = () => {

    }

    // LISTENERS
    // Toggles filter menu modal visibility
    $('#menu-button').on('click', toggleMenu)

    // Close filter menu on close button click
    $('#close-filters').on('click', toggleMenu)

    // Clears filter checkboxes on clear button click
    $('#clear-filters').on('click', (event) => {
        event.preventDefault()
        // console.log($('input[type="checkbox"]').prop('checked'));
        $('input[type="checkbox"]').prop('checked', false)
    })

    // // Apply selected filters
    // $('#apply-filters').on('click', (event) => {
    //     event.preventDefault()
    //     $('input[type="checkbox"]').prop(() => {
    //         this.checked = false
    //     })
    // })




}) // WINDOW ONLOAD END
