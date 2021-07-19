from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
class Login:
    def __init__(self, data):
        self.id = data['id']
        self.email_address = data['email_address']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO emails (email_address, created_at, updated_at)
            VALUES (%(email_address)s, NOW(), NOW());
        """
        id = connectToMySQL("email_validation_schema").query_db(query, data)

        return id

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL("email_validation_schema").query_db(query)

        all_logins = []

        for row in results:
            all_logins.append(cls(row))

        return all_logins

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM emails WHERE id = %(id)s;"
        results = connectToMySQL("email_validation_schema").query_db(query, data)

        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """
            UPDATE emails SET email = %(email_address)s, updated_at = NOW() 
            WHERE id = %(id)s;
        """
        connectToMySQL("email_validation_schema").query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM emails WHERE id = %(id)s;"

        connectToMySQL("email_validation_schema").query_db(query, data)

    @staticmethod
    def validate_login( login ):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(login['email_address']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid