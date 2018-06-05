"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deployment = {
    serializedName: "Deployment",
    type: {
        name: "Composite",
        className: "Deployment",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                type: {
                    name: "String"
                }
            },
            created: {
                serializedName: "created",
                type: {
                    name: "DateTime"
                }
            },
            createdBy: {
                serializedName: "createdBy",
                type: {
                    name: "String"
                }
            },
            description: {
                serializedName: "description",
                type: {
                    name: "String"
                }
            },
            userName: {
                serializedName: "userName",
                type: {
                    name: "String"
                }
            },
            userEmail: {
                serializedName: "userEmail",
                type: {
                    name: "String"
                }
            },
            logId: {
                serializedName: "logId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.CreateDeployment = {
    serializedName: "CreateDeployment",
    type: {
        name: "Composite",
        className: "CreateDeployment",
        modelProperties: {
            version: {
                required: true,
                serializedName: "version",
                type: {
                    name: "String"
                }
            },
            created: {
                serializedName: "created",
                type: {
                    name: "DateTime"
                }
            },
            description: {
                serializedName: "description",
                type: {
                    name: "String"
                }
            },
            userName: {
                serializedName: "userName",
                type: {
                    name: "String"
                }
            },
            userEmail: {
                serializedName: "userEmail",
                type: {
                    name: "String"
                }
            },
            logId: {
                serializedName: "logId",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.Log = {
    serializedName: "Log",
    type: {
        name: "Composite",
        className: "Log",
        modelProperties: {
            id: {
                serializedName: "Id",
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "Name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.CreateLog = {
    serializedName: "CreateLog",
    type: {
        name: "Composite",
        className: "CreateLog",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.Item = {
    serializedName: "Item",
    type: {
        name: "Composite",
        className: "Item",
        modelProperties: {
            key: {
                serializedName: "key",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.MessageOverview = {
    serializedName: "MessageOverview",
    type: {
        name: "Composite",
        className: "MessageOverview",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            application: {
                serializedName: "application",
                type: {
                    name: "String"
                }
            },
            detail: {
                serializedName: "detail",
                type: {
                    name: "String"
                }
            },
            hostname: {
                serializedName: "hostname",
                type: {
                    name: "String"
                }
            },
            title: {
                serializedName: "title",
                type: {
                    name: "String"
                }
            },
            source: {
                serializedName: "source",
                type: {
                    name: "String"
                }
            },
            statusCode: {
                serializedName: "statusCode",
                type: {
                    name: "Number"
                }
            },
            dateTime: {
                serializedName: "dateTime",
                type: {
                    name: "DateTime"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            user: {
                serializedName: "user",
                type: {
                    name: "String"
                }
            },
            severity: {
                serializedName: "severity",
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                type: {
                    name: "String"
                }
            },
            method: {
                serializedName: "method",
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                type: {
                    name: "String"
                }
            },
            cookies: {
                serializedName: "cookies",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            form: {
                serializedName: "form",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            queryString: {
                serializedName: "queryString",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            serverVariables: {
                serializedName: "serverVariables",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            data: {
                serializedName: "data",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            }
        }
    }
};
exports.MessagesResult = {
    serializedName: "MessagesResult",
    type: {
        name: "Composite",
        className: "MessagesResult",
        modelProperties: {
            messages: {
                serializedName: "messages",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "MessageOverviewElementType",
                        type: {
                            name: "Composite",
                            className: "MessageOverview"
                        }
                    }
                }
            },
            total: {
                serializedName: "total",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
exports.Search = {
    serializedName: "Search",
    type: {
        name: "Composite",
        className: "Search",
        modelProperties: {
            query: {
                serializedName: "Query",
                type: {
                    name: "String"
                }
            },
            from: {
                serializedName: "From",
                type: {
                    name: "DateTime"
                }
            },
            to: {
                serializedName: "To",
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
exports.CreateMessage = {
    serializedName: "CreateMessage",
    type: {
        name: "Composite",
        className: "CreateMessage",
        modelProperties: {
            application: {
                serializedName: "application",
                type: {
                    name: "String"
                }
            },
            detail: {
                serializedName: "detail",
                type: {
                    name: "String"
                }
            },
            hostname: {
                serializedName: "hostname",
                type: {
                    name: "String"
                }
            },
            title: {
                serializedName: "title",
                type: {
                    name: "String"
                }
            },
            source: {
                serializedName: "source",
                type: {
                    name: "String"
                }
            },
            statusCode: {
                serializedName: "statusCode",
                type: {
                    name: "Number"
                }
            },
            dateTime: {
                serializedName: "dateTime",
                type: {
                    name: "DateTime"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            user: {
                serializedName: "user",
                type: {
                    name: "String"
                }
            },
            severity: {
                serializedName: "severity",
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                type: {
                    name: "String"
                }
            },
            method: {
                serializedName: "method",
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                type: {
                    name: "String"
                }
            },
            cookies: {
                serializedName: "cookies",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            form: {
                serializedName: "form",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            queryString: {
                serializedName: "queryString",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            serverVariables: {
                serializedName: "serverVariables",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            data: {
                serializedName: "data",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            }
        }
    }
};
exports.Message = {
    serializedName: "Message",
    type: {
        name: "Composite",
        className: "Message",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            application: {
                serializedName: "application",
                type: {
                    name: "String"
                }
            },
            detail: {
                serializedName: "detail",
                type: {
                    name: "String"
                }
            },
            hostname: {
                serializedName: "hostname",
                type: {
                    name: "String"
                }
            },
            title: {
                serializedName: "title",
                type: {
                    name: "String"
                }
            },
            source: {
                serializedName: "source",
                type: {
                    name: "String"
                }
            },
            statusCode: {
                serializedName: "statusCode",
                type: {
                    name: "Number"
                }
            },
            dateTime: {
                serializedName: "dateTime",
                type: {
                    name: "DateTime"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            user: {
                serializedName: "user",
                type: {
                    name: "String"
                }
            },
            severity: {
                serializedName: "severity",
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                type: {
                    name: "String"
                }
            },
            method: {
                serializedName: "method",
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                type: {
                    name: "String"
                }
            },
            cookies: {
                serializedName: "cookies",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            form: {
                serializedName: "form",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            queryString: {
                serializedName: "queryString",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            serverVariables: {
                serializedName: "serverVariables",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            },
            data: {
                serializedName: "data",
                type: {
                    name: "Sequence",
                    element: {
                        serializedName: "ItemElementType",
                        type: {
                            name: "Composite",
                            className: "Item"
                        }
                    }
                }
            }
        }
    }
};
exports.MessagesGetAllOptionalParams = {
    serializedName: "GetAllOptions",
    type: {
        name: "Composite",
        className: "MessagesGetAllOptionalParams",
        modelProperties: {
            pageIndex: {
                serializedName: "pageIndex",
                type: {
                    name: "Number"
                }
            },
            pageSize: {
                serializedName: "pageSize",
                type: {
                    name: "Number"
                }
            },
            query: {
                serializedName: "query",
                type: {
                    name: "String"
                }
            },
            from: {
                serializedName: "from",
                type: {
                    name: "DateTime"
                }
            },
            to: {
                serializedName: "to",
                type: {
                    name: "DateTime"
                }
            },
            includeHeaders: {
                serializedName: "includeHeaders",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map