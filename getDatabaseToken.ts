// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatabaseToken(args: GetDatabaseTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("turso:index/getDatabaseToken:getDatabaseToken", {
        "authorization": args.authorization,
        "expiration": args.expiration,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseToken.
 */
export interface GetDatabaseTokenArgs {
    authorization?: string;
    expiration?: string;
    id: string;
}

/**
 * A collection of values returned by getDatabaseToken.
 */
export interface GetDatabaseTokenResult {
    readonly authorization: string;
    readonly expiration: string;
    readonly id: string;
    readonly jwt: string;
}
export function getDatabaseTokenOutput(args: GetDatabaseTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("turso:index/getDatabaseToken:getDatabaseToken", {
        "authorization": args.authorization,
        "expiration": args.expiration,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseToken.
 */
export interface GetDatabaseTokenOutputArgs {
    authorization?: pulumi.Input<string>;
    expiration?: pulumi.Input<string>;
    id: pulumi.Input<string>;
}
