from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import dojo

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        if "dojo_id" in data:
            self.dojo = dojo.Dojo.get_one({"id": row['dojo_id']})
        
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO ninjas (first_name, last_name, age, dojo_id, created_at, updated_at)
            VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s, NOW(), NOW());
        """

        return connectToMySQL("dojos_and_ninjas").query_db(query, data) 

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL("dojos_and_ninjas").query_db(query, data)

        all_ninjas = []
        for row in results:
            ninjas.append(cls(row))

        return all_ninjas



    @classmethod
    def get_one(cls, data):
        pass


    @classmethod
    def update(cls, data):
        pass


    @classmethod
    def delete(cls, data):
        pass
