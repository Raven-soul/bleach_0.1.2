//armament

// --DC - сложность

/*
    DC - Сложность спасброска
    AC - Класс доспеха
*/

const castTime = {
    bonus: "Bonus action",
    action: "1 action",
    reaction: "Reaction",
    round: "1 round"
}

const rng = {
    self: "Self",
    touch: "Touch",
    ft5: "5 feet",
    ft30: "30 feet",
    ft60: "60 feet",
    ft80: "80 feet",
    ft100: "100 feet",
    ft120: "120 feet",
    ft500: "500 feet",
    heilinBogen: "Equal to your Heilig Bogen"
}

const tp = {
    acid: "Acid",
    blood: "Blood",
    bow: "Bow",
    dark: "Dark",
    defence: "Defence",
    earth: "Earth",
    fire: "Fire"
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ true
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
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
            minute5:       /**/ false
        },
        name: "Опаляющее оружие [Scorching Weapon]", 
        requirements: "Одна огненная способность",
        data:`
        <p>Когда вы наносите критическое попадание своим вооружением, цель получает дополнительный урон огнём 1d6 в начале каждого своего хода. В каждый свой ход цель может использовать действие, чтобы потушить огонь, прекращая эффект.</p>
        <p>Вы можете повторно выбрать эту способность несколько раз, каждый раз выбирая один из следующих вариантов:</p>
        <p> &mdash; Увеличьте размер кубика урона на один шаг, максимум до 1d10.</p>
        `
    }, // Scorching Weapon 3
]