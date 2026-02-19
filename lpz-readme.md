docker run -it -p 8082:8080 \
-e OTP_URL=http://localhost:8080/otp/ \
-e CONFIG=hsl \
-e GEOCODING_BASE_URL=localhost:4000/v1 \
-e MAP_URL=localhost:8081/v1 \
-e NO_SUBSCRIPTION_KEY=true \
hsldevcom/digitransit-ui:v3  


docker run -it -p 8082:8080 \
-e OTP_URL=http://localhost:8080/otp/ \
-e CONFIG=hsl \
-e GEOCODING_BASE_URL=localhost:4000/v1 \
-e MAP_URL=localhost:8081/v1 \
-e NO_SUBSCRIPTION_KEY=true \
--entrypoint /bin/sh \
hsldevcom/digitransit-ui:v3  

docker run -v /home/anthony/gtfs/lpz/otp:/var/otp/v3-prod/2025-12-28T01.17.41Z/waltti -p 8080:8080 -d --entrypoint /var/otp/v3-prod/2025-12-28T01.17.41Z/waltti/entrypoint.sh hsldevcom/opentripplanner:v2-prod-waltti
