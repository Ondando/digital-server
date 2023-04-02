#!/bin/bash

# Declare an array of models
declare -a models=(
  "user"
  "role"
  "user_role"
  "vendor"
  "category"
  "product_type"
  "product"
  "vendor_product"
  "order"
  "order_item"
  "bank_account"
  "payment"
  "payout"
  "vendor_bank_account"
  "product_asset"
)

# Create the necessary directories
for model in "${models[@]}"
do
  mkdir -p "src/$model"
done

# Generate the files for each model
for model in "${models[@]}"
do
  # Generate the module, service, and controller files for the current model
  if ! nest generate module "$model" "--no-spec"; then
    echo "Failed to generate module for $model"
    exit 1
  fi
  
  if ! nest generate service "$model" "--no-spec"; then
    echo "Failed to generate service for $model"
    exit 1
  fi
  
  if ! nest generate controller "$model" "--no-spec"; then
    echo "Failed to generate controller for $model"
    exit 1
  fi
  
  # Create the schema file for the current model
  if ! touch "src/$model/$model.schema.ts"; then
    echo "Failed to create schema file for $model"
    exit 1
  fi
done
