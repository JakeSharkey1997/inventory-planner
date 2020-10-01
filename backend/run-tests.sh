#!/bin/bash
IMAGE_NAME="test-image"
CONTAINER_NAME="test-container"
echo "Check current working directory"
pwd

# needed to clean up if tests fail
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true
docker rmi $IMAGE_NAME || true

echo "Build docker image and run container"
docker build -t $IMAGE_NAME -f PytestDockerfile .
docker run -d --name $CONTAINER_NAME $IMAGE_NAME
echo "Copy result.xml into Jenkins container"
rm -rf reports; mkdir reports
docker cp $CONTAINER_NAME:/app/reports/result.xml reports/
echo "Cleanup"
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker rmi $IMAGE_NAME
