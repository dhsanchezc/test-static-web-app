# Azure Static Web Apps (Basic HTML/CSS/JS)

This repo is a tiny static site and a minimal GitHub Actions workflow for Azure Static Web Apps.

## Quickstart (Azure CLI)

Define environment variables (from the Azure CLI quickstart):

```bash
export RANDOM_ID="$(openssl rand -hex 3)"
export MY_RESOURCE_GROUP_NAME="myStaticWebAppResourceGroup$RANDOM_ID"
export REGION=EastUS2
export MY_STATIC_WEB_APP_NAME="myStaticWebApp$RANDOM_ID"
```

Create a resource group:

```bash
az group create \
  --name $MY_RESOURCE_GROUP_NAME \
  --location $REGION
```

Create the Static Web App:

```bash
az staticwebapp create \
  --name $MY_STATIC_WEB_APP_NAME \
  --resource-group $MY_RESOURCE_GROUP_NAME \
  --location $REGION
```

## GitHub Actions secret

Add the Static Web Apps deployment token to your repo secrets as:

```
AZURE_STATIC_WEB_APPS_API_TOKEN
```

## Files

- `index.html` — basic page
- `styles.css` — minimal styling
- `app.js` — tiny JS interaction
- `.github/workflows/azure-static-web-apps.yml` — super short deploy workflow
