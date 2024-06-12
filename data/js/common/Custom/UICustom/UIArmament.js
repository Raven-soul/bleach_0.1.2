function changeFilterArmament(element) {
    if(element.options[element.selectedIndex].text == "Отменить фильтр"){
        element.selectedIndex = 0;
    }
    var data = element.options[element.selectedIndex].value;
    
    alert(data);
}

function selectAllFilters() {
    let filters = {
        tp: tp,
        cost: cost,
        castingTime: castTime
    }
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