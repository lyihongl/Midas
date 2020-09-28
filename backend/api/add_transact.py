import utils.db
import data.transaction_model as trx_model

def AddTransact(userid, unit_p, quant, total_val, category, other):
    trx_model.InsertTransaction(unit_p, quant, total_val, category, userid) 
    pass
