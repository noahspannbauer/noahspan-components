variable "REGION" {
    type = string
}

variable "RESOURCE_GROUP_NAME" {
  type = string
}

variable "STATIC_WEB_APP_SKU" {
    type = string
    default = "Free"
}

variable "STATIC_WEB_APP_NAME" {
    type = string
}

variable "DNS_TXT_RECORD_NAME" {
    type = string
}

variable "CUSTOM_DOMAIN_NAME" {
    type = string
}