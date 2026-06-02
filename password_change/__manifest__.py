# -*- coding: utf-8 -*-
{
    'name': 'Change Password',
    'version': '19.0.1.0.0',
    'summary': 'Changing passoword',
    'description': """
        Changing password
    """,
    'author': 'Mostakim Jihad',
    'depends': [
        'base',
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/inherit_change_password.xml',
    ],
    'assets': {
       'web.assets_backend': [
          'betopia_task/static/src/js/user_menu.js',
       ]
    },
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
