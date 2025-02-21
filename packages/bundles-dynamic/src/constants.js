import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

const BUNDLE_PRODUCT_TYPE = 'dynamic-bundle-parent';
const BUNDLE_CART_CUSTOM_TYPE = 'dynamic-bundle-parent-child-link';
const MASTER_VARIANT_ID = 1;
const ATTRIBUTES = {
  CATEGORIES: 'categories',
  CATEGORY_SEARCH: 'category-search',
  DYNAMIC_PRICE: 'dynamic-price',
  MIN_QUANTITY: 'min-quantity',
  MAX_QUANTITY: 'max-quantity',
};

const entryPointUriPath =
  typeof window === 'undefined'
    ? process.env.ENTRY_POINT_URI_PATH
    : window.app.entryPointUriPath;

const ROOT_PATH = entryPointUriPath;    

const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);

export {
  ROOT_PATH,
  BUNDLE_PRODUCT_TYPE,
  BUNDLE_CART_CUSTOM_TYPE,
  MASTER_VARIANT_ID,
  ATTRIBUTES,
  entryPointUriPath,
  PERMISSIONS,
};
