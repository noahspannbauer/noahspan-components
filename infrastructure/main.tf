resource "azurerm_static_web_app" "static_web_app" {
    name = var.STATIC_WEB_APP_NAME
    resource_group_name = azurerm_resource_group.resource_group.name
    location = azurerm_resource_group.resource_group.location
    sku_tier = var.STATIC_WEB_APP_SKU
}

resource "azurerm_static_web_app_custom_domain" "static_web_app_custom_domain" {
    static_web_app_id = azurerm_static_web_app.static_web_app.id
    domain_name = "${var.DNS_TXT_RECORD_NAME}.${var.CUSTOM_DOMAIN_NAME}"
    validation_type = "dns-txt-token"
}

resource "azurerm_dns_zone" "dns_zone" {
    name = var.CUSTOM_DOMAIN_NAME
    resource_group_name = azurerm_resource_group.resource_group.name
}

resource "azurerm_dns_txt_record" "dns_txt_record" {
    name = var.DNS_TXT_RECORD_NAME
    zone_name = azurerm_dns_zone.dns_zone.name
    resource_group_name = azurerm_resource_group.resource_group.name
    ttl = 300
    record {
        value = azurerm_static_web_app_custom_domain.static_web_app_custom_domain.validation_token == "" ? "validated" : azurerm_static_web_app_custom_domain.static_web_app_custom_domain.validation_token
    }
}

