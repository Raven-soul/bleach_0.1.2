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
        selecTemp = selecTemp.replace("@@SELECTORFUNCTION@@", "changeFilterArmament(this)");

        DefaultItemTemp = DefaultItemTemp.replace("@@DEFITEMNAME@@", columnValue.translate);

        selectList = DefaultItemTemp;

        for(const [key, value] of Object.entries(columnValue.value)){
            let selecItemTemplate = selectorItemTemplate;

            if(columnValue.itemType == "bool"){
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