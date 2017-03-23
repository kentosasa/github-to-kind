window.addEventListener ('load', main, false);

function main() {
  console.log('load github pages')

  var elements = $('.review-comment-contents .comment-body').each(function() {
    var html = $(this).html()
    html = html
      .replace(/書けます。*/g,'書けるよ🙄')
      .replace(/修正しました。*/g,'修正しました🙇')
      .replace(/なりそうです。*/g,'なりそう🤔')
      .replace(/思います。*/g,'思う🙂')

    $(this).html(html)
  })
}
