function hideChangeChevron(hideTagClassNameWithoutId, chevronClassNameWithoutId, button) {
    let id = button.getAttribute("id");
    let hideTagClassName = "." + hideTagClassNameWithoutId + "-" + id;
    let chevronClassName = "." + chevronClassNameWithoutId + "-" + id;
    if ( $(hideTagClassName).css("display") == "none" ){
        $(hideTagClassName).css("display","block");
        $(chevronClassName).html( "<i class=\"fa-solid fa-chevron-down\"></i>" );
    } else {
        $(hideTagClassName).css("display","none");
        $(chevronClassName).html( "<i class=\"fa-solid fa-chevron-left\"></i>" );
    }
}

function mobileMenuData(prefix) {
    $('.menu-block-back').toggleClass('active');
    $('.menu-block').toggleClass('active');
    if($('.list-ico').attr('src')== prefix + 'data/img/common/button/list_button_ico.png') {
        $('.list-ico').attr('src', prefix + 'data/img/common/button/list_exit_ico.png');
    } else {
        $('.list-ico').attr('src', prefix + 'data/img/common/button/list_button_ico.png');
    }   
}

function nestingOrder(order) {
    var result = ''
    if(order > 0) {
        for (let i = 1; i <= order; i++) { // выведет 0, затем 1, затем 2
            result = result + "../";
        }
    }
    else {
        return ''
    }
    return result
}