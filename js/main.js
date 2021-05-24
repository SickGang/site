$(function () {
    $('a.hero-video_link').YouTubePopUp({ autoplay: 0 }) // Disable autoplay
    $('.company-accordion ul li').click(function () {
        $(this).toggleClass('active')
        $(this).find('.company-accordion_item-text').toggle(400)
    })

    $(
        ".header-nav li a[href^='#'], .dropdown-menu a[href^='#'], .header-img a[href^='#'], .hero-button [href^='#']"
    ).click(function () {
        var fixed_offset = 150
        $('html,body')
            .stop()
            .animate(
                { scrollTop: $(this.hash).offset().top - fixed_offset },
                1000
            )
    })
    $('.button-copy').click(function (e) {
        const str = $(this).siblings('.value')[0].innerText
        const el = document.createElement('textarea')
        el.value = str
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        $('.copied').show(200)
        setTimeout(function () {
            $('.copied').hide(200)
        }, 3000)
    })
})
