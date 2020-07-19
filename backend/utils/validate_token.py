import jwt

def ValidateToken(payload, secret):
    token = jwt.decode(payload, secret, algorithms=['HS256'])