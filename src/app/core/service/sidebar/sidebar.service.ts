import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {
    if (localStorage.getItem('sideBarPosition') == 'expand') {
      this.expandSideBar.next(true);
    } else {
      this.expandSideBar.next(false);
    }
  }

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<any> = new BehaviorSubject<any>(
    localStorage.getItem('isMobileSidebar') || false
  );

  public expandSideBar: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next(false);
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next(true);
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

  private sidebarData: Array<any> = [
    {
      tittle: 'Main Menu',
      hasSubRoute: true,
      icon: 'assets/img/icons/menu-icon.svg',
      showSubRoute: false,
      route: '',
      activeRoute: '',
      subRoutes: [
        {
          tittle: 'Dashboard',
          hasSubRoute: false,
          icon: 'assets/img/icons/dashboard.svg',
          showSubRoute: false,
          route: routes.dashboard,
          activeRoute: this.getActiveRoute(routes.dashboard),
          subRoutes: [],
        },
        {
          tittle: 'Groups',
          hasSubRoute: false,
          icon: 'assets/img/icons/groups.svg',
          showSubRoute: false,
          route: routes.groups,
          activeRoute: this.getActiveRoute(routes.groups),
          subRoutes: [],
        },
        {
          tittle: 'Profile',
          hasSubRoute: false,
          icon: 'assets/img/icons/user 1.svg',
          showSubRoute: false,
          route: routes.profile,
          activeRoute: this.getActiveRoute(routes.profile),
          subRoutes: [],
        },
        // {
        //   tittle: 'Product',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/product.svg',
        //   showSubRoute: false,
        //   route: routes.product,
        //   activeRoute: this.getActiveRoute(routes.product),
        //   subRoutes: [
        //     {
        //       tittle: 'Product List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.productList,
        //       activeRoute: this.getActiveRoute(routes.productList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Product',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addProduct,
        //       activeRoute: this.getActiveRoute(routes.addProduct),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Category List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.categoryList,
        //       activeRoute: this.getActiveRoute(routes.categoryList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Category',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addCategory,
        //       activeRoute: this.getActiveRoute(routes.addCategory),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Sub Category List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.subCategoryList,
        //       activeRoute: this.getActiveRoute(routes.subCategoryList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Sub Category',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addSubcategory,
        //       activeRoute: this.getActiveRoute(routes.addSubcategory),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Brand List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.brandList,
        //       activeRoute: this.getActiveRoute(routes.brandList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Import Products',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.importProduct,
        //       activeRoute: this.getActiveRoute(routes.importProduct),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Print Barcode',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.barcode,
        //       activeRoute: this.getActiveRoute(routes.barcode),
        //       subRoutes: [],
        //     },
        //   ],
        // },
        // {
        //   tittle: 'Sales',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/sales1.svg',
        //   showSubRoute: false,
        //   route: routes.sales,
        //   activeRoute: this.getActiveRoute(routes.sales),
        //   subRoutes: [
        //     {
        //       tittle: 'Sales List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.salesList,
        //       activeRoute: this.getActiveRoute(routes.salesList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'POS',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.pos,
        //       activeRoute: this.getActiveRoute(routes.pos),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'New Sales',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addSales,
        //       activeRoute: this.getActiveRoute(routes.addSales),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Sales Return List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.salesReturnList,
        //       activeRoute: this.getActiveRoute(routes.salesReturnList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'New Sales Return',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.createSalesReturn,
        //       activeRoute: this.getActiveRoute(routes.createSalesReturn),
        //       subRoutes: [],
        //     },
        //   ],
        // },

        // {
        //   tittle: 'Purchase',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/purchase1.svg',
        //   showSubRoute: false,
        //   route: routes.purchase,
        //   activeRoute: this.getActiveRoute(routes.purchase),
        //   subRoutes: [
        //     {
        //       tittle: 'Purchase List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.purchaseList,
        //       activeRoute: this.getActiveRoute(routes.purchaseList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Purchase',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addPurchase,
        //       activeRoute: this.getActiveRoute(routes.addPurchase),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Import Purchase',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.importPurchase,
        //       activeRoute: this.getActiveRoute(routes.importPurchase),
        //       subRoutes: [],
        //     },
        //   ],
        // },

        // {
        //   tittle: 'Expense',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/expense1.svg',
        //   showSubRoute: false,
        //   route: routes.expense,
        //   activeRoute: this.getActiveRoute(routes.expense),
        //   subRoutes: [
        //     {
        //       tittle: 'Expense List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.expenseList,
        //       activeRoute: this.getActiveRoute(routes.expenseList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Expense',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.createExpense,
        //       activeRoute: this.getActiveRoute(routes.createExpense),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Expense Category',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.expenseCategory,
        //       activeRoute: this.getActiveRoute(routes.expenseCategory),
        //       subRoutes: [],
        //     },
        //   ],
        // },

        // {
        //   tittle: 'Quotation',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/quotation1.svg',
        //   showSubRoute: false,
        //   route: routes.quotation,
        //   activeRoute: this.getActiveRoute(routes.quotation),
        //   subRoutes: [
        //     {
        //       tittle: 'Quotation List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.quotationList,
        //       activeRoute: this.getActiveRoute(routes.quotationList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Quotation',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addQuotation,
        //       activeRoute: this.getActiveRoute(routes.addQuotation),
        //       subRoutes: [],
        //     },
        //   ],
        // },

        // {
        //   tittle: 'Transfer',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/transfer1.svg',
        //   showSubRoute: false,
        //   route: routes.transfer,
        //   activeRoute: this.getActiveRoute(routes.transfer),
        //   subRoutes: [
        //     {
        //       tittle: 'Transfer List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.transferList,
        //       activeRoute: this.getActiveRoute(routes.transferList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Transfer',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addTransfer,
        //       activeRoute: this.getActiveRoute(routes.addTransfer),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Import Transfer',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.importTransfer,
        //       activeRoute: this.getActiveRoute(routes.importTransfer),
        //       subRoutes: [],
        //     },
        //   ],
        // },
        // {
        //   tittle: 'Return',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/return1.svg',
        //   showSubRoute: false,
        //   route: routes.return,
        //   activeRoute: this.getActiveRoute(routes.return),
        //   subRoutes: [
        //     {
        //       tittle: 'Sales Return List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.salesReturnList,
        //       activeRoute: this.getActiveRoute(routes.salesReturnList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Sales Return',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.createSalesReturn,
        //       activeRoute: this.getActiveRoute(routes.createSalesReturn),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Purchase Return List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.purchaseReturnList,
        //       activeRoute: this.getActiveRoute(routes.purchaseReturnList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Purchase Return',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.createPurchaseReturn,
        //       activeRoute: this.getActiveRoute(routes.createPurchaseReturn),
        //       subRoutes: [],
        //     },
        //   ],
        // },

        // {
        //   tittle: 'People',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/users1.svg',
        //   showSubRoute: false,
        //   route: routes.people,
        //   activeRoute: this.getActiveRoute(routes.people),
        //   subRoutes: [
        //     {
        //       tittle: 'Customer List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.customerList,
        //       activeRoute: this.getActiveRoute(routes.customerList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Customer',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addCustomer,
        //       activeRoute: this.getActiveRoute(routes.addCustomer),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Supplier List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.supplierList,
        //       activeRoute: this.getActiveRoute(routes.supplierList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Supplier',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addSupplier,
        //       activeRoute: this.getActiveRoute(routes.addSupplier),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'User List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.userList,
        //       activeRoute: this.getActiveRoute(routes.userList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add User',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addUser,
        //       activeRoute: this.getActiveRoute(routes.addUser),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Store List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.storeList,
        //       activeRoute: this.getActiveRoute(routes.storeList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Add Store',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.addStore,
        //       activeRoute: this.getActiveRoute(routes.addStore),
        //       subRoutes: [],
        //     },
        //   ],
        // },

        // {
        //   tittle: 'Places',
        //   hasSubRoute: true,
        //   icon: 'assets/img/icons/places.svg',
        //   showSubRoute: false,
        //   route: routes.places,
        //   activeRoute: this.getActiveRoute(routes.places),
        //   subRoutes: [
        //     {
        //       tittle: 'New Country',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.newCountry,
        //       activeRoute: this.getActiveRoute(routes.newCountry),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'Countries list',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.countriesList,
        //       activeRoute: this.getActiveRoute(routes.countriesList),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'New State',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.newState,
        //       activeRoute: this.getActiveRoute(routes.newState),
        //       subRoutes: [],
        //     },
        //     {
        //       tittle: 'State List',
        //       hasSubRoute: false,
        //       icon: '',
        //       showSubRoute: false,
        //       route: routes.stateList,
        //       activeRoute: this.getActiveRoute(routes.stateList),
        //       subRoutes: [],
        //     },
        //   ],
        // },
      ],
    },

    // {
    //   tittle: 'Users',
    //   hasSubRoute: true,
    //   icon: 'assets/img/icons/users1.svg',
    //   showSubRoute: false,
    //   route: '',
    //   activeRoute: 'users',
    //   subRoutes: [
    //     {
    //       tittle: 'New User',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.newUser,
    //       activeRoute: this.getActiveRoute(routes.newUser),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'User List',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.usersUserList,
    //       activeRoute: this.getActiveRoute(routes.usersUserList),
    //       subRoutes: [],
    //     },
    //   ],
    // },

    // {
    //   tittle: 'Components',
    //   hasSubRoute: true,
    //   icon: 'assets/img/icons/layers.svg',
    //   showSubRoute: false,
    //   route: '',
    //   activeRoute: '',
    //   subRoutes: [
    //     {
    //       tittle: 'Components',
    //       hasSubRoute: false,
    //       icon: 'assets/img/icons/layers.svg',
    //       showSubRoute: false,
    //       route: routes.components,
    //       activeRoute: this.getActiveRoute(routes.components),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Elements',
    //       hasSubRoute: true,
    //       icon: 'assets/img/icons/box.svg',
    //       showSubRoute: false,
    //       route: routes.element,
    //       activeRoute: this.getActiveRoute(routes.element),
    //       subRoutes: [
    //         {
    //           tittle: 'Sweet Alerts',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.sweetAlerts,
    //           activeRoute: this.getActiveRoute(routes.sweetAlerts),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Tooltip',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.tooltip,
    //           activeRoute: this.getActiveRoute(routes.tooltip),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Popover',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.popover,
    //           activeRoute: this.getActiveRoute(routes.popover),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Ribbon',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.ribbon,
    //           activeRoute: this.getActiveRoute(routes.ribbon),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Clipboard',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.clipboard,
    //           activeRoute: this.getActiveRoute(routes.clipboard),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Drag & Drop',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.dragDrop,
    //           activeRoute: this.getActiveRoute(routes.dragDrop),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Range Slider',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.rangeSlider,
    //           activeRoute: this.getActiveRoute(routes.rangeSlider),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Rating',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.rating,
    //           activeRoute: this.getActiveRoute(routes.rating),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Toaster',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.toaster,
    //           activeRoute: this.getActiveRoute(routes.toaster),
    //           subRoutes: [],
    //         },

    //         {
    //           tittle: 'Text Editor',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.textEditor,
    //           activeRoute: this.getActiveRoute(routes.textEditor),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Counter',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.counter,
    //           activeRoute: this.getActiveRoute(routes.counter),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Scrollbar',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.scrollbar,
    //           activeRoute: this.getActiveRoute(routes.scrollbar),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Spinner',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.spinner,
    //           activeRoute: this.getActiveRoute(routes.spinner),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Notification',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.notification,
    //           activeRoute: this.getActiveRoute(routes.notification),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Lightbox',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.lightbox,
    //           activeRoute: this.getActiveRoute(routes.lightbox),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Timeline',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.timeline,
    //           activeRoute: this.getActiveRoute(routes.timeline),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Form Wizard',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formWizard,
    //           activeRoute: this.getActiveRoute(routes.formWizard),
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       tittle: 'Charts',
    //       hasSubRoute: true,
    //       icon: 'assets/img/icons/bar-chart-2.svg',
    //       showSubRoute: false,
    //       route: routes.charts,
    //       activeRoute: this.getActiveRoute(routes.charts),
    //       subRoutes: [
    //         {
    //           tittle: 'Apex Charts',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.chartApex,
    //           activeRoute: this.getActiveRoute(routes.chartApex),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Ng2 Charts',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.chartNg2,
    //           activeRoute: this.getActiveRoute(routes.chartNg2),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Prime NG Charts',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.chartPrime,
    //           activeRoute: this.getActiveRoute(routes.chartPrime),
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       tittle: 'Icons',
    //       hasSubRoute: true,
    //       icon: 'assets/img/icons/award.svg',
    //       showSubRoute: false,
    //       route: routes.icons,
    //       activeRoute: this.getActiveRoute(routes.icons),
    //       subRoutes: [
    //         {
    //           tittle: 'Fontawesome Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconFontAwesome,
    //           activeRoute: this.getActiveRoute(routes.iconFontAwesome),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Feather Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconFeather,
    //           activeRoute: this.getActiveRoute(routes.iconFeather),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Ionic Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconIonic,
    //           activeRoute: this.getActiveRoute(routes.iconIonic),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Material Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconMaterial,
    //           activeRoute: this.getActiveRoute(routes.iconMaterial),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Pe7 Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconPe7,
    //           activeRoute: this.getActiveRoute(routes.iconPe7),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Simpleline Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconSimpleline,
    //           activeRoute: this.getActiveRoute(routes.iconSimpleline),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Themify Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconThemify,
    //           activeRoute: this.getActiveRoute(routes.iconThemify),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Weather Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconWeather,
    //           activeRoute: this.getActiveRoute(routes.iconWeather),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Typicon Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconTypicon,
    //           activeRoute: this.getActiveRoute(routes.iconTypicon),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Flag Icons',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.iconFlag,
    //           activeRoute: this.getActiveRoute(routes.iconFlag),
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       tittle: 'Forms',
    //       hasSubRoute: true,
    //       icon: 'assets/img/icons/columns.svg',
    //       showSubRoute: false,
    //       route: routes.forms,
    //       activeRoute: this.getActiveRoute(routes.forms),
    //       subRoutes: [
    //         {
    //           tittle: 'Basic Inputs',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formBasicInputs,
    //           activeRoute: this.getActiveRoute(routes.formBasicInputs),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Input Groups',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formInputsGroups,
    //           activeRoute: this.getActiveRoute(routes.formInputsGroups),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Horizontal Form',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formHorizontal,
    //           activeRoute: this.getActiveRoute(routes.formHorizontal),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Vertical Form',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formVertical,
    //           activeRoute: this.getActiveRoute(routes.formVertical),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Form Mask',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formMask,
    //           activeRoute: this.getActiveRoute(routes.formMask),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Form Validation',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formValidation,
    //           activeRoute: this.getActiveRoute(routes.formValidation),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Form Select',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.formSelect,
    //           activeRoute: this.getActiveRoute(routes.formSelect),
    //           subRoutes: [],
    //         },
    //       ],
    //     },

    //     {
    //       tittle: 'Table',
    //       hasSubRoute: true,
    //       icon: 'assets/img/icons/layout.svg',
    //       showSubRoute: false,
    //       route: routes.table,
    //       activeRoute: this.getActiveRoute(routes.table),
    //       subRoutes: [
    //         {
    //           tittle: 'Basic Tables',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.basicTable,
    //           activeRoute: this.getActiveRoute(routes.basicTable),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: 'Data Tables',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.dataTable,
    //           activeRoute: this.getActiveRoute(routes.dataTable),
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       tittle: 'Blank Page',
    //       hasSubRoute: false,
    //       icon: 'assets/img/icons/file.svg',
    //       showSubRoute: false,
    //       route: routes.blankPage,
    //       activeRoute: this.getActiveRoute(routes.blankPage),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Error Pages',
    //       hasSubRoute: true,
    //       icon: 'assets/img/icons/alert-octagon.svg',
    //       showSubRoute: false,
    //       route: routes.errorPages,
    //       activeRoute: this.getActiveRoute(routes.errorPages),
    //       subRoutes: [
    //         {
    //           tittle: '404 Error',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.errorPage404,
    //           activeRoute: this.getActiveRoute(routes.errorPage404),
    //           subRoutes: [],
    //         },
    //         {
    //           tittle: '500 Error',
    //           hasSubRoute: false,
    //           icon: '',
    //           showSubRoute: false,
    //           route: routes.errorPage500,
    //           activeRoute: this.getActiveRoute(routes.errorPage500),
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //   ],
    // },

    // {
    //   tittle: 'Application',
    //   hasSubRoute: true,
    //   icon: 'assets/img/icons/product.svg',
    //   showSubRoute: false,
    //   route: routes.application,
    //   activeRoute: this.getActiveRoute(routes.application),
    //   subRoutes: [
    //     {
    //       tittle: 'Chat',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.chat,
    //       activeRoute: this.getActiveRoute(routes.chat),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Calendar',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.calendar,
    //       activeRoute: this.getActiveRoute(routes.calendar),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Email',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.email,
    //       activeRoute: this.getActiveRoute(routes.email),
    //       subRoutes: [],
    //     },
    //   ],
    // },

    // {
    //   tittle: 'Report',
    //   hasSubRoute: true,
    //   icon: 'assets/img/icons/time.svg',
    //   showSubRoute: false,
    //   route: routes.report,
    //   activeRoute: this.getActiveRoute(routes.report),
    //   subRoutes: [
    //     {
    //       tittle: 'Purchase order report',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.purchaseOrderReport,
    //       activeRoute: this.getActiveRoute(routes.purchaseOrderReport),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Inventory Report',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.inventoryReport,
    //       activeRoute: this.getActiveRoute(routes.inventoryReport),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Sales Report',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.salesReport,
    //       activeRoute: this.getActiveRoute(routes.salesReport),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Invoice Report',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.invoiceReport,
    //       activeRoute: this.getActiveRoute(routes.invoiceReport),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Purchase Report',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.purchaseReport,
    //       activeRoute: this.getActiveRoute(routes.purchaseReport),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Supplier Report',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.supplierReport,
    //       activeRoute: this.getActiveRoute(routes.supplierReport),
    //       subRoutes: [],
    //     },
    //     {
    //       tittle: 'Customer Report',
    //       hasSubRoute: false,
    //       icon: '',
    //       showSubRoute: false,
    //       route: routes.customerReport,
    //       activeRoute: this.getActiveRoute(routes.customerReport),
    //       subRoutes: [],
    //     },
    //   ],
    // },

    {
      tittle: 'Settings',
      hasSubRoute: false,
      icon: 'assets/img/icons/settings.svg',
      showSubRoute: false,
      route: routes.setting,
      activeRoute: this.getActiveRoute(routes.setting),
      subRoutes: [],
    },
  ];

  public getSideBarData :BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.sidebarData)
  getActiveRoute(route: string): string {
    let url = route.split('/');
    return url[url.length - 1];
  }
}
