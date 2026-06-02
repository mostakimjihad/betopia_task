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
        await env.services.action.doAction({
            type: "ir.actions.act_window",
            res_model: "change.password.own",
            views: [[false, "form"]],
            target: "new",
        });
     },
      sequence: 60,
  };
}
registry.category("user_menuitems").add("debug", changePass)
