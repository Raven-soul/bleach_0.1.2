//armament

// --DC - сложность

/*
    DC - Сложность спасброска
    AC - Класс доспеха
*/

const castTime = {
    none: "none",
    bonus: "Bonus action",
    action: "1 action",
    reaction: "Reaction",
    reactionTkDmg: "Reaction, which you take when you take damage from a source you can see",
    round: "1 round"    
}

const rng = {
    none: "none",
    self: "Self",
    touch: "Touch",
    ft5: "5 feet",
    ft30: "30 feet",
    ft40: "40 feet",
    ft60: "60 feet",
    ft80: "80 feet",
    ft100: "100 feet",
    ft120: "120 feet",
    ft500: "500 feet",
    heilinBogen: "Equal to your Heilig Bogen",
    cone30: "Self (30-foot cone)",
    mile1: "1 mile",
    varies: "Varies",
    special: "Special"
}

const tp = {
    acid: "Acid",
    blood: "Blood",
    bow: "Bow",
    dark: "Dark",
    defence: "Defence",
    earth: "Earth",
    fire: "Fire",
    common: "Common",
    gravity: "Gravity",
    healing: "Healing",
    hollow: "Hollow"
}

const rch = {
    none: "none",
    rch6: "6",
    rch1_6: "1—6",
    rchDay1: "1/Day",
    rchRest_SL: "Short or Long Rest"
}

