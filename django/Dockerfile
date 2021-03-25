FROM python:3

# Set environment variables
ENV PYTHONUNBUFFERED 1

#this contains our dependencies for our API
COPY requirements.txt /

# Install dependencies.
RUN pip install -r /requirements.txt

# Set work directory.=> create a/code dir on the image adn set it as the working dir
RUN mkdir /code
WORKDIR /code

# Copy project code of Django folder in our image
COPY . /code/

# Container will listen on port 80 at runtime
EXPOSE 80 