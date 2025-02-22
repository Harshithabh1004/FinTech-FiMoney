import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      
      {
        path: 'aboutme',
        loadComponent: () => import('./home/aboutme/aboutme.page').then(m => m.AboutmePage)
      },
      {
        path: 'bank-balance',
        loadComponent: () => import('./home/bank-balance/bank-balance.page').then(m => m.BankBalancePage)
      },
      {
        path: 'banking',
        loadComponent: () => import('./home/banking/banking.page').then(m => m.BankingPage)
      },
      {
        path: 'company',
        loadComponent: () => import('./home/company/company.page').then(m => m.CompanyPage)
      },
      {
        path: 'credit-score',
        loadComponent: () => import('./home/credit-score/credit-score.page').then(m => m.CreditScorePage)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./home/dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      {
        path: 'explore',
        loadComponent: () => import('./home/explore/explore.page').then(m => m.ExplorePage)
      },
      {
        path: 'funds',
        loadComponent: () => import('./home/funds/funds.page').then(m => m.FundsPage)
      },
      {
        path: 'help',
        loadComponent: () => import('./home/help/help.page').then(m => m.HelpPage)
      },
      {
        path: 'invest',
        loadComponent: () => import('./home/invest/invest.page').then(m => m.InvestPage)
      },
      {
        path: 'invitefriends',
        loadComponent: () => import('./home/invitefriends/invitefriends.page').then(m => m.InvitefriendsPage)
      },
      {
        path: 'money',
        loadComponent: () => import('./home/money/money.page').then(m => m.MoneyPage)
      },
      
      {
        path: 'privacy',
        loadComponent: () => import('./home/privacy/privacy.page').then(m => m.PrivacyPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./home/settings/settings.page').then(m => m.SettingsPage)
      },
      {
        path: 'user-login',
        loadComponent: () => import('./home/user-login/user-login.page').then(m => m.UserLoginPage)
      },
      {
        path: 'userprofile',
        loadComponent: () => import('./home/userprofile/userprofile.page').then(m => m.UserprofilePage)
      },
      {
        path: 'notification',
        loadComponent: () => import('./home/notification/notification.page').then( m => m.NotificationPage)
      },
      
    ],
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'splash-screen',
    loadComponent: () => import('./home/splash-screen/splash-screen.page').then(m => m.SplashScreenPage)
  },
 
];
