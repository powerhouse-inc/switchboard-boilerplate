/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../../server/drive/context"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { core, connectionPluginCore } from "nexus"
import type { ArgsValidationConfig, HasTypeField } from "nexus-validation-plugin/utils"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  InputListenerFilter: { // input type
    branch?: Array<string | null> | null; // [String]
    documentId?: Array<string | null> | null; // [String]
    documentType?: Array<string | null> | null; // [String]
    scope?: Array<string | null> | null; // [String]
  }
  InputOperationUpdate: { // input type
    hash: string; // String!
    index: number; // Int!
    input: string; // String!
    skip?: number | null; // Int
    timestamp: string; // String!
    type: string; // String!
  }
  InputStrandUpdate: { // input type
    branch: string; // String!
    documentId?: string | null; // String
    driveId: string; // String!
    operations: NexusGenInputs['InputOperationUpdate'][]; // [InputOperationUpdate!]!
    scope: string; // String!
  }
  ListenerRevisionInput: { // input type
    branch: string; // String!
    documentId: string; // String!
    driveId: string; // String!
    revision: number; // Int!
    scope: string; // String!
    status: NexusGenEnums['UpdateStatus']; // UpdateStatus!
  }
  SessionInput: { // input type
    allowedOrigins: string; // String!
    expiryDurationSeconds?: number | null; // Int
    name: string; // String!
  }
}

