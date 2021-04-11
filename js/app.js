$(() => { // WINDOW ONLOAD START

    // API key for RAWG; must include with every request
    const keyRAWG = 'e5b52324368b42a2b8079aae967d4128'
    $.ajax({ // AJAX CALL START
        url:`https://api.rawg.io/api/games?key=${keyRAWG}`,
        data: {
            'page-size': 12,
            'parent-platforms': 'sega',
            // 'dates': ,
        }

    }).then(
        (data)=>{
            console.log(data)
        },
        ()=>{
            console.log('bad request')
        }
    ) // AJAX CALL END
}) // WINDOW ONLOAD END
