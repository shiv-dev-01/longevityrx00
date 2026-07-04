export const COMPANY_NAME = "IAM longevity Rx";
export const COMPANY_SLUG = "longevityrx";
export const COMPANY_DOMAIN = "longevityrx.com";

export const normalizeBrandText = (value) => {
  if (value == null || value === "") return value;
  return String(value).replace(/formscripts/gi, COMPANY_NAME);
};

export const normalizeProductData = (product) => {
  if (!product || typeof product !== "object") return product;

  return {
    ...product,
    product_name: normalizeBrandText(product.product_name),
    product_description: normalizeBrandText(product.product_description),
    product_brand: normalizeBrandText(product.product_brand || COMPANY_NAME),
  };
};

const BaseUrl = `https://panel.whitelabelmd.com/${COMPANY_SLUG}/api/`;

export const products_url = BaseUrl + "get_products";
export const cheke_state = BaseUrl + "cheke_state";
export const add_user_check_product = BaseUrl + "createOrder_test";
export const createOrder_test_new = BaseUrl + "createOrder_test";
export const contact_details_step_25 = BaseUrl + "contact_details_step_25";
export const get_checkout_link_data = BaseUrl + "get_checkout_link_data";
export const get_product_details = BaseUrl + "get_product_details";
export const get_product_details_v3 = BaseUrl + "get_product_details_v3";
export const get_url_data = BaseUrl + "get_url_data";
export const createOrder_test = BaseUrl + "createOrder_test";
export const check_coupons = BaseUrl + "check_coupons";
export const member_view = BaseUrl + "member_view";