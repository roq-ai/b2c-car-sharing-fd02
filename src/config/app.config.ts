interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Staff', 'Admin', 'Car Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'Update own user information',
    'Delete own user information',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage company data',
    'Edit personal profile',
    'View and manage all company details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e1013edb-15a4-4065-8f41-0e56e7782264',
};
