$(() => { // WINDOW ONLOAD START
    hello()

    // API key for RAWG; must include with every request
    const keyRAWG = 'e5b52324368b42a2b8079aae967d4128'
    $.ajax({ // AJAX CALL START
        url:`https://api.rawg.io/api/platforms?key=${keyRAWG}`
    }).then(
        (data)=>{
            console.log(data)
        },
        ()=>{
            console.log('bad request')
        }
    ) // AJAX CALL END
}) // WINDOW ONLOAD END
