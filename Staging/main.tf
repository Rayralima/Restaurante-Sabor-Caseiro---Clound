terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.26.0"
    }
  }
}

provider "azurerm" {
    features {}

    subscription_id = "f176ca36-08df-493c-a336-112706ca6f3c"
}

resource "azurerm_resource_group" "default" {
  name     = "sabor-caseiro"
  location = "eastus"
}

resource "azurerm_app_service_plan" "default" {
  name                = "asp-sabor-caseiro"
  location            = azurerm_resource_group.default.location
  resource_group_name = azurerm_resource_group.default.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B1"
  }
}

resource "azurerm_app_service" "default" {
  name                = "webapp-sabor-caseiro"
  location            = azurerm_resource_group.default.location
  resource_group_name = azurerm_resource_group.default.name
  app_service_plan_id = azurerm_app_service_plan.default.id

  site_config {
    linux_fx_version = "NODE|18-lts"
  }

  app_settings = {
    "WEBSITE_RUN_FROM_PACKAGE" = "0"
  }
}