import { categoryMenus, Menus } from 'src/data/menuData';

//메뉴 목록(고정메뉴 + 상품카테고리)
export const menuListMapping = (menuList: Menus[]) => {
  const newMenuList = menuList?.map((menu) => {
    if (menu.id === 'menu_02') {
      return { ...menu, sub: categoryMenus };
    }
    return menu;
  });

  return newMenuList;
};
