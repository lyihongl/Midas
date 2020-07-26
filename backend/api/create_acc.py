#import utils.db as db
import bcrypt
import data.users_model as users_model

def CreateAcc(u, e, p):
    hashed = bcrypt.hashpw(p.encode('utf-8'), bcrypt.gensalt())
    users_model.InsertUser(u, e, hashed)