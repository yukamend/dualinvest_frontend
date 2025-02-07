export const routes = {
  accountTab: '/account/:tab',
  accountTabType: '/account/:tab/:type',
  chainOption: '/chain-option',
  chainOptionTyped: '/chain-option/:type',
  chainOptionMgmt: '/chain-option-mgmt/:id',
  dualInvest: '/dual-invest',
  dualInvestMgmt: '/dual-invest-mgmt/:id',
  dualInvestMgmtImg: '/dual-invest-mgmt/:id/:orderId',
  home: '/home',
  noService: 'no-service',
  recurringVault: '/recurring-vault',
  recurringVaultMgmt: '/recurring-vault-mgmt/:currency/:type',
  referral: '/:referrer'
}

export const SHARE_URL = window.location.origin.toString() + '/#/dual_invest_mgmt/:id/:orderId'
