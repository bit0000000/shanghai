/* ═══════════════════════════════════════════
   词库文件
   ═══════════════════════════════════════════

   - 加词：直接往对应数组里加 "新词"
   - 每个词后面都有逗号
   - 换行、缩进、空格都不影响
   - 华文词语里的每个词必须是 2 个汉字
*/

const TOPICS = {

  "Animals 🐾": [
    "dog","cat","elephant","tiger","lion","bear","wolf","fox","deer","rabbit",
    "horse","cow","sheep","goat","pig","duck","chicken","bird","eagle","owl",
    "snake","frog","fish","shark","whale","dolphin","monkey","gorilla","panda","koala",
    "kangaroo","giraffe","zebra","rhino","hippo","crocodile","turtle","penguin","seal","otter",
    "squirrel","mouse","rat","bat","bee","ant","butterfly","spider","crab","octopus",
    "leopard","cheetah","jaguar","cougar","lynx","bobcat","hyena","jackal","coyote","dingo",
    "camel","llama","alpaca","donkey","mule","bison","buffalo","moose","elk","antelope",
    "gazelle","impala","wildebeest","meerkat","mongoose","badger","weasel","ferret","skunk","raccoon",
    "possum","hedgehog","porcupine","armadillo","sloth","lemur","chimpanzee","orangutan","baboon","macaque",
    "gibbon","tapir","warthog","boar","yak","reindeer","caribou","walrus","manatee","narwhal"
  ],

  "Countries 🌍": [
    "afghanistan","albania","algeria","andorra","angola","argentina","armenia","australia","austria","azerbaijan",
    "bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bhutan","bolivia",
    "botswana","brazil","brunei","bulgaria","burundi","cambodia","cameroon","canada","chad","chile",
    "china","colombia","comoros","congo","croatia","cuba","cyprus","czechia","denmark","djibouti",
    "dominica","ecuador","egypt","eritrea","estonia","ethiopia","fiji","finland","france","gabon",
    "gambia","georgia","germany","ghana","greece","grenada","guatemala","guinea","guyana","haiti",
    "honduras","hungary","iceland","india","indonesia","iran","iraq","ireland","israel","italy",
    "jamaica","japan","jordan","kazakhstan","kenya","kiribati","kuwait","kyrgyzstan","laos","latvia",
    "lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","madagascar","malawi","malaysia",
    "maldives","mali","malta","marshall islands","mauritania","mauritius","mexico","micronesia","moldova","monaco",
    "mongolia","montenegro","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new zealand",
    "nicaragua","niger","nigeria","norway","oman","pakistan","palau","panama","papua new guinea","paraguay",
    "peru","philippines","poland","portugal","qatar","romania","russia","rwanda","samoa","saudi arabia",
    "senegal","serbia","seychelles","sierra leone","singapore","slovakia","slovenia","solomon islands","somalia","south africa",
    "south korea","south sudan","spain","sri lanka","sudan","suriname","sweden","switzerland","syria","taiwan",
    "tajikistan","tanzania","thailand","timor-leste","togo","tonga","trinidad and tobago","tunisia","turkey","turkmenistan",
    "tuvalu","uganda","ukraine","united arab emirates","united kingdom","united states","uruguay","uzbekistan","vanuatu","vatican city",
    "venezuela","vietnam","yemen","zambia","zimbabwe"
  ],

  "Fruits 🍎": [
    "apple","banana","orange","mango","grape","strawberry","blueberry","raspberry","watermelon","papaya",
    "pineapple","kiwi","peach","pear","plum","cherry","lemon","lime","coconut","durian",
    "lychee","rambutan","mangosteen","dragon fruit","pomegranate","fig","apricot","avocado","guava","starfruit",
    "tangerine","grapefruit","melon","honeydew","cranberry","blackberry","gooseberry","date","olive","tomato",
    "persimmon","nectarine","kumquat","plantain","currant","elderberry","boysenberry","mulberry","passionfruit","jackfruit",
    "breadfruit","salak","soursop","cherimoya","atemoya","sweetsop","custard apple","feijoa","loquat","quince",
    "jujube","sapodilla","sapote","canistel","lucuma","ackee","tamarind","bilberry","huckleberry","lingonberry",
    "cloudberry","salmonberry","goji berry","barberry","chokeberry","serviceberry","pawpaw","java plum","cupuacu","bacuri",
    "marang","rollinia","citron","yuzu","pomelo","tangelo","clementine","mandarin","blood orange"
  ],

  "Colors 🎨": [
    "red","orange","yellow","green","blue","purple","pink","brown","black","white",
    "grey","gold","silver","bronze","beige","maroon","navy","teal","turquoise","cyan",
    "magenta","violet","indigo","lavender","peach","coral","salmon","crimson","scarlet","amber",
    "emerald","jade","ruby","sapphire","mint","olive","khaki","aqua","azure","ivory",
    "cream","tan","taupe","charcoal","slate","graphite","onyx","ebony","jet","pearl",
    "platinum","rose","blush","fuchsia","lilac","mauve","plum","orchid","periwinkle","cerulean",
    "cobalt","ultramarine","royal blue","sky blue","steel blue","powder blue","baby blue","midnight blue","prussian blue","cornflower blue",
    "denim","aquamarine","seafoam","viridian","chartreuse","lime","spring green","forest green","hunter green","sage",
    "moss","fern","pistachio","avocado","mustard","canary","lemon","maize","saffron","tangerine",
    "apricot","cantaloupe","pumpkin","rust","copper","brick","terracotta","mahogany","chestnut","chocolate"
  ],

  "Food 🍜": [
    "rice","noodles","bread","pasta","pizza","burger","sandwich","soup","salad","curry",
    "sushi","ramen","dumpling","laksa","satay","rendang","nasi lemak","chicken rice","roti prata","char kway teow",
    "hokkien mee","fried rice","porridge","omelette","pancake","waffle","cake","cookie","ice cream","chocolate",
    "cheese","yogurt","butter","jam","honey","sugar","salt","pepper","chili","garlic",
    "onion","shallot","ginger","turmeric","cumin","coriander","basil","oregano","thyme","rosemary",
    "parsley","mint","dill","cinnamon","nutmeg","cloves","cardamom","vanilla","soy sauce","vinegar",
    "oil","mayonnaise","ketchup","mustard","salsa","guacamole","hummus","falafel","taco","burrito",
    "quesadilla","nachos","enchilada","lasagna","ravioli","gnocchi","risotto","paella","bagel","croissant",
    "muffin","donut","pretzel","pie","tart","pudding","custard","jelly","mousse","brownie",
    "cheesecake","cupcake","biscuit","toast","cereal","oatmeal","granola","muesli","bacon","sausage"
  ],

  "华文词语 🀄": [
    /* 自然 */
    "月亮","太阳","星星","云朵","天空","大地","海洋","河流","山峰","森林",
    "花朵","树叶","树根","青草","泥土","石头","沙粒","雨水","雪花","彩虹",
    "闪电","雷声","微风","清风","凉风","寒风","阳光","月光","星光","露水",
    "春风","秋雨","海浪","沙滩","山谷","悬崖","瀑布","溪流","湖泊","草原",
    "沙漠","绿洲","冰山","火山","峡谷","岛屿","礁石","贝壳","珊瑚","云海",
    "蓝天","白云","土地","田野","草地","树林","竹林","泉水","池塘","河岸",
    "海岸","海湾","海峡","潮汐","冰川","雪原","霜冻","薄雾","冰霜","晚霞",
    "朝霞","日出","日落","月食","日食","流星","银河","极光","台风","洪水",
    "干旱","地震","海啸","温泉","溶洞","天坑","雨林","湿地","沼泽","苔原",
    "冻土","洋流","海沟","星云","岛屿","绿洲","山脊","山坡","山顶","山脚",

    /* 人 */
    "朋友","家人","亲人","同学","老师","学生","父母","妈妈","爸爸","爷爷",
    "奶奶","外公","外婆","哥哥","姐姐","弟弟","妹妹","叔叔","阿姨","表姐",
    "表弟","表哥","表妹","邻居","客人","医生","护士","警察","厨师","司机",
    "工人","农民","商人","律师","画家","歌手","演员","作家","诗人","记者",
    "同事","上司","下属","老板","员工","顾客","服务员","快递员","保安","军人",
    "船长","水手","工程师","科学家","研究员","教授","校长","园长","药剂师","牙医",
    "兽医","理发师","化妆师","摄影师","设计师","建筑师","程序员","编辑","翻译","导游",
    "运动员","教练","裁判","导演","编剧","主持人","音乐家","舞蹈家","书法家","雕塑家",
    "裁缝","木匠","铁匠","园丁","邮递员","银行家","会计","秘书","助理","经理",

    /* 学校 */
    "日记","书包","铅笔","纸张","橡皮","尺子","课本","笔记","作业","考试",
    "分数","成绩","学校","教室","操场","食堂","宿舍","走廊","黑板","班长",
    "班级","年级","课程","课堂","课桌","讲台","粉笔","板擦","校服","校车",
    "校门","校园","图书","实验","电脑","音乐","美术","体育","办公","会议",
    "礼堂","升旗","早操","课间","午休","放学","开学","放假","学期","假期",
    "练习","试卷","答案","题目","错题","奖状","奖杯","奖金","毕业","入学",
    "报名","注册","学费","校规","纪律","值日","组长","课代表","学习","文艺",
    "生活","辅导","教师","讲师","助教","证书","借书","作文","数学","英语",
    "语文","科学","历史","地理","化学","物理","生物","公民","道德","法治",

    /* 家 */
    "桌子","椅子","窗户","门口","房间","厨房","客厅","卧室","阳台","楼梯",
    "电梯","沙发","电视","空调","冰箱","镜子","衣柜","地毯","枕头","被子",
    "床单","牙刷","毛巾","肥皂","梳子","杯子","碗筷","盘子","筷子","汤匙",
    "茶几","书桌","书架","书柜","鞋柜","抽屉","台灯","吊灯","壁灯","风扇",
    "暖气","洗衣","烘干","洗碗","微波","烤箱","电饭","热水","饮水","榨汁",
    "咖啡","吸尘","扫把","拖把","簸箕","抹布","水桶","垃圾","衣架","晾衣",
    "熨斗","针线","剪刀","指甲","钥匙","门锁","门铃","猫眼","窗帘","屏风",
    "花瓶","相框","挂钟","闹钟","日历","垫子","靠垫","毛毯","凉席","蚊帐",
    "床垫","床头","化妆","淋浴","浴缸","马桶","洗手","水龙","下水","地漏",
    "插座","开关","路由","遥控","插排","衣橱","鞋架","垃圾桶","清洁","打扫",

    /* 吃喝 */
    "米饭","面条","水饺","包子","馒头","汤圆","粽子","月饼","油条","烧饼",
    "稀饭","炒饭","米粉","河粉","豆腐","青菜","白菜","萝卜","番茄","黄瓜",
    "茄子","土豆","南瓜","冬瓜","苦瓜","辣椒","洋葱","大蒜","生姜","苹果",
    "香蕉","橘子","西瓜","葡萄","桃子","梨子","草莓","芒果","菠萝","荔枝",
    "龙眼","榴莲","山竹","椰子","柠檬","樱桃","蓝莓","奶茶","咖啡","果汁",
    "汽水","绿茶","红茶","豆浆","牛奶","酸奶","啤酒","开水","温水","糖水",
    "花茶","普洱","乌龙","菊花","柠檬","蜂蜜","椰子","矿泉","苏打","可乐",
    "雪碧","橙汁","苹果","西瓜","葡萄","奶昔","冰沙","淇淋","布丁","蛋糕",
    "饼干","面包","三明","汉堡","披萨","薯条","炸鸡","香肠","火腿","培根",
    "鸡蛋","鸭蛋","鹌鹑","皮蛋","咸蛋","豆奶","米浆","凉茶","酸梅","冬瓜",

    /* 感受 */
    "幸福","快乐","开心","悲伤","难过","生气","思念","孤独","自由","梦想",
    "回忆","希望","微笑","眼泪","拥抱","问候","祝福","时间","岁月","青春",
    "童年","未来","过去","现在","温柔","坚强","勇敢","善良","诚实","谦虚",
    "骄傲","聪明","勤奋","懒惰","认真","仔细","简单","复杂","容易","困难",
    "美丽","漂亮","可爱","帅气","优雅","朴素","华丽","平凡","伟大","渺小",
    "安静","热闹","寂静","喧哗","冷漠","热情","激动","紧张","放松","满足",
    "喜悦","兴奋","愉快","欢喜","欣慰","感动","感激","感谢","遗憾","后悔",
    "失望","绝望","焦虑","担忧","害怕","恐惧","惊讶","好奇","困惑","迷茫",
    "尴尬","羞愧","嫉妒","羡慕","怨恨","愤怒","厌烦","无聊","寂寞","空虚",
    "踏实","安心","平静","舒适","温暖","甜蜜","苦涩","心酸","痛苦","感恩",

    /* 城市 */
    "城市","乡村","公园","广场","街道","马路","车站","机场","码头","海边",
    "山顶","山谷","草地","田野","花园","商场","超市","医院","银行","邮局",
    "书店","餐厅","饭店","宾馆","剧院","体育馆","博物馆","电影院","图书馆","夜市",
    "市区","郊区","社区","小区","胡同","巷子","天桥","通道","地铁","公交",
    "火车","高铁","港口","灯塔","步行","商业","小吃","美食","菜市","花市",
    "庙会","教堂","寺庙","清真","喷泉","雕塑","纪念","展览","美术","科技",
    "游乐","动物","植物","水族","海洋","游泳","足球","篮球","网球","高尔",
    "体育","健身","湿地","森林","主题","度假","酒店","民宿","写字","办公",
    "工厂","仓库","停车","加油","充电","派出","消防","电信","供电","水厂",
    "污水","垃圾","广播","电视","报社","出版","大学","中学","小学","幼儿",

    /* 交通 */
    "火车","飞机","轮船","汽车","地铁","公交","单车","摩托","卡车","出租",
    "高铁","动车","渡轮","帆船","火箭","飞船","缆车","滑板","轮滑","马车",
    "电车","三轮","面包","越野","跑车","救护","消防","警车","洒水","垃圾",
    "校车","巴士","小巴","长途","旅游","货车","拖车","油罐","水泥","起重",
    "推土","挖掘","压路","拖拉","收割","播种","插秧","割草","扫雪","雪橇",
    "雪地","板车","平衡","独轮","共享","山地","公路","折叠","电动","潜艇",
    "游艇","快艇","帆板","皮划","独木","竹筏","木筏","气垫","破冰","渔船",
    "货船","客船","油轮","集装","驳船","邮轮","游船","龙舟","舢板","直升",
    "滑翔","热气","飞艇","无人","战斗","轰炸","运输","客机","货机","航天",
    "空间","卫星","探测","宇宙","扶梯","索道","轻轨","磁悬","汽船","渡船",

    /* 颜色 */
    "红色","蓝色","绿色","黄色","黑色","白色","紫色","粉色","橙色","灰色",
    "金色","银色","咖啡","米色","天蓝","深红","浅绿","藏青","酒红","砖红",
    "棕色","褐色","茶色","卡其","驼色","杏色","桃色","珊瑚","玫瑰","樱桃",
    "西瓜","草莓","苹果","草绿","墨绿","翠绿","碧绿","青绿","湖蓝","海蓝",
    "宝蓝","钴蓝","靛蓝","群青","紫罗","薰衣","丁香","葡萄","茄子","梅子",
    "藕荷","豆沙","奶茶","焦糖","巧克","琥珀","蜂蜜","柠檬","鹅黄","姜黄",
    "土黄","芥末","橘黄","杏黄","金黄","香槟","玫瑰","古铜","青铜","铁灰",
    "银灰","烟灰","炭灰","墨黑","乌黑","漆黑","纯白","乳白","象牙","珍珠",
    "雪白","月白","透明","荧光","霓虹","马卡","莫兰","撞色","渐变","冷色",
    "暖色","中性","对比","互补","同色","金属","珠光","哑光","亮面","磨砂",

    /* 时间 */
    "早上","中午","下午","晚上","夜晚","清晨","黄昏","凌晨","白天","黑夜",
    "昨天","今天","明天","后天","前天","周末","假期","学期","瞬间","永恒",
    "早晨","上午","正午","傍晚","深夜","午夜","半夜","子时","丑时","寅时",
    "卯时","辰时","巳时","午时","未时","申时","酉时","戌时","亥时","周一",
    "周二","周三","周四","周五","周六","周日","工作","节假","春节","元宵",
    "清明","端午","七夕","中秋","重阳","冬至","除夕","元旦","国庆","劳动",
    "儿童","青年","教师","母亲","父亲","情人","感恩","圣诞","万圣","复活",
    "过去","现在","未来","古代","近代","现代","当代","世纪","年代","年份",
    "月份","日期","小时","分钟","秒钟","毫秒","微秒","纳秒","光年","千年",
    "百年","十年","一年","一月","一周","一天","一刻","一会","短暂","漫长",

    /* 抽象 */
    "颜色","故事","音乐","电影","照片","画笔","生活","人生","世界","宇宙",
    "历史","文化","艺术","科学","数学","语文","英语","物理","化学","生物",
    "地理","体育","美术","电脑","手机","网络","软件","硬件","系统","数据",
    "声音","气味","味道","触感","温度","速度","力量","能量","光线","影子",
    "方向","位置","距离","高度","深度","长度","宽度","重量","体积","面积",
    "时间","空间","思想","感情","记忆","想象","灵感","智慧","知识","经验",
    "逻辑","理性","感性","真理","谎言","秘密","命运","缘分","因果","规律",
    "秩序","混乱","平衡","变化","发展","进步","传统","现代","未来","梦想",
    "理想","目标","计划","方法","过程","结果","原因","意义","价值","道德",
    "法律","规则","权利","责任","义务","自由","平等","公平","正义","和平",

    /* 动作 */
    "学习","工作","休息","运动","跑步","游泳","跳舞","唱歌","画画","写字",
    "看书","听歌","做饭","洗衣","打扫","购物","旅行","拍照","聊天","开会",
    "走路","站立","坐下","躺下","睡觉","起床","刷牙","洗脸","洗澡","穿衣",
    "脱衣","吃饭","喝水","喝茶","喝酒","洗碗","擦桌","扫地","拖地","整理",
    "收拾","浇花","喂猫","遛狗","买菜","付钱","找钱","排队","等车","上车",
    "下车","开车","骑车","坐车","散步","爬山","慢跑","快跑","跳高","跳远",
    "投篮","踢球","打拳","打球","健身","瑜伽","拉伸","呼吸","眨眼","微笑",
    "大笑","哭泣","喊叫","低语","说话","阅读","写作","翻译","计算","思考",
    "忘记","想象","计划","决定","选择","尝试","努力","坚持","放弃","成功",
    "失败","庆祝","安慰","鼓励","帮助","照顾","关心","分享","合作","竞争"
  ],

  "Sports ⚽": [
    "soccer","basketball","tennis","badminton","swimming","running","cycling","volleyball","baseball","hockey",
    "golf","boxing","judo","taekwondo","karate","rugby","cricket","table tennis","squash","rowing",
    "sailing","surfing","skiing","snowboarding","skating","gymnastics","athletics","marathon","archery","fencing",
    "wrestling","weightlifting","climbing","diving","polo","handball","netball","softball","lacrosse","ice hockey",
    "figure skating","speed skating","cross-country skiing","biathlon","curling","bobsleigh","luge","skeleton","ski jumping","freestyle skiing",
    "water polo","water skiing","wakeboarding","kitesurfing","windsurfing","canoeing","kayaking","rafting","paddleboarding","triathlon",
    "decathlon","pentathlon","equestrian","dressage","eventing","horse racing","motorsport","formula 1","karting","rallying",
    "motocross","mountain biking","bmx","track cycling","skateboarding","roller skating","parkour","trampolining","aerobics","yoga",
    "pilates","cheerleading","sumo","kendo","aikido","kung fu","muay thai","kickboxing","mma","jujitsu",
    "brazilian jiu-jitsu","dodgeball","sepak takraw","ultimate frisbee"
  ],

  "Musical Instruments 🎵": [
    "piano","guitar","violin","cello","viola","flute","clarinet","saxophone","trumpet","trombone",
    "tuba","drum","harp","ukulele","banjo","mandolin","harmonica","accordion","organ","xylophone",
    "marimba","triangle","cymbals","bongo","timpani","bassoon","oboe","piccolo","french horn","double bass",
    "electric guitar","bass guitar","acoustic guitar","keyboard","synthesizer","drum kit","snare drum","bass drum","tom-tom","hi-hat",
    "crash cymbal","ride cymbal","congas","djembe","cajon","tabla","sitar","erhu","guzheng","pipa",
    "koto","shamisen","didgeridoo","bagpipes","pan flute","ocarina","recorder","fife","bugle","cornet",
    "flugelhorn","euphonium","baritone horn","celesta","harpsichord","clavichord","vibraphone","glockenspiel","chimes","tubular bells",
    "gong","tambourine","castanets","claves","cowbell","wood block","guiro","maracas","shaker","egg shaker",
    "crotales","handpan","steel drum","kalimba","mbira","theremin","glass harmonica","jaw harp","washboard","spoons",
    "musical saw","lute","mandola","bouzouki","balalaika","hurdy-gurdy","nyckelharpa","hardanger fiddle","fiddle","electric violin"
  ],

  "Birds 🐦": [
    "sparrow","robin","eagle","owl","hawk","falcon","parrot","penguin","flamingo","pelican",
    "swan","duck","goose","chicken","turkey","peacock","ostrich","kingfisher","woodpecker","hummingbird",
    "crow","raven","magpie","pigeon","dove","seagull","albatross","stork","heron","crane",
    "kiwi","toucan","macaw","cockatoo","parakeet","budgie","lovebird","canary","finch","sparrowhawk",
    "kestrel","osprey","condor","vulture","kite","harrier","buzzard","merlin","peregrine falcon","gyrfalcon",
    "snowy owl","barn owl","screech owl","great horned owl","tawny owl","eagle owl","burrowing owl","pygmy owl","elf owl","spectacled owl",
    "puffin","auk","guillemot","razorbill","gannet","cormorant","shag","anhinga","frigatebird","booby",
    "tropicbird","ibis","spoonbill","egret","bittern","night heron","marabou stork","shoebill","hamerkop","secretary bird",
    "bustard","lapwing","plover","sandpiper","curlew","godwit","snipe","woodcock","turnstone","oystercatcher",
    "avocet","stilt","pratincole","courser","jacana","rail","crake","gallinule","coot","moorhen",
    "swamphen","emu","cassowary","rhea","tinamou","guineafowl","pheasant","grouse","ptarmigan","quail",
    "partridge","francolin","junglefowl","curassow","chachalaca","guan","hoatzin","turaco","cuckoo","roadrunner",
    "koel","ani","coucal","nightjar","potoo","frogmouth","swift","hummingbird","sunbird","honeyeater",
    "spiderhunter","flowerpecker","white-eye","warbler","cisticola","prinia","tailorbird"
  ],

  "Insects 🐛": [
    "ant","bee","wasp","butterfly","moth","dragonfly","damselfly","beetle","ladybug","grasshopper",
    "cricket","mantis","cockroach","termite","fly","mosquito","spider","scorpion","centipede","millipede",
    "caterpillar","firefly","cicada","aphid","weevil","gnat","flea","tick","mite","silverfish",
    "earwig","mayfly","stonefly","caddisfly","alderfly","dobsonfly","lacewing","antlion","owlfly","mantidfly",
    "stick insect","leaf insect","praying mantis","walking stick","katydid","locust","mole cricket","ground cricket","bush cricket","field cricket",
    "honey bee","bumblebee","carpenter bee","mason bee","leafcutter bee","sweat bee","mining bee","cuckoo bee","orchid bee","stingless bee",
    "yellowjacket","hornet","paper wasp","mud dauber","potter wasp","velvet ant","ichneumon wasp","braconid wasp","chalcid wasp","fig wasp",
    "harvester ant","fire ant","carpenter ant","leafcutter ant","army ant","driver ant","bullet ant",
    "black widow","brown recluse","wolf spider","jumping spider","orb weaver","crab spider","huntsman spider","tarantula","funnel web spider","daddy longlegs",
    "harvestman","pseudoscorpion","sun spider","camel spider","whip scorpion","vinegaroon","horseshoe crab","sea spider","chigger","bed bug",
    "kissing bug","assassin bug","stink bug","shield bug","water strider","backswimmer","water boatman","diving beetle","whirligig beetle","tiger beetle",
    "ground beetle","dung beetle","stag beetle","rhinoceros beetle","hercules beetle","goliath beetle","click beetle","blister beetle","carrion beetle","burying beetle",
    "rove beetle","ladybird","cucumber beetle","flea beetle","leaf beetle","longhorn beetle","boll weevil","snout beetle","bark beetle","ambrosia beetle",
    "powderpost beetle","deathwatch beetle","carpet beetle","flour beetle","mealworm beetle"
  ],

  "Vegetables 🥕": [
    "carrot","potato","tomato","onion","garlic","ginger","lettuce","spinach","kale","cabbage",
    "broccoli","cauliflower","cucumber","zucchini","pumpkin","corn","pea","bean","lentil","chickpea",
    "radish","turnip","beetroot","celery","asparagus","eggplant","pepper","mushroom","okra","squash",
    "sweet potato","yam","taro","cassava","parsnip","rutabaga","kohlrabi","fennel","artichoke","brussels sprout",
    "bok choy","napa cabbage","red cabbage","savoy cabbage","collard greens","mustard greens","swiss chard","arugula","watercress","endive",
    "radicchio","escarole","frisee","mizuna","tatsoi","pak choi","choy sum","gai lan","yu choy","bitter melon",
    "winter melon","bottle gourd","ridge gourd","snake gourd","sponge gourd","bitter gourd","ash gourd","pointed gourd","ivy gourd","drumstick",
    "lotus root","bamboo shoot","water chestnut","jerusalem artichoke","sunchoke","jicama","yuca","malanga","eddoe","daikon",
    "watermelon radish","black radish","horseradish","wasabi","galangal","turmeric","fingerroot","lemongrass","kaffir lime leaf","pandan leaf",
    "curry leaf","cilantro","parsley","dill","basil","mint","thyme","rosemary","oregano","sage",
    "tarragon","chives","scallion","leek","shallot","red onion","yellow onion","baby corn","snap pea","snow pea",
    "green bean","runner bean","fava bean","lima bean","mung bean","soybean","edamame","black bean","kidney bean","pinto bean",
    "navy bean","cannellini bean","garbanzo bean","black-eyed pea","pigeon pea","adzuki bean"
  ],

  "Singapore Food 🇸🇬": [
    "laksa","satay","rendang","nasi lemak","chicken rice","roti prata","char kway teow","hokkien mee","bak kut teh","chilli crab",
    "fish head curry","carrot cake","oyster omelette","popiah","rojak","mee siam","mee rebus","kaya toast","kueh","chendol",
    "ice kachang","bandung","teh tarik","kopi","milo dinosaur","wanton mee","fishball noodles","yong tau foo","nasi padang","prata",
    "hainanese chicken rice","roasted chicken rice","soya chicken rice","duck rice","biryani","murtabak","thosai","idli","vadai","appam",
    "putu mayam","nasi briyani","mee goreng","maggi goreng","nasi goreng","fried bee hoon","economy bee hoon","economy mee","kong ba bao","bao",
    "siew mai","har gow","chee cheong fun","yum cha","dim sum","char siew","sio bak","roast duck","roast pork","bak kwa",
    "ngoh hiang","heh ko","prawn roll","spring roll","curry puff","epok epok","samosa","muruku","papadum","putu piring",
    "kueh tutu","kueh lapis","kueh salat","kueh dadar","kueh bahulu","kueh bangkit","pineapple tart","love letters","teh halia","teh masala",
    "masala chai","kopi o","kopi c","kopi peng","teh peng","milo peng","horlicks","ovaltine","sugarcane juice","coconut shake",
    "limau juice","barley water","chrysanthemum tea","luo han guo","sour plum drink","winter melon tea","grass jelly drink","ban mian","mee hoon kueh","fish soup",
    "sliced fish soup","seafood soup","prawn noodles","lor mee","beef noodles","kway chap","pig organ soup","bak chor mee","mushroom minced meat noodles","fishball mee",
    "teochew fishball noodles","hakka noodles","abacus seeds","soon kueh","peng kueh","ang ku kueh","orh nee","yam paste","pulut hitam","bubur cha cha",
    "bubur pulut hitam","tau suan","cheng tng","green bean soup","red bean soup","black sesame soup","tau huay","dou hua","soya bean curd","grass jelly",
    "ai yu jelly","ice jelly","mango pomelo sago","sago gula melaka"
  ],

  "Asian Countries 🌏": [
    "singapore","japan","china","korea","malaysia","indonesia","thailand","vietnam","philippines","india",
    "myanmar","cambodia","laos","brunei","bangladesh","pakistan","sri lanka","nepal","bhutan","mongolia",
    "taiwan","hong kong","macau","kazakhstan","uzbekistan","afghanistan","iran","iraq","saudi arabia","uae",
    "qatar","bahrain","kuwait","oman","yemen","jordan","lebanon","syria","israel","palestine",
    "turkey","armenia","georgia","azerbaijan","turkmenistan","kyrgyzstan","tajikistan","maldives","timor-leste","north korea",
    "south korea"
  ],

  "Cities 🏙️": [
    "singapore","tokyo","seoul","beijing","shanghai","hong kong","bangkok","jakarta","manila","hanoi",
    "kuala lumpur","sydney","melbourne","london","paris","berlin","rome","madrid","barcelona","amsterdam",
    "vienna","zurich","new york","los angeles","toronto","vancouver","dubai","mumbai","delhi","moscow",
    "osaka","kyoto","nagoya","sapporo","fukuoka","busan","incheon","daegu","daejeon","gwangju",
    "taipei","kaohsiung","taichung","tainan","macau","guangzhou","shenzhen","chengdu","chongqing","wuhan",
    "xian","nanjing","hangzhou","suzhou","tianjin","qingdao","dalian","xiamen","kunming","harbin",
    "phnom penh","siem reap","vientiane","yangon","mandalay","chiang mai","phuket","pattaya","krabi","hat yai",
    "penang","johor bahru","malacca","ipoh","kota kinabalu","kuching","bandung","surabaya","bali","medan",
    "cebu","davao","baguio","ho chi minh city","da nang","hue","nha trang","colombo","kathmandu","dhaka",
    "karachi","lahore","islamabad","tehran","baghdad","riyadh","jeddah","doha","abu dhabi","muscat",
    "amman","beirut","damascus","jerusalem","tel aviv","istanbul","ankara","tbilisi","yerevan","baku",
    "tashkent","almaty","astana","bishkek","dushanbe","ashgabat","ulaanbaatar","pyongyang"
  ],

  "Body Parts 🧍": [
    "head","hair","eye","ear","nose","mouth","tooth","tongue","neck","shoulder",
    "arm","elbow","hand","finger","thumb","chest","back","stomach","waist","hip",
    "leg","knee","ankle","foot","toe","skin","bone","muscle","heart","brain",
    "lung","liver","kidney","intestine","esophagus","trachea","larynx","pharynx","diaphragm","pancreas",
    "spleen","gallbladder","bladder","appendix","thyroid","adrenal gland","pituitary gland","pineal gland","thymus","artery",
    "vein","capillary","nerve","tendon","ligament","cartilage","joint","skull","spine","rib",
    "sternum","clavicle","scapula","pelvis","femur","tibia","fibula","patella","humerus","radius",
    "ulna","carpal","metacarpal","phalange","tarsal","metatarsal","vertebra","mandible","maxilla","cheek",
    "chin","forehead","eyebrow","eyelash","eyelid","pupil","iris","cornea","retina","eardrum",
    "cochlea","nostril","palate","uvula","tonsil","gum","lip","temple","nape","armpit",
    "forearm","wrist","palm","knuckle","fingernail","toenail","heel","sole","calf","shin",
    "thigh","buttock","groin","navel","abdomen","ribcage","collarbone","shoulder blade"
  ],

  "Clothing 👕": [
    "shirt","t-shirt","pants","jeans","shorts","skirt","dress","jacket","coat","sweater",
    "hoodie","socks","shoes","sneakers","boots","sandals","slippers","hat","cap","scarf",
    "gloves","belt","tie","watch","glasses","sunglasses","ring","necklace","bracelet","earrings",
    "bag","backpack","blouse","tank top","polo shirt","button-up","flannel","cardigan","vest","parka",
    "raincoat","poncho","cape","robe","bathrobe","pajamas","nightgown","underwear","bra","panties",
    "boxers","briefs","leggings","tights","stockings","ankle socks","knee-high socks","crew socks","dress socks","loafers",
    "oxfords","brogues","heels","stilettos","wedges","flats","ballet flats","espadrilles","moccasins","flip-flops",
    "slides","clogs","galoshes","rain boots","snow boots","hiking boots","work boots","beanie","beret","fedora",
    "sun hat","bucket hat","baseball cap","snapback","visor","headband","bandana","bow tie","necktie","ascot",
    "pocket square","cufflinks","suspenders","sash","apron","overalls","jumpsuit","romper","sundress","maxi dress",
    "midi dress","cocktail dress","wedding dress","suit","tuxedo","blazer","sports bra","compression shorts","jersey","uniform",
    "kimono","sari","cheongsam","hanbok","dirndl","kilt"
  ],

  "Weather 🌦️": [
    "sunny","rainy","cloudy","windy","snowy","stormy","foggy","humid","dry","hot",
    "cold","warm","cool","thunder","lightning","drizzle","downpour","hail","sleet","rainbow",
    "typhoon","tornado","hurricane","breeze","mist","overcast","clear","partly cloudy","scattered showers","thunderstorm",
    "blizzard","frost","dew","haze","smog","dust storm","sandstorm","heatwave","cold snap","monsoon",
    "tropical storm","cyclone","gale","squall","downburst","microburst","funnel cloud","waterspout","ice storm","freezing rain",
    "snowstorm","snowfall","snowflake","icicle","black ice","slush","puddle","flood","drought","wildfire",
    "fog","visibility","humidity","dew point","barometric pressure","wind chill","uv index","sunrise","sunset","twilight",
    "dawn","dusk","moonrise","moonset","tide","current","temperature","celsius","fahrenheit","kelvin",
    "forecast","weather map","radar","satellite","meteorology","climate"
  ],

  "Verbs (action) 🏃": [
    "run","walk","jump","swim","dance","sing","read","write","draw","paint",
    "cook","eat","drink","sleep","wake","listen","speak","laugh","cry","think",
    "dream","build","break","open","close","push","pull","throw","catch","kick",
    "climb","sit","stand","fall","crawl","skip","hop","leap","dive","splash",
    "wash","clean","scrub","wipe","sweep","mop","dust","polish","fold","unfold",
    "cut","chop","slice","dice","peel","grate","mix","stir","whisk","knead",
    "bake","roast","grill","fry","boil","steam","simmer","braise","saute","poach",
    "plant","water","grow","pick","harvest","dig","rake","prune","mow","weed",
    "drive","ride","steer","brake","accelerate","reverse","park","refuel","board","exit",
    "fly","sail","row","paddle","surf","ski","skate","sled","cycle","hike",
    "lift","carry","drag","haul","shove","toss","flip","spin","roll","bounce",
    "grab","hold","release","drop","arrange","organize","sort","stack","measure","count",
    "calculate","solve","analyze","compare","type","print","scan","copy","paste","delete",
    "save","send","receive","click","tap","swipe","scroll","zoom","record","play",
    "pause","stop","start","finish","continue","repeat","practice","learn","teach","study",
    "listen","hear","talk","whisper","shout","scream","smile","frown","wink","blink",
    "nod","shake","wave","point","clap","stomp","stretch","breathe","inhale","exhale",
    "yawn","sneeze","cough","sniff","taste","touch","feel","love","hate","like",
    "want","need","wish","hope","fear","dare"
  ],

  "Emotions 😊": [
    "happy","sad","angry","scared","surprised","excited","nervous","calm","bored","tired",
    "confused","proud","shy","jealous","grateful","lonely","hopeful","disappointed","content","amused",
    "anxious","curious","embarrassed","relieved","frustrated","joyful","cheerful","delighted","elated","ecstatic",
    "pleased","glad","thrilled","overjoyed","blissful","serene","peaceful","relaxed","comfortable","secure",
    "loved","valued","appreciated","respected","admired","inspired","motivated","determined","confident","optimistic",
    "pessimistic","doubtful","uncertain","hesitant","reluctant","unwilling","eager","enthusiastic","passionate","devoted",
    "affectionate","caring","compassionate","empathetic","sympathetic","kind","gentle","tender","warm","friendly",
    "hostile","aggressive","irritated","annoyed","furious","enraged","outraged","bitter","resentful","vengeful",
    "guilty","ashamed","humiliated","mortified","regretful","remorseful","sorry","apologetic","forgiven","redeemed",
    "melancholy","gloomy","miserable","heartbroken","devastated","crushed","grief-stricken","mournful","sorrowful","woeful",
    "homesick","nostalgic","sentimental","wistful","yearning","longing","desperate","hopeless","defeated","resigned",
    "astonished","amazed","astounded","awed","speechless","stunned","shocked","dumbfounded","flabbergasted","suspicious",
    "distrustful","paranoid","wary","cautious","alert","vigilant","watchful","attentive","focused","distracted",
    "unfocused","restless","impatient","antsy","fidgety","tense","stressed","overwhelmed","burned out","refreshed",
    "rejuvenated","renewed","revitalized","energized","invigorated","lively","spirited","vibrant","dynamic"
  ],

  "Family 👨‍👩‍👧": [
    "mother","father","sister","brother","grandmother","grandfather","aunt","uncle","cousin","niece",
    "nephew","son","daughter","wife","husband","parents","siblings","grandparents","great-grandmother","great-grandfather",
    "great-aunt","great-uncle","second cousin","first cousin","half-brother","half-sister","stepmother","stepfather","stepsister","stepbrother",
    "mother-in-law","father-in-law","sister-in-law","brother-in-law","son-in-law","daughter-in-law","godmother","godfather","godson","goddaughter",
    "guardian","ward","foster mother","foster father","foster child","adoptive mother","adoptive father","adopted child","biological mother","biological father",
    "twin","triplet","quadruplet","quintuplet","only child","eldest child","youngest child","middle child","firstborn","second born",
    "spouse","partner","fiance","fiancee","boyfriend","girlfriend","lover","significant other","ex-husband","ex-wife",
    "widow","widower","orphan","heir","heiress","ancestor","descendant","relative","kin","kinsman",
    "kinswoman","clan","tribe","dynasty","lineage","genealogy","family tree","household","nuclear family","extended family",
    "blended family","single-parent family","same-sex parents","co-parent","caregiver","breadwinner","homemaker","matriarch","patriarch","elder"
  ],

  "Occupations 👩‍🏫": [
    "doctor","nurse","teacher","engineer","lawyer","chef","waiter","driver","pilot","farmer",
    "artist","singer","actor","dancer","writer","scientist","programmer","designer","accountant","police officer",
    "firefighter","soldier","dentist","pharmacist","vet","journalist","photographer","architect","barber","tailor",
    "surgeon","pediatrician","cardiologist","dermatologist","psychiatrist","psychologist","therapist","counselor","social worker","paramedic",
    "radiologist","anesthesiologist","obstetrician","gynecologist","optometrist","optician","audiologist","speech therapist","physical therapist","occupational therapist",
    "nutritionist","dietitian","personal trainer","coach","referee","umpire","athlete","sports commentator","sports journalist","civil engineer",
    "mechanical engineer","electrical engineer","chemical engineer","software engineer","data scientist","data analyst","web developer","mobile developer","game developer","cybersecurity analyst",
    "network administrator","database administrator","cloud architect","devops engineer","qa tester","product manager","project manager","business analyst","scrum master","entrepreneur",
    "business owner","manager","supervisor","team lead","director","executive","ceo","cfo","cto","marketing manager",
    "sales manager","hr manager","recruiter","public relations officer","advertising executive","copywriter","content creator","social media manager","influencer","banker",
    "financial advisor","investment analyst","stockbroker","insurance agent","real estate agent","property manager","appraiser","auditor","tax consultant","judge",
    "magistrate","prosecutor","defense attorney","paralegal","legal secretary","notary","court clerk","bailiff","correctional officer","police detective",
    "forensic scientist","crime scene investigator","security guard","bodyguard","bouncer","lifeguard","park ranger","forest ranger","conservationist","zookeeper",
    "veterinarian assistant","animal trainer","groomer","rancher","fisherman","logger","miner","oil rig worker","construction worker","carpenter",
    "plumber","electrician","welder","mason","painter","roofer","glazier","hvac technician","mechanic","auto body repairer",
    "tire technician","tow truck driver","delivery driver","courier","mail carrier","warehouse worker","forklift operator","bus driver","taxi driver","train conductor",
    "subway operator","air traffic controller","flight attendant","captain","sailor","dockworker"
  ],

  "School Supplies ✏️": [
    "pen","pencil","eraser","ruler","notebook","textbook","highlighter","marker","crayon","glue",
    "scissors","stapler","tape","binder","folder","backpack","calculator","compass","protractor","sharpener",
    "whiteboard","chalk","clipboard","paper","sticky notes","index cards","flashcards","notepad","legal pad","graph paper",
    "construction paper","tissue paper","crepe paper","cardstock","poster board","foam board","display board","bulletin board","corkboard","whiteboard marker",
    "dry erase eraser","chalkboard eraser","pencil case","pencil pouch","pencil box","pen holder","desk organizer","bookmark","reading log","planner",
    "agenda","calendar","schedule","timetable","syllabus","handout","worksheet","workbook","practice book","composition book",
    "spiral notebook","ring binder","three-ring binder","two-pocket folder","file folder","manila folder","document wallet","expandable file","accordion folder","file box",
    "paper clip","binder clip","bull clip","pushpin","thumbtack","map pin","rubber band","string","twine","yarn",
    "glue stick","liquid glue","white glue","wood glue","super glue","hot glue gun","tape dispenser","masking tape","duct tape",
    "cellophane tape","double-sided tape","washi tape","electrical tape","painters tape","scotch tape","correction tape","correction fluid","eraser pen","ink eraser",
    "pencil lead","graphite","charcoal","pastel","oil pastel","chalk pastel","watercolor","acrylic paint","tempera paint","paintbrush",
    "palette","canvas","sketchbook","drawing pad","tracing paper","stencil","stamp","ink pad","calligraphy pen","brush pen",
    "fountain pen","ballpoint pen","gel pen","rollerball pen","fineliner","marker set","colored pencils","watercolor pencils","charcoal pencils","mechanical pencil",
    "wooden pencil","graphite pencil","crayon box","chalk box","pencil grip","pencil cap","pencil extender","ruler set","geometry set","abacus",
    "counting chips","base ten blocks","fraction tiles","pattern blocks","geoboard"
  ],

  "Transport 🚗": [
    "car","bus","train","mrt","taxi","bicycle","motorcycle","scooter","truck","van",
    "airplane","helicopter","boat","ship","ferry","submarine","tram","cable car","rocket","ambulance",
    "fire engine","police car","tractor","skateboard","rollerblades","electric car","hybrid car","suv","sedan","hatchback",
    "convertible","limousine","minivan","pickup truck","box truck","semi-truck","dump truck","garbage truck","cement mixer","tow truck",
    "fire truck","police motorcycle","hearse","mail truck","delivery van","food truck","ice cream truck","double-decker bus","school bus","coach bus",
    "minibus","trolleybus","light rail","subway","metro","monorail","funicular","gondola","chairlift","ski lift",
    "escalator","elevator","moving walkway","segway","hoverboard","electric scooter","moped","dirt bike","cruiser motorcycle","sport bike",
    "touring motorcycle","chopper","sidecar","tuk-tuk","rickshaw","pedicab","horse carriage","stagecoach","wagon","cart",
    "wheelbarrow","sled","dog sled","reindeer sled","snowmobile","hovercraft","hydrofoil","catamaran","trimaran","sailboat",
    "yacht","speedboat","pontoon boat","houseboat","canoe","kayak","raft","inflatable boat","lifeboat","tugboat",
    "barge","cargo ship","container ship","oil tanker","bulk carrier","cruise ship","water taxi","vaporetto","junk","dhow",
    "felucca","outrigger canoe","war canoe","longboat","hot air balloon","blimp","zeppelin","glider","hang glider","paraglider",
    "paramotor","ultralight","biplane","seaplane","private jet","commercial airliner","cargo plane","fighter jet","bomber","gyrocopter",
    "drone","quadcopter","space shuttle"
  ],

  "Drinks 🥤": [
    "water","tea","coffee","milk","juice","soda","cola","lemonade","smoothie","milkshake",
    "hot chocolate","bubble tea","milo","horlicks","bandung","teh tarik","kopi","coconut water","orange juice","apple juice",
    "green tea","black tea","iced tea","sports drink","energy drink","sparkling water","still water","mineral water","spring water","distilled water",
    "tap water","filtered water","alkaline water","coconut milk","almond milk","soy milk","oat milk","rice milk","cashew milk","hemp milk",
    "whole milk","skim milk","low-fat milk","condensed milk","evaporated milk","powdered milk","buttermilk","kefir","yogurt drink","lassi",
    "mango lassi","banana smoothie","berry smoothie","green smoothie","protein shake","fruit punch","pineapple juice","grape juice","cranberry juice","pomegranate juice",
    "tomato juice","carrot juice","beetroot juice","wheatgrass juice","ginger tea","lemon tea","honey lemon","mint tea","chamomile tea","peppermint tea",
    "ginger ale","root beer","cream soda","ginger beer","tonic water","club soda","seltzer","espresso","americano","latte",
    "cappuccino","macchiato","mocha","flat white","cold brew","iced coffee","frappe","affogato","irish coffee","vietnamese coffee",
    "turkish coffee","greek coffee","cuban coffee","red eye","black eye","bulletproof coffee","matcha","hojicha","genmaicha","sencha",
    "oolong","pu-erh","darjeeling","assam","earl grey","english breakfast","chai","masala chai","thai tea","hong kong milk tea",
    "taiwanese milk tea","japanese milk tea","korean milk tea","indian filter coffee","malaysian kopi","singapore kopi"
  ],

  "Desserts 🍰": [
    "cake","cookie","brownie","ice cream","gelato","sorbet","pudding","custard","jelly","tart",
    "pie","donut","muffin","cupcake","macaron","eclair","cheesecake","tiramisu","churros","waffle",
    "pancake","crepe","mochi","kueh","chendol","ice kachang","apple pie","pumpkin pie","pecan pie","key lime pie",
    "lemon meringue pie","banana cream pie","chocolate mousse","vanilla mousse","raspberry mousse","panna cotta","creme brulee","creme caramel","flan","custard tart",
    "egg tart","portuguese egg tart","pastel de nata","baklava","kunefe","halva","lokum","gulab jamun","jalebi","ras malai",
    "kheer","payasam","mango sticky rice","biko","leche flan","halo-halo","taho","bibingka","puto","kutsinta",
    "mochi ice cream","daifuku","dorayaki","taiyaki","melon pan","anpan","castella","cotton cheesecake","basque cheesecake","new york cheesecake",
    "chocolate cheesecake","strawberry cheesecake","blueberry cheesecake","matcha cheesecake","red velvet cake","carrot cake","black forest cake","opera cake","cannoli","sfogliatelle",
    "zeppole","bombolone","semifreddo","torta caprese","torta della nonna","sachertorte","strudel","stollen","panettone","fruitcake",
    "gingerbread","shortbread","biscotti","amaretti","macaroon","meringue","pavlova","eton mess","trifle","knickerbocker glory",
    "banana split","sundae","root beer float","ice cream cone","ice cream sandwich","granita","slushie","snow cone","shaved ice","bingsu",
    "patbingsu"
  ],

  "Furniture 🪑": [
    "chair","table","desk","sofa","bed","mattress","pillow","blanket","wardrobe","cabinet",
    "shelf","bookshelf","drawer","stool","bench","couch","armchair","lamp","mirror","rug",
    "carpet","curtain","fan","air conditioner","heater","dresser","chest of drawers","nightstand","bedside table","coffee table",
    "side table","console table","dining table","kitchen table","picnic table","folding table","card table","vanity","makeup table","writing desk",
    "computer desk","standing desk","office chair","gaming chair","bean bag","futon","bunk bed","loft bed","canopy bed","four-poster bed",
    "daybed","murphy bed","sofa bed","sectional sofa","loveseat","recliner","rocking chair","wingback chair","accent chair","dining chair",
    "bar stool","counter stool","swivel chair","ottoman","pouffe","footstool","chaise lounge","storage bench","shoe rack","coat rack",
    "hat stand","umbrella stand","bookcase","shelving unit","wall shelf","floating shelf","corner shelf","ladder shelf","cube organizer","tv stand",
    "media console","entertainment center","sideboard","buffet","china cabinet","hutch","display cabinet","curio cabinet","file cabinet","armoire",
    "closet","walk-in closet","linen closet","coat closet","pantry","cupboard","kitchen island","bar cart","high chair","booster seat",
    "crib","cradle","bassinet","changing table","toddler bed","playpen","baby gate","rocking horse","desk lamp","floor lamp",
    "table lamp","chandelier","pendant light","ceiling fan","wall sconce","night light","string lights","lava lamp","room divider","folding screen",
    "partition","full-length mirror","vanity mirror","wall mirror","floor mirror","medicine cabinet","jewelry box"
  ],

  "Electronic Devices 📱": [
    "phone","smartphone","tablet","laptop","computer","desktop","monitor","keyboard","mouse","printer",
    "scanner","camera","speaker","headphones","earphones","microphone","television","radio","charger","cable",
    "powerbank","router","smartwatch","drone","smart tv","oled tv","led tv","qled tv","projector","home theater",
    "soundbar","subwoofer","amplifier","receiver","turntable","record player","cd player","dvd player","blu-ray player","vcr",
    "game console","playstation","xbox","nintendo switch","handheld console","vr headset","ar glasses","smart glasses","fitness tracker","activity tracker",
    "e-reader","kindle","digital camera","dslr","mirrorless camera","action camera","gopro","camcorder","webcam","security camera",
    "dashcam","doorbell camera","baby monitor","gps device","car navigation","radar detector","walkie-talkie","two-way radio","ham radio","cb radio",
    "fax machine","copier","multifunction printer","label maker","barcode scanner","card reader","pos terminal","cash register","scientific calculator","graphing calculator",
    "digital clock","alarm clock","wall clock","smart clock","weather station","thermostat","smart thermostat","smoke detector","carbon monoxide detector","motion sensor",
    "door sensor","window sensor","smart lock","smart bulb","smart plug","smart switch","smart speaker","voice assistant","home hub","mesh wifi system",
    "wifi extender","network switch","modem","firewall","nas drive","external hard drive","usb flash drive","memory card","ssd","ram",
    "cpu","gpu","motherboard","power supply","cooling fan","heat sink","laptop stand","docking station","usb hub","stylus",
    "digital pen","graphics tablet","drawing tablet","3d printer","3d scanner","laser engraver","cnc machine","robot vacuum","robot mop"
  ],

  "Kitchen Items 🍳": [
    "pan","pot","wok","spatula","ladle","knife","fork","spoon","chopsticks","plate",
    "bowl","cup","mug","glass","cutting board","grater","peeler","whisk","tongs","strainer",
    "colander","kettle","toaster","oven","microwave","blender","rice cooker","frying pan","saucepan","stockpot",
    "dutch oven","pressure cooker","slow cooker","air fryer","deep fryer","griddle","grill pan","roasting pan","baking sheet","muffin tin",
    "cake pan","pie dish","casserole dish","mixing bowl","measuring cup","measuring spoons","kitchen scale","thermometer","timer","oven mitt",
    "pot holder","apron","chef knife","paring knife","bread knife","cleaver","fillet knife","kitchen shears","sharpening steel","knife block",
    "magnetic knife strip","butcher block","pastry board","rolling pin","pastry brush","dough scraper","bench scraper","piping bag","piping tip","cookie cutter",
    "cookie scoop","ice cream scoop","melon baller","zester","microplane","citrus squeezer","juicer","immersion blender","food processor","stand mixer",
    "hand mixer","mortar and pestle","spice grinder","coffee grinder","coffee maker","espresso machine","french press","moka pot","pour-over dripper","tea infuser",
    "teapot","electric kettle","thermos","vacuum flask","water filter","water dispenser","ice maker","dish rack","dish drainer","sink",
    "faucet","soap dispenser","sponge holder","scrub brush","bottle brush","dish towel","paper towel holder","trash can","compost bin","recycling bin",
    "food storage container","tupperware","ziplock bag","aluminum foil","plastic wrap","parchment paper","wax paper","skewers","toothpicks","clothespins",
    "chip clips","bag clips","funnel","sieve","salad spinner","mandoline","ricer","potato masher","garlic press","egg slicer",
    "egg separator","poached egg pan","omelette pan","crepe pan","tamagoyaki pan","takoyaki pan"
  ],

  "Bathroom Items 🚿": [
    "toothbrush","toothpaste","soap","shampoo","conditioner","towel","comb","brush","mirror","razor",
    "tissue","toilet paper","sink","bathtub","shower","faucet","drain","sponge","loofah","nail clipper",
    "hand soap","body wash","face wash","cleanser","toner","moisturizer","sunscreen","deodorant","antiperspirant","perfume",
    "cologne","body lotion","hand cream","foot cream","lip balm","shaving cream","aftershave","shaving brush","razor blades","electric shaver",
    "hair dryer","hair straightener","curling iron","hairbrush","wide-tooth comb","detangling brush","round brush","paddle brush","hair clips","hair ties",
    "bobby pins","headband","shower cap","bathrobe","slippers","bath mat","shower curtain","shower liner","shower rod","shower caddy",
    "soap dish","soap dispenser","toothbrush holder","tumbler","towel rack","towel bar","towel ring","hook","hamper","laundry basket",
    "scale","bathroom scale","medicine cabinet","first aid kit","band-aids","gauze","antiseptic","hydrogen peroxide","rubbing alcohol","cotton balls",
    "cotton swabs","q-tips","tweezers","scissors","nail file","nail buffer","nail polish","nail polish remover","makeup remover","facial tissues",
    "flushable wipes","wet wipes","air freshener","room spray","candle","diffuser","essential oils","humidifier","dehumidifier","exhaust fan",
    "space heater","towel warmer","bidet","toilet brush","plunger","toilet seat","toilet lid","plumbing snake","drain cleaner","bucket",
    "mop","broom","dustpan","trash can","trash bags","laundry detergent"
  ],

  "Toys & Games 🎮": [
    "lego","puzzle","doll","teddy bear","action figure","board game","card game","chess","checkers","dominoes",
    "yo-yo","kite","ball","balloon","marbles","spinning top","toy car","toy train","playstation","nintendo switch",
    "xbox","rubik's cube","jigsaw puzzle","crossword puzzle","sudoku","word search","hangman","tic-tac-toe","connect four","battleship",
    "monopoly","scrabble","clue","sorry","trouble","candy land","chutes and ladders","risk","stratego","othello",
    "backgammon","go","mahjong","poker","blackjack","rummy","bridge","solitaire","uno","crazy eights",
    "old maid","go fish","war","snap","memory","bingo","lottery","raffle","dice","d20",
    "d12","d10","d8","d6","d4","miniature figures","warhammer","dungeons & dragons","pathfinder","magic the gathering",
    "pokemon cards","yugioh cards","sports cards","trading cards","collectible card game","toy soldiers","model cars","model planes","model trains","remote control car",
    "remote control boat","remote control helicopter","robot toy","transformer","barbie","bratz","american girl doll","baby doll","rag doll","puppet",
    "marionette","hand puppet","finger puppet","stuffed animal","plushie","beanie baby","squishmallow","funko pop","vinyl figure","superhero figure",
    "star wars figure","gi joe","hot wheels","matchbox","play-doh","kinetic sand","slime","putty","bubbles","bubble wand",
    "bubble machine","sidewalk chalk","jump rope","hula hoop","frisbee","boomerang","kendama","diabolo","juggling balls","juggling clubs",
    "spinning plates","unicycle","pogo stick","stilts","roller skates","rollerblades","hoverboard","ripstik","waveboard","snakeboard",
    "caster board","balance board"
  ],

  "Flowers 🌸": [
    "rose","tulip","sunflower","daisy","lily","orchid","lavender","jasmine","lotus","hibiscus",
    "peony","daffodil","carnation","chrysanthemum","dahlia","hydrangea","magnolia","marigold","pansy","poppy",
    "bluebell","iris","azalea","begonia","bougainvillea","camellia","clematis","columbine","cosmos","crocus",
    "cyclamen","delphinium","freesia","gardenia","geranium","gladiolus","hollyhock","hyacinth","impatiens","larkspur",
    "lilac","lily of the valley","lobelia","lupine","mimosa","morning glory","nasturtium","nemesia","osteospermum","petunia",
    "phlox","primrose","ranunculus","rhododendron","snapdragon","snowdrop","statice","stock","sweet pea","verbena",
    "violet","wisteria","zinnia","amaryllis","anemone","aster","bellflower","bird of paradise","black-eyed susan","bleeding heart",
    "belladonna","buttercup","calla lily","canna lily","cherry blossom","clover","cornflower","dandelion","edelweiss","foxglove",
    "fuchsia","gazania","gentian","gerbera","heather","heliotrope","ice plant","jade vine","kangaroo paw","lantana",
    "moonflower","narcissus","oleander","passionflower","periwinkle","plumeria","poinsettia"
  ],

  "Trees & Plants 🌳": [
    "oak","pine","maple","willow","birch","palm","bamboo","baobab","redwood","cedar",
    "fir","cypress","eucalyptus","mango tree","banana tree","coconut tree","rubber tree","olive tree","cherry blossom","bonsai",
    "ash","aspen","beech","black walnut","chestnut","dogwood","elm","ginkgo","hawthorn","hickory",
    "hornbeam","horse chestnut","juniper","larch","linden","magnolia","mulberry","pecan","poplar","redbud",
    "sequoia","spruce","sycamore","walnut","yew","acacia","alder","almond","apple tree","apricot tree",
    "avocado tree","banyan","boxwood","buckeye","butternut","cacao tree","cashew tree","catalpa","cherry tree","cinnamon tree",
    "citrus tree","clove tree","coffee tree","cottonwood","date palm","ebony","elderberry","fig tree","grape vine","grapefruit tree",
    "guava tree","hazel","hemlock","holly","honeylocust","ironwood","jacaranda","kapok","katsura","lemon tree",
    "lime tree","locust","mahogany","marula","mesquite","myrtle","neem","nutmeg tree","orange tree","orchid tree",
    "papaya tree","peach tree","pear tree","persimmon","pistachio","plane tree","plum tree","pomegranate tree","sassafras","teak",
    "zebrawood"
  ],

  "Sea Creatures 🐠": [
    "fish","shark","whale","dolphin","octopus","squid","crab","lobster","shrimp","prawn",
    "jellyfish","starfish","seahorse","sea turtle","seal","walrus","manatee","stingray","eel","clam",
    "oyster","mussel","coral","anemone","sea urchin","sea cucumber","sea slug","nudibranch","barnacle","krill",
    "plankton","copepod","amphipod","isopod","cuttlefish","nautilus","chambered nautilus","argonaut","sea snail","conch",
    "whelk","limpet","abalone","scallop","geoduck","razor clam","soft-shell clam","hard clam","quahog","surf clam",
    "king crab","snow crab","blue crab","fiddler crab","hermit crab","horseshoe crab","spider crab","decorator crab","coconut crab","yetI crab",
    "mantis shrimp","pistol shrimp","cleaner shrimp","brine shrimp","opossum shrimp","fairy shrimp","tadpole shrimp","clam shrimp","seed shrimp","manta ray",
    "eagle ray","electric ray","sawfish","skate","chimaera","ratfish","coelacanth","lungfish","salmon","trout",
    "tuna","mackerel","sardine","anchovy","herring","cod","haddock","halibut","flounder","sole",
    "turbot","plaice","sea bass","grouper","snapper","barracuda","marlin","swordfish","sailfish","mahi-mahi",
    "wahoo","bonito","albacore","bluefin tuna","yellowfin tuna","skipjack tuna","bigeye tuna","pufferfish","porcupinefish","boxfish",
    "cowfish","triggerfish","clownfish","angelfish","butterflyfish","surgeonfish","tang","parrotfish","wrasse","goby",
    "blenny","damselfish","cardinalfish","pipefish","seadragon","leafy seadragon","weedy seadragon","moray eel","conger eel","electric eel",
    "wolf eel","gulper eel","snipe eel","pelican eel","spiny eel","ribbon eel","garden eel"
  ],

  "Space 🚀": [
    "sun","moon","star","planet","earth","mars","jupiter","saturn","venus","mercury",
    "neptune","uranus","pluto","asteroid","comet","meteor","galaxy","milky way","black hole","supernova",
    "nebula","cosmos","orbit","rocket","astronaut","space shuttle","space station","satellite","probe","rover",
    "lander","orbiter","telescope","observatory","planetarium","constellation","zodiac","big dipper","orion","pleiades",
    "andromeda","triangulum","sombrero galaxy","whirlpool galaxy","pinwheel galaxy","cigar galaxy","magellanic clouds","orion nebula","crab nebula","eagle nebula",
    "horsehead nebula","ring nebula","dumbbell nebula","cats eye nebula","helix nebula","carina nebula","pillars of creation","interstellar medium","cosmic microwave background","dark matter",
    "dark energy","event horizon","singularity","wormhole","white hole","quasar","pulsar","magnetar","neutron star","white dwarf",
    "red giant","blue giant","supergiant","main sequence","red dwarf","brown dwarf","binary star","star cluster","globular cluster","open cluster",
    "solar wind","solar flare","coronal mass ejection","sunspot","prominence","photosphere","chromosphere","corona","heliosphere","heliopause",
    "aurora","aurora borealis","aurora australis","meteor shower","meteorite","meteoroid","bolide","fireball","shooting star","falling star",
    "space debris","space junk","kessler syndrome","geostationary orbit","low earth orbit","polar orbit","transfer orbit","escape velocity","gravity assist","slingshot effect",
    "lagrange point","hohmann transfer","ion drive","solar sail","nuclear thermal propulsion","warp drive","antimatter","exoplanet","habitable zone","goldilocks zone",
    "seti","fermi paradox","drake equation","great filter","multiverse","parallel universe","string theory","quantum gravity","general relativity","special relativity",
    "light year","astronomical unit","parsec","redshift","blueshift","cosmic distance ladder","standard candle","cepheid variable","type ia supernova","hubble constant"
  ],

  "Hobbies 🎨": [
    "drawing","painting","singing","dancing","reading","writing","cooking","baking","gardening","photography",
    "travelling","hiking","fishing","swimming","cycling","gaming","collecting","knitting","sewing","woodworking",
    "pottery","calligraphy","scrapbooking","journaling","blogging","vlogging","podcasting","streaming","coding","web design",
    "graphic design","3d modeling","3d printing","animation","video editing","music production","dj-ing","playing guitar","playing piano","playing drums",
    "learning languages","birdwatching","stargazing","astronomy","rock collecting","fossil hunting","metal detecting","geocaching","orienteering","archery",
    "shooting","hunting","camping","backpacking","canoeing","kayaking","rafting","sailing","surfing","windsurfing",
    "kitesurfing","paddleboarding","snorkeling","scuba diving","free diving","skiing","snowboarding","sledding","ice skating","roller skating",
    "skateboarding","bmx","mountain biking","road cycling","running","jogging","marathon running","triathlon","yoga","pilates",
    "meditation","mindfulness","tai chi","qigong","martial arts","boxing","wrestling","fencing","gymnastics","cheerleading",
    "chess","checkers","go","backgammon","poker","bridge","mahjong","board games","card games","role-playing games",
    "model building","model trains","model airplanes","remote control cars","drones","kite flying","boomerang","juggling","magic tricks","puppetry",
    "acting","theatre","improv","stand-up comedy","public speaking","debate","mooting","creative writing","poetry","songwriting",
    "composing","arranging","conducting","orchestra","band","choir","barbershop","a cappella","beatboxing","rapping",
    "beekeeping","chicken raising","aquarium keeping","terrarium building","bonsai","orchid growing","succulent growing","herb gardening","vegetable gardening","composting"
  ],

  "Movies 🎬": [
    "titanic","avatar","inception","interstellar","joker","frozen","moana","encanto","coco","up",
    "finding nemo","toy story","lion king","harry potter","star wars","lord of the rings","matrix","jurassic park","spider-man","iron man",
    "the avengers","black panther","captain america","thor","guardians of the galaxy","ant-man","doctor strange","captain marvel","black widow","eternals",
    "shang-chi","deadpool","wolverine","x-men","fantastic four","batman","superman","wonder woman","aquaman","flash",
    "justice league","suicide squad","the dark knight","batman begins","the dark knight rises","man of steel","batman v superman","the batman","spider-man: no way home","spider-man: far from home",
    "spider-man: homecoming","the amazing spider-man","spider-man 3","spider-man 2","into the spider-verse","across the spider-verse","venom","iron man 2","iron man 3","thor: ragnarok",
    "thor: the dark world","captain america: the winter soldier","captain america: civil war","avengers: infinity war","avengers: endgame","avengers: age of ultron","black panther: wakanda forever","star wars: a new hope","star wars: the empire strikes back","star wars: return of the jedi",
    "star wars: the phantom menace","star wars: attack of the clones","star wars: revenge of the sith","star wars: the force awakens","star wars: the last jedi","star wars: the rise of skywalker","rogue one","harry potter and the sorcerer's stone","harry potter and the chamber of secrets","harry potter and the prisoner of azkaban",
    "harry potter and the goblet of fire","harry potter and the order of the phoenix","harry potter and the half-blood prince","harry potter and the deathly hallows part 1","harry potter and the deathly hallows part 2","fantastic beasts and where to find them","fantastic beasts: the crimes of grindelwald","the lord of the rings: the fellowship of the ring","the lord of the rings: the two towers","the lord of the rings: the return of the king",
    "the hobbit: an unexpected journey","the hobbit: the desolation of smaug","the hobbit: the battle of the five armies","the matrix reloaded","the matrix revolutions","the matrix resurrections","the lost world: jurassic park","jurassic park iii","jurassic world","jurassic world: fallen kingdom",
    "jurassic world dominion","indiana jones and the raiders of the lost ark","indiana jones and the temple of doom","indiana jones and the last crusade","indiana jones and the kingdom of the crystal skull","back to the future","back to the future part ii","back to the future part iii","the terminator","terminator 2: judgment day",
    "terminator 3: rise of the machines","terminator salvation","terminator genisys","terminator: dark fate","alien","aliens","alien 3","alien resurrection","prometheus","alien: covenant",
    "predator","predator 2","predators","the predator","prey","die hard","die hard 2","die hard with a vengeance","live free or die hard","a good day to die hard",
    "lethal weapon","lethal weapon 2","lethal weapon 3","lethal weapon 4","rush hour","rush hour 2","rush hour 3","the fast and the furious","2 fast 2 furious","tokyo drift",
    "fast & furious","fast five","fast & furious 6","furious 7","the fate of the furious","f9","fast x","mission: impossible","mission: impossible 2","mission: impossible iii",
    "mission: impossible - ghost protocol","mission: impossible - rogue nation","mission: impossible - fallout","mission: impossible - dead reckoning","top gun","top gun: maverick","pirates of the caribbean: the curse of the black pearl","pirates of the caribbean: dead man's chest","pirates of the caribbean: at world's end","pirates of the caribbean: on stranger tides",
    "pirates of the caribbean: dead men tell no tales","transformers","transformers: revenge of the fallen","transformers: dark of the moon","transformers: age of extinction"
  ],

  "Famous Singers 🎤": [
    "taylor swift","adele","ed sheeran","beyonce","rihanna","bruno mars","billie eilish","drake","justin bieber","ariana grande",
    "the weeknd","post malone","dua lipa","olivia rodrigo","harry styles","bts","blackpink","twice","stray kids","seventeen",
    "lady gaga","katy perry","madonna","michael jackson","elvis presley","prince","david bowie","freddie mercury","john lennon","paul mccartney",
    "bob dylan","bruce springsteen","elton john","stevie wonder","aretha franklin","whitney houston","mariah carey","celine dion","shakira","jennifer lopez",
    "britney spears","christina aguilera","alicia keys","john legend","sam smith","charlie puth","shawn mendes","camila cabello","halsey","doja cat",
    "megan thee stallion","cardi b","nicki minaj","lizzo","sza","frank ocean","kendrick lamar","j cole","travis scott","asap rocky",
    "kanye west","jay-z","eminem","50 cent","snoop dogg","drdre","tupac","notorious b.i.g.","nas","lil wayne",
    "daddy yankee","bad bunny","j balvin","maluma","ozuna","karol g","rosalia","enrique iglesias","ricky martin","marc anthony",
    "celia cruz","tito puente","carlos santana","gloria estefan","julio iglesias","juanes","juan gabriel","luis miguel","thalia","psy",
    "rain","boa","taeyang","gdragon","cl","iu","taeyeon","jennie","lisa","rose",
    "jisoo","jimin","jungkook","v","rm","jin","suga","jhope","hoshi"
  ],

  "K-pop Groups 🎶": [
    "bts","blackpink","twice","exo","red velvet","got7","stray kids","seventeen","nct","itzy",
    "aespa","enhypen","txt","ateez","monsta x","mamamoo","girls generation","super junior","shinee","ikon",
    "winner","vixx","btob","highlight","infinite","teen top","boyfriend","b1a4","block b","bap",
    "cnblue","ftisland","day6","the rose","lucy","jannabi","hyukoh","standing egg","10cm","bolbbalgan4",
    "akmu","bol4","primary","zion.t","crush","dean","heize","chungha","sunmi","hyuna",
    "yerin baek","baekhyun","kai","taemin","key","minho"
  ],

  "Fast Food 🍔": [
    "mcdonald's","kfc","burger king","subway","pizza hut","domino's","wendy's","taco bell","popeyes","jollibee",
    "five guys","shake shack","long john silver's","a&w","mos burger","texas chicken","arnold's chicken","church's chicken","slim chickens","zaxby's",
    "raising cane's","culver's","in-n-out","whataburger","sonic","dairy queen","hardee's","carl's jr","jack in the box","del taco",
    "chipotle","qdoba","moe's southwest grill","panera bread","quiznos","jersey mike's","firehouse subs","potbelly","which wich","papa john's",
    "little caesars","papa murphy's","cicis","godfather's pizza","round table pizza","mellow mushroom","mod pizza","blaze pizza","pieology","starbucks",
    "dunkin'","tim hortons","krispy kreme","peet's coffee","caribou coffee","costa coffee","caffe nero","pret a manger","greggs","waffle house",
    "ihop","denny's","village inn","perkins","bob evans","cracker barrel","applebee's","chili's","tgi friday's","olive garden",
    "red lobster","outback steakhouse","texas roadhouse","longhorn steakhouse","red robin","ruby tuesday","buffalo wild wings","hooters","twin peaks","panda express",
    "peking express","manchu wok","lee's sandwiches","pho 24","pho hoa","saigon cafe","banh mi shop","dim sum express","yoshinoya","sukiya",
    "matsuya","coco ichibanya","pepper lunch","marugame udon","tempura tendon","sushi express","genki sushi","sushiro","kura sushi"
  ],

  "Superheroes 🦸": [
    "superman","batman","spider-man","iron man","captain america","thor","hulk","black widow","hawkeye","wonder woman",
    "flash","aquaman","green lantern","black panther","doctor strange","ant-man","wolverine","deadpool","captain marvel","shazam",
    "cyborg","martian manhunter","green arrow","hawkgirl","hawkman","black canary","zatanna","constantine","swamp thing","animal man",
    "nightwing","robin","batgirl","batwoman","red hood","red robin","spoiler","orphan","batwing","signal",
    "supergirl","superboy","power girl","krypto","bizarro","general zod","doomsday","darkseid","lex luthor","joker",
    "harley quinn","catwoman","penguin","riddler","two-face","scarecrow","bane","poison ivy","mr. freeze","clayface",
    "man-bat","killer croc","deadshot","deathstroke","ras al ghul","talia al ghul","loki","hela","thanos","ultron",
    "red skull","baron zemo","green goblin","doctor octopus","sandman","electro","venom","carnage","rhino","lizard",
    "mysterio","vulture","kingpin","bullseye","taskmaster","modok","magneto","mystique","sabretooth","juggernaut",
    "apocalypse","sinister","sentinel","phoenix","dark phoenix","galactus","silver surfer","nova","quasar","adam warlock",
    "captain britain","union jack","black knight","she-hulk","red hulk","a-bomb","spider-woman","spider-gwen","spider-ham","miles morales",
    "spider-man 2099","spider-man noir","iron spider","cosmic spider-man","superior spider-man","doctor fate","spectre","phantom stranger","deadman","etrigan",
    "blue beetle","booster gold","firestorm","static shock","black lightning","vixen","bumblebee","starfire","raven","beast boy",
    "terra","jinx"
  ],

  "Video Games 🎮": [
    "minecraft","roblox","fortnite","among us","genshin impact","valorant","league of legends","overwatch","pubg","call of duty",
    "fifa","mario","zelda","pokemon","animal crossing","stardew valley","terraria","hollow knight","celeste","hades",
    "the legend of zelda: breath of the wild","the legend of zelda: tears of the kingdom","super mario odyssey","super mario bros","mario kart","super smash bros","pokemon sword","pokemon shield","pokemon scarlet","pokemon violet",
    "animal crossing: new horizons","harvest moon","story of seasons","starbound","no man's sky","subnautica","the forest","raft","elden ring","dark souls",
    "bloodborne","sekiro","demon's souls","nier automata","nier replicant","final fantasy","kingdom hearts","persona 5","persona 4","persona 3",
    "shin megami tensei","dragon quest","chrono trigger","chrono cross","secret of mana","earthbound","mother 3","undertale","deltarune","ori and the blind forest",
    "ori and the will of the wisps","super meat boy","cuphead","shovel knight","dead cells","bastion","transistor","pyre","disco elysium","divinity original sin",
    "baldur's gate","baldur's gate 3","neverwinter nights","pathfinder","pillars of eternity","mass effect","dragon age","fallout","the elder scrolls","skyrim",
    "oblivion","morrowind","witcher","cyberpunk 2077","deus ex","bioshock","system shock","prey","dishonored","deathloop",
    "half-life","portal","left 4 dead","team fortress","counter-strike","apex legends","battlefield","medal of honor","halo","gears of war",
    "destiny","the division","rainbow six","ghost recon","splinter cell","metal gear solid","death stranding","resident evil","silent hill","outlast",
    "amnesia","layers of fear","phasmophobia","dead by daylight","friday the 13th","texas chain saw massacre","five nights at freddy's","poppy playtime","granny","bendy and the ink machine",
    "gta","red dead redemption","mafia","saints row","watch dogs","just cause","sleeping dogs","bully","la noire","max payne"
  ],

  "Cartoon Characters 🎨": [
    "mickey mouse","donald duck","goofy","pluto","minnie mouse","bugs bunny","daffy duck","tom","jerry","scooby doo",
    "spongebob","patrick","pikachu","hello kitty","kuromi","my melody","cinnamoroll","pochacco","stitch","lilo",
    "woody","buzz lightyear","jessie","rex","hamm","slinky dog","mr. potato head","barbie","ken","elsa",
    "anna","olaf","kristoff","sven","moana","maui","simba","nala","mufasa","scar",
    "timon","pumbaa","rafiki","zazu","aladdin","jasmine","genie","jafar","ariel","flounder",
    "sebastian","ursula","belle","beast","gaston","lumiere","cogsworth","mrs. potts","chip","hercules",
    "megara","hades","zeus","philoctetes","pegasus","tarzan","jane","terk","tantor","clayton",
    "mulan","mushu","shang","shan yu","pocahontas","john smith","meeko","flit","john rolfe","ratcliffe",
    "rapunzel","flynn rider","pascal","maximus","mother gothel","merida","elinor","fergus","hamish","hubert",
    "harris","te fiti","te ka","hehei","pua","tui","sina","tamatoa"
  ],

  "Singapore Places 🇸🇬": [
    "orchard road","marina bay sands","sentosa","botanic gardens","merlion","gardens by the bay","chinatown","little india","kampong glam","clarke quay",
    "bugis","jurong east","tampines","woodlands","yishun","punggol","sengkang","bedok","ang mo kio","toa payoh",
    "novena","dhoby ghaut","somerset","city hall","raffles place","tanjong pagar","harbourfront","vivo city","resorts world sentosa","universal studios singapore",
    "s.e.a. aquarium","adventure cove waterpark","dolphin island","palawan beach","siloso beach","tanjong beach","fort siloso","skyline luge","megazip","singapore flyer",
    "esplanade","helix bridge","art science museum","supertree grove","cloud forest","flower dome","ocbc skyway","marina barrage","national gallery singapore","national museum of singapore",
    "peranakan museum","asian civilizations museum","singapore art museum","science centre","omni theatre","snow city","jurong bird park","singapore zoo","river wonders","night safari",
    "mandai wildlife reserve","lee kong chian natural history museum","fort canning park","istana park","hong lim park","speakers' corner","merlion park","robertson quay","boat quay","lazarus island",
    "st john's island","kusu island","pulau ubin","chek jawa","sungei buloh wetland reserve","macritchie reservoir","bukit timah nature reserve","southern ridges","henderson waves","mount faber",
    "telok blangah hill park","labrador nature reserve","berlayer creek","keppel harbour","marina south pier","east coast park","changi beach","pasir ris park","punggol waterfront","sengkang riverside park",
    "lower peirce reservoir","upper peirce reservoir","seletar reservoir","kranji reservoir","tampines eco green","bishan-ang mo kio park"
  ],

  "School Subjects 📚": [
    "english","chinese","math","science","physics","chemistry","biology","history","geography","social studies",
    "art","music","pe","computing","literature","economics","accounting","business","design","drama",
    "malay","tamil","higher chinese","additional math","elementary math","combined science","pure physics","pure chemistry","pure biology","integrated science",
    "humanities","civics","moral education","national education","physical education","health education","art and design","dance","media studies","film studies",
    "photography","computer science","information technology","design and technology","food and consumer education","principles of accounts","business studies","commerce","entrepreneurship","marketing",
    "management","finance","law","psychology","sociology","anthropology","philosophy","ethics","religious studies","theology",
    "political science","international relations","public policy","urban studies","environmental science","marine biology","astronomy","astrophysics","geology","meteorology",
    "oceanography","botany","zoology","genetics","biochemistry","microbiology","immunology","neuroscience","pharmacology","nursing",
    "medicine","dentistry","veterinary science","physiotherapy","occupational therapy","speech therapy","nutrition","dietetics","sports science","exercise science",
    "kinesiology","biomechanics","sports management","hospitality","tourism","culinary arts","bakery","pastry","barista","mixology",
    "fashion design","textile design","interior design","architecture"
  ],

  "Things in a Bedroom 🛏️": [
    "bed","pillow","blanket","mattress","lamp","alarm clock","mirror","wardrobe","drawer","poster",
    "fan","aircon","window","curtain","rug","slippers","phone","charger","book","tissue",
    "bed frame","headboard","footboard","bed skirt","bed sheet","fitted sheet","flat sheet","duvet","duvet cover","comforter",
    "quilt","throw blanket","electric blanket","heating pad","mattress protector","mattress topper","pillowcase","pillow cover","body pillow","throw pillow",
    "nightstand","bedside table","dresser","chest of drawers","vanity","vanity mirror","stool","chair","desk","desk lamp",
    "bookcase","bookshelf","shelf","floating shelf","wall shelf","toy box","storage bin","storage basket","laundry basket","hamper",
    "closet","armoire","hanging rack","shoe rack","coat rack","hook","hanger","clothes pin","lint roller","ceiling fan",
    "standing fan","tower fan","air purifier","humidifier","dehumidifier","heater","thermostat","thermometer","clock","wall clock",
    "digital clock","table clock","night light","string lights","fairy lights","lava lamp","floor lamp","reading lamp","sconce","tv",
    "television","remote control","speaker","radio","headphones","earbuds","power strip","extension cord","computer","laptop",
    "tablet","smartwatch","game console","controller","vr headset","camera","tripod","painting","picture frame","wall art",
    "tapestry","map","bulletin board","corkboard","whiteboard","plant","succulent","flower vase","candle","incense holder",
    "diffuser","essential oils","air freshener","trash can","recycling bin","vacuum cleaner","broom","dustpan","mop","bucket",
    "duster","cleaning cloth","glass cleaner","disinfectant wipes","socks","pajamas","robe","eye mask","earplugs","sleep mask",
    "white noise machine","sound machine","weighted blanket"
  ],

  "Morning Routine ☀️": [
    "wake up","brush teeth","wash face","shower","get dressed","eat breakfast","drink coffee","pack bag","wear shoes","comb hair",
    "check phone","leave house","take bus","walk to school","arrive at school","snooze alarm","stretch","yawn","open curtains","make bed",
    "fold blanket","fluff pillow","turn off alarm","sit up","stand up","go to bathroom","use toilet","flush","wash hands","dry hands",
    "apply toothpaste","rinse mouth","gargle","floss","use mouthwash","apply face wash","rinse face","pat dry","apply moisturizer","apply sunscreen",
    "apply deodorant","brush hair","tie hair","put on underwear","put on socks","put on shirt","put on pants","put on skirt","put on dress","put on shoes",
    "tie shoelaces","zip zipper","button buttons","buckle belt","put on watch","put on glasses","put on jewelry","pack wallet","pack keys","pack phone",
    "check wallet","check keys","check phone","check bag","grab umbrella","grab jacket","grab water bottle","grab snack","feed pet","walk dog",
    "water plants","make coffee","make tea","pour cereal","add milk","toast bread","spread butter","spread jam","fry egg","boil egg",
    "scramble egg","cook oatmeal","cut fruit","eat breakfast","drink juice","take vitamins","take medicine","wash dishes","wipe table","sweep floor",
    "take out trash","recycling","check email","read news","scroll social media","reply messages","make lunch","pack lunch","fill water bottle","put on backpack",
    "lock door","set alarm","turn off lights","leave house","lock gate","walk to bus stop","wait for bus","board bus","tap card","find seat",
    "listen to music","read book","study notes","review schedule","arrive at destination","get off bus","walk to school","enter school","go to locker","go to classroom"
  ]

};

window.TOPICS = TOPICS;