const armamentAbilitiesContent = [
    {
        type: tp.acid,
        cost: 1,
        rules: true, 
        castingTime: castTime.action,
        range: "self",
        components: {
            verbal: true,
            somatic: true,
            material: false,
            released: true
        },
        duration: {
            until_sealed: true,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кислотная форма [Acid Form]", 
        requirements: "",
        data:`
        <p>Ваше вооружение становится чистой кислотой. Пока эта способность активна, тип урона вашего вооружения меняется на кислотный.</p>
        <p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию.</p>
        <p>Вы можете отменить эту способность за бонусное действие.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отменить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонента В или С.</p>
        `
    }, //Acid Form 1 ------------------------------ Acid
    {
        type: tp.acid,
        cost: 3,
        rules: true, 
        castingTime: castTime.action,
        range: rng.self,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: true,
            concentration: true,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кислотное оружие [Acidic Weapon]", 
        requirements: "",
        data:`
        <p>Ваше вооружение источает кислоту, нанося дополнительный урон кислотой 1d6. Вы можете отменить эту способность за бонусное действие.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов В или С.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d12.</p>
        `
    }, //Acidic Weapon 2
    {
        type: tp.acid,
        cost: 0,
        rules: false, 
        castingTime: castTime.action,
        range: rng.self,
        components: {
            verbal: false,    //v
            somatic: false,   //s
            material: false, //m
            released: false   //w
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Едкое оружие [Caustic Weapon]", 
        requirements: "Одна кислотная способность",
        data:`
        <p>Когда вы наносите критическое попадание своим вооружением, на цели остается остаточная кислота, которая получает 1d6 урона кислотой в начале каждого своего хода.</p>
        <p>На каждом своем ходу цель может действием совершить спасбросок Ловкости. В случае успеха цель удаляет остатки кислоты, прекращая этот эффект.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте сложность спасброска на 1.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d12.</p>
        `
    }, //Caustic Weapon 3
    {
        type: tp.acid,
        cost: 3,
        rules: true, 
        castingTime: castTime.bonus,
        range: rng.self,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: true,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кислотная броня [Acid Armor]", 
        requirements: "Одна кислотная способность",
        data:`
        <p>Ваше тело на время выделяет слой кислоты. Кислота не причинит вам вреда. На время действия вы получаете следующие преимущества:</p>
        <p> &mdash; У вас есть сопративление к урону кислотой</p>
        <p> &mdash; Любое немагическое оружие из металла или дерева, поражающее вас, подвергается коррозии. После нанесения урона оружие получает постоянный накопительный штраф -1 к броскам на урон. Если штраф падает до −5, оружие уничтожается. Немагические боеприпасы из металла или дерева, поражающие вас, уничтожаются после нанесения урона. Если оружие магическое, его владелец должен совершить спасбросок Телосложения. В случае неудачи оно получает штраф -1 к броскам на урон, но оружие не уничтожается, если штраф достигает -5 или выше. Если попавшие в вас боеприпасы являются магическими, их владелец должен совершить спасбросок Тела, в случае неудачи боеприпасы уничтожаются после нанесения урона.</p>
        <p>Через 3 часа магическое оружие со штрафами от этой способности исчезает.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вместо этого вы получаете иммунитет к урону кислотой.</p>
        <p> &mdash; Увеличьте сложность спасброска на 1</p>
        <p>Удвойте количество часов, необходимое для снятия штрафов.</p>
        `
    }, //Acid Armor 4
    {
        type: tp.acid,
        cost: 2,
        rules: true, 
        castingTime: castTime.action,
        range: rng.ft30,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: false,
            concentration: true,
            minute1: true,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кислотный выстрел [Acid Shot]", 
        requirements: "Одна кислотная способность",
        data:`
        <p>Вы нацеливаетесь на одно существо, которое видите в пределах дистанции, и обливаете его кислотой. Они должны совершить спасбросок ловкости. В случае неудачи они покрываются кислотой. Каждый раз, когда цель предпринимает действие, ей наносится урон кислотой 1d10.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов В или С.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        `
    }, //Acid Shot 5
    {
        type: tp.acid,
        cost: 3,
        rules: true, 
        castingTime: castTime.action,
        range: rng.self,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: false,
            concentration: true,
            minute1: true,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кислотный плевок [Acid Spit]", 
        requirements: "Две кислотные способности",
        data:`
        <p>Поток кислоты извергается из вас линией длиной 30 футов и шириной 5 футов в выбранном вами направлении. Каждое существо в линии должно преуспеть в спасброске Ловкости, иначе оно будет покрыто кислотой на время или до тех пор, пока существо не использует свое действие, чтобы соскоблить или смыть кислоту с себя или другого существа. Существо, покрытое кислотой, получает урон кислотой 2d6 в начале каждого своего хода.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов В или С.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Увеличьте урон дополнительно на 1d6, максимум на 4d6.</p>
        `
    }, //Acid Spit 6
    {
        type: tp.acid,
        cost: 2,
        rules: true, 
        castingTime: castTime.action,
        range: rng.ft30,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: true,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кислотный бассейн [Acid Pool]", 
        requirements: "Две кислотные способности",
        data:`
        <p>Кислота покрывает землю в радиусе 10 футов с центром в выбранной вами точке в радиусе действия и превращает ее в труднопроходимую местность на время действия.</p>
        <p>Когда появляется кислота, каждое существо, находящееся в ее области, должно преуспеть в спасброске Ловкости, иначе получит 1d4 урона кислотой. Существо, входящее в эту область или заканчивающее там свой ход, получает урон кислотой 1d6.</p>
        <p>Каждый раз, когда вы выбираете эту способность, урон увеличивается на 1d6, максимум до 4d6.</p>
        <p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте дальность действия на 10 футов, радиус на 10 футов и продолжительность на одну минуту.</p>
        <p> &mdash; Эта способность больше не требует компонентов В или С.</p>
        <p> &mdash; Существо, которое входит в эту область или заканчивает там свой ход, также должно преуспеть в спасброске Ловкости, иначе упадет ничком.</p>
        `
    }, //Acid Pool 7
    {
        type: tp.acid,
        cost: 3,
        rules: true, 
        castingTime: castTime.action,
        range: rng.ft100,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: false,
            concentration: true,
            minute1: true,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кислотный дождь [Acid Rain]", 
        requirements: "Три кислотные способности",
        data:`
        <p>Кислотный дождь льется в виде цилиндра радиусом 20 футов и высотой 40 футов, центр которого находится в точке в пределах досягаемости. Каждое существо, начинающее свой ход в цилиндре, получает урон кислотой 4d6.</p>
        <p>Кислота на время превращает область действия в труднопроходимую местность.</p>
        
        <p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует концентрации</p>
        <p> &mdash; Эта способность больше не требует компонентов В или С.</p>
        <p> &mdash; Увеличьте дальность действия на 10 футов, радиус на 10 футов и продолжительность на одну минуту.</p>
        `
    }, //Acid Rain 8
    {
        type: tp.acid,
        cost: 4,
        rules: true, 
        castingTime: castTime.action,
        range: rng.self,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: false,
            concentration: true,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Прикосновение коррозии [Corrosive Touch]", 
        requirements: "Четыре кислотные способности",
        data:`
        <p>Вы пропитываете свое вооружение едкой кислотой. В течение этого времени, когда вы ударяете существо своим вооружением, и существо носит некаменную, немагическую броню, оно получает постоянный накопительный штраф -1 к КД, которое оно предлагает. Броня снижается до AC 10 или щит, который падает до бонуса +0, уничтожается.</p>
        <p>Если броня или щит магические, существо должно совершить спасбросок Телосложения, в случае неудачи получая накопительный штраф на время действия. Броня не уничтожается, если AC снижается до 10 или выше, а щит не уничтожается, если его бонус снижается до +0 или выше. Через 3 часа магическая броня или щиты со штрафами от этой способности снимаются.</p>

        <p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличение продолжительности на 1 раунд.</p>
        <p> &mdash; Увеличьте сложность спасброска на 1.</p>
        <p> &mdash; Удвойте количество часов, необходимое для снятия штрафов.</p>
        `
    }, //Corrosive Touch 9
    {
        type: tp.acid,
        cost: 3,
        rules: true, 
        castingTime: castTime.round,
        range: rng.ft100,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: false,
            concentration: true,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Атака коррозией (Финальный) [Corrosive Attack (Ultimate)]", 
        requirements: "Пять кислотных способностей",
        data:`
        <p>Вы выбираете область в пределах досягаемости и выпускаете смертоносную едкую кислоту в 40-футовом кубе. Каждое существо в области получает урон кислотой 10d6 при провале и половину этого урона при успехе.</p>
        <pКроме того, любые существа, провалившие спасбросок, продолжают получать урон кислотой 10d6 в начале своего хода, пока вы сохраняете концентрацию. Если эти существа владели каким-либо некаменным и немагическим оружием, их оружие получает постоянный и накопительный штраф -1 к броскам на урон каждый раз, когда они получают урон от этой способности. Если штраф падает до -5, оружие уничтожается. Если они владеют какой-либо некаменной, немагической броней или щитами, это требует постоянного и накопительного штрафа -1 к предлагаемому КД. Щиты брони уменьшаются до AC 10 или щит, бонус которого падает до +0, уничтожается.</p>
        <p>Если какое-либо из воздействующих на оружие, доспехи или щиты является магическим, им разрешен спасбросок каждый раз, когда они получают урон, при этом успех не получает штрафа.<p>
        <p>Магическим объектам и фауне в пределах области, за которыми не присматривают, разрешен спасбросок. при неудачном спасброске они страдают от тех же эффектов, что и существо, провалившее спасбросок. Мирская фауна и некаменные предметы разлагаются и разъедаются.</p>
        <p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, дальность удвоится, размер куба удвоится, а размер кубика урона увеличится до d10.</p>
        `
    }, //Corrosive Attack (Ultimate) 10
    {
        type: tp.acid,
        cost: 4,
        rules: true, 
        castingTime: castTime.bonus,
        range: rng.self,
        components: {
            verbal: true,    //v
            somatic: true,   //s
            material: false, //m
            released: true   //w
        },
        duration: {
            until_sealed: false,
            concentration: true,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Разъедающая форма (Вознесенная) [Corrosive Form (Ascended)]", 
        requirements: "Атака коррозией и шесть кислотных способностей",
        data:`
        <p>Во время вознесения вы можете использовать кислотные способности и заклинания, наносящие урон кислотой, получать эффекты Коррозионной атаки; за исключением того, что он не наносит урон, который наносит Коррозионная атака.</p>
        `
    }, //Corrosive Form (Ascended) 11
    {
        type: tp.acid,
        cost: 0,
        rules: false, 
        castingTime: castTime.bonus,
        range: rng.self,
        components: {
            verbal:   /*v*/ false,  
            somatic:  /*s*/ false,  
            material: /*m*/ false, 
            released: /*w*/ false  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Суперкислота (Вознесенная) [Superacid (Ascended)]", 
        requirements: "Шесть кислотных способностей",
        data:`
        <p>Ваши кислотные способности увеличиваются в силе.</p>
        <p>Ваши способности вооружения или Кидо, наносящие урон кислотой, игнорируют сопротивление кислоте. Если существо невосприимчиво к урону кислотой, вместо этого оно получает половину урона.</p>
        `
    }, //Superacid (Ascended) 12
    {
        type: tp.blood,
        cost: 1,
        rules: true, 
        castingTime: castTime.action,
        range: rng.self,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ false, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: true,
            concentration: true,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Клинок Крови [Blade of Blood]", 
        requirements: "Шесть кислотных способностей",
        data:`
        <p>Вы усиливаете свое вооружение своей кровью. Когда вы активируете эту способность, вы теряете 1d3 очков жизни, а ваше вооружение наносит дополнительный урон 1d6. Вы можете отклонить эту способность как бонусное действие.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, размер кубика потерянных вами очков жизни увеличивается на один шаг до максимума 1d10, а размер дополнительного кубика урона, наносимого этой способностью, увеличивается на один шаг до максимума 1d12.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность бонусным действием и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует концентрации, компонентов V или S.</p>
        <p> &mdash; Уменьшите размер кубика хитов, которые вы теряете из-за этой способности, на один шаг, минимум 1d3.</p>        
        `
    }, //Blade of Blood 1 ------------------------- Blood
    {
        type: tp.blood,
        cost: 2,
        rules: true, 
        castingTime: castTime.bonus,
        range: rng.self,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ false, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кровоточащий удар [Bleeding Strike]", 
        requirements: "",
        data:`
        <p>В следующий раз, когда вы ударите существо своим оружием до окончания действия этой способности, оружие нанесет цели тяжелую рану. В начале каждого своего хода цель должна совершить спасбросок Телосложения. В случае провала он получает 1d4 урона. При успешном сохранении эффект прекращается. Если цель или существо в пределах 5 футов от нее использует действие, чтобы залатать рану, или если какой-либо другой эффект исцеляет рану, эффект заканчивается.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, продолжительность увеличивается на 1 раунд.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер кубика урона на одну ступень, максимум 1d10.</p>
        <p> &mdash; Увеличьте DC спасброска на 1, вы можете выбрать эту опцию всего 5 раз.</p>        
        `
    }, //Bleeding Strike 2
    {
        type: tp.blood,
        cost: 0,
        rules: false, 
        castingTime: castTime.bonus,
        range: rng.self,
        components: {
            verbal:   /*v*/ false,  
            somatic:  /*s*/ false,  
            material: /*m*/ false, 
            released: /*w*/ false  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Ранящий клинок [Wounding Blade]", 
        requirements: "Клинок крови (3)",
        data:`
        <p>Когда вы наносите критический удар по существу своим вооружением, цели наносится 2 очка урона Телосложению.</p>
        `
    }, //Wounding Blade 3
    {
        type: tp.blood,
        cost: 1,
        rules: true, 
        castingTime: castTime.reaction,
        range: rng.self,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ false, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Щит крови [Blood Shield]", 
        requirements: "Одна кровавая способность",
        data:`
        <p>Когда против вас совершается бросок атаки, вы в качестве реакции создаете щит из собственной крови. Вы теряете 1d4 очков жизни и получаете такое же количество в качестве бонуса к вашему классу брони против этой атаки.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, размер кубика увеличивается на один шаг до максимума 1d12.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S. Вы можете выбрать эту опцию во второй раз, при этом компонент W больше не требуется.</p>
        <p> &mdash; Длительность этой способности изменена на «Концентрация до следующего хода».</p>
        `
    }, //Blood Shield 4
    {
        type: tp.blood,
        cost: 2,
        rules: true, 
        castingTime: castTime.action,
        range: rng.touch,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ true, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кровавое ремесло [Bloodcraft]", 
        requirements: "Одна кровавая способность",
        data:`
        <p>Воздействовать на кровь или извлекать информацию из нее можно различными способами. Кровь должна оставаться без присмотра, например, лужи крови в пределах 5-футового куба или флакона с кровью. Вы также можете коснуться желающего существа, и оно потеряет 1d4 хитов.</p>
        <p> &mdash; Вы знаете тип существа, пролившего кровь. Кроме того, в течение следующих 24 часов вы можете сменить кровь, и когда существо или кровь будут идентифицированы, они зарегистрируются как другой тип существа по вашему выбору.</p>
        <p> &mdash; Вы знаете, несет ли кровь какие-либо болезни или яды. Кроме того, вы знаете тип болезни или яда, если сталкивались с ним раньше.</p>
        <p> &mdash; Вы знаете, сколько лет крови или возраст существа.</p>
        <p> &mdash; Вы превращаете лужу крови в ловушку. В течение следующих 8 часов, когда существо входит в то же пространство, что и кровь, оно получает колющий урон 1d6.</p>
        <p> &mdash;Вы укрепляете кровь существа. В течение следующего часа цель имеет преимущество на спасброски Телосложения от ядов и болезней.</p>
        `
    }, //Bloodcraft 5
    {
        type: tp.blood,
        cost: 2,
        rules: true, 
        castingTime: castTime.bonus,
        range: rng.self,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ false, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: false,
            concentration: true,
            minute1: false,
            round1: true,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Вампирский удар [Vampiric Strike]", 
        requirements: "Одна кровавая способность",
        data:`
        <p>Пока вы совершаете успешную рукопашную атаку своим вооружением по существу, вы получаете от него жизненную энергию. Вы восстанавливаете очки жизни, равные базовому урону, нанесенному вашим вооружением.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Увеличение продолжительности на 1 раунд.</p>
        `
    }, //Vampiric Strike 6
    {
        type: tp.blood,
        cost: 2,
        rules: true, 
        castingTime: castTime.action,
        range: rng.self,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ false, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Опустошение реацу [Drain Reiatsu]", 
        requirements: "Вампирский удар и одна кровавая способность",
        data:`
        <p>Вы совершаете рукопашную атаку оружием по существу. В случае успеха вы разрываете реацу цели. Цель теряет 1d6 очков заклинаний. Если у цели есть ячейки заклинаний, она теряет 1d3 ячейки заклинаний по своему выбору.</p>
        <p>Эта способность не действует на существ, которые не могут произносить заклинания.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте урон на одну ступень, максимум 1d12.</p>
        <p> &mdash; Вы восстанавливаете SP, равный SP, потерянному целью. Если у вас есть ячейки заклинаний, вы восстанавливаете количество ячеек заклинаний, которые они потеряли.</p>
        `
    }, //Drain Reiatsu 7
    {
        type: tp.blood,
        cost: 2,
        rules: true, 
        castingTime: castTime.action,
        range: rng.ft60,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ false, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кровавый выстрел [Blood Shot]", 
        requirements: "Две кровавых способности",
        data:`
        <p>Вы выпускаете кровавый снаряд в существо, находящееся в пределах досягаемости. Совершите дальнюю атаку оружием по цели. При попадании цель получает колющий, дробящий или режущий урон 3d6 (на ваш выбор при активации этой способности).</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный снаряд (максимум четыре). Вы можете направить дополнительные снаряды в ту же цель или в другую, вы должны сделать отдельный бросок атаки для любых дополнительных снарядов.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Дальность действия этой способности увеличена на 10 футов.</p>
        <p> &mdash; Увеличьте размер кубика урона до d8. Вы должны выбрать эту способность четыре раза, прежде чем сможете выбрать эту опцию.</p>
        `
    }, //Blood Shot 8
    {
        type: tp.blood,
        cost: 0,
        rules: false, 
        castingTime: castTime.action,
        range: rng.ft60,
        components: {
            verbal:   /*v*/ false,  
            somatic:  /*s*/ false,  
            material: /*m*/ false, 
            released: /*w*/ false  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Магия крови [Blood Magic]", 
        requirements: "Три кровавых способности",
        data:`
        <p>Вы используете свою собственную жизненную силу для подпитки своего Кидо. Если вы улучшите свое Кидо с помощью метамагии, вместо того, чтобы тратить очки волшебства, вы вместо этого потеряете 1d8 очков жизни за каждое потраченное очко волшебства. Вы можете сделать это только количество раз, равное вашему бонусу мастерства. Во время длительного отдыха вы восстанавливаете все потраченные использования.</p>
        <p>При разыгрывании Кидо вместо того, чтобы тратить SP или ячейки заклинаний, вы бросаете свой кубик количество раз, равное уровню заклинания. Вы теряете количество очков жизни, равное общей сумме выпавших очков.</p>
        `
    }, //Blood Magic 9
    {
        type: tp.blood,
        cost: 2,
        rules: true, 
        castingTime: castTime.action,
        range: rng.self,
        components: {
            verbal:   /*v*/ true,  
            somatic:  /*s*/ true,  
            material: /*m*/ false, 
            released: /*w*/ true  
        },
        duration: {
            until_sealed: false,
            concentration: false,
            minute1: false,
            round1: false,
            instantaneous: true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кровавый взрыв [Blood Burst]", 
        requirements: "Три кровавых способности",
        data:`
        <p>Вы создаете из себя взрыв крови. Каждое существо в пределах 30 футов от вас должно преуспеть в спасброске Ловкости или получить дробящий, колющий или режущий урон 6d6 (по вашему выбору при активации этой способности). Существо, преуспевшее в спасброске, получает вдвое меньше урона.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте площадь на 10 футов.</p>
        <p> &mdash; Увеличьте DC спасброска на 2.</p>
        <p> &mdash; Если существо критически проваливает спасбросок, оно получает 1 пункт урона Телосложению. Вы должны выбрать эту способность трижды, прежде чем сможете выбрать эту опцию.</p>
        `
    }, //Blood Burst 10
    {
        type: tp.bow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Предвидящий выстрел [Anticipating Shot]", 
        requirements: "",
        data:`
        <p>Каждый раз, когда враждебное существо использует особое движение, в конце движения, если оно находится в пределах вашего диапазона Хейлига Богена, в качестве реакции вы можете совершить одну атаку оружием против этого существа.</p>
        <p>Во время вознесения вы совершаете по этому существу две атаки оружием вместо одной.</p>
        `
    }, //Anticipating Shot 1 ---------------------- Heiling Bogen
    {
        type: tp.bow,
        cost: 5,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Изгоняющая стрела (Мастерский выстрел) [Banishing Arrow (Master Shot)]", 
        requirements: "",
        data:`
        <p>Вы используете магию отречения, чтобы временно изгнать свою цель в безобидное место в долине криков. Пораженное существо не получает урона и вместо этого должно преуспеть в спасброске Харизмы, иначе будет изгнано. Во время изгнания таким образом скорость цели равна 0, и она становится недееспособной. В конце своего следующего хода цель снова появляется в клетке, которую она покинула, или в ближайшей незанятой клетке, если эта клетка занята.</p>
        `
    }, //Banishing Arrow (Master Shot) 2
    {
        type: tp.bow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Обманчивая стрела [Beguiling Arrow]", 
        requirements: "",
        data:`
        <p>Благодаря вашей магии чар эта стрела временно обманывает свою цель. Когда существо поражено, вместо нанесения урона выберите одного из своих союзников в пределах 30 футов от цели. Цель должна преуспеть в спасброске Мудрости, иначе она будет очарована выбранным союзником до начала вашего следующего хода. Этот эффект заканчивается раньше, если очарованная цель атакована, ей нанесен урон или она вынуждена совершить спасбросок.</p>
        <p>Во время вознесения этот эффект вместо этого заканчивается раньше, если выбранный союзник атакует очарованную цель, наносит ей урон или заставляет ее совершить спасбросок.</p>
        `
    }, //Beguiling Arrow 3
    {
        type: tp.bow,
        cost: 2,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Разрывная стрела [Bursting Arrow]", 
        requirements: "",
        data:`
        <p>Вы наполняете своего Хайлига Богена силовой энергией, полученной из школы эвокации. Энергия взрывается после вашей атаки. Сразу после того, как вы ударили существо, цель и все другие существа в пределах 30 футов от нее получают урон силовым полем 2d6.</p>
        <p>Во время вознесения урон увеличивается до 2d10.</p>
        `
    }, //Bursting Arrow 4
    {
        type: tp.bow,
        cost: 3,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Критическая стрела [Critical Arrow]", 
        requirements: "",
        data:`
        <p>Вы получаете критическое попадание при результате броска 18 или 20.</p>
        <p>Во время вознесения вместо этого вы наносите критическое попадание при результате броска от 17 до 20.</p>
        `
    }, //Critical Arrow 5
    {
        type: tp.bow,
        cost: 2,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Изогнутая стрела [Curving Arrow]", 
        requirements: "",
        data:`
        <p>Вы узнаете, как направить ошибочную атаку на новую цель. Когда вы совершаете атаку и промахиваетесь, вы можете бонусным действием перебросить бросок атаки против другой цели в пределах 60 футов от исходной цели, если вы совершили дальнюю атаку, или другой цели в пределах 5 футов от исходной цели, если вы совершил рукопашную атаку.</p>
        <p>Пока вы вознеслись, у вас есть преимущество при перебросе.</p>
        `
    }, //Curving Arrow 6
    {
        type: tp.bow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Ослепительная стрела [Dazing Arrow]", 
        requirements: "",
        data:`
        <p>Пораженное существо должно совершить спасбросок Телосложения, иначе оно будет страдать от атак с помехой до конца своего следующего хода.</p>
        <p>Во время вознесения, если цель проваливает спасбросок Телосложения, она также получает помеху в спасбросках на это время.</p>
        `
    }, //Dazing Arrow 7
    {
        type: tp.bow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Отклоняющая стрела [Deflecting Arrow]", 
        requirements: "",
        data:`
        <p>Вы можете использовать свою реакцию, чтобы отразить атаку оружием ближнего боя или снаряд от атаки дальнего боя, когда вас ударили. При этом урон, получаемый вами от атаки, уменьшается на величину вашего базового урона Хейлига Богена + модификатора Ловкости + вашего уровня Квинси.</p>
        <p>Во время вознесения урон уменьшается на ваш базовый урон Хейлига Богена + модификатор ловкости + двойной уровень квинси.</p>
        `
    }, //Deflecting Arrow 8
    {
        type: tp.bow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Рассеивающая стрела [Dispelling Arrow]", 
        requirements: "",
        data:`
        <p>Вы используете магию ограждения, чтобы попытаться временно подавить магию. Заканчивает  действия любых заклинаний или магических эффектов, 3-го уровня и ниже, на пораженном существе или объекте и в зоне в круга с радиусом 10 футов с центром в месте попадания. Для каждого заклинания 4-го уровня или выше, действующего на цель, совершите проверку способности, используя свою способность заклинания. DC равен 10 + уровень заклинания. При успешной проверке заклинание заканчивается.</p>
        <p>Во время вознесения любое заклинание 5-го уровня или ниже на цели заканчивается вместо 3-го.</p>
        `
    }, //Dispelling Arrow 9
    {
        type: tp.bow,
        cost: 2,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Разрушающая стрела [Disrupting Arrow]", 
        requirements: "",
        data:`
        <p>Пораженное существо-нежить получает дополнительный урон излучением 1d6. Цель должна совершить спасбросок Мудрости. Если существо проваливает спасбросок, оно становится испуганным на 1 минуту или пока не получит урон.</p>
        <p>Испуганное существо должно потратить свои ходы, пытаясь отойти как можно дальше от вас, и оно не может добровольно переместиться в пространство в пределах 30 футов от вас. Он также не может реагировать.</p>
        <p>В качестве действия он может использовать только действие Рывок или попытаться уйти от эффекта, который не позволяет ему двигаться. Если двигаться некуда, существо может использовать действие «Уклонение».</p>
        <p>Во время вознесения урон увеличивается до 3d6, и цель имеет помеху в спасброске Мудрости.</p>
        `
    }, //Disrupting Arrow 10
    {
        type: tp.bow,
        cost: 3,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Дальняя стрела [Distant Arrow]", 
        requirements: "",
        data:`
        <p>Атака на большом расстоянии не ухудшает вашу атаку. Если пораженное существо находится на большом расстоянии от вас, оно получает дополнительный урон силовым полем 2d6.</p>
        <p>Во время вознесения существо вместо этого получает дополнительный урон силовым полем 2d8.</p>
        `
    }, //Distant Arrow 11
    {
        type: tp.bow,
        cost: 3,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Отвлекающая стрела [Distracting Arrow]", 
        requirements: "",
        data:`
        <p>Вы отвлекаете противника, давая союзникам возможность. Пораженное существо получает дополнительный урон силовым полем 1d6, и следующий бросок атаки по цели, совершенный атакующим, отличным от вас, имеет преимущество, если атака будет совершена до начала вашего следующего хода.</p>
        <p>Во время вознесения урон увеличивается до 2d6.</p>
        `
    }, //Distracting Arrow 12
    {
        type: tp.bow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Элементальная стрела [Elemental Arrow]", 
        requirements: "",
        data:`
        <p>Вы наполняете свою стрелу силой стихий. Выберите один из следующих типов урона: кислота, холод, огонь, молния, некротический, яд, излучение или гром. Когда вы попадаете по существу, наносимый вами урон изменяется на выбранный тип урона, и цель получает дополнительный урон 1d6 выбранного типа.</p>
        <p>При вознесении дополнительный урон увеличивается до 2d6.</p>
        `
    }, //Elemental Arrow 13
    {
        type: tp.bow,
        cost: 5,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Ослабляющая стрела (Мастерский выстрел) [Enfeebling Arrow (Master Shot)]", 
        requirements: "",
        data:`
        <p>Вы вплетаете в свою атаку некромантическую магию. Ударенное существо получает дополнительный урон некротической энергией 2d8. Цель также должна преуспеть в спасброске Телосложения, иначе урон, наносимый ее атаками оружием, уменьшится вдвое до начала вашего следующего хода.</p>
        `
    }, //Enfeebling Arrow (Master Shot) 14
    {
        type: tp.bow,
        cost: 5,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Цепкая стрела (Мастерский выстрел) [Grasping Arrow (Master Shot)]", 
        requirements: "",
        data:`
        <p>Когда эта атака поражает цель, магия призыва создает цепкие эфирные оковы, которые окутывают цель. Пораженное существо получает дополнительный силовой урон 2d6, его скорость снижается на 10 футов и оно получает дробящий урон 2d6 в первый раз за каждый ход, когда оно перемещается на 5 фут или более. Цель или любое существо, которое может до нее добраться, может своим действием снять оковы, совершив успешную проверку Силы (Атлетика) против вашей СЛ спасброска. В противном случае привязки действуют в течение 1 минуты или до тех пор, пока эта способность не будет использована снова.</p>
        `
    }, //Grasping Arrow (Master Shot) 15
    {
        type: tp.bow,
        cost: 4,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.heilinBogen,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Клавир [Klavier]", 
        requirements: "",
        data:`
        <p>Вы выпускаете несколько стрел подряд. Вы совершаете три отдельные атаки оружием дальнего боя по одной цели в пределах дистанции.</p>
        <p>При попадании цель получает дополнительный силовой урон 1d6.</p>
        <p>При вознесении дополнительный урон увеличивается до 2d6.</p>
        `
    }, //Klavier 16
    {
        type: tp.bow,
        cost: 5,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Лихт Реген (Мастерский выстрел) [Licht Regen (Master Shot)]", 
        requirements: "",
        data:`
        <p>Собрав реацу, вы выпускаете разрушительный залп бесчисленных стрел. Вы выпускаете из себя столб стрел в выбранном вами направлении. Каждое существо в пределах цилиндра радиусом 30 футов и высотой 90 футов должно совершить спасбросок Ловкости. Существо получает урон силовым полем 8d6 при провале или половину этого урона при успехе.</p>
        `
    }, //Licht Regen (Master Shot) 17
    {
        type: tp.bow,
        cost: 2,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Пронзающая стрела [Piercing Arrow]", 
        requirements: "",
        data:`
        <p>Когда вы ударяете существо, вместо нанесения урона вы пытаетесь снизить скорость цели. Если цель Большая или меньше большой, она должна совершить спасбросок Силы. В случае провала вы уменьшаете движение цели вдвое до конца вашего следующего хода.</p>
        <p>При вознесении затрагиваются цели размером большой и выше</p>
        `
    }, //Piercing Arrow 18
    {
        type: tp.bow,
        cost: 3,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Точная стрела [Precise Arrow]", 
        requirements: "",
        data:`
        <p>Вы получаете бонус +20 к броску атаки. Если атака попадает в цель, вы добавляете модификатор Мудрости к броску урона.</p>
        <p>При вознесении вы наносите дополнительный урон силовым полем 2d6.</p>
        `
    }, //Precise Arrow 19
    {
        type: tp.bow,
        cost: 2,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Отталкивающая стрела [Pushing Arrow]", 
        requirements: "",
        data:`
        <p>Когда вы ударяете существо, вместо нанесения урона вы пытаетесь отбросить цель назад. Если цель большая или меньше, она должна совершить спасбросок Силы. При провале вы отталкиваете цель на расстояние до 15 футов от себя.</p>
        <p>При вознесении затрагиваются цели размером большой и выше</p>
        `
    }, //Pushing Arrow 20
    {
        type: tp.bow,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft120,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ true,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Отталкивающая стрела [Seeking Arrow]", 
        requirements: "",
        data:`
        <p>Используя магию предсказывания, вы создаете стрелу, способную искать цель. Выберите одно существо, которое вы видели за последнюю минуту. Стрела летит к этому существу, при необходимости огибая углы и игнорируя укрытие на три четверти и половину укрытия. Если цель находится в пределах досягаемости и есть путь, достаточно большой, чтобы стрела могла достичь цели, цель должна совершить спасбросок Ловкости, при неудачном спасброске она получит урон, как если бы она была поражена атакой, или половину этого урона в случае неудачи. В противном случае стрелка исчезнет, пройдя максимально возможное расстояние.</p>
        <p>В случае провала вы также всегда знаете местоположение цели на время действия, но только пока вы двое находитесь на одном плане существования. Пока у вас есть это знание, цель не может скрыться от вас, а если она невидима, она не получит никакой выгоды от этого состояния против вас.</p>
        <p>По мере подъема продолжительность увеличивалась до 24 часов.</p>
        `
    }, //Seeking Arrow 21
    {
        type: tp.bow,
        cost: 5,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Теневая стрела (Мастерский выстрел) [Shadow Arrow (Master Shot)]", 
        requirements: "",
        data:`
        <p>Вы вплетаете в свою атаку магию иллюзий, заставляя ее закрывать обзор вашего врага тенями. Пораженное существо получает дополнительный психический урон 2d6 и должно преуспеть в спасброске Мудрости, иначе оно не сможет видеть ничего дальше, чем на 10 футов, до начала вашего следующего хода.</p>
        `
    }, //Shadow Arrow (Master Shot) 22
    {
        type: tp.bow,
        cost: 5,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Духовная стрела (Мастерский выстрел) [Soul Arrow (Master Shot)]", 
        requirements: "",
        data:`
        <p>Когда вы ударяете существо, вместо нанесения урона цель временно теряет свое магическое мастерство. Если у цели есть ячейки заклинаний, она теряет 2d4 ячейки заклинаний по своему выбору, как если бы они были израсходованы. Если у цели есть очки заклинаний, она теряет 2d8 SP, как если бы они были израсходованы.</p>
        `
    }, //Soul Arrow (Master Shot) 23
    {
        type: tp.bow,
        cost: 3,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Шагающий выстрел [Stepping Shot]", 
        requirements: "",
        data:`
        <p>Когда вы поражаете существо своим хейлиг богэном, вы можете немедленно использовать Хиренкьяку.</p>
        `
    }, //Stepping Shot 24
    {
        type: tp.bow,
        cost: 5,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Ранящая стрела (Мастерский выстрел) [Wounding Arrow (Master Shot)]", 
        requirements: "",
        data:`
        <p>Когда вы попадаете по существу, вы раните цель. В начале каждого хода раненого существа оно получает 2d6 некротического урона за каждый раз, когда вы его ранили, а затем оно может совершить спасбросок Телосложения, прекращая эффект всех таких ран на нем при успехе. Альтернативно, раненое существо или существо в пределах 5 футов от него может действием совершить проверку Мудрости (Медицина), прекращая эффект таких ран на нем при успехе.</p>
        `
    }, //Wounding Arrow (Master Shot) 25
    {
        type: tp.dark,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Некротическая форма [Necrotic Form]", 
        requirements: "",
        data:`
        <p>Вашим вооружением становится чистая темная энергия. Пока эта способность активна, тип урона вашего вооружения меняется на некротический урон.</p>
        <p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отклонить эту способность бонусным действием.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность бонусным действием и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        `
    }, //Necrotic Form 1 -------------------------- Dark
    {
        type: tp.dark,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Оружие тьмы [Dark Weapon]", 
        requirements: "",
        data:`
        <p>Тьма распространяется по вашему вооружению, нанося дополнительный некротический урон 1d4. Вы можете отклонить эту способность бонусным действием.</p>
        
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d12.</p>
        `
    }, //Dark Weapon 2
    {
        type: tp.dark,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Теневое оружие [Umbral Weapon]", 
        requirements: "Одна способность тьмы",
        data:`
        <p>ТКогда вы наносите критический удар своим вооружением, цель получает дополнительный нектротический урон 1d4 и ослепляется. В каждом своем ходу цель может действием совершить спасбросок Харизмы. В случае успеха этот эффект прекращается.</p>
                
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте СЛ спасброска на 1.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d10.</p>
        `
    }, //Umbral Weapon 3
    {
        type: tp.dark,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Аура Тьмы [Aura of Dark]", 
        requirements: "Две способности тьмы",
        data:`
        <p>Ваше тело излучает смертоносную тьму на время действия способности. Тьма не причинит вам вреда. Пока способность не закончится, вы получаете следующие преимущества:</p>
        <p> &mdash; У вас есть сопротивление некротическому и радиационному урону.</p>
        <p> &mdash; Вы излучаете вокруг себя магическую тьму в сфере радиусом 10 футов. Каждый раз, когда вы повторно выбираете эту способность, сфера увеличивается на 10 футов.</p>
        <p> &mdash; Любое существо, которое впервые за ход перемещается внутри сферы или заканчивает там свой ход, получает урон некротической энергией 1d4. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг до максимума 1d10.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Пока эта способность активна, вы невосприимчивы к некротическому урону.</p>
        `
    }, //Aura of Dark 4
    {
        type: tp.dark,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft30,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Тьма [Darkness]", 
        requirements: "Одна способность тьмы",
        data:`
        <p>Магическая тьма распространяется из выбранной вами точки в радиусе действия, заполняя сферу радиусом 15 футов на время действия.</p>
        <p>Тьма распространяется по углам. Немагический свет не может осветить область. Если выбранная вами точка находится на объекте, который вы держите или который никто не носит и не носит с собой, тьма исходит от объекта и движется вместе с ним. Если полностью закрыть источник тьмы непрозрачным предметом, например чашей или шлемом, тьма блокируется.</p>
        <p>Если какая-либо часть области этой способности перекрывается с областью света, созданной Кидо 2-го уровня или ниже, заклинание, создавшее свет, рассеивается. Каждый раз, когда вы повторно выбираете эту способность, уровень кидо, рассеиваемого этой способностью, увеличивается на единицу.</p>
        <p>Если какая-либо область этой способности перекрывается с областью света, созданного вооружением, вы делаете проверку Рейацу, в случае успеха свет рассеивается. Каждый раз, когда вы повторно выбираете эту способность, вы получаете бонус +1 к этой проверке Рейацу.</p>
       
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте дальность и радиус этой способности на 10 футов.</p>
        <p> &mdash; Увеличьте продолжительность на 1 минуту.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        `
    }, //Darkness 5
    {
        type: tp.dark,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.touch,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Темное зрение [Darkvision]", 
        requirements: "Способность Тьма [Darkness]",
        data:`
        <p>Вы прикасаетесь к добровольному существу, придавая его глазам тусклый свет. На время действия это существо обладает темновидением в радиусе 60 футов. Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов.</p>
        
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте длительность этой способности на 1 минуту.</p>
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Затронутые существа могут видеть в магической тьме, и пока эта способность активна, затронутые существа невосприимчивы к ослеплению.</p>
        `
    }, //Darkvision 6
    {
        type: tp.dark,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft80,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Теневой луч [Umbral Blast]", 
        requirements: "Две способности тьмы",
        data:`
        <p>Луч тьмы устремляется к существу в пределах досягаемости. Совершите дальнюю атаку по цели. При попадании цель получает 3d8 некротического урона.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный луч (максимум четыре луча). Вы можете направить дополнительные лучи на ту же цель или на другую, для любых дополнительных лучей необходимо сделать отдельный бросок атаки.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Дальность увеличена на 10 футов.</p>
        <p> &mdash; Увеличьте размер кубика урона до d10. Прежде чем вы сможете выбрать эту опцию, вам необходимо выбрать эту способность четыре раза.</p>
        `
    }, //Umbral Blast 7
    {
        type: tp.dark,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Стена Тьмы [Wall of Dark]", 
        requirements: "Три способности тьмы",
        data:`
        <p>Светящаяся стена чернильной черноты появляется в выбранной вами точке в пределах дистанции. Стена отображается в любой выбранной вами ориентации: горизонтально, вертикально или по диагонали. Он может свободно плавать или опираться на твердую поверхность. Стена может достигать 60 футов в длину, 10 футов в высоту и 5 футов в толщину.</p>
        <p>Стена блокирует линию обзора, но существа и предметы могут проходить через нее.</p>
        <p>Когда появляется стена, каждое существо в ее области должно совершить спасбросок Телосложения. При провале существо получает урон некротической энергией 4d6 и ослепляется на 1 минуту. При успешном спасброске он получает вдвое меньше урона и не ослепляется. Ослепленное существо может совершать спасбросок Телосложения в конце каждого своего хода, прекращая эффект на себе при успехе.</p>
        <p>Существо, которое заканчивает свой ход в области стен, получает урон некротической энергией 4d6. Пока заклинание не закончится, вы можете действием запустить луч тьмы из стены в одно существо, которое вы видите в пределах 40 футов от него. Совершите дальнюю атаку. При попадании цель получает 4d6 некротического урона. Независимо от того, попадете вы или промахнетесь, уменьшите длину стены на 10 футов. Если длина стен упадет до 0 футов, способность прекращается.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d6.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>

        <p> &mdash; Увеличьте дальность, высоту и длину этой способности на 10 футов.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Продолжительность блайнда увеличена на 1 минуту.</p>
        `
    }, //Wall of Dark 8
    {
        type: tp.dark,
        cost: 3,
        rules: true, 
        castingTime:      castTime.round,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Всплеск тьмы (Ультимативный) [Burst of Dark (Ultimate)]", 
        requirements: "Четыре способности тьмы",
        data:`
        <p>Тьма вырывается из вас в виде сферы радиусом 60 футов с центром на вас. Каждое существо в этой области должно совершить спасбросок Телосложения. При провале существо получает урон некротической энергией 7d8 и ослепляется на 1 минуту. При успешном спасброске он получает вдвое меньше урона и не ослепляется.</p>
        <p>Существо, ослепленное этим заклинанием, совершает еще один спасбросок Телосложения в конце каждого своего хода. При успешном сохранении он больше не ослепляется.</p>
        <p>Эта способность рассеивает любой свет в своей области, созданный Кидо. Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d8.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>

        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте радиус сферы на 10 футов.</p>
        <p> &mdash; Увеличение DC сохранения 2.</p>
        `
    }, //Burst of Dark (Ultimate) 9
    {
        type: tp.dark,
        cost: 4,
        rules: true, 
        castingTime:      castTime.round,
        range:            rng.ft100,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Черная дыра (Ультимативный) [Black Hole (Ascended)]", 
        requirements: "Пять способностей тьмы",
        data:`
        <p>Кромешная тьма вспыхивает сферой радиусом 60 футов с центром в выбранной вами точке в пределах дальности действия. Каждое существо в этой темноте должно совершить спасбросок Телосложения. При провале существо получает урон некротической энергией 20d6 и ослепляется на 1 минуту. При успешном спасброске он получает вдвое меньше урона и не ослепляется этой способностью. Существо, ослепленное этим заклинанием, совершает еще один спасбросок Телосложения в конце каждого своего хода.</p>
        <p>При успешном сохранении он больше не ослепляется. Эта способность рассеивает любой свет в своей области, созданный Кидо.</p>

        <p>Если существо убито этой способностью, оно засасывается в центр, исчезает и полностью уничтожается. Только прямое вмешательство божества может восстановить уничтоженное существо.</p>
        <p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, радиус сферы удваивается, существа ослепляются независимо от того, преуспели они в спасброске или нет, а размер кубика урона увеличивается до d10.</p>
        `
    }, //Black Hole (Ascended) 10
    {
        type: tp.dark,
        cost: 2,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Нечестивая Тьма (Вознесенный) [Unholy Dark (Ascended)]", 
        requirements: "Шесть способностей тьмы",
        data:`
        <p>Ваши темные способности увеличиваются в силе.</p>
        <p>Ваши способности вооружения или Кидо, наносящие некротический урон, игнорируют сопротивления. Если существо будет невосприимчиво к некротическому урону, вместо этого оно получит половину урона.</p>
        `
    }, //Unholy Dark (Ascended) 11
    {
        type: tp.defence,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Броня [Armor]", 
        requirements: "",
        data:`
        <p>При отпускании ваше вооружение превращается в доспехи вокруг вас. Эта броня принимает форму любой легкой брони из «Руководства Игрока» (или любого другого источника, одобренного вашим Мастером). Вы считаетесь владеющим этой броней.</p>
        <p>Если у вас есть Призыв, когда вы активируете эту способность, вместо этого ваш Призыв может получить броню.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Вы сохраняете свое оружие, когда используете эту способность.</p>
        <p> &mdash; С помощью этой способности вы можете выбрать среднюю броню. Если вы выберете эту опцию во второй раз, вы сможете выбрать тяжелую броню.</p>
        <p> &mdash; Если ваше вооружение получит бонус Магического оружия, в качестве бонусного действия вы можете вместо этого применить этот бонус к своему КД. Прежде чем вы сможете выбрать эту опцию, вы должны выбрать четыре способности брони.</p>
        `
    }, //Armor 1 ----------------------------------- Defence
    {
        type: tp.defence,
        cost: 2,
        rules: true, 
        castingTime:      castTime.bonus,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Щит [Shield]", 
        requirements: "",
        data:`
        <p>Вы создаете щит в своей левой руке. Если при активации этой способности у вас есть Призыв, вместо этого ваш Призыв может получить щит.</p>
        <p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, пока держите щит, ваша вторая рука считается открытой.</p>
        `
    }, //Shield 2
    {
        type: tp.defence,
        cost: 2,
        rules: true, 
        castingTime:      castTime.bonus,
        range:            rng.ft5,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Удар щитом [Shield Bash]", 
        requirements: "Способность Щит [Shield]",
        data:`
        <p>Ваш щит считается оружием ближнего боя, наносящим дробящий урон 1d4, вы получаете владение этим оружием.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d12.</p>
        <p> &mdash; Ваш щит рассматривается как ваше вооружение с целью получения выгоды от любых бонусов, функций, заклинаний или способностей вооружения, которые дает ваше вооружение. Прежде чем выбрать этот вариант, вы должны были выбрать эту способность дважды.</p>
        `
    }, //Shield Bash 3
    {
        type: tp.defence,
        cost: 3,
        rules: true, 
        castingTime:      castTime.reaction,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ true,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Оборонительный всплеск [Defensive Surge]", 
        requirements: "Одна оборонительная способность",
        data:`
        <p>Когда вас атакуют, вы создаете барьер. На время действия вы получаете 4 временных хита.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте временные очки жизни на +2.</p>
        `
    }, //Defensive Surge 4
    {
        type: tp.defence,
        cost: 3,
        rules: true, 
        castingTime:      castTime.reaction,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Большой спасбросок [Greater Saving Throw]", 
        requirements: "Две оборонительные способности",
        data:`
        <p>Когда вы совершаете спасбросок, в качестве реакции вы получаете бонус +1 к этому спасброску.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте бонус, который дает эта способность, на 1, максимум до +5.</p>
        `
    }, //Greater Saving Throw 5
    {
        type: tp.defence,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Железное тело [Iron Body]", 
        requirements: "Три оборонительные способности",
        data:`
        <p>У вас есть порог урона, равный 3 (источник с порогом урона имеет иммунитет ко всему урону, если только он не получит количество урона от одной атаки или эффекта, равное или превышающее его порог урона, и в этом случае он получает урон как обычно).</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая порог урона на 1.</p>
        `
    }, //Iron Body 6
    {
        type: tp.defence,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Шипованный доспех [Thornmail]", 
        requirements: "Четыре оборонительные способности",
        data:`
        <p>Каждый раз, когда вам наносят урон рукопашной атакой, атакующий получает 1d4 урона. Эта способность может работать в сочетании с такими способностями, как «Форма огня».</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая урон дополнительно на 1d4 до максимального значения 5d4.</p>
        `
    }, //Thornmail 7
    {
        type: tp.defence,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Сопротивление заклинаниям [Spell Resistance]", 
        requirements: "Пять оборонительных способностей",
        data:`
        <p>Нося доспехи, вы получаете преимущество в спасбросках от заклинаний. Если ваш Призыв носит броню, вместо этого он получает выгоду от этой способности.</p>
        `
    }, //Spell Resistance 8
    {
        type: tp.defence,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Сопротивление заклинаниям [Quick Defense]", 
        requirements: "Шесть оборонительных способностей",
        data:`
        <p>Вы получаете дополнительную реакцию, дополнительные реакции от этой способности можно использовать только для барьерных способностей и требуют от вас затрат 2 SP.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз получая дополнительную реакцию.</p>
        `
    }, //Quick Defense 9
    {
        type: tp.defence,
        cost: 4,
        rules: true, 
        castingTime:      castTime.reaction,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Защитник [Quick Defense]", 
        requirements: "Шесть оборонительных способностей",
        data:`
        <p>Если существо в радиусе действия будет подвергнуто воздействию заклинания или способности, и это заклинание или способность активирует способность брони, если вы были ее носителем, вы можете активировать способность брони, вместо этого ваш союзник все активные эффекты от этой способности.</p>
        <p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, каждый раз, когда вы активируете свою способность Брони, вы можете заставить согласное существо в пределах 60 футов получить Броню вместе с ее эффектами.</p>
        `
    }, //Quick Defense 10
    {
        type: tp.defence,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Повышенное сопротивление заклинаниям (возвышенный) [Greater Spell Resistance (Ascended)]", 
        requirements: "Семь оборонительных способностей",
        data:`
        <p>Во время Вознесения у вас есть сопротивление урону от заклинаний.</p>
        `
    }, //Greater Spell Resistance (Ascended) 11
    {
        type: tp.earth,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Форма Земли [Earth Form]", 
        requirements: "Семь оборонительных способностей",
        data:`
        <p>Вашим вооружением становится чистая земля. Пока эта способность активна, тип урона вашего оружия меняется на дробящий урон.</p>
        <p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отклонить эту способность как бонусное действие.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        `
    }, //Earth Form 1 ----------------------------------- Earth
    {
        type: tp.earth,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Каменное оружие [Stone Weapon]", 
        requirements: "",
        data:`
        <p>Ваше вооружение наполнено большими кусками камня и земли, наносящими дополнительный дробящий урон 1d4.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d12.</p>
        `
    }, //Stone Weapon 2
    {
        type: tp.earth,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Гранитное оружие [Granite Weapon]", 
        requirements: "Одна земляная способность",
        data:`
        <p>Когда вы наносите критический удар своим вооружением, цель получает дополнительный дробящий урон 1d4 и получает удар с такой силой, что становится недееспособной. В конце каждого своего хода цель может совершить спасбросок Телосложения. В случае успеха эта способность заканчивается на цели.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте DC спасброска на 1.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d10.</p>
        `
    }, //Granite Weapon 3
    {
        type: tp.earth,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft30,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ true,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Лепка земли [Mold Earth]", 
        requirements: "Одна земляная способность",
        data:`
        <p>Вы выбираете или прикасаетесь к части земли, грязи, камня или подобного материала, которую вы можете видеть в пределах дистанции и которая умещается в пределах 10-футового куба. Вы манипулируете им одним из следующих способов:</p>
        <p> &mdash; Вы можете изменить форму материала в этой области любым способом по вашему выбору на время действия. Вы можете повысить или понизить высоту местности, создать или засыпать траншею, возвести или сгладить стену или сформировать колонну. Масштаб любых таких изменений не может превышать половины наибольшего размера области.</p>
        <p> &mdash; Вы вызываете появление на материале форм, цветов или того и другого, произносите слова, создаете изображения или формируете узоры. Изменения действуют в течение всего срока действия.</p>
        <p> &mdash; Если материал, на который вы нацелены, находится на земле, вы превращаете его в труднопроходимую местность. Альтернативно, вы можете сделать землю нормальной местностью, если это уже сложная местность. Это изменение длится в течение всего времени.</p>
        <p> &mdash; Вы превращаете камень в грязь или наоборот. Если вы хотите превратить камень в грязь, пока существо находится в этой области, оно должно преуспеть в спасброске силы, иначе эта область будет считаться труднопроходимой местностью. Если вы хотите превратить грязь в камень, существа в этой области должны преуспеть в спасброске Ловкости, иначе они будут удержаны на время действия. Скованное существо может действием совершить дополнительный спасбросок Силы, чтобы оторваться от затвердевшей скалы.</p>
        <p>Если вы используете эту способность несколько раз, вы можете иметь только количество ее немгновенных эффектов, равное вашему бонусу мастерства, активных одновременно, и вы можете игнорировать такой эффект как действие.</p>
        <p>Каждый раз, когда вы выбираете эту способность, площадь куба, на который вы можете воздействовать, увеличивается на 5 футов, а толщина, на которую вы можете влиять, увеличивается на 1 фут.</p>
        <p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличить дальность на 10 футов.</p>
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Увеличение продолжительности на 1 час.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        `
    }, //Mold Earth 4
    {
        type: tp.earth,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Земляной щит [Earth Shield]", 
        requirements: "Две земляной способности",
        data:`
        <p>Пока способность не закончится, кусочки камня разлетятся по вашему телу, и вы получите следующие преимущества:</p>
        <p> &mdash; Вы уменьшаете получаемый вами физический урон на 3.</p>
        <p> &mdash; Это значение увеличивается на единицу каждый раз, когда вы выбираете эту способность.</p>
        <p> &mdash; Вы можете перемещаться по сложной местности, состоящей из земли, камня или подобного материала, не затрачивая лишнего движения.</p>
        <p> &mdash; Вы можете рассеять щит, стреляя камнями и осколками в сфере радиусом 20 футов с центром на вас. Существа внутри сферы должны совершить спасбросок ловкости или получить дробящий урон 2d6. При успешном спасброске они получают половину урона. Каждый раз, когда вы выбираете эту способность, радиус сферы увеличивается на 5 футов.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Увеличьте урон на 1d6, максимум до 7d6.</p>
        `
    }, //Earth Shield 5
    {
        type: tp.earth,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ true,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Стена камня [Wall of Stone]", 
        requirements: "Лепка земли [Mold Earth] и одна другая земляная способности",
        data:`
        <p>Немагическая стена из твердого камня возникает в выбранной вами точке в пределах дистанции.</p>
        <p>Стена имеет толщину 3 дюйма и состоит из пяти панелей размером 10 на 10 футов. Каждая панель должна быть непрерывной, по крайней мере, с другой панелью. Каждый раз, когда вы повторно выбираете эту способность, толщина увеличивается на 1 дюйм.</p>
        <p>Если стена прорезает пространство существа при его появлении, существо отталкивается к одной стороне стены (на ваш выбор). Если существо со всех сторон окружено стеной (или стеной и другой твердой поверхностью), оно может совершить спасбросок Ловкости. В случае успеха он может использовать свою реакцию, чтобы набрать свою скорость и больше не быть окруженным стеной.</p>
        <p>Стена может иметь любую форму по вашему желанию, однако она не может занимать то же пространство, что и существо или объект. стена не обязательно должна быть вертикальной или опираться на прочный фундамент. Однако он должен сливаться с существующим камнем и прочно поддерживаться им. Таким образом, вы можете использовать это заклинание, чтобы преодолеть пропасть или создать пандус.</p>
        <p>Если вы создаете пролет длиной более 20 футов, вам необходимо уменьшить вдвое размер каждой панели, чтобы создать опоры. Вы можете грубо придать стене форму, чтобы создать зубцы, зубцы и так далее.</p>
        <p>Стена — это объект из камня, который можно повредить и, таким образом, пробить. Каждая панель имеет AC 15 и 10 очков жизни на дюйм толщины. Уменьшение хитов панели до 0 разрушает ее и может привести к разрушению соединенных панелей по усмотрению DM.</p>
        <p>Если вы сохраняете концентрацию на этой способности в течение всего ее действия, стена становится постоянной и не может быть развеяна. В противном случае стена исчезнет, когда способность закончится.</p>
        
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличение дальности на 10 футов.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Вы можете создать дополнительную панель.</p>
        `
    }, //Wall of Stone 6
    {
        type: tp.earth,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft100,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Земляной луч [Earth Blast]", 
        requirements: "Три земляных способности",
        data:`
        <p>Выберите одно существо, которое вы видите в пределах дистанции. В цель запускается снаряд из перепаханной земли.</p>
        <p>Совершите дальнюю атаку по цели. При попадании цель получает дробящий урон 3d8.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный снаряд (максимум четыре). Вы можете направить дополнительные снаряды в ту же цель или в другую, для любых дополнительных снарядов необходимо сделать отдельный бросок атаки.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Дальность увеличена на 10 футов.</p>
        <p> &mdash; Увеличьте размер кубика урона до d10. Вы должны выбрать эту способность четыре раза, прежде чем сможете выбрать эту опцию.</p>
        `
    }, //Earth Blast 7
    {
        type: tp.earth,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Тремор [Tremor]", 
        requirements: "Четыре земляных способности",
        data:`
        <p>Вы наносите удар о землю, создавая дрожь, которая расходится от вас в радиусе 40 футов. Каждое существо в радиусе действия должно преуспеть в спасброске Ловкости, иначе оно получит дробящий урон 7d10 и будет сбито с ног. Существо, преуспевшее в спасброске, получает вдвое меньше урона и не сбивается с ног.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, радиус увеличивается на 10 футов.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Увеличьте СЛ спасброска на 1.</p>
        <p> &mdash; Увеличьте урон на 1d10.</p>
        `
    }, //Tremor 8
    {
        type: tp.earth,
        cost: 3,
        rules: true, 
        castingTime:      castTime.round,
        range:            rng.ft120,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Каменные Столпы (Ультимативный) [Pillars of Stone (Ultimate)]", 
        requirements: "Пять земляных способностей",
        data:`
        <p>Пока действует эта способность, вы можете вызывать из земли каменные колонны.</p>
        <p>Действием вы заставляете каменную колонну взрываться из мест на земле, которые вы можете видеть в пределах досягаемости. Каждый столб представляет собой цилиндр диаметром 5 футов и высотой до 30 футов; каждый раз, когда вы повторно выбираете эту способность, диаметр и высота увеличиваются на 5 футов. Земля, где появляется столб, должна быть достаточно широкой для его диаметра, и вы можете нацеливаться на землю под существом, если это существо Среднего размера или меньше. Каждый столб имеет КД 5 и 30 очков жизни. При уменьшении хитов до 0 столб рассыпается на щебень, создавая область труднопроходимой местности радиусом 10 футов. Завалы сохраняются до тех пор, пока их не расчистят.</p>
        <p>Если под существом создается столб, то это существо должно преуспеть в спасброске Ловкости, иначе оно получит дробящий урон 5d8 и будет поднято столбом. Существо может отказаться от спасброска. Если столб не может достичь своей полной высоты из-за потолка или другого препятствия, существо на столбе получает дробящий урон 5d8 и оказывается удерживаемым, зажатым между столбом и препятствием.</p>
        <p>Удерживаемое существо может действием совершить проверку Силы или Ловкости (по выбору существа) против СЛ спасброска способности. В случае успеха существо больше не сдерживается и должно либо сойти с колонны, либо упасть с нее.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d8.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличение дальности на 20 футов.</p>
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Вместо этого вы действием заставляете два столба земли вырваться из земли из двух разных точек вместо одной.</p>
        `
    }, //Pillars of Stone (Ultimate) 9
    {
        type: tp.earth,
        cost: 4,
        rules: true, 
        castingTime:      castTime.round,
        range:            rng.ft500,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Землетресение (возвышенный) [Earthquake (Ascended)]", 
        requirements: "Шесть земляных способностей",
        data:`
        <p>Вы создаете сейсмическое возмущение в точке на земле, которую можете видеть в пределах досягаемости.</p>
        <p>В течение этого времени интенсивная дрожь прорывает землю по кругу радиусом 100 футов с центром в этой точке и сотрясает существ и конструкции, соприкасающиеся с землей в этой области.</p>
        <p>Местность в этом районе становится труднопроходимой. Каждое существо на земле, которое концентрируется, должно совершить спасбросок Телосложения. При провале сохранения концентрация существа нарушается.</p>
        <p>Когда вы используете эту способность и в конце каждого хода концентрируетесь на ней, каждое существо на земле в этой области должно совершить спасбросок Ловкости. При провале существо сбивается с ног и получает дробящий урон 10d6.</p>
        <p>Эта способность может иметь дополнительные эффекты в зависимости от местности в области, как это определено DM.</p>
        <p><strong>Трещины</strong></p>
        <p>Трещины открываются по всей области действия способности в начале вашего следующего хода после произнесения заклинания. Всего открывается 1d6 таких трещин в местах, выбранных Мастером. Каждый имеет глубину 1d10 x 10 футов, ширину 10 футов и простирается от одного края области заклинания до противоположной стороны. Существо, стоящее на месте, где открывается трещина, должно преуспеть в спасброске Ловкости, иначе упадет. Существо, успешно сделавшее спасбросок, движется вместе с краем трещины, когда она открывается.</p>
        <p>Трещина, открывающаяся под конструкцией, приводит к ее автоматическому обрушению (см. ниже).</p>

        <p><strong>Здания</strong></p>
        <p>Землетресение наносит 50 дробящего урона любой конструкции, соприкасающейся с землей в этой области, когда вы произносите заклинание, а также в начале каждого вашего хода, пока заклинание не закончится. Если хиты конструкции падают до 0, она рушится и потенциально наносит урон близлежащим существам. Существо, находящееся в пределах половины высоты строения, должно совершить спасбросок Ловкости. В случае провала существо получает дробящий урон 20d6, сбивается с ног и закапывается под обломками, требуя проверку Силы (Атлетика) со Сл 20 в качестве действия, чтобы спастись. DM может регулировать DC выше или ниже, в зависимости от характера обломков. При успешном спасброске существо получает вдвое меньше урона и не падает на землю и не закапывается.</p>
        <p>Вы можете выбрать эту способность второй раз, если вы это сделаете, количество трещин удваивается, размер трещин удваивается, а урон, наносимый этой способностью структурам, удваивается.</p>
        `
    }, //Earthquake (Ascended) 10
    {
        type: tp.earth,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Бедрок  (возвышенный) [Bedrock (Ascended)]", 
        requirements: "Шесть земляных способностей",
        data:`
        <p>Ваши земные способности увеличиваются в силе. Ваши способности вооружения или Кидо, наносящие дробящий урон, игнорируют сопротивление. Если существо невосприимчиво к дробящему урону, вместо этого оно получает половину урона.</p>
        `
    }, //Bedrock (Ascended) 11
    {
        type: tp.fire,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Форма огня [Fire Form]", 
        requirements: "",
        data:`
        <p>Ваше вооружение становится чистым огнем. Пока эта способность активна, тип урона вашего вооружения меняется на урон от огня.</p>
        <p>Если у вас есть Призыв, вы можете применить эту способность и к его оружию. Вы можете отклонить эту способность как бонусное действие.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        `
    }, // Fire Form 1 ----------------------------------- Fire
    {
        type: tp.fire,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Пылающее оружие [Flaming Weapon]", 
        requirements: "",
        data:`
        <p>Ваше вооружение загорается, нанося дополнительный урон огнём 1d4. Вы можете отклонить эту способность как бонусное действие.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d12.</p>
        `
    }, // Flaming Weapon 2
    {
        type: tp.fire,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Опаляющее оружие [Scorching Weapon]", 
        requirements: "Одна огненная способность",
        data:`
        <p>Когда вы наносите критическое попадание своим вооружением, цель получает дополнительный урон огнём 1d6 в начале каждого своего хода. В каждый свой ход цель может использовать действие, чтобы потушить огонь, прекращая эффект.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d10.</p>
        `
    }, // Scorching Weapon 3
    {
        type: tp.fire,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ true,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Контроль пламени [Control Flames]", 
        requirements: "Одна огненная способность",
        data:`
        <p>Вы выбрали немагическое пламя, которое можете видеть в пределах дистанции и которое умещается в пределах 5-футового куба. Вы можете повлиять на него одним из следующих способов:</p>
        <p> &mdash; Вы мгновенно гасите пламя внутри куба.</p>
        <p> &mdash; Вы удваиваете или уменьшаете вдвое интенсивность яркого и тусклого света, излучаемого пламенем, меняете его цвет или и то, и другое. Вы выбираете продолжительность.</p>
        <p> &mdash; Вы заставляете простые формы, такие как расплывчатая форма существа, неодушевленный предмет или локация, появляться в огне и оживать, пока вы лежите. Вы выбираете продолжительность.</p>
        <p> &mdash; У вас также может появиться мерцающее пламя в вашей руке. Пламя остается там все время и не причиняет вреда ни вам, ни вашему оборудованию. Пламя излучает яркий свет в радиусе 10 футов и тусклый свет еще на 10 футов. Вы можете отклонить этот эффект как действие.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, куб увеличивается на 5 футов.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Теперь вы можете воздействовать на магический огонь.</p>
        <p> &mdash; Пламя, которое вы можете создать с помощью этой способности, не создает тепла и не использует кислород, если вы того пожелаете; это пламя можно скрыть или спрятать, но нельзя задушить или погасить</p>
        <p> &mdash; Увеличьте длительность этой способности на 1 час.</p>
        `
    }, //Control Flames 4
    {
        type: tp.fire,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Щит пламени [Fire Shield]", 
        requirements: "Две огненные способности",
        data:`
        <p>Пламя пробегает по вашему телу на протяжении всего времени действия способности. Пламя не причинит вреда вам и вашему оборудованию. Пока способность не закончится, вы получаете следующие преимущества:</p>

        <p> &mdash; У вас есть устойчивость к урону от огня и холода.</p>
        <p> &mdash; Вы излучаете яркий свет в радиусе 5 футов и тусклый свет еще на 5 футов.</p>
        <p> &mdash; Любое существо, которое впервые за ход перемещается в пределах 5 футов от вас или заканчивает там свой ход, получает урон огнём 1d4. Каждый раз, когда вы повторно выбираете эту способность, размер кубика урона увеличивается на один шаг, максимум до 1d10.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Диапазон яркого и тусклого света удваивается.</p>
        <p> &mdash; Вместо этого вы невосприимчивы к урону от огня.</p>
        <p> &mdash; Вы можете выбрать, будет ли урон от этой способности затрагивать существ или нет.</p>
        `
    }, //Fire Shield 5
    {
        type: tp.fire,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.cone30,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Конус огня [Cone of Fire]", 
        requirements: "Три огненные способности",
        data:`
        <p>Ревущая волна пламени , конусом вырывающаяся из вас.</p>
        <p>Каждое существо в 30-футовом конусе должно совершить спасбросок Ловкости. Существо получает урон огнём 3d8 при нанесенном ударе или половину этого урона при успешном.</p>
        
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер конуса на 5 футов.</p>
        <p> &mdash; Увеличьте урон на 1d6.</p>
        `
    }, //Cone of Fire 6
    {
        type: tp.fire,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Стена огня [Wall of Fire]", 
        requirements: "Четыре огненные способности",
        data:`
        <p>Вы создаете стену огня на твердой поверхности в пределах дистанции. Вы можете сделать стену длиной до 60 футов, высотой 20 футов и толщиной 1 фут или кольцевую стену диаметром до 20 футов, высотой 20 футов и толщиной 1 фут. Стена непрозрачна и сохраняется в течение всего времени действия.</p>
        <p>Когда появляется стена, каждое существо в ее области должно совершить спасбросок Ловкости. При провале существо получает урон огнём 4d6, или половину этого урона при успешном спасброске.</p>
        <p>Одна сторона стены, выбранная вами при чтении этого заклинания, наносит ужасный урон 4d6 каждому существу, которое заканчивает свой ход в пределах 10 футов от этой стороны или внутри стены. Существо получает одинаковый урон, когда оно впервые за ход входит в стену или заканчивает там свой ход. Другая сторона стены не наносит урона.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d6.</p>
        
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте дальность, высоту, длину и диаметр этой способности на 10 футов.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Увеличьте СЛ спасброска на 1.</p>
        <p> &mdash; Вы можете выбрать обе стороны стены, чтобы нанести урон.</p>
        `
    }, //Wall of Fire 7
    {
        type: tp.fire,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ true,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Столп Пламени [Pillar of Flame]", 
        requirements: "Четыре огненные способности",
        data:`
        <p>A vertical column of fire roars to life on a point you choose within range. This column is 40 feet high with a 10-foot radius. Each creature within the pillar must make a Dexterity saving throw.</p>
        <p>Существо получает урон огнём 6d6 при провале или половину этого урона при успехе. Эта способность может действовать мгновенно или сохраняться в течение часа. Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d6.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличение дальности на 10 футов.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте радиус и высоту цилиндра на 5 футов.</p>
        `
    }, //Pillar of Flame 8
    {
        type: tp.fire,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft100,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Огненный шторм (Ультимативный) [Fire Storm (Ultimate)]", 
        requirements: "Пять огненных способностей",
        data:`
        <p>Шторм, состоящий из полос ревущего пламени, появляется в выбранном вами месте в пределах досягаемости.</p>
        <p>Область шторма состоит из до десяти 10-футовых кубов, которые вы можете расположить по своему желанию. У каждого куба msut есть хотя бы одна грань, примыкающая к грани другого куба. Каждое существо в области получает урон огнём 7d8.</p>
        <p>Огонь повреждает растения, предметы на территории и воспламеняет легковоспламеняющиеся предметы, которые не носят и не носят с собой.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, урон увеличивается на 1d8.</p>

        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер кубиков на 5 футов.</p>
        `
    }, //Fire Storm (Ultimate) 9
    {
        type: tp.fire,
        cost: 4,
        rules: true, 
        castingTime:      castTime.round,
        range:            rng.mile1,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Метеоритный рой (вознесенный) [Meteor Swarm (Ascended)]", 
        requirements: "Шесть огненных способностей",
        data:`
        <p>Пылающие огненные шары падают на землю в четырех разных точках, которые вы можете видеть в пределах досягаемости.</p>
        <p>Каждое существо в сфере радиусом 20 футов с центром в каждой выбранной вами точке должно совершить спасбросок Ловкости. Сфера распространяется по углам. Существо получает урон огнём 10d6 и дробящий урон 10d6 при провале или половину этого урона при успехе. Существо, находящееся в зоне действия более чем одной огненной вспышки, воздействует только один раз.</p>
        <p>Эта способность повреждает растения, предметы в зоне действия и поджигает легковоспламеняющиеся предметы, которые никто не носит и не переносит.</p>
        <p>Вы можете повторно выбрать эту способность во второй раз, если вы это сделаете, огненные вспышки могут воздействовать на существ более одного раза.</p>
        ` 
    }, //Meteor Swarm (Ascended) 10
    {
        type: tp.fire,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Адское Пламя (Вознесенный) [Hellfire (Ascended)]", 
        requirements: "Шесть огненных способностей",
        data:`
        <p>Ваши способности вооружения и Кидо, наносящие урон от огня, игнорируют сопротивления. Если существо будет невосприимчиво к урону от огня, вместо этого оно получит половину урона.</p>
        ` 
    }, //Hellfire (Ascended) 11
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Повышенная сила [Increased Strength]", 
        requirements: "",
        data:`
        <p>Пока ваше вооружение активно, ваш показатель Силы увеличивается на 2.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая показатель Силы на 1.</p>
        ` 
    }, //Increased Strength 1 ---------------------------------- common
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Повышенная ловкость [Increased Dexterity]", 
        requirements: "",
        data:`
        <p>Пока ваше вооружение активно, ваш показатель Ловкости увеличивается на 2.</p>
        <p>Вы можете повторно выбирать эту способность несколько раз, каждый раз увеличивая показатель Ловкости на 1.</p>
        ` 
    }, //Increased Dexterity 2
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Повышенное телосложение [Increased Constitution]", 
        requirements: "",
        data:`
        <p>Пока ваше вооружение активно, ваш показатель Телосложения увеличивается на 2.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая показатель Телосложения на 1.</p>
        ` 
    }, //Increased Constitution 3
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Повышенный интеллект [Increased Intelligence]", 
        requirements: "",
        data:`
        <p>Пока ваше вооружение активно, ваш показатель Интеллекта увеличивается на 2.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая свой показатель Интеллекта на 1.</p>
        ` 
    }, //Increased Intelligence 4
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Повышенная мудрость [Increased Wisdom]", 
        requirements: "",
        data:`
        <p>Пока ваше вооружение активно, ваш показатель Мудрости увеличивается на 2.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая свой показатель Мудрости на 1.</p>
        ` 
    }, //Increased Wisdom 5
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Повышенная харизма [Increased Charisma]", 
        requirements: "",
        data:`
        <p>Пока ваше вооружение активно, ваш показатель Харизмы увеличивается на 2.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая показатель Харизмы на 1.</p>
        ` 
    }, //Increased Charisma 6
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Увеличенный спасбросок [Increased Saving Throw]", 
        requirements: "Три способности вооружения",
        data:`
        <p>Пока ваше вооружение активно, вы получаете бонус +1 к спасброскам.</p>
        <p>Вы можете повторно выбрать эту способность до трех раз, каждый раз увеличивая этот бонус на 1, максимум +4.</p>
        ` 
    }, //Increased Saving Throw 7
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Увеличенный навык [Increased Skill]", 
        requirements: "",
        data:`
        <p>Выберите навык, которым вы не владеете, пока ваше вооружение активно, вы считаетесь владеющим выбранным навыком.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая другой навык, которым вы не владеете.</p>
        ` 
    }, //Increased Skill 8
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Увеличенная скорость [Increased Speed]", 
        requirements: "",
        data:`
        <p>Пока ваше вооружение активно, все ваши формы передвижения увеличиваются на 5 футов.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз увеличивая этот бонус на 5 футов.</p>
        ` 
    }, //Increased Speed 9
    {
        type: tp.common,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Быстрое высвобождение [Quick Release]", 
        requirements: "",
        data:`
        <p>Вы можете высвободить свое вооружение Бонусным действием.</p>
        ` 
    }, //Quick Release 10
    {
        type: tp.common,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Великое быстрое высвобождение [Quick Release Greater]", 
        requirements: "Форма высвобождения",
        data:`
        <p>Вы можете активировать свою Вознесенную форму в качестве Бонусного действия, если ваше вооружение выпущено.</p>
        ` 
    }, //Quick Release Greater 11
    {
        type: tp.common,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Увеличенние талантов [Increased Talent]", 
        requirements: "",
        data:`
        <p>Получите черту, которая подходит вам !!!TODO!!!</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, всего три раза.</p>
        ` 
    }, //Increased Talent 12
    {
        type: tp.common,
        cost: 0,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Увеличенная концентрация [Increased Concentration]", 
        requirements: "Одна способность вооружения",
        data:`
        <p>Пока ваше вооружение высвобождено, вы имеете преимущество на проверки, чтобы сохранить концентрацию на способностях вооружения.</p>
        ` 
    }, //Increased Concentration 13
    {
        type: tp.common,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft40,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Духовный луч [Spirit Blast]", 
        requirements: "Одна способность вооружения",
        data:`
        <p>Взрыв реацу устремляется к существу, находящемуся в пределах досягаемости от вас.</p>
        <p>Совершите дальнюю атаку по цели. При попадании цель получает силовой урон 2d8. Каждый раз, когда вы повторно выбираете эту способность, вы получаете дополнительный луч (максимум четыре луча). Вы можете направить дополнительные лучи на ту же цель или на другую, для любых дополнительных лучей необходимо сделать отдельный бросок атаки.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличение дальности на 10 футов.</p>
        <p> &mdash; Увеличьте размер кубика урона на одну ступень, максимум д12.</p>
        ` 
    }, //Spirit Blast 14
    {
        type: tp.common,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Увеличенная внимательность [Increased Awareness]", 
        requirements: "Четыре способности вооружения",
        data:`
        <p>Вы получаете следующие преимущества:</p>
        <p> &mdash; Вы добавляете свой бонус мастерства к своим броскам на инициативу.</p>
        <p> &mdash; Вы получаете бонус +2 к пассивному показателю Мудрости (Внимательности).</p>
        <p> &mdash; У вас есть слепое зрение на расстоянии 5 футов. Это сочетается с другими источниками слепого зрения.</p>
        ` 
    }, //Increased Awareness 15
    {
        type: tp.common,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Полет [Flying]", 
        requirements: "Шесть способностей вооружения",
        data:`
        <p>На время действия вы получаете скорость полета 60 футов. Когда эта способность заканчивается, вы начинаете падать, если все еще находитесь в воздухе, если только не сможете остановить падение.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Увеличьте скорость полета на 10 футов.</p>
        ` 
    }, //Flying 16
    {
        type: tp.common,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Ускоренная способность (возвышенная) [Quickened Ability (Ascended)]", 
        requirements: "Шесть способностей вооружения",
        data:`
        <p>Выберите способность вооружения, время применения которой равно одному действию, теперь оно изменено на Бонусное действие.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз.</p>
        ` 
    }, //Quickened Ability (Ascended) 17
    {
        type: tp.common,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Улучшенное Вознесение (Вознесенный) [Improved Ascencion (Ascended)]", 
        requirements: "Форма высвобождения",
        data:`
        <p>Выберите две способности вооружения, доступ к этим способностям у вас есть только во время вознесения.</p>
        <p>Вы можете выбрать эту способность несколько раз.</p>
        ` 
    }, //Improved Ascencion (Ascended) 18
    {
        type: tp.gravity,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Гравитационный клинок [Gravity Blade]", 
        requirements: "",
        data:`
        <p>Ваше вооружение пульсирует гравитационными силами, когда вы наносите урон своим вооружением, цель отталкивается на 5 футов от вас в выбранном ею направлении.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность бонусным действием.</p>
        <p> &mdash; Эта способность больше не требует концентрации. Прежде чем выбрать эту опцию, вы должны были выбрать эту способность дважды.</p>
        <p> &mdash; Оружие нанесет дополнительный силовой урон 1d4. Каждый раз, когда вы повторно выбираете эту опцию, размер кубика урона увеличивается на один шаг, максимум 1d12.</p>
        <p> &mdash; Количество футов, на которое отталкивается цель, увеличивается на 5 футов, максимум на 60 футов.</p>
        ` 
    }, //Gravity Blade 1 ----------------------------------- gravity
    {
        type: tp.gravity,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Контроль гравитации [Control Gravity]", 
        requirements: "",
        data:`
        <p>Вы управляете гравитацией в 10-футовом кубе, который вы можете видеть в пределах досягаемости. Выберите один из следующих эффектов при активации этой способности. Эффект длится до тех пор, пока вы не используете свое действие на более позднем ходу, чтобы переключиться на другой эффект. Вы также можете использовать свое действие, чтобы временно остановить эффект или возобновить тот, который вы остановили.</p>
        <p>Любое существо может игнорировать эффекты этой способности при успешном спасброске Силы.</p>
        <p>Продолжительность увеличивается на 1 минуту за каждую другую вашу способность «Гравитация».</p>
        <p><strong>Увеличение гравитации.</strong></p>
        <p>Вес всех объектов и существ в области увеличивается вдвое, и каждое существо должно тратить 1 дополнительный фут движения на каждый фут, который оно перемещает с использованием своей Скорости.</p>
        <p><strong>Уменьшить гравитацию.</strong></p>
        <p>Вес всех объектов и существ в области уменьшается вдвое, и каждое существо, тратит вдвое меньше своей скорости для перемещения, перемещение на 10 футов тратит 5 футов скорости.</p>
        <p><strong>Гравитационное отбрасывание.</strong></p>
        <p>При инициативе 10 каждое существо в пределах 30 футов от области отталкивается на 5 футов от центра в выбранном ими направлении.</p>
        <p><strong>Гравитационное притяжение.</strong></p>
        <p>При инициативе 10 каждое существо в пределах 30 футов от области притягивается на 5 футов к центру в выбранном направлении.</p>
        <p><strong>Фиксирование гравитации.</strong></p>
        <p>Вы касаетесь объекта весом не более 10 фунтов и заставляете его волшебным образом фиксироваться на месте. Если объект зафиксирован в воздухе, он может выдержать вес до 2000 фунтов. Больший вес приводит к падению объекта. В противном случае существо может действием совершить проверку Силы против DC вашего спасброска по вооружению. В случае успеха существо может переместить объект на расстояние до 10 футов.</p>
        <p>Вы должны выбрать эту способность трижды, прежде чем сможете использовать этот эффект.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность бонусным действием.</p>
        <p> &mdash; Продолжительность увеличена на 1 минуту.</p>
        <p> &mdash; Площадь увеличена на 10 футов.</p>
        <p> &mdash; Для способности Фиксирование гравитации» вес объекта, на который вы можете воздействовать, увеличивается на 5 фунтов, а вес, который объект может выдержать, увеличивается на 500 фунтов.</p>
        ` 
    }, //Control Gravity 2
    {
        type: tp.gravity,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Гравитационное оружие [Graviton Weapon]", 
        requirements: "Одна гравитационная способность",
        data:`
        <p>Когда вы наносите критическое попадание своим вооружением, цель и каждое существо в пределах 5 футов от нее получают 1d4 силового урона.</p>
        <p>Вы можете выбирать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличение дальности на 5 футов.</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум 1d10.</p>
        ` 
    }, //Graviton Weapon 3
    {
        type: tp.gravity,
        cost: 4,
        rules: true, 
        castingTime:      castTime.reactionTkDmg,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Отталкивание [Repulsion]", 
        requirements: "Способность Контроль гравитации [Control Gravity]",
        data:`
        <p>С невероятной скоростью вы создаете вокруг себя сферу гравитации, отталкивающую снаряды и нападающих. Мощная сила исходит от вас в сфере радиусом 10 футов, сосредоточенной на вас, отталкивая все физические предметы, существ и заклинания. Это также потенциально сводит на нет любой урон, который вы можете получить от сработавшего источника.</p>
        <p>Использование этой способности нарушает концентрацию.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер сферы на 5 футов, максимум 30 футов.</p>
        <p> &mdash; Существо, попавшее под удар этой способности, должно совершить спасбросок Ловкости, в случае неудачи способность наносит 2d6 силового урона. Каждый раз, когда вы повторно выбираете эту опцию, размер кубика урона увеличивается на один шаг, максимум 2d12.</p>
        ` 
    }, //Repulsion 4
    {
        type: tp.gravity,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Гравитас [Gravitas]", 
        requirements: "Две гравитационные способности",
        data:`
        <p>Вы жестоко манипулируете гравитацией, чтобы силой переместить существо, которое видите, в пределах досягаемости. Цель совершает спасбросок Силы. При провале вы можете толкнуть или потянуть цель на расстояние до 15 футов в любом направлении. Если вы переместите цель на твердую поверхность, цель получит 1d8 дробящего удара за каждые 5 футов, которые она переместила в этом направлении.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте расстояние, на которое вы можете переместить цель, на 5 футов.</p>
        <p> &mdash; Эта способность больше не требует компонентов V.</p>
        <p> &mdash; Вы можете выбрать дополнительную цель для этой способности. Вы должны выбрать эту способность трижды, прежде чем сможете выбрать эту опцию.</p>
        ` 
    }, //Gravitas 5
    {
        type: tp.gravity,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Гравитационная волна [Gravity Wave]", 
        requirements: "Две гравитационные способности",
        data:`
        <p>Вы высвобождаете мощное гравитационное давление, которое толкает или тянет существ и объекты. Каждое существо в 60-футовом конусе должно совершить спасбросок Силы. Существо получает урон силой 4d6 и притягивается к вам или отталкивается на 15 футов от вас; вы должны выбрать, что именно, прежде чем использовать эту способность. При успешном спасброске существо получает половину урона и не перемещается.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличить размер конуса на 5 футов</p>
        <p> &mdash; Увеличить количество ног, которые толкают или тянут, на 5 футов</p>
        <p> &mdash; Существа, провалившие спасбросок, также сбиваются с ног. Прежде чем вы сможете выбрать эту опцию, вы должны выбрать эту способность дважды.</p>
        ` 
    }, //Gravity Wave 6
    {
        type: tp.gravity,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Вытеснитель [Displacer]", 
        requirements: "Три гравитационные способности",
        data:`
        <p>Вы открываете дыру в пространстве с другим существом в качестве цели и собой, чтобы поменяться местами. Цель может совершить спасбросок Силы, в случае успеха это заклинание проваливается.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете использовать эту способность за бонусное действие</p>
        <p> &mdash; Дальность увеличивается на 5 футов.</p>
        <p> &mdash; Вы можете выбрать любые две цели вместо одной цели и себя.</p>
        ` 
    }, //Displacer 7
    {
        type: tp.gravity,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.touch,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ true,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Гравитационный карман [Gravitational Pocket]", 
        requirements: "Три гравитационные способности",
        data:`
        <p>Совершите рукопашную атаку по существу, до которого можете дотянуться. При попадании цель получает силовой урон 1d10 и схлопывается в невероятно крошечную точку в пространстве, где она стояла, исчезая, а затем снова появляясь в конце хода в том же пространстве, из которого она вышла. Если какой-либо объект или существо занимает это пространство, они перемещаются в ближайшее незанятое пространство по своему выбору. Существо, находящееся под действием этой способности, получает к ней иммунитет на 1 раунд.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте урон еще на 1d10.</p>
        <p> &mdash; Увеличьте количество раундов, в течение которых цель исчезает на 1.</p>
        ` 
    }, //Gravitational Pocket 8
    {
        type: tp.gravity,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Энтропия [Entropy]", 
        requirements: "Три гравитационные способности",
        data:`
        <p>Вы создаете дестабилизированное гравитационное поле вокруг цели, которую видите в пределах дистанции. Совершите дальнюю атаку по цели. При попадании цель получает урон силой 1d6 и в течение этого времени в начале каждого хода цели она перемещается на 20 футов в случайном направлении: вперед, назад, влево или вправо. Цель может сопротивляться принудительному движению с шагом 5 футов, но за каждые 5 футов, которые она не двигается, она получает 1d6 урона силой.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует концентрации</p>
        <p> &mdash; Увеличение продолжительности на 1 минуту.</p>
        <p> &mdash; Увеличьте величину перемещения существа на 5 футов.</p>
        ` 
    }, //Entropy 9
    {
        type: tp.gravity,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Безграничная гравитация [Gravity Unbound]", 
        requirements: "Четыре гравитационные способности",
        data:`
        <p>Вы обрушиваете гравитацию вокруг себя в 20-футовой сфере с центром вокруг вас, которая движется вместе с вами. На время действия поле оказывает следующие эффекты:</p>
        <p> &mdash; Скорость каждого другого существа на поле снижается до 0.</p>
        <p> &mdash; Все остальные существа имеют помеху при атаке оружием.</p>
        <p> &mdash; В этом случае другие ваши гравитационные способности притягивают или толкают существ еще на 10 футов.</p>
        ` 
    }, //Gravity Unbound 10
    {
        type: tp.gravity,
        cost: 5,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft100,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Сингулярность (ультимативная) [Singularity (Ultimate)]", 
        requirements: "Пять гравитационных способностей",
        data:`
        <p>Вы создаете черную сферу диаметром 2 фута в точке, которую видите в пределах дистанции, и она зависает в этом пространстве.</p>
        <p>Сфера уничтожает всю материю, проходящую через нее. Артефакты являются исключением. Все, что касается сферы, но не полностью поглощено и уничтожено ею, получает урон силой 10d6.</p>
        <p>При инициативе 30 каждое существо в пределах 60 футов от сферы должно совершить спасбросок Силы, в случае неудачи оно притягивается на 35 футов к ее центру.</p>
        <p>Если сфера вступает в контакт с планарным порталом, например, созданным заклинанием врата, или межпространственным пространством, например, внутри переносной дыры, ГМ определяет, какое катастрофическое событие произойдет.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте количество создаваемых вами сингулярностей на 1 до максимума 3.</p>
        <p> &mdash; Вместо этого сфера наносит 10d8 урона.</p>
        ` 
    }, //Singularity (Ultimate) 11
    {
        type: tp.gravity,
        cost: 6,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.varies,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ true,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Гравитационная бомбардировка (вознесенный) [Gravitational Bombardment (Ascended)]", 
        requirements: "Пять гравитационных способностей",
        data:`
        <p>Вы создаете 10 сфер сжимающегося пространства диаметром в один дюйм, которые вращаются вокруг вас. Пока существо подвергается воздействию другой вашей гравитационной способности или заклинания, которое принудительно перемещает существо, вы можете запустить в существо до 3 сфер. Каждая сфера наносит 3d8 силового урона. Кроме того, когда в существо попадает сфера, оно взрывается и излучает гравитационную энергию из существа в сфере радиусом 20 футов. Каждое другое существо в сфере должно совершить спасбросок ловкости. Существо получает 2d6 урона силовым полем за каждый метеор при неудачном спасброске или половину этого урона при успешном.</p>
        ` 
    }, // Gravitational Bombardment (Ascended) 12
    {
        type: tp.gravity,
        cost: 6,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Падающая звезда (вознесенный) [Falling Star (Ascended)]", 
        requirements: "Шесть гравитационных способностей",
        data:`
        <p>Вы создаете вокруг себя сферу нестабильной гравитации. В рамках этого действия вы получаете скорость полета 600 футов и можете перемещаться на расстояние до 600 футов. Если во время этого движения вы столкнетесь с какой-либо поверхностью или существом, сфера разряжается с огромной силой. Объект или существо, подвергшееся воздействию, и все остальные существа в пределах 80 футов от него должны совершить спасбросок Силы. Затронутое существо или объект получает урон силой 30d6 при проваленном спасброске и отбрасывается на 30 футов назад в выбранном вами направлении. Предметы и существа при успешном забирают вдвое меньше и не перемещаются.</p>
        ` 
    }, // Falling Star (Ascended) 13
    {
        type: tp.healing,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Расширенный кайдо [Expanded Kaido]", 
        requirements: "Способность 'Пакт Магии' или врзможность создавать заклинания",
        data:`
        <p>Вы изучаете два новых заклинания Кайдо по вашему выбору из списка заклинаний синигами или два заклинания из любого другого списка заклинаний, которые восстанавливают или предоставляют временные очки жизни.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз.</p>
        ` 
    }, // Expanded Kaido 1 --------------------------------- healing
    {
        type: tp.healing,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ true,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Исцеляющий клинок [Healing Blade]", 
        requirements: "",
        data:`
        <p>Ваше вооружение больше не наносит смертельный урон.</p>
        <p>Всякий раз, когда ваше вооружение наносит урон существу, оно вместо этого восстанавливает очки жизни, равные нанесенному урону. Вы можете отклонить эту способность как бонусное действие.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Вы можете активировать эту способность как бонусное действие и отключить ее по своему желанию.</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте длительность этой способности на 1 раунд.</p>
        ` 
    }, //Healing Blade 2
    {
        type: tp.healing,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ true,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Улучшенное исцеление [Improved Healing]", 
        requirements: "Способность 'Пакт Магии' или врзможность создавать заклинания",
        data:`
        <p>Пока эта способность активна, когда вы произносите заклинание, восстанавливающее хиты или предоставляющее временные хиты, существо восстанавливает дополнительные 1d4 хитов или получает дополнительные 1d4 временных хитов.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Увеличьте размер кубика на один шаг, максимум до 1d12.</p>
        <p> &mdash; Увеличьте длительность этой способности на 1 раунд.</p>
        ` 
    }, //Improved Healing 3
    {
        type: tp.healing,
        cost: 2,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.special,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ true
        },
        recharge: rch.none,
        name: "Исцеляющее прикосновение [Healing Touch]", 
        requirements: "Лечение ран и одна способность исцеления",
        data:`
        <p>В рамках этой способности вы произносите заклинание Кайдо или любое другое заклинание, которое восстанавливает очки жизни или предоставляет временные очки жизни 1-го уровня или ниже, которые вам известны, не тратя SP и не требуя материальных компонентов.</p>
        <p>Вы можете повторно выбирать эту способность несколько раз, каждый раз повышая уровень заклинания на один, максимум 7.</p>
        ` 
    }, //Healing Touch 4
    {
        type: tp.healing,
        cost: 0,
        rules: false, 
        castingTime:      castTime.action,
        range:            rng.special,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ true
        },
        recharge: rch.none,
        name: "Исцеляющий фактор [Healing Factor]", 
        requirements: "Две исцеляющие способности",
        data:`
        <p>Находясь в сознании, вы восстанавливаете 1 очко жизни в начале своего хода.</p>
        <p>Вы получаете дополнительные преимущества в зависимости от того, сколько раз вы выбрали эту способность:</p>
        <p> 2 – Когда вы преуспеваете в спасброске от смерти, вы получаете дополнительный успех.</p>
        <p> 3 – Вы совершаете с преимуществом спасброски от отравления.</p>
        <p> 4 – Вы невосприимчивы к болезням.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте количество восстанавливаемых очков жизни на 1, максимум до 8.</p>
        <p> &mdash; Кроме того, в начале вашего хода вы исцеляете одно очко урона от характеристики.</p>
        <p> &mdash; Кроме того, в начале вашего хода у вас вырастает один отрезанный придаток, кроме головы. Вы должны выбрать эту способность трижды, прежде чем сможете выбрать эту опцию.</p>
        <p> &mdash; Кроме того, в начале вашего хода вы можете прекратить одно из следующих состояний: ослепление, оглушение, паралич или отравление. Вы должны выбрать эту способность трижды, прежде чем сможете выбрать эту опцию.</p>
        ` 
    }, //Healing Factor 5
    {
        type: tp.healing,
        cost: 1,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Армия исцеления [Panoply of Healing]", 
        requirements: "Три исцеляющие способности",
        data:`
        <p>Вы даруете до трех существ в радиусе действия количество временных очков жизни, равное вашему уровню + количеству имеющихся у вас исцеляющих способностей.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Увеличьте продолжительность на 1 минуту.</p>
        <p> &mdash; Затронутые существа также получают выгоду от вашего Исцеляющего Фактора (если у вас есть такая способность). Вы должны выбрать эту способность четыре раза, прежде чем сможете выбрать эту опцию.</p>
        ` 
    }, //Panoply of Healing 6
    {
        type: tp.healing,
        cost: 3,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Снятие боли [Pain Release]", 
        requirements: "Четыре исцеляющие способности",
        data:`
        <p>Вы совершаете одну рукопашную или одну дальнюю атаку оружием с нормальной дальностью 80 футов и большой дальностью 120 футов своим вооружением. В случае успеха вы наносите урон, равный количеству очков жизни, которые существа восстановили с помощью вашего Кидо или способностей вооружения с предыдущего рассвета.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Если вы решите совершить рукопашную атаку, вы получите преимущество на бросок атаки.</p>
        <p> &mdash; Если вы решите совершить дальнюю атаку, нормальная и дальняя дистанция удваивается.</p>
        ` 
    }, //Pain Release 7
    {
        type: tp.healing,
        cost: 4,
        rules: true, 
        castingTime:      castTime.hour1,
        range:            rng.touch,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Воскрешение (ультимативная) [Resurrection (Ultimate)]", 
        requirements: "Пять исцеляющих способностей",
        data:`
        <p>Вы прикасаетесь к мертвому существу, которое умерло не более столетия, которое не умерло от старости и не является нежитью. Если его душа свободна, желает и не перевоплощалась, цель возвращается к жизни со всеми своими хитами.</p>
        <p>Это заклинание нейтрализует любые яды и лечит обычные болезни, поразившие существо после его смерти. Однако это не удаляет магические болезни, проклятия и жизнь; если такие эффекты не удалены до применения заклинания, они поражают цель при ее возвращении к жизни.</p>
        <p>Это заклинание закрывает все смертельные раны и восстанавливает недостающие части тела.</p>
        <p>Возвращение из мертвых – это испытание. Цель получает штраф -4 ко всем броскам D20. Каждый раз, когда цель заканчивает длительный отдых, штраф уменьшается на 1, пока не исчезнет.</p>
        <p>Восстановление жизни существу, которое не было мертвым в течение года или дольше, требует от вас больших затрат. Пока ваше вооружение восстанавливается, вы совершаете с помехой все броски атаки, проверки характеристик и спасброски.</p>
        ` 
    }, //Resurrection (Ultimate) 8
    {
        type: tp.healing,
        cost: 4,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ true,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Круг Жизни (Вознесенный) [Circle of Life (Ascended)]", 
        requirements: "Шесть исцеляющих способностей",
        data:`
        <p>Сфера положительной энергии струится в сфере радиусом 60 футов из выбранной вами точки в пределах досягаемости. Если хиты существа должны быть уменьшены до 0 или меньше, вместо этого их хиты уменьшаются до 1. Вы можете отказаться от этой способности по своему желанию.</p>
        <p>Каждый раз, когда вы повторно выбираете эту способность, дальность увеличивается на 10 футов, а радиус увеличивается на 10 футов.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Эта способность больше не требует компонентов V или S.</p>
        <p> &mdash; Эта способность больше не требует концентрации.</p>
        <p> &mdash; Вы можете использовать эту способность как реакцию, триггером которой является союзник, которого вы видите в пределах дистанции, получающий урон.</p>
        <p> &mdash; Кроме того, когда эта способность заканчивается по истечении срока действия или вы отклоняете способность, любое существо в сфере восстанавливает 8d4 хитов.</p>
        ` 
    }, //Circle of Life (Ascended) 9
    {
        type: tp.healing,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Высшее Исцеление (Вознесенный) [Supreme Healing (Ascended)]", 
        requirements: "Шесть исцеляющих способностей",
        data:`
        <p>Когда вы обычно бросаете один или несколько кубиков, чтобы восстановить очки жизни с помощью Кидо или способности вооружения, вместо этого вы используете максимально возможное число для каждого кубика. Например, вместо того, чтобы восстанавливать существу 2d6 очков жизни, вы восстанавливаете 12.</p>
        ` 
    }, //Supreme Healing (Ascended) 10
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Усиление [Ability Increase]", 
        requirements: "",
        data:`
        <p>Выберите один из показателей способности Пустых, он увеличится на 2.</p>
        <p>Эту способность можно выбирать несколько раз.</p>
        ` 
    }, // Ability Increase 1 ------------------------------- hollow
    {
        type: tp.hollow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Агрессия [Aggressive]", 
        requirements: "6 HD",
        data:`
        <p>Бонусным действием Пустой может двигаться на своей скорости к враждебному существу, которое он может видеть.</p>
        ` 
    }, //Aggressive 2
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Засада [Ambusher]", 
        requirements: "4 HD",
        data:`
        <p>В первом раунде боя Пустой имеет преимущество в бросках атаки против любого существа, которого он застал врасплох.</p>
        ` 
    },  //Ambusher 3
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Амфибия [Amphibious]", 
        requirements: "2 HD",
        data:`
        <p>Пустой может дышать на воздухе и под водой</p>
        ` 
    }, // Amphibious 4
    {
        type: tp.hollow,
        cost: 4,
        rules: true, 
        castingTime:      castTime.reaction,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rch1_6,
        name: "Чародейский оберег [Arcane Ward]", 
        requirements: "Magia",
        data:`
        <p>Когда Пустой получает урон, он создает вокруг себя магический барьер. Барьер уменьшает урон на 1d10, минимум до 0, а затем исчезает.</p>
        <p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих дополнений:</p>
        <p> &mdash; Увеличьте уменьшенный урон дополнительно на 1d10; максимум 4d10.</p>
        <p> &mdash; Выберите невыбранное число: 2, 3, 4, 5. Эта способность также перезаряжается от этого результата.</p>
        ` 
    }, // Arcane Ward 5
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Армадура [Armadura]", 
        requirements: "1 HD, Арранкар (Дефенса)",
        data:`
        <p>Пока вы не носите доспехов и не владеете щитом, ваш КД равен 10 + модификатор вашего Телосложения.</p>
        ` 
    }, // Armadura 6
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Убийца [Assassinate]", 
        requirements: "10 HD, Засада [Ambusher]",
        data:`
        <p>Во время своего первого хода Пустой имеет преимущество на броски атаки против любого существа, которое еще не сделало ход. Любой удар, который Пустой наносит по застигнутому врасплох существу, является критическим.</p>
        ` 
    }, // Assassinate 7
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Избегание [Avoidance]", 
        requirements: "10 HD, Ловкость 16",
        data:`
        <p>Если Пустой подвергается эффекту, который позволяет ему совершить спасбросок, чтобы получить только половину урона, вместо этого он не получит никакого урона, если спасбросок преуспеет, и только половину урона, если он провалится.</p>
        ` 
    }, // Avoidance 8
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Пробужденный разум [Awakened Mind]", 
        requirements: "6 HD, Интелект 16",
        data:`
        <p>Пустой может телепатически разговаривать с любым существом, которое видит в пределах 30 футов от себя, при условии, что существо понимает хотя бы один язык.</p>
        ` 
    }, // Awakened Mind 9
    {
        type: tp.hollow,
        cost: 2,
        rules: true, 
        castingTime:      castTime.bonus,
        range:            rng.ft60,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Бала [Bala]", 
        requirements: "4 HD",
        data:`
        <p>Пустой совершает дальнюю атаку по цели, которую он видит в пределах дистанции. При попадании цель получает 2d4 силового урона. Если у Пустого есть мультиатака, он может заменить одну или несколько своих атак Балой.</p>
        <p>За каждые 4 HD сверх 4 HD дальность увеличивается на 5 футов.</p>
        <p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих дополнений:</p>
        <p> &mdash; Увеличьте урон дополнительно на 1d4, максимум на 6d4.</p>
        <p> &mdash; Увеличение дальности на 20 футов.</p>
        <p> &mdash; Пустой получает бонус +1 к броску атаки, используя эту способность; максимум +4.</p>
        ` 
    }, // Bala 10
    {
        type: tp.hollow,
        cost: 2,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rchDay1,
        name: "Боевой приказ [Battle Command]", 
        requirements: "12 HD, Харизма 15",
        data:`
        <p>Бонусным действием Пустой выбирает одно существо в пределах 30 футов от себя, которое он может видеть. Если выбранное существо может видеть или слышать Пустого, оно может использовать свою реакцию, чтобы совершить одну рукопашную атаку или выполнить действие Уклонение или Спрятаться. За каждые 4 HD сверх 12 HD Пустой получает дополнительное использование этой способности, максимум 6 раз в день.</p>
        ` 
    }, // Battle Command 11
    {
        type: tp.hollow,
        cost: 2,
        rules: true, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rchDay1,
        name: "Боевой приказ [Battle Command]", 
        requirements: "12 HD, Харизма 15",
        data:`
        <p>Бонусным действием Пустой выбирает одно существо в пределах 30 футов от себя, которое он может видеть. Если выбранное существо может видеть или слышать Пустого, оно может использовать свою реакцию, чтобы совершить одну рукопашную атаку или выполнить действие Уклонение или Спрятаться. За каждые 4 HD сверх 12 HD Пустой получает дополнительное использование этой способности, максимум 6 раз в день.</p>
        ` 
    }, // Battle Command 12
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Берсерк [Berserk]", 
        requirements: "10 HD, 40 HP, Сила 14",
        data:`
        <p>Каждый раз, когда Пустой начинает свой ход с 10 хитами или меньше, бросьте d6. Если выпадает 6, пустышка приходит в ярость. В каждый свой ход в состоянии берсерка Пустой атакует ближайшее существо, которое видит. Если ни одно существо не находится достаточно близко, чтобы атаковать, Пустой атакует объект, отдавая предпочтение объекту меньшему, чем он сам. Когда Пустой приходит в ярость, он продолжает это делать до тех пор, пока не будет уничтожен или не восстановит все свои очки жизни.</p>
        ` 
    }, // Berserk 13
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Укус [Bite]", 
        requirements: "3 HD, Рот",
        data:`
        <p>Вы получаете естественное оружие ближнего боя «Укус». Его дальность составляет 5 футов, а урон равен вашему урону от невооруженного удара.</p>
        <p>Если у вас уже есть атака Укус, она наносит дополнительный кубик урона.</p>
        ` 
    }, // Bite 14
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Кровавое безумие [Blood Frenzy]", 
        requirements: "4 HD, Сила 13",
        data:`
        <p>Пустой имеет преимущество в бросках рукопашной атаки против любого существа, у которого нет полного запаса хп.</p>
        ` 
    }, //Blood Frenzy 15
    {
        type: tp.hollow,
        cost: 4,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rch6,
        name: "Дыхательное оружие [Breath Weapon]", 
        requirements: "4 HD",
        data:`
        <p>Пустой получает дыхательное оружие, имеющее форму 15-футового конуса или 30-футовой линии. Этот выбор является постоянным. Пустой также выбирает тип элемента из следующих: это тип урона, который наносит оружие Дыхания; Кислота, Холод, Огонь, Молния или Яд.</p>
        <p>Каждое существо в этой области должно совершить спасбросок Ловкости, получая 4d6 урона при провале или половину этого урона при успехе.</p>
        <p>Если у Пустого уже есть дыхательное оружие, вместо этого его дальность увеличивается на 10 футов, а урон увеличивается на 2d6 или оно также перезаряжается на 4.</p>
        <p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих дополнений:</p>
        <p> &mdash; Выберите число от 1 до 6, при котором эта способность не перезаряжается, теперь она перезаряжается по выбранному номеру. Вы можете выбрать это улучшение только дважды.</p>
        <p> &mdash; Увеличение дальности на 10 футов.</p>
        <p> &mdash; Урон увеличивается на 2d6.</p>
        ` 
    }, // Breath Weapon 16
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Грубый [Brute]", 
        requirements: "5 HD, Сила 13",
        data:`
        <p>Выберите одно из оружия ближнего боя Пустых, оно нанесет один дополнительный кубик урона.</p>
        ` 
    }, // Brute 17
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Нора [Burrow]", 
        requirements: "4 HD",
        data:`
        <p>Пустой имеет скорость движения под землей 30 футов. За каждые 4 HD сверх 4 HD скорость копания увеличивается на 5 футов; максимум 60 футов.</p>
        ` 
    }, // Burrow 18
    {
        type: tp.hollow,
        cost: 6,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rch1_6,
        name: "Серо [Cero]", 
        requirements: "6 HD, Бала [Bala]",
        data:`
        <p>Пустой выпускает мощный заряд концентрированной духовной энергии. Луч, образующий линию длиной 100 футов и шириной 5 футов, вылетает из Пустого в выбранном им направлении. Каждое существо в линии должно совершить спасбросок Ловкости. Существо получает урон силовым полем 6d6 при провале или половину этого урона при успехе.</p>
        <p>За каждые 2 HD сверх 6 HD длина линии увеличивается на 10 футов.</p>
        <p>Эту способность можно выбирать несколько раз, каждый раз выбирая одно из следующих дополнений:</p>
        <p> &mdash;  Увеличить урон дополнительно на 1d6; максимум 10d6.</p>
        <p> &mdash;  Выберите число от 1 до 6, при котором эта способность не перезаряжается, теперь она перезаряжается по выбранному номеру. Вы можете выбрать это улучшение только дважды.</p>
        <p> &mdash;  Увеличьте DC спасброска на +1; максимум +4.</p>
        <p> &mdash;  Если у Пустого есть Мультиатака, он может заменить одну из своих атак Серо. Прежде чем эту опцию можно будет выбрать, эта способность должна быть выбрана трижды.</p>
        ` 
    }, // Cero 19
    {
        type: tp.hollow,
        cost: 10,
        rules: true, 
        castingTime:      castTime.action,
        range:            rng.self,
        components: {
            verbal:       /*v*/ true,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ true  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ true,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rch6,
        name: "Серо Оскурас [Cero Oscuras]", 
        requirements: "18 HD, Серо [Cero], Гран Рей Серо [Gran Rey Cero]",
        data:`
        <p>Пустой выпускает мощный темный заряд концентрированной духовной энергии. Луч, образующий линию длиной 500 футов и шириной 5 футов, вырывается из Пустого в выбранном им направлении. Каждое существо в линии должно совершить спасбросок Ловкости. При провале существо получает урон силовым полем 6d12 или половину этого количества. урон при удачном.</p>
        <p>За каждые 4 HD сверх 18 HD урон увеличивается на 1d12.</p>
        ` 
    }, // Cero Oscuras 20
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Покров хамелиона [Chameleon Skin]", 
        requirements: "10 HD, Ловкость 14",
        data:`
        <p>Пустой может менять цвет и текстуру своей внешности, чтобы они соответствовали цвету и текстуре окружающей среды. В результате он имеет преимущество на проверки Ловкости (Скрытность), сделанные для того, чтобы спрятаться.</p>
        ` 
    }, // Chameleon Skin 21
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Натиск [Charge]", 
        requirements: "4 HD",
        data:`
        <p>Если Пустой переместится как минимум на 15 футов по прямой к цели, а затем в том же ходу попадет по ней естественным оружием, цель получит дополнительный урон 2d6.</p>
        ` 
    }, // Charge 22
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Очарование [Charm]", 
        requirements: "12 HD, Харизма 14",
        data:`
        <p>В качестве действия пустое нацеливается на одного гуманоида, которого оно видит в пределах 30 футов от себя. Если цель может видеть пустоту, она должна преуспеть в спасброске Мудрости против этой магии, иначе она будет очарована пустотой. Очарованная цель считает пустого верным другом, которого нужно слушать и защищать. Хотя цель не находится под контролем пустого, она принимает просьбы или действия пустого самым благоприятным образом.</p>
        <p>Каждый раз, когда пустой или его спутники наносят урон цели, цель может повторить спасбросок, оканчивая эффект на себе при успехе. В противном случае эффект длится 12 часов или до тех пор, пока пустой не будет уничтожен, не окажется на другом плане существования, чем цель, или использует бонусное действие, чтобы прекратить эффект.</p>
        ` 
    }, // Charm 23
    {
        type: tp.hollow,
        cost: 4,
        rules: true, 
        castingTime:      castTime.bonus,
        range:            rng.self,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ true,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ true,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Синхронизация сознаний [Cognition Synchronization]", 
        requirements: "24 HD, Пескиса [Pesquisa], Мудрость 16",
        data:`
        <p>Пустой выбирает до 11 знакомых ему существ. Если эти существа находятся на одном плане, то в то время как Пустой концентрируется на этой способности, он может передавать выбранным существам информацию о том, что он в данный момент видит или испытывает.</p>
        ` 
    }, // Cognition Synchronization 24
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Сокрушительный прыжок [Crushing Leap]", 
        requirements: "12 HD, Огромный размер",
        data:`
        <p>Если Пустой во время своего движения подпрыгнет как минимум на 20 футов, он может использовать это действие, чтобы приземлиться на ноги в пространстве, где находится одно или несколько других существ. Каждое из этих существ отталкивается на свободное место в пределах 5 футов от Пустотого и должно совершить спасбросок Ловкости. При провале существо получает дробящий урон 4d12 и сбивается с ног. При успешном спасброске существо получает вдвое меньше урона и не сбивается с ног.</p>
        ` 
    }, // Crushing Leap 25
    {
        type: tp.hollow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rchRest_SL,
        name: "Проклятие [Curse]", 
        requirements: "14 HD",
        data:`
        <p>В качестве действия Пустой нацеливается на одно существо, которое он может видеть в пределах 30 футов. Цель должна преуспеть в спасброске Харизмы, иначе она будет проклята.</p>
        <p>Будучи проклятой, цель имеет уязвимость к одному типу урона по выбору Пустого. Проклятие длится до тех пор, пока не будет прекращено заклинанием великого восстановления, заклинанием снятия проклятия или подобной магией.</p>
        ` 
    }, // Curse 26
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Уменьшение перезарядки [Decrease Recharge]", 
        requirements: "14 HD",
        data:`
        <p>Выберите способность пустого, которая перезаряжается, за исключением дыхательного оружия [Breath Weapon]. Выберите номер, на котором он не пополняется, теперь он пополняется на этом номере. Эту способность можно выбирать несколько раз, каждый раз выбирая способность, которая не была выбрана.</p>
        ` 
    }, // Decrease Recharge 27
    {
        type: tp.hollow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Отразить атаку [Deflect Attack]", 
        requirements: "14 HD",
        data:`
        <p>Используя реакцию Пустой добавляет 5 к своему КД на одну попадающую по нему атаку оружием ближнего боя. Для этого Пустой должен видеть нападавшего и иметь в руках оружие ближнего боя.</p>
        ` 
    }, // Deflect Attack 28
    {
        type: tp.hollow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Отразить снаряд [Deflect Missiles]", 
        requirements: "14 HD",
        data:`
        <p>Используя реакцию, в ответ на попадание в него дальнобойным оружием, Пустой отклоняет снаряд. Урон, получаемый им от атаки, уменьшается на 1d10. Если урон уменьшен до 0, Пустой ловит снаряд, если снаряд достаточно мал, чтобы ее можно было держать в одной руке, и у него свободна рука. За каждые 4 HD сверх 14 HD урон уменьшается на 1d10; максимум 4d10.</p>
        ` 
    }, // Deflect Missiles 29
    {
        type: tp.hollow,
        cost: 6,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.rchRest_SL,
        name: "Дизорер [Descorrer]", 
        requirements: "23 HD, Кумон [Kūmon]",
        data:`
        <p>В качестве действия Пустой открывает путь в гарганту, и внутрь могут следовать до четырех желающих существ. Дескоррер — гораздо более стабильная форма путешествия, которая всегда обеспечивает безопасную и короткую прогулку до любого знакомого Пустому места на другом плане существования.</p>
        ` 
    }, // Descorrer 30
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Дьявольский взгляд [Devil's Sight]", 
        requirements: "12 HD, Темное зрение [Darkvision]",
        data:`
        <p>Магическая тьма не мешает темному зрению пустых.</p>
        ` 
    }, // Devil's Sight 31
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Пикирующая атака [Displacement]", 
        requirements: "10 HD",
        data:`
        <p>Пустой создает магическую иллюзию, из-за которой кажется, что он стоит недалеко от своего фактического местоположения, в результате чего броски атаки по нему становятся с помехой.</p>
        <p>Если он поражен атакой, эта черта нарушается до конца следующего хода. Эта особенность также нарушается, когда Пустой выведен из строя или его скорость равна 0.</p>
        ` 
    }, // Displacement 32
    {
        type: tp.hollow,
        cost: 2,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Пикирующая атака [Dive Attack]", 
        requirements: "3 HD, Скорость полета [Flying speed]",
        data:`
        <p>Если Пустой летит и ныряет как минимум на 30 футов прямо к цели, а затем поражает ее рукопашной атакой оружием, атака наносит цели дополнительный урон 1d6.</p>
        ` 
    }, // Dive Attack 33
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Земляное скольжение [Earth Glide]", 
        requirements: "15 HD",
        data:`
        <p>Пустой может проходить сквозь немагическую, необработанную землю и камень. При этом Пустой не нарушает материал, через который движется.</p>
        ` 
    }, // Earth Glide 34
    {
        type: tp.hollow,
        cost: 6,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Поглащение памяти [Eat Memories]", 
        requirements: "18 HD",
        data:`
        <p>В качестве действия Пустой нацеливается на одно существо, которое он может видеть в пределах 5 футов от себя. Цель должна преуспеть в спасброске Мудрости, иначе она получит психический урон 4d8 и потеряет память до тех пор, пока не завершит короткий или длительный отдых или пока не получит выгоду от заклинания Великое восстановление или исцеление. Конструкты, слизи, растения и нежить автоматически преуспевают в спасброске.</p>
        <p>Пока память истощена, цель должна бросить d4 и вычесть выпавшее число из проверок характеристик и бросков атаки. Каждый раз, когда у цели истощается память сверх первой, размер кубика увеличивается на единицу; максимум d12, после чего цель теряет сознание на 1 час. После этого эффект заканчивается.</p>
        <p>Пустой изучает все языки, которые знает цель с истощенной памятью, и приобретает все ее навыки.</p>
        ` 
    }, // Eat Memories 35
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Элементальное поглащение [Elemental Absorption]", 
        requirements: "15 HD, Элементарное сопротивление [Elemental resistance]",
        data:`
        <p>Пустой выбирает тип урона, к которому он также устойчив. Всякий раз, когда Пустой подвергается выбранному урону, он не получает урона и вместо этого восстанавливает количество очков жизни, равное нанесенному урону.</p>
        ` 
    }, // Elemental Absorption 36
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Элементарное сопротивление [Elemental resistance]", 
        requirements: "8 HD",
        data:`
        <p>Пустой выбирает тип урона из следующих, к которым он неуязвим: кислота, холод, огонь, молния, некротический урон, яд, излучение и гром. Пустой имеет сопротивление выбранному типу урона.</p>
        <p>Кроме того, пустые должны выбрать тип элемента, к которому они не уязвимы и не устойчивы. Теперь они уязвимы к выбранному типу урона.</p>
        ` 
    }, // Elemental resistance 37
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Неуловимый [Elusive]", 
        requirements: "24 HD, Ловкость 18",
        data:`
        <p>Ни один бросок атаки не дает преимущества против Пустого, если только он не выведен из строя.</p>
        ` 
    }, // Elusive 38
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Загадочный разум [Enigmatic Mind]", 
        requirements: "14 HD, Интеллект 18",
        data:`
        <p>Мысли Пустого невозможно прочитать, существа могут телепатически общаться с Пустым, только если он это позволяет, а магия не может определить, лжет ли Пустой.</p>
        ` 
    }, // Enigmatic Mind 39
    {
        type: tp.hollow,
        cost: 4,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Увеличение [Enlarge]", 
        requirements: "4 HD, телосложение 13, размер Средний",
        data:`
        <p>В течение 1 минуты пустое действием магическим образом увеличивается в размерах вместе со всем, что оно носит или несет. В увеличенном состоянии пустое становится Большим, удваивает свои кубики урона при атаках оружием, основанных на Силе (включенных в атаки), и совершает проверки Силы и спасброски Силы с преимуществом. Если пустому не хватает места, чтобы стать Большим, он достигает максимально возможного размера в доступном пространстве.</p>
        ` 
    }, // Enlarge 40
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Дополнительный навык [Extra Skill]", 
        requirements: "2 HD",
        data:`
        <p>Выберите два навыка. Пустой теперь владеет этими навыками. Эту способность можно выбирать несколько раз.</p>
        ` 
    }, // Extra Skill 41
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Безумный страх [Fear Frenzy]", 
        requirements: "8 HD, Харизма 14",
        data:`
        <p>Пустой имеет преимущество при бросках атаки против напуганных существ.</p>
        ` 
    }, // Fear Frenzy 42
    {
        type: tp.hollow,
        cost: 0,
        rules: false, 
        castingTime:      castTime.none,
        range:            rng.none,
        components: {
            verbal:       /*v*/ false,  
            somatic:      /*s*/ false,  
            material:     /*m*/ false, 
            released:     /*w*/ false  
        },
        duration: {
            until_sealed:  /**/ false,
            concentration: /**/ false,
            minute1:       /**/ false,
            round1:        /**/ false,
            instantaneous: /**/ false,
            hour1:         /**/ false,
            minute5:       /**/ false,
            round2:        /**/ false,
            special:       /**/ false
        },
        recharge: rch.none,
        name: "Фейское происхождение [Fey Ancestry]", 
        requirements: "",
        data:`
        <p>Пустой имеет преимущество в спасбросках от очарования, и магия не может усыпить Пустого.</p>
        ` 
    }, // Fey Ancestry 43
]