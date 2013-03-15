var azure = require("azure");
var q = require("q");

var TableService = azure.TableService;


var PromiseTableService = function (storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider) {
    this.tableService = azure.createTableService(storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider);
}

PromiseTableService.prototype.getServiceProperties = function (options) {
    var d = q.defer();
    this.tableService.getServiceProperties(options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.setServiceProperties = function (serviceProperties, options) {
    var d = q.defer();
    this.tableService.setServiceProperties(serviceProperties, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.getTable = function (table, options) {
    var d = q.defer();
    this.tableService.getTable(table, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.createTable = function (table, options) {
    var d = q.defer();
    this.tableService.createTable(table, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.createTableIfNotExists = function (table, options) {
    var d = q.defer();
    this.tableService.createTableIfNotExists(table, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.deleteTable = function (table, options) {
    var d = q.defer();
    this.tableService.deleteTable(table, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.queryTables = function (options) {
    var d = q.defer();
    this.tableService.queryTables(options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.createTable = function (table, options) {
    var d = q.defer();
    this.tableService.createTable(table, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.queryEntity = function (table, partitionKey, rowKey, options) {
    var d = q.defer();
    this.tableService.queryEntity(table, partitionKey, rowKey, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.queryEntities = function (tableQuery, options) {
    var d = q.defer();
    this.tableService.queryEntities(tableQuery, options, function (error, queryEntitiesResult, response) {
        if (error) d.reject(error);
        else d.resolve(queryEntitiesResult, response);
    });
    return d.promise;
}

PromiseTableService.prototype.insertEntity = function (tableName, entityDescriptor, options) {
    var d = q.defer();
    this.tableService.insertEntity(tableName, entityDescriptor, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.insertOrReplaceEntity = function (tableName, entityDescriptor, options) {
    var d = q.defer();
    this.tableService.insertOrReplaceEntity(tableName, entityDescriptor, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.updateEntity = function (tableName, entityDescriptor, options) {
    var d = q.defer();
    this.tableService.updateEntity(tableName, entityDescriptor, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.mergeEntity = function (tableName, entityDescriptor, options) {
    var d = q.defer();
    this.tableService.mergeEntity(tableName, entityDescriptor, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.insertOrMergeEntity = function (tableName, entityDescriptor, options) {
    var d = q.defer();
    this.tableService.insertOrMergeEntity(tableName, entityDescriptor, options, d.makeNodeResolver());
    return d.promise;
}

PromiseTableService.prototype.deleteEntity = function (tableName, entityDescriptor, options) {
    var d = q.defer();
    this.tableService.deleteEntity(tableName, entityDescriptor, options, d.makeNodeResolver());
    return d.promise;
}

exports.PromiseTableService = PromiseTableService;

exports.createTableService = function (storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider) {
    return new exports.PromiseTableService(storageAccountOrConnectionString, storageAccessKey, host, authenticationProvider);
}