from utils.db import DBInstance
from data.sql_data import sql_data

class Transaction:
    def __init__(self):
        self.t_id = 0
        self.unit_price = 0
        self.quantity = 0
        self.total = 0
        self.category = ""
        self.user_id = 0

def InsertTransaction(unit_price, quant, total, category, user_id):
    sql_inst = DBInstance.InitFromDict(sql_data)
    query = """insert into transaction (unit_price, quantity, total, category, user_id) values
    (%s, %s, %s, %s, %s)"""
    result = sql_inst.ExecuteQuery(query, [unit_price, quant, total, category, user_id])
