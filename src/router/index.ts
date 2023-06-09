import store from "@/store";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/index.vue"),
    meta: {
      keepAlive: true, //是否需要缓存
      title: "梦回云音乐-首页",
      index: 1,
    },
  },
  {
    path: "/sheetList",
    name: "sheetList",
    component: () => import("../views/musicSheet/index.vue"),
    meta: {
      title: "梦回云音乐-歌单",
      index: 5,
    },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search/index"),
    meta: {
      title: "梦回云音乐-搜索",
      index: 2,
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/user/index"),
    meta: {
      title: "梦回云音乐-个人中心",
      index: 2,
    },
    beforeEnter: (to, from, next) => {
      if (store.state.userInfo.isLogin) {
        next();
      } else {
        next("login");
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/user/login/index"),
    meta: {
      title: "梦回云音乐-登录中心",
      index: 3,
    },
    beforeEnter: (to, from, next) => {
      if (store.state.userInfo.isLogin) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/setting/index"),
    meta: {
      title: "梦回云音乐-设置中心",
      index: 2,
    },
  },
  {
    path: "/creatorCenter",
    name: "creatorCenter",
    component: () => import("../views/user/creatorCenter/index"),
    meta: {
      title: "梦回云音乐-创作者中心",
      index: 2,
    },
  },
  {
    path: "/DayRecommd",
    name: "DayRecommd",
    component: () => import("../views/homePublic/DayRecommd"),
    meta: {
      title: "梦回云音乐-每日推荐",
      index: 2,
    },
  },
  {
    path: "/sheetSquare",
    name: "sheetSquare",
    component: () => import("../views/sheetSquare/sheetSquare"),
    meta: {
      title: "梦回云音乐-歌单广场",
      index: 2,
    },
  },
  {
    path: "/comcenter",
    name: "comcenter",
    component: () => import("../views/test/index"),
    meta: {
      title: "梦回云音乐-组件测试中心",
      index: 2,
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),
    meta: {
      title: "梦回云音乐-测试",
      index: 2,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + "";
  }
  next();
});

export default router;
