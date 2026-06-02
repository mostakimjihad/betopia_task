from odoo import api, fields, _, models
from odoo.exceptions import UserError, AccessDenied


class ResUsersNewPassword(models.TransientModel):
    _inherit = 'res.users.identitycheck'

    confirm_password = fields.Char(string='Confirm Password')

    def _check_identity(self):
        if self.env.context.get('password') != self.confirm_password:
            raise UserError(
                _("Your current password and confirm password are different."))
        else:
            super()._check_identity()
