FROM python:3.7

RUN apt update && apt install -y default-mysql-client
RUN mkdir /app
WORKDIR /app
ADD . /app/
RUN chmod +x run.sh
RUN pip install -r inventory_planner/requirements.txt
RUN pip install -e .
ENTRYPOINT ["/app/run.sh"]