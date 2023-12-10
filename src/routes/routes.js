import config from "../config";
import DefaultLayout from "../layout/DefaultLayout";

// Page
import Home from "../Pages/Home";
import Iphone from "../Pages/Iphone";
import Ipad from "../Pages/Ipad";
import Mac from "../Pages/Mac";
import Watch from "../Pages/Watch";
import AmThanh from "../Pages/AmThanh";
import PhuKien from "../Pages/PhuKien";
import DichVu from "../Pages/DichVu";
import TinTuc from "../Pages/TinTuc";
import KhuyenMai from "../Pages/KhuyenMai";

import HomeLayout from "../layout/HomeLayout";

// Public routes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: HomeLayout,
  },
  {
    path: config.routes.iphone,
    component: Iphone,
    layout: DefaultLayout,
  },
  {
    path: config.routes.ipad,
    component: Ipad,
    layout: DefaultLayout,
  },
  {
    path: config.routes.mac,
    component: Mac,
    layout: DefaultLayout,
  },
  {
    path: config.routes.watch,
    component: Watch,
    layout: DefaultLayout,
  },
  {
    path: config.routes.amThanh,
    component: AmThanh,
    layout: DefaultLayout,
  },
  {
    path: config.routes.phuKien,
    component: PhuKien,
    layout: DefaultLayout,
  },
  {
    path: config.routes.dichVu,
    component: DichVu,
    layout: null,
  },
  {
    path: config.routes.tinTuc,
    component: TinTuc,
    layout: null,
  },
  {
    path: config.routes.khuyenMai,
    component: KhuyenMai,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
