/**
 * @author luics(luics.xu@gmail.com)
 * @date 2013-03-10
 */

$(function() {

    var disqus_shortname = 'tmallfe';

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

//    var $window = $(window);
//    var $body = $(document.body);
//    var $toolkit = $('#toolkit');
//    $window.scroll(function(e) {
//        //console.log('onscroll', $window.scrollTop(), $body.height(), $window.height());
//
//        if ($toolkit.css('display') === 'none') {
//            //console.log('toolkit display:none');
//            if ($window.scrollTop() > $body.height() - $window.height()) {
//                //console.log('toolkit expand');
//                //$toolkit.fadeIn(3000);
//            }
//        }
//    });
});