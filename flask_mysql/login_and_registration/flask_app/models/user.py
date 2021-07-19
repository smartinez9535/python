from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL

from flask_bcrypt import Bcrypt
from flask import flash
import re

bcrypt = Bcrypt(app)

class User:
    #schema = "login_and_registration_schema" can be used as a replacement for typing it in every method

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO users (first_name, last_name, email, password, created_at, updated_at)
            VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());
        """
        user_id = connectToMySQL("login_and_registration_schema").query_db(query, data)

        return user_id

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL("login_and_registration_schema").query_db(query)

        all_users = []

        for row in results:
            all_users.append(cls(row))

        return all_users

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL("login_and_registration_schema").query_db(query, data)

        if len(results) < 1:
            return False
        return cls(results[0])

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("login_and_registration_schema").query_db(query, data)

        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """
            UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() 
            WHERE id = %(id)s;
        """
        connectToMySQL("login_and_registration_schema").query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"

        connectToMySQL("login_and_registration_schema").query_db(query, data)

    @staticmethod
    def validate_register(post_data):
        is_valid = True
        
        if "first_name" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['first_name']) < 2:
            flash("First name must be at least 2 characters.")
            is_valid = False

        if "last_name" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['last_name']) < 2:
            flash("Last name must be at least 2 characters.")
            is_valid = False

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if "email" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['email']) < 1:
            flash("Email address is required.")
            is_valid = False
        elif not EMAIL_REGEX.match(post_data['email']): 
            flash("Invalid email address!")
            is_valid = False
        elif User.get_by_email({"email": post_data['email']}):
            flash("Email is already in use.")
            is_valid = False


        if "password" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['password']) < 8:
            flash("Password must be at least 8 characters.")
            is_valid = False
        elif post_data['password'] != post_data['confirm_password']:
            flash("Password and Confirm Password must match.")
            is_valid = False

        return is_valid


    @staticmethod
    def validate_login(post_data):
        is_valid = True

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if "email" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['email']) < 1:
            flash("Email address is required.")
            is_valid = False
        elif not EMAIL_REGEX.match(post_data['email']): 
            flash("Invalid email address!")
            is_valid = False
        elif not User.get_by_email({"email": post_data['email']}):
            flash("Invalid email address")
            is_valid = False

        if "password" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['password']) < 8:
            flash("Password must be at least 8 characters.")
            is_valid = False

        return is_valid
