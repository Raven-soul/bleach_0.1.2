function awakeArmamentFilters(){
    filtersGeneration();
    showArmamentAbilities();
}

function filtersGeneration(){
    var filtersLoadAreaBlock = $(".grid-group-data");
    var summHtmlBlock = "";

    for(const [columnKey, columnValue] of Object.entries(columns)){
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

async function showArmamentAbilities() {
    var KAItemGridBlock = $(".grid-abilities-data");
    var summHtmlBlock = "";
    let filter = getFilter();

    for(const [abilitiesId, abilitiesValue] of Object.entries(armamentAbilitiesContent)){
        if(checkFilter(filter, abilitiesValue)){    

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
    }

    KAItemGridBlock.html( summHtmlBlock );
}