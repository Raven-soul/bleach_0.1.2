function changeFilterArmament(element) {
    if(element.options[element.selectedIndex].text == "Отменить фильтр"){
        element.selectedIndex = 0;
    }
    var data = element.options[element.selectedIndex].value;
    
    alert(data);
}

function selectAllFilters() {

}