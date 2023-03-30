import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

const BUNDLE_PRODUCT_TYPE = 'static-bundle-parent';
const MASTER_VARIANT_ID = 1;

const entryPointUriPath =
  typeof window === 'undefined'
    ? process.env.ENTRY_POINT_URI_PATH
    : window.app.entryPointUriPath;

const ROOT_PATH = entryPointUriPath;    

const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);

export {
  ROOT_PATH,
  BUNDLE_PRODUCT_TYPE,
  MASTER_VARIANT_ID,
  entryPointUriPath,
  PERMISSIONS,
};
