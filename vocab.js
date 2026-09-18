/* ═══════════════════════════════════════════
   词库文件
   ═══════════════════════════════════════════

   - 加词：直接往对应数组里加 "新词"
   - 每个词后面都有逗号（包括最后一个，现代 JS 也支持）
   - 换行、缩进、空格都不影响
   - 华文词语里的每个词必须是 2 个汉字，否则 AI 会判自己错
*/

const TOPICS = {

  "Animals 🐾": [
    "dog","cat","elephant","tiger","lion","bear","wolf","fox","deer","rabbit",
    "horse","cow","sheep","goat","pig","duck","chicken","bird","eagle","owl",
    "snake","frog","fish","shark","whale","dolphin","monkey","gorilla","panda","koala",
    "kangaroo","giraffe","zebra","rhino","hippo","crocodile","turtle","penguin","seal","otter",
    "squirrel","mouse","rat","bat","bee","ant","butterfly","spider","crab","octopus"
  ],

  "Countries 🌍": [
    "singapore","japan","china","korea","malaysia","indonesia","thailand","vietnam","philippines","india",
    "australia","new zealand","canada","united states","mexico","brazil","argentina","chile","peru","france",
    "germany","italy","spain","portugal","netherlands","belgium","switzerland","austria","sweden","norway",
    "denmark","finland","poland","russia","turkey","egypt","south africa","kenya","nigeria","morocco",
    "saudi arabia","uae","israel","greece","ireland","iceland","cuba","jamaica"
  ],

  "Fruits 🍎": [
    "apple","banana","orange","mango","grape","strawberry","blueberry","raspberry","watermelon","papaya",
    "pineapple","kiwi","peach","pear","plum","cherry","lemon","lime","coconut","durian",
    "lychee","rambutan","mangosteen","dragon fruit","pomegranate","fig","apricot","avocado","guava","starfruit",
    "tangerine","grapefruit","melon","honeydew","cranberry","blackberry","gooseberry","date","olive","tomato"
  ],

  "Colors 🎨": [
    "red","orange","yellow","green","blue","purple","pink","brown","black","white",
    "grey","gold","silver","bronze","beige","maroon","navy","teal","turquoise","cyan",
    "magenta","violet","indigo","lavender","peach","coral","salmon","crimson","scarlet","amber",
    "emerald","jade","ruby","sapphire","mint","olive","khaki"
  ],

  "Food 🍜": [
    "rice","noodles","bread","pasta","pizza","burger","sandwich","soup","salad","curry",
    "sushi","ramen","dumpling","laksa","satay","rendang","nasi lemak","chicken rice","roti prata","char kway teow",
    "hokkien mee","fried rice","porridge","omelette","pancake","waffle","cake","cookie","ice cream","chocolate",
    "cheese","yogurt","butter","jam","honey","sugar","salt","pepper","chili","garlic",
    "onion"
  ],

  "华文词语 🀄": [
    /* 自然 */
    "月亮","太阳","星星","云朵","天空","大地","海洋","河流","山峰","森林",
    "花朵","树叶","树根","青草","泥土","石头","沙粒","雨水","雪花","彩虹",
    "闪电","雷声","微风","清风","凉风","寒风","阳光","月光","星光","露水",
    "春风","秋雨","海浪","沙滩","山谷","悬崖","瀑布","溪流","湖泊","草原",
    "沙漠","绿洲","冰山","火山","峡谷","岛屿","礁石","贝壳","珊瑚","云海",
    /* 人 */
    "朋友","家人","亲人","同学","老师","学生","父母","妈妈","爸爸","爷爷",
    "奶奶","外公","外婆","哥哥","姐姐","弟弟","妹妹","叔叔","阿姨","表姐",
    "表弟","表哥","表妹","邻居","客人","医生","护士","警察","厨师","司机",
    "工人","农民","商人","律师","画家","歌手","演员","作家","诗人","记者",
    /* 学校 */
    "日记","书包","铅笔","纸张","橡皮","尺子","课本","笔记","作业","考试",
    "分数","成绩","学校","教室","操场","食堂","宿舍","走廊","黑板","班长",
    /* 家 */
    "桌子","椅子","窗户","门口","房间","厨房","客厅","卧室","阳台","楼梯",
    "电梯","沙发","电视","空调","冰箱","镜子","衣柜","地毯","枕头","被子",
    "床单","牙刷","毛巾","肥皂","梳子","杯子","碗筷","盘子","筷子","汤匙",
    /* 吃喝 */
    "米饭","面条","水饺","包子","馒头","汤圆","粽子","月饼","油条","烧饼",
    "稀饭","炒饭","米粉","河粉","豆腐","青菜","白菜","萝卜","番茄","黄瓜",
    "茄子","土豆","南瓜","冬瓜","苦瓜","辣椒","洋葱","大蒜","生姜","苹果",
    "香蕉","橘子","西瓜","葡萄","桃子","梨子","草莓","芒果","菠萝","荔枝",
    "龙眼","榴莲","山竹","椰子","柠檬","樱桃","蓝莓","奶茶","咖啡","果汁",
    "汽水","绿茶","红茶","豆浆","牛奶","酸奶","啤酒","开水","温水","糖水",
    /* 感受 */
    "幸福","快乐","开心","悲伤","难过","生气","思念","孤独","自由","梦想",
    "回忆","希望","微笑","眼泪","拥抱","问候","祝福","时间","岁月","青春",
    "童年","未来","过去","现在","温柔","坚强","勇敢","善良","诚实","谦虚",
    "骄傲","聪明","勤奋","懒惰","认真","仔细","简单","复杂","容易","困难",
    "美丽","漂亮","可爱","帅气","优雅","朴素","华丽","平凡","伟大","渺小",
    "安静","热闹","寂静","喧哗","冷漠","热情","激动","紧张","放松","满足",
    /* 城市 */
    "城市","乡村","公园","广场","街道","马路","车站","机场","码头","海边",
    "山顶","山谷","草地","田野","花园","商场","超市","医院","银行","邮局",
    "书店","餐厅","饭店","宾馆","剧院","体育馆","博物馆","电影院","图书馆","夜市",
    /* 交通 */
    "火车","飞机","轮船","汽车","地铁","公交","单车","摩托","卡车","出租",
    "高铁","动车","渡轮","帆船","火箭","飞船","缆车","滑板","轮滑","马车",
    /* 颜色 */
    "红色","蓝色","绿色","黄色","黑色","白色","紫色","粉色","橙色","灰色",
    "金色","银色","咖啡","米色","天蓝","深红","浅绿","藏青","酒红","砖红",
    /* 时间 */
    "早上","中午","下午","晚上","夜晚","清晨","黄昏","凌晨","白天","黑夜",
    "昨天","今天","明天","后天","前天","周末","假期","学期","瞬间","永恒",
    /* 抽象 */
    "颜色","故事","音乐","电影","照片","画笔","生活","人生","世界","宇宙",
    "历史","文化","艺术","科学","数学","语文","英语","物理","化学","生物",
    "地理","体育","美术","电脑","手机","网络","软件","硬件","系统","数据",
    "声音","气味","味道","触感","温度","速度","力量","能量","光线","影子",
    "方向","位置","距离","高度","深度","长度","宽度","重量","体积","面积",
    /* 动作 */
    "学习","工作","休息","运动","跑步","游泳","跳舞","唱歌","画画","写字",
    "看书","听歌","做饭","洗衣","打扫","购物","旅行","拍照","聊天","开会"
  ],

  "Sports ⚽": [
    "soccer","basketball","tennis","badminton","swimming","running","cycling","volleyball","baseball","hockey",
    "golf","boxing","judo","taekwondo","karate","rugby","cricket","table tennis","squash","rowing",
    "sailing","surfing","skiing","snowboarding","skating","gymnastics","athletics","marathon","archery","fencing",
    "wrestling","weightlifting","climbing","diving","polo"
  ],

  "Musical Instruments 🎵": [
    "piano","guitar","violin","cello","viola","flute","clarinet","saxophone","trumpet","trombone",
    "tuba","drum","harp","ukulele","banjo","mandolin","harmonica","accordion","organ","xylophone",
    "marimba","triangle","cymbals","bongo","timpani","bassoon","oboe","piccolo","french horn","double bass"
  ],

  "Birds 🐦": [
    "sparrow","robin","eagle","owl","hawk","falcon","parrot","penguin","flamingo","pelican",
    "swan","duck","goose","chicken","turkey","peacock","ostrich","kingfisher","woodpecker","hummingbird",
    "crow","raven","magpie","pigeon","dove","seagull","albatross","stork","heron","crane",
    "kiwi","toucan"
  ],

  "Insects 🐛": [
    "ant","bee","wasp","butterfly","moth","dragonfly","damselfly","beetle","ladybug","grasshopper",
    "cricket","mantis","cockroach","termite","fly","mosquito","spider","scorpion","centipede","millipede",
    "caterpillar","firefly","cicada","aphid","weevil","gnat","flea","tick","mite","silverfish"
  ],

  "Vegetables 🥕": [
    "carrot","potato","tomato","onion","garlic","ginger","lettuce","spinach","kale","cabbage",
    "broccoli","cauliflower","cucumber","zucchini","pumpkin","corn","pea","bean","lentil","chickpea",
    "radish","turnip","beetroot","celery","asparagus","eggplant","pepper","mushroom","okra","squash"
  ],

  "Singapore Food 🇸🇬": [
    "laksa","satay","rendang","nasi lemak","chicken rice","roti prata","char kway teow","hokkien mee","bak kut teh","chilli crab",
    "fish head curry","carrot cake","oyster omelette","popiah","rojak","mee siam","mee rebus","kaya toast","kueh","chendol",
    "ice kachang","bandung","teh tarik","kopi","milo dinosaur","wanton mee","fishball noodles","yong tau foo","nasi padang","prata"
  ],

  "Asian Countries 🌏": [
    "singapore","japan","china","korea","malaysia","indonesia","thailand","vietnam","philippines","india",
    "myanmar","cambodia","laos","brunei","bangladesh","pakistan","sri lanka","nepal","bhutan","mongolia",
    "taiwan","hong kong","macau","kazakhstan","uzbekistan","afghanistan","iran","iraq","saudi arabia","uae"
  ],

  "Cities 🏙️": [
    "singapore","tokyo","seoul","beijing","shanghai","hong kong","bangkok","jakarta","manila","hanoi",
    "kuala lumpur","sydney","melbourne","london","paris","berlin","rome","madrid","barcelona","amsterdam",
    "vienna","zurich","new york","los angeles","toronto","vancouver","dubai","mumbai","delhi","moscow"
  ],

  "Body Parts 🧍": [
    "head","hair","eye","ear","nose","mouth","tooth","tongue","neck","shoulder",
    "arm","elbow","hand","finger","thumb","chest","back","stomach","waist","hip",
    "leg","knee","ankle","foot","toe","skin","bone","muscle","heart","brain",
    "lung","liver","kidney"
  ],

  "Clothing 👕": [
    "shirt","t-shirt","pants","jeans","shorts","skirt","dress","jacket","coat","sweater",
    "hoodie","socks","shoes","sneakers","boots","sandals","slippers","hat","cap","scarf",
    "gloves","belt","tie","watch","glasses","sunglasses","ring","necklace","bracelet","earrings",
    "bag","backpack"
  ],

  "Weather 🌦️": [
    "sunny","rainy","cloudy","windy","snowy","stormy","foggy","humid","dry","hot",
    "cold","warm","cool","thunder","lightning","drizzle","downpour","hail","sleet","rainbow",
    "typhoon","tornado","hurricane","breeze","mist"
  ],

  "Verbs (action) 🏃": [
    "run","walk","jump","swim","dance","sing","read","write","draw","paint",
    "cook","eat","drink","sleep","wake","listen","speak","laugh","cry","think",
    "dream","build","break","open","close","push","pull","throw","catch","kick",
    "climb","sit","stand","fall"
  ],

  "Emotions 😊": [
    "happy","sad","angry","scared","surprised","excited","nervous","calm","bored","tired",
    "confused","proud","shy","jealous","grateful","lonely","hopeful","disappointed","content","amused",
    "anxious","curious","embarrassed","relieved","frustrated"
  ],

  "Family 👨‍👩‍👧": [
    "mother","father","sister","brother","grandmother","grandfather","aunt","uncle","cousin","niece",
    "nephew","son","daughter","wife","husband","parents","siblings","grandparents"
  ],

  "Occupations 👩‍🏫": [
    "doctor","nurse","teacher","engineer","lawyer","chef","waiter","driver","pilot","farmer",
    "artist","singer","actor","dancer","writer","scientist","programmer","designer","accountant","police officer",
    "firefighter","soldier","dentist","pharmacist","vet","journalist","photographer","architect","barber","tailor"
  ],

  "School Supplies ✏️": [
    "pen","pencil","eraser","ruler","notebook","textbook","highlighter","marker","crayon","glue",
    "scissors","stapler","tape","binder","folder","backpack","calculator","compass","protractor","sharpener",
    "whiteboard","chalk","clipboard","paper","sticky notes"
  ],

  "Transport 🚗": [
    "car","bus","train","mrt","taxi","bicycle","motorcycle","scooter","truck","van",
    "airplane","helicopter","boat","ship","ferry","submarine","tram","cable car","rocket","ambulance",
    "fire engine","police car","tractor","skateboard","rollerblades"
  ],

  "Drinks 🥤": [
    "water","tea","coffee","milk","juice","soda","cola","lemonade","smoothie","milkshake",
    "hot chocolate","bubble tea","milo","horlicks","bandung","teh tarik","kopi","coconut water","orange juice","apple juice",
    "green tea","black tea","iced tea","sports drink","energy drink"
  ],

  "Desserts 🍰": [
    "cake","cookie","brownie","ice cream","gelato","sorbet","pudding","custard","jelly","tart",
    "pie","donut","muffin","cupcake","macaron","eclair","cheesecake","tiramisu","churros","waffle",
    "pancake","crepe","mochi","kueh","chendol","ice kachang"
  ],

  "Furniture 🪑": [
    "chair","table","desk","sofa","bed","mattress","pillow","blanket","wardrobe","cabinet",
    "shelf","bookshelf","drawer","stool","bench","couch","armchair","lamp","mirror","rug",
    "carpet","curtain","fan","air conditioner","heater"
  ],

  "Electronic Devices 📱": [
    "phone","smartphone","tablet","laptop","computer","desktop","monitor","keyboard","mouse","printer",
    "scanner","camera","speaker","headphones","earphones","microphone","television","radio","charger","cable",
    "powerbank","router","smartwatch","drone"
  ],

  "Kitchen Items 🍳": [
    "pan","pot","wok","spatula","ladle","knife","fork","spoon","chopsticks","plate",
    "bowl","cup","mug","glass","cutting board","grater","peeler","whisk","tongs","strainer",
    "colander","kettle","toaster","oven","microwave","blender","rice cooker"
  ],

  "Bathroom Items 🚿": [
    "toothbrush","toothpaste","soap","shampoo","conditioner","towel","comb","brush","mirror","razor",
    "tissue","toilet paper","sink","bathtub","shower","faucet","drain","sponge","loofah","nail clipper"
  ],

  "Toys & Games 🎮": [
    "lego","puzzle","doll","teddy bear","action figure","board game","card game","chess","checkers","dominoes",
    "yo-yo","kite","ball","balloon","marbles","spinning top","toy car","toy train","playstation","nintendo switch",
    "xbox","rubik's cube"
  ],

  "Flowers 🌸": [
    "rose","tulip","sunflower","daisy","lily","orchid","lavender","jasmine","lotus","hibiscus",
    "peony","daffodil","carnation","chrysanthemum","dahlia","hydrangea","magnolia","marigold","pansy","poppy",
    "bluebell","iris"
  ],

  "Trees & Plants 🌳": [
    "oak","pine","maple","willow","birch","palm","bamboo","baobab","redwood","cedar",
    "fir","cypress","eucalyptus","mango tree","banana tree","coconut tree","rubber tree","olive tree","cherry blossom","bonsai"
  ],

  "Sea Creatures 🐠": [
    "fish","shark","whale","dolphin","octopus","squid","crab","lobster","shrimp","prawn",
    "jellyfish","starfish","seahorse","sea turtle","seal","walrus","manatee","stingray","eel","clam",
    "oyster","mussel","coral","anemone"
  ],

  "Space 🚀": [
    "sun","moon","star","planet","earth","mars","jupiter","saturn","venus","mercury",
    "neptune","uranus","pluto","asteroid","comet","meteor","galaxy","milky way","black hole","supernova",
    "nebula","cosmos","orbit","rocket","astronaut"
  ],

  "Hobbies 🎨": [
    "drawing","painting","singing","dancing","reading","writing","cooking","baking","gardening","photography",
    "travelling","hiking","fishing","swimming","cycling","gaming","collecting","knitting","sewing","woodworking",
    "pottery","calligraphy"
  ],

  "Movies 🎬": [
    "titanic","avatar","inception","interstellar","joker","frozen","moana","encanto","coco","up",
    "finding nemo","toy story","lion king","harry potter","star wars","lord of the rings","matrix","jurassic park","spider-man","iron man"
  ],

  "Famous Singers 🎤": [
    "taylor swift","adele","ed sheeran","beyonce","rihanna","bruno mars","billie eilish","drake","justin bieber","ariana grande",
    "the weeknd","post malone","dua lipa","olivia rodrigo","harry styles","bts","blackpink","twice","stray kids","seventeen"
  ],

  "K-pop Groups 🎶": [
    "bts","blackpink","twice","exo","red velvet","got7","stray kids","seventeen","nct","itzy",
    "aespa","enhypen","txt","ateez","monsta x","mamamoo","girls generation","super junior","shinee","ikon"
  ],

  "Fast Food 🍔": [
    "mcdonald's","kfc","burger king","subway","pizza hut","domino's","wendy's","taco bell","popeyes","jollibee",
    "five guys","shake shack","long john silver's","a&w","mos burger","texas chicken","arnold's chicken"
  ],

  "Superheroes 🦸": [
    "superman","batman","spider-man","iron man","captain america","thor","hulk","black widow","hawkeye","wonder woman",
    "flash","aquaman","green lantern","black panther","doctor strange","ant-man","wolverine","deadpool","captain marvel","shazam"
  ],

  "Video Games 🎮": [
    "minecraft","roblox","fortnite","among us","genshin impact","valorant","league of legends","overwatch","pubg","call of duty",
    "fifa","mario","zelda","pokemon","animal crossing","stardew valley","terraria","hollow knight","celeste","hades"
  ],

  "Cartoon Characters 🎨": [
    "mickey mouse","donald duck","goofy","pluto","minnie mouse","bugs bunny","daffy duck","tom","jerry","scooby doo",
    "spongebob","patrick","pikachu","hello kitty","kuromi","my melody","cinnamoroll","pochacco","stitch"
  ],

  "Singapore Places 🇸🇬": [
    "orchard road","marina bay sands","sentosa","botanic gardens","merlion","gardens by the bay","chinatown","little india","kampong glam","clarke quay",
    "bugis","jurong east","tampines","woodlands","yishun","punggol","sengkang","bedok","ang mo kio","toa payoh"
  ],

  "School Subjects 📚": [
    "english","chinese","math","science","physics","chemistry","biology","history","geography","social studies",
    "art","music","pe","computing","literature","economics","accounting","business","design","drama"
  ],

  "Things in a Bedroom 🛏️": [
    "bed","pillow","blanket","mattress","lamp","alarm clock","mirror","wardrobe","drawer","poster",
    "fan","aircon","window","curtain","rug","slippers","phone","charger","book","tissue"
  ],

  "Morning Routine ☀️": [
    "wake up","brush teeth","wash face","shower","get dressed","eat breakfast","drink coffee","pack bag","wear shoes","comb hair",
    "check phone","leave house","take bus","walk to school","arrive at school"
  ]

};

// 暴露到 window 供主文件使用
window.TOPICS = TOPICS;
