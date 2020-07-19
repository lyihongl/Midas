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

    def Query(self, query):
        self.__buildSelectQuery(["UserID, ID"], ["Wow"])
        pass
    
    def __buildSelectQuery(self, columns, where):
        query = "SELECT "
        
        query += ",".join(columns)

        query+=" from "+self.database

        return(query)
