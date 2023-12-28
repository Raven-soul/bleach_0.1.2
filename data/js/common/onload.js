function awake(){
    windowHeightCheckForFooter();
    linkLauncher();
}

function windowHeightCheckForFooter() {
    // прикрепление футера к окончанию страницы
    if( $(document).height() <= $(window).height() ){		
        $(".footer-area").addClass("fixed-bottom");
    } else {
        $(".footer-area").attr('class','footer-area');
    }
}

function linkLauncher(){  
    // заполняет веб-страницу ссылками из репозитория
    for (let key in window.linkData) {
        let searchStroke = 'a[href=' + key + ']';
        $(searchStroke).attr('href',window.linkData[key]);
    }
}