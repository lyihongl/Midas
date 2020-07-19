import utils.db
import bcrypt
import jwt
from flask import make_response


def Login(u, p, sql_inst):
    usr = u[0]

    cursor = sql_inst.GetCursor()
    query = "select * from users where username=%s;"
    cursor.execute(query, (usr,))

    for (Id, username, email, password) in cursor:
        if (password == bcrypt.hashpw(p[0].encode('utf-8'), password.encode('utf-8')).decode('utf-8')):
            #pass
            token = jwt.encode({'username':username, 'userid':Id}, 'secret', algorithm='HS256')
            #response = {'token': 'valid'}

            response = make_response({'ok':'ok'})
            response.set_cookie('token', token)
            return response
        else:
            response = {'token': 'not valid'}
            return response
    

