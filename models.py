"""Models for Cupcake app."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

DEFAULT_URL = "https://tinyurl.com/demo-cupcake"

class Cupcake(db.Model):
    """create Cupcake class"""

    __tablename__ = "cupcakes"

    def __repr__(self):
      """values of cupcake class"""

      c = self

      return f"<id={c.id}flavor={c.flavor},\
              size={c.size},rating={c.rating},\
              image={c.image}>"

    id =        db.Column(db.Integer,
                            primary_key=True,
                            autoincrement=True)
    flavor =    db.Column(db.Text,
                            nullable=False)
    size =      db.Column(db.Text,
                            nullable=False)
    rating =    db.Column(db.Integer,
                            nullable=False)
    image =     db.Column(db.Text,
                            nullable=False,
                            default=DEFAULT_URL)


    def serialize(self):
        """Serialize class object"""

        return {
            "id" : self.id,
            "flavor" : self.flavor,
            "size" : self.size,
            "rating" : self.rating,
            "image" : self.image
        }


def connect_db(app):
  """Connect to database."""
  db.app = app
  db.init_app(app)