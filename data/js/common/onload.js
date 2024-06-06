function awake(nestOrder){
    windowHeightCheckForFooter();
    linkLauncher();
    menuGeneration(nestOrder);
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
    for (let key in window.LinkDataRepository) {
        let searchStroke = 'a[href="' + key + '"]';
        $(searchStroke).attr('href',window.LinkDataRepository[key]);
    }
}

function menuGeneration(nestOrder){
    var menuLoadAreaBlock = $(".menu-block-load-area");
    var summHtmlBlock = "";
    mainMenuContent.forEach((menuArrayElement) => {
        let menuTemp = menuBodyTemplate;
        var menuList = "";        

        menuTemp = menuTemp.replace("@@MENUSECTIONNAME@@", menuArrayElement.SectionName);
        menuTemp = menuTemp.replace(/@@MENUSECTIONID@@/g, menuArrayElement.id);

        menuArrayElement.SectionMenuItems.forEach((element) => {
            let menuStrokeTemp = menuItemTemplate;
            menuStrokeTemp = menuStrokeTemp.replace("@@MENUITEMNAME@@", element.ItemName);
            menuStrokeTemp = menuStrokeTemp.replace("@@MENUITEMLINK@@", nestingOrder(nestOrder) + element.ItemLink);
            menuStrokeTemp = menuStrokeTemp.replace("@@MENUITEMLOGO@@", element.ItemLogo);
            menuList = menuList + menuStrokeTemp;
        });

        menuTemp = menuTemp.replace("@@MENUSECTIONITEMLIST@@", menuList);
        
        summHtmlBlock = summHtmlBlock + menuTemp;
    });

    menuLoadAreaBlock.html( summHtmlBlock );
}