FROM python:3.7

RUN mkdir /app
WORKDIR /app
ADD . /app/

RUN pip install -r inventory_planner/requirements.txt
RUN pip install -e .
RUN flask init-db
CMD ["gunicorn", "inventory_planner:create_app()", "-b", ":8081"]