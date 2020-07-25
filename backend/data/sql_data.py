import json
with open('utils/.env', 'r') as env:
    sql_data = json.loads(env.read())