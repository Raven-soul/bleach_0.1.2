function changeFilterArmament(element) {
    if(element.options[element.selectedIndex].text == "Отменить фильтр"){
        element.selectedIndex = 0;
    }
    var data = element.options[element.selectedIndex].value;
    
    alert(data);
}

function getFilter() {
    var filter = new Map();
    var filterTags = $(".filter-grid-group-data-item select");

    for (var i = 0; i < filterTags.length; i++) {
        filter.set(filterTags[i].getAttribute("id").split('_')[0], filterTags[i].options[filterTags[i].selectedIndex].value);
    }

    return filter;
}

function checkFilter(filter = new Map(), abilitiesValue) {
    var result = true;
    if (filter.get('cost') == 'all') { }
        else if (filter.get('cost') == abilitiesValue.cost) { }
        else result = false;
    if (filter.get('castTime') == 'all') { }
        else if (filter.get('castTime') == abilitiesValue.castTime) { }
        else result = false;
    if (filter.get('rng') == 'all') { }
        else if (filter.get('rng') == abilitiesValue.range) { }
        else result = false;
    if (filter.get('tp') == 'all') { }
        else if (filter.get('tp') == abilitiesValue.type.name) { }
        else result = false;
    if (filter.get('rch') == 'all') { }
        else if (filter.get('rch') == abilitiesValue.recharge) { }
        else result = false;
    if (filter.get('componentsCol') == 'all') { }
        else if (filter.get('componentsCol') == "verbal"        && abilitiesValue.components.verbal == true) { }
        else if (filter.get('componentsCol') == "somatic"       && abilitiesValue.components.somatic == true) { }
        else if (filter.get('componentsCol') == "material"      && abilitiesValue.components.material == true) { }
        else if (filter.get('componentsCol') == "released"      && abilitiesValue.components.released == true) { }
        else result = false;
    if (filter.get('durationCol') == 'all') { }
        else if (filter.get('durationCol') == "until_sealed"    && abilitiesValue.duration.until_sealed == true) { }
        else if (filter.get('durationCol') == "concentration"   && abilitiesValue.duration.concentration == true) { }
        else if (filter.get('durationCol') == "minute1"         && abilitiesValue.duration.minute1 == true) { }
        else if (filter.get('durationCol') == "minute2"         && abilitiesValue.duration.minute2 == true) { }
        else if (filter.get('durationCol') == "minute5"         && abilitiesValue.duration.minute5 == true) { }
        else if (filter.get('durationCol') == "minute10"        && abilitiesValue.duration.minute10 == true) { }
        else if (filter.get('durationCol') == "round1"          && abilitiesValue.duration.round1 == true) { }
        else if (filter.get('durationCol') == "round2"          && abilitiesValue.duration.round2 == true) { }
        else if (filter.get('durationCol') == "round5"          && abilitiesValue.duration.round5 == true) { }
        else if (filter.get('durationCol') == "instantaneous"   && abilitiesValue.duration.instantaneous == true) { }
        else if (filter.get('durationCol') == "hour1"           && abilitiesValue.duration.hour1 == true) { }
        else if (filter.get('durationCol') == "special"         && abilitiesValue.duration.special == true) { }
        else if (filter.get('durationCol') == "day2"          && abilitiesValue.duration.day2 == true) { }
        else result = false;
    if (filter.get('knd') == 'all') { }
        else if (filter.get('knd') == abilitiesValue.abKind) { }
        else result = false;
    if (filter.get('hd') == 'all') { }
        else if (filter.get('hd') == abilitiesValue.hdHollow) { }
        else result = false;
    return result;
}

function changeFilter(element){
    if(element.options[element.selectedIndex].value == "discard"){
        element.selectedIndex = 0;
    }

    showArmamentAbilities();
}

// type: tp.acid,
//         cost: 1,
//         rules: true, 
//         castingTime: castTime.action,
//         range: "self",
//         components: {
//             verbal: true,
//             somatic: true,
//             material: false,
//             released: true
//         },
//         duration: {
//             until_sealed: true,
//             concentration: false,
//             minute1: false,
//             round1: false,
//             instantaneous: false,
//             hour1:         /**/ false,
//             minute5:       /**/ false,
//             round2:        /**/ false,
//             special:       /**/ false
//         },
//         recharge: rch.none,
//         name: "Кислотная форма [Acid Form]", 
//         requirements: "",