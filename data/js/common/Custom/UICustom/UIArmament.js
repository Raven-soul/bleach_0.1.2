function changeFilterArmament(element) {
    if(element.options[element.selectedIndex].text == "Отменить фильтр"){
        element.selectedIndex = 0;
    }
    var data = element.options[element.selectedIndex].value;
    
    alert(data);
}

function selectAllFilters() {
    alert("data");
}

async function showArmamentAbilities() {
    var KAItemGridBlock = $(".grid-abilities-data");
    var summHtmlBlock = "";

    for(const [abilitiesId, abilitiesValue] of Object.entries(armamentAbilitiesContent)){
        let itemTemp = KAGridItemTemplate;
        
        itemTemp = itemTemp.replace("@@ITEMLINK@@", "#");
        itemTemp = itemTemp.replace("@@ITEMLEVEL@@", abilitiesValue.cost);
        itemTemp = itemTemp.replace("@@ITEMSCHOOLLOGO@@", abilitiesValue.type.ico);
        itemTemp = itemTemp.replace("@@ITEMNAME@@", abilitiesValue.name);

        var componentsSum = '';

        if(abilitiesValue.components.verbal)   {componentsSum = "В";}
            else {componentsSum = ".";} 
        if(abilitiesValue.components.somatic)  {componentsSum += "С";}
            else {componentsSum += ".";} 
        if(abilitiesValue.components.material) {componentsSum += "М";}
            else {componentsSum += ".";} 
        if(abilitiesValue.components.released) {componentsSum += "Р";}
            else {componentsSum += ".";} 

        itemTemp = itemTemp.replace("@@ITEMCOMPONENTS@@", componentsSum);
        
        summHtmlBlock = summHtmlBlock + itemTemp;
    }

    KAItemGridBlock.html( summHtmlBlock );
}