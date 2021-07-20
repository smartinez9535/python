from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user

from flask import flash


class Recipe:
    schema = "recipes_schema"

    def __init__(self, data):
        self.id = data['id']
        if "user_id" in data:
            self.user = user.User.get_by_id({"id": data['user_id']})
        self.title = data['title']
        self.description = data['description']
        self.under_30 = data['under_30']
        self.instructions = data['instructions']
        self.date = data['date']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO recipes (user_id, title, description, under_30, instructions, date, created_at, updated_at)
            VALUES (%(user_id)s, %(title)s, %(description)s, %(under_30)s, %(instructions)s, %(date)s, NOW(), NOW());
        """

        return connectToMySQL(cls.schema).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL(cls.schema).query_db(query)

        recipes = []
        for row in results:
            recipes.append(cls(row))

        return recipes

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL(cls.schema).query_db(query, data)

        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """
            UPDATE recipes SET title = %(title)s, description = %(description)s, under_30 = %(under_30)s, instructions = %(instructions)s, date = %(date)s,
            updated_at = NOW() WHERE id = %(id)s;
        """

        return connectToMySQL(cls.schema).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"

        return connectToMySQL(cls.schema).query_db(query, data)

    @staticmethod
    def validate(post_data):
        is_valid = True

        if "title" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['title']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False

        if "description" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['description']) < 3:
            flash("Description must be at least 3 characters.")
            is_valid = False

        if "under_30" not in post_data:
            flash("Please indicate if the recipe is under 30 minutes.")
            is_valid = False

        if len(post_data['date']) < 1:
            flash("Please enter the date of the recipe.")
            is_valid = False
        
        if "instructions" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['instructions']) < 3:
            flash("Instructions must be at least 3 characters.")
            is_valid = False

        return is_valid
    