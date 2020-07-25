from utils.db import DBInstance
from data.sql_data import sql_data


#sql_instance = DBInstance(sql_data["user"], sql_data["pw"], sql_data["db"], sql_data["host"])
class User:
    def __init__(self):
        self.id = 0
        self.username = ""
        self.password = ""
        self.email = ""


def InsertUser(username, email, password):
    sql_inst = DBInstance.InitFromDict(sql_data)
    query = "insert into users (username, email, password) values (%s, %s, %s)"
    result = sql_inst.ExecuteQuery(query, [username, email, password])

def SelectUser(select_col, where_col, where_val):
    sql_inst = DBInstance.InitFromDict(sql_data)
    query = DBInstance.BuildSelectQuery("users", select_col, where_col)
    print("query",query)
    result = sql_inst.ExecuteQuery(query, where_val)
    return result
    #print(cursor)
    #for i in cursor:
        #print("i",i)
    

    #print(query)
    #query = "select * from users where "
    #cols = ["where "+i+"=%s" for i in where_col]
    #cols = " and ".join(cols)
    #sql_inst.ExecuteQuery(query, where_val)

