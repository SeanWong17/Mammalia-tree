const mammalsData = {
    "meta": {
      "project": "Mammalia Phylogeny",
      "version": "2.2 (Hierarchy & Age Update)",
      "total_families": 167,
      "total_clades": 95
    },
    "clades": {
      "Mammalia": {
        "cn_name": "哺乳纲",
        "rank": "class",
        "parent": null,
        "divergence_time_mya": 177.0,
        "description": "脊椎动物亚门的一纲，特征包括乳腺、毛发及听觉骨骼的特化，演化历史跨越两亿年。"
      },
      "Prototheria": {
        "cn_name": "原兽亚纲",
        "rank": "subclass",
        "parent": "Mammalia",
        "divergence_time_mya": 166.0,
        "description": "最原始的哺乳动物分支，特征是保留了卵生习性（单孔类），排泄与生殖共用一个泄殖腔。"
      },
      "Theria": {
        "cn_name": "兽亚纲",
        "rank": "subclass",
        "parent": "Mammalia",
        "divergence_time_mya": 160.0,
        "description": "胎生哺乳动物，包含有袋类和胎盘类，特征是具有乳头和旋转的肩胛骨。"
      },
      "Metatheria": {
        "cn_name": "后兽下纲",
        "rank": "infraclass",
        "parent": "Theria",
        "divergence_time_mya": 148.0,
        "description": "即有袋类及其化石近亲，特征是幼崽在发育早期出生，通常在育儿袋中完成后续发育。"
      },
      "Australidelphia": {
        "cn_name": "澳洲有袋总目",
        "rank": "superorder",
        "parent": "Metatheria",
        "divergence_time_mya": 75.0,
        "description": "包含所有澳洲有袋类及南美洲的微兽目，起源于冈瓦纳古陆的一次跨南极迁徙。"
      },
      "Eutheria": {
        "cn_name": "真兽下纲",
        "rank": "infraclass",
        "parent": "Theria",
        "divergence_time_mya": 148.0,
        "description": "即胎盘类及其近亲，特征是具有复杂的胎盘结构，幼崽在母体内发育较完全。"
      },
      "Afrotheria": {
        "cn_name": "非洲兽总目",
        "rank": "superorder",
        "parent": "Eutheria",
        "divergence_time_mya": 105.0,
        "description": "起源于非洲的古老分支，包含长鼻目、海牛目、土豚等，形态差异巨大但分子证据支持其单系性。"
      },
      "Xenarthra": {
        "cn_name": "异关节总目",
        "rank": "superorder",
        "parent": "Eutheria",
        "divergence_time_mya": 100.0,
        "description": "南美洲演化的特有类群，脊椎具有特殊的附加关节（异关节），包含披毛目和有甲目。"
      },
      "Euarchontoglires": {
        "cn_name": "灵长总目",
        "rank": "superorder",
        "parent": "Eutheria",
        "divergence_time_mya": 95.0,
        "description": "包含灵长目、啮齿目、兔形目等，是人类所属的演化支系。"
      },
      "Laurasiatheria": {
        "cn_name": "劳亚兽总目",
        "rank": "superorder",
        "parent": "Eutheria",
        "divergence_time_mya": 95.0,
        "description": "起源于劳亚古陆的庞大支系，包含食肉目、鲸偶蹄目、翼手目等，生态位极其多样。"
      },
      "Monotremata": {
        "cn_name": "单孔目",
        "rank": "order",
        "parent": "Prototheria",
        "divergence_time_mya": 55.0,
        "description": "原兽亚纲现存唯一的目，保留了卵生特征，具有独特的感官特化（电感受）及泌乳机制。"
      },
      "Didelphimorphia": {
        "cn_name": "负鼠目",
        "rank": "order",
        "parent": "Metatheria",
        "divergence_time_mya": 65.0,
        "description": "美洲有袋超目中形态最原始的基干类群，主要为树栖或半树栖，保留了有袋类的祖征。"
      },
      "Paucituberculata": {
        "cn_name": "鼩负鼠目",
        "rank": "order",
        "parent": "Metatheria",
        "divergence_time_mya": 60.0,
        "description": "南美洲的孑遗类群，现生属种仅分布于安第斯高山环境，被称为生物地理学的“拉撒路类群”。"
      },
      "Microbiotheria": {
        "cn_name": "微兽目",
        "rank": "order",
        "parent": "Australidelphia",
        "divergence_time_mya": 60.0,
        "description": "仅存南猊一种，被视为“罗塞塔石碑”，是澳洲有袋类滞留在南美洲的姐妹群后裔。"
      },
      "Dasyuromorphia": {
        "cn_name": "袋鼬目",
        "rank": "order",
        "parent": "Australidelphia",
        "divergence_time_mya": 55.0,
        "description": "澳洲主要的食肉有袋类辐射，包含袋鼬、袋食蚁兽及已灭绝的袋狼。"
      },
      "Peramelemorphia": {
        "cn_name": "袋狸目",
        "rank": "order",
        "parent": "Australidelphia",
        "divergence_time_mya": 45.0,
        "description": "杂食性有袋类，起源于渐新世，随澳洲大陆北移及干旱化而辐射演化。"
      },
      "Notoryctemorphia": {
        "cn_name": "袋鼹目",
        "rank": "order",
        "parent": "Australidelphia",
        "divergence_time_mya": 64.0,
        "description": "形态极端特化的有袋类，适应地下穴居生活，具有趋同演化的挖掘特征。"
      },
      "Diprotodontia": {
        "cn_name": "双门齿目",
        "rank": "order",
        "parent": "Australidelphia",
        "divergence_time_mya": 55,
        "description": "现存多样性最高的有袋类目，包含袋鼠、考拉等，主要特征为下颌具有一对突出的门齿。"
      },
      "Vombatiformes": {
        "cn_name": "袋熊型亚目",
        "rank": "suborder",
        "parent": "Diprotodontia",
        "divergence_time_mya": 40.0,
        "description": "包含树栖食叶的考拉和地栖掘土的袋熊，是双门齿目早期的生态位分化产物。"
      },
      "Phalangeriformes": {
        "cn_name": "袋貂型亚目",
        "rank": "suborder",
        "parent": "Diprotodontia",
        "divergence_time_mya": 45.0,
        "description": "主要适应丛林树栖环境的有袋类，包含袋貂、袋鼯等。"
      },
      "Macropodiformes": {
        "cn_name": "袋鼠型亚目",
        "rank": "suborder",
        "parent": "Diprotodontia",
        "divergence_time_mya": 30,
        "description": "包含袋鼠与鼠袋鼠，主要经历了从树栖/杂食向地栖/植食的转变，适应C4植物扩张。"
      },
      "Tubulidentata": {
        "cn_name": "管齿目",
        "rank": "order",
        "parent": "Afrotheria",
        "divergence_time_mya": 65.0,
        "description": "非洲食虫类的基干分支，现仅存土豚一种，被称为“活化石”。"
      },
      "Macroscelidea": {
        "cn_name": "象鼩目",
        "rank": "order",
        "parent": "Afrotheria",
        "divergence_time_mya": 60,
        "description": "起源于非洲的小型食虫哺乳动物，具有长鼻和细长的四肢，是K-Pg灭绝后最早辐射的类群之一。"
      },
      "Afrosoricida": {
        "cn_name": "非洲猬目",
        "rank": "order",
        "parent": "Afrotheria",
        "divergence_time_mya": 70.0,
        "description": "非洲兽总目下的食虫类群，包含形态各异的金毛鼹和马岛猬。"
      },
      "Tenrecomorpha": {
        "cn_name": "马岛猬亚目",
        "rank": "suborder",
        "parent": "Afrosoricida",
        "divergence_time_mya": 50,
        "description": "主要分布于马达加斯加的类群，由一次跨海漂流事件后辐射演化而来，形态差异巨大。"
      },
      "Chrysochloridea": {
        "cn_name": "金毛鼹亚目",
        "rank": "suborder",
        "parent": "Afrosoricida",
        "divergence_time_mya": 50,
        "description": "适应地下生活的非洲食虫类，具有金色的毛发和特化的挖掘肢体。"
      },
      "Hyracoidea": {
        "cn_name": "蹄兔目",
        "rank": "order",
        "parent": "Afrotheria",
        "divergence_time_mya": 60,
        "description": "特提斯兽类的姐妹群，外形似啮齿类，但亲缘关系接近大象，曾有极高的多样性。"
      },
      "Proboscidea": {
        "cn_name": "长鼻目",
        "rank": "order",
        "parent": "Afrotheria",
        "divergence_time_mya": 60.0,
        "description": "包含现生的大象及已灭绝的猛犸等，特征为延长的鼻子和巨大的体型。"
      },
      "Sirenia": {
        "cn_name": "海牛目",
        "rank": "order",
        "parent": "Afrotheria",
        "divergence_time_mya": 55,
        "description": "完全水生的草食性哺乳动物，包含儒艮和海牛，由于海草床的扩张而辐射。"
      },
      "Cingulata": {
        "cn_name": "有甲目",
        "rank": "order",
        "parent": "Xenarthra",
        "divergence_time_mya": 45.0,
        "description": "身披骨质甲壳的贫齿类动物，包含犰狳科和倭犰狳科。"
      },
      "Pilosa": {
        "cn_name": "披毛目",
        "rank": "order",
        "parent": "Xenarthra",
        "divergence_time_mya": 58.0,
        "description": "包含食蚁兽和树懒，是南美洲独立演化的特有类群。"
      },
      "Vermilingua": {
        "cn_name": "蠕舌亚目",
        "rank": "suborder",
        "parent": "Pilosa",
        "divergence_time_mya": 38.0,
        "description": "即食蚁兽类，特征为特化的管状吻部和缺乏牙齿，专食白蚁和蚂蚁。"
      },
      "Folivora": {
        "cn_name": "叶食亚目",
        "rank": "suborder",
        "parent": "Pilosa",
        "divergence_time_mya": 30.0,
        "description": "即树懒类，现生种类均为树栖，历史上曾包含巨大的地懒，具有趋同演化的悬挂习性。"
      },
      "Scandentia": {
        "cn_name": "树鼩目",
        "rank": "order",
        "parent": "Euarchontoglires",
        "divergence_time_mya": 65.0,
        "description": "外形似松鼠但与灵长目亲缘关系较近的小型哺乳动物，保留了许多祖征。"
      },
      "Dermoptera": {
        "cn_name": "皮翼目",
        "rank": "order",
        "parent": "Euarchontoglires",
        "divergence_time_mya": 15,
        "description": "俗称鼯猴，具有发达的皮膜用于滑翔，是灵长目最近的现生姐妹群。"
      },
      "Primates": {
        "cn_name": "灵长目",
        "rank": "order",
        "parent": "Euarchontoglires",
        "divergence_time_mya": 70.0,
        "description": "包括原猴、猴、猿和人类，通常具有发达的大脑、立体视觉和灵活的手指。"
      },
      "Strepsirrhini": {
        "cn_name": "曲鼻亚目",
        "rank": "suborder",
        "parent": "Primates",
        "divergence_time_mya": 65.0,
        "description": "较为原始的灵长类分支，鼻孔呈逗号状，包含狐猴和懒猴等。"
      },
      "Lemuriformes": {
        "cn_name": "狐猴下目",
        "rank": "infraorder",
        "parent": "Strepsirrhini",
        "divergence_time_mya": 50.0,
        "description": "马达加斯加特有的灵长类辐射支系，形态和生态习性高度多样化。"
      },
      "Chiromyiformes": {
        "cn_name": "指猴下目",
        "rank": "infraorder",
        "parent": "Strepsirrhini",
        "divergence_time_mya": 50,
        "description": "仅包含指猴科，具有特化的手指用于敲击回声定位取食。"
      },
      "Lorisiformes": {
        "cn_name": "懒猴下目",
        "rank": "infraorder",
        "parent": "Strepsirrhini",
        "divergence_time_mya": 40,
        "description": "分布于非洲和亚洲的夜行性灵长类，包含懒猴和婴猴。"
      },
      "Haplorrhini": {
        "cn_name": "简鼻亚目",
        "rank": "suborder",
        "parent": "Primates",
        "divergence_time_mya": 65.0,
        "description": "包含眼镜猴、猴、猿和人类，特征为干燥的鼻子和闭合的眼眶后壁。"
      },
      "Tarsiiformes": {
        "cn_name": "跗猴下目",
        "rank": "infraorder",
        "parent": "Haplorrhini",
        "divergence_time_mya": 64,
        "description": "以眼镜猴为代表，具有巨大的眼睛和特化的跗骨，是类人猿的姐妹群。"
      },
      "Simiiformes": {
        "cn_name": "类人猿下目",
        "rank": "infraorder",
        "parent": "Haplorrhini",
        "divergence_time_mya": 45.0,
        "description": "高等灵长类，包含阔鼻小目（新世界猴）和狭鼻小目（旧世界猴与猿）。"
      },
      "Platyrrhini": {
        "cn_name": "阔鼻小目",
        "rank": "parvorder",
        "parent": "Simiiformes",
        "divergence_time_mya": 26,
        "description": "新世界猴，起源于非洲祖先的跨大西洋漂流，鼻孔间距宽且侧向。"
      },
      "Catarrhini": {
        "cn_name": "狭鼻小目",
        "rank": "parvorder",
        "parent": "Simiiformes",
        "divergence_time_mya": 30.0,
        "description": "旧世界猴与猿类，鼻孔间距窄且向下，包含人类的直系祖先。"
      },
      "Cercopithecoidea": {
        "cn_name": "猴总科",
        "rank": "superfamily",
        "parent": "Catarrhini",
        "divergence_time_mya": 18,
        "description": "即旧世界猴，包含猕猴、金丝猴等，分布广泛。"
      },
      "Hominoidea": {
        "cn_name": "人猿总科",
        "rank": "superfamily",
        "parent": "Catarrhini",
        "divergence_time_mya": 20,
        "description": "包含长臂猿科和人科（猩猩、大猩猩、黑猩猩、人），无尾，脑容量相对较大。"
      },
      "Lagomorpha": {
        "cn_name": "兔形目",
        "rank": "order",
        "parent": "Euarchontoglires",
        "divergence_time_mya": 48,
        "description": "包含兔科和鼠兔科，具有两对上门齿（重齿），与啮齿目亲缘关系近。"
      },
      "Rodentia": {
        "cn_name": "啮齿目",
        "rank": "order",
        "parent": "Euarchontoglires",
        "divergence_time_mya": 58.0,
        "description": "哺乳动物中物种最丰富的一目，特征为终生生长的凿状门齿，演化历史极其复杂。"
      },
      "Sciuromorpha": {
        "cn_name": "松鼠亚目",
        "rank": "suborder",
        "parent": "Rodentia",
        "divergence_time_mya": 50.0,
        "description": "包含山河狸、松鼠和睡鼠，是啮齿目中较为古老的形态类型。"
      },
      "Castorimorpha": {
        "cn_name": "河狸亚目",
        "rank": "suborder",
        "parent": "Rodentia",
        "divergence_time_mya": 48.0,
        "description": "包含河狸、囊鼠和异鼠，具有独特的颌骨肌肉结构。"
      },
      "Myomorpha": {
        "cn_name": "鼠形亚目",
        "rank": "suborder",
        "parent": "Rodentia",
        "divergence_time_mya": 50.0,
        "description": "包含鼠总科和跳鼠总科，拥有哺乳动物中1/4的物种，适应性极强。"
      },
      "Dipodoidea": {
        "cn_name": "跳鼠总科",
        "rank": "superfamily",
        "parent": "Myomorpha",
        "divergence_time_mya": 35.0,
        "description": "以跳鼠为代表，多具有延长的后肢，适应跳跃运动。"
      },
      "Muroidea": {
        "cn_name": "鼠总科",
        "rank": "superfamily",
        "parent": "Myomorpha",
        "divergence_time_mya": 35.0,
        "description": "包含仓鼠、鼠科等，在中新世经历了爆发式辐射，遍布全球。"
      },
      "Anomaluromorpha": {
        "cn_name": "鳞尾松鼠亚目",
        "rank": "suborder",
        "parent": "Rodentia",
        "divergence_time_mya": 45.0,
        "description": "非洲特有的啮齿类，包含具有滑翔能力的鳞尾松鼠和跳兔。"
      },
      "Hystricomorpha": {
        "cn_name": "豪猪亚目",
        "rank": "suborder",
        "parent": "Rodentia",
        "divergence_time_mya": 48,
        "description": "包含梳趾鼠、豪猪及南美豚鼠类，具有特化的咬肌结构。"
      },
      "Ctenodactylomorphi": {
        "cn_name": "梳齿鼠下目",
        "rank": "infraorder",
        "parent": "Hystricomorpha",
        "divergence_time_mya": 47.5,
        "description": "包含梳趾鼠科和曾被认为灭绝的老挝岩鼠科。"
      },
      "Hystricognathi": {
        "cn_name": "豪猪下目",
        "rank": "infraorder",
        "parent": "Hystricomorpha",
        "divergence_time_mya": 42.0,
        "description": "包含旧世界豪猪和新世界豚鼠小目，后者在南美洲经历了壮观的辐射。"
      },
      "Eulipotyphla": {
        "cn_name": "真盲缺目",
        "rank": "order",
        "parent": "Laurasiatheria",
        "divergence_time_mya": 74.0,
        "description": "劳亚兽总目中古老的食虫支系，包含沟齿鼩、鼹鼠、鼩鼱和刺猬。"
      },
      "Chiroptera": {
        "cn_name": "翼手目",
        "rank": "order",
        "parent": "Laurasiatheria",
        "divergence_time_mya": 64.0,
        "description": "唯一演化出飞翔能力的哺乳动物，分为阴翼手和阳翼手两大亚目。"
      },
      "Yinpterochiroptera": {
        "cn_name": "阴翼手亚目",
        "rank": "suborder",
        "parent": "Chiroptera",
        "divergence_time_mya": 63.5,
        "description": "包含狐蝠（主要靠视觉）和菊头蝠类（使用高频回声定位）。"
      },
      "Pteropodoidea": {
        "cn_name": "狐蝠总科",
        "rank": "superfamily",
        "parent": "Yinpterochiroptera",
        "divergence_time_mya": 63,
        "description": "旧世界果蝠，体型通常较大，不具备复杂的回声定位能力。"
      },
      "Rhinolophoidea": {
        "cn_name": "菊头蝠总科",
        "rank": "superfamily",
        "parent": "Yinpterochiroptera",
        "divergence_time_mya": 50,
        "description": "包含菊头蝠、蹄蝠等，具有复杂的鼻叶结构用于回声定位。"
      },
      "Yangochiroptera": {
        "cn_name": "阳翼手亚目",
        "rank": "suborder",
        "parent": "Chiroptera",
        "divergence_time_mya": 63.5,
        "description": "主要利用喉部发出超声波进行回声定位的蝙蝠，物种多样性极高。"
      },
      "Emballonuroidea": {
        "cn_name": "鞘尾蝠总科",
        "rank": "superfamily",
        "parent": "Yangochiroptera",
        "divergence_time_mya": 52,
        "description": "阳翼手亚目最基干的分支，包含鞘尾蝠和裂颜蝠。"
      },
      "Noctilionoidea": {
        "cn_name": "兔唇蝠总科",
        "rank": "superfamily",
        "parent": "Yangochiroptera",
        "divergence_time_mya": 45,
        "description": "新热带界的辐射支系，包含形态多样性极高的叶口蝠科。"
      },
      "Vespertilionoidea": {
        "cn_name": "蝙蝠总科",
        "rank": "superfamily",
        "parent": "Yangochiroptera",
        "divergence_time_mya": 48,
        "description": "包含蝙蝠科、犬吻蝠科等，是分布最广、种类最多的蝙蝠群。"
      },
      "Pholidota": {
        "cn_name": "鳞甲目",
        "rank": "order",
        "parent": "Laurasiatheria",
        "divergence_time_mya": 45,
        "description": "即穿山甲，身披角质鳞片，是食肉目的姐妹群，沿特提斯海沿岸扩散。"
      },
      "Carnivora": {
        "cn_name": "食肉目",
        "rank": "order",
        "parent": "Laurasiatheria",
        "divergence_time_mya": 55.0,
        "description": "主要适应捕食生活的哺乳动物，具有特化的裂齿，包含猫型和犬型两大亚目。"
      },
      "Feliformia": {
        "cn_name": "猫型亚目",
        "rank": "suborder",
        "parent": "Carnivora",
        "divergence_time_mya": 54.5,
        "description": "听泡由两块骨头组成，包含猫、灵猫、鬣狗、獴等。"
      },
      "Nandinioidea": {
        "cn_name": "双斑狸下目",
        "rank": "infraorder",
        "parent": "Feliformia",
        "divergence_time_mya": 54,
        "description": "仅含双斑狸一种，是所有其他猫型类动物的基干姐妹群。"
      },
      "Feloidea": {
        "cn_name": "猫下目",
        "rank": "infraorder",
        "parent": "Feliformia",
        "divergence_time_mya": 33.0,
        "description": "包含猫科、林狸科等主要猫型类群。"
      },
      "Caniformia": {
        "cn_name": "犬型亚目",
        "rank": "suborder",
        "parent": "Carnivora",
        "divergence_time_mya": 54.5,
        "description": "听泡由单块骨头组成，包含犬、熊、鼬及演化入海的鳍脚类。"
      },
      "Cynoidea": {
        "cn_name": "犬下目",
        "rank": "infraorder",
        "parent": "Caniformia",
        "divergence_time_mya": 54,
        "description": "最基干的犬型类分支，以犬科为代表。"
      },
      "Arctoidea": {
        "cn_name": "熊下目",
        "rank": "infraorder",
        "parent": "Caniformia",
        "divergence_time_mya": 45.0,
        "description": "包含熊科、鼬总科及鳍脚类（海豹、海狮、海象）。"
      },
      "Mustelida": {
        "cn_name": "鼬小目",
        "rank": "parvorder",
        "parent": "Arctoidea",
        "divergence_time_mya": 30,
        "description": "包含小熊猫、浣熊、臭鼬及鼬科，形态多样性极高。"
      },
      "Pinnipedia": {
        "cn_name": "鳍脚小目",
        "rank": "parvorder",
        "parent": "Arctoidea",
        "divergence_time_mya": 24.0,
        "description": "适应半水生生活的食肉目，四肢特化为鳍状，包含海豹、海狮和海象。"
      },
      "Perissodactyla": {
        "cn_name": "奇蹄目",
        "rank": "order",
        "parent": "Laurasiatheria",
        "divergence_time_mya": 56.0,
        "description": "中轴足趾（第三趾）承重的有蹄类，包含马、犀牛和貘。"
      },
      "Hippomorpha": {
        "cn_name": "马形亚目",
        "rank": "suborder",
        "parent": "Perissodactyla",
        "divergence_time_mya": 55.5,
        "description": "以马科为代表，适应开阔草原奔跑生活，单趾着地。"
      },
      "Ceratomorpha": {
        "cn_name": "角形亚目",
        "rank": "suborder",
        "parent": "Perissodactyla",
        "divergence_time_mya": 52,
        "description": "包含貘和犀牛，通常体型较重，保留了多趾特征。"
      },
      "Artiodactyla / Cetartiodactyla": {
        "cn_name": "鲸偶蹄目",
        "rank": "order",
        "parent": "Laurasiatheria",
        "divergence_time_mya": 56.0,
        "description": "包含传统的偶蹄类（如猪、骆驼、反刍类）和演化入水的鲸类，第三、四趾承重。"
      },
      "Tylopoda": {
        "cn_name": "胼足亚目",
        "rank": "suborder",
        "parent": "Artiodactyla / Cetartiodactyla",
        "divergence_time_mya": 17.5,
        "description": "现存最基干的偶蹄类分支，以骆驼和羊驼为代表，足底有肉垫。"
      },
      "Suina": {
        "cn_name": "猪形亚目",
        "rank": "suborder",
        "parent": "Artiodactyla / Cetartiodactyla",
        "divergence_time_mya": 38,
        "description": "非反刍类偶蹄动物，包含猪科和西科，保留了多室胃的原始形态。"
      },
      "Whippomorpha / Cetancodonta": {
        "cn_name": "鲸河马亚目",
        "rank": "suborder",
        "parent": "Artiodactyla / Cetartiodactyla",
        "divergence_time_mya": 54.0,
        "description": "包含河马与鲸类，揭示了鲸类起源于陆生偶蹄类的演化历史。"
      },
      "Ancodonta": {
        "cn_name": "凹齿下目",
        "rank": "infraorder",
        "parent": "Whippomorpha / Cetancodonta",
        "divergence_time_mya": 8.0,
        "description": "以河马为代表，半水生，是鲸类的现存最近亲。"
      },
      "Cetacea": {
        "cn_name": "鲸下目",
        "rank": "infraorder",
        "parent": "Whippomorpha / Cetancodonta",
        "divergence_time_mya": 39.0,
        "description": "即新鲸类（Neoceti），完全适应水生生活，分为须鲸和齿鲸两大支系。（注：鲸类基干起源于约50 Mya）。"
      },
      "Mysticeti": {
        "cn_name": "须鲸小目",
        "rank": "parvorder",
        "parent": "Cetacea",
        "divergence_time_mya": 28,
        "description": "口中具有鲸须用于滤食浮游生物，通常体型巨大。"
      },
      "Odontoceti": {
        "cn_name": "齿鲸小目",
        "rank": "parvorder",
        "parent": "Cetacea",
        "divergence_time_mya": 36,
        "description": "具有牙齿，具备回声定位能力，包含抹香鲸、海豚等。"
      },
      "Physeteroidea": {
        "cn_name": "抹香鲸总科",
        "rank": "superfamily",
        "parent": "Odontoceti",
        "divergence_time_mya": 28,
        "description": "最基干的齿鲸支系，头部巨大，具有特化的鲸脑油器官。"
      },
      "Ziphoidea": {
        "cn_name": "喙鲸总科",
        "rank": "superfamily",
        "parent": "Odontoceti",
        "divergence_time_mya": 28.0,
        "description": "深潜能力极强的齿鲸，具有特化的喙部，牙齿数量少。"
      },
      "Platanistoidea": {
        "cn_name": "淡水豚总科",
        "rank": "superfamily",
        "parent": "Odontoceti",
        "divergence_time_mya": 33,
        "description": "主要生活在河流系统中的原始齿鲸类群。"
      },
      "Delphinoidea": {
        "cn_name": "海豚总科",
        "rank": "superfamily",
        "parent": "Odontoceti",
        "divergence_time_mya": 18,
        "description": "海洋哺乳动物中辐射最晚、速度最快的类群，包含海豚、鼠海豚和一角鲸。"
      },
      "Ruminantia": {
        "cn_name": "反刍亚目",
        "rank": "suborder",
        "parent": "Artiodactyla / Cetartiodactyla",
        "divergence_time_mya": 45.0,
        "description": "具有复杂的反刍胃系统，适应高效消化植物纤维。"
      },
      "Tragulina": {
        "cn_name": "鼷鹿下目",
        "rank": "infraorder",
        "parent": "Ruminantia",
        "divergence_time_mya": 30.0,
        "description": "基干反刍类，体型小，无角，保留了原始特征。"
      },
      "Pecora": {
        "cn_name": "有角下目",
        "rank": "infraorder",
        "parent": "Ruminantia",
        "divergence_time_mya": 24.0,
        "description": "主要的反刍类群，多数具有角（鹿角、牛角等），包含牛科、鹿科等。"
      }
    },
    "families": [
      {
        "id": 1,
        "family_cn": "鸭嘴兽科",
        "family_en": "Ornithorhynchidae",
        "representative_species": "Ornithorhynchus anatinus",
        "image_url": "images/Ornithorhynchidae.png",
        "taxonomy": {
          "subclass": "原兽亚纲 (Prototheria)",
          "order": "单孔目 (Monotremata)"
        },
        "parent_node": "单孔目 (Monotremata)",
        "parent_rank": "order",
        "description": "鸭嘴兽科是半水生的肉食性单孔类动物。该科最显著的解剖学特征是其高度特化的吻部——革质的鸭嘴状喙。这个喙不仅仅是捕食器官，更是精密的感官系统，布满了数万个电感受器（electroreceptors）和机械感受器，使鸭嘴兽能够在浑浊的河底通过探测猎物（如虾、蠕虫）肌肉收缩产生的微弱生物电来定位。它们的四肢具蹼，游泳能力极强，但在陆地上行走较为笨拙。雄性鸭嘴兽后肢踝部具中空的角质毒刺，连接毒腺，这在哺乳动物中极为罕见，主要用于繁殖期的种内竞争。化石记录显示该科曾广泛分布于冈瓦纳古陆。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Monotremata"
      },
      {
        "id": 2,
        "family_cn": "针鼹科",
        "family_en": "Tachyglossidae",
        "representative_species": "Tachyglossus aculeatus",
        "image_url": "images/Tachyglossidae.png",
        "taxonomy": {
          "subclass": "原兽亚纲 (Prototheria)",
          "order": "单孔目 (Monotremata)"
        },
        "parent_node": "单孔目 (Monotremata)",
        "parent_rank": "order",
        "description": "与鸭嘴兽不同，针鼹科动物完全陆生，体表覆盖着粗硬的毛发和锐利的棘刺，这是毛发的特化衍生物，用于防御捕食者。它们拥有强壮的前肢和巨大的挖掘爪，能够迅速挖掘土壤以逃避敌害或寻找食物。针鼹的吻部细长呈管状，没有牙齿，依靠长而带有黏液的舌头捕食蚂蚁和白蚁。雌性针鼹在繁殖期会发育出一个临时的育儿袋（pouch），卵在袋内孵化，幼崽在袋内舔食乳汁直至棘刺长出。该科现存分为短吻针鼹属和长吻针鼹属。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Monotremata"
      },
      {
        "id": 3,
        "family_cn": "负鼠科",
        "family_en": "Didelphidae",
        "representative_species": "Didelphis virginiana",
        "image_url": "images/Didelphidae.png",
        "taxonomy": {
          "infraclass": "后兽下纲 (Metatheria)",
          "order": "负鼠目 (Didelphimorphia)"
        },
        "parent_node": "负鼠目 (Didelphimorphia)",
        "parent_rank": "order",
        "description": "负鼠科广泛分布于南美洲至北美洲。它们大多是树栖或半树栖的中小型动物，拥有具缠绕性的尾巴和可对握的拇指（后足第一趾），这赋予了它们极佳的攀爬能力。牙齿数目多达50枚，显示出其原始的杂食性特征。负鼠以其机会主义的生存策略著称，食物来源广泛，包括果实、昆虫、小脊椎动物及腐肉。该科著名的防御行为是“装死”（thanatosis），在极度惊恐时进入假死状态以迷惑捕食者。虽然大多数有袋类局限于南半球，但负鼠科成功北扩至北美洲。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Didelphimorphia"
      },
      {
        "id": 4,
        "family_cn": "鼩负鼠科",
        "family_en": "Caenolestidae",
        "representative_species": "Caenolestes fuliginosus",
        "image_url": "images/Caenolestidae.png",
        "taxonomy": {
          "infraclass": "后兽下纲 (Metatheria)",
          "order": "鼩负鼠目 (Paucituberculata)"
        },
        "parent_node": "鼩负鼠目 (Paucituberculata)",
        "parent_rank": "order",
        "description": "鼩负鼠科主要分布于安第斯山脉的高海拔森林和草甸中。它们的外形酷似食虫目的鼩鼱，拥有长而尖的吻部和小眼睛，完全缺乏育儿袋（幼崽受毛发保护）。它们主要在夜间活动，利用发达的触须和嗅觉捕食昆虫和蚯蚓。作为南美有袋类早期的分支，鼩负鼠在解剖上保留了许多区别于负鼠的特征，如下门齿向前突出，与其捕食习性相关。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Paucituberculata"
      },
      {
        "id": 5,
        "family_cn": "微兽科",
        "family_en": "Microbiotheriidae",
        "representative_species": "Dromiciops gliroides",
        "image_url": "images/Microbiotheriidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "微兽目 (Microbiotheria)"
        },
        "parent_node": "微兽目 (Microbiotheria)",
        "parent_rank": "order",
        "description": "现存仅一种，即南猊。虽然它生活在南美洲（智利和阿根廷的温带雨林），但分子系统发生学分析显示，它与澳洲有袋类（Australidelphia）的亲缘关系比与美洲其他的有袋类（如负鼠）更近。因此，它是连接美洲和澳洲有袋类演化的关键“缺失环节”，支持了有袋类经由南极洲从南美迁移至澳洲的假说。它们是小型树栖动物，以昆虫和果实为食，并在尾部储存脂肪以备冬眠。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Microbiotheria"
      },
      {
        "id": 6,
        "family_cn": "袋鼬科",
        "family_en": "Dasyuridae",
        "representative_species": "Sarcophilus harrisii",
        "image_url": "images/Dasyuridae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "袋鼬目 (Dasyuromorphia)"
        },
        "parent_node": "袋鼬目 (Dasyuromorphia)",
        "parent_rank": "order",
        "description": "袋鼬科是本目中多样性最高的科，涵盖了从微小的袋鼩（Planigale）到像袋獾这样强壮的食腐者。它们普遍具有尖锐的门齿和切割用的臼齿，适应肉食或虫食。一些小型袋鼬科动物（如宽足袋鼩属 Antechinus）具有独特的繁殖策略：雄性在交配季节会因为极度的荷尔蒙压力和免疫系统崩溃而集体死亡，呈现“半死生殖”（semelparity）现象。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Dasyuromorphia"
      },
      {
        "id": 7,
        "family_cn": "袋狼科",
        "family_en": "Thylacinidae",
        "representative_species": "Thylacinus cynocephalus",
        "image_url": "images/Thylacinidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "袋鼬目 (Dasyuromorphia)"
        },
        "parent_node": "袋鼬目 (Dasyuromorphia)",
        "parent_rank": "order",
        "description": "袋狼科曾是澳洲顶级的有袋类掠食者。最著名的物种袋狼（塔斯马尼亚虎）外形酷似犬科动物，这是趋同演化的经典案例。它们背部有独特的条纹，颌骨张开角度巨大。虽然最后一只袋狼于1936年在动物园死亡，但在分类学名录中，该科仍被视为近代灭绝的独立科。",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Dasyuromorphia"
      },
      {
        "id": 8,
        "family_cn": "袋食蚁兽科",
        "family_en": "Myrmecobiidae",
        "representative_species": "Myrmecobius fasciatus",
        "image_url": "images/Myrmecobiidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "袋鼬目 (Dasyuromorphia)"
        },
        "parent_node": "袋鼬目 (Dasyuromorphia)",
        "parent_rank": "order",
        "description": "单型科，仅含袋食蚁兽。它们是高度特化的日行性食蚁动物，舌头细长可伸缩。与其他有袋类不同，它们没有育儿袋，幼崽直接悬挂在长毛覆盖的乳头上。它们的牙齿虽多但已退化，不能咀嚼，仅用于简单的抓取。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Dasyuromorphia"
      },
      {
        "id": 9,
        "family_cn": "袋狸科",
        "family_en": "Peramelidae",
        "representative_species": "Perameles nasuta",
        "image_url": "images/Peramelidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "袋狸目 (Peramelemorphia)"
        },
        "parent_node": "袋狸目 (Peramelemorphia)",
        "parent_rank": "order",
        "description": "袋狸科是本目中最常见的类群，广泛分布于澳洲和新几内亚的各种生境。它们体型似鼠或兔，吻部尖长。虽为杂食性，但主要通过在表土层挖掘寻找昆虫幼虫和植物根茎。它们的繁殖率极高，妊娠期是所有哺乳动物中最短的之一（仅约12.5天）。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Peramelemorphia"
      },
      {
        "id": 10,
        "family_cn": "兔耳袋狸科",
        "family_en": "Thylacomyidae",
        "representative_species": "Macrotis lagotis",
        "image_url": "images/Thylacomyidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "袋狸目 (Peramelemorphia)"
        },
        "parent_node": "袋狸目 (Peramelemorphia)",
        "parent_rank": "order",
        "description": "该科动物拥有巨大的兔状长耳和丝状的长毛，主要生活在干旱地区。它们是强壮的挖掘者，挖掘深邃的螺旋状洞穴以躲避高温和捕食者。它们是夜行性动物，听觉和嗅觉极度灵敏，主要以昆虫、种子和真菌为食。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Peramelemorphia"
      },
      {
        "id": 11,
        "family_cn": "猪脚袋狸科",
        "family_en": "Chaeropodidae",
        "representative_species": "Chaeropus ecaudatus",
        "image_url": "images/Chaeropodidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "袋狸目 (Peramelemorphia)"
        },
        "parent_node": "袋狸目 (Peramelemorphia)",
        "parent_rank": "order",
        "description": "这一科动物形态极其怪异，前肢起功能的指仅余两指，形似猪蹄；后肢仅余一功能趾，似马蹄。这种解剖结构适应于在干旱平原上的奔跑。遗憾的是，该物种在20世纪中叶因栖息地破坏和引入捕食者而灭绝。",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Peramelemorphia"
      },
      {
        "id": 12,
        "family_cn": "袋鼹科",
        "family_en": "Notoryctidae",
        "representative_species": "Notoryctes typhlops",
        "image_url": "images/Notoryctidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "袋鼹目 (Notoryctemorphia)"
        },
        "parent_node": "袋鼹目 (Notoryctemorphia)",
        "parent_rank": "order",
        "description": "袋鼹几乎完全营地下生活。它们的眼睛已退化至皮下，无外耳廓，前肢演化为巨大的铲状挖掘爪，能够在沙土中像游泳一样潜行。由于在地下难以保持恒温，它们具有变温倾向。它们是盲目的掠食者，捕食地下的昆虫幼虫。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Notoryctemorphia"
      },
      {
        "id": 13,
        "family_cn": "树袋熊科",
        "family_en": "Phascolarctidae",
        "representative_species": "Phascolarctos cinereus",
        "image_url": "images/Phascolarctidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋熊型亚目 (Vombatiformes)"
        },
        "parent_node": "袋熊型亚目 (Vombatiformes)",
        "parent_rank": "suborder",
        "description": "单型科，仅含考拉。它们是高度特化的树栖食叶动物，几乎完全依赖桉树叶为食。由于桉树叶营养低且含有毒素，考拉演化出了极慢的新陈代谢率和长达20小时的睡眠时间，以及发达的盲肠用于发酵解毒。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Vombatiformes"
      },
      {
        "id": 14,
        "family_cn": "袋熊科",
        "family_en": "Vombatidae",
        "representative_species": "Vombatus ursinus",
        "image_url": "images/Vombatidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋熊型亚目 (Vombatiformes)"
        },
        "parent_node": "袋熊型亚目 (Vombatiformes)",
        "parent_rank": "suborder",
        "description": "袋熊是体型敦实的穴居草食动物，外形似小型熊。它们的牙齿终生生长，适应研磨粗糙的草料。独特的特征包括向后开口的育儿袋（防止挖掘时泥土进入）和立方体状的粪便（用于标记领地且不易滚动）。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Vombatiformes"
      },
      {
        "id": 15,
        "family_cn": "袋貂科",
        "family_en": "Phalangeridae",
        "representative_species": "Trichosurus vulpecula",
        "image_url": "images/Phalangeridae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋貂型亚目 (Phalangeriformes)"
        },
        "parent_node": "袋貂型亚目 (Phalangeriformes)",
        "parent_rank": "suborder",
        "description": "俗称“库斯库斯”（Cuscus）或刷尾负鼠。它们分布广泛，从澳洲疏林到热带雨林。尾部末端裸露且具强缠绕性。它们是典型的树栖杂食者，行动相对缓慢，主要在夜间活动。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Phalangeriformes"
      },
      {
        "id": 16,
        "family_cn": "袋鼯科",
        "family_en": "Petauridae",
        "representative_species": "Petaurus breviceps",
        "image_url": "images/Petauridae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋貂型亚目 (Phalangeriformes)"
        },
        "parent_node": "袋貂型亚目 (Phalangeriformes)",
        "parent_rank": "suborder",
        "description": "该科包括著名的蜜袋鼯和条纹袋貂。许多成员拥有皮膜（Patagium），能够进行长距离滑翔。它们有特化的门齿，能够咬开树皮吸食树液和树胶，同时也捕食昆虫。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Phalangeriformes"
      },
      {
        "id": 17,
        "family_cn": "侏袋貂科",
        "family_en": "Burramyidae",
        "representative_species": "Burramys parvus",
        "image_url": "images/Burramyidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋貂型亚目 (Phalangeriformes)"
        },
        "parent_node": "袋貂型亚目 (Phalangeriformes)",
        "parent_rank": "suborder",
        "description": "这是双门齿目中最原始的科之一。山地侏袋貂是唯一生活在澳大利亚高山环境且进行真正冬眠的有袋类动物。它们主要在岩石缝隙中活动，食性杂，包括蛾类和种子。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Phalangeriformes"
      },
      {
        "id": 18,
        "family_cn": "环尾袋貂科",
        "family_en": "Pseudocheiridae",
        "representative_species": "Petropseudes dahli",
        "image_url": "images/Pseudocheiridae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋貂型亚目 (Phalangeriformes)"
        },
        "parent_node": "袋貂型亚目 (Phalangeriformes)",
        "parent_rank": "suborder",
        "description": "这一科的动物主要是食叶的，包括大袋鼯（Greater Glider）和环尾袋貂。它们的前肢第一、二指与另外三指对握，极适应抓握树枝。大袋鼯虽然能滑翔，但与蜜袋鼯科不同，其演化路径独立。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Phalangeriformes"
      },
      {
        "id": 19,
        "family_cn": "长吻袋貂科",
        "family_en": "Tarsipedidae",
        "representative_species": "Tarsipes rostratus",
        "image_url": "images/Tarsipedidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋貂型亚目 (Phalangeriformes)"
        },
        "parent_node": "袋貂型亚目 (Phalangeriformes)",
        "parent_rank": "suborder",
        "description": "单型科，仅含长吻袋貂（Honey Possum）。它是唯一一种完全依赖花蜜和花粉生存的非飞行哺乳动物。吻部极长，舌头尖端有刷状结构，牙齿极度退化。它们在新几内亚和澳洲西部的植物授粉中起关键作用。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Phalangeriformes"
      },
      {
        "id": 20,
        "family_cn": "羽尾袋貂科",
        "family_en": "Acrobatidae",
        "representative_species": "Acrobates pygmaeus",
        "image_url": "images/Acrobatidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋貂型亚目 (Phalangeriformes)"
        },
        "parent_node": "袋貂型亚目 (Phalangeriformes)",
        "parent_rank": "suborder",
        "description": "包含世界上最小的滑翔哺乳动物——羽尾袋鼯。其尾部两侧的硬毛排列成羽毛状，既帮助飞行平衡，也可附着在光滑的叶片上。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Phalangeriformes"
      },
      {
        "id": 21,
        "family_cn": "袋鼠科",
        "family_en": "Macropodidae",
        "representative_species": "Osphranter rufus",
        "image_url": "images/Macropodidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋鼠型亚目 (Macropodiformes)"
        },
        "parent_node": "袋鼠型亚目 (Macropodiformes)",
        "parent_rank": "suborder",
        "description": "这是双门齿目中最大的科，包括袋鼠、小袋鼠（Wallaby）和树袋鼠。它们演化出了高度特化的双足跳跃行进方式，利用粗壮的尾巴作为平衡器或“第五条腿”。消化系统适应高纤维植物，前胃发达用于发酵。",
        "divergence_time_mya": 12.0,
        "tags": [],
        "parent_clade": "Macropodiformes"
      },
      {
        "id": 22,
        "family_cn": "鼠袋鼠科",
        "family_en": "Potoroidae",
        "representative_species": "Potorous tridactylus",
        "image_url": "images/Potoroidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋鼠型亚目 (Macropodiformes)"
        },
        "parent_node": "袋鼠型亚目 (Macropodiformes)",
        "parent_rank": "suborder",
        "description": "包括贝托格袋鼠（Bettongs）和鼠袋鼠。它们体型较小，外形介于大鼠和袋鼠之间。生态上，它们是极重要的“真菌食客”，主要挖掘地下的块菌（松露类），对维持森林生态系统的菌根关系至关重要。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Macropodiformes"
      },
      {
        "id": 23,
        "family_cn": "麝袋鼠科",
        "family_en": "Hypsiprymnodontidae",
        "representative_species": "Hypsiprymnodon moschatus",
        "image_url": "images/Hypsiprymnodontidae.png",
        "taxonomy": {
          "superorder": "澳洲有袋总目 (Australidelphia)",
          "order": "双门齿目 (Diprotodontia)",
          "suborder": "袋鼠型亚目 (Macropodiformes)"
        },
        "parent_node": "袋鼠型亚目 (Macropodiformes)",
        "parent_rank": "suborder",
        "description": "单型科，仅含麝袋鼠。它是袋鼠超科中最原始的成员，保留了后肢的第一趾（拇指），不进行双足跳跃而是四足行走。它们主要在日间活动，食谱中包含大量果实和昆虫。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Macropodiformes"
      },
      {
        "id": 24,
        "family_cn": "土豚科",
        "family_en": "Orycteropodidae",
        "representative_species": "Orycteropus afer",
        "image_url": "images/Orycteropodidae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "管齿目 (Tubulidentata)"
        },
        "parent_node": "管齿目 (Tubulidentata)",
        "parent_rank": "order",
        "description": "单型目单型科，仅含土豚。它们是夜行性的挖掘专家，拥有强壮的爪子用于挖掘白蚁丘。其牙齿结构独特，由大量细管状的牙本质组成，缺乏珐琅质，这也是“管齿”一名的由来。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Tubulidentata"
      },
      {
        "id": 25,
        "family_cn": "象鼩科",
        "family_en": "Macroscelididae",
        "representative_species": "Rhynchocyon petersi",
        "image_url": "images/Macroscelididae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "象鼩目 (Macroscelidea)"
        },
        "parent_node": "象鼩目 (Macroscelidea)",
        "parent_rank": "order",
        "description": "象鼩并非鼩鼱，与大象的亲缘关系反而更近。它们拥有长而灵活的吻部，后肢修长，善于在受到惊扰时高速跳跃奔跑。它们是日行性食虫动物，形成复杂的路径网络来巡视领地。",
        "divergence_time_mya": 30.0,
        "tags": [],
        "parent_clade": "Macroscelidea"
      },
      {
        "id": 26,
        "family_cn": "马岛猬科",
        "family_en": "Tenrecidae",
        "representative_species": "Tenrec ecaudatus",
        "image_url": "images/Tenrecidae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "非洲猬目 (Afrosoricida)",
          "suborder": "马岛猬亚目 (Tenrecomorpha)"
        },
        "parent_node": "马岛猬亚目 (Tenrecomorpha)",
        "parent_rank": "suborder",
        "description": "仅分布于马达加斯加。由于缺乏竞争，它们辐射演化出了类似刺猬、鼩鼱、甚至水獭的形态。例如，獭鼩亚科（Potamogalinae）是半水生的，外形酷似水獭。",
        "divergence_time_mya": 30.0,
        "tags": [],
        "parent_clade": "Tenrecomorpha"
      },
      {
        "id": 27,
        "family_cn": "獭鼩科",
        "family_en": "Potamogalidae",
        "representative_species": "Potamogale velox",
        "image_url": "images/Potamogalidae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "非洲猬目 (Afrosoricida)",
          "suborder": "马岛猬亚目 (Tenrecomorpha)"
        },
        "parent_node": "马岛猬亚目 (Tenrecomorpha)",
        "parent_rank": "suborder",
        "description": "",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Tenrecomorpha"
      },
      {
        "id": 28,
        "family_cn": "金毛鼹科",
        "family_en": "Chrysochloridae",
        "representative_species": "Chrysochloris asiatica",
        "image_url": "images/Chrysochloridae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "非洲猬目 (Afrosoricida)",
          "suborder": "金毛鼹亚目 (Chrysochloridea)"
        },
        "parent_node": "金毛鼹亚目 (Chrysochloridea)",
        "parent_rank": "suborder",
        "description": "分布于非洲撒哈拉以南。它们是高度特化的地下居民，眼睛退化并被皮肤覆盖，毛发具有独特的光泽（结构色）。前肢骨骼变异，第三指特化为巨大的挖掘爪。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Chrysochloridea"
      },
      {
        "id": 29,
        "family_cn": "蹄兔科",
        "family_en": "Procaviidae",
        "representative_species": "Procavia capensis",
        "image_url": "images/Procaviidae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "蹄兔目 (Hyracoidea)"
        },
        "parent_node": "蹄兔目 (Hyracoidea)",
        "parent_rank": "order",
        "description": "外形像豚鼠，但实际上是大象的近亲。它们的足底有特殊的肉垫，并由腺体分泌粘液增加摩擦力，使其能在陡峭的岩壁或树干上自如攀爬。由于体温调节能力较差，它们常在岩石上晒太阳。",
        "divergence_time_mya": 8.0,
        "tags": [],
        "parent_clade": "Hyracoidea"
      },
      {
        "id": 30,
        "family_cn": "象科",
        "family_en": "Elephantidae",
        "representative_species": "Loxodonta africana",
        "image_url": "images/Elephantidae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "长鼻目 (Proboscidea)"
        },
        "parent_node": "长鼻目 (Proboscidea)",
        "parent_rank": "order",
        "description": "现存体型最大的陆生哺乳动物。特征包括长鼻（肌肉质，用于呼吸、抓握、发声）、巨大的扇状耳（散热）和特化的上门齿（象牙）。它们拥有高度发达的智力和复杂的社会结构。",
        "divergence_time_mya": 7.0,
        "tags": [],
        "parent_clade": "Proboscidea"
      },
      {
        "id": 31,
        "family_cn": "海牛科",
        "family_en": "Trichechidae",
        "representative_species": "Trichechus manatus",
        "image_url": "images/Trichechidae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "海牛目 (Sirenia)"
        },
        "parent_node": "海牛目 (Sirenia)",
        "parent_rank": "order",
        "description": "尾鳍呈圆桨状。主要分布于大西洋两岸的热带淡水或沿海水域。由于代谢率极低，它们极不耐寒，冬季常聚集在温暖泉水或电厂排水口。",
        "divergence_time_mya": 5.0,
        "tags": [],
        "parent_clade": "Sirenia"
      },
      {
        "id": 32,
        "family_cn": "儒艮科",
        "family_en": "Dugongidae",
        "representative_species": "Dugong dugon",
        "image_url": "images/Dugongidae.png",
        "taxonomy": {
          "superorder": "非洲兽总目 (Afrotheria)",
          "order": "海牛目 (Sirenia)"
        },
        "parent_node": "海牛目 (Sirenia)",
        "parent_rank": "order",
        "description": "尾鳍呈分叉的新月形（似鲸）。现存仅儒艮一种，主要分布于印度洋-太平洋浅海海草床。曾经的巨型成员——斯特拉大海牛（Steller's Sea Cow）已于18世纪因人类捕杀灭绝。",
        "divergence_time_mya": 22.0,
        "tags": [],
        "parent_clade": "Sirenia"
      },
      {
        "id": 33,
        "family_cn": "犰狳科",
        "family_en": "Dasypodidae",
        "representative_species": "Dasypus novemcinctus",
        "image_url": "images/Dasypodidae.png",
        "taxonomy": {
          "superorder": "异关节总目 (Xenarthra)",
          "order": "有甲目 (Cingulata)"
        },
        "parent_node": "有甲目 (Cingulata)",
        "parent_rank": "order",
        "description": "这一科包括长鼻犰狳等。体表覆盖角质鳞片下的骨板，形成护甲。它们是多胚生殖的典型，如九带犰狳通常一胎产下四只基因相同的幼崽。",
        "divergence_time_mya": 12.0,
        "tags": [],
        "parent_clade": "Cingulata"
      },
      {
        "id": 34,
        "family_cn": "倭犰狳科",
        "family_en": "Chlamyphoridae",
        "representative_species": "Chlamyphorus truncatus",
        "image_url": "images/Chlamyphoridae.png",
        "taxonomy": {
          "superorder": "异关节总目 (Xenarthra)",
          "order": "有甲目 (Cingulata)"
        },
        "parent_node": "有甲目 (Cingulata)",
        "parent_rank": "order",
        "description": "现代分子分类将除了长鼻犰狳属以外的所有犰狳（包括三带犰狳、大犰狳、圆头犰狳等）及已灭绝的雕齿兽归入此科。其中粉红倭犰狳是最小的种类，背甲仅覆盖背部，能在沙地中迅速潜行。",
        "divergence_time_mya": 32.0,
        "tags": [],
        "parent_clade": "Cingulata"
      },
      {
        "id": 35,
        "family_cn": "食蚁兽科",
        "family_en": "Myrmecophagidae",
        "representative_species": "Myrmecophaga tridactyla",
        "image_url": "images/Myrmecophagidae.png",
        "taxonomy": {
          "superorder": "异关节总目 (Xenarthra)",
          "order": "披毛目 (Pilosa)",
          "suborder": "蠕舌亚目 (Vermilingua) [食蚁兽]"
        },
        "parent_node": "蠕舌亚目 (Vermilingua) [食蚁兽]",
        "parent_rank": "suborder",
        "description": "包括大食蚁兽和小食蚁兽。它们完全没有牙齿，吻部极长，依靠长达60厘米的带倒刺和黏液的舌头以及巨大的唾液腺来捕食白蚁和蚂蚁。大食蚁兽是地栖的，而小食蚁兽具缠绕尾，可攀爬。",
        "divergence_time_mya": 13.0,
        "tags": [],
        "parent_clade": "Vermilingua"
      },
      {
        "id": 36,
        "family_cn": "侏食蚁兽科",
        "family_en": "Cyclopedidae",
        "representative_species": "Cyclopes didactylus",
        "image_url": "images/Cyclopedidae.png",
        "taxonomy": {
          "superorder": "异关节总目 (Xenarthra)",
          "order": "披毛目 (Pilosa)",
          "suborder": "蠕舌亚目 (Vermilingua) [食蚁兽]"
        },
        "parent_node": "蠕舌亚目 (Vermilingua) [食蚁兽]",
        "parent_rank": "suborder",
        "description": "单型科。侏食蚁兽体型极小，全身金黄色，完全树栖，具有缠绕尾。它们主要在夜间捕食树栖蚂蚁。",
        "divergence_time_mya": 3.0,
        "tags": [],
        "parent_clade": "Vermilingua"
      },
      {
        "id": 37,
        "family_cn": "三趾树懒科",
        "family_en": "Bradypodidae",
        "representative_species": "Bradypus variegatus",
        "image_url": "images/Bradypodidae.png",
        "taxonomy": {
          "superorder": "异关节总目 (Xenarthra)",
          "order": "披毛目 (Pilosa)",
          "suborder": "叶食亚目 (Folivora) [树懒]"
        },
        "parent_node": "叶食亚目 (Folivora) [树懒]",
        "parent_rank": "suborder",
        "description": "前肢具三指。它们颈椎数量异常（8-9节），使其头部能旋转270度。它们是严格的树栖食叶者，背部毛发常因蓝绿藻共生而显绿色，提供伪装。",
        "divergence_time_mya": 11.0,
        "tags": [],
        "parent_clade": "Folivora"
      },
      {
        "id": 38,
        "family_cn": "二趾树懒科",
        "family_en": "Choloepodidae",
        "representative_species": "Choloepus hoffmanni",
        "image_url": "images/Choloepodidae.png",
        "taxonomy": {
          "superorder": "异关节总目 (Xenarthra)",
          "order": "披毛目 (Pilosa)",
          "suborder": "叶食亚目 (Folivora) [树懒]"
        },
        "parent_node": "叶食亚目 (Folivora) [树懒]",
        "parent_rank": "suborder",
        "description": "",
        "divergence_time_mya": 9.0,
        "tags": [],
        "parent_clade": "Folivora"
      },
      {
        "id": 39,
        "family_cn": "树鼩科",
        "family_en": "Tupaiidae",
        "representative_species": "Tupaia glis",
        "image_url": "images/Tupaiidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "树鼩目 (Scandentia)"
        },
        "parent_node": "树鼩目 (Scandentia)",
        "parent_rank": "order",
        "description": "外形酷似松鼠，但解剖特征显示其与灵长类关系更近（如眼眶后骨环）。它们脑体比较大，听觉灵敏，具有极高的警觉性。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Scandentia"
      },
      {
        "id": 40,
        "family_cn": "笔尾树鼩科",
        "family_en": "Ptilocercidae",
        "representative_species": "Ptilocercus lowii",
        "image_url": "images/Ptilocercidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "树鼩目 (Scandentia)"
        },
        "parent_node": "树鼩目 (Scandentia)",
        "parent_rank": "order",
        "description": "单型科。笔尾树鼩是夜行性的，尾部毛发排列成羽毛状。研究发现它们长期摄食发酵的花蜜（含酒精），却不会表现出醉酒症状，显示出独特的代谢机制。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Scandentia"
      },
      {
        "id": 41,
        "family_cn": "鼯猴科",
        "family_en": "Cynocephalidae",
        "representative_species": "Galeopterus variegatus",
        "image_url": "images/Cynocephalidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "皮翼目 (Dermoptera)"
        },
        "parent_node": "皮翼目 (Dermoptera)",
        "parent_rank": "order",
        "description": "现存仅2种。鼯猴拥有所有滑翔哺乳动物中最发达的皮膜，从颈部延伸至指尖、足尖并包裹尾部。它们并非真猴，也无法飞行，但在林间滑翔距离可逾百米。",
        "divergence_time_mya": 14.5,
        "tags": [],
        "parent_clade": "Dermoptera"
      },
      {
        "id": 42,
        "family_cn": "狐猴科",
        "family_en": "Lemuridae",
        "representative_species": "Lemur catta",
        "image_url": "images/Lemuridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "狐猴下目 (Lemuriformes)"
        },
        "parent_node": "狐猴下目 (Lemuriformes)",
        "parent_rank": "infraorder",
        "description": "马达加斯加特有。多为日行性，具有复杂的社会结构。著名的环尾狐猴以其黑白相间的尾巴和“臭味战争”（雄性利用腕部腺体摩擦尾巴挥舞）闻名。",
        "divergence_time_mya": 30.0,
        "tags": [],
        "parent_clade": "Lemuriformes"
      },
      {
        "id": 43,
        "family_cn": "鼠狐猴科",
        "family_en": "Cheirogaleidae",
        "representative_species": "Microcebus murinus",
        "image_url": "images/Cheirogaleidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "狐猴下目 (Lemuriformes)"
        },
        "parent_node": "狐猴下目 (Lemuriformes)",
        "parent_rank": "infraorder",
        "description": "马达加斯加特有。包括世界上最小的灵长类（伯特夫人鼠狐猴）。夜行性，杂食，会在尾部储存脂肪，并能进行季节性休眠。",
        "divergence_time_mya": 30.0,
        "tags": [],
        "parent_clade": "Lemuriformes"
      },
      {
        "id": 44,
        "family_cn": "大狐猴科",
        "family_en": "Indriidae",
        "representative_species": "Indri indri",
        "image_url": "images/Indriidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "狐猴下目 (Lemuriformes)"
        },
        "parent_node": "狐猴下目 (Lemuriformes)",
        "parent_rank": "infraorder",
        "description": "包括大狐猴、冕狐猴。大狐猴是现存最大的原猴类，尾巴极短，在地面移动时采用独特的侧向跳跃方式。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Lemuriformes"
      },
      {
        "id": 45,
        "family_cn": "鼬狐猴科",
        "family_en": "Lepilemuridae",
        "representative_species": "Lepilemur ruficaudatus",
        "image_url": "images/Lepilemuridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "狐猴下目 (Lemuriformes)"
        },
        "parent_node": "狐猴下目 (Lemuriformes)",
        "parent_rank": "infraorder",
        "description": "又称运动狐猴。夜行性，主要食叶。虽然体型不大，但后肢极有力，能从树干垂直跳跃很远的距离。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Lemuriformes"
      },
      {
        "id": 46,
        "family_cn": "指猴科",
        "family_en": "Daubentoniidae",
        "representative_species": "Daubentonia madagascariensis",
        "image_url": "images/Daubentoniidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "指猴下目 (Chiromyiformes)"
        },
        "parent_node": "指猴下目 (Chiromyiformes)",
        "parent_rank": "infraorder",
        "description": "单型科。指猴是形态最怪异的灵长类：门齿终生生长似啮齿类，中指极度细长。它们占据了啄木鸟的生态位，敲击树干通过回声定位蛀虫，然后用细长的中指钩出食用。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Chiromyiformes"
      },
      {
        "id": 47,
        "family_cn": "懒猴科",
        "family_en": "Lorisidae",
        "representative_species": "Nycticebus coucang",
        "image_url": "images/Lorisidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "懒猴下目 (Lorisiformes)"
        },
        "parent_node": "懒猴下目 (Lorisiformes)",
        "parent_rank": "infraorder",
        "description": "分布于非洲和亚洲。行动极其缓慢且无声，尾巴退化。它们拥有特殊的血管网（迷网）使得四肢能长时间抓握不疲劳。蜂猴是唯一的有毒灵长类（毒液来自肘部腺体与唾液混合）。",
        "divergence_time_mya": 35.0,
        "tags": [],
        "parent_clade": "Lorisiformes"
      },
      {
        "id": 48,
        "family_cn": "婴猴科",
        "family_en": "Galagidae",
        "representative_species": "Galago senegalensis",
        "image_url": "images/Galagidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "懒猴下目 (Lorisiformes)"
        },
        "parent_node": "懒猴下目 (Lorisiformes)",
        "parent_rank": "infraorder",
        "description": "分布于非洲。夜行性，后肢极长，能进行爆发性跳跃。叫声有时像婴儿啼哭，故名。",
        "divergence_time_mya": 30.0,
        "tags": [],
        "parent_clade": "Lorisiformes"
      },
      {
        "id": 49,
        "family_cn": "眼镜猴科",
        "family_en": "Tarsiidae",
        "representative_species": "Carlito syrichta",
        "image_url": "images/Tarsiidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "跗猴下目 (Tarsiiformes)"
        },
        "parent_node": "跗猴下目 (Tarsiiformes)",
        "parent_rank": "infraorder",
        "description": "分布于东南亚岛屿。眼球巨大（单眼重于脑），无法转动，故颈部可旋转180度。是唯一的完全肉食性（食虫、蜥蜴）灵长类。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Tarsiiformes"
      },
      {
        "id": 50,
        "family_cn": "狨科",
        "family_en": "Callitrichidae",
        "representative_species": "Callithrix jacchus",
        "image_url": "images/Callitrichidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "阔鼻小目 (Platyrrhini) [新世界猴]"
        },
        "parent_node": "阔鼻小目 (Platyrrhini) [新世界猴]",
        "parent_rank": "parvorder",
        "description": "体型最小的真猴类（如侏儒狨）。除大脚趾外，指甲均为爪状（Tegulae），适应树干攀爬。通常由父亲和群体成员协助育婴，常产双胞胎。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Platyrrhini"
      },
      {
        "id": 51,
        "family_cn": "卷尾猴科",
        "family_en": "Cebidae",
        "representative_species": "Sapajus apella",
        "image_url": "images/Cebidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "阔鼻小目 (Platyrrhini) [新世界猴]"
        },
        "parent_node": "阔鼻小目 (Platyrrhini) [新世界猴]",
        "parent_rank": "parvorder",
        "description": "新大陆猴。包括卷尾猴和松鼠猴。卷尾猴智力极高，野外观察到其使用石头砸开坚果，具有高度灵巧的手和半缠绕性尾巴。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Platyrrhini"
      },
      {
        "id": 52,
        "family_cn": "夜猴科",
        "family_en": "Aotidae",
        "representative_species": "Aotus azarae",
        "image_url": "images/Aotidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "阔鼻小目 (Platyrrhini) [新世界猴]"
        },
        "parent_node": "阔鼻小目 (Platyrrhini) [新世界猴]",
        "parent_rank": "parvorder",
        "description": "即夜猴。唯一的夜行性真猴类。眼睛巨大以适应夜视，但缺乏视网膜反光膜。多为一夫一妻制，雄性主要负责育婴。",
        "divergence_time_mya": 11.0,
        "tags": [],
        "parent_clade": "Platyrrhini"
      },
      {
        "id": 53,
        "family_cn": "僧面猴科",
        "family_en": "Pitheciidae",
        "representative_species": "Pithecia pithecia",
        "image_url": "images/Pitheciidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "阔鼻小目 (Platyrrhini) [新世界猴]"
        },
        "parent_node": "阔鼻小目 (Platyrrhini) [新世界猴]",
        "parent_rank": "parvorder",
        "description": "包括僧面猴、甚至猴和秃猴。牙齿结构适应咬开硬壳果实和种子。秃猴具有独特的鲜红色面部，是性选择的结果。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Platyrrhini"
      },
      {
        "id": 54,
        "family_cn": "蜘蛛猴科",
        "family_en": "Atelidae",
        "representative_species": "Alouatta seniculus",
        "image_url": "images/Atelidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "阔鼻小目 (Platyrrhini) [新世界猴]"
        },
        "parent_node": "阔鼻小目 (Platyrrhini) [新世界猴]",
        "parent_rank": "parvorder",
        "description": "包括吼猴、蜘蛛猴。拥有真猴中最具功能的“第五只手”——具皮纹的缠绕尾，能支撑全身重量。吼猴拥有扩大的舌骨，叫声能传数公里。",
        "divergence_time_mya": 22.0,
        "tags": [],
        "parent_clade": "Platyrrhini"
      },
      {
        "id": 55,
        "family_cn": "猴科",
        "family_en": "Cercopithecidae",
        "representative_species": "Macaca mulatta",
        "image_url": "images/Cercopithecidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "狭鼻小目 (Catarrhini) [旧世界猴与猿]",
          "superfamily": "猴总科 (Cercopithecoidea)"
        },
        "parent_node": "猴总科 (Cercopithecoidea)",
        "parent_rank": "superfamily",
        "description": "旧大陆猴，分布最广。分为猕猴亚科（颊囊猴，杂食）和疣猴亚科（食叶猴，胃复杂）。包括猕猴、狒狒、长鼻猴等。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Cercopithecoidea"
      },
      {
        "id": 56,
        "family_cn": "长臂猿科",
        "family_en": "Hylobatidae",
        "representative_species": "Hylobates lar",
        "image_url": "images/Hylobatidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "狭鼻小目 (Catarrhini) [旧世界猴与猿]",
          "superfamily": "人猿总科 (Hominoidea)"
        },
        "parent_node": "人猿总科 (Hominoidea)",
        "parent_rank": "superfamily",
        "description": "小猿。无尾，前肢极长，通过臂行法（Brachiation）在林间高速摆荡。通常为一夫一妻制，清晨夫妻二重唱以宣示领地。",
        "divergence_time_mya": 8.0,
        "tags": [],
        "parent_clade": "Hominoidea"
      },
      {
        "id": 57,
        "family_cn": "人科",
        "family_en": "Hominidae",
        "representative_species": "Pan troglodytes",
        "image_url": "images/Hominidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "简鼻亚目 (Haplorrhini)",
          "infraorder": "类人猿下目 (Simiiformes)",
          "parvorder": "狭鼻小目 (Catarrhini) [旧世界猴与猿]",
          "superfamily": "人猿总科 (Hominoidea)"
        },
        "parent_node": "人猿总科 (Hominoidea)",
        "parent_rank": "superfamily",
        "description": "大猿。包括猩猩、大猩猩、黑猩猩、倭黑猩猩和人。体型大，无尾，脑容量大，展现出复杂的工具使用、社会文化和自我意识。",
        "divergence_time_mya": 14.0,
        "tags": [],
        "parent_clade": "Hominoidea"
      },
      {
        "id": 58,
        "family_cn": "巨狐猴科",
        "family_en": "Megaladapidae",
        "representative_species": "Megaladapis edwardsi",
        "image_url": "images/Megaladapidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "狐猴下目 (Lemuriformes)"
        },
        "parent_node": "狐猴下目 (Lemuriformes)",
        "parent_rank": "infraorder",
        "description": "",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Lemuriformes"
      },
      {
        "id": 59,
        "family_cn": "古狐猴科",
        "family_en": "Archaeolemuridae",
        "representative_species": "Archaeolemur majori",
        "image_url": "images/Archaeolemuridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "狐猴下目 (Lemuriformes)"
        },
        "parent_node": "狐猴下目 (Lemuriformes)",
        "parent_rank": "infraorder",
        "description": "",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Lemuriformes"
      },
      {
        "id": 60,
        "family_cn": "古大狐猴科",
        "family_en": "Palaeopropithecidae",
        "representative_species": "Palaeopropithecus ingens",
        "image_url": "images/Palaeopropithecidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "灵长目 (Primates)",
          "suborder": "曲鼻亚目 (Strepsirrhini) [原猴类]",
          "infraorder": "狐猴下目 (Lemuriformes)"
        },
        "parent_node": "狐猴下目 (Lemuriformes)",
        "parent_rank": "infraorder",
        "description": "",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Lemuriformes"
      },
      {
        "id": 61,
        "family_cn": "兔科",
        "family_en": "Leporidae",
        "representative_species": "Lepus europaeus",
        "image_url": "images/Leporidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "兔形目 (Lagomorpha)"
        },
        "parent_node": "兔形目 (Lagomorpha)",
        "parent_rank": "order",
        "description": "包括家兔和野兔。后肢强壮长于前肢，适应跳跃奔跑。具有特殊的“食粪”行为（Coprophagy），即重新摄入软粪以吸收维生素B和蛋白质。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Lagomorpha"
      },
      {
        "id": 62,
        "family_cn": "鼠兔科",
        "family_en": "Ochotonidae",
        "representative_species": "Ochotona curzoniae",
        "image_url": "images/Ochotonidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "兔形目 (Lagomorpha)"
        },
        "parent_node": "兔形目 (Lagomorpha)",
        "parent_rank": "order",
        "description": "体型小，耳圆，无外尾。主要分布于北半球的高山或草原地带。它们不冬眠，通过在岩石缝隙中堆积干草过冬，是高寒生态系统中的关键物种。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Lagomorpha"
      },
      {
        "id": 63,
        "family_cn": "普罗拉古兔科",
        "family_en": "Prolagidae",
        "representative_species": "Prolagus sardus",
        "image_url": "images/Prolagidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "兔形目 (Lagomorpha)"
        },
        "parent_node": "兔形目 (Lagomorpha)",
        "parent_rank": "order",
        "description": "",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Lagomorpha"
      },
      {
        "id": 64,
        "family_cn": "松鼠科",
        "family_en": "Sciuridae",
        "representative_species": "Sciurus vulgaris",
        "image_url": "images/Sciuridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "松鼠亚目 (Sciuromorpha)"
        },
        "parent_node": "松鼠亚目 (Sciuromorpha)",
        "parent_rank": "suborder",
        "description": "分布极广，包括树松鼠、地松鼠、旱獭、花栗鼠和鼯鼠。形态多样，从滑翔到穴居。日行性为主，不仅是重要的种子传播者，也是森林生态系统的基石。",
        "divergence_time_mya": 32.0,
        "tags": [],
        "parent_clade": "Sciuromorpha"
      },
      {
        "id": 65,
        "family_cn": "山河狸科",
        "family_en": "Aplodontiidae",
        "representative_species": "Aplodontia rufa",
        "image_url": "images/Aplodontiidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "松鼠亚目 (Sciuromorpha)"
        },
        "parent_node": "松鼠亚目 (Sciuromorpha)",
        "parent_rank": "suborder",
        "description": "单型科，仅含山比格狸。它是现存最原始的啮齿类之一，保留了独特的原始咀嚼肌结构（原啮齿型），仅分布于北美西北部潮湿森林。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Sciuromorpha"
      },
      {
        "id": 66,
        "family_cn": "睡鼠科",
        "family_en": "Gliridae",
        "representative_species": "Glis glis",
        "image_url": "images/Gliridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "松鼠亚目 (Sciuromorpha)"
        },
        "parent_node": "松鼠亚目 (Sciuromorpha)",
        "parent_rank": "suborder",
        "description": "主要分布于旧大陆。外形似松鼠或鼠，善于攀爬。以冬眠习性著称，在温带地区冬眠期可长达半年以上。",
        "divergence_time_mya": 28.0,
        "tags": [],
        "parent_clade": "Sciuromorpha"
      },
      {
        "id": 67,
        "family_cn": "河狸科",
        "family_en": "Castoridae",
        "representative_species": "Castor canadensis",
        "image_url": "images/Castoridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "河狸亚目 (Castorimorpha)"
        },
        "parent_node": "河狸亚目 (Castorimorpha)",
        "parent_rank": "suborder",
        "description": "仅存2种。河狸是自然界的水利工程师，利用树枝和泥土筑坝，营造湿地环境。具有扁平的尾巴和蹼足，门齿极其坚硬，能咬断大树。",
        "divergence_time_mya": 8.0,
        "tags": [],
        "parent_clade": "Castorimorpha"
      },
      {
        "id": 68,
        "family_cn": "异鼠科",
        "family_en": "Heteromyidae",
        "representative_species": "Dipodomys merriami",
        "image_url": "images/Heteromyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "河狸亚目 (Castorimorpha)"
        },
        "parent_node": "河狸亚目 (Castorimorpha)",
        "parent_rank": "suborder",
        "description": "包括更格卢鼠和口袋鼠。主要分布于北美干旱地区，具有外部颊囊（FUR-lined cheek pouches），用于搬运种子。它们的肾脏浓缩尿液能力极强，能终生不饮水。",
        "divergence_time_mya": 22.0,
        "tags": [],
        "parent_clade": "Castorimorpha"
      },
      {
        "id": 69,
        "family_cn": "囊鼠科",
        "family_en": "Geomyidae",
        "representative_species": "Geomys bursarius",
        "image_url": "images/Geomyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "河狸亚目 (Castorimorpha)"
        },
        "parent_node": "河狸亚目 (Castorimorpha)",
        "parent_rank": "suborder",
        "description": "俗称口袋地鼠。终生地下生活，门齿穿出唇外，使其能在闭口状态下挖掘，防止泥土入口。前肢爪极其发达。",
        "divergence_time_mya": 22.0,
        "tags": [],
        "parent_clade": "Castorimorpha"
      },
      {
        "id": 70,
        "family_cn": "跳鼠科",
        "family_en": "Dipodidae",
        "representative_species": "Jaculus jaculus",
        "image_url": "images/Dipodidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "跳鼠总科 (Dipodoidea)"
        },
        "parent_node": "跳鼠总科 (Dipodoidea)",
        "parent_rank": "superfamily",
        "description": "生活在北半球荒漠。后肢极长，足趾减少，尾端有毛穗，形态与运动方式酷似袋鼠。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Dipodoidea"
      },
      {
        "id": 71,
        "family_cn": "林跳鼠科",
        "family_en": "Zapodidae",
        "representative_species": "Zapus hudsonius",
        "image_url": "images/Zapodidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "跳鼠总科 (Dipodoidea)"
        },
        "parent_node": "跳鼠总科 (Dipodoidea)",
        "parent_rank": "superfamily",
        "description": "从跳鼠科分出。主要分布于北美和中国，适应湿润草地或森林，具有超强的冬眠能力。",
        "divergence_time_mya": 12.0,
        "tags": [],
        "parent_clade": "Dipodoidea"
      },
      {
        "id": 72,
        "family_cn": "蹶鼠科",
        "family_en": "Sminthidae",
        "representative_species": "Sicista betulina",
        "image_url": "images/Sminthidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "跳鼠总科 (Dipodoidea)"
        },
        "parent_node": "跳鼠总科 (Dipodoidea)",
        "parent_rank": "superfamily",
        "description": "包含桦鼠（Birch mice）。尾巴具有缠绕性，善于攀爬植物茎秆。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Dipodoidea"
      },
      {
        "id": 73,
        "family_cn": "刺山鼠科",
        "family_en": "Platacanthomyidae",
        "representative_species": "Platacanthomys lasiurus",
        "image_url": "images/Platacanthomyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "鼠总科 (Muroidea)"
        },
        "parent_node": "鼠总科 (Muroidea)",
        "parent_rank": "superfamily",
        "description": "亚洲特有的小型科，包括刺山鼠和猪尾鼠。背部毛发硬如刺，主要在树洞中筑巢。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Muroidea"
      },
      {
        "id": 74,
        "family_cn": "竹鼠科",
        "family_en": "Spalacidae",
        "representative_species": "Rhizomys sinensis",
        "image_url": "images/Spalacidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "鼠总科 (Muroidea)"
        },
        "parent_node": "鼠总科 (Muroidea)",
        "parent_rank": "superfamily",
        "description": "包括瞎鼠（Spalax）、竹鼠（Rhizomys）等。高度适应地下或挖掘生活，眼睛退化甚至完全被皮肤覆盖，身体呈圆筒状。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Muroidea"
      },
      {
        "id": 75,
        "family_cn": "丽仓鼠科",
        "family_en": "Calomyscidae",
        "representative_species": "Calomyscus bailwardi",
        "image_url": "images/Calomyscidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "鼠总科 (Muroidea)"
        },
        "parent_node": "鼠总科 (Muroidea)",
        "parent_rank": "superfamily",
        "description": "外形像仓鼠，但没有颊囊，尾巴较长且多毛。主要分布于中亚山区。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Muroidea"
      },
      {
        "id": 76,
        "family_cn": "马岛鼠科",
        "family_en": "Nesomyidae",
        "representative_species": "Hypogeomys antimena",
        "image_url": "images/Nesomyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "鼠总科 (Muroidea)"
        },
        "parent_node": "鼠总科 (Muroidea)",
        "parent_rank": "superfamily",
        "description": "马达加斯加特有的辐射演化类群，形态极其多样，包括像兔子的（马岛巨鼠）、像树鼩的、以及攀岩的。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Muroidea"
      },
      {
        "id": 77,
        "family_cn": "仓鼠科",
        "family_en": "Cricetidae",
        "representative_species": "Mesocricetus auratus",
        "image_url": "images/Cricetidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "鼠总科 (Muroidea)"
        },
        "parent_node": "鼠总科 (Muroidea)",
        "parent_rank": "superfamily",
        "description": "第二大啮齿类科，包括仓鼠、田鼠、旅鼠以及美洲所有的“鼠类”（如白足鼠）。适应力极强，遍布北半球及南美洲。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Muroidea"
      },
      {
        "id": 78,
        "family_cn": "鼠科",
        "family_en": "Muridae",
        "representative_species": "Rattus norvegicus",
        "image_url": "images/Muridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鼠形亚目 (Myomorpha)",
          "superfamily": "鼠总科 (Muroidea)"
        },
        "parent_node": "鼠总科 (Muroidea)",
        "parent_rank": "superfamily",
        "description": "哺乳动物第一大科，包含超过700种。包括常见的小家鼠、褐家鼠、沙鼠等。具有典型的鼠形体态和强大的繁殖力。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Muroidea"
      },
      {
        "id": 79,
        "family_cn": "鳞尾松鼠科",
        "family_en": "Anomaluridae",
        "representative_species": "Anomalurus derbianus",
        "image_url": "images/Anomaluridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鳞尾松鼠亚目 (Anomaluromorpha)"
        },
        "parent_node": "鳞尾松鼠亚目 (Anomaluromorpha)",
        "parent_rank": "suborder",
        "description": "分布于非洲中部。外形似鼯鼠，具有滑翔膜，但最独特的特征是尾部腹面基部有两排尖锐的角质鳞片，用于在树干垂直攀爬时提供支撑防滑。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Anomaluromorpha"
      },
      {
        "id": 80,
        "family_cn": "跳兔科",
        "family_en": "Pedetidae",
        "representative_species": "Pedetes capensis",
        "image_url": "images/Pedetidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鳞尾松鼠亚目 (Anomaluromorpha)"
        },
        "parent_node": "鳞尾松鼠亚目 (Anomaluromorpha)",
        "parent_rank": "suborder",
        "description": "外形像微缩版的袋鼠，后肢极长，前肢短小。分布于非洲草原，夜行性，善于跳跃。虽然叫“兔”，但在亲缘上与鳞尾松鼠更近。",
        "divergence_time_mya": 4.0,
        "tags": [],
        "parent_clade": "Anomaluromorpha"
      },
      {
        "id": 81,
        "family_cn": "异鳞尾松鼠科",
        "family_en": "Zenkerellidae",
        "representative_species": "Zenkerella insignis",
        "image_url": "images/Zenkerellidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "鳞尾松鼠亚目 (Anomaluromorpha)"
        },
        "parent_node": "鳞尾松鼠亚目 (Anomaluromorpha)",
        "parent_rank": "suborder",
        "description": "曾被归入鳞尾松鼠科，但分子证据和形态学（无滑翔膜）支持其独立。该科唯一的现存物种 Zenkerella insignis 是一种极其神秘的“活化石”，从未被科学家在野外活体观察到，其演化地位早在始新世就已分化。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Anomaluromorpha"
      },
      {
        "id": 82,
        "family_cn": "梳齿鼠科",
        "family_en": "Ctenodactylidae",
        "representative_species": "Ctenodactylus gundi",
        "image_url": "images/Ctenodactylidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "梳齿鼠下目 (Ctenodactylomorphi)"
        },
        "parent_node": "梳齿鼠下目 (Ctenodactylomorphi)",
        "parent_rank": "infraorder",
        "description": "分布于北非岩石荒漠。群居，行动敏捷。后足内侧两趾上有硬毛梳，用于梳理毛发。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Ctenodactylomorphi"
      },
      {
        "id": 83,
        "family_cn": "老挝岩鼠科",
        "family_en": "Diatomyidae",
        "representative_species": "Laonastes aenigmamus",
        "image_url": "images/Diatomyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "梳齿鼠下目 (Ctenodactylomorphi)"
        },
        "parent_node": "梳齿鼠下目 (Ctenodactylomorphi)",
        "parent_rank": "infraorder",
        "description": "拉撒路类群。该科曾被认为在1100万年前已灭绝，直到2005年在老挝的菜市场发现了活体（老挝岩鼠）。它保留了许多原始豪猪形亚目的特征，是分类学上的重大发现。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Ctenodactylomorphi"
      },
      {
        "id": 84,
        "family_cn": "豪猪科",
        "family_en": "Hystricidae",
        "representative_species": "Hystrix cristata",
        "image_url": "images/Hystricidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "旧大陆豪猪。背部覆盖长而黑白相间的棘刺，棘刺由角蛋白构成，中空且易脱落，用于防御。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 85,
        "family_cn": "美洲豪猪科",
        "family_en": "Erethizontidae",
        "representative_species": "Erethizon dorsatum",
        "image_url": "images/Erethizontidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "与旧大陆豪猪不同，许多种类适应树栖生活，尾部具有缠绕性（如卷尾豪猪）。棘刺有倒钩，刺入后难以拔出。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 86,
        "family_cn": "裸鼹鼠科",
        "family_en": "Heterocephalidae",
        "representative_species": "Heterocephalus glaber",
        "image_url": "images/Heterocephalidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "从滨鼠科分出。裸鼹鼠是唯一的真社会性（Eusocial）哺乳动物，具有类似蜜蜂的后/工兵等级制度。它们几乎无毛，也是唯一的变温哺乳动物，对癌症具有极强的抵抗力，寿命远超同体型啮齿类。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 87,
        "family_cn": "滨鼠科",
        "family_en": "Bathyergidae",
        "representative_species": "Fukomys damarensis",
        "image_url": "images/Bathyergidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "非洲特有的地下啮齿类。眼睛退化，门齿巨大用于挖掘。除了裸鼹鼠外，多为独居。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 88,
        "family_cn": "岩鼠科",
        "family_en": "Petromuridae",
        "representative_species": "Petromus typicus",
        "image_url": "images/Petromuridae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "单型科。生活在西南非洲的岩石地带，肋骨连接方式特殊，使其身体能极度扁平化，挤入狭窄岩缝。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 89,
        "family_cn": "蔗鼠科",
        "family_en": "Thryonomyidae",
        "representative_species": "Thryonomys swinderianus",
        "image_url": "images/Thryonomyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "体型粗壮，皮毛如刚毛。主要分布于非洲撒哈拉以南的湿润草地和甘蔗田，常被作为野味（Bushmeat）养殖。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 90,
        "family_cn": "毛丝鼠科",
        "family_en": "Chinchillidae",
        "representative_species": "Chinchilla lanigera",
        "image_url": "images/Chinchillidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "包括龙猫（Chinchilla）和山绒鼠（Viscacha）。原产安第斯山脉，拥有世界上最致密的皮毛之一，因此曾遭过度捕杀。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 91,
        "family_cn": "长尾豚鼠科",
        "family_en": "Dinomyidae",
        "representative_species": "Dinomys branickii",
        "image_url": "images/Dinomyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "现存仅一种（帕卡拉纳鼠），但在史前曾包含体型如犀牛般的巨型啮齿类（如 Josephoartigasia）。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 92,
        "family_cn": "豚鼠科",
        "family_en": "Caviidae",
        "representative_species": "Hydrochoerus hydrochaeris",
        "image_url": "images/Caviidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "形态多样，从娇小的豚鼠到巨大的水豚（有时被单列为水豚科 Hydrochaeridae，但MDD归入此科）。水豚是现存最大的啮齿动物，半水生。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 93,
        "family_cn": "刺豚鼠科",
        "family_en": "Dasyproctidae",
        "representative_species": "Dasyprocta punctata",
        "image_url": "images/Dasyproctidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "体型似兔，后肢长。是新热带雨林重要的种子散布者，有贮藏种子的习性。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 94,
        "family_cn": "兔豚鼠科",
        "family_en": "Cuniculidae",
        "representative_species": "Cuniculus paca",
        "image_url": "images/Cuniculidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "又称帕卡鼠。头骨颧弓极度扩张，内部形成空腔作为共鸣室，不仅增强叫声，也加固头骨结构。",
        "divergence_time_mya": 5.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 95,
        "family_cn": "栉鼠科",
        "family_en": "Ctenomyidae",
        "representative_species": "Ctenomys talarum",
        "image_url": "images/Ctenomyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "南美洲生态位等同于北美的囊鼠，营地下生活，前爪发达，门齿橘红色。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 96,
        "family_cn": "八齿鼠科",
        "family_en": "Octodontidae",
        "representative_species": "Octodon degus",
        "image_url": "images/Octodontidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "因臼齿咀嚼面呈“8”字形而得名。包括八齿鼠（Degu），是用于糖尿病和生物节律研究的重要模式生物。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 97,
        "family_cn": "毛鼠科",
        "family_en": "Abrocomidae",
        "representative_species": "Abrocoma bennettii",
        "image_url": "images/Abrocomidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "皮毛极其柔软致密，外形似毛丝鼠但吻部更长，栖息于安第斯岩石区。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 98,
        "family_cn": "棘鼠科",
        "family_en": "Echimyidae",
        "representative_species": "Hoplomys gymnurus",
        "image_url": "images/Echimyidae.png",
        "taxonomy": {
          "superorder": "灵长总目 (Euarchontoglires)",
          "order": "啮齿目 (Rodentia)",
          "suborder": "豪猪亚目 (Hystricomorpha)",
          "infraorder": "豪猪下目 (Hystricognathi)"
        },
        "parent_node": "豪猪下目 (Hystricognathi)",
        "parent_rank": "infraorder",
        "description": "新大陆种类最丰富的一科，形态极其多样，包括树栖、地栖和半水生种类。许多物种的毛发特化为扁平的棘刺或刚毛。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Hystricognathi"
      },
      {
        "id": 99,
        "family_cn": "鼩鼱科",
        "family_en": "Soricidae",
        "representative_species": "Sorex araneus",
        "image_url": "images/Soricidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "真盲缺目 (Eulipotyphla)"
        },
        "parent_node": "真盲缺目 (Eulipotyphla)",
        "parent_rank": "order",
        "description": "种类繁多，体型微小。代谢率极高，心率可达每分钟1000次以上，必须昼夜不停进食。部分种类唾液有微毒。",
        "divergence_time_mya": 35.0,
        "tags": [],
        "parent_clade": "Eulipotyphla"
      },
      {
        "id": 100,
        "family_cn": "刺猬科",
        "family_en": "Erinaceidae",
        "representative_species": "Erinaceus europaeus",
        "image_url": "images/Erinaceidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "真盲缺目 (Eulipotyphla)"
        },
        "parent_node": "真盲缺目 (Eulipotyphla)",
        "parent_rank": "order",
        "description": "分为刺猬亚科（背部有刺，遇敌卷球）和毛猬亚科（无刺，似大鼠，有强烈气味）。",
        "divergence_time_mya": 40.0,
        "tags": [],
        "parent_clade": "Eulipotyphla"
      },
      {
        "id": 101,
        "family_cn": "鼹科",
        "family_en": "Talpidae",
        "representative_species": "Talpa europaea",
        "image_url": "images/Talpidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "真盲缺目 (Eulipotyphla)"
        },
        "parent_node": "真盲缺目 (Eulipotyphla)",
        "parent_rank": "order",
        "description": "包括主要适应地下生活的鼹鼠（前肢特化外翻）、半水生的俄罗斯麝鼹以及地栖的鼩鼹。触觉极灵敏（如星鼻鼹的星状鼻）。",
        "divergence_time_mya": 38.0,
        "tags": [],
        "parent_clade": "Eulipotyphla"
      },
      {
        "id": 102,
        "family_cn": "沟齿鼩科",
        "family_en": "Solenodontidae",
        "representative_species": "Solenodon paradoxus",
        "image_url": "images/Solenodontidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "真盲缺目 (Eulipotyphla)"
        },
        "parent_node": "真盲缺目 (Eulipotyphla)",
        "parent_rank": "order",
        "description": "加勒比海地区的孑遗生物。体型似巨大的鼩鼱。其下门齿内侧有深沟，连接毒腺，唾液具有毒性，这在哺乳动物中极罕见。",
        "divergence_time_mya": 6.0,
        "tags": [],
        "parent_clade": "Eulipotyphla"
      },
      {
        "id": 103,
        "family_cn": "岛鼯科",
        "family_en": "Nesophontidae",
        "representative_species": "Nesophontes edithae",
        "image_url": "images/Nesophontidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "真盲缺目 (Eulipotyphla)"
        },
        "parent_node": "真盲缺目 (Eulipotyphla)",
        "parent_rank": "order",
        "description": "近代灭绝。曾分布于西印度群岛。化石和骨骼记录显示它们在欧洲殖民者引入鼠类后灭绝（约16世纪）。",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Eulipotyphla"
      },
      {
        "id": 104,
        "family_cn": "狐蝠科",
        "family_en": "Pteropodidae",
        "representative_species": "Pteropus vampyrus",
        "image_url": "images/Pteropodidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阴翼手亚目 (Yinpterochiroptera) [狐蝠与菊头蝠类]",
          "superfamily": "狐蝠总科 (Pteropodoidea)"
        },
        "parent_node": "狐蝠总科 (Pteropodoidea)",
        "parent_rank": "superfamily",
        "description": "旧大陆果蝠。体型大，眼大，视觉导航为主（仅罗氏果蝠属有舌击回声定位）。主要食果实和花蜜，是热带森林关键的传粉者。",
        "divergence_time_mya": 26.0,
        "tags": [],
        "parent_clade": "Pteropodoidea"
      },
      {
        "id": 105,
        "family_cn": "鼠尾蝠科",
        "family_en": "Rhinopomatidae",
        "representative_species": "Rhinopoma hardwickii",
        "image_url": "images/Rhinopomatidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阴翼手亚目 (Yinpterochiroptera) [狐蝠与菊头蝠类]",
          "superfamily": "菊头蝠总科 (Rhinolophoidea)"
        },
        "parent_node": "菊头蝠总科 (Rhinolophoidea)",
        "parent_rank": "superfamily",
        "description": "拥有哺乳动物中相对于体长最长的自由尾。常栖息于干旱地区（如金字塔内），能在腹部和基部积累脂肪。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Rhinolophoidea"
      },
      {
        "id": 106,
        "family_cn": "凹脸蝠科",
        "family_en": "Craseonycteridae",
        "representative_species": "Craseonycteris thonglongyai",
        "image_url": "images/Craseonycteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阴翼手亚目 (Yinpterochiroptera) [狐蝠与菊头蝠类]",
          "superfamily": "菊头蝠总科 (Rhinolophoidea)"
        },
        "parent_node": "菊头蝠总科 (Rhinolophoidea)",
        "parent_rank": "superfamily",
        "description": "单型科。仅含吉氏凹脸蝠（大黄蜂蝙蝠），是世界上最小的哺乳动物之一，体重仅2克。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Rhinolophoidea"
      },
      {
        "id": 107,
        "family_cn": "假吸血蝠科",
        "family_en": "Megadermatidae",
        "representative_species": "Macroderma gigas",
        "image_url": "images/Megadermatidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阴翼手亚目 (Yinpterochiroptera) [狐蝠与菊头蝠类]",
          "superfamily": "菊头蝠总科 (Rhinolophoidea)"
        },
        "parent_node": "菊头蝠总科 (Rhinolophoidea)",
        "parent_rank": "superfamily",
        "description": "耳大且在基部相连，有直立鼻叶。肉食性强，捕食其他蝙蝠、蜥蜴、蛙类。虽名“假吸血”，但不吸血。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Rhinolophoidea"
      },
      {
        "id": 108,
        "family_cn": "菊头蝠科",
        "family_en": "Rhinolophidae",
        "representative_species": "Rhinolophus ferrumequinum",
        "image_url": "images/Rhinolophidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阴翼手亚目 (Yinpterochiroptera) [狐蝠与菊头蝠类]",
          "superfamily": "菊头蝠总科 (Rhinolophoidea)"
        },
        "parent_node": "菊头蝠总科 (Rhinolophoidea)",
        "parent_rank": "superfamily",
        "description": "具有复杂的马蹄形鼻叶，用于发射超声波。后肢肌肉不发达，倒挂时需身体旋转。是SARS等冠状病毒的自然宿主。",
        "divergence_time_mya": 38.0,
        "tags": [],
        "parent_clade": "Rhinolophoidea"
      },
      {
        "id": 109,
        "family_cn": "叶鼻蝠科",
        "family_en": "Hipposideridae",
        "representative_species": "Hipposideros pratti",
        "image_url": "images/Hipposideridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阴翼手亚目 (Yinpterochiroptera) [狐蝠与菊头蝠类]",
          "superfamily": "菊头蝠总科 (Rhinolophoidea)"
        },
        "parent_node": "菊头蝠总科 (Rhinolophoidea)",
        "parent_rank": "superfamily",
        "description": "鼻叶结构虽复杂但无菊头蝠的“鞍状突”。分布广泛，多栖息于洞穴。",
        "divergence_time_mya": 35.0,
        "tags": [],
        "parent_clade": "Rhinolophoidea"
      },
      {
        "id": 110,
        "family_cn": "鼻面蝠科",
        "family_en": "Rhinonycteridae",
        "representative_species": "Aselliscus tricuspidatus",
        "image_url": "images/Rhinonycteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阴翼手亚目 (Yinpterochiroptera) [狐蝠与菊头蝠类]",
          "superfamily": "菊头蝠总科 (Rhinolophoidea)"
        },
        "parent_node": "菊头蝠总科 (Rhinolophoidea)",
        "parent_rank": "superfamily",
        "description": "从叶鼻蝠科分出。鼻叶上部呈三叉状。主要分布于旧大陆热带。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Rhinolophoidea"
      },
      {
        "id": 111,
        "family_cn": "鞘尾蝠科",
        "family_en": "Emballonuridae",
        "representative_species": "Taphozous melanopogon",
        "image_url": "images/Emballonuridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "鞘尾蝠总科 (Emballonuroidea)"
        },
        "parent_node": "鞘尾蝠总科 (Emballonuroidea)",
        "parent_rank": "superfamily",
        "description": "尾巴不延伸至尾膜边缘，而是从膜的背侧面穿出，故名。栖息地多样，从雨林到荒漠。",
        "divergence_time_mya": 35.0,
        "tags": [],
        "parent_clade": "Emballonuroidea"
      },
      {
        "id": 112,
        "family_cn": "裂颜蝠科",
        "family_en": "Nycteridae",
        "representative_species": "Nycteris thebaica",
        "image_url": "images/Nycteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "鞘尾蝠总科 (Emballonuroidea)"
        },
        "parent_node": "鞘尾蝠总科 (Emballonuroidea)",
        "parent_rank": "superfamily",
        "description": "面部中央有一条深纵沟（裂缝），鼻叶位于沟旁。尾巴末端呈T字形软骨。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Emballonuroidea"
      },
      {
        "id": 113,
        "family_cn": "吸足蝠科",
        "family_en": "Myzopodidae",
        "representative_species": "Myzopoda aurita",
        "image_url": "images/Myzopodidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "兔唇蝠总科 (Noctilionoidea)"
        },
        "parent_node": "兔唇蝠总科 (Noctilionoidea)",
        "parent_rank": "superfamily",
        "description": "马达加斯加特有。手腕和脚踝处有明显的吸盘状肉垫，利用湿黏附原理停栖在光滑的旅人蕉叶片上。",
        "divergence_time_mya": 5.0,
        "tags": [],
        "parent_clade": "Noctilionoidea"
      },
      {
        "id": 114,
        "family_cn": "短尾蝠科",
        "family_en": "Mystacinidae",
        "representative_species": "Mystacina tuberculata",
        "image_url": "images/Mystacinidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "兔唇蝠总科 (Noctilionoidea)"
        },
        "parent_node": "兔唇蝠总科 (Noctilionoidea)",
        "parent_rank": "superfamily",
        "description": "新西兰特有。翼膜厚实，后肢强壮，可在地面敏捷爬行甚至挖掘，甚至像老鼠一样捕食地面昆虫。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Noctilionoidea"
      },
      {
        "id": 115,
        "family_cn": "兔唇蝠科",
        "family_en": "Noctilionidae",
        "representative_species": "Noctilio leporinus",
        "image_url": "images/Noctilionidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "兔唇蝠总科 (Noctilionoidea)"
        },
        "parent_node": "兔唇蝠总科 (Noctilionoidea)",
        "parent_rank": "superfamily",
        "description": "体型大，后肢爪极其发达。具有独特的捕鱼习性，利用回声定位探测水面波纹，划水捕鱼。",
        "divergence_time_mya": 5.0,
        "tags": [],
        "parent_clade": "Noctilionoidea"
      },
      {
        "id": 116,
        "family_cn": "烟蝠科",
        "family_en": "Furipteridae",
        "representative_species": "Furipterus horrens",
        "image_url": "images/Furipteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "兔唇蝠总科 (Noctilionoidea)"
        },
        "parent_node": "兔唇蝠总科 (Noctilionoidea)",
        "parent_rank": "superfamily",
        "description": "体型小，拇指退化且被翼膜包裹，无法用于抓握。",
        "divergence_time_mya": 5.0,
        "tags": [],
        "parent_clade": "Noctilionoidea"
      },
      {
        "id": 117,
        "family_cn": "盘翼蝠科",
        "family_en": "Thyropteridae",
        "representative_species": "Thyroptera tricolor",
        "image_url": "images/Thyropteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "兔唇蝠总科 (Noctilionoidea)"
        },
        "parent_node": "兔唇蝠总科 (Noctilionoidea)",
        "parent_rank": "superfamily",
        "description": "新大陆的“吸足蝠”。手足也有吸盘，但由基部的一块骨骼支撑。常栖息在卷曲的芭蕉叶中。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Noctilionoidea"
      },
      {
        "id": 118,
        "family_cn": "髯蝠科",
        "family_en": "Mormoopidae",
        "representative_species": "Mormoops megalophylla",
        "image_url": "images/Mormoopidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "兔唇蝠总科 (Noctilionoidea)"
        },
        "parent_node": "兔唇蝠总科 (Noctilionoidea)",
        "parent_rank": "superfamily",
        "description": "又称鬼脸蝠。面部布满皮褶和突起，嘴唇外翻。主要分布于加勒比地区，喜群居。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Noctilionoidea"
      },
      {
        "id": 119,
        "family_cn": "叶口蝠科",
        "family_en": "Phyllostomidae",
        "representative_species": "Desmodus rotundus",
        "image_url": "images/Phyllostomidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "兔唇蝠总科 (Noctilionoidea)"
        },
        "parent_node": "兔唇蝠总科 (Noctilionoidea)",
        "parent_rank": "superfamily",
        "description": "新大陆多样性最高的科。辐射演化出食虫、食果、食花蜜、食肉甚至食血（吸血蝠亚科）等多种生态位。普通吸血蝠唾液中含抗凝血剂。",
        "divergence_time_mya": 34.0,
        "tags": [],
        "parent_clade": "Noctilionoidea"
      },
      {
        "id": 120,
        "family_cn": "漏斗耳蝠科",
        "family_en": "Natalidae",
        "representative_species": "Natalus stramineus",
        "image_url": "images/Natalidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "蝙蝠总科 (Vespertilionoidea)"
        },
        "parent_node": "蝙蝠总科 (Vespertilionoidea)",
        "parent_rank": "superfamily",
        "description": "体型纤细，腿长，耳廓呈漏斗状。主要生活在加勒比和中南美洲的洞穴深处。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Vespertilionoidea"
      },
      {
        "id": 121,
        "family_cn": "犬吻蝠科",
        "family_en": "Molossidae",
        "representative_species": "Tadarida brasiliensis",
        "image_url": "images/Molossidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "蝙蝠总科 (Vespertilionoidea)"
        },
        "parent_node": "蝙蝠总科 (Vespertilionoidea)",
        "parent_rank": "superfamily",
        "description": "尾巴粗壮且长，大部分游离于尾膜之外。翅膀狭长，飞行速度极快，适合在开阔空域捕食高空昆虫。",
        "divergence_time_mya": 38.0,
        "tags": [],
        "parent_clade": "Vespertilionoidea"
      },
      {
        "id": 122,
        "family_cn": "长翼蝠科",
        "family_en": "Miniopteridae",
        "representative_species": "Miniopterus schreibersii",
        "image_url": "images/Miniopteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "蝙蝠总科 (Vespertilionoidea)"
        },
        "parent_node": "蝙蝠总科 (Vespertilionoidea)",
        "parent_rank": "superfamily",
        "description": "曾归于蝙蝠科。第3指（翼指）第2指节极长，停栖时该指会折叠回来，故名。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Vespertilionoidea"
      },
      {
        "id": 123,
        "family_cn": "腺翼蝠科",
        "family_en": "Cistugidae",
        "representative_species": "Cistugo seabrae",
        "image_url": "images/Cistugidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "蝙蝠总科 (Vespertilionoidea)"
        },
        "parent_node": "蝙蝠总科 (Vespertilionoidea)",
        "parent_rank": "superfamily",
        "description": "分布于南部非洲（纳米比亚、南非）。曾归于鼠耳蝠属，但分子证据显示其独立。翼膜上具有独特的分泌腺体。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Vespertilionoidea"
      },
      {
        "id": 124,
        "family_cn": "蝙蝠科",
        "family_en": "Vespertilionidae",
        "representative_species": "Eptesicus fuscus",
        "image_url": "images/Vespertilionidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "翼手目 (Chiroptera)",
          "suborder": "阳翼手亚目 (Yangochiroptera) [蝙蝠科与犬吻蝠类]",
          "superfamily": "蝙蝠总科 (Vespertilionoidea)"
        },
        "parent_node": "蝙蝠总科 (Vespertilionoidea)",
        "parent_rank": "superfamily",
        "description": "最大的蝙蝠科，包含近500种。面部无鼻叶，耳屏发达。遍布除极地外的全球各地，主要食虫。",
        "divergence_time_mya": 32.0,
        "tags": [],
        "parent_clade": "Vespertilionoidea"
      },
      {
        "id": 125,
        "family_cn": "穿山甲科",
        "family_en": "Manidae",
        "representative_species": "Manis pentadactyla",
        "image_url": "images/Manidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鳞甲目 (Pholidota)"
        },
        "parent_node": "鳞甲目 (Pholidota)",
        "parent_rank": "order",
        "description": "体表覆盖角质鳞片（改良的毛发），受惊时卷成球。无牙齿，利用强壮前爪挖掘蚁穴，长舌粘食白蚁。是走私贩运最严重的哺乳动物之一。",
        "divergence_time_mya": 44.5,
        "tags": [],
        "parent_clade": "Pholidota"
      },
      {
        "id": 126,
        "family_cn": "双斑狸科",
        "family_en": "Nandiniidae",
        "representative_species": "Nandinia binotata",
        "image_url": "images/Nandiniidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "猫型亚目 (Feliformia)",
          "infraorder": "双斑狸下目 (Nandinioidea)"
        },
        "parent_node": "双斑狸下目 (Nandinioidea)",
        "parent_rank": "infraorder",
        "description": "单型科，仅含双斑狸。它是所有其他猫型亚目动物的姐妹群，保留了最原始的食肉目头骨特征。树栖，分布于非洲森林。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Nandinioidea"
      },
      {
        "id": 127,
        "family_cn": "猫科",
        "family_en": "Felidae",
        "representative_species": "Panthera tigris",
        "image_url": "images/Felidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "猫型亚目 (Feliformia)",
          "infraorder": "猫下目 (Feloidea)"
        },
        "parent_node": "猫下目 (Feloidea)",
        "parent_rank": "infraorder",
        "description": "高度特化的伏击掠食者。头骨短圆，裂齿发达，除猎豹外爪均可伸缩。",
        "divergence_time_mya": 11.5,
        "tags": [],
        "parent_clade": "Feloidea"
      },
      {
        "id": 128,
        "family_cn": "林狸科",
        "family_en": "Prionodontidae",
        "representative_species": "Prionodon pardicolor",
        "image_url": "images/Prionodontidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "猫型亚目 (Feliformia)",
          "infraorder": "猫下目 (Feloidea)"
        },
        "parent_node": "猫下目 (Feloidea)",
        "parent_rank": "infraorder",
        "description": "曾归于灵猫科。分子研究显示它们是猫科的现存最近亲。主要分布于东南亚，体型修长。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Feloidea"
      },
      {
        "id": 129,
        "family_cn": "灵猫科",
        "family_en": "Viverridae",
        "representative_species": "Viverra zibetha",
        "image_url": "images/Viverridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "猫型亚目 (Feliformia)",
          "infraorder": "猫下目 (Feloidea)"
        },
        "parent_node": "猫下目 (Feloidea)",
        "parent_rank": "infraorder",
        "description": "包括灵猫、麝猫、獛。多数具有会阴腺（香腺），用于标记。体型较原始，腿短身长。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Feloidea"
      },
      {
        "id": 130,
        "family_cn": "鬣狗科",
        "family_en": "Hyaenidae",
        "representative_species": "Crocuta crocuta",
        "image_url": "images/Hyaenidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "猫型亚目 (Feliformia)",
          "infraorder": "猫下目 (Feloidea)"
        },
        "parent_node": "猫下目 (Feloidea)",
        "parent_rank": "infraorder",
        "description": "外形似犬，前肢长于后肢，背部倾斜。咬合力惊人，能粉碎骨骼。斑鬣狗具有复杂的母系社会。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Feloidea"
      },
      {
        "id": 131,
        "family_cn": "獴科",
        "family_en": "Herpestidae",
        "representative_species": "Suricata suricatta",
        "image_url": "images/Herpestidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "猫型亚目 (Feliformia)",
          "infraorder": "猫下目 (Feloidea)"
        },
        "parent_node": "猫下目 (Feloidea)",
        "parent_rank": "infraorder",
        "description": "包括獴和狐獴。体型小，行动敏捷，对蛇毒具有一定生化抗性。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Feloidea"
      },
      {
        "id": 132,
        "family_cn": "马岛灵猫科",
        "family_en": "Eupleridae",
        "representative_species": "Cryptoprocta ferox",
        "image_url": "images/Eupleridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "猫型亚目 (Feliformia)",
          "infraorder": "猫下目 (Feloidea)"
        },
        "parent_node": "猫下目 (Feloidea)",
        "parent_rank": "infraorder",
        "description": "马达加斯加特有食肉目辐射群。形态多样，占据了猫、獴、灵猫的生态位。隐肛狸（Fossa）是岛上最大的掠食者。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Feloidea"
      },
      {
        "id": 133,
        "family_cn": "犬科",
        "family_en": "Canidae",
        "representative_species": "Canis lupus",
        "image_url": "images/Canidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "犬下目 (Cynoidea)"
        },
        "parent_node": "犬下目 (Cynoidea)",
        "parent_rank": "infraorder",
        "description": "适应长距离奔跑追逐猎物。爪不可伸缩。社会性强，多具复杂的等级制度。",
        "divergence_time_mya": 12.0,
        "tags": [],
        "parent_clade": "Cynoidea"
      },
      {
        "id": 134,
        "family_cn": "熊科",
        "family_en": "Ursidae",
        "representative_species": "Ursus arctos",
        "image_url": "images/Ursidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)"
        },
        "parent_node": "熊下目 (Arctoidea)",
        "parent_rank": "infraorder",
        "description": "现存最大的陆生食肉目。体格粗壮，跖行性。除北极熊纯肉食外，多为杂食。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Arctoidea"
      },
      {
        "id": 135,
        "family_cn": "小熊猫科",
        "family_en": "Ailuridae",
        "representative_species": "Ailurus fulgens",
        "image_url": "images/Ailuridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)",
          "parvorder": "鼬小目 (Mustelida)"
        },
        "parent_node": "鼬小目 (Mustelida)",
        "parent_rank": "parvorder",
        "description": "单型科。唯一的食草（竹）食肉目动物。具有伪拇指（特化的腕骨）用于抓握竹子。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Mustelida"
      },
      {
        "id": 136,
        "family_cn": "臭鼬科",
        "family_en": "Mephitidae",
        "representative_species": "Mephitis mephitis",
        "image_url": "images/Mephitidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)",
          "parvorder": "鼬小目 (Mustelida)"
        },
        "parent_node": "鼬小目 (Mustelida)",
        "parent_rank": "parvorder",
        "description": "从鼬科分出。肛门腺极度发达，能喷射含硫醇的恶臭液体防御。警戒色明显。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Mustelida"
      },
      {
        "id": 137,
        "family_cn": "鼬科",
        "family_en": "Mustelidae",
        "representative_species": "Mustela erminea",
        "image_url": "images/Mustelidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)",
          "parvorder": "鼬小目 (Mustelida)"
        },
        "parent_node": "鼬小目 (Mustelida)",
        "parent_rank": "parvorder",
        "description": "食肉目中种类最多的一科。体型通常细长，性情凶猛，敢于攻击比自己大的猎物。",
        "divergence_time_mya": 16.0,
        "tags": [],
        "parent_clade": "Mustelida"
      },
      {
        "id": 138,
        "family_cn": "浣熊科",
        "family_en": "Procyonidae",
        "representative_species": "Procyon lotor",
        "image_url": "images/Procyonidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)",
          "parvorder": "鼬小目 (Mustelida)"
        },
        "parent_node": "鼬小目 (Mustelida)",
        "parent_rank": "parvorder",
        "description": "新大陆特有。杂食性，前爪触觉灵敏。",
        "divergence_time_mya": 20.0,
        "tags": [],
        "parent_clade": "Mustelida"
      },
      {
        "id": 139,
        "family_cn": "海象科",
        "family_en": "Odobenidae",
        "representative_species": "Odobenus rosmarus",
        "image_url": "images/Odobenidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)",
          "parvorder": "鳍脚小目 (Pinnipedia) [海生食肉类]"
        },
        "parent_node": "鳍脚小目 (Pinnipedia) [海生食肉类]",
        "parent_rank": "parvorder",
        "description": "单型科。上犬齿特化为长獠牙，用于攀爬冰面和海底挖掘（辅助）。皮肤极厚。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Pinnipedia"
      },
      {
        "id": 140,
        "family_cn": "海狮科",
        "family_en": "Otariidae",
        "representative_species": "Zalophus californianus",
        "image_url": "images/Otariidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)",
          "parvorder": "鳍脚小目 (Pinnipedia) [海生食肉类]"
        },
        "parent_node": "鳍脚小目 (Pinnipedia) [海生食肉类]",
        "parent_rank": "parvorder",
        "description": "有外耳廓，后肢可折向前方在陆地行走。游泳主要靠前肢划水。",
        "divergence_time_mya": 13.0,
        "tags": [],
        "parent_clade": "Pinnipedia"
      },
      {
        "id": 141,
        "family_cn": "海豹科",
        "family_en": "Phocidae",
        "representative_species": "Phoca vitulina",
        "image_url": "images/Phocidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "食肉目 (Carnivora)",
          "suborder": "犬型亚目 (Caniformia)",
          "infraorder": "熊下目 (Arctoidea)",
          "parvorder": "鳍脚小目 (Pinnipedia) [海生食肉类]"
        },
        "parent_node": "鳍脚小目 (Pinnipedia) [海生食肉类]",
        "parent_rank": "parvorder",
        "description": "无外耳廓，后肢不能前折，陆地上蠕动前行。水中靠后肢摆动推进，游泳效率高于海狮。",
        "divergence_time_mya": 15.0,
        "tags": [],
        "parent_clade": "Pinnipedia"
      },
      {
        "id": 142,
        "family_cn": "马科",
        "family_en": "Equidae",
        "representative_species": "Equus ferus przewalskii",
        "image_url": "images/Equidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "奇蹄目 (Perissodactyla)",
          "suborder": "马形亚目 (Hippomorpha)"
        },
        "parent_node": "马形亚目 (Hippomorpha)",
        "parent_rank": "suborder",
        "description": "四肢仅余第3趾（蹄）。适应开阔草原奔跑和食草。",
        "divergence_time_mya": 4.5,
        "tags": [],
        "parent_clade": "Hippomorpha"
      },
      {
        "id": 143,
        "family_cn": "犀科",
        "family_en": "Rhinocerotidae",
        "representative_species": "Ceratotherium simum",
        "image_url": "images/Rhinocerotidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "奇蹄目 (Perissodactyla)",
          "suborder": "角形亚目 (Ceratomorpha)"
        },
        "parent_node": "角形亚目 (Ceratomorpha)",
        "parent_rank": "suborder",
        "description": "体型巨大，皮肤厚呈铠甲状。鼻部有角蛋白构成的角，无骨心。",
        "divergence_time_mya": 26.0,
        "tags": [],
        "parent_clade": "Ceratomorpha"
      },
      {
        "id": 144,
        "family_cn": "貘科",
        "family_en": "Tapiridae",
        "representative_species": "Tapirus indicus",
        "image_url": "images/Tapiridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "奇蹄目 (Perissodactyla)",
          "suborder": "角形亚目 (Ceratomorpha)"
        },
        "parent_node": "角形亚目 (Ceratomorpha)",
        "parent_rank": "suborder",
        "description": "保留了前4后3的趾数。具有能伸缩的短鼻，栖息于热带密林。是活化石类群。",
        "divergence_time_mya": 22.0,
        "tags": [],
        "parent_clade": "Ceratomorpha"
      },
      {
        "id": 145,
        "family_cn": "骆驼科",
        "family_en": "Camelidae",
        "representative_species": "Camelus bactrianus",
        "image_url": "images/Camelidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "胼足亚目 (Tylopoda)"
        },
        "parent_node": "胼足亚目 (Tylopoda)",
        "parent_rank": "suborder",
        "description": "足底有肉垫（胼足），红细胞呈椭圆形（适应脱水）。",
        "divergence_time_mya": 17.5,
        "tags": [],
        "parent_clade": "Tylopoda"
      },
      {
        "id": 146,
        "family_cn": "猪科",
        "family_en": "Suidae",
        "representative_species": "Sus scrofa",
        "image_url": "images/Suidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "猪形亚目 (Suina)"
        },
        "parent_node": "猪形亚目 (Suina)",
        "parent_rank": "suborder",
        "description": "旧大陆猪。杂食性，犬齿持续生长并相互摩擦磨利（獠牙）。",
        "divergence_time_mya": 22.0,
        "tags": [],
        "parent_clade": "Suina"
      },
      {
        "id": 147,
        "family_cn": "西猯科",
        "family_en": "Tayassuidae",
        "representative_species": "Dicotyles tajacu",
        "image_url": "images/Tayassuidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "猪形亚目 (Suina)"
        },
        "parent_node": "猪形亚目 (Suina)",
        "parent_rank": "suborder",
        "description": "新大陆的“猪”。獠牙垂直向下，不可相互磨利。背部有臭腺。",
        "divergence_time_mya": 7.0,
        "tags": [],
        "parent_clade": "Suina"
      },
      {
        "id": 148,
        "family_cn": "河马科",
        "family_en": "Hippopotamidae",
        "representative_species": "Hippopotamus amphibius",
        "image_url": "images/Hippopotamidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "凹齿下目 (Ancodonta)"
        },
        "parent_node": "凹齿下目 (Ancodonta)",
        "parent_rank": "infraorder",
        "description": "半水生，皮肤裸露且分泌“红汗”（防晒抗菌）。是鲸类的姐妹群。",
        "divergence_time_mya": 8.0,
        "tags": [],
        "parent_clade": "Ancodonta"
      },
      {
        "id": 149,
        "family_cn": "露脊鲸科",
        "family_en": "Balaenidae",
        "representative_species": "Balaena mysticetus",
        "image_url": "images/Balaenidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "须鲸小目 (Mysticeti)"
        },
        "parent_node": "须鲸小目 (Mysticeti)",
        "parent_rank": "parvorder",
        "description": "头大，无背鳍，口中鲸须板极长，浮游生物滤食者。",
        "divergence_time_mya": 6.0,
        "tags": [],
        "parent_clade": "Mysticeti"
      },
      {
        "id": 150,
        "family_cn": "鲸兽鲸科",
        "family_en": "Cetotheriidae",
        "representative_species": "Caperea marginata",
        "image_url": "images/Cetotheriidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "须鲸小目 (Mysticeti)"
        },
        "parent_node": "须鲸小目 (Mysticeti)",
        "parent_rank": "parvorder",
        "description": "",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Mysticeti"
      },
      {
        "id": 151,
        "family_cn": "须鲸科",
        "family_en": "Balaenopteridae",
        "representative_species": "Balaenoptera musculus",
        "image_url": "images/Balaenopteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "须鲸小目 (Mysticeti)"
        },
        "parent_node": "须鲸小目 (Mysticeti)",
        "parent_rank": "parvorder",
        "description": "喉部有褶皱（喉腹褶），进食时可扩张吞入大量海水。体型流线型，游速快。",
        "divergence_time_mya": 12.0,
        "tags": [],
        "parent_clade": "Mysticeti"
      },
      {
        "id": 152,
        "family_cn": "抹香鲸科",
        "family_en": "Physeteridae",
        "representative_species": "Physeter macrocephalus",
        "image_url": "images/Physeteridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "抹香鲸总科 (Physeteroidea)"
        },
        "parent_node": "抹香鲸总科 (Physeteroidea)",
        "parent_rank": "superfamily",
        "description": "头部巨大，含有大量鲸脑油（调节浮力/声透镜）。主要深潜捕食头足类。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Physeteroidea"
      },
      {
        "id": 153,
        "family_cn": "小抹香鲸科",
        "family_en": "Kogiidae",
        "representative_species": "Kogia breviceps",
        "image_url": "images/Kogiidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "抹香鲸总科 (Physeteroidea)"
        },
        "parent_node": "抹香鲸总科 (Physeteroidea)",
        "parent_rank": "superfamily",
        "description": "体型小，头似鲨鱼。受惊时肠道会排出暗红色液体，制造烟幕逃生。",
        "divergence_time_mya": 4.0,
        "tags": [],
        "parent_clade": "Physeteroidea"
      },
      {
        "id": 154,
        "family_cn": "喙鲸科",
        "family_en": "Ziphiidae",
        "representative_species": "Ziphius cavirostris",
        "image_url": "images/Ziphiidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "喙鲸总科 (Ziphoidea)"
        },
        "parent_node": "喙鲸总科 (Ziphoidea)",
        "parent_rank": "superfamily",
        "description": "最神秘的鲸类，深潜能力极强（可达3000米）。口鼻部呈喙状，牙齿退化，雄性常仅存1-2对獠牙。",
        "divergence_time_mya": 21.0,
        "tags": [],
        "parent_clade": "Ziphoidea"
      },
      {
        "id": 155,
        "family_cn": "恒河豚科",
        "family_en": "Platanistidae",
        "representative_species": "Platanista gangetica",
        "image_url": "images/Platanistidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "淡水豚总科 (Platanistoidea)"
        },
        "parent_node": "淡水豚总科 (Platanistoidea)",
        "parent_rank": "superfamily",
        "description": "分布于南亚混浊河流。眼睛几乎退化，依靠回声定位。常侧身游泳。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Platanistoidea"
      },
      {
        "id": 156,
        "family_cn": "亚河豚科",
        "family_en": "Iniidae",
        "representative_species": "Inia geoffrensis",
        "image_url": "images/Iniidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "淡水豚总科 (Platanistoidea)"
        },
        "parent_node": "淡水豚总科 (Platanistoidea)",
        "parent_rank": "superfamily",
        "description": "分布于亚马逊。颈椎未愈合，头部转动灵活。体色常随年龄变为粉红。",
        "divergence_time_mya": 3.5,
        "tags": [],
        "parent_clade": "Platanistoidea"
      },
      {
        "id": 157,
        "family_cn": "拉普拉塔河豚科",
        "family_en": "Pontoporiidae",
        "representative_species": "Pontoporia blainvillei",
        "image_url": "images/Pontoporiidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "淡水豚总科 (Platanistoidea)"
        },
        "parent_node": "淡水豚总科 (Platanistoidea)",
        "parent_rank": "superfamily",
        "description": "唯一生活在沿海及河口的“河豚”。吻部极长。",
        "divergence_time_mya": 0.5,
        "tags": [],
        "parent_clade": "Platanistoidea"
      },
      {
        "id": 158,
        "family_cn": "白鱀豚科",
        "family_en": "Lipotidae",
        "representative_species": "Lipotes vexillifer",
        "image_url": "images/Lipotidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "淡水豚总科 (Platanistoidea)"
        },
        "parent_node": "淡水豚总科 (Platanistoidea)",
        "parent_rank": "superfamily",
        "description": "功能性灭绝。中国长江特有。最后一次确切记录在2002年，2006年考察未发现。被认为是首个因人类活动灭绝的鲸豚科级类群。",
        "divergence_time_mya": 0.0,
        "tags": [
          "Extinct"
        ],
        "parent_clade": "Platanistoidea"
      },
      {
        "id": 159,
        "family_cn": "一角鲸科",
        "family_en": "Monodontidae",
        "representative_species": "Monodon monoceros",
        "image_url": "images/Monodontidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "海豚总科 (Delphinoidea)"
        },
        "parent_node": "海豚总科 (Delphinoidea)",
        "parent_rank": "superfamily",
        "description": "分布于北极。包括独角鲸（雄性具长牙）和白鲸（白色，额隆发达）。",
        "divergence_time_mya": 5.0,
        "tags": [],
        "parent_clade": "Delphinoidea"
      },
      {
        "id": 160,
        "family_cn": "海豚科",
        "family_en": "Delphinidae",
        "representative_species": "Tursiops truncatus",
        "image_url": "images/Delphinidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "海豚总科 (Delphinoidea)"
        },
        "parent_node": "海豚总科 (Delphinoidea)",
        "parent_rank": "superfamily",
        "description": "种类最多。有明显的喙和弯曲背鳍，牙齿圆锥状。包括虎鲸。",
        "divergence_time_mya": 11.0,
        "tags": [],
        "parent_clade": "Delphinoidea"
      },
      {
        "id": 161,
        "family_cn": "鼠海豚科",
        "family_en": "Phocoenidae",
        "representative_species": "Neophocaena phocaenoides",
        "image_url": "images/Phocoenidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "鲸河马亚目 (Whippomorpha / Cetancodonta)",
          "infraorder": "鲸下目 (Cetacea)",
          "parvorder": "齿鲸小目 (Odontoceti)",
          "superfamily": "海豚总科 (Delphinoidea)"
        },
        "parent_node": "海豚总科 (Delphinoidea)",
        "parent_rank": "superfamily",
        "description": "体型较小，吻部钝圆无喙，牙齿呈铲状。",
        "divergence_time_mya": 8.0,
        "tags": [],
        "parent_clade": "Delphinoidea"
      },
      {
        "id": 162,
        "family_cn": "鼷鹿科",
        "family_en": "Tragulidae",
        "representative_species": "Tragulus napu",
        "image_url": "images/Tragulidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "反刍亚目 (Ruminantia)",
          "infraorder": "鼷鹿下目 (Tragulina)"
        },
        "parent_node": "鼷鹿下目 (Tragulina)",
        "parent_rank": "infraorder",
        "description": "最原始的反刍动物，保留了4室胃但不完善。无角，雄性有长獠牙。",
        "divergence_time_mya": 25.0,
        "tags": [],
        "parent_clade": "Tragulina"
      },
      {
        "id": 163,
        "family_cn": "叉角羚科",
        "family_en": "Antilocapridae",
        "representative_species": "Antilocapra americana",
        "image_url": "images/Antilocapridae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "反刍亚目 (Ruminantia)",
          "infraorder": "有角下目 (Pecora)"
        },
        "parent_node": "有角下目 (Pecora)",
        "parent_rank": "infraorder",
        "description": "单型科。角具有骨心，但外层的角质鞘每年脱落，这是其独特特征。",
        "divergence_time_mya": 1.0,
        "tags": [],
        "parent_clade": "Pecora"
      },
      {
        "id": 164,
        "family_cn": "长颈鹿科",
        "family_en": "Giraffidae",
        "representative_species": "Giraffa camelopardalis",
        "image_url": "images/Giraffidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "反刍亚目 (Ruminantia)",
          "infraorder": "有角下目 (Pecora)"
        },
        "parent_node": "有角下目 (Pecora)",
        "parent_rank": "infraorder",
        "description": "包括长颈鹿和霍加皮。角为皮骨角，由皮肤覆盖的骨化软骨组成，终生不脱落。",
        "divergence_time_mya": 11.5,
        "tags": [],
        "parent_clade": "Pecora"
      },
      {
        "id": 165,
        "family_cn": "鹿科",
        "family_en": "Cervidae",
        "representative_species": "Cervus nippon",
        "image_url": "images/Cervidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "反刍亚目 (Ruminantia)",
          "infraorder": "有角下目 (Pecora)"
        },
        "parent_node": "有角下目 (Pecora)",
        "parent_rank": "infraorder",
        "description": "雄性（及驯鹿雌性）具有实心的骨质角（鹿角），每年脱落再生。",
        "divergence_time_mya": 19,
        "tags": [],
        "parent_clade": "Pecora"
      },
      {
        "id": 166,
        "family_cn": "麝科",
        "family_en": "Moschidae",
        "representative_species": "Moschus moschiferus",
        "image_url": "images/Moschidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "反刍亚目 (Ruminantia)",
          "infraorder": "有角下目 (Pecora)"
        },
        "parent_node": "有角下目 (Pecora)",
        "parent_rank": "infraorder",
        "description": "无角，雄性有长獠牙和腹部麝香腺。",
        "divergence_time_mya": 10.0,
        "tags": [],
        "parent_clade": "Pecora"
      },
      {
        "id": 167,
        "family_cn": "牛科",
        "family_en": "Bovidae",
        "representative_species": "Bos taurus",
        "image_url": "images/Bovidae.png",
        "taxonomy": {
          "superorder": "劳亚兽总目 (Laurasiatheria)",
          "order": "鲸偶蹄目 (Artiodactyla / Cetartiodactyla)",
          "suborder": "反刍亚目 (Ruminantia)",
          "infraorder": "有角下目 (Pecora)"
        },
        "parent_node": "有角下目 (Pecora)",
        "parent_rank": "infraorder",
        "description": "最大的偶蹄类科。具有空心的角（洞角），骨心外覆角质层，终生不脱落。",
        "divergence_time_mya": 18.0,
        "tags": [],
        "parent_clade": "Pecora"
      }
    ]
  }