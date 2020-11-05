$(function () {
  const $sponsorsOuter = $('#sponsors')
  if ($sponsorsOuter.length > 0) {
    $.ajax('https://pqrs.org/sponsors/sponsors.json').then(
      (response) => {
        let $sponsors = $('<div>').addClass('sponsors')

        let scale = null
        response.forEach((sponsor) => {
          if (scale !== null && sponsor.avatar.scale !== scale) {
            $sponsorsOuter.append($sponsors)
            $sponsors = $('<div>').addClass('sponsors')
          }
          scale = sponsor.avatar.scale

          const name = sponsor.name !== '' ? sponsor.name : sponsor.login

          const $img = $('<img>')
            .attr('src', sponsor.avatar.url)
            .attr('alt', name)
            .attr('width', 80 * sponsor.avatar.scale)
            .attr('height', 80 * sponsor.avatar.scale)

          const paddingY = 10 * sponsor.avatar.scale + 'px'
          const paddingX = 5 * sponsor.avatar.scale + 'px'
          const $a = $('<a>')
            .attr('href', 'https://github.com/' + sponsor.login)
            .attr('target', '_blank')
            .css({
              width: 100 * sponsor.avatar.scale + 'px',
              padding: paddingY + ' ' + paddingX,
            })
            .append($img)
          $a.append($('<div>').text('@' + sponsor.login))
          if (sponsor.name !== '') {
            $a.append($('<div>').text(sponsor.name))
          } else {
            $a.append($('<div>').css({ height: '15px' }))
          }

          $sponsors.append($a)
        })

        $sponsorsOuter.append($sponsors)
      },
      (reason) => {
        $sponsorsOuter.append(
          $('<div>')
            .addClass('alert alert-danger')
            .text('Error: Failed to fetch the sponsors list.')
        )
      }
    )
  }
})