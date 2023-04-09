import { setDataItem } from "./type";

const nodeData: setDataItem[] = [
  { type: "title", title: "网络" },
  {
    type: "cell",
    title: "使用3G/4G/5G网络播放",
    filedName: "netPlayState",
    isSwitch: true,
    arrow: false,
  },
  {
    type: "cell",
    title: "使用3G/4G/5G网络下载",
    filedName: "netdownloadState",
    isSwitch: true,
    arrow: false,
  },
  {
    type: "cell",
    title: "动态页中WiFi下自动播放视频",
    filedName: "autoWifiPlayVideoState",
    isSwitch: true,
    arrow: false,
  },
  {
    type: "cell",
    title: "流量下进入视频详情页自动播放",
    filedName: "autoGpsPlayVideoState",
    isSwitch: true,
    arrow: false,
  },
  { type: "title", title: "播放和下载" },
  {
    type: "cell",
    title: "在线播放音质",
    value: "自动",
    isSwitch: false,
    arrow: true,
  },
  {
    type: "cell",
    title: "下载音质",
    value: "极高",
    isSwitch: false,
    arrow: true,
  },
  { type: "cell", title: "清除缓存", isSwitch: false, arrow: true },
  {
    type: "cell",
    title: "播客随心听FM自动播放",
    filedName: "bokeFmState",
    isSwitch: true,
    arrow: false,
  },
  { type: "title", title: "账号和隐私" },
  { type: "cell", title: "账号和绑定设置", isSwitch: false, arrow: true },
  { type: "cell", title: "会员登陆设备管理", isSwitch: false, arrow: true },
  { type: "cell", title: "寻找并邀请好友", isSwitch: false, arrow: true },
  { type: "cell", title: "消息和隐私设置", isSwitch: false, arrow: true },
  { type: "cell", title: "登录保护", isSwitch: false, arrow: true },
  { type: "cell", title: "系统权限设置", isSwitch: false, arrow: true },
  { type: "title", title: "工具" },
  {
    type: "cell",
    title: "锁屏歌词",
    filedName: "blockScrenWord",
    isSwitch: true,
    arrow: false,
  },
  {
    type: "cell",
    title: "截屏后提示分享",
    filedName: "blockScrenTps",
    isSwitch: true,
    arrow: false,
  },
  {
    type: "cell",
    title: "跑步FM离线包",
    filedName: "runFmNonet",
    isSwitch: true,
    arrow: false,
  },
  {
    type: "cell",
    title: "直播内容推荐",
    filedName: "liveRermote",
    isSwitch: true,
    arrow: false,
  },
  {
    type: "cell",
    title: "手机锁屏菜单支持加“红心”",
    filedName: "blockScrenRed",
    isSwitch: true,
    arrow: false,
  },
  { type: "cell", title: "顶部导航自定义", isSwitch: false, arrow: true },
  { type: "cell", title: "账号页管理", isSwitch: false, arrow: true },
  { type: "cell", title: "智能硬件", isSwitch: false, arrow: true },
  { type: "cell", title: "HomePod绑定", isSwitch: false, arrow: true },
];

export { nodeData };