FROM python:3.7
RUN mkdir /app
WORKDIR /app
ADD . /app/
RUN pip install --no-cache-dir -r requirements.txt
RUN ["pytest", "-v", "--junitxml=reports/result.xml"]
CMD tail -f /dev/null