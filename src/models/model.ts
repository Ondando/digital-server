import mongoose from 'mongoose';

// Define the AssetType collection
const productAssetSchema = new mongoose.Schema({
  name: { type: String, enum: ['IMAGE', 'VIDEO'], required: true },
});

// Define the OrderStatus collection
const orderStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELED'],
    required: true,
  },
});

// Define the PaymentStatus collection
const paymentStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    required: true,
  },
});

// Define the PayoutStatus collection
const payoutStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    required: true,
  },
});

// Define the User collection
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  roles: [{ type: String, enum: ['user', 'admin', 'vendor'] }],
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

// Define the Role collection
const roleSchema = new mongoose.Schema({
  roleName: { type: String, unique: true, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' }],
});

// Define the UserRole collection
const userRoleSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
});

// Define the Vendor collection
const vendorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vendorName: { type: String, unique: true, required: true },
  contactEmail: String,
  phoneNumber: String,
  vendorProducts: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'VendorProduct' },
  ],
  vendorBankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VendorBankAccount',
  },
  balance: { type: Number, required: true },
});

// Define the Category collection
const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

// Define the ProductType collection
const productTypeSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

// Define the Product collection
const productSchema = new mongoose.Schema({
  productType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductType',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  name: { type: String, unique: true, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  vendorProducts: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'VendorProduct' },
  ],
  assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductAsset' }],
});
// Define the mongoose.Schema for the VendorProduct type
const vendorProductSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  digitalKey: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Define the mongoose.Schema for the Order type
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELED'],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderItem',
      required: true,
    },
  ],
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
  },
});

// Define the mongoose.Schema for the OrderItem type
const orderItemSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Define the mongoose.Schema for the BankAccount type
const bankAccountSchema = new mongoose.Schema({
  accountHolderName: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    unique: true,
    required: true,
  },
  branchCode: {
    type: String,
  },
  swiftCode: {
    type: String,
  },
  iban: {
    type: String,
  },
});

// Define the mongoose.Schema for the Payment type
const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  bankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: true,
  },
  transactionId: {
    type: String,
    unique: true,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    required: true,
  },
});

// Define the mongoose.Schema for the Payout type
const payoutSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  vendorBankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VendorBankAccount',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    required: true,
  },
});

const vendorBankAccountSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  accountHolderName: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    unique: true,
    required: true,
  },
  branchCode: {
    type: String,
  },
  swiftCode: {
    type: String,
  },
  iban: {
    type: String,
  },
  payouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payout',
    },
  ],
});

const ProductAsset = mongoose.model('ProductAsset', productAssetSchema);
const OrderStatus = mongoose.model('OrderStatus', orderStatusSchema);
const PaymentStatus = mongoose.model('PaymentStatus', paymentStatusSchema);
const PayoutStatus = mongoose.model('PayoutStatus', payoutStatusSchema);
const User = mongoose.model('User', userSchema);
const Role = mongoose.model('Role', roleSchema);
const UserRole = mongoose.model('UserRole', userRoleSchema);
const Vendor = mongoose.model('Vendor', vendorSchema);
const Category = mongoose.model('Category', categorySchema);
const ProductType = mongoose.model('ProductType', productTypeSchema);
const Product = mongoose.model('Product', productSchema);
const VendorProduct = mongoose.model('VendorProduct', vendorProductSchema);
const Order = mongoose.model('Order', orderSchema);
const OrderItem = mongoose.model('OrderItem', orderItemSchema);
const BankAccount = mongoose.model('BankAccount', bankAccountSchema);
const Payment = mongoose.model('Payment', paymentSchema);
const Payout = mongoose.model('Payout', payoutSchema);
const VendorBankAccount = mongoose.model(
  'VendorBankAccount',
  vendorBankAccountSchema,
);

export {
  ProductAsset,
  OrderStatus,
  PaymentStatus,
  PayoutStatus,
  User,
  Role,
  UserRole,
  Vendor,
  Category,
  ProductType,
  Product,
  VendorProduct,
  Order,
  OrderItem,
  BankAccount,
  Payment,
  Payout,
  VendorBankAccount,
};
