// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    "1080zyku": {
      "api": "https://api.1080zyku.com/inc/api_mac10.php",
      "name": "TV-1080资源",
      "detail": "https://api.1080zyku.com"
    },
    "155api": {
      "api": "https://155api.com/api.php/provide/vod",
      "name": "AV-155资源",
      "detail": "https://155api.com",
      "adult": true
    },
    "360zy": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "TV-360资源",
      "detail": "https://360zy.com"
    },
    "ckzy": {
      "api": "https://ckzy.me/api.php/provide/vod",
      "name": "TV-CK资源",
      "detail": "https://ckzy.me"
    },
    "ukuapi": {
      "api": "https://api.ukuapi.com/api.php/provide/vod",
      "name": "TV-U酷资源",
      "detail": "https://api.ukuapi.com"
    },
    "ukuapi88": {
      "api": "https://api.ukuapi88.com/api.php/provide/vod",
      "name": "TV-U酷资源88",
      "detail": "https://api.ukuapi88.com"
    },
    "ikunzy": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "TV-ikun资源",
      "detail": "https://ikunzyapi.com"
    },
    "wujinapi_cc": {
      "api": "https://api.wujinapi.cc/api.php/provide/vod",
      "name": "TV-wujinapi无尽",
      "detail": ""
    },
    "yayazy": {
      "api": "https://cj.yayazy.net/api.php/provide/vod",
      "name": "TV-丫丫点播",
      "detail": "https://cj.yayazy.net"
    },
    "guangsuapi": {
      "api": "https://api.guangsuapi.com/api.php/provide/vod",
      "name": "TV-光速资源",
      "detail": "https://api.guangsuapi.com"
    },
    "wolongzyw": {
      "api": "https://collect.wolongzyw.com/api.php/provide/vod",
      "name": "TV-卧龙点播",
      "detail": "https://collect.wolongzyw.com"
    },
    "wolongzy_cc": {
      "api": "https://collect.wolongzy.cc/api.php/provide/vod",
      "name": "TV-卧龙资源",
      "detail": ""
    },
    "wolongzyw_com": {
      "api": "https://wolongzyw.com/api.php/provide/vod",
      "name": "TV-卧龙资源",
      "detail": "https://wolongzyw.com"
    },
    "tyyszy": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "TV-天涯资源",
      "detail": "https://tyyszy.com"
    },
    "rycjapi": {
      "api": "https://cj.rycjapi.com/api.php/provide/vod",
      "name": "TV-如意资源",
      "detail": ""
    },
    "xiaomaomi": {
      "api": "https://zy.xmm.hk/api.php/provide/vod",
      "name": "TV-小猫咪资源",
      "detail": "https://zy.xmm.hk"
    },
    "xinlangapi": {
      "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
      "name": "TV-新浪点播",
      "detail": "https://api.xinlangapi.com"
    },
    "wujinapi_com": {
      "api": "https://api.wujinapi.com/api.php/provide/vod",
      "name": "TV-无尽资源",
      "detail": ""
    },
    "wujinapi_me": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "TV-无尽资源",
      "detail": ""
    },
    "wujinapi_net": {
      "api": "https://api.wujinapi.net/api.php/provide/vod",
      "name": "TV-无尽资源",
      "detail": ""
    },
    "wwzy": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "TV-旺旺短剧",
      "detail": "https://wwzy.tv"
    },
    "wwzy_api": {
      "api": "https://api.wwzy.tv/api.php/provide/vod",
      "name": "TV-旺旺资源",
      "detail": "https://api.wwzy.tv"
    },
    "bfzyapi": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "TV-暴风资源",
      "detail": ""
    },
    "zuidazy": {
      "api": "http://zuidazy.me/api.php/provide/vod",
      "name": "TV-最大点播",
      "detail": "http://zuidazy.me"
    },
    "zuidapi": {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "TV-最大资源",
      "detail": "https://api.zuidapi.com"
    },
    "apiyhzy": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "TV-樱花资源",
      "detail": ""
    },
    "yparse": {
      "api": "https://api.yparse.com/api/json",
      "name": "TV-步步高资源",
      "detail": ""
    },
    "niuniuzy": {
      "api": "https://api.niuniuzy.me/api.php/provide/vod",
      "name": "TV-牛牛点播",
      "detail": "https://api.niuniuzy.me"
    },
    "dyttzyapi": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "TV-电影天堂资源",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "bwzyz": {
      "api": "https://api.bwzyz.com/api.php/provide/vod",
      "name": "AV-百万资源",
      "detail": "https://api.bwzyz.com",
      "adult": true
    },
    "apibdzy": {
      "api": "https://api.apibdzy.com/api.php/provide/vod",
      "name": "TV-百度云资源",
      "detail": "https://api.apibdzy.com"
    },
    "1080zyku_json": {
      "api": "https://api.1080zyku.com/inc/apijson.php/",
      "name": "TV-神马云",
      "detail": "https://api.1080zyku.com"
    },
    "suoniapi": {
      "api": "https://suoniapi.com/api.php/provide/vod",
      "name": "TV-索尼资源",
      "detail": ""
    },
    "hongniuzy2": {
      "api": "https://www.hongniuzy2.com/api.php/provide/vod",
      "name": "TV-红牛资源",
      "detail": "https://www.hongniuzy2.com"
    },
    "maotaizy": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "TV-茅台资源",
      "detail": "https://caiji.maotaizy.cc"
    },
    "huyaapi": {
      "api": "https://www.huyaapi.com/api.php/provide/vod",
      "name": "TV-虎牙资源",
      "detail": "https://www.huyaapi.com"
    },
    "dbzy_caiji": {
      "api": "https://caiji.dbzy.tv/api.php/provide/vod",
      "name": "TV-豆瓣资源",
      "detail": "https://caiji.dbzy.tv"
    },
    "dbzy": {
      "api": "https://dbzy.tv/api.php/provide/vod",
      "name": "TV-豆瓣资源",
      "detail": "https://dbzy.tv"
    },
    "hhzyapi": {
      "api": "https://hhzyapi.com/api.php/provide/vod",
      "name": "TV-豪华资源",
      "detail": "https://hhzyapi.com"
    },
    "subocaiji": {
      "api": "https://subocaiji.com/api.php/provide/vod",
      "name": "TV-速博资源",
      "detail": ""
    },
    "lziapi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod",
      "name": "TV-量子资源",
      "detail": ""
    },
    "jinyingzy": {
      "api": "https://jinyingzy.com/api.php/provide/vod",
      "name": "TV-金鹰点播",
      "detail": "https://jinyingzy.com"
    },
    "jyzyapi": {
      "api": "https://jyzyapi.com/api.php/provide/vod",
      "name": "TV-金鹰资源",
      "detail": "https://jyzyapi.com"
    },
    "sdzyapi": {
      "api": "https://sdzyapi.com/api.php/provide/vod",
      "name": "TV-闪电资源",
      "detail": "https://sdzyapi.com"
    },
    "ffzyapi": {
      "api": "https://cj.ffzyapi.com/api.php/provide/vod",
      "name": "TV-非凡资源",
      "detail": "https://cj.ffzyapi.com"
    },
    "p2100": {
      "api": "https://p2100.net/api.php/provide/vod",
      "name": "TV-飘零资源",
      "detail": "https://p2100.net"
    },
    "mozhuazy": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "TV-魔爪资源",
      "detail": "https://mozhuazy.com"
    },
    "moduapi": {
      "api": "https://caiji.moduapi.cc/api.php/provide/vod",
      "name": "TV-魔都动漫",
      "detail": "https://caiji.moduapi.cc"
    },
    "mdzyapi": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "TV-魔都资源",
      "detail": "https://www.mdzyapi.com"
    },
    "heimuer": {
      "api": "https://json.heimuer.xyz/api.php/provide/vod",
      "name": "TV-黑木耳",
      "detail": "https://json.heimuer.xyz"
    },
    "heimuer02": {
      "api": "https://json02.heimuer.xyz/api.php/provide/vod",
      "name": "TV-黑木耳点播",
      "detail": "https://json02.heimuer.xyz"
    },
    "91md": {
      "api": "https://91md.me/api.php/provide/vod",
      "name": "AV-91麻豆",
      "detail": "https://91md.me",
      "adult": true
    },
    "lbapiby": {
      "api": "http://lbapiby.com/api.php/provide/vod",
      "name": "AV-AIvin",
      "detail": "",
      "adult": true
    },
    "jkunzyapi": {
      "api": "https://jkunzyapi.com/api.php/provide/vod",
      "name": "AV-JKUN资源",
      "detail": "https://jkunzyapi.com",
      "adult": true
    },
    "souavzy": {
      "api": "https://api.souavzy.vip/api.php/provide/vod",
      "name": "AV-souav资源",
      "detail": "https://api.souavzy.vip",
      "adult": true
    },
    "lbapi9": {
      "api": "https://lbapi9.com/api.php/provide/vod",
      "name": "AV-乐播资源",
      "detail": "",
      "adult": true
    },
    "aosikazy": {
      "api": "https://aosikazy.com/api.php/provide/vod",
      "name": "AV-奥斯卡资源",
      "detail": "https://aosikazy.com",
      "adult": true
    },
    "naixxzy": {
      "api": "https://Naixxzy.com/api.php/provide/vod",
      "name": "AV-奶香香",
      "detail": "https://Naixxzy.com",
      "adult": true
    },
    "slapibf": {
      "api": "https://slapibf.com/api.php/provide/vod",
      "name": "AV-森林资源",
      "detail": "https://slapibf.com",
      "adult": true
    },
    "xrbsp": {
      "api": "https://www.xrbsp.com/api/json.php",
      "name": "AV-淫水机资源",
      "detail": "https://www.xrbsp.com",
      "adult": true
    },
    "apiyutu": {
      "api": "https://apiyutu.com/api.php/provide/vod",
      "name": "AV-玉兔资源",
      "detail": "https://apiyutu.com",
      "adult": true
    },
    "fhapi9": {
      "api": "http://fhapi9.com/api.php/provide/vod",
      "name": "AV-番号资源",
      "detail": "",
      "adult": true
    },
    "kxgav": {
      "api": "https://www.kxgav.com/api/json.php",
      "name": "AV-白嫖资源",
      "detail": "https://www.kxgav.com",
      "adult": true
    },
    "jingpinx": {
      "api": "https://www.jingpinx.com/api.php/provide/vod",
      "name": "AV-精品资源",
      "detail": "https://www.jingpinx.com",
      "adult": true
    },
    "msnii": {
      "api": "https://www.msnii.com/api/json.php",
      "name": "AV-美少女资源",
      "detail": "https://www.msnii.com",
      "adult": true
    },
    "apilsbzy1": {
      "api": "https://apilsbzy1.com/api.php/provide/vod",
      "name": "AV-老色逼资源",
      "detail": "https://apilsbzy1.com",
      "adult": true
    },
    "sexnguon": {
      "api": "https://api.sexnguon.com/api.php/provide/vod",
      "name": "AV-色嗨国",
      "detail": "https://api.sexnguon.com",
      "adult": true
    },
    "maozyapi": {
      "api": "https://api.maozyapi.com/inc/apijson_vod.php",
      "name": "AV-色猫资源",
      "detail": "https://api.maozyapi.com",
      "adult": true
    },
    "apilj": {
      "api": "https://apilj.com/api.php/provide/vod",
      "name": "AV-辣椒资源",
      "detail": "https://apilj.com",
      "adult": true
    },
    "gdlsp": {
      "api": "https://www.gdlsp.com/api/json.php",
      "name": "AV-香奶儿资源",
      "detail": "https://www.gdlsp.com",
      "adult": true
    },
    "shayuapi": {
      "api": "https://shayuapi.com/api.php/provide/vod",
      "name": "AV-鲨鱼资源",
      "detail": "https://shayuapi.com",
      "adult": true
    },
    "pgxdy": {
      "api": "https://www.pgxdy.com/api/json.php",
      "name": "AV-黄AV资源",
      "detail": "https://www.pgxdy.com",
      "adult": true
    },
    "ffzynew": {
      "api": "https://api.ffzyapi.com/api.php/provide/vod",
      "name": "非凡影视new",
      "detail": "http://ffzy5.tv"
    },
    "jszyapi": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源",
      "detail": "https://jszyapi.com"
    },
    "gayapi": {
      "api": "https://gayapi.com/api.php/provide/vod",
      "name": "快播资源网站"
    },
    "xingba111": {
      "api": "https://xingba111.com/api.php/provide/vod",
      "name": "性吧资源",
      "adult": true
    },
    "aiduanju": {
      "api": "https://www.aiduanju.cc/",
      "name": "爱短剧.cc"
    },
    "huawei8": {
      "api": "https://huawei8.live/api.php/provide/vod",
      "name": "华为吧资源"
    },
    "taopianapi": {
      "api": "https://taopianapi.com/cjapi/sda/vod",
      "name": "淘片资源"
    },
    "hongniuzy3": {
      "api": "https://www.hongniuzy3.com/api.php/provide/vod",
      "name": "红牛资源"
    },
    "xsd_sdzyapi": {
      "api": "https://xsd.sdzyapi.com/api.php/provide/vod",
      "name": "索尼-闪电资源"
    },
    "jyzyapi_provide": {
      "api": "https://jyzyapi.com/provide/vod",
      "name": "金鹰资源采集网"
    },
    "fczy888": {
      "api": "https://api.fczy888.me/api.php/provide/vod",
      "name": "蜂巢片库"
    },
    "jmzy": {
      "api": "https://api.jmzy.com/api.php/provide/vod",
      "name": "金马资源网"
    },
    "dadiapi": {
      "api": "https://dadiapi.com/api.php/provide/vod",
      "name": "大地资源网络"
    },
    "hsckzy888": {
      "api": "https://hsckzy888.com/api.php/provide/vod",
      "name": "黄色资源啊啊",
      "adult": true
    },
    "xiaojizy": {
      "api": "https://api.xiaojizy.live/provide/vod",
      "name": "小鸡资源"
    },
    "kuaichezy": {
      "api": "https://caiji.kuaichezy.org/api.php/provide",
      "name": "快车资源阿"
    },
    "xinlangapi_provide": {
      "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
      "name": "新浪资源阿"
    },
    "apilj_provide": {
      "api": "https://apilj.com/api.php/provide",
      "name": "辣椒资源黄黄"
    },
    "yzzy_api": {
      "api": "https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod",
      "name": "优质资源库1080zyk6.com高清"
    },
    "iqiyizyapi": {
      "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
      "name": "iqiyi资源"
    },
    "xxibaozyw": {
      "api": "https://www.xxibaozyw.com/api.php/provide/vod",
      "name": "细胞采集黄色",
      "adult": true
    },
    "qiqidys": {
      "api": "https://www.qiqidys.com/api.php/provide/vod/",
      "name": "七七影视"
    },
    "shayu": {
      "api": "https://shayuapi.com/api.php/provide/vod",
      "name": "鲨鱼资源",
      "detail": "https://shayuapi.com",
      "adult": true
    },
    "taohua": {
      "api": "https://thzy1.me/api.php/provide/vod",
      "name": "桃花资源",
      "detail": "https://thzy1.me",
      "adult": true
    },
    "shileyuan": {
      "api": "https://xxavs.com/api.php/provide/vod",
      "name": "湿乐园",
      "detail": "https://xxavs.com",
      "adult": true
    },
    "youyi": {
      "api": "https://a.uezy.pw/api.php/provide/vod",
      "name": "优异资源",
      "detail": "https://a.uezy.pw",
      "adult": true
    },
    "putao": {
      "api": "https://caiji.putaozyw.net/inc/apijson_vod.php",
      "name": "精品葡萄",
      "detail": "https://caiji.putaozyw.net",
      "adult": true
    },
    "huanggua": {
      "api": "https://to.to-long.com/api.php/provide/vod",
      "name": "黄瓜资源",
      "detail": "https://to.to-long.com",
      "adult": true
    },
    "siwa": {
      "api": "https://www.siwazyw.tv/api.php/provide/vod",
      "name": "丝袜资源",
      "detail": "https://www.siwazyw.tv",
      "adult": true
    },
    "semaomao": {
      "api": "https://caiji.semaozy.net/inc/apijson_vod.php",
      "name": "色猫资源",
      "detail": "https://caiji.semaozy.net",
      "adult": true
    },
    "didi": {
      "api": "https://api.ddapi.cc/api.php/provide/vod",
      "name": "滴滴资源",
      "detail": "https://api.ddapi.cc",
      "adult": true
    },
    "senlin": {
      "api": "https://slapibf.com/api.php/provide/vod",
      "name": "森林资源",
      "detail": "https://slapibf.com",
      "adult": true
    },
    "yutu": {
      "api": "https://apiyutu.com/api.php/provide/vod",
      "name": "玉兔资源",
      "detail": "https://apiyutu.com",
      "adult": true
    },
    "caoliu": {
      "api": "https://www.caoliuzyw.com/api.php/provide/vod",
      "name": "草榴资源",
      "detail": "https://www.caoliuzyw.com",
      "adult": true
    },
    "sexnguon": {
      "api": "https://api.sexnguon.com/api.php/provide/vod",
      "name": "色南国资源",
      "detail": "https://api.sexnguon.com",
      "adult": true
    },
    "lebo": {
      "api": "https://lbapi9.com/api.php/provide/vod",
      "name": "乐播资源",
      "detail": "https://lbapi9.com",
      "adult": true
    },
    "fuerdai": {
      "api": "http://f2dcj6.com/sapi",
      "name": "富二代资源",
      "detail": "http://f2dcj6.com",
      "adult": true
    },
    "lilai": {
      "api": "http://llzxcj.com/inc/sck.php",
      "name": "利来资源",
      "detail": "http://llzxcj.com",
      "adult": true
    },
    "fanhao": {
      "api": "http://fhapi9.com/api.php/provide/vod",
      "name": "番号资源",
      "detail": "http://fhapi9.com",
      "adult": true
    },
    "91av": {
      "api": "https://91av.cyou/api.php/provide/vod",
      "name": "91视频",
      "detail": "https://91av.cyou",
      "adult": true
    },
    "huanya": {
      "api": "http://hysscj.com/inc/sapi.php",
      "name": "环亚资源",
      "detail": "http://hysscj.com",
      "adult": true
    },
    "baiwan": {
      "api": "https://api.bwzym3u8.com/api.php/provide/vod",
      "name": "百万资源",
      "detail": "https://api.bwzym3u8.com",
      "adult": true
    },
    "naixiangxiang": {
      "api": "https://naixxzy1.com/api.php/provide/vod",
      "name": "奶香香资源",
      "detail": "https://naixxzy1.com",
      "adult": true
    },
    "aosika": {
      "api": "https://aosikazy2.com/api.php/provide/vod",
      "name": "奥斯卡资源",
      "detail": "https://aosikazy2.com",
      "adult": true
    },
    "xxibao": {
      "api": "https://www.xxibaozyw.com/api.php/provide/vod",
      "name": "X细胞资源",
      "detail": "https://www.xxibaozyw.com",
      "adult": true
    },
    "souav": {
      "api": "https://api.souavzy.vip/api.php/provide/vod",
      "name": "搜AV资源",
      "detail": "https://api.souavzy.vip",
      "adult": true
    },
    "xingba111": {
      "api": "https://xingba111.com/api.php/provide/vod",
      "name": "杏吧资源",
      "detail": "https://xingba111.com",
      "adult": true
    },
    "yeszy": {
      "api": "https://www.yeszy1.com/api.php/provide/vod",
      "name": "YES资源",
      "detail": "https://www.yeszy1.com",
      "adult": true
    },
    "fanqie4": {
      "api": "https://fqzy4.me/api.php/provide/vod",
      "name": "番茄资源",
      "detail": "https://fqzy4.me",
      "adult": true
    },
    "huangsecangku": {
      "api": "https://hsckzy.vip/api.php/provide/vod",
      "name": "黄色仓库",
      "detail": "https://hsckzy.vip",
      "adult": true
    },
    "wuwuba": {
      "api": "http://558zy.com/api.php/provide/vod",
      "name": "558资源",
      "detail": "http://558zy.com",
      "adult": true
    },
    "vovlunli": {
      "api": "https://vovzy.com/api.php/provide/vod",
      "name": "VOV伦理",
      "detail": "https://vovzy.com",
      "adult": true
    },
    "baihua": {
      "api": "https://bhziyuan.com/api.php/provide/vod",
      "name": "百花资源",
      "detail": "https://bhziyuan.com",
      "adult": true
    },
    "xingzybb1": {
      "api": "https://xzybb1.com/api.php/provide/vod",
      "name": "幸资源",
      "detail": "https://xzybb1.com",
      "adult": true
    },
    "91jpzyw": {
      "api": "https://91jpzyw.com/api.php/provide/vod",
      "name": "91资源",
      "detail": "https://91jpzyw.com",
      "adult": true
    },
    "huyaapi_cj": {
      "api": "https://www.huyaapi.com/api.php/provide/vod",
      "name": "虎牙资源采集网采集接口",
      "detail": "https://www.huyaapi.com"
    },
    "91jpzyw_cj": {
      "api": "https://91jpzyw.com/api.php/provide/vod",
      "name": "91精品资源网采集接口",
      "detail": "https://91jpzyw.com",
      "adult": true
    },
    "xzybb1_cj1": {
      "api": "https://xzybb1.com/api.php/provide/vod",
      "name": "幸资源站采集接口",
      "detail": "https://xzybb1.com",
      "adult": true
    },
    "xzybb1_cj2": {
      "api": "https://xzybb1.com/api.php/provide/vod",
      "name": "杏资源站影视采集站采集接口",
      "detail": "https://xzybb1.com",
      "adult": true
    },
    "danaizi_cj": {
      "api": "https://apidanaizi.com/api.php/provide/vod",
      "name": "大奶子资源网采集接口",
      "detail": "https://apidanaizi.com",
      "adult": true
    },
    "tyyszyapi_cj": {
      "api": "https://tyyszyapi.com/api.php/provide/vod",
      "name": "天涯影视资源网采集接口",
      "detail": "https://tyyszyapi.com"
    },
    "iqiyizyapi_cj": {
      "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
      "name": "爱奇艺资源站采集接口",
      "detail": "https://www.iqiyizyapi.com"
    },
    "jmzy_cj": {
      "api": "https://api.jmzy.com/api.php/provide/vod",
      "name": "金马资源网采集接口",
      "detail": "https://api.jmzy.com"
    },
    "dyttzyapi_cj": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "电影天堂采集综合资源接口",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "xingba222_cj": {
      "api": "https://xingba222.com/api.php/provide/vod",
      "name": "杏吧资源站采集接口",
      "detail": "https://xingba222.com",
      "adult": true
    },
    "maotaizy_cj": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "茅台资源站采集接口",
      "detail": "https://caiji.maotaizy.cc"
    },
    "hsckzy888_cj": {
      "api": "https://hsckzy888.com/api.php/provide/vod",
      "name": "黄色仓库资源采集网采集接口",
      "detail": "https://hsckzy888.com",
      "adult": true
    },
    "xxibaozyw_cj": {
      "api": "https://www.xxibaozyw.com/api.php/provide/vod",
      "name": "X细胞资源网采集接口",
      "detail": "https://www.xxibaozyw.com",
      "adult": true
    },
    "souavzy_cj": {
      "api": "https://api.souavzy.vip/api.php/provide/vod",
      "name": "搜av资源站采集接口",
      "detail": "https://api.souavzy.vip",
      "adult": true
    },
    "mozhuazy_cj": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "魔爪资源采集网采集接口",
      "detail": "https://mozhuazy.com"
    },
    "dbzy5_cj": {
      "api": "https://caiji.dbzy5.com/api.php/provide/vod",
      "name": "豆瓣资源采集站采集接口大全",
      "detail": "https://caiji.dbzy5.com"
    },
    "rycjapi_cj": {
      "api": "https://cj.rycjapi.com/api.php/provide/vod",
      "name": "如意资源网采集接口",
      "detail": "https://cj.rycjapi.com"
    },
    "fqzy_cj": {
      "api": "https://fqzy.me/api.php/provide/vod",
      "name": "番茄资源采集接口",
      "detail": "https://fqzy.me"
    },
    "bwzyz_cj": {
      "api": "https://api.bwzyz.com/api.php/provide/vod",
      "name": "百万资源网采集接口",
      "detail": "https://api.bwzyz.com",
      "adult": true
    },
    "wolongzy_cj": {
      "api": "https://collect.wolongzy.cc/api.php/provide/vod",
      "name": "卧龙影视资源采集站采集接口",
      "detail": "https://collect.wolongzy.cc"
    },
    "siwazyw_cj": {
      "api": "https://siwazyw.tv/api.php/provide/vod",
      "name": "丝袜资源采集网采集接口",
      "detail": "https://siwazyw.tv",
      "adult": true
    },
    "wujinapi_cj": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "无尽资源网采集接口",
      "detail": "https://api.wujinapi.me"
    },
    "apiyhzy_cj": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "樱花资源网采集接口",
      "detail": "https://m3u8.apiyhzy.com"
    },
    "semaozy_cj": {
      "api": "https://caiji.semaozy.net/inc/api.php/provide/vod",
      "name": "色猫资源网采集接口",
      "detail": "https://caiji.semaozy.net",
      "adult": true
    },
    "qilinzyz_cj": {
      "api": "http://www.qilinzyz.com/api.php/provide/vod",
      "name": "麒麟资源站全站采集接口",
      "detail": "http://www.qilinzyz.com"
    },
    "apilj_cj": {
      "api": "https://apilj.com/api.php/provide/vod",
      "name": "辣椒资源网采集接口",
      "detail": "https://apilj.com",
      "adult": true
    },
    "ikunzyapi_cj": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "ikun资源网采集接口",
      "detail": "https://ikunzyapi.com"
    },
    "155api_cj": {
      "api": "https://155api.com/api.php/provide/vod",
      "name": "155资源站采集接口",
      "detail": "https://155api.com",
      "adult": true
    },
    "ffzyapi_cj": {
      "api": "http://api.ffzyapi.com/api.php/provide/vod",
      "name": "非凡资源网采集接口",
      "detail": "http://api.ffzyapi.com"
    },
    "naixxzy_cj": {
      "api": "https://Naixxzy.com/api.php/provide/vod",
      "name": "奶香香资源站采集接口",
      "detail": "https://Naixxzy.com",
      "adult": true
    },
    "bfzyapi_cj": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "暴风资源网采集接口",
      "detail": "https://bfzyapi.com"
    },
    "jszyapi_cj": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源网采集接口",
      "detail": "https://jszyapi.com"
    },
    "mdzyapi_cj": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "魔都动漫资源采集网采集接口",
      "detail": "https://www.mdzyapi.com"
    },
    "hhzyapi_cj": {
      "api": "https://hhzyapi.com/api.php/provide/vod",
      "name": "豪华资源网采集接口地址",
      "detail": "https://hhzyapi.com"
    },
    "yayazy_cj": {
      "api": "https://cj.yayazy.net/api.php/provide/vod",
      "name": "丫丫资源网采集接口",
      "detail": "https://cj.yayazy.net"
    },
    "apilsbzy1_cj": {
      "api": "https://apilsbzy1.com/api.php/provide/vod",
      "name": "老色逼资源站采集接口",
      "detail": "https://apilsbzy1.com",
      "adult": true
    },
    "thzy1_cj": {
      "api": "https://thzy1.me/api.php/provide/vod",
      "name": "桃花资源采集网采集接口",
      "detail": "https://thzy1.me",
      "adult": true
    },
    "apiyutu_cj": {
      "api": "https://apiyutu.com/api.php/provide/vod",
      "name": "玉兔资源采集接口",
      "detail": "https://apiyutu.com",
      "adult": true
    },
    "360zyzz_cj": {
      "api": "https://360zyzz.com/api.php/provide/vod",
      "name": "360资源站采集接口",
      "detail": "https://360zyzz.com"
    },
    "jkunzyapi_cj": {
      "api": "https://www.jkunzyapi.com/api.php/provide/vod",
      "name": "爱坤联盟资源网采集接口",
      "detail": "https://www.jkunzyapi.com",
      "adult": true
    },
    "aosikazy_cj": {
      "api": "https://aosikazy.com/api.php/provide/vod",
      "name": "奥斯卡资源API采集接口大全",
      "detail": "https://aosikazy.com",
      "adult": true
    },
    "slapibf_cj": {
      "api": "https://slapibf.com/api.php/provide/vod",
      "name": "森林资源网采集接口",
      "detail": "https://slapibf.com",
      "adult": true
    },
    "ckzy_cj": {
      "api": "https://ckzy.me/api.php/provide/vod",
      "name": "CK资源采集接口",
      "detail": "https://ckzy.me"
    },
    "semaozy_cj2": {
      "api": "https://caiji.semaozy.net/inc/api.php/provide/vod",
      "name": "S猫资源网采集接口",
      "detail": "https://caiji.semaozy.net",
      "adult": true
    },
    "guangsuapi_cj": {
      "api": "https://api.guangsuapi.com/api.php/provide/vod",
      "name": "光速资源站采集接口地址",
      "detail": "https://api.guangsuapi.com"
    },
    "dyttzy": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "电影天堂资源",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "ruyi": {
      "api": "https://cj.rycjapi.com/api.php/provide/vod",
      "name": "如意资源"
    },
    "bfzy": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "暴风资源"
    }
	};
// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
