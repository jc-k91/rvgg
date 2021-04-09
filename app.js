$(() => { // WINDOW ONLOAD START
    // fetch(`https://id.twitch.tv/oauth2/token?client_id=uknscyf4gpf19volzwhlxwx6b4mdv2&client_secret=ufxl89hiw4rs2scntqc2z65zktcdf8&grant_type=client_credentials`).then(console.log(data))
    const keyRAWG = 'e5b52324368b42a2b8079aae967d4128'

    $.ajax({ // AJAX CALL START

        url:'https://api.rawg.io/api/platforms?key=e5b52324368b42a2b8079aae967d4128'
    }).then(
        (data)=>{
            console.log(data)
        },
        ()=>{
            console.log('bad request')
        }
    ) // AJAX CALL END

}) // WINDOW ONLOAD END
