<!-- SNS 공유용 주소 연결 용 -->

var url_default_ks = "https://story.kakao.com/share?url=";
var url_default_fb = "https://www.facebook.com/sharer/sharer.php?u=";
var url_default_tw_txt = "https://twitter.com/intent/tweet?text=";
var url_default_tw_url = "&amp;url=";

var url_this_page = location.href;
var title_this_page = document.title;

var url_combine_ks = url_default_ks + url_this_page;
var url_combine_fb = url_default_fb + url_this_page;
var url_combine_tw = url_default_tw_txt + document.title + 
url_default_tw_url + url_this_page;