export interface NexusGenEnums {
  TransmitterType: "Internal" | "MatrixConnect" | "PullResponder" | "RESTWebhook" | "SecureConnect" | "SwitchboardPush"
  UpdateStatus: "CONFLICT" | "ERROR" | "MISSING" | "SUCCESS"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Account: { // root type
    id: string; // ID!
    label?: string | null; // String
    reference: string; // String!
  }
  AssetPurchaseGroupTransaction: { // root type
    cashTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions?: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    fixedIncomeTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  AssetSaleGroupTransaction: { // root type
    cashTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions?: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    fixedIncomeTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  Auth: {};
  BaseTransaction: { // root type
    accountId?: string | null; // ID
    amount: number; // Float!
    assetId: string; // ID!
    counterPartyAccountId?: string | null; // ID
    entryTime: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    settlementTime?: NexusGenScalars['Date'] | null; // Date
    tradeTime?: NexusGenScalars['Date'] | null; // Date
    txRef?: string | null; // String
  }
  Cash: { // root type
    currency: string; // String!
    id: string; // ID!
    spvId: string; // ID!
  }
  Challenge: { // root type
    hex: string; // String!
    message: string; // String!
    nonce: string; // String!
  }
  DocumentDriveState: { // root type
    icon?: string | null; // String
    id: string; // ID!
    name: string; // String!
    nodes: Array<NexusGenRootTypes['Node'] | null>; // [Node]!
    slug?: string | null; // String
  }
  DriveSystem: {};
  FeesPaymentGroupTransaction: { // root type
    feeTransactions?: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  FixedIncome: { // root type
    CUSIP?: string | null; // String
    ISIN?: string | null; // String
    annualizedYield: number; // Float!
    coupon?: number | null; // Float
    currentValue?: number | null; // Float
    fixedIncomeTypeId: string; // ID!
    id: string; // ID!
    marketValue: number; // Float!
    maturity: NexusGenScalars['Date']; // Date!
    name: string; // String!
    notional: number; // Float!
    purchaseDate: NexusGenScalars['Date']; // Date!
    purchasePrice: number; // Float!
    purchaseProceeds: number; // Float!
    realizedSurplus: number; // Float!
    spvId: string; // ID!
    totalDiscount: number; // Float!
    totalSurplus: number; // Float!
  }
  FixedIncomeType: { // root type
    id: string; // ID!
    name: string; // String!
  }
  GroupTransactionType: { // root type
    name?: string | null; // String
  }
  InterestDrawGroupTransaction: { // root type
    id: string; // ID!
    interestTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  InterestReturnGroupTransaction: { // root type
    id: string; // ID!
    interestTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  Listener: { // root type
    block: boolean; // Boolean!
    callInfo?: NexusGenRootTypes['ListenerCallInfo'] | null; // ListenerCallInfo
    filter: NexusGenRootTypes['ListenerFilter']; // ListenerFilter!
    label?: string | null; // String
    listenerId: string; // ID!
    system: boolean; // Boolean!
  }
  ListenerCallInfo: { // root type
    data?: string | null; // String
    name?: string | null; // String
    transmitterType?: NexusGenEnums['TransmitterType'] | null; // TransmitterType
  }
  ListenerFilter: { // root type
    branch?: string[] | null; // [String!]
    documentId?: string[] | null; // [ID!]
    documentType: string[]; // [String!]!
    scope?: string[] | null; // [String!]
  }
  ListenerRevision: { // root type
    branch: string; // String!
    documentId?: string | null; // String
    driveId: string; // String!
    revision: number; // Int!
    scope: string; // String!
    status: NexusGenEnums['UpdateStatus']; // UpdateStatus!
  }
  Mutation: {};
  Node: { // root type
    documentType?: string | null; // String
    id: string; // String!
    kind: string; // String!
    name: string; // String!
    parentFolder?: string | null; // String
  }
  OperationUpdate: { // root type
    hash: string; // String!
    index: number; // Int!
    input: string; // String!
    skip: number; // Int!
    timestamp: string; // String!
    type: string; // String!
  }
  PrincipalDrawGroupTransaction: { // root type
    cashTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions?: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  PrincipalReturnGroupTransaction: { // root type
    cashTransaction?: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions?: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  Query: {};
  RealWorldAssetDocument: { // root type
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    created: NexusGenScalars['Date']; // Date!
    documentType: string; // String!
    feeTypes: NexusGenRootTypes['ServiceProvider'][]; // [ServiceProvider!]!
    fixedIncomeTypes: NexusGenRootTypes['FixedIncomeType'][]; // [FixedIncomeType!]!
    lastModified: NexusGenScalars['Date']; // Date!
    name: string; // String!
    operations: NexusGenRootTypes['Operation'][]; // [Operation!]!
    portfolio: NexusGenRootTypes['Asset'][]; // [Asset!]!
    principalLenderAccountId: string; // ID!
    revision: number; // Int!
    spvs: NexusGenRootTypes['Spv'][]; // [Spv!]!
    transactions: NexusGenRootTypes['GroupTransaction'][]; // [GroupTransaction!]!
  }
  RwaDocument: { // root type
    created: NexusGenScalars['Date']; // Date!
    documentType: string; // String!
    field1: string; // String!
    lastModified: NexusGenScalars['Date']; // Date!
    name: string; // String!
    operations: NexusGenRootTypes['Operation'][]; // [Operation!]!
    revision: number; // Int!
  }
  ServiceProvider: { // root type
    accountId: string; // ID!
    feeType: string; // String!
    id: string; // ID!
    name: string; // String!
  }
  Session: { // root type
    allowedOrigins?: string | null; // String
    createdAt: NexusGenScalars['Date']; // Date!
    createdBy: string; // String!
    id: string; // String!
    isUserCreated: boolean; // Boolean!
    name?: string | null; // String
    referenceExpiryDate?: NexusGenScalars['Date'] | null; // Date
    referenceTokenId: string; // String!
    revokedAt?: NexusGenScalars['Date'] | null; // Date
  }
  SessionOutput: { // root type
    session: NexusGenRootTypes['Session']; // Session!
    token: string; // String!
  }
  Spv: { // root type
    id: string; // ID!
    name: string; // String!
  }
  StrandUpdate: { // root type
    branch: string; // String!
    documentId: string; // String!
    driveId: string; // String!
    operations: NexusGenRootTypes['OperationUpdate'][]; // [OperationUpdate!]!
    scope: string; // String!
  }
  SwitchboardHost: {};
  Sync: {};
  TransactionFee: { // root type
    amount: number; // Float!
    serviceProviderId: string; // ID!
  }
  User: { // root type
    address: string; // String!
    createdAt: NexusGenScalars['Date']; // Date!
  }
}

export interface NexusGenInterfaces {
  Document: NexusGenRootTypes['RealWorldAssetDocument'] | NexusGenRootTypes['RwaDocument'];
  Operation: any;
  System: NexusGenRootTypes['DriveSystem'] | NexusGenRootTypes['SwitchboardHost'];
}

export interface NexusGenUnions {
  Asset: NexusGenRootTypes['Cash'] | NexusGenRootTypes['FixedIncome'];
  GroupTransaction: NexusGenRootTypes['AssetPurchaseGroupTransaction'] | NexusGenRootTypes['AssetSaleGroupTransaction'] | NexusGenRootTypes['FeesPaymentGroupTransaction'] | NexusGenRootTypes['InterestDrawGroupTransaction'] | NexusGenRootTypes['InterestReturnGroupTransaction'] | NexusGenRootTypes['PrincipalDrawGroupTransaction'] | NexusGenRootTypes['PrincipalReturnGroupTransaction'];
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Account: { // field return type
    id: string; // ID!
    label: string | null; // String
    reference: string; // String!
  }
  AssetPurchaseGroupTransaction: { // field return type
    cashTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    fixedIncomeTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  AssetSaleGroupTransaction: { // field return type
    cashTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    fixedIncomeTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  Auth: { // field return type
    me: NexusGenRootTypes['User'] | null; // User
    sessions: Array<NexusGenRootTypes['Session'] | null> | null; // [Session]
  }
  BaseTransaction: { // field return type
    accountId: string | null; // ID
    amount: number; // Float!
    assetId: string; // ID!
    counterPartyAccountId: string | null; // ID
    entryTime: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    settlementTime: NexusGenScalars['Date'] | null; // Date
    tradeTime: NexusGenScalars['Date'] | null; // Date
    txRef: string | null; // String
  }
  Cash: { // field return type
    currency: string; // String!
    id: string; // ID!
    spvId: string; // ID!
  }
  Challenge: { // field return type
    hex: string; // String!
    message: string; // String!
    nonce: string; // String!
  }
  DocumentDriveState: { // field return type
    icon: string | null; // String
    id: string; // ID!
    name: string; // String!
    nodes: Array<NexusGenRootTypes['Node'] | null>; // [Node]!
    slug: string | null; // String
  }
  DriveSystem: { // field return type
    auth: NexusGenRootTypes['Auth'] | null; // Auth
    sync: NexusGenRootTypes['Sync'] | null; // Sync
  }
  FeesPaymentGroupTransaction: { // field return type
    feeTransactions: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  FixedIncome: { // field return type
    CUSIP: string | null; // String
    ISIN: string | null; // String
    annualizedYield: number; // Float!
    coupon: number | null; // Float
    currentValue: number | null; // Float
    fixedIncomeTypeId: string; // ID!
    id: string; // ID!
    marketValue: number; // Float!
    maturity: NexusGenScalars['Date']; // Date!
    name: string; // String!
    notional: number; // Float!
    purchaseDate: NexusGenScalars['Date']; // Date!
    purchasePrice: number; // Float!
    purchaseProceeds: number; // Float!
    realizedSurplus: number; // Float!
    spvId: string; // ID!
    totalDiscount: number; // Float!
    totalSurplus: number; // Float!
  }
  FixedIncomeType: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  GroupTransactionType: { // field return type
    name: string | null; // String
  }
  InterestDrawGroupTransaction: { // field return type
    id: string; // ID!
    interestTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  InterestReturnGroupTransaction: { // field return type
    id: string; // ID!
    interestTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  Listener: { // field return type
    block: boolean; // Boolean!
    callInfo: NexusGenRootTypes['ListenerCallInfo'] | null; // ListenerCallInfo
    filter: NexusGenRootTypes['ListenerFilter']; // ListenerFilter!
    label: string | null; // String
    listenerId: string; // ID!
    system: boolean; // Boolean!
  }
  ListenerCallInfo: { // field return type
    data: string | null; // String
    name: string | null; // String
    transmitterType: NexusGenEnums['TransmitterType'] | null; // TransmitterType
  }
  ListenerFilter: { // field return type
    branch: string[] | null; // [String!]
    documentId: string[] | null; // [ID!]
    documentType: string[]; // [String!]!
    scope: string[] | null; // [String!]
  }
  ListenerRevision: { // field return type
    branch: string; // String!
    documentId: string | null; // String
    driveId: string; // String!
    revision: number; // Int!
    scope: string; // String!
    status: NexusGenEnums['UpdateStatus']; // UpdateStatus!
  }
  Mutation: { // field return type
    createChallenge: NexusGenRootTypes['Challenge'] | null; // Challenge
    createSession: NexusGenRootTypes['SessionOutput'] | null; // SessionOutput
    revokeSession: NexusGenRootTypes['Session'] | null; // Session
    solveChallenge: NexusGenRootTypes['SessionOutput'] | null; // SessionOutput
  }
  Node: { // field return type
    documentType: string | null; // String
    id: string; // String!
    kind: string; // String!
    name: string; // String!
    parentFolder: string | null; // String
  }
  OperationUpdate: { // field return type
    hash: string; // String!
    index: number; // Int!
    input: string; // String!
    skip: number; // Int!
    timestamp: string; // String!
    type: string; // String!
  }
  PrincipalDrawGroupTransaction: { // field return type
    cashTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  PrincipalReturnGroupTransaction: { // field return type
    cashTransaction: NexusGenRootTypes['BaseTransaction'] | null; // BaseTransaction
    feeTransactions: Array<NexusGenRootTypes['BaseTransaction'] | null> | null; // [BaseTransaction]
    id: string; // ID!
    type: NexusGenRootTypes['GroupTransactionType']; // GroupTransactionType!
  }
  Query: { // field return type
    document: NexusGenRootTypes['Document'] | null; // Document
    system: NexusGenRootTypes['DriveSystem'] | null; // DriveSystem
  }
  RealWorldAssetDocument: { // field return type
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    created: NexusGenScalars['Date']; // Date!
    documentType: string; // String!
    feeTypes: NexusGenRootTypes['ServiceProvider'][]; // [ServiceProvider!]!
    fixedIncomeTypes: NexusGenRootTypes['FixedIncomeType'][]; // [FixedIncomeType!]!
    lastModified: NexusGenScalars['Date']; // Date!
    name: string; // String!
    operations: NexusGenRootTypes['Operation'][]; // [Operation!]!
    portfolio: NexusGenRootTypes['Asset'][]; // [Asset!]!
    principalLenderAccountId: string; // ID!
    revision: number; // Int!
    spvs: NexusGenRootTypes['Spv'][]; // [Spv!]!
    transactions: NexusGenRootTypes['GroupTransaction'][]; // [GroupTransaction!]!
  }
  RwaDocument: { // field return type
    created: NexusGenScalars['Date']; // Date!
    documentType: string; // String!
    field1: string; // String!
    lastModified: NexusGenScalars['Date']; // Date!
    name: string; // String!
    operations: NexusGenRootTypes['Operation'][]; // [Operation!]!
    revision: number; // Int!
  }
  ServiceProvider: { // field return type
    accountId: string; // ID!
    feeType: string; // String!
    id: string; // ID!
    name: string; // String!
  }
  Session: { // field return type
    allowedOrigins: string | null; // String
    createdAt: NexusGenScalars['Date']; // Date!
    createdBy: string; // String!
    id: string; // String!
    isUserCreated: boolean; // Boolean!
    name: string | null; // String
    referenceExpiryDate: NexusGenScalars['Date'] | null; // Date
    referenceTokenId: string; // String!
    revokedAt: NexusGenScalars['Date'] | null; // Date
  }
  SessionOutput: { // field return type
    session: NexusGenRootTypes['Session']; // Session!
    token: string; // String!
  }
  Spv: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  StrandUpdate: { // field return type
    branch: string; // String!
    documentId: string; // String!
    driveId: string; // String!
    operations: NexusGenRootTypes['OperationUpdate'][]; // [OperationUpdate!]!
    scope: string; // String!
  }
  SwitchboardHost: { // field return type
    auth: NexusGenRootTypes['Auth'] | null; // Auth
  }
  Sync: { // field return type
    strands: Array<NexusGenRootTypes['StrandUpdate'] | null> | null; // [StrandUpdate]
  }
  TransactionFee: { // field return type
    amount: number; // Float!
    serviceProviderId: string; // ID!
  }
  User: { // field return type
    address: string; // String!
    createdAt: NexusGenScalars['Date']; // Date!
  }
  Document: { // field return type
    created: NexusGenScalars['Date']; // Date!
    documentType: string; // String!
    lastModified: NexusGenScalars['Date']; // Date!
    name: string; // String!
    operations: NexusGenRootTypes['Operation'][]; // [Operation!]!
    revision: number; // Int!
  }
  Operation: { // field return type
    hash: string; // String!
    index: number; // Int!
    timestamp: NexusGenScalars['Date']; // Date!
    type: string; // String!
  }
  System: { // field return type
    auth: NexusGenRootTypes['Auth'] | null; // Auth
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    id: 'ID'
    label: 'String'
    reference: 'String'
  }
  AssetPurchaseGroupTransaction: { // field return type name
    cashTransaction: 'BaseTransaction'
    feeTransactions: 'BaseTransaction'
    fixedIncomeTransaction: 'BaseTransaction'
    id: 'ID'
    type: 'GroupTransactionType'
  }
  AssetSaleGroupTransaction: { // field return type name
    cashTransaction: 'BaseTransaction'
    feeTransactions: 'BaseTransaction'
    fixedIncomeTransaction: 'BaseTransaction'
    id: 'ID'
    type: 'GroupTransactionType'
  }
  Auth: { // field return type name
    me: 'User'
    sessions: 'Session'
  }
  BaseTransaction: { // field return type name
    accountId: 'ID'
    amount: 'Float'
    assetId: 'ID'
    counterPartyAccountId: 'ID'
    entryTime: 'Date'
    id: 'ID'
    settlementTime: 'Date'
    tradeTime: 'Date'
    txRef: 'String'
  }
  Cash: { // field return type name
    currency: 'String'
    id: 'ID'
    spvId: 'ID'
  }
  Challenge: { // field return type name
    hex: 'String'
    message: 'String'
    nonce: 'String'
  }
  DocumentDriveState: { // field return type name
    icon: 'String'
    id: 'ID'
    name: 'String'
    nodes: 'Node'
    slug: 'String'
  }
  DriveSystem: { // field return type name
    auth: 'Auth'
    sync: 'Sync'
  }
  FeesPaymentGroupTransaction: { // field return type name
    feeTransactions: 'BaseTransaction'
    id: 'ID'
    type: 'GroupTransactionType'
  }
  FixedIncome: { // field return type name
    CUSIP: 'String'
    ISIN: 'String'
    annualizedYield: 'Float'
    coupon: 'Float'
    currentValue: 'Float'
    fixedIncomeTypeId: 'ID'
    id: 'ID'
    marketValue: 'Float'
    maturity: 'Date'
    name: 'String'
    notional: 'Float'
    purchaseDate: 'Date'
    purchasePrice: 'Float'
    purchaseProceeds: 'Float'
    realizedSurplus: 'Float'
    spvId: 'ID'
    totalDiscount: 'Float'
    totalSurplus: 'Float'
  }
  FixedIncomeType: { // field return type name
    id: 'ID'
    name: 'String'
  }
  GroupTransactionType: { // field return type name
    name: 'String'
  }
  InterestDrawGroupTransaction: { // field return type name
    id: 'ID'
    interestTransaction: 'BaseTransaction'
    type: 'GroupTransactionType'
  }
  InterestReturnGroupTransaction: { // field return type name
    id: 'ID'
    interestTransaction: 'BaseTransaction'
    type: 'GroupTransactionType'
  }
  Listener: { // field return type name
    block: 'Boolean'
    callInfo: 'ListenerCallInfo'
    filter: 'ListenerFilter'
    label: 'String'
    listenerId: 'ID'
    system: 'Boolean'
  }
  ListenerCallInfo: { // field return type name
    data: 'String'
    name: 'String'
    transmitterType: 'TransmitterType'
  }
  ListenerFilter: { // field return type name
    branch: 'String'
    documentId: 'ID'
    documentType: 'String'
    scope: 'String'
  }
  ListenerRevision: { // field return type name
    branch: 'String'
    documentId: 'String'
    driveId: 'String'
    revision: 'Int'
    scope: 'String'
    status: 'UpdateStatus'
  }
  Mutation: { // field return type name
    createChallenge: 'Challenge'
    createSession: 'SessionOutput'
    revokeSession: 'Session'
    solveChallenge: 'SessionOutput'
  }
  Node: { // field return type name
    documentType: 'String'
    id: 'String'
    kind: 'String'
    name: 'String'
    parentFolder: 'String'
  }
  OperationUpdate: { // field return type name
    hash: 'String'
    index: 'Int'
    input: 'String'
    skip: 'Int'
    timestamp: 'String'
    type: 'String'
  }
  PrincipalDrawGroupTransaction: { // field return type name
    cashTransaction: 'BaseTransaction'
    feeTransactions: 'BaseTransaction'
    id: 'ID'
    type: 'GroupTransactionType'
  }
  PrincipalReturnGroupTransaction: { // field return type name
    cashTransaction: 'BaseTransaction'
    feeTransactions: 'BaseTransaction'
    id: 'ID'
    type: 'GroupTransactionType'
  }
  Query: { // field return type name
    document: 'Document'
    system: 'DriveSystem'
  }
  RealWorldAssetDocument: { // field return type name
    accounts: 'Account'
    created: 'Date'
    documentType: 'String'
    feeTypes: 'ServiceProvider'
    fixedIncomeTypes: 'FixedIncomeType'
    lastModified: 'Date'
    name: 'String'
    operations: 'Operation'
    portfolio: 'Asset'
    principalLenderAccountId: 'ID'
    revision: 'Int'
    spvs: 'Spv'
    transactions: 'GroupTransaction'
  }
  RwaDocument: { // field return type name
    created: 'Date'
    documentType: 'String'
    field1: 'String'
    lastModified: 'Date'
    name: 'String'
    operations: 'Operation'
    revision: 'Int'
  }
  ServiceProvider: { // field return type name
    accountId: 'ID'
    feeType: 'String'
    id: 'ID'
    name: 'String'
  }
  Session: { // field return type name
    allowedOrigins: 'String'
    createdAt: 'Date'
    createdBy: 'String'
    id: 'String'
    isUserCreated: 'Boolean'
    name: 'String'
    referenceExpiryDate: 'Date'
    referenceTokenId: 'String'
    revokedAt: 'Date'
  }
  SessionOutput: { // field return type name
    session: 'Session'
    token: 'String'
  }
  Spv: { // field return type name
    id: 'ID'
    name: 'String'
  }
  StrandUpdate: { // field return type name
    branch: 'String'
    documentId: 'String'
    driveId: 'String'
    operations: 'OperationUpdate'
    scope: 'String'
  }
  SwitchboardHost: { // field return type name
    auth: 'Auth'
  }
  Sync: { // field return type name
    strands: 'StrandUpdate'
  }
  TransactionFee: { // field return type name
    amount: 'Float'
    serviceProviderId: 'ID'
  }
  User: { // field return type name
    address: 'String'
    createdAt: 'Date'
  }
  Document: { // field return type name
    created: 'Date'
    documentType: 'String'
    lastModified: 'Date'
    name: 'String'
    operations: 'Operation'
    revision: 'Int'
  }
  Operation: { // field return type name
    hash: 'String'
    index: 'Int'
    timestamp: 'Date'
    type: 'String'
  }
  System: { // field return type name
    auth: 'Auth'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createChallenge: { // args
      address: string; // String!
    }
    createSession: { // args
      session: NexusGenInputs['SessionInput']; // SessionInput!
    }
    revokeSession: { // args
      sessionId: string; // String!
    }
    solveChallenge: { // args
      nonce: string; // String!
      signature: string; // String!
    }
  }
  Query: {
    document: { // args
      id: string; // String!
    }
  }
  Sync: {
    strands: { // args
      listenerId?: string | null; // ID
      since?: NexusGenScalars['Date'] | null; // Date
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Asset: "Cash" | "FixedIncome"
  GroupTransaction: "AssetPurchaseGroupTransaction" | "AssetSaleGroupTransaction" | "FeesPaymentGroupTransaction" | "InterestDrawGroupTransaction" | "InterestReturnGroupTransaction" | "PrincipalDrawGroupTransaction" | "PrincipalReturnGroupTransaction"
  Document: "RealWorldAssetDocument" | "RwaDocument"
  System: "DriveSystem" | "SwitchboardHost"
}

export interface NexusGenTypeInterfaces {
  DriveSystem: "System"
  RealWorldAssetDocument: "Document"
  RwaDocument: "Document"
  SwitchboardHost: "System"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Asset" | "Document" | "GroupTransaction" | "Operation" | "System";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    
    /**
     * Async validation function. Reject when validation fails. Resolve otherwise.
     */
    validate?: 
        NexusGenArgTypes extends HasTypeField<TypeName, FieldName>
        ? ArgsValidationConfig<NexusGenArgTypes[TypeName][FieldName]>
        : never
        
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}