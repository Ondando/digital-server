#!/bin/bash

declare -a models=(
  "User"
  "Role"
  "UserRole"
  "Vendor"
  "Category"
  "ProductType"
  "Product"
  "VendorProduct"
  "Order"
  "OrderItem"
  "BankAccount"
  "Payment"
  "Payout"
  "VendorBankAccount"
  "ProductAsset"
)

for model in "${models[@]}"
do
  nest generate module "$model" "--no-spec"
  nest generate service "$model" "--no-spec"
  nest generate controller "$model" "--no-spec"
done
