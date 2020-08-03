from flask import Flask
from flask import request
from flask import jsonify
app = Flask(__name__)

from api.login import Login
from api.create_acc import CreateAcc
from api.add_transact import AddTransact
from utils.db import DBInstance
from utils.validate_token import ValidateToken
import json
from flask_cors import CORS, cross_origin

cors = CORS(app, origins="127.0.0.1:3000", supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

#if __name__ == "main":
#    with open('utils/.env', 'r') as env:
#        sql_data = json.loads(env.read())
#    #print(sql_data)
#    #sql_instance = DBInstance(sql_data["user"], sql_data["pw"], sql_data["db"], sql_data["host"])
#    sql_instance = DBInstance.InitFromDict(sql_data)
    #cursor = sql_instance.conn.cursor()
    #print(sql_instance.conn)
    #rows = cursor.execute("select * from users")
    #for i in rows:
        #print(i)
    #print("SQL Cursor")

@app.route('/')
def home():
    return 'Welcome'


@app.route('/api/login', methods=['POST'])
@cross_origin(origin="127.0.0.1", supports_credentials=True, headers=['Content-Type'])
def login():
    print("hit end point")
    if request.method == 'POST':
        creds = request.json
        print(creds['username'])
        return Login(creds['username'], creds['password'])
    return jsonify(r"{'ok':'ok'}")

@app.route('/api/validate_login', methods=['POST'])
@cross_origin(origin="127.0.0.1", supports_credentials=True, headers=['Content-Type'])
def validate_login():
    if request.method == 'POST':
        creds = request.json
        print(creds)
        return ValidateToken(creds['token'], 'secret')
    return jsonify(r"{'ok':'ok'}")

@app.route('/api/create_acc', methods=['POST'])
@cross_origin(origin="127.0.0.1", supports_credentials=True, headers=['Content-Type'])
def create_acc():
    creds = request.json
    CreateAcc(creds['username'], creds['email'], creds['password'])
    print(creds)
    return jsonify(r"{'ok':'ok'}")

@app.route('/api/view_data', methods=['GET'])
@cross_origin(origin="127.0.0.1", supports_credentials=True, headers=['Content-Type'])
def view_data():
    print(request.args.get('token'))
    return jsonify({'ok':'ok'})

@app.route('/api/add_transaction', methods=['POST'])
@cross_origin(origin="127.0.0.1", supports_credentials=True, headers=['Content-Type'])
def add_transaction():
    # user, unit_p, quant, total_val, category
    print(request.json)
    AddTransact(None, None, None, None, None)
    return jsonify({'ok':'ok'})