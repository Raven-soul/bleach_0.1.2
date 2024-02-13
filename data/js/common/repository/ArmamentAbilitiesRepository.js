//armament

// --DC - сложность

const castTime = {
    bonus: "Bonus action",
    action: "1 action",
    reaction: "Reaction",
    round: "1 round"
}

const rng = {
    self: "Self",
    touch: "Touch",
    ft30: "30 feet",
    ft60: "60 feet",
    ft100: "100 feet"
}

const tp = {
    acid: "Acid",
    blood: "Blood"
}

const armamentAbilitiesContent = [
    {
        type: tp.acid,
        cost: 1,
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
            instantaneous: false
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
    }, //Acid Form 1
    {
        type: tp.acid,
        cost: 3,
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: false
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
    }, //Blade of Blood 1
    {
        type: tp.blood,
        cost: 2,
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
            instantaneous: false
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
            instantaneous: false
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
            instantaneous: true
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
            instantaneous: true
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
            instantaneous: false
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
            instantaneous: true
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
            instantaneous: true
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
            instantaneous: false
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
            instantaneous: true
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
]