function awake(){
    windowHeightCheckForFooter();
}

function windowHeightCheckForFooter() {
    if( $(document).height() <= $(window).height() ){		
        $(".footer-area").addClass("fixed-bottom");
    } else {
        $(".footer-area").attr('class','footer-area');
    }
}