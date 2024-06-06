function awakeArmamentFilters(){
    filtersGeneration();
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

        DefaultItemTemp = DefaultItemTemp.replace("@@DEFITEMNAME@@", columnValue.translate);

        selectList = DefaultItemTemp;

        for(const [key, value] of Object.entries(columnValue.value)){
            let selecItemTemplate = selectorItemTemplate;

            selecItemTemplate = selecItemTemplate.replace("@@ITEMVALUE@@", value);
            selecItemTemplate = selecItemTemplate.replace("@@ITEMNAME@@", value);
            selecItemTemplate = selecItemTemplate.replace("@@ITEMTYPE@@", columnValue.itemType);

            selectList = selectList + selecItemTemplate;
        }

        selecTemp = selecTemp.replace("@@SELECTORBODY@@", selectList);
        
        summHtmlBlock = summHtmlBlock + selecTemp;
    }

    filtersLoadAreaBlock.html( summHtmlBlock );
}