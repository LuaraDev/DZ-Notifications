$(document).ready(function(){
    window.addEventListener('message', function(event){
        var content

        if (event.data.color == 1) {
            content = $('<div class="container-desc" style="display: none"><div class="text"><i style="padding: 1px;" class="fas fa-info-circle"></i> ' + event.data.text + '</div></div>')
        } else if (event.data.color == 2) {
            content = $('<div class="container-desc error" style="display: none"><div class="text"><i style="padding: 1px;" class="fas fa-exclamation-triangle"></i> ' + event.data.text + '</div></div>')
        } else if (event.data.color == 3) {
            content = $('<div class="container-desc success" style="display: none"><div class="text"><i style="padding: 1px;" class="fas fa-check-circle"></i> ' + event.data.text + '</div></div>')
        }

        $('.container').prepend(content)
        $(content).fadeIn(400)

        setTimeout(function(){
            $(content).fadeOut(1250)
        }, 3750)

        setTimeout(function(){
            $(content).css('display', 'none')
        }, 5000)
    })
})