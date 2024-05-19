output "api_key" {
    value = azurerm_static_web_app.static_web_app.api_key
}

output "default_host_name" {
    value = azurerm_static_web_app.static_web_app.default_host_name
}

output "name_servers" {
    value = azurerm_dns_zone.dns_zone.name_servers
}