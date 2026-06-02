/** @odoo-module **/
import { registry } from "@web/core/registry";
import { browser } from "@web/core/browser/browser";
import { _t } from "@web/core/l10n/translation";
function debugItem(env) {
  const urlParams = new
         URLSearchParams(window.location.search);
  urlParams.set('debug', '1');
  const debugURL = window.location.pathname + '?' +
          urlParams.toString();
  return {
      id: "debug",
      type: "item",
      description: _t("Developer Mode"),
      href: debugURL,
      callback: () => {
          browser.open(debugURL, "_self");
      },
      sequence: 60,
  };
}
registry.category("user_menuitems").add("debug", debugItem)
