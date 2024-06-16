function awakeArmamentFilters(){
    filtersGeneration();
    promptTypeLoader();
    showArmamentAbilities();
}

function awakeArmamentItem(){
    showArmamentAbilitieItem();
}

function filtersGeneration(){
    var filtersLoadAreaBlock = $(".grid-group-data");
    var summHtmlBlock = "";

    for(const [columnKey, columnValue] of Object.entries(armamentAbilitiescolumns)){
        let selecTemp = selectorTemplate;
        let DefaultItemTemp = selectorDefaultItemTemplate;
        var selectList = "";

        selecTemp = selecTemp.replace("@@SELECTORNAME@@", columnKey);
        selecTemp = selecTemp.replace("@@SELECTORID@@", columnKey + "_selector_id");
        selecTemp = selecTemp.replace("@@SELECTORFUNCTION@@", "changeFilter(this)"); //changeFilterArmament(this)");

        DefaultItemTemp = DefaultItemTemp.replace("@@DEFITEMNAME@@", columnValue.translate);

        selectList = DefaultItemTemp;

        for(const [key, value] of Object.entries(columnValue.value)){
            let selecItemTemplate = selectorItemTemplate;

            if(columnValue.itemType == "bool" || key == "discard"){
                selecItemTemplate = selecItemTemplate.replace("@@ITEMVALUE@@", key);
            } 
            else {
                if(columnValue.translate == "Тип"){
                    selecItemTemplate = selecItemTemplate.replace("@@ITEMVALUE@@", value.name);
                }
                else {
                    selecItemTemplate = selecItemTemplate.replace("@@ITEMVALUE@@", value);
                }                
            }
            
            if(columnValue.translate == "Тип"){
                selecItemTemplate = selecItemTemplate.replace("@@ITEMNAME@@", value.name);
            }
            else {
                selecItemTemplate = selecItemTemplate.replace("@@ITEMNAME@@", value);
            }  
            
            selecItemTemplate = selecItemTemplate.replace("@@ITEMTYPE@@", columnValue.itemType);

            selectList = selectList + selecItemTemplate;
        }

        selecTemp = selecTemp.replace("@@SELECTORBODY@@", selectList);
        
        summHtmlBlock = summHtmlBlock + selecTemp;
    }

    filtersLoadAreaBlock.html( summHtmlBlock );
}

function promptTypeLoader() {
    var promptTypeBlock = $(".prompt-type");
    var summHtmlBlock = "";

    for(const [typeKey, typeValue] of Object.entries(armamentAbilitiescolumns.tp.value)){
        if(typeKey != "discard"){
            summHtmlBlock += "<span>" + typeValue.ico + " - " + typeValue.name + "</span>";
        }        
    }
    promptTypeBlock.html( summHtmlBlock );
}

async function showArmamentAbilities() {
    var KAItemGridBlock = $(".grid-abilities-data");
    var summHtmlBlock = "";
    let filter = getFilter();

    for(const [abilitiesId, abilitiesValue] of Object.entries(armamentAbilitiesContent)){
        if(checkFilter(filter, abilitiesValue)){    

            let itemTemp = KAGridItemTemplate;
            
            itemTemp = itemTemp.replace("@@ITEMLINK@@", "armament_page/ability_item.html?id=" + abilitiesId);
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
    }

    KAItemGridBlock.html( summHtmlBlock );
}

function showArmamentAbilitieItem() {
    var URLParamsData = new URLSearchParams(window.location.search)
    let Abilityid = URLParamsData.get('id');
    let Ability = armamentAbilitiesContent[Abilityid];
    
    showArmamentPageName(Ability);    
    showArmamentParams(Ability);
}

function showArmamentPageName(armament) {
    let nameBlock = $(".chapter-title-label");
    nameBlock.html( armament.name + " - Способности вооружения" );
}

function showArmamentParams(armament) {
    var armamentParamBlock = $(".armament-abilities-content");

    let armamentTemp = armamentItemTemplate;
    armamentTemp = armamentTemp.replace("@@ARMAMENTNAME@@", armament.name);
    armamentTemp = armamentTemp.replace("@@ARMAMENTCOST@@", armament.cost);
    armamentTemp = armamentTemp.replace("@@ARMAMENTTYPE@@", armament.type.name);
    armamentTemp = armamentTemp.replace("@@ARMAMENTCASTINGTIME@@", armament.castingTime);
    armamentTemp = armamentTemp.replace("@@ARMAMENTRANGE@@", armament.range);

    var componentsSum = '';

    if(armament.components.verbal)   {componentsSum = "В";}
        else {componentsSum = ".";} 
    if(armament.components.somatic)  {componentsSum += "С";}
        else {componentsSum += ".";} 
    if(armament.components.material) {componentsSum += "М";}
        else {componentsSum += ".";} 
    if(armament.components.released) {componentsSum += "Р";}
        else {componentsSum += ".";} 

    if(componentsSum == "....") { componentsSum = "Нет"; }

    armamentTemp = armamentTemp.replace("@@ARMAMENTCOMPONENTS@@", componentsSum);
    
    var durationSum = '';

    if(armament.duration.until_sealed)   { durationSum = durationCol.until_sealed; }
    if(armament.duration.concentration)  { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.concentration; }
    if(armament.duration.minute1)        { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.minute1; }
    if(armament.duration.round1)         { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.round1; }
    if(armament.duration.instantaneous)  { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.instantaneous; }
    if(armament.duration.hour1)          { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.hour1; }
    if(armament.duration.minute5)        { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.minute5; }
    if(armament.duration.round2)         { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.round2; }
    if(armament.duration.special)        { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.special; }
    if(durationSum == "") { durationSum = "Нет"; }

    armamentTemp = armamentTemp.replace("@@ARMAMENTDURATION@@", durationSum);    
    armamentTemp = armamentTemp.replace("@@ARMAMENTRECHARGE@@", armament.recharge);

    armamentParamBlock.html( armamentTemp );

    // for(const [abilitiesId, abilitiesValue] of Object.entries(armamentAbilitiesContent)){
    //     if(checkFilter(filter, abilitiesValue)){    

    //         let itemTemp = KAGridItemTemplate;
            
    //         itemTemp = itemTemp.replace("@@ITEMLINK@@", "armament_page/ability_item.html?id=" + abilitiesId);
    //         itemTemp = itemTemp.replace("@@ITEMLEVEL@@", abilitiesValue.cost);
    //         itemTemp = itemTemp.replace("@@ITEMSCHOOLLOGO@@", abilitiesValue.type.ico);
    //         itemTemp = itemTemp.replace("@@ITEMNAME@@", abilitiesValue.name);

    //         var componentsSum = '';

    //         if(abilitiesValue.components.verbal)   {componentsSum = "В";}
    //             else {componentsSum = ".";} 
    //         if(abilitiesValue.components.somatic)  {componentsSum += "С";}
    //             else {componentsSum += ".";} 
    //         if(abilitiesValue.components.material) {componentsSum += "М";}
    //             else {componentsSum += ".";} 
    //         if(abilitiesValue.components.released) {componentsSum += "Р";}
    //             else {componentsSum += ".";} 

    //         itemTemp = itemTemp.replace("@@ITEMCOMPONENTS@@", componentsSum);
            
    //         summHtmlBlock = summHtmlBlock + itemTemp;
    //     }
    // }

    // KAItemGridBlock.html( summHtmlBlock );
}