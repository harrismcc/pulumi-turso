// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabases(args?: GetDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabasesResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("turso:index/getDatabases:getDatabases", {
        "group": args.group,
        "schema": args.schema,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabases.
 */
export interface GetDatabasesArgs {
    group?: string;
    schema?: string;
}

/**
 * A collection of values returned by getDatabases.
 */
export interface GetDatabasesResult {
    readonly databases: outputs.GetDatabasesDatabase[];
    readonly group: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly schema: string;
}
export function getDatabasesOutput(args?: GetDatabasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabasesResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("turso:index/getDatabases:getDatabases", {
        "group": args.group,
        "schema": args.schema,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabases.
 */
export interface GetDatabasesOutputArgs {
    group?: pulumi.Input<string>;
    schema?: pulumi.Input<string>;
}
