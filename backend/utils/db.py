import mysql.connector as sql


class DBInstance:
    def __init__(self, user, passw, database, host):

        self.database = database
        self.user = user
        self.passw = passw
        self.host = host
        print(user, passw, host, database)

        self.conn = sql.connect(
            user=self.user,
            password=self.passw,
            host=self.host,
            database=self.database)

        print("connection check", self.conn.is_connected())
    def GetCursor(self):
        return self.conn.cursor()

    def ExecuteQuery(self, query, args):
        cursor = self.conn.cursor(buffered=True)
        print(query, args)
        cursor.execute(query, args)
        #self.conn.cursor(buffered=True).execute(query, args)
        if("select" not in query.lower()):
            self.conn.commit()
            return self.conn.cursor()
        else:
            print("here")
            return cursor.fetchall()

        #print(self.conn.cursor())
        #for i in self.conn.cursor():
            #print("db: ", i)

    def CloseInstance(self):
        self.conn.close()

    def InitFromDict(dict):
        return DBInstance(dict["user"], dict["pw"], dict["db"], dict["host"])
    
    def BuildSelectQuery(table, columns, where_cols):
        query = "SELECT "
        query += ",".join(columns)
        query += " from "+table
        cols = ["where "+i+"=%s" for i in where_cols]
        cols = " and ".join(cols)
        query+= " "+cols
        return(query)
