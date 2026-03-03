/**
 * easter_egg_data.js - 彩蛋数据：合弓纲演化树
 */

const EASTER_EGG_DATA = {
    name: "Synapsida", 
    cn: "合弓纲", 
    time: 318,
    children: [
        { 
            name: "Caseasauria", 
            cn: "卡色龙亚目 [灭绝]", 
            time: 290, 
            dead: true 
        },
        {
            name: "Eupelycosauria", 
            cn: "真盘龙亚目", 
            time: 305,
            children: [
                { 
                    name: "Varanopidae", 
                    cn: "蜥代龙科 [灭绝]", 
                    time: 280, 
                    dead: true 
                },
                { 
                    name: "Edaphosauridae", 
                    cn: "基龙科 [灭绝]", 
                    time: 290, 
                    dead: true 
                },
                {
                    name: "Sphenacodontia", 
                    cn: "楔齿龙类", 
                    time: 295,
                    children: [
                        { 
                            name: "Dimetrodon", 
                            cn: "异齿龙 [灭绝]", 
                            time: 275, 
                            dead: true 
                        },
                        {
                            name: "Therapsida", 
                            cn: "兽孔目", 
                            time: 270,
                            children: [
                                { 
                                    name: "Dinocephalia", 
                                    cn: "恐头兽亚目 [灭绝]", 
                                    time: 260, 
                                    dead: true 
                                },
                                { 
                                    name: "Anomodontia", 
                                    cn: "二齿兽/水龙兽 [灭绝]", 
                                    time: 255, 
                                    dead: true 
                                },
                                { 
                                    name: "Gorgonopsia", 
                                    cn: "丽齿兽亚目 [灭绝]", 
                                    time: 252, 
                                    dead: true 
                                },
                                {
                                    name: "Cynodontia", 
                                    cn: "犬齿兽类", 
                                    time: 260,
                                    children: [
                                        { 
                                            name: "Tritylodontidae", 
                                            cn: "三列齿兽 [灭绝]", 
                                            time: 150, 
                                            dead: true 
                                        },
                                        {
                                            name: "Mammaliaformes", 
                                            cn: "哺乳形类", 
                                            time: 220,
                                            children: [
                                                { 
                                                    name: "Morganucodon", 
                                                    cn: "摩根齿兽 [灭绝]", 
                                                    time: 205, 
                                                    dead: true 
                                                },
                                                { 
                                                    name: "Mammalia", 
                                                    cn: "哺乳纲 (幸存)", 
                                                    time: 177, 
                                                    target: true 
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
