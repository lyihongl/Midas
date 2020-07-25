import jwt
import utils.db

def ValidateToken(payload, secret):
    token = jwt.decode(payload, secret, algorithms=['HS256'])
    #print("validate token:", token)