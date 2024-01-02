import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: import.meta.env.VITE_PUBLIC_STORE_DOMAIN,
    storefrontToken: import.meta.env.VITE_PUBLIC_STOREFRONT_API_TOKEN,
    privateStorefrontToken: import.meta.env.VITE_PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2023-04',
    // @ts-ignore
    storefrontId: import.meta.env.VITE_PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
