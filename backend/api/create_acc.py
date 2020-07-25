#import utils.db as db
import bcrypt
import data.users_model as users_model

def CreateAcc(u, e, p, sql_inst):
    #print(type(p))
    hashed = bcrypt.hashpw(p.encode('utf-8'), bcrypt.gensalt())
    users_model.InsertUser(u, e, hashed)
    #query = "insert into users (username, email, password) values (%s, %s, %s)"
    #cursor = sql_inst.GetCursor()

    #print(type(hashed))
    #print("len", len(hashed))
    #cursor.execute(query, (u, e, hashed))
    #cursor.commit()
    #sql_inst.conn.commit()