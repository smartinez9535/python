from flask import flash

class Dojo:

    @staticmethod
    def validate(post_data):
        is_valid = True 

        if "name" not in post_data:
            flash("Form edited, retry.")
            is_valid = False
        elif len(post_data['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False

        if "location" not in post_data:
            flash("Location must be selected")
            is_valid = False
        
        if "language" not in post_data:
            flash("Language must be selected.")
            is_valid = False

        return is_valid