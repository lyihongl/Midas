import jwt
import data.users_model as users_model
from flask import make_response

def ValidateToken(payload, secret):
    token = jwt.decode(payload, secret, algorithms=['HS256'])
    (username) = users_model.SelectUser(["username"], ["id"], [token['userid']])[0][0]
    if(username == token['username']):
        return make_response(
            {
                'valid': True,
                'username':username
            })
    else:
        return make_response({'valid': False})

def ValidateToken_SS(payload, secret):
    token = jwt.decode(payload, secret, algorithms=['HS256'])
    (username) = users_model.SelectUser(["username"], ["id"], [token['userid']])[0][0]
    if(username == token['username']):
        return { 'valid': True, 'username':username, 'userid':token['userid'] }
    else:
        return {'valid': False}
