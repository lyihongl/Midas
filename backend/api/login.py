import bcrypt
import jwt
import data.users_model as users_model
from flask import make_response


def Login(u, p):
    usr = u[0]

    (userid, username, password) = users_model.SelectUser(["id", "username", "password"], ["username"], [usr])[0]

    if (password == bcrypt.hashpw(p[0].encode('utf-8'), password.encode('utf-8')).decode('utf-8')):

        token = jwt.encode({'username':username, 'userid':userid}, 'secret', algorithm='HS256')
        response = make_response({'username':usr})
        response.set_cookie('token', token)
        return response
    else:
        response = {'token': 'not valid'}
        return response
    

