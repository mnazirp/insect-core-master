FROM nodered/node-red
USER node-red

# Copy package.json to the WORKDIR so npm builds all
COPY package.json .
RUN mkdir -p node-red-static
COPY node-red-static/ node-red-static/
COPY defaults .
# NodeRED configuration
ENV NODE_OPTIONS="--max-old-space-size=5120"
COPY .node-red/settings.js /usr/src/node-red/.node-red/settings.js
COPY .node-red/flows.json /data/flows.json
COPY package.json /usr/src/node-red/package.json
# Actual installation
RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production
# RUN IT
CMD ["flows.json"]