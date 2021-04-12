$(() => { // WINDOW ONLOAD START

    // API key for RAWG; must include with every request
    const keyRAWG = 'e5b52324368b42a2b8079aae967d4128'
    $.ajax({ // AJAX CALL START
        url:`https://api.rawg.io/api/games?key=${keyRAWG}&dates=1970-01-01,1999-12-31&parent_platforms=14`,
        // data: {
        //     '$limit': 12,
        // },
    }).then(
        (data)=>{
            console.log(data)

        },
        ()=>{
            console.log('bad request')
        }
    ) // AJAX CALL END
}) // WINDOW ONLOAD END
