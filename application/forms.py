from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, SubmitField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms.validators import DataRequired
# from application import state
# from application.static.js import InputData #try
import os


class TodoForm(FlaskForm):
    name = StringField("作品名稱", validators=[DataRequired()])
    description = TextAreaField("描述說明", validators=[DataRequired()])
    completed = SelectField("是否選擇公開", choices = [("False", "否"), ("True", "是")]
                            ,validators=[DataRequired()])
    file = FileField("資料", validators= []) #還沒好
    submit = SubmitField("建立")
