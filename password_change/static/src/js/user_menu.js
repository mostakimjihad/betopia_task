/** @odoo-module **/
import { registry } from "@web/core/registry";
import { browser } from "@web/core/browser/browser";
import { _t } from "@web/core/l10n/translation";
function changePass(env) {
  return {
      id: "Change Password",
      type: "item",
      description: _t("Change Password"),
      callback: async () => {
        await env.services.orm.call(
            "res.users",
            "preference_change_password",
            [[session.uid]]
        );
    },
      sequence: 60,
  };
}
registry.category("user_menuitems").add("debug", changePass)