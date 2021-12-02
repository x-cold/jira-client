/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Jira instance health check results. Deprecated and no longer returned.
 */
export interface HealthCheckResult {
  /** The name of the Jira health check item. */
  name?: string;

  /** The description of the Jira health check item. */
  description?: string;

  /** Whether the Jira health check item passed or failed. */
  passed?: boolean;
}

/**
 * Details about the Jira instance.
 */
export interface ServerInformation {
  /** The base URL of the Jira instance. */
  baseUrl?: string;

  /** The version of Jira. */
  version?: string;

  /** The major, minor, and revision version numbers of the Jira version. */
  versionNumbers?: number[];

  /** The type of server deployment. This is always returned as *Cloud*. */
  deploymentType?: string;

  /**
   * The build number of the Jira version.
   * @format int32
   */
  buildNumber?: number;

  /**
   * The timestamp when the Jira version was built.
   * @format date-time
   */
  buildDate?: string;

  /**
   * The time in Jira when this request was responded to.
   * @format date-time
   */
  serverTime?: string;

  /** The unique identifier of the Jira version. */
  scmInfo?: string;

  /** The name of the Jira instance. */
  serverTitle?: string;

  /** Jira instance health check results. Deprecated and no longer returned. */
  healthChecks?: HealthCheckResult[];
}

/**
 * A page of items.
 */
export interface PageBeanUserKey {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: UserKey[];
}

/**
 * List of user account IDs.
 */
export interface UserKey {
  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;

  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import. */
  accountId?: string;
}

/**
 * Details of an application role.
 */
export interface ApplicationRole {
  /** The key of the application role. */
  key?: string;

  /** The groups associated with the application role. */
  groups?: string[];

  /** The display name of the application role. */
  name?: string;

  /** The groups that are granted default access for this application role. */
  defaultGroups?: string[];

  /** Determines whether this application role should be selected by default on user creation. */
  selectedByDefault?: boolean;

  /** Deprecated. */
  defined?: boolean;

  /**
   * The maximum count of users on your license.
   * @format int32
   */
  numberOfSeats?: number;

  /**
   * The count of users remaining on your license.
   * @format int32
   */
  remainingSeats?: number;

  /**
   * The number of users counting against your license.
   * @format int32
   */
  userCount?: number;

  /** The [type of users](https://confluence.atlassian.com/x/lRW3Ng) being counted against your license. */
  userCountDescription?: string;
  hasUnlimitedSeats?: boolean;

  /** Indicates if the application role belongs to Jira platform (`jira-core`). */
  platform?: boolean;
}

export interface AvatarUrlsBean {
  /**
   * The URL of the item's 16x16 pixel avatar.
   * @format uri
   */
  '16x16'?: string;

  /**
   * The URL of the item's 24x24 pixel avatar.
   * @format uri
   */
  '24x24'?: string;

  /**
   * The URL of the item's 32x32 pixel avatar.
   * @format uri
   */
  '32x32'?: string;

  /**
   * The URL of the item's 48x48 pixel avatar.
   * @format uri
   */
  '48x48'?: string;
}

/**
 * Details about a group name.
 */
export interface GroupName {
  /** The name of group. */
  name?: string;

  /**
   * The URL for these group details.
   * @format uri
   */
  self?: string;
}

export type ListWrapperCallbackApplicationRole = object;

export type ListWrapperCallbackGroupName = object;

/**
 * A page of items.
 */
export interface PageBeanUser {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: User[];
}

export interface SimpleListWrapperApplicationRole {
  /** @format int32 */
  size?: number;
  items?: ApplicationRole[];
  pagingCallback?: ListWrapperCallbackApplicationRole;
  callback?: ListWrapperCallbackApplicationRole;

  /** @format int32 */
  'max-results'?: number;
}

export interface SimpleListWrapperGroupName {
  /** @format int32 */
  size?: number;
  items?: GroupName[];
  pagingCallback?: ListWrapperCallbackGroupName;
  callback?: ListWrapperCallbackGroupName;

  /** @format int32 */
  'max-results'?: number;
}

/**
* A user with details as permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:

 *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).
 *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.
 *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.
*/
export interface User {
  /**
   * The URL of the user.
   * @format uri
   */
  self?: string;

  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;

  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests. */
  accountId?: string;

  /**
   * The user account type. Can take the following values:
   *
   *  *  `atlassian` regular Atlassian user account
   *  *  `app` system account used for Connect applications and OAuth to represent external systems
   *  *  `customer` Jira Service Desk account representing an external service desk
   */
  accountType?: 'atlassian' | 'app' | 'customer' | 'unknown';

  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;

  /** The email address of the user. Depending on the user’s privacy setting, this may be returned as null. */
  emailAddress?: string;

  /** The avatars of the user. */
  avatarUrls?: AvatarUrlsBean;

  /** The display name of the user. Depending on the user’s privacy setting, this may return an alternative value. */
  displayName?: string;

  /** Whether the user is active. */
  active?: boolean;

  /** The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null. */
  timeZone?: string;

  /** The locale of the user. Depending on the user’s privacy setting, this may be returned as null. */
  locale?: string;

  /** The groups that the user belongs to. */
  groups?: SimpleListWrapperGroupName;

  /** The application roles the user is assigned to. */
  applicationRoles?: SimpleListWrapperApplicationRole;

  /** Expand options that include additional user details in the response. */
  expand?: string;
}

/**
 * A change item.
 */
export interface ChangeDetails {
  /** The name of the field changed. */
  field?: string;

  /** The type of the field changed. */
  fieldtype?: string;

  /** The ID of the field changed. */
  fieldId?: string;

  /** The details of the original value. */
  from?: string;

  /** The details of the original value as a string. */
  fromString?: string;

  /** The details of the new value. */
  to?: string;

  /** The details of the new value as a string. */
  toString?: string;
}

/**
 * A changelog.
 */
export interface Changelog {
  /** The ID of the changelog. */
  id?: string;

  /** The user who made the change. */
  author?: UserDetails;

  /**
   * The date on which the change took place.
   * @format date-time
   */
  created?: string;

  /** The list of items changed. */
  items?: ChangeDetails[];

  /** The history metadata associated with the changed. */
  historyMetadata?: HistoryMetadata;
}

/**
 * The metadata describing an issue field.
 */
export interface FieldMetadata {
  /** Whether the field is required. */
  required: boolean;

  /** The data type of the field. */
  schema: JsonTypeBean;

  /** The name of the field. */
  name: string;

  /** The key of the field. */
  key: string;

  /** The URL that can be used to automatically complete the field. */
  autoCompleteUrl?: string;

  /** Whether the field has a default value. */
  hasDefaultValue?: boolean;

  /** The list of operations that can be performed on the field. */
  operations: string[];

  /** The list of values allowed in the field. */
  allowedValues?: any[];

  /** The default value of the field. */
  defaultValue?: any;
}

/**
 * Details of issue history metadata.
 */
export interface HistoryMetadata {
  /** The type of the history record. */
  type?: string;

  /** The description of the history record. */
  description?: string;

  /** The description key of the history record. */
  descriptionKey?: string;

  /** The activity described in the history record. */
  activityDescription?: string;

  /** The key of the activity described in the history record. */
  activityDescriptionKey?: string;

  /** The description of the email address associated the history record. */
  emailDescription?: string;

  /** The description key of the email address associated the history record. */
  emailDescriptionKey?: string;

  /** Details of the user whose action created the history record. */
  actor?: HistoryMetadataParticipant;

  /** Details of the system that generated the history record. */
  generator?: HistoryMetadataParticipant;

  /** Details of the cause that triggered the creation the history record. */
  cause?: HistoryMetadataParticipant;

  /** Additional arbitrary information about the history record. */
  extraData?: Record<string, string>;
  [key: string]: any;
}

/**
 * Details of user or system associated with a issue history metadata item.
 */
export interface HistoryMetadataParticipant {
  /** The ID of the user or system associated with a history record. */
  id?: string;

  /** The display name of the user or system associated with a history record. */
  displayName?: string;

  /** The key of the display name of the user or system associated with a history record. */
  displayNameKey?: string;

  /** The type of the user or system associated with a history record. */
  type?: string;

  /** The URL to an avatar for the user or system associated with a history record. */
  avatarUrl?: string;

  /** The URL of the user or system associated with a history record. */
  url?: string;
  [key: string]: any;
}

export interface IncludedFields {
  included?: string[];
  excluded?: string[];
  actuallyIncluded?: string[];
}

/**
 * Details about an issue.
 */
export interface IssueBean {
  /** Expand options that include additional issue details in the response. */
  expand?: string;

  /** The ID of the issue. */
  id?: string;

  /**
   * The URL of the issue details.
   * @format uri
   */
  self?: string;

  /** The key of the issue. */
  key?: string;

  /** The rendered value of each field present on the issue. */
  renderedFields?: Record<string, any>;

  /** Details of the issue properties identified in the request. */
  properties?: Record<string, any>;

  /** The ID and name of each field present on the issue. */
  names?: Record<string, string>;

  /** The schema describing each field present on the issue. */
  schema?: Record<string, JsonTypeBean>;

  /** The transitions that can be performed on the issue. */
  transitions?: IssueTransition[];

  /** The operations that can be performed on the issue. */
  operations?: Operations;

  /** The metadata for the fields on the issue that can be amended. */
  editmeta?: IssueUpdateMetadata;

  /** Details of changelogs associated with the issue. */
  changelog?: PageOfChangelogs;

  /** The versions of each field on the issue. */
  versionedRepresentations?: Record<string, Record<string, any>>;
  fieldsToInclude?: IncludedFields;
  fields?: Record<string, any>;
}

/**
 * Details of an issue transition.
 */
export interface IssueTransition {
  /** The ID of the issue transition. Required when specifying a transition to undertake. */
  id?: string;

  /** The name of the issue transition. */
  name?: string;

  /** Details of the issue status after the transition. */
  to?: StatusDetails;

  /** Whether there is a screen associated with the issue transition. */
  hasScreen?: boolean;

  /** Whether the issue transition is global, that is, the transition is applied to issues regardless of their status. */
  isGlobal?: boolean;

  /** Whether this is the initial issue transition for the workflow. */
  isInitial?: boolean;

  /** Whether the transition is available to be performed. */
  isAvailable?: boolean;

  /** Whether the issue has to meet criteria before the issue transition is applied. */
  isConditional?: boolean;

  /** Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request. */
  fields?: Record<string, FieldMetadata>;

  /** Expand options that include additional transition details in the response. */
  expand?: string;
  looped?: boolean;
  [key: string]: any;
}

/**
 * A list of editable field details.
 */
export interface IssueUpdateMetadata {
  /** A list of editable field details. */
  fields?: Record<string, FieldMetadata>;
}

/**
 * The schema of a field.
 */
export interface JsonTypeBean {
  /** The data type of the field. */
  type: string;

  /** When the data type is an array, the name of the field items within the array. */
  items?: string;

  /** If the field is a system field, the name of the field. */
  system?: string;

  /** If the field is a custom field, the URI of the field. */
  custom?: string;

  /**
   * If the field is a custom field, the custom ID of the field.
   * @format int64
   */
  customId?: number;

  /** If the field is a custom field, the configuration of the field. */
  configuration?: Record<string, any>;
}

/**
 * Details a link group, which defines issue operations.
 */
export interface LinkGroup {
  id?: string;
  styleClass?: string;

  /** Details about the operations available in this version. */
  header?: SimpleLink;

  /** @format int32 */
  weight?: number;
  links?: SimpleLink[];
  groups?: LinkGroup[];
}

/**
 * Details of the operations that can be performed on the issue.
 */
export interface Operations {
  /** Details of the link groups defining issue operations. */
  linkGroups?: LinkGroup[];
  [key: string]: any;
}

/**
 * A page of changelogs.
 */
export interface PageOfChangelogs {
  /**
   * The index of the first item returned on the page.
   * @format int32
   */
  startAt?: number;

  /**
   * The maximum number of results that could be on the page.
   * @format int32
   */
  maxResults?: number;

  /**
   * The number of results on the page.
   * @format int32
   */
  total?: number;

  /** The list of changelogs. */
  histories?: Changelog[];
}

/**
 * The result of a JQL search.
 */
export interface SearchResults {
  /** Expand options that include additional search result details in the response. */
  expand?: string;

  /**
   * The index of the first item returned on the page.
   * @format int32
   */
  startAt?: number;

  /**
   * The maximum number of results that could be on the page.
   * @format int32
   */
  maxResults?: number;

  /**
   * The number of results on the page.
   * @format int32
   */
  total?: number;

  /** The list of issues found by the search. */
  issues?: IssueBean[];

  /** Any warnings related to the JQL query. */
  warningMessages?: string[];

  /** The ID and name of each field in the search results. */
  names?: Record<string, string>;

  /** The schema describing the field types in the search results. */
  schema?: Record<string, JsonTypeBean>;
}

/**
 * Details about the operations available in this version.
 */
export interface SimpleLink {
  id?: string;
  styleClass?: string;
  iconClass?: string;
  label?: string;
  title?: string;
  href?: string;

  /** @format int32 */
  weight?: number;
}

/**
 * A status category.
 */
export interface StatusCategory {
  /** The URL of the status category. */
  self?: string;

  /**
   * The ID of the status category.
   * @format int64
   */
  id?: number;

  /** The key of the status category. */
  key?: string;

  /** The name of the color used to represent the status category. */
  colorName?: string;

  /** The name of the status category. */
  name?: string;
  [key: string]: any;
}

/**
 * A status.
 */
export interface StatusDetails {
  /** The URL of the status. */
  self?: string;

  /** The description of the status. */
  description?: string;

  /** The URL of the icon used to represent the status. */
  iconUrl?: string;

  /** The name of the status. */
  name?: string;

  /** The ID of the status. */
  id?: string;

  /** The category assigned to the status. */
  statusCategory?: StatusCategory;
  [key: string]: any;
}

/**
* User details permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:

 *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).
 *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.
 *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.
*/
export interface UserDetails {
  /** The URL of the user. */
  self?: string;

  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;

  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;

  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;

  /** The email address of the user. Depending on the user’s privacy settings, this may be returned as null. */
  emailAddress?: string;

  /** The avatars of the user. */
  avatarUrls?: AvatarUrlsBean;

  /** The display name of the user. Depending on the user’s privacy settings, this may return an alternative value. */
  displayName?: string;

  /** Whether the user is active. */
  active?: boolean;

  /** The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null. */
  timeZone?: string;

  /** The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user) */
  accountType?: string;
}

export interface SearchRequestBean {
  /** A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. */
  jql?: string;

  /**
   * The index of the first item to return in the page of results (page offset). The base index is `0`.
   * @format int32
   */
  startAt?: number;

  /**
   * The maximum number of items to return per page.
   * @format int32
   */
  maxResults?: number;

  /**
   * A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
   *
   *  *  `*all` Returns all fields.
   *  *  `*navigable` Returns navigable fields.
   *  *  Any issue field, prefixed with a minus to exclude.
   * The default is `*navigable`.
   * Examples:
   *  *  `summary,comment` Returns the summary and comments fields only.
   *  *  `-description` Returns all navigable (default) fields except description.
   *  *  `*all,-comment` Returns all fields except comments.
   * Multiple `fields` parameters can be included in a request.
   * Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-2-issue-issueIdOrKey-get) where the default is all fields.
   */
  fields?: string[];

  /**
   * Determines how to validate the JQL query and treat the validation results. Supported values:
   *
   *  *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).
   *  *  `warn` Returns all errors as warnings.
   *  *  `none` No validation is performed.
   *  *  `true` *Deprecated* A legacy synonym for `strict`.
   *  *  `false` *Deprecated* A legacy synonym for `warn`.
   * The default is `strict`.
   * Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value.
   */
  validateQuery?: 'strict' | 'warn' | 'none' | 'true' | 'false';

  /**
   * Use [expand](em>#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:
   *
   *  *  `renderedFields` Returns field values rendered in HTML format.
   *  *  `names` Returns the display name of each field.
   *  *  `schema` Returns the schema describing a field type.
   *  *  `transitions` Returns all possible transitions for the issue.
   *  *  `operations` Returns all possible operations for the issue.
   *  *  `editmeta` Returns information about how each field can be edited.
   *  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
   *  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
   */
  expand?: string[];

  /** A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list. */
  properties?: string[];

  /** Reference fields by their key (rather than ID). The default is `false`. */
  fieldsByKeys?: boolean;
}

/**
 * Details of a field that can be used in advanced searches.
 */
export interface FieldReferenceData {
  /** The field identifier. */
  value?: string;

  /**
   * The display name contains the following:
   *
   *  *  for system fields, the field name. For example, `Summary`.
   *  *  for collapsed custom fields, the field name followed by a hyphen and then the field name and field type. For example, `Component - Component[Dropdown]`.
   *  *  for other custom fields, the field name followed by a hyphen and then the custom field ID. For example, `Component - cf[10061]`.
   */
  displayName?: string;

  /** Whether the field can be used in a query's `ORDER BY` clause. */
  orderable?: 'true' | 'false';

  /** Whether the content of this field can be searched. */
  searchable?: 'true' | 'false';

  /** Whether the field provide auto-complete suggestions. */
  auto?: 'true' | 'false';

  /** If the item is a custom field, the ID of the custom field. */
  cfid?: string;

  /** The valid search operators for the field. */
  operators?: string[];

  /** The data types of items in the field. */
  types?: string[];
}

/**
 * Details of functions that can be used in advanced searches.
 */
export interface FunctionReferenceData {
  /** The function identifier. */
  value?: string;

  /** The display name of the function. */
  displayName?: string;

  /** Whether the function can take a list of arguments. */
  isList?: 'true' | 'false';

  /** The data types returned by the function. */
  types?: string[];
}

/**
 * Lists of JQL reference data.
 */
export interface JQLReferenceData {
  /** List of fields usable in JQL queries. */
  visibleFieldNames?: FieldReferenceData[];

  /** List of functions usable in JQL queries. */
  visibleFunctionNames?: FunctionReferenceData[];

  /** List of JQL query reserved words. */
  jqlReservedWords?: string[];
}

/**
 * Details of how to filter and list search auto complete information.
 */
export interface SearchAutoCompleteFilter {
  /** List of project IDs used to filter the visible field details returned. */
  projectIds?: number[];

  /** Include collapsed fields for fields that have non-unique names. */
  includeCollapsedFields?: boolean;
}

/**
 * A field auto-complete suggestion.
 */
export interface AutoCompleteSuggestion {
  /** The value of a suggested item. */
  value?: string;

  /** The display name of a suggested item. If `fieldValue` or `predicateValue` are provided, the matching text is highlighted with the HTML bold tag. */
  displayName?: string;
}

/**
 * The results from a JQL query.
 */
export interface AutoCompleteSuggestions {
  /** The list of suggested item. */
  results?: AutoCompleteSuggestion[];
}

/**
 * The JQL queries to be converted.
 */
export interface JQLPersonalDataMigrationRequest {
  /** A list of queries with user identifiers. Maximum of 100 queries. */
  queryStrings?: string[];
}

/**
 * The converted JQL queries.
 */
export interface ConvertedJQLQueries {
  /** The list of converted query strings with account IDs in place of user identifiers. */
  queryStrings?: string[];

  /** List of queries containing user information that could not be mapped to an existing user */
  queriesWithUnknownUsers?: JQLQueryWithUnknownUsers[];
}

/**
 * JQL queries that contained users that could not be found
 */
export interface JQLQueryWithUnknownUsers {
  /** The original query, for reference */
  originalQuery?: string;

  /** The converted query, with accountIDs instead of user identifiers, or 'unknown' for users that could not be found */
  convertedQuery?: string;
}

/**
 * Details about a filter.
 */
export interface Filter {
  /**
   * The URL of the filter.
   * @format uri
   */
  self?: string;

  /** The unique identifier for the filter. */
  id?: string;

  /** The name of the filter. Must be unique. */
  name: string;

  /** A description of the filter. */
  description?: string;

  /** The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings. */
  owner?: User;

  /** The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*. */
  jql?: string;

  /**
   * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
   * @format uri
   */
  viewUrl?: string;

  /**
   * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-2-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/2/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
   * @format uri
   */
  searchUrl?: string;

  /** Whether the filter is selected as a favorite. */
  favourite?: boolean;

  /**
   * The count of how many users have selected this filter as a favorite, including the filter owner.
   * @format int64
   */
  favouritedCount?: number;

  /** The groups and projects that the filter is shared with. */
  sharePermissions?: SharePermission[];

  /** The groups and projects that can edit the filter. */
  editPermissions?: SharePermission[];

  /** A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with. */
  sharedUsers?: UserList;

  /** A paginated list of the users that are subscribed to the filter. */
  subscriptions?: FilterSubscriptionsList;
}

/**
 * Details of a user or group subscribing to a filter.
 */
export interface FilterSubscription {
  /**
   * The ID of the filter subscription.
   * @format int64
   */
  id?: number;

  /** The user subscribing to filter. */
  user?: User;

  /** The group subscribing to filter. */
  group?: GroupName;
}

/**
 * A paginated list of subscriptions to a filter.
 */
export interface FilterSubscriptionsList {
  /**
   * The number of items on the page.
   * @format int32
   */
  size?: number;

  /** The list of items. */
  items?: FilterSubscription[];

  /**
   * The maximum number of results that could be on the page.
   * @format int32
   */
  'max-results'?: number;

  /**
   * The index of the first item returned on the page.
   * @format int32
   */
  'start-index'?: number;

  /**
   * The index of the last item returned on the page.
   * @format int32
   */
  'end-index'?: number;
}

/**
 * The project issue type hierarchy.
 */
export interface Hierarchy {
  /**
   * The ID of the base level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
   * @format int64
   */
  baseLevelId?: number;

  /** Details about the hierarchy level. */
  levels?: HierarchyLevel[];
}

export interface HierarchyLevel {
  /**
   * The ID of the hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
   * @format int64
   */
  id?: number;

  /** The name of this hierarchy level. */
  name?: string;

  /**
   * The ID of the level above this one in the hierarchy. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
   * @format int64
   */
  aboveLevelId?: number;

  /**
   * The ID of the level below this one in the hierarchy. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
   * @format int64
   */
  belowLevelId?: number;

  /**
   * The ID of the project configuration. This property is deprecated, see [Change oticen: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
   * @format int64
   */
  projectConfigurationId?: number;

  /**
   * The level of this item in the hierarchy.
   * @format int32
   */
  level?: number;

  /** The issue types available in this hierarchy level. */
  issueTypeIds?: number[];

  /**
   * The external UUID of the hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
   * @format uuid
   */
  externalUuid?: string;
  globalHierarchyLevel?: 'SUBTASK' | 'BASE' | 'EPIC';
}

/**
 * Details about an issue type.
 */
export interface IssueTypeDetails {
  /** The URL of these issue type details. */
  self?: string;

  /** The ID of the issue type. */
  id?: string;

  /** The description of the issue type. */
  description?: string;

  /** The URL of the issue type's avatar. */
  iconUrl?: string;

  /** The name of the issue type. */
  name?: string;

  /** Whether this issue type is used to create subtasks. */
  subtask?: boolean;

  /**
   * The ID of the issue type's avatar.
   * @format int64
   */
  avatarId?: number;

  /**
   * Unique ID for next-gen projects.
   * @format uuid
   */
  entityId?: string;

  /**
   * Hierarchy level of the issue type.
   * @format int32
   */
  hierarchyLevel?: number;

  /** Details of the next-gen projects the issue type is available in. */
  scope?: Scope;
}

/**
 * Details about a project.
 */
export interface Project {
  /** Expand options that include additional project details in the response. */
  expand?: string;

  /**
   * The URL of the project details.
   * @format uri
   */
  self?: string;

  /** The ID of the project. */
  id?: string;

  /** The key of the project. */
  key?: string;

  /** A brief description of the project. */
  description?: string;

  /** The username of the project lead. */
  lead?: User;

  /** List of the components contained in the project. */
  components?: ProjectComponent[];

  /** List of the issue types available in the project. */
  issueTypes?: IssueTypeDetails[];

  /** A link to information about this project, such as project documentation. */
  url?: string;

  /** An email address associated with the project. */
  email?: string;

  /** The default assignee when creating issues for this project. */
  assigneeType?: 'PROJECT_LEAD' | 'UNASSIGNED';

  /** The versions defined in the project. For more information, see [Create version](#api-rest-api-2-version-post). */
  versions?: Version[];

  /** The name of the project. */
  name?: string;

  /** The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-2-role-post). */
  roles?: Record<string, string>;

  /** The URLs of the project's avatars. */
  avatarUrls?: AvatarUrlsBean;

  /** The category the project belongs to. */
  projectCategory?: ProjectCategory;

  /** The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project. */
  projectTypeKey?: 'software' | 'service_desk' | 'business';

  /** Whether the project is simplified. */
  simplified?: boolean;

  /** The type of the project. */
  style?: 'classic' | 'next-gen';

  /** Whether the project is selected as a favorite. */
  favourite?: boolean;

  /** Whether the project is private. */
  isPrivate?: boolean;

  /** The issue type hierarchy for the project. */
  issueTypeHierarchy?: Hierarchy;

  /** User permissions on the project */
  permissions?: ProjectPermissions;

  /** Map of project properties */
  properties?: Record<string, any>;

  /**
   * Unique ID for next-gen projects.
   * @format uuid
   */
  uuid?: string;

  /** Insights about the project. */
  insight?: ProjectInsight;

  /** Whether the project is marked as deleted. */
  deleted?: boolean;

  /**
   * The date when the project is deleted permanently.
   * @format date-time
   */
  retentionTillDate?: string;

  /**
   * The date when the project was marked as deleted.
   * @format date-time
   */
  deletedDate?: string;

  /** The user who marked the project as deleted. */
  deletedBy?: User;

  /** Whether the project is archived. */
  archived?: boolean;

  /**
   * The date when the project was archived.
   * @format date-time
   */
  archivedDate?: string;

  /** The user who archived the project. */
  archivedBy?: User;

  /** The project landing page info. */
  landingPageInfo?: ProjectLandingPageInfo;
}

/**
 * A project category.
 */
export interface ProjectCategory {
  /**
   * The URL of the project category.
   * @format uri
   */
  self?: string;

  /** The ID of the project category. */
  id?: string;

  /** The name of the project category. Required on create, optional on update. */
  name?: string;

  /** The description of the project category. */
  description?: string;
}

/**
 * Details about a project component.
 */
export interface ProjectComponent {
  /**
   * The URL of the component.
   * @format uri
   */
  self?: string;

  /** The unique identifier for the component. */
  id?: string;

  /** The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters. */
  name?: string;

  /** The description for the component. Optional when creating or updating a component. */
  description?: string;

  /** The user details for the component's lead user. */
  lead?: User;

  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  leadUserName?: string;

  /** The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  leadAccountId?: string;

  /**
   * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:
   *
   *  *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.
   *  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.
   *  *  `UNASSIGNED` an assignee is not set for issues created with this component.
   *  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.
   * Default value: `PROJECT_DEFAULT`.
   * Optional when creating or updating a component.
   */
  assigneeType?: 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED';

  /** The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component. */
  assignee?: User;

  /**
   * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:
   *
   *  *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.
   *  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.
   *  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.
   *  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
   */
  realAssigneeType?: 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED';

  /** The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee. */
  realAssignee?: User;

  /** Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned. */
  isAssigneeTypeValid?: boolean;

  /** The key of the project the component is assigned to. Required when creating a component. Can't be updated. */
  project?: string;

  /**
   * The ID of the project the component is assigned to.
   * @format int64
   */
  projectId?: number;
}

/**
 * Details about a project.
 */
export interface ProjectDetails {
  /** The URL of the project details. */
  self?: string;

  /** The ID of the project. */
  id?: string;

  /** The key of the project. */
  key?: string;

  /** The name of the project. */
  name?: string;

  /** The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project. */
  projectTypeKey?: 'software' | 'service_desk' | 'business';

  /** Whether or not the project is simplified. */
  simplified?: boolean;

  /** The URLs of the project's avatars. */
  avatarUrls?: AvatarUrlsBean;

  /** The category the project belongs to. */
  projectCategory?: UpdatedProjectCategory;
}

/**
 * Additional details about a project.
 */
export interface ProjectInsight {
  /**
   * Total issue count.
   * @format int64
   */
  totalIssueCount?: number;

  /**
   * The last issue update time.
   * @format date-time
   */
  lastIssueUpdateTime?: string;
}

export interface ProjectLandingPageInfo {
  url?: string;
  projectKey?: string;
  projectType?: string;

  /** @format int64 */
  boardId?: number;
  simplified?: boolean;
}

/**
 * Permissions which a user has on a project.
 */
export interface ProjectPermissions {
  /** Whether the logged user can edit the project. */
  canEdit?: boolean;
}

/**
 * Details about the roles in a project.
 */
export interface ProjectRole {
  /**
   * The URL the project role details.
   * @format uri
   */
  self?: string;

  /** The name of the project role. */
  name?: string;

  /**
   * The ID of the project role.
   * @format int64
   */
  id?: number;

  /** The description of the project role. */
  description?: string;

  /** The list of users who act in this role. */
  actors?: RoleActor[];

  /** The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO). */
  scope?: Scope;

  /** The translated name of the project role. */
  translatedName?: string;

  /** Whether the calling user is part of this role. */
  currentUserRole?: boolean;

  /** Whether this role is the admin role for the project. */
  admin?: boolean;

  /** Whether the roles are configurable for this project. */
  roleConfigurable?: boolean;

  /** Whether this role is the default role for the project */
  default?: boolean;
}

/**
 * Details of the group associated with the role.
 */
export interface ProjectRoleGroup {
  /** The display name of the group. */
  displayName?: string;

  /** The name of the group */
  name?: string;
}

/**
 * Details of the user associated with the role.
 */
export interface ProjectRoleUser {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import. */
  accountId?: string;
}

/**
 * Details about a user assigned to a project role.
 */
export interface RoleActor {
  /**
   * The ID of the role actor.
   * @format int64
   */
  id?: number;

  /** The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user's name. */
  displayName?: string;

  /** The type of role actor. */
  type?: 'atlassian-group-role-actor' | 'atlassian-user-role-actor';

  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;

  /**
   * The avatar of the role actor.
   * @format uri
   */
  avatarUrl?: string;
  actorUser?: ProjectRoleUser;
  actorGroup?: ProjectRoleGroup;
}

/**
 * The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
 */
export interface Scope {
  /** The type of scope. */
  type?: 'PROJECT' | 'TEMPLATE';

  /** The project the item has scope in. */
  project?: ProjectDetails;
  [key: string]: any;
}

/**
 * Details of a share permission for the filter.
 */
export interface SharePermission {
  /**
   * The unique identifier of the share permission.
   * @format int64
   */
  id?: number;

  /**
   * The type of share permission:
   *
   *  *  `user` Shared with a user.
   *  *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.
   *  *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.
   *  *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.
   *  *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.
   *  *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.
   *  *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request.
   */
  type: 'user' | 'group' | 'project' | 'projectRole' | 'global' | 'loggedin' | 'authenticated' | 'project-unknown';

  /**
   * The project that the filter is shared with. This is similar to the project object returned by [Get project](#api-rest-api-2-project-projectIdOrKey-get) but it contains a subset of the properties, which are: `self`, `id`, `key`, `assigneeType`, `name`, `roles`, `avatarUrls`, `projectType`, `simplified`.
   * For a request, specify the `id` for the project.
   */
  project?: Project;

  /**
   * The project role that the filter is shared with.
   * For a request, specify the `id` for the role. You must also specify the `project` object and `id` for the project that the role is in.
   */
  role?: ProjectRole;

  /** The group that the filter is shared with. For a request, specify the `name` property for the group. */
  group?: GroupName;

  /** The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user. */
  user?: UserBean;
}

/**
 * A project category.
 */
export interface UpdatedProjectCategory {
  /** The URL of the project category. */
  self?: string;

  /** The ID of the project category. */
  id?: string;

  /** The name of the project category. */
  description?: string;

  /** The description of the project category. */
  name?: string;
}

export interface UserBean {
  /**
   * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * The key of the user.
   */
  key?: string;

  /**
   * The URL of the user.
   * @format uri
   */
  self?: string;

  /**
   * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * The username of the user.
   */
  name?: string;

  /** The display name of the user. Depending on the user’s privacy setting, this may return an alternative value. */
  displayName?: string;

  /** Whether the user is active. */
  active?: boolean;

  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;

  /** The avatars of the user. */
  avatarUrls?: UserBeanAvatarUrls;
}

export interface UserBeanAvatarUrls {
  /**
   * The URL of the user's 24x24 pixel avatar.
   * @format uri
   */
  '24x24'?: string;

  /**
   * The URL of the user's 32x32 pixel avatar.
   * @format uri
   */
  '32x32'?: string;

  /**
   * The URL of the user's 48x48 pixel avatar.
   * @format uri
   */
  '48x48'?: string;

  /**
   * The URL of the user's 16x16 pixel avatar.
   * @format uri
   */
  '16x16'?: string;
}

/**
 * A paginated list of users sharing the filter. This includes users that are members of the groups or can browse the projects that the filter is shared with.
 */
export interface UserList {
  /**
   * The number of items on the page.
   * @format int32
   */
  size?: number;

  /** The list of items. */
  items?: User[];

  /**
   * The maximum number of results that could be on the page.
   * @format int32
   */
  'max-results'?: number;

  /**
   * The index of the first item returned on the page.
   * @format int32
   */
  'start-index'?: number;

  /**
   * The index of the last item returned on the page.
   * @format int32
   */
  'end-index'?: number;
}

/**
 * Details about a project version.
 */
export interface Version {
  /**
   * Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   *  *  `operations` Returns the list of operations available for this version.
   *  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
   * Optional for create and update.
   */
  expand?: string;

  /**
   * The URL of the version.
   * @format uri
   */
  self?: string;

  /** The ID of the version. */
  id?: string;

  /** The description of the version. Optional when creating or updating a version. */
  description?: string;

  /** The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters. */
  name?: string;

  /** Indicates that the version is archived. Optional when creating or updating a version. */
  archived?: boolean;

  /** Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version. */
  released?: boolean;

  /**
   * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
   * @format date
   */
  startDate?: string;

  /**
   * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
   * @format date
   */
  releaseDate?: string;

  /** Indicates that the version is overdue. */
  overdue?: boolean;

  /** The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format. */
  userStartDate?: string;

  /** The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format. */
  userReleaseDate?: string;

  /** Deprecated. Use `projectId`. */
  project?: string;

  /**
   * The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
   * @format int64
   */
  projectId?: number;

  /**
   * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
   * @format uri
   */
  moveUnfixedIssuesTo?: string;

  /** If the expand option `operations` is used, returns the list of operations available for this version. */
  operations?: SimpleLink[];

  /** If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*. */
  issuesStatusForFixVersion?: VersionIssuesStatus;
}

/**
 * Counts of the number of issues in various statuses.
 */
export interface VersionIssuesStatus {
  /**
   * Count of issues with a status other than *to do*, *in progress*, and *done*.
   * @format int64
   */
  unmapped?: number;

  /**
   * Count of issues with status *to do*.
   * @format int64
   */
  toDo?: number;

  /**
   * Count of issues with status *in progress*.
   * @format int64
   */
  inProgress?: number;

  /**
   * Count of issues with status *done*.
   * @format int64
   */
  done?: number;
  [key: string]: any;
}

/**
 * Details of a filter.
 */
export interface FilterDetails {
  /** Expand options that include additional filter details in the response. */
  expand?: string;

  /**
   * The URL of the filter.
   * @format uri
   */
  self?: string;

  /** The unique identifier for the filter. */
  id?: string;

  /** The name of the filter. */
  name: string;

  /** The description of the filter. */
  description?: string;

  /** The user who owns the filter. Defaults to the creator of the filter, however, Jira administrators can change the owner of a shared filter in the admin settings. */
  owner?: User;

  /** The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*. */
  jql?: string;

  /**
   * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
   * @format uri
   */
  viewUrl?: string;

  /**
   * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-2-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/2/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
   * @format uri
   */
  searchUrl?: string;

  /** Whether the filter is selected as a favorite by any users, not including the filter owner. */
  favourite?: boolean;

  /**
   * The count of how many users have selected this filter as a favorite, including the filter owner.
   * @format int64
   */
  favouritedCount?: number;

  /** The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter. */
  sharePermissions?: SharePermission[];

  /** The groups and projects that can edit the filter. This can be specified when updating a filter, but not when creating a filter. */
  editPermissions?: SharePermission[];

  /** The users that are subscribed to the filter. */
  subscriptions?: FilterSubscription[];
}

/**
 * A page of items.
 */
export interface PageBeanFilterDetails {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: FilterDetails[];
}

/**
 * Error messages from an operation.
 */
export interface ErrorCollection {
  /** The list of error messages produced by this operation. For example, "input parameter 'key' must be provided" */
  errorMessages?: string[];

  /** The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters." */
  errors?: Record<string, string>;

  /** @format int32 */
  status?: number;
}

/**
 * Details of the scope of the default sharing for new filters and dashboards.
 */
export interface DefaultShareScope {
  /**
   * The scope of the default sharing for new filters and dashboards:
   *
   *  *  `AUTHENTICATED` Shared with all logged-in users.
   *  *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.
   *  *  `PRIVATE` Not shared with any users.
   */
  scope: 'GLOBAL' | 'AUTHENTICATED' | 'PRIVATE';
}

/**
 * Details of an issue navigator column item.
 */
export interface ColumnItem {
  /** The issue navigator column label. */
  label?: string;

  /** The issue navigator column value. */
  value?: string;
}

export interface SharePermissionInputBean {
  /**
   * The type of the share permission.Specify the type as follows:
   *
   *  *  `user` Share with a user.
   *  *  `group` Share with a group. Specify `groupname` as well.
   *  *  `project` Share with a project. Specify `projectId` as well.
   *  *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.
   *  *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
   *  *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
   */
  type: 'user' | 'project' | 'group' | 'projectRole' | 'global' | 'authenticated';

  /** The ID of the project to share the filter with. Set `type` to `project`. */
  projectId?: string;

  /** The name of the group to share the filter with. Set `type` to `group`. */
  groupname?: string;

  /** The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in. */
  projectRoleId?: string;

  /** The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user. */
  accountId?: string;

  /**
   * The rights for the share permission.
   * @format int32
   */
  rights?: number;
}

/**
 * List of issues and JQL queries.
 */
export interface IssuesAndJQLQueries {
  /** A list of JQL queries. */
  jqls: string[];

  /** A list of issue IDs. */
  issueIds: number[];
}

/**
 * A list of matched issues or errors for each JQL query, in the order the JQL queries were passed.
 */
export interface IssueMatches {
  matches: IssueMatchesForJQL[];
}

/**
 * A list of the issues matched to a JQL query or details of errors encountered during matching.
 */
export interface IssueMatchesForJQL {
  /** A list of issue IDs. */
  matchedIssues: number[];

  /** A list of errors. */
  errors: string[];
}

/**
 * Bulk issue property update request details.
 */
export interface BulkIssuePropertyUpdateRequest {
  /** The value of the property. The value must be a [valid](https://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. */
  value?: any;

  /** EXPERIMENTAL. The Jira expression to calculate the value of the property. The value of the expression must be an object that can be converted to JSON, such as a number, boolean, string, list, or map. The context variables available to the expression are `issue` and `user`. Issues for which the expression returns a value whose JSON representation is longer than 32768 characters are ignored. */
  expression?: string;

  /** The bulk operation filter. */
  filter?: IssueFilterForBulkPropertySet;
}

/**
 * Bulk operation filter details.
 */
export interface IssueFilterForBulkPropertySet {
  /** List of issues to perform the bulk operation on. */
  entityIds?: number[];

  /** The value of properties to perform the bulk operation on. */
  currentValue?: any;

  /** Whether the bulk operation occurs only when the property is present on or absent from an issue. */
  hasProperty?: boolean;
}

/**
 * Bulk operation filter details.
 */
export interface IssueFilterForBulkPropertyDelete {
  /** List of issues to perform the bulk delete operation on. */
  entityIds?: number[];

  /** The value of properties to perform the bulk operation on. */
  currentValue?: any;
}

/**
 * Lists of issues and entity properties. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
 */
export interface IssueEntityProperties {
  /** A list of entity property IDs. */
  entitiesIds?: number[];

  /** A list of entity property keys and values. */
  properties?: Record<string, JsonNode>;
}

export interface JsonNode {
  elements?: object;
  pojo?: boolean;
  number?: boolean;
  integralNumber?: boolean;
  floatingPointNumber?: boolean;
  int?: boolean;
  long?: boolean;
  double?: boolean;
  bigDecimal?: boolean;
  bigInteger?: boolean;
  textual?: boolean;
  boolean?: boolean;
  binary?: boolean;
  containerNode?: boolean;
  missingNode?: boolean;
  object?: boolean;
  valueNode?: boolean;
  numberValue?: number;
  numberType?: 'INT' | 'LONG' | 'BIG_INTEGER' | 'FLOAT' | 'DOUBLE' | 'BIG_DECIMAL';

  /** @format int32 */
  intValue?: number;

  /** @format int64 */
  longValue?: number;
  bigIntegerValue?: number;

  /** @format double */
  doubleValue?: number;
  decimalValue?: number;
  booleanValue?: boolean;
  binaryValue?: string[];

  /** @format int32 */
  valueAsInt?: number;

  /** @format int64 */
  valueAsLong?: number;

  /** @format double */
  valueAsDouble?: number;
  valueAsBoolean?: boolean;
  textValue?: string;
  valueAsText?: string;
  fieldNames?: object;
  array?: boolean;
  fields?: object;
  null?: boolean;
}

/**
 * Details about a task.
 */
export interface TaskProgressBeanObject {
  /**
   * The URL of the task.
   * @format uri
   */
  self: string;

  /** The ID of the task. */
  id: string;

  /** The description of the task. */
  description?: string;

  /** The status of the task. */
  status: 'ENQUEUED' | 'RUNNING' | 'COMPLETE' | 'FAILED' | 'CANCEL_REQUESTED' | 'CANCELLED' | 'DEAD';

  /** Information about the progress of the task. */
  message?: string;

  /** The result of the task execution. */
  result?: any;

  /**
   * The ID of the user who submitted the task.
   * @format int64
   */
  submittedBy: number;

  /**
   * The progress of the task, as a percentage complete.
   * @format int64
   */
  progress: number;

  /**
   * The execution time of the task, in milliseconds.
   * @format int64
   */
  elapsedRuntime: number;

  /**
   * A timestamp recording when the task was submitted.
   * @format int64
   */
  submitted: number;

  /**
   * A timestamp recording when the task was started.
   * @format int64
   */
  started?: number;

  /**
   * A timestamp recording when the task was finished.
   * @format int64
   */
  finished?: number;

  /**
   * A timestamp recording when the task progress was last updated.
   * @format int64
   */
  lastUpdate: number;
}

/**
 * Details about a group.
 */
export interface GroupDetails {
  /** The name of the group. */
  name?: string;

  /** The ID of the group, if available, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. */
  groupId?: string;
}

/**
 * A page of items.
 */
export interface PageBeanGroupDetails {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: GroupDetails[];
}

/**
 * Property key details.
 */
export interface PropertyKey {
  /** The URL of the property. */
  self?: string;

  /** The key of the property. */
  key?: string;
}

/**
 * List of property keys.
 */
export interface PropertyKeys {
  /** Property key details. */
  keys?: PropertyKey[];
}

/**
 * An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).
 */
export interface EntityProperty {
  /** The key of the property. Required on create and update. */
  key?: string;

  /** The value of the property. Required on create and update. */
  value?: any;
}

/**
 * Details about the replacement for a deleted version.
 */
export interface CustomFieldReplacement {
  /**
   * The ID of the custom field in which to replace the version number.
   * @format int64
   */
  customFieldId?: number;

  /**
   * The version number to use as a replacement for the deleted version.
   * @format int64
   */
  moveTo?: number;
}

export interface DeleteAndReplaceVersionBean {
  /**
   * The ID of the version to update `fixVersion` to when the field contains the deleted version.
   * @format int64
   */
  moveFixIssuesTo?: number;

  /**
   * The ID of the version to update `affectedVersion` to when the field contains the deleted version.
   * @format int64
   */
  moveAffectedIssuesTo?: number;

  /** An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version. */
  customFieldReplacementList?: CustomFieldReplacement[];
}

/**
 * Various counts of issues within a version.
 */
export interface VersionIssueCounts {
  /**
   * The URL of these count details.
   * @format uri
   */
  self?: string;

  /**
   * Count of issues where the `fixVersion` is set to the version.
   * @format int64
   */
  issuesFixedCount?: number;

  /**
   * Count of issues where the `affectedVersion` is set to the version.
   * @format int64
   */
  issuesAffectedCount?: number;

  /**
   * Count of issues where a version custom field is set to the version.
   * @format int64
   */
  issueCountWithCustomFieldsShowingVersion?: number;

  /** List of custom fields using the version. */
  customFieldUsage?: VersionUsageInCustomField[];
}

/**
 * List of custom fields using the version.
 */
export interface VersionUsageInCustomField {
  /** The name of the custom field. */
  fieldName?: string;

  /**
   * The ID of the custom field.
   * @format int64
   */
  customFieldId?: number;

  /**
   * Count of the issues where the custom field contains the version.
   * @format int64
   */
  issueCountWithVersionInCustomField?: number;
}

/**
 * Count of a version's unresolved issues.
 */
export interface VersionUnresolvedIssuesCount {
  /**
   * The URL of these count details.
   * @format uri
   */
  self?: string;

  /**
   * Count of unresolved issues.
   * @format int64
   */
  issuesUnresolvedCount?: number;

  /**
   * Count of issues.
   * @format int64
   */
  issuesCount?: number;
}

export interface VersionMoveBean {
  /**
   * The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.
   * @format uri
   */
  after?: string;

  /** An absolute position in which to place the moved version. Cannot be used with `after`. */
  position?: 'Earlier' | 'Later' | 'First' | 'Last';
}

/**
 * The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users.
 */
export interface FoundUsers {
  users?: UserPickerUser[];

  /**
   * The total number of users found in the search.
   * @format int32
   */
  total?: number;

  /** Header text indicating the number of users in the response and the total number of users found in the search. */
  header?: string;
}

/**
 * A user found in a search.
 */
export interface UserPickerUser {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;

  /** This property is no longer available . See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;

  /** This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;

  /** The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag. */
  html?: string;

  /** The display name of the user. Depending on the user’s privacy setting, this may be returned as null. */
  displayName?: string;

  /**
   * The avatar URL of the user.
   * @format uri
   */
  avatarUrl?: string;
}

/**
 * The user details.
 */
export interface NewUserDetails {
  /** The URL of the user. */
  self?: string;

  /** This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;

  /** This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;

  /** This property is no longer available. If the user has an Atlassian account, their password is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account. */
  password?: string;

  /** The email address for the user. */
  emailAddress: string;

  /** A suggested display name for the user. If the user has an Atlassian account, their display name is not changed. If the user does not have an Atlassian account, this display name is used as a suggestion for creating an account. The user is sent an email asking them to set their display name and privacy preferences. */
  displayName: string;

  /** Deprecated, do not use. */
  applicationKeys?: string[];
  [key: string]: any;
}

/**
 * Details of an avatar.
 */
export interface Avatar {
  /** The ID of the avatar. */
  id: string;

  /** The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user. */
  owner?: string;

  /** Whether the avatar is a system avatar. */
  isSystemAvatar?: boolean;

  /** Whether the avatar is used in Jira. For example, shown as a project's avatar. */
  isSelected?: boolean;

  /** Whether the avatar can be deleted. */
  isDeletable?: boolean;

  /** The file name of the avatar icon. Returned for system avatars. */
  fileName?: string;

  /** The list of avatar icon URLs. */
  urls?: Record<string, string>;
}

/**
 * Details about system and custom avatars.
 */
export interface Avatars {
  /** System avatars list. */
  system?: Avatar[];

  /** Custom avatars list. */
  custom?: Avatar[];
}

/**
 * A screen tab.
 */
export interface ScreenableTab {
  /**
   * The ID of the screen tab.
   * @format int64
   */
  id?: number;

  /** The name of the screen tab. The maximum length is 255 characters. */
  name: string;
}

/**
 * A page of items.
 */
export interface PageBeanScreen {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Screen[];
}

/**
 * A screen.
 */
export interface Screen {
  /**
   * The ID of the screen.
   * @format int64
   */
  id?: number;

  /** The name of the screen. */
  name?: string;

  /** The description of the screen. */
  description?: string;

  /** The scope of the screen. */
  scope?: Scope;
}

/**
 * A screen tab field.
 */
export interface ScreenableField {
  /** The ID of the screen tab field. */
  id?: string;

  /** The name of the screen tab field. Required on create and update. The maximum length is 255 characters. */
  name?: string;
}

export interface MoveFieldBean {
  /**
   * The ID of the screen tab field after which to place the moved screen tab field. Required if `position` isn't provided.
   * @format uri
   */
  after?: string;

  /** The named position to which the screen tab field should be moved. Required if `after` isn't provided. */
  position?: 'Earlier' | 'Later' | 'First' | 'Last';
}

export interface AddFieldBean {
  /** The ID of the field to add. */
  fieldId: string;
}

/**
 * Details of a screen.
 */
export interface ScreenDetails {
  /** The name of the screen. The name must be unique. The maximum length is 255 characters. */
  name: string;

  /** The description of the screen. The maximum length is 255 characters. */
  description?: string;
}

/**
 * Details of a screen.
 */
export interface UpdateScreenDetails {
  /** The name of the screen. The name must be unique. The maximum length is 255 characters. */
  name?: string;

  /** The description of the screen. The maximum length is 255 characters. */
  description?: string;
}

/**
 * Details of an issue resolution.
 */
export interface Resolution {
  /**
   * The URL of the issue resolution.
   * @format uri
   */
  self?: string;

  /** The ID of the issue resolution. */
  id?: string;

  /** The description of the issue resolution. */
  description?: string;

  /** The name of the issue resolution. */
  name?: string;
}

/**
 * Details about the project.
 */
export interface CreateProjectDetails {
  /** Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters. */
  key: string;

  /** The name of the project. */
  name: string;

  /** A brief description of the project. */
  description?: string;

  /** This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `leadAccountId`. */
  lead?: string;

  /** The account ID of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `lead`. */
  leadAccountId?: string;

  /** A link to information about this project, such as project documentation */
  url?: string;

  /** The default assignee when creating issues for this project. */
  assigneeType?: 'PROJECT_LEAD' | 'UNASSIGNED';

  /**
   * An integer value for the project's avatar.
   * @format int64
   */
  avatarId?: number;

  /**
   * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-2-issuesecurityschemes-get) resource to get all issue security scheme IDs.
   * @format int64
   */
  issueSecurityScheme?: number;

  /**
   * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-2-permissionscheme-get) resource to see a list of all permission scheme IDs.
   * @format int64
   */
  permissionScheme?: number;

  /**
   * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-2-notificationscheme-get) resource to get a list of notification scheme IDs.
   * @format int64
   */
  notificationScheme?: number;

  /**
   * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-2-projectCategory-get) operation.
   * @format int64
   */
  categoryId?: number;

  /** The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which defines the application-specific feature set. If you don't specify the project template you have to specify the project type. */
  projectTypeKey?: 'software' | 'service_desk' | 'business';

  /** A predefined configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`. */
  projectTemplateKey?:
    | 'com.pyxis.greenhopper.jira:gh-simplified-agility-kanban'
    | 'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum'
    | 'com.pyxis.greenhopper.jira:gh-simplified-basic'
    | 'com.pyxis.greenhopper.jira:gh-simplified-kanban-classic'
    | 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic'
    | 'com.atlassian.servicedesk:simplified-it-service-management'
    | 'com.atlassian.servicedesk:simplified-general-service-desk'
    | 'com.atlassian.servicedesk:simplified-internal-service-desk'
    | 'com.atlassian.servicedesk:simplified-external-service-desk'
    | 'com.atlassian.servicedesk:simplified-hr-service-desk'
    | 'com.atlassian.servicedesk:simplified-facilities-service-desk'
    | 'com.atlassian.servicedesk:simplified-legal-service-desk'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-content-management'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-process-control'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-procurement'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-project-management'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment'
    | 'com.atlassian.jira-core-project-templates:jira-core-simplified-task-';

  /**
   * The ID of the workflow scheme for the project. Use the [Get all workflow schemes](#api-rest-api-2-workflowscheme-get) operation to get a list of workflow scheme IDs. If you specify the workflow scheme you cannot specify the project template key.
   * @format int64
   */
  workflowScheme?: number;

  /**
   * The ID of the issue type screen scheme for the project. Use the [Get all issue type screen schemes](#api-rest-api-2-issuetypescreenscheme-get) operation to get a list of issue type screen scheme IDs. If you specify the issue type screen scheme you cannot specify the project template key.
   * @format int64
   */
  issueTypeScreenScheme?: number;

  /**
   * The ID of the issue type scheme for the project. Use the [Get all issue type schemes](#api-rest-api-2-issuetypescheme-get) operation to get a list of issue type scheme IDs. If you specify the issue type scheme you cannot specify the project template key.
   * @format int64
   */
  issueTypeScheme?: number;

  /**
   * The ID of the field configuration scheme for the project. Use the [Get all field configuration schemes](#api-rest-api-2-fieldconfigurationscheme-get) operation to get a list of field configuration scheme IDs. If you specify the field configuration scheme you cannot specify the project template key.
   * @format int64
   */
  fieldConfigurationScheme?: number;
}

/**
 * Identifiers for a project.
 */
export interface ProjectIdentifiers {
  /**
   * The URL of the created project.
   * @format uri
   */
  self: string;

  /**
   * The ID of the created project.
   * @format int64
   */
  id: number;

  /** The key of the created project. */
  key: string;
}

/**
 * Details about the project.
 */
export interface UpdateProjectDetails {
  /** Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters. */
  key?: string;

  /** The name of the project. */
  name?: string;

  /** A brief description of the project. */
  description?: string;

  /** This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Cannot be provided with `leadAccountId`. */
  lead?: string;

  /** The account ID of the project lead. Cannot be provided with `lead`. */
  leadAccountId?: string;

  /** A link to information about this project, such as project documentation */
  url?: string;

  /** The default assignee when creating issues for this project. */
  assigneeType?: 'PROJECT_LEAD' | 'UNASSIGNED';

  /**
   * An integer value for the project's avatar.
   * @format int64
   */
  avatarId?: number;

  /**
   * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-2-issuesecurityschemes-get) resource to get all issue security scheme IDs.
   * @format int64
   */
  issueSecurityScheme?: number;

  /**
   * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-2-permissionscheme-get) resource to see a list of all permission scheme IDs.
   * @format int64
   */
  permissionScheme?: number;

  /**
   * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-2-notificationscheme-get) resource to get a list of notification scheme IDs.
   * @format int64
   */
  notificationScheme?: number;

  /**
   * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-2-projectCategory-get) operation. To remove the project category from the project, set the value to `-1.`
   * @format int64
   */
  categoryId?: number;
}

/**
 * A page of items.
 */
export interface PageBeanVersion {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Version[];
}

/**
 * Details about a component with a count of the issues it contains.
 */
export interface ComponentWithIssueCount {
  /**
   * Count of issues for the component.
   * @format int64
   */
  issueCount?: number;

  /** The description for the component. */
  description?: string;

  /**
   * The URL for this count of the issues contained in the component.
   * @format uri
   */
  self?: string;

  /** The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component. */
  assignee?: User;

  /**
   * Not used.
   * @format int64
   */
  projectId?: number;

  /** The key of the project to which the component is assigned. */
  project?: string;

  /** The user details for the component's lead user. */
  lead?: User;

  /**
   * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Takes the following values:
   *
   *  *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.
   *  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.
   *  *  `UNASSIGNED` an assignee is not set for issues created with this component.
   *  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.
   */
  assigneeType?: 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED';

  /** The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee. */
  realAssignee?: User;

  /** Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned. */
  isAssigneeTypeValid?: boolean;

  /**
   * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:
   *
   *  *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.
   *  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.
   *  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.
   *  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
   */
  realAssigneeType?: 'PROJECT_DEFAULT' | 'COMPONENT_LEAD' | 'PROJECT_LEAD' | 'UNASSIGNED';

  /** The name for the component. */
  name?: string;

  /** The unique identifier for the component. */
  id?: string;
}

/**
 * A page of items.
 */
export interface PageBeanComponentWithIssueCount {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: ComponentWithIssueCount[];
}

export type StringList = object;

/**
 * A page of items.
 */
export interface PageBeanProject {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Project[];
}

/**
 * List of project avatars.
 */
export interface ProjectAvatars {
  /** List of avatars included with Jira. These avatars cannot be deleted. */
  system?: Avatar[];

  /** List of avatars added to Jira. These avatars may be deleted. */
  custom?: Avatar[];
}

/**
 * Status details for an issue type.
 */
export interface IssueTypeWithStatus {
  /** The URL of the issue type's status details. */
  self: string;

  /** The ID of the issue type. */
  id: string;

  /** The name of the issue type. */
  name: string;

  /** Whether this issue type represents subtasks. */
  subtask: boolean;

  /** List of status details for the issue type. */
  statuses: StatusDetails[];
}

/**
 * Details of an issue level security item.
 */
export interface SecurityLevel {
  /** The URL of the issue level security item. */
  self?: string;

  /** The ID of the issue level security item. */
  id?: string;

  /** The description of the issue level security item. */
  description?: string;

  /** The name of the issue level security item. */
  name?: string;
}

/**
 * Details about a security scheme.
 */
export interface SecurityScheme {
  /** The URL of the issue security scheme. */
  self?: string;

  /**
   * The ID of the issue security scheme.
   * @format int64
   */
  id?: number;

  /** The name of the issue security scheme. */
  name?: string;

  /** The description of the issue security scheme. */
  description?: string;

  /**
   * The ID of the default security level.
   * @format int64
   */
  defaultSecurityLevelId?: number;
  levels?: SecurityLevel[];
}

/**
 * The list of features on a project.
 */
export interface ContainerForProjectFeatures {
  /** The project features. */
  features?: ProjectFeature[];
}

/**
 * Details of a project feature.
 */
export interface ProjectFeature {
  /**
   * The ID of the project.
   * @format int64
   */
  projectId?: number;

  /** The state of the feature. When updating the state of a feature, only ENABLED and DISABLED are supported. Responses can contain all values */
  state?: 'ENABLED' | 'DISABLED' | 'COMING_SOON';

  /** Whether the state of the feature can be updated. */
  toggleLocked?: boolean;

  /** The key of the feature. */
  feature?: string;

  /** List of keys of the features required to enable the feature. */
  prerequisites?: string[];

  /** Localized display name for the feature. */
  localisedName?: string;

  /** Localized display description for the feature. */
  localisedDescription?: string;

  /** URI for the image representing the feature. */
  imageUri?: string;
}

/**
 * Details of the feature state.
 */
export interface ProjectFeatureState {
  /** The feature state. */
  state?: 'ENABLED' | 'DISABLED' | 'COMING_SOON';
}

/**
 * An issue priority.
 */
export interface Priority {
  /** The URL of the issue priority. */
  self?: string;

  /** The color used to indicate the issue priority. */
  statusColor?: string;

  /** The description of the issue priority. */
  description?: string;

  /** The URL of the icon for the issue priority. */
  iconUrl?: string;

  /** The name of the issue priority. */
  name?: string;

  /** The ID of the issue priority. */
  id?: string;
  [key: string]: any;
}

/**
 * A comment.
 */
export interface Comment {
  /** The URL of the comment. */
  self?: string;

  /** The ID of the comment. */
  id?: string;

  /** The ID of the user who created the comment. */
  author?: UserDetails;

  /** The comment text. */
  body?: string;

  /** The rendered version of the comment. */
  renderedBody?: string;

  /** The ID of the user who updated the comment last. */
  updateAuthor?: UserDetails;

  /**
   * The date and time at which the comment was created.
   * @format date-time
   */
  created?: string;

  /**
   * The date and time at which the comment was updated last.
   * @format date-time
   */
  updated?: string;

  /** The group or role to which this comment is visible. Optional on create and update. */
  visibility?: Visibility;

  /** Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation. */
  jsdPublic?: boolean;

  /** Whether the comment is made by an outsider who is not part of the issue. */
  jsdAuthorCanSeeRequest?: boolean;

  /** A list of comment properties. Optional on create and update. */
  properties?: EntityProperty[];
  [key: string]: any;
}

/**
 * Key fields from the linked issue.
 */
export interface Fields {
  /** The summary description of the linked issue. */
  summary?: string;

  /** The status of the linked issue. */
  status?: StatusDetails;

  /** The priority of the linked issue. */
  priority?: Priority;

  /** The assignee of the linked issue. */
  assignee?: UserDetails;

  /** The time tracking of the linked issue. */
  timetracking?: TimeTrackingDetails;

  /** The type of the linked issue. */
  issuetype?: IssueTypeDetails;

  /** The type of the linked issue. */
  issueType?: IssueTypeDetails;
}

/**
* This object is used as follows:

 *  In the [ issueLink](#api-rest-api-2-issueLink-post) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](#api-rest-api-2-issueLinkType-get).
 *  In the [ issueLinkType](#api-rest-api-2-issueLinkType-post) resource it defines and reports on issue link types.
*/
export interface IssueLinkType {
  /**
   * The ID of the issue link type and is used as follows:
   *
   *  *  In the [ issueLink](#api-rest-api-2-issueLink-post) resource it is the type of issue link. Required on create when `name` isn't provided. Otherwise, read only.
   *  *  In the [ issueLinkType](#api-rest-api-2-issueLinkType-post) resource it is read only.
   */
  id?: string;

  /**
   * The name of the issue link type and is used as follows:
   *
   *  *  In the [ issueLink](#api-rest-api-2-issueLink-post) resource it is the type of issue link. Required on create when `id` isn't provided. Otherwise, read only.
   *  *  In the [ issueLinkType](#api-rest-api-2-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.
   */
  name?: string;

  /**
   * The description of the issue link type inward link and is used as follows:
   *
   *  *  In the [ issueLink](#api-rest-api-2-issueLink-post) resource it is read only.
   *  *  In the [ issueLinkType](#api-rest-api-2-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.
   */
  inward?: string;

  /**
   * The description of the issue link type outward link and is used as follows:
   *
   *  *  In the [ issueLink](#api-rest-api-2-issueLink-post) resource it is read only.
   *  *  In the [ issueLinkType](#api-rest-api-2-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.
   */
  outward?: string;

  /**
   * The URL of the issue link type. Read only.
   * @format uri
   */
  self?: string;
}

export interface LinkIssueRequestJsonBean {
  /**
   * This object is used as follows:
   *
   *  *  In the [ issueLink](#api-rest-api-2-issueLink-post) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](#api-rest-api-2-issueLinkType-get).
   *  *  In the [ issueLinkType](#api-rest-api-2-issueLinkType-post) resource it defines and reports on issue link types.
   */
  type: IssueLinkType;

  /** The ID or key of a linked issue. */
  inwardIssue: LinkedIssue;

  /** The ID or key of a linked issue. */
  outwardIssue: LinkedIssue;

  /** A comment. */
  comment?: Comment;
}

/**
 * The ID or key of a linked issue.
 */
export interface LinkedIssue {
  /** The ID of an issue. Required if `key` isn't provided. */
  id?: string;

  /** The key of an issue. Required if `id` isn't provided. */
  key?: string;

  /**
   * The URL of the issue.
   * @format uri
   */
  self?: string;

  /** The fields associated with the issue. */
  fields?: Fields;
}

export interface RichText {
  finalised?: boolean;
  emptyAdf?: boolean;
  valueSet?: boolean;
}

/**
 * Time tracking details.
 */
export interface TimeTrackingDetails {
  /** The original estimate of time needed for this issue in readable format. */
  originalEstimate?: string;

  /** The remaining estimate of time needed for this issue in readable format. */
  remainingEstimate?: string;

  /** Time worked on this issue in readable format. */
  timeSpent?: string;

  /**
   * The original estimate of time needed for this issue in seconds.
   * @format int64
   */
  originalEstimateSeconds?: number;

  /**
   * The remaining estimate of time needed for this issue in seconds.
   * @format int64
   */
  remainingEstimateSeconds?: number;

  /**
   * Time worked on this issue in seconds.
   * @format int64
   */
  timeSpentSeconds?: number;
}

/**
 * The group or role to which this item is visible.
 */
export interface Visibility {
  /** Whether visibility of this item is restricted to a group or role. */
  type?: 'group' | 'role';

  /** The name of the group or role to which visibility of this item is restricted. */
  value?: string;
  [key: string]: any;
}

/**
 * Details of a link between issues.
 */
export interface IssueLink {
  /** The ID of the issue link. */
  id?: string;

  /**
   * The URL of the issue link.
   * @format uri
   */
  self?: string;

  /** The type of link between the issues. */
  type: IssueLinkType;

  /** The issue the link joins to. */
  inwardIssue: LinkedIssue;

  /** The issue the link originates from. */
  outwardIssue: LinkedIssue;
}

/**
 * Paginated list of worklog details
 */
export interface PageOfWorklogs {
  /**
   * The index of the first item returned on the page.
   * @format int32
   */
  startAt?: number;

  /**
   * The maximum number of results that could be on the page.
   * @format int32
   */
  maxResults?: number;

  /**
   * The number of results on the page.
   * @format int32
   */
  total?: number;

  /** List of worklogs. */
  worklogs?: Worklog[];
  [key: string]: any;
}

/**
 * Details of a worklog.
 */
export interface Worklog {
  /**
   * The URL of the worklog item.
   * @format uri
   */
  self?: string;

  /** Details of the user who created the worklog. */
  author?: UserDetails;

  /** Details of the user who last updated the worklog. */
  updateAuthor?: UserDetails;

  /** A comment about the worklog. Optional when creating or updating a worklog. */
  comment?: string;

  /**
   * The datetime on which the worklog was created.
   * @format date-time
   */
  created?: string;

  /**
   * The datetime on which the worklog was last updated.
   * @format date-time
   */
  updated?: string;

  /** Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog. */
  visibility?: Visibility;

  /**
   * The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
   * @format date-time
   */
  started?: string;

  /** The time spent working on the issue as days (\#d), hours (\#h), or minutes (\#m or \#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided. */
  timeSpent?: string;

  /**
   * The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided.
   * @format int64
   */
  timeSpentSeconds?: number;

  /** The ID of the worklog record. */
  id?: string;

  /** The ID of the issue this worklog is for. */
  issueId?: string;

  /** Details of properties for the worklog. Optional when creating or updating a worklog. */
  properties?: EntityProperty[];
  [key: string]: any;
}

export interface IssueTypeCreateBean {
  /** The unique name for the issue type. The maximum length is 60 characters. */
  name: string;

  /** The description of the issue type. */
  description?: string;

  /**
   * Deprecated. Use `hierarchyLevel` instead.
   *
   * Whether the issue type is `subtype` or `standard`. Defaults to `standard`.
   */
  type?: 'subtask' | 'standard';

  /**
   * The hierarchy level of the issue type. Use:
   *
   *  *  `-1` for Subtask.
   *  *  `0` for Base.
   * Defaults to `0`.
   * @format int32
   */
  hierarchyLevel?: number;
}

export interface IssueTypeUpdateBean {
  /** The unique name for the issue type. The maximum length is 60 characters. */
  name?: string;

  /** The description of the issue type. */
  description?: string;

  /**
   * The ID of an issue type avatar.
   * @format int64
   */
  avatarId?: number;
}

/**
 * List of security schemes.
 */
export interface SecuritySchemes {
  /** List of security schemes. */
  issueSecuritySchemes?: SecurityScheme[];
}

/**
 * Issue security level member.
 */
export interface IssueSecurityLevelMember {
  /**
   * The ID of the issue security level member.
   * @format int64
   */
  id: number;

  /**
   * The ID of the issue security level.
   * @format int64
   */
  issueSecurityLevelId: number;

  /** The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information. */
  holder: PermissionHolder;
}

/**
 * A page of items.
 */
export interface PageBeanIssueSecurityLevelMember {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueSecurityLevelMember[];
}

/**
 * Details of a user, group, field, or project role that holds a permission. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
 */
export interface PermissionHolder {
  /** The type of permission holder. */
  type: string;

  /** The identifier of permission holder. */
  parameter?: string;

  /** Expand options that include additional permission holder details in the response. */
  expand?: string;
}

/**
 * List of issue transitions.
 */
export interface Transitions {
  /** Expand options that include additional transitions details in the response. */
  expand?: string;

  /** List of issue transitions. */
  transitions?: IssueTransition[];
}

/**
 * A list of issues suggested for use in auto-completion.
 */
export interface IssuePickerSuggestions {
  /** A list of issues for an issue type suggested for use in auto-completion. */
  sections?: IssuePickerSuggestionsIssueType[];
}

/**
 * A type of issue suggested for use in auto-completion.
 */
export interface IssuePickerSuggestionsIssueType {
  /** The label of the type of issues suggested for use in auto-completion. */
  label?: string;

  /** If issue suggestions are found, returns a message indicating the number of issues suggestions found and returned. */
  sub?: string;

  /** The ID of the type of issues suggested for use in auto-completion. */
  id?: string;

  /** If no issue suggestions are found, returns a message indicating no suggestions were found, */
  msg?: string;

  /** A list of issues suggested for use in auto-completion. */
  issues?: SuggestedIssue[];
}

/**
 * An issue suggested for use in the issue picker auto-completion.
 */
export interface SuggestedIssue {
  /**
   * The ID of the issue.
   * @format int64
   */
  id?: number;

  /** The key of the issue. */
  key?: string;

  /** The key of the issue in HTML format. */
  keyHtml?: string;

  /** The URL of the issue type's avatar. */
  img?: string;

  /** The phrase containing the query string in HTML format, with the string highlighted with HTML bold tags. */
  summary?: string;

  /** The phrase containing the query string, as plain text. */
  summaryText?: string;
}

/**
 * Details of an operation to perform on a field.
 */
export interface FieldUpdateOperation {
  /**
   * The value to add to the field.
   * @example triaged
   */
  add?: any;

  /**
   * The value to set in the field.
   * @example A new summary
   */
  set?: any;

  /**
   * The value to removed from the field.
   * @example blocker
   */
  remove?: any;

  /**
   * The value to edit in the field.
   * @example {"remainingEstimate":"4d","originalEstimate":"1w 1d"}
   */
  edit?: any;
}

/**
 * Details of an issue update request.
 */
export interface IssueUpdateDetails {
  /** Details of a transition. Required when performing a transition, optional when creating or editing an issue. */
  transition?: IssueTransition;

  /** List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`. */
  fields?: Record<string, any>;

  /** A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`. */
  update?: Record<string, FieldUpdateOperation[]>;

  /** Additional issue history details. */
  historyMetadata?: HistoryMetadata;

  /** Details of issue properties to be add or update. */
  properties?: EntityProperty[];
  [key: string]: any;
}

/**
 * The details of votes on an issue.
 */
export interface Votes {
  /**
   * The URL of these issue vote details.
   * @format uri
   */
  self?: string;

  /**
   * The number of votes on the issue.
   * @format int64
   */
  votes?: number;

  /** Whether the user making this request has voted on the issue. */
  hasVoted?: boolean;

  /** List of the users who have voted on this issue. An empty list is returned when the calling user doesn't have the *View voters and watchers* project permission. */
  voters?: User[];
}

/**
 * The details of watchers on an issue.
 */
export interface Watchers {
  /** The URL of these issue watcher details. */
  self?: string;

  /** Whether the calling user is watching this issue. */
  isWatching?: boolean;

  /**
   * The number of users watching this issue.
   * @format int32
   */
  watchCount?: number;

  /** Details of the users watching this issue. */
  watchers?: UserDetails[];
}

/**
 * Details about a created issue or subtask.
 */
export interface CreatedIssue {
  /** The ID of the created issue or subtask. */
  id?: string;

  /** The key of the created issue or subtask. */
  key?: string;

  /** The URL of the created issue or subtask. */
  self?: string;

  /** The response code and messages related to any requested transition. */
  transition?: NestedResponse;
}

export interface NestedResponse {
  /** @format int32 */
  status?: number;

  /** Error messages from an operation. */
  errorCollection?: ErrorCollection;
}

export interface IssuesUpdateBean {
  issueUpdates?: IssueUpdateDetails[];
  [key: string]: any;
}

export interface BulkOperationErrorResult {
  /** @format int32 */
  status?: number;

  /** Error messages from an operation. */
  elementErrors?: ErrorCollection;

  /** @format int32 */
  failedElementNumber?: number;
}

/**
 * Details about the issues created and the errors for requests that failed.
 */
export interface CreatedIssues {
  /** Details of the issues created. */
  issues?: CreatedIssue[];

  /** Error details for failed issue creation requests. */
  errors?: BulkOperationErrorResult[];
}

/**
 * The wrapper for the issue creation metadata for a list of projects.
 */
export interface IssueCreateMetadata {
  /** Expand options that include additional project details in the response. */
  expand?: string;

  /** List of projects and their issue creation metadata. */
  projects?: ProjectIssueCreateMetadata[];
}

/**
 * Details of the issue creation metadata for an issue type.
 */
export interface IssueTypeIssueCreateMetadata {
  /** The URL of these issue type details. */
  self?: string;

  /** The ID of the issue type. */
  id?: string;

  /** The description of the issue type. */
  description?: string;

  /** The URL of the issue type's avatar. */
  iconUrl?: string;

  /** The name of the issue type. */
  name?: string;

  /** Whether this issue type is used to create subtasks. */
  subtask?: boolean;

  /**
   * The ID of the issue type's avatar.
   * @format int64
   */
  avatarId?: number;

  /**
   * Unique ID for next-gen projects.
   * @format uuid
   */
  entityId?: string;

  /**
   * Hierarchy level of the issue type.
   * @format int32
   */
  hierarchyLevel?: number;

  /** Details of the next-gen projects the issue type is available in. */
  scope?: Scope;

  /** Expand options that include additional issue type metadata details in the response. */
  expand?: string;

  /** List of the fields available when creating an issue for the issue type. */
  fields?: Record<string, FieldMetadata>;
}

/**
 * Details of the issue creation metadata for a project.
 */
export interface ProjectIssueCreateMetadata {
  /** Expand options that include additional project issue create metadata details in the response. */
  expand?: string;

  /** The URL of the project. */
  self?: string;

  /** The ID of the project. */
  id?: string;

  /** The key of the project. */
  key?: string;

  /** The name of the project. */
  name?: string;

  /** List of the project's avatars, returning the avatar size and associated URL. */
  avatarUrls?: AvatarUrlsBean;

  /** List of the issue types supported by the project. */
  issuetypes?: IssueTypeIssueCreateMetadata[];
}

/**
 * The application the linked item is in.
 */
export interface Application {
  /** The name-spaced type of the application, used by registered rendering apps. */
  type?: string;

  /** The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last. */
  name?: string;
  [key: string]: any;
}

/**
 * An icon.
 */
export interface IconBean {
  /** The URL of a 16x16 pixel icon. */
  url16x16?: string;

  /** The title of the icon, for use as a tooltip on the icon. */
  title?: string;

  /** The URL of the tooltip, used only for a status icon. */
  link?: string;
}

/**
 * Details of an issue remote link.
 */
export interface RemoteIssueLink {
  /**
   * The ID of the link.
   * @format int64
   */
  id?: number;

  /**
   * The URL of the link.
   * @format uri
   */
  self?: string;

  /** The global ID of the link, such as the ID of the item on the remote system. */
  globalId?: string;

  /** Details of the remote application the linked item is in. */
  application?: Application;

  /** Description of the relationship between the issue and the linked item. */
  relationship?: string;

  /** Details of the item linked to. */
  object?: RemoteObject;
}

/**
 * The linked item.
 */
export interface RemoteObject {
  /** The URL of the item. */
  url: string;

  /** The title of the item. */
  title: string;

  /** The summary details of the item. */
  summary?: string;

  /** Details of the icon for the item. If no icon is defined, the default link icon is used in Jira. */
  icon?: Icon;

  /** The status of the item. */
  status?: Status;
  [key: string]: any;
}

/**
 * The status of the item.
 */
export interface Status {
  /** Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font. */
  resolved?: boolean;

  /** Details of the icon representing the status. If not provided, no status icon displays in Jira. */
  icon?: Icon;
  [key: string]: any;
}

/**
* An icon. If no icon is defined:

 *  for a status icon, no status icon displays in Jira.
 *  for the remote object icon, the default link icon displays in Jira.
*/
export interface Icon {
  /** The URL of an icon that displays at 16x16 pixel in Jira. */
  url16x16?: string;

  /**
   * The title of the icon. This is used as follows:
   *
   *  *  For a status icon it is used as a tooltip on the icon. If not set, the status icon doesn't display a tooltip in Jira.
   *  *  For the remote object icon it is used in conjunction with the application name to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank itemsare excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link".
   */
  title?: string;

  /** The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable. */
  link?: string;
  [key: string]: any;
}

/**
 * Details of a remote issue link.
 */
export interface RemoteIssueLinkRequest {
  /**
   * An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.
   *
   * Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.
   * The maximum length is 255 characters.
   */
  globalId?: string;

  /** Details of the remote application the linked item is in. For example, trello. */
  application?: Application;

  /** Description of the relationship between the issue and the linked item. If not set, the relationship description "links to" is used in Jira. */
  relationship?: string;

  /** Details of the item linked to. */
  object: RemoteObject;
  [key: string]: any;
}

/**
 * Details of the identifiers for a created or updated remote issue link.
 */
export interface RemoteIssueLinkIdentifies {
  /**
   * The ID of the remote issue link, such as the ID of the item on the remote system.
   * @format int64
   */
  id?: number;

  /** The URL of the remote issue link. */
  self?: string;
}

/**
 * Details about a notification.
 */
export interface Notification {
  /** The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary. */
  subject?: string;

  /** The plain text body of the email notification for the issue. */
  textBody?: string;

  /** The HTML body of the email notification for the issue. */
  htmlBody?: string;

  /** The recipients of the email notification for the issue. */
  to?: NotificationRecipients;

  /** Restricts the notifications to users with the specified permissions. */
  restrict?: NotificationRecipientsRestrictions;
  [key: string]: any;
}

/**
 * Details of the users and groups to receive the notification.
 */
export interface NotificationRecipients {
  /** Whether the notification should be sent to the issue's reporter. */
  reporter?: boolean;

  /** Whether the notification should be sent to the issue's assignees. */
  assignee?: boolean;

  /** Whether the notification should be sent to the issue's watchers. */
  watchers?: boolean;

  /** Whether the notification should be sent to the issue's voters. */
  voters?: boolean;

  /** List of users to receive the notification. */
  users?: UserDetails[];

  /** List of groups to receive the notification. */
  groups?: GroupName[];
  [key: string]: any;
}

/**
 * Details of the group membership or permissions needed to receive the notification.
 */
export interface NotificationRecipientsRestrictions {
  /** List of group memberships required to receive the notification. */
  groups?: GroupName[];

  /** List of permissions required to receive the notification. */
  permissions?: RestrictedPermission[];
}

/**
 * Details of the permission.
 */
export interface RestrictedPermission {
  /** The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-2-permissions-get) to get the list of permissions. */
  id?: string;

  /** The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-2-permissions-get) to get the list of permissions. */
  key?: string;
  [key: string]: any;
}

/**
 * A list of issue link type beans.
 */
export interface IssueLinkTypes {
  /** The issue link type bean. */
  issueLinkTypes?: IssueLinkType[];
}

/**
 * A page of comments.
 */
export interface PageOfComments {
  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** The list of comments. */
  comments?: Comment[];
  [key: string]: any;
}

export interface PaginatedResponseComment {
  /** @format int64 */
  total?: number;

  /** @format int64 */
  startAt?: number;

  /** @format int32 */
  maxResults?: number;
  results?: Comment[];
}

export interface IssueCommentListRequestBean {
  /** The list of comment IDs. A maximum of 1000 IDs can be specified. */
  ids: number[];
}

/**
 * A page of items.
 */
export interface PageBeanComment {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Comment[];
}

/**
 * A page of items.
 */
export interface PageBeanChangelog {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Changelog[];
}

/**
 * A list of changelog IDs.
 */
export interface IssueChangelogIds {
  /** The list of changelog IDs. */
  changelogIds: number[];
}

/**
 * Details about an attachment.
 */
export interface Attachment {
  /** The URL of the attachment details response. */
  self?: string;

  /** The ID of the attachment. */
  id?: string;

  /** The file name of the attachment. */
  filename?: string;

  /** Details of the user who added the attachment. */
  author?: UserDetails;

  /**
   * The datetime the attachment was created.
   * @format date-time
   */
  created?: string;

  /**
   * The size of the attachment.
   * @format int64
   */
  size?: number;

  /** The MIME type of the attachment. */
  mimeType?: string;

  /** The content of the attachment. */
  content?: string;

  /** The URL of a thumbnail representing the attachment. */
  thumbnail?: string;
  [key: string]: any;
}

export interface Group {
  /** The name of group. */
  name?: string;

  /**
   * The URL for these group details.
   * @format uri
   */
  self?: string;

  /** A paginated list of the users that are members of the group. A maximum of 50 users is returned in the list, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 50 users, use`?expand=users[51:100]`. */
  users?: PagedListUserDetailsApplicationUser;

  /** Expand options that include additional group details in the response. */
  expand?: string;
}

/**
 * A paged list. To access additional details append `[start-index:end-index]` to the expand request. For example, `?expand=sharedUsers[10:40]` returns a list starting at item 10 and finishing at item 40.
 */
export interface PagedListUserDetailsApplicationUser {
  /**
   * The number of items on the page.
   * @format int32
   */
  size?: number;

  /** The list of items. */
  items?: UserDetails[];

  /**
   * The maximum number of results that could be on the page.
   * @format int32
   */
  'max-results'?: number;

  /**
   * The index of the first item returned on the page.
   * @format int32
   */
  'start-index'?: number;

  /**
   * The index of the last item returned on the page.
   * @format int32
   */
  'end-index'?: number;
}

/**
 * A page of items.
 */
export interface PageBeanUserDetails {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: UserDetails[];
}

export interface AddGroupBean {
  /** The name of the group. */
  name: string;
  [key: string]: any;
}

export interface UpdateUserToGroupBean {
  /** This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;

  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  [key: string]: any;
}

/**
 * A group found in a search.
 */
export interface FoundGroup {
  /** The name of the group. */
  name?: string;

  /** The group name with the matched query string highlighted with the HTML bold tag. */
  html?: string;
  labels?: GroupLabel[];

  /** The ID of the group, if available, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. */
  groupId?: string;
}

/**
 * The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.
 */
export interface FoundGroups {
  /** Header text indicating the number of groups in the response and the total number of groups found in the search. */
  header?: string;

  /**
   * The total number of groups found in the search.
   * @format int32
   */
  total?: number;
  groups?: FoundGroup[];
}

/**
 * A group label.
 */
export interface GroupLabel {
  /** The group label name. */
  text?: string;

  /** The title of the group label. */
  title?: string;

  /** The type of the group label. */
  type?: 'ADMIN' | 'SINGLE' | 'MULTIPLE';
}

/**
 * List of users and groups found in a search.
 */
export interface FoundUsersAndGroups {
  /** The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users. */
  users?: FoundUsers;

  /** The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups. */
  groups?: FoundGroups;
}

/**
 * Details about a field.
 */
export interface FieldDetails {
  /** The ID of the field. */
  id?: string;

  /** The key of the field. */
  key?: string;

  /** The name of the field. */
  name?: string;

  /** Whether the field is a custom field. */
  custom?: boolean;

  /** Whether the content of the field can be used to order lists. */
  orderable?: boolean;

  /** Whether the field can be used as a column on the issue navigator. */
  navigable?: boolean;

  /** Whether the content of the field can be searched. */
  searchable?: boolean;

  /** The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ). */
  clauseNames?: string[];

  /** The scope of the field. */
  scope?: Scope;

  /** The data schema for the field. */
  schema?: JsonTypeBean;
}

export interface CustomFieldDefinitionJsonBean {
  /** The name of the custom field, which is displayed in Jira. This is not the unique identifier. */
  name: string;

  /** The description of the custom field, which is displayed in Jira. */
  description?: string;

  /**
   * The type of the custom field. These built-in custom field types are available:
   *
   *  *  `cascadingselect`: Enables values to be selected from two levels of select lists (value: `com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect`)
   *  *  `datepicker`: Stores a date using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:datepicker`)
   *  *  `datetime`: Stores a date with a time component (value: `com.atlassian.jira.plugin.system.customfieldtypes:datetime`)
   *  *  `float`: Stores and validates a numeric (floating point) input (value: `com.atlassian.jira.plugin.system.customfieldtypes:float`)
   *  *  `grouppicker`: Stores a user group using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:grouppicker`)
   *  *  `importid`: A read-only field that stores the ID the issue had in the system it was imported from (value: `com.atlassian.jira.plugin.system.customfieldtypes:importid`)
   *  *  `labels`: Stores labels (value: `com.atlassian.jira.plugin.system.customfieldtypes:labels`)
   *  *  `multicheckboxes`: Stores multiple values using checkboxes (value: ``)
   *  *  `multigrouppicker`: Stores multiple user groups using a picker control (value: ``)
   *  *  `multiselect`: Stores multiple values using a select list (value: `com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes`)
   *  *  `multiuserpicker`: Stores multiple users using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker`)
   *  *  `multiversion`: Stores multiple versions from the versions available in a project using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multiversion`)
   *  *  `project`: Stores a project from a list of projects that the user is permitted to view (value: `com.atlassian.jira.plugin.system.customfieldtypes:project`)
   *  *  `radiobuttons`: Stores a value using radio buttons (value: `com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons`)
   *  *  `readonlyfield`: Stores a read-only text value, which can only be populated via the API (value: `com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield`)
   *  *  `select`: Stores a value from a configurable list of options (value: `com.atlassian.jira.plugin.system.customfieldtypes:select`)
   *  *  `textarea`: Stores a long text string using a multiline text area (value: `com.atlassian.jira.plugin.system.customfieldtypes:textarea`)
   *  *  `textfield`: Stores a text string using a single-line text box (value: `com.atlassian.jira.plugin.system.customfieldtypes:textfield`)
   *  *  `url`: Stores a URL (value: `com.atlassian.jira.plugin.system.customfieldtypes:url`)
   *  *  `userpicker`: Stores a user using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:userpicker`)
   *  *  `version`: Stores a version using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:version`)
   * To create a field based on a [Forge custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-), use the ID of the Forge custom field type as the value. For example, `ari:cloud:ecosystem::extension/e62f20a2-4b61-4dbe-bfb9-9a88b5e3ac84/548c5df1-24aa-4f7c-bbbb-3038d947cb05/static/my-cf-type-key`.
   */
  type: string;

  /**
   * The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.
   * The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):
   *
   *  *  `cascadingselect`: `cascadingselectsearcher`
   *  *  `datepicker`: `daterange`
   *  *  `datetime`: `datetimerange`
   *  *  `float`: `exactnumber` or `numberrange`
   *  *  `grouppicker`: `grouppickersearcher`
   *  *  `importid`: `exactnumber` or `numberrange`
   *  *  `labels`: `labelsearcher`
   *  *  `multicheckboxes`: `multiselectsearcher`
   *  *  `multigrouppicker`: `multiselectsearcher`
   *  *  `multiselect`: `multiselectsearcher`
   *  *  `multiuserpicker`: `userpickergroupsearcher`
   *  *  `multiversion`: `versionsearcher`
   *  *  `project`: `projectsearcher`
   *  *  `radiobuttons`: `multiselectsearcher`
   *  *  `readonlyfield`: `textsearcher`
   *  *  `select`: `multiselectsearcher`
   *  *  `textarea`: `textsearcher`
   *  *  `textfield`: `textsearcher`
   *  *  `url`: `exacttextsearcher`
   *  *  `userpicker`: `userpickergroupsearcher`
   *  *  `version`: `versionsearcher`
   * If no searcher is provided, the field isn't searchable. However, [Forge custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-) have a searcher set automatically, so are always searchable.
   */
  searcherKey?:
    | 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:daterange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher';
}

/**
 * Details of a custom field.
 */
export interface UpdateCustomFieldDetails {
  /** The name of the custom field. It doesn't have to be unique. The maximum length is 255 characters. */
  name?: string;

  /** The description of the custom field. The maximum length is 40000 characters. */
  description?: string;

  /**
   * The searcher that defines the way the field is searched in Jira. It can be set to `null`, otherwise you must specify the valid searcher for the field type, as listed below (abbreviated values shown):
   *
   *  *  `cascadingselect`: `cascadingselectsearcher`
   *  *  `datepicker`: `daterange`
   *  *  `datetime`: `datetimerange`
   *  *  `float`: `exactnumber` or `numberrange`
   *  *  `grouppicker`: `grouppickersearcher`
   *  *  `importid`: `exactnumber` or `numberrange`
   *  *  `labels`: `labelsearcher`
   *  *  `multicheckboxes`: `multiselectsearcher`
   *  *  `multigrouppicker`: `multiselectsearcher`
   *  *  `multiselect`: `multiselectsearcher`
   *  *  `multiuserpicker`: `userpickergroupsearcher`
   *  *  `multiversion`: `versionsearcher`
   *  *  `project`: `projectsearcher`
   *  *  `radiobuttons`: `multiselectsearcher`
   *  *  `readonlyfield`: `textsearcher`
   *  *  `select`: `multiselectsearcher`
   *  *  `textarea`: `textsearcher`
   *  *  `textfield`: `textsearcher`
   *  *  `url`: `exacttextsearcher`
   *  *  `userpicker`: `userpickergroupsearcher`
   *  *  `version`: `versionsearcher`
   */
  searcherKey?:
    | 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:daterange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher'
    | 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher';
}

/**
 * A page of items.
 */
export interface PageBeanScreenWithTab {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: ScreenWithTab[];
}

/**
 * A screen with tab details.
 */
export interface ScreenWithTab {
  /**
   * The ID of the screen.
   * @format int64
   */
  id?: number;

  /** The name of the screen. */
  name?: string;

  /** The description of the screen. */
  description?: string;

  /** The scope of the screen. */
  scope?: Scope;

  /** The tab for the screen. */
  tab?: ScreenableTab;
}

/**
 * A context.
 */
export interface Context {
  /**
   * The ID of the context.
   * @format int64
   */
  id?: number;

  /** The name of the context. */
  name?: string;

  /** The scope of the context. */
  scope?: Scope;
}

/**
 * A page of items.
 */
export interface PageBeanContext {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Context[];
}

/**
 * Details of the custom field options for a context.
 */
export interface CustomFieldContextOption {
  /** The ID of the custom field option. */
  id: string;

  /** The value of the custom field option. */
  value: string;

  /** For cascading options, the ID of the custom field option containing the cascading option. */
  optionId?: string;

  /** Whether the option is disabled. */
  disabled: boolean;
}

/**
 * A page of items.
 */
export interface PageBeanCustomFieldContextOption {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: CustomFieldContextOption[];
}

/**
 * Details of the options to create for a custom field.
 */
export interface BulkCustomFieldOptionCreateRequest {
  /** Details of options to create. */
  options?: CustomFieldOptionCreate[];
}

/**
 * Details of a custom field option to create.
 */
export interface CustomFieldOptionCreate {
  /** The value of the custom field option. */
  value: string;

  /** For cascading options, the ID of the custom field object containing the cascading option. */
  optionId?: string;

  /** Whether the option is disabled. */
  disabled?: boolean;
}

/**
 * A list of custom field options for a context.
 */
export interface CustomFieldCreatedContextOptionsList {
  /** The created custom field options. */
  options?: CustomFieldContextOption[];
}

/**
 * An ordered list of custom field option IDs and information on where to move them.
 */
export interface OrderOfCustomFieldOptions {
  /** A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both. */
  customFieldOptionIds: string[];

  /** The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided. */
  after?: string;

  /** The position the custom field options should be moved to. Required if `after` isn't provided. */
  position?: 'First' | 'Last';
}

/**
 * Details of the options to update for a custom field.
 */
export interface BulkCustomFieldOptionUpdateRequest {
  /** Details of the options to update. */
  options?: CustomFieldOptionUpdate[];
}

/**
 * Details of a custom field option for a context.
 */
export interface CustomFieldOptionUpdate {
  /** The ID of the custom field option. */
  id: string;

  /** The value of the custom field option. */
  value?: string;

  /** Whether the option is disabled. */
  disabled?: boolean;
}

/**
 * A list of custom field options for a context.
 */
export interface CustomFieldUpdatedContextOptionsList {
  /** The updated custom field options. */
  options?: CustomFieldOptionUpdate[];
}

/**
 * Count of issues assigned to a component.
 */
export interface ComponentIssuesCount {
  /**
   * The URL for this count of issues for a component.
   * @format uri
   */
  self?: string;

  /**
   * The count of issues assigned to a component.
   * @format int64
   */
  issueCount?: number;
}

/**
 * List of system avatars.
 */
export interface SystemAvatars {
  /** A list of avatar details. */
  system?: Avatar[];
}

/**
 * Details of a changed worklog.
 */
export interface ChangedWorklog {
  /**
   * The ID of the worklog.
   * @format int64
   */
  worklogId?: number;

  /**
   * The datetime of the change.
   * @format int64
   */
  updatedTime?: number;

  /** Details of properties associated with the change. */
  properties?: EntityProperty[];
}

/**
 * List of changed worklogs.
 */
export interface ChangedWorklogs {
  /** Changed worklog list. */
  values?: ChangedWorklog[];

  /**
   * The datetime of the first worklog item in the list.
   * @format int64
   */
  since?: number;

  /**
   * The datetime of the last worklog item in the list.
   * @format int64
   */
  until?: number;

  /**
   * The URL of this changed worklogs list.
   * @format uri
   */
  self?: string;

  /**
   * The URL of the next list of changed worklogs.
   * @format uri
   */
  nextPage?: string;
  lastPage?: boolean;
}

export interface WorklogIdsRequestBean {
  /** A list of worklog IDs. */
  ids: number[];
}

/**
 * The screen scheme for an issue type.
 */
export interface IssueTypeScreenSchemeItem {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;

  /** The ID of the issue type or *default*. Only issue types used in classic projects are accepted. When creating an issue screen scheme, an entry for *default* must be provided and defines the mapping for all issue types without a screen scheme. Otherwise, a *default* entry can't be provided. */
  issueTypeId: string;

  /** The ID of the screen scheme. */
  screenSchemeId: string;
}

/**
 * A page of items.
 */
export interface PageBeanIssueTypeScreenSchemeItem {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueTypeScreenSchemeItem[];
}

/**
 * Details of an issue type screen scheme.
 */
export interface IssueTypeScreenScheme {
  /** The ID of the issue type screen scheme. */
  id: string;

  /** The name of the issue type screen scheme. */
  name: string;

  /** The description of the issue type screen scheme. */
  description?: string;
}

/**
 * Issue type screen scheme with a list of the projects that use it.
 */
export interface IssueTypeScreenSchemesProjects {
  /** Details of an issue type screen scheme. */
  issueTypeScreenScheme: IssueTypeScreenScheme;

  /** The IDs of the projects using the issue type screen scheme. */
  projectIds: string[];
}

/**
 * A page of items.
 */
export interface PageBeanIssueTypeScreenSchemesProjects {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueTypeScreenSchemesProjects[];
}

/**
 * A page of items.
 */
export interface PageBeanIssueTypeScreenScheme {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueTypeScreenScheme[];
}

/**
 * A page of items.
 */
export interface PageBeanProjectDetails {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: ProjectDetails[];
}

/**
 * Associated issue type screen scheme and project.
 */
export interface IssueTypeScreenSchemeProjectAssociation {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId?: string;

  /** The ID of the project. */
  projectId?: string;
}

/**
 * The details of an issue type screen scheme.
 */
export interface IssueTypeScreenSchemeDetails {
  /** The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters. */
  name: string;

  /** The description of the issue type screen scheme. The maximum length is 255 characters. */
  description?: string;

  /** The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme. */
  issueTypeMappings: IssueTypeScreenSchemeMapping[];
}

/**
 * The IDs of the screen schemes for the issue type IDs.
 */
export interface IssueTypeScreenSchemeMapping {
  /** The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme. */
  issueTypeId: string;

  /** The ID of the screen scheme. Only screen schemes used in classic projects are accepted. */
  screenSchemeId: string;
}

/**
 * The ID of an issue type screen scheme.
 */
export interface IssueTypeScreenSchemeId {
  /** The ID of the issue type screen scheme. */
  id: string;
}

/**
 * Details of an issue type screen scheme.
 */
export interface IssueTypeScreenSchemeUpdateDetails {
  /** The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters. */
  name?: string;

  /** The description of the issue type screen scheme. The maximum length is 255 characters. */
  description?: string;
}

/**
 * A list of issue type screen scheme mappings.
 */
export interface IssueTypeScreenSchemeMappingDetails {
  /** The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created. */
  issueTypeMappings: IssueTypeScreenSchemeMapping[];
}

/**
 * The ID of a screen scheme.
 */
export interface UpdateDefaultScreenScheme {
  /** The ID of the screen scheme. */
  screenSchemeId: string;
}

/**
 * The list of issue type IDs.
 */
export interface IssueTypeIds {
  /** The list of issue type IDs. */
  issueTypeIds: string[];
}

export interface GlobalScopeBean {
  /** Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default. */
  attributes?: ('notSelectable' | 'defaultValue')[];
}

/**
 * Details of the options for a select list issue field.
 */
export interface IssueFieldOption {
  /**
   * The unique identifier for the option. This is only unique within the select field's set of options.
   * @format int64
   */
  id: number;

  /** The option's name, which is displayed in Jira. */
  value: string;

  /** The properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module. */
  properties?: Record<string, any>;

  /** Details of the projects the option is available in. */
  config?: IssueFieldOptionConfiguration;
}

/**
 * Details of the projects the option is available in.
 */
export interface IssueFieldOptionConfiguration {
  /** Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects. */
  scope?: IssueFieldOptionScopeBean;

  /** DEPRECATED */
  attributes?: ('notSelectable' | 'defaultValue')[];
}

export interface IssueFieldOptionScopeBean {
  /** DEPRECATED */
  projects?: number[];

  /** Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context. */
  projects2?: ProjectScopeBean[];

  /** Defines the behavior of the option within the global context. If this property is set, even if set to an empty object, then the option is available in all projects. */
  global?: GlobalScopeBean;
}

/**
 * A page of items.
 */
export interface PageBeanIssueFieldOption {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueFieldOption[];
}

export interface ProjectScopeBean {
  /**
   * The ID of the project that the option's behavior applies to.
   * @format int64
   */
  id?: number;

  /** Defines the behavior of the option in the project.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default. */
  attributes?: ('notSelectable' | 'defaultValue')[];
}

export interface IssueFieldOptionCreateBean {
  /** The option's name, which is displayed in Jira. */
  value: string;

  /** The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module. */
  properties?: Record<string, any>;

  /** Details of the projects the option is available in. */
  config?: IssueFieldOptionConfiguration;
  [key: string]: any;
}

export interface RemoveOptionFromIssuesResult {
  /** The IDs of the modified issues. */
  modifiedIssues?: number[];

  /** The IDs of the unchanged issues, those issues where errors prevent modification. */
  unmodifiedIssues?: number[];

  /** A collection of errors related to unchanged issues. The collection size is limited, which means not all errors may be returned. */
  errors?: SimpleErrorCollection;
}

export interface SimpleErrorCollection {
  /** The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters." */
  errors?: Record<string, string>;

  /** The list of error messages produced by this operation. For example, "input parameter 'key' must be provided" */
  errorMessages?: string[];

  /** @format int32 */
  httpStatusCode?: number;
}

/**
 * Details about a task.
 */
export interface TaskProgressBeanRemoveOptionFromIssuesResult {
  /**
   * The URL of the task.
   * @format uri
   */
  self: string;

  /** The ID of the task. */
  id: string;

  /** The description of the task. */
  description?: string;

  /** The status of the task. */
  status: 'ENQUEUED' | 'RUNNING' | 'COMPLETE' | 'FAILED' | 'CANCEL_REQUESTED' | 'CANCELLED' | 'DEAD';

  /** Information about the progress of the task. */
  message?: string;

  /** The result of the task execution. */
  result?: RemoveOptionFromIssuesResult;

  /**
   * The ID of the user who submitted the task.
   * @format int64
   */
  submittedBy: number;

  /**
   * The progress of the task, as a percentage complete.
   * @format int64
   */
  progress: number;

  /**
   * The execution time of the task, in milliseconds.
   * @format int64
   */
  elapsedRuntime: number;

  /**
   * A timestamp recording when the task was submitted.
   * @format int64
   */
  submitted: number;

  /**
   * A timestamp recording when the task was started.
   * @format int64
   */
  started?: number;

  /**
   * A timestamp recording when the task was finished.
   * @format int64
   */
  finished?: number;

  /**
   * A timestamp recording when the task progress was last updated.
   * @format int64
   */
  lastUpdate: number;
}

/**
 * Details of a field.
 */
export interface Field {
  /** The ID of the field. */
  id: string;

  /** The name of the field. */
  name: string;

  /** The schema of a field. */
  schema: JsonTypeBean;

  /** The description of the field. */
  description?: string;

  /** The key of the field. */
  key?: string;

  /** Whether the field is locked. */
  isLocked?: boolean;

  /** Whether the field is shown on screen or not. */
  isUnscreenable?: boolean;

  /** The searcher key of the field. Returned for custom fields. */
  searcherKey?: string;

  /**
   * Number of screens where the field is used.
   * @format int64
   */
  screensCount?: number;

  /**
   * Number of contexts where the field is used.
   * @format int64
   */
  contextsCount?: number;

  /** Information about the most recent use of a field. */
  lastUsed?: FieldLastUsed;
}

/**
 * Information about the most recent use of a field.
 */
export interface FieldLastUsed {
  /**
   * Last used value type:
   *
   *  *  *TRACKED*: field is tracked and a last used date is available.
   *  *  *NOT\_TRACKED*: field is not tracked, last used date is not available.
   *  *  *NO\_INFORMATION*: field is tracked, but no last used date is available.
   */
  type?: 'TRACKED' | 'NOT_TRACKED' | 'NO_INFORMATION';

  /**
   * The date when the value of the field last changed.
   * @format date-time
   */
  value?: string;
}

/**
 * A page of items.
 */
export interface PageBeanField {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Field[];
}

/**
 * Details of a field configuration scheme.
 */
export interface FieldConfigurationScheme {
  /** The ID of the field configuration scheme. */
  id: string;

  /** The name of the field configuration scheme. */
  name: string;

  /** The description of the field configuration scheme. */
  description?: string;
}

/**
 * A page of items.
 */
export interface PageBeanFieldConfigurationScheme {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: FieldConfigurationScheme[];
}

/**
 * The field configuration for an issue type.
 */
export interface FieldConfigurationIssueTypeItem {
  /** The ID of the field configuration scheme. */
  fieldConfigurationSchemeId: string;

  /** The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. */
  issueTypeId: string;

  /** The ID of the field configuration. */
  fieldConfigurationId: string;
}

/**
 * A page of items.
 */
export interface PageBeanFieldConfigurationIssueTypeItem {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: FieldConfigurationIssueTypeItem[];
}

/**
 * Details of a field configuration to issue type mappings.
 */
export interface AssociateFieldConfigurationsWithIssueTypesRequest {
  /** Field configuration to issue type mappings. */
  mappings: FieldConfigurationToIssueTypeMapping[];
}

/**
 * The field configuration to issue type mapping.
 */
export interface FieldConfigurationToIssueTypeMapping {
  /** The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. An issue type can be included only once in a request. */
  issueTypeId: string;

  /** The ID of the field configuration. */
  fieldConfigurationId: string;
}

/**
 * Project list with assigned field configuration schema.
 */
export interface FieldConfigurationSchemeProjects {
  /** Details of a field configuration scheme. */
  fieldConfigurationScheme?: FieldConfigurationScheme;

  /** The IDs of projects using the field configuration scheme. */
  projectIds: string[];
}

/**
 * A page of items.
 */
export interface PageBeanFieldConfigurationSchemeProjects {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: FieldConfigurationSchemeProjects[];
}

/**
 * Associated field configuration scheme and project.
 */
export interface FieldConfigurationSchemeProjectAssociation {
  /** The ID of the field configuration scheme. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme. */
  fieldConfigurationSchemeId?: string;

  /** The ID of the project. */
  projectId: string;
}

/**
 * The details of the field configuration scheme.
 */
export interface UpdateFieldConfigurationSchemeDetails {
  /** The name of the field configuration scheme. The name must be unique. */
  name: string;

  /** The description of the field configuration scheme. */
  description?: string;
}

/**
 * Details of a field configuration.
 */
export interface FieldConfigurationDetails {
  /** The name of the field configuration. Must be unique. */
  name: string;

  /** The description of the field configuration. */
  description?: string;
}

/**
 * A page of items.
 */
export interface PageBeanFieldConfigurationDetails {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: FieldConfigurationDetails[];
}

/**
 * A field within a field configuration.
 */
export interface FieldConfigurationItem {
  /** The ID of the field within the field configuration. */
  id: string;

  /** The description of the field within the field configuration. */
  description?: string;

  /** Whether the field is hidden in the field configuration. */
  isHidden?: boolean;

  /** Whether the field is required in the field configuration. */
  isRequired?: boolean;

  /** The renderer type for the field within the field configuration. */
  renderer?: string;
}

/**
 * A page of items.
 */
export interface PageBeanFieldConfigurationItem {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: FieldConfigurationItem[];
}

/**
 * Details of a field configuration.
 */
export interface FieldConfiguration {
  /**
   * The ID of the field configuration.
   * @format int64
   */
  id: number;

  /** The name of the field configuration. */
  name: string;

  /** The description of the field configuration. */
  description: string;

  /** Whether the field configuration is the default. */
  isDefault?: boolean;
}

/**
 * Details of field configuration items.
 */
export interface FieldConfigurationItemsDetails {
  /** Details of fields in a field configuration. */
  fieldConfigurationItems: FieldConfigurationItem[];
}

/**
 * Details of a custom option for a field.
 */
export interface CustomFieldOption {
  /**
   * The URL of these custom field option details.
   * @format uri
   */
  self?: string;

  /** The value of the custom field option. */
  value?: string;
}

/**
 * Details of a context to project association.
 */
export interface CustomFieldContextProjectMapping {
  /** The ID of the context. */
  contextId: string;

  /** The ID of the project. */
  projectId?: string;

  /** Whether context is global. */
  isGlobalContext?: boolean;
}

/**
 * A page of items.
 */
export interface PageBeanCustomFieldContextProjectMapping {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: CustomFieldContextProjectMapping[];
}

/**
 * The details of a custom field context.
 */
export interface CustomFieldContext {
  /** The ID of the context. */
  id: string;

  /** The name of the context. */
  name: string;

  /** The description of the context. */
  description: string;

  /** Whether the context is global. */
  isGlobalContext: boolean;

  /** Whether the context apply to all issue types. */
  isAnyIssueType: boolean;
}

/**
 * A page of items.
 */
export interface PageBeanCustomFieldContext {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: CustomFieldContext[];
}

export type CustomFieldContextDefaultValue =
  | CustomFieldContextDefaultValueCascadingOption
  | CustomFieldContextDefaultValueMultipleOption
  | CustomFieldContextDefaultValueSingleOption
  | CustomFieldContextSingleUserPickerDefaults
  | CustomFieldContextDefaultValueMultiUserPicker
  | CustomFieldContextDefaultValueSingleGroupPicker
  | CustomFieldContextDefaultValueMultipleGroupPicker
  | CustomFieldContextDefaultValueDate
  | CustomFieldContextDefaultValueDateTime
  | CustomFieldContextDefaultValueURL
  | CustomFieldContextDefaultValueProject
  | CustomFieldContextDefaultValueFloat
  | CustomFieldContextDefaultValueLabels
  | CustomFieldContextDefaultValueTextField
  | CustomFieldContextDefaultValueTextArea
  | CustomFieldContextDefaultValueReadOnly
  | CustomFieldContextDefaultValueSingleVersionPicker
  | CustomFieldContextDefaultValueMultipleVersionPicker;

/**
 * The default value for a cascading select custom field.
 */
export interface CustomFieldContextDefaultValueCascadingOption {
  /** The ID of the context. */
  contextId: string;

  /** The ID of the default option. */
  optionId: string;

  /** The ID of the default cascading option. */
  cascadingOptionId?: string;
  type: string;
}

/**
 * The default value for a Date custom field.
 */
export interface CustomFieldContextDefaultValueDate {
  /** The default date in ISO format. Ignored if `useCurrent` is true. */
  date?: string;

  /** Whether to use the current date. */
  useCurrent?: boolean;
  type: string;
}

/**
 * The default value for a date time custom field.
 */
export interface CustomFieldContextDefaultValueDateTime {
  /** The default date-time in ISO format. Ignored if `useCurrent` is true. */
  dateTime?: string;

  /** Whether to use the current date. */
  useCurrent?: boolean;
  type: string;
}

/**
 * Default value for a float (number) custom field.
 */
export interface CustomFieldContextDefaultValueFloat {
  /**
   * The default floating-point number.
   * @format double
   */
  number: number;
  type: string;
}

/**
 * Default value for a labels custom field.
 */
export interface CustomFieldContextDefaultValueLabels {
  /** The default labels value. */
  labels: string[];
  type: string;
}

/**
 * The default value for a User Picker (multiple) custom field.
 */
export interface CustomFieldContextDefaultValueMultiUserPicker {
  /** The ID of the context. */
  contextId: string;

  /** The IDs of the default users. */
  accountIds: string[];
  type: string;
}

/**
 * The default value for a multiple group picker custom field.
 */
export interface CustomFieldContextDefaultValueMultipleGroupPicker {
  /** The ID of the context. */
  contextId: string;

  /** The IDs of the default groups. */
  groupIds: string[];
  type: string;
}

/**
 * The default value for a multi-select custom field.
 */
export interface CustomFieldContextDefaultValueMultipleOption {
  /** The ID of the context. */
  contextId: string;

  /** The list of IDs of the default options. */
  optionIds: string[];
  type: string;
}

/**
 * The default value for a multiple version picker custom field.
 */
export interface CustomFieldContextDefaultValueMultipleVersionPicker {
  /** The IDs of the default versions. */
  versionIds: string[];

  /** The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are `"releasedFirst"` and `"unreleasedFirst"`. */
  versionOrder?: string;
  type: string;
}

/**
 * The default value for a project custom field.
 */
export interface CustomFieldContextDefaultValueProject {
  /** The ID of the context. */
  contextId: string;

  /** The ID of the default project. */
  projectId: string;
  type: string;
}

/**
 * The default text for a read only custom field.
 */
export interface CustomFieldContextDefaultValueReadOnly {
  /** The default text. The maximum length is 255 characters. */
  text?: string;
  type: string;
}

/**
 * The default value for a group picker custom field.
 */
export interface CustomFieldContextDefaultValueSingleGroupPicker {
  /** The ID of the context. */
  contextId: string;

  /** The ID of the the default group. */
  groupId: string;
  type: string;
}

/**
 * The default value for a single select custom field.
 */
export interface CustomFieldContextDefaultValueSingleOption {
  /** The ID of the context. */
  contextId: string;

  /** The ID of the default option. */
  optionId: string;
  type: string;
}

/**
 * The default value for a version picker custom field.
 */
export interface CustomFieldContextDefaultValueSingleVersionPicker {
  /** The ID of the default version. */
  versionId: string;

  /** The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are `"releasedFirst"` and `"unreleasedFirst"`. */
  versionOrder?: string;
  type: string;
}

/**
 * The default text for a text area custom field.
 */
export interface CustomFieldContextDefaultValueTextArea {
  /** The default text. The maximum length is 32767 characters. */
  text?: string;
  type: string;
}

/**
 * The default text for a text custom field.
 */
export interface CustomFieldContextDefaultValueTextField {
  /** The default text. The maximum length is 254 characters. */
  text?: string;
  type: string;
}

/**
 * The default value for a URL custom field.
 */
export interface CustomFieldContextDefaultValueURL {
  /** The ID of the context. */
  contextId: string;

  /** The default URL. */
  url: string;
  type: string;
}

/**
 * Defaults for a User Picker (single) custom field.
 */
export interface CustomFieldContextSingleUserPickerDefaults {
  /** The ID of the context. */
  contextId: string;

  /** The ID of the default user. */
  accountId: string;

  /** Filter for a User Picker (single) custom field. */
  userFilter: UserFilter;
  type: string;
}

/**
 * A page of items.
 */
export interface PageBeanCustomFieldContextDefaultValue {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: CustomFieldContextDefaultValue[];
}

/**
 * Filter for a User Picker (single) custom field.
 */
export interface UserFilter {
  /** Whether the filter is enabled. */
  enabled: boolean;

  /** User groups autocomplete suggestion users must belong to. If not provided, the default values are used. A maximum of 10 groups can be provided. */
  groups?: string[];

  /** Roles that autocomplete suggestion users must belong to. If not provided, the default values are used. A maximum of 10 roles can be provided. */
  roleIds?: number[];
}

/**
 * The details of a created custom field context.
 */
export interface CreateCustomFieldContext {
  /** The ID of the context. */
  id?: string;

  /** The name of the context. */
  name: string;

  /** The description of the context. */
  description?: string;

  /** The list of project IDs associated with the context. If the list is empty, the context is global. */
  projectIds?: string[];

  /** The list of issue types IDs for the context. If the list is empty, the context refers to all issue types. */
  issueTypeIds?: string[];
}

/**
 * A list of project IDs.
 */
export interface ProjectIds {
  /** The IDs of projects. */
  projectIds: string[];
}

/**
 * Details of a custom field context.
 */
export interface CustomFieldContextUpdateDetails {
  /** The name of the custom field context. The name must be unique. The maximum length is 255 characters. */
  name?: string;

  /** The description of the custom field context. The maximum length is 255 characters. */
  description?: string;
}

/**
 * The project and issue type mapping.
 */
export interface ProjectIssueTypeMapping {
  /** The ID of the project. */
  projectId: string;

  /** The ID of the issue type. */
  issueTypeId: string;
}

/**
 * The project and issue type mappings.
 */
export interface ProjectIssueTypeMappings {
  /** The project and issue type mappings. */
  mappings: ProjectIssueTypeMapping[];
}

/**
 * The project and issue type mapping with a matching custom field context.
 */
export interface ContextForProjectAndIssueType {
  /** The ID of the project. */
  projectId: string;

  /** The ID of the issue type. */
  issueTypeId: string;

  /** The ID of the custom field context. */
  contextId: string;
}

/**
 * A page of items.
 */
export interface PageBeanContextForProjectAndIssueType {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: ContextForProjectAndIssueType[];
}

/**
 * Default values to update.
 */
export interface CustomFieldContextDefaultValueUpdate {
  defaultValues?: CustomFieldContextDefaultValue[];
}

/**
 * Mapping of an issue type to a context.
 */
export interface IssueTypeToContextMapping {
  /** The ID of the context. */
  contextId: string;

  /** The ID of the issue type. */
  issueTypeId?: string;

  /** Whether the context is mapped to any issue type. */
  isAnyIssueType?: boolean;
}

/**
 * A page of items.
 */
export interface PageBeanIssueTypeToContextMapping {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueTypeToContextMapping[];
}

/**
 * A list of issue IDs and the value to update a custom field to.
 */
export interface CustomFieldValueUpdate {
  /** The list of issue IDs. */
  issueIds: number[];

  /**
   * The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:
   *
   *  *  `string` the value must be a string.
   *  *  `number` the value must be a number.
   *  *  `datetime` the value must be a string that represents a date in the ISO format, for example `"2021-01-18T12:00:00-03:00"`.
   *  *  `user` the value must be an object that contains the `accountId` field.
   *  *  `group` the value must be an object that contains the group `name` field.
   * A list of appropriate values must be provided if the field is of the `list` [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types).
   */
  value: any;
}

/**
 * Details of updates for a custom field.
 */
export interface CustomFieldValueUpdateDetails {
  /** The list of custom field update details. */
  updates?: CustomFieldValueUpdate[];
}

/**
 * A custom field and its new value with a list of issue to update.
 */
export interface MultipleCustomFieldValuesUpdate {
  /** The ID or key of the custom field. For example, `customfield_10010`. */
  customField: string;

  /** The list of issue IDs. */
  issueIds: number[];

  /**
   * The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:
   *
   *  *  `string` the value must be a string.
   *  *  `number` the value must be a number.
   *  *  `datetime` the value must be a string that represents a date in the ISO format, for example `"2021-01-18T12:00:00-03:00"`.
   *  *  `user` the value must be an object that contains the `accountId` field.
   *  *  `group` the value must be an object that contains the group `name` field.
   * A list of appropriate values must be provided if the field is of the `list` [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types).
   */
  value: any;
}

/**
 * List of updates for a custom fields.
 */
export interface MultipleCustomFieldValuesUpdateDetails {
  updates?: MultipleCustomFieldValuesUpdate[];
}

/**
 * Details of the contextual configuration for a custom field.
 */
export interface ContextualConfiguration {
  /**
   * The ID of the context the configuration is associated with.
   * @format int64
   */
  contextId: number;

  /** The configuration associated with the context. */
  configuration?: any;

  /** The schema associated with the context. */
  schema?: any;
}

/**
 * A page of items.
 */
export interface PageBeanContextualConfiguration {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: ContextualConfiguration[];
}

/**
 * Details of configurations for a custom field.
 */
export interface CustomFieldConfigurations {
  /** The list of custom field configuration details. */
  configurations: ContextualConfiguration[];
}

/**
 * Metadata for an issue attachment.
 */
export interface AttachmentMetadata {
  /**
   * The ID of the attachment.
   * @format int64
   */
  id?: number;

  /**
   * The URL of the attachment metadata details.
   * @format uri
   */
  self?: string;

  /** The name of the attachment file. */
  filename?: string;

  /** Details of the user who attached the file. */
  author?: User;

  /**
   * The datetime the attachment was created.
   * @format date-time
   */
  created?: string;

  /**
   * The size of the attachment.
   * @format int64
   */
  size?: number;

  /** The MIME type of the attachment. */
  mimeType?: string;

  /** Additional properties of the attachment. */
  properties?: Record<string, any>;

  /** The URL of the attachment. */
  content?: string;

  /** The URL of a thumbnail representing the attachment. */
  thumbnail?: string;

  /** The file ID of the attachment in the media store. See the [Media API](https://developer.atlassian.com/platform/media/) documentation for more details. */
  mediaApiFileId?: string;
}

/**
 * Details of the instance's attachment settings.
 */
export interface AttachmentSettings {
  /** Whether the ability to add attachments is enabled. */
  enabled?: boolean;

  /**
   * The maximum size of attachments permitted, in bytes.
   * @format int64
   */
  uploadLimit?: number;
}

export interface AttachmentArchiveEntry {
  abbreviatedName?: string;

  /** @format int64 */
  entryIndex?: number;
  mediaType?: string;
  name?: string;

  /** @format int64 */
  size?: number;
}

export interface AttachmentArchiveImpl {
  /** The list of the items included in the archive. */
  entries?: AttachmentArchiveEntry[];

  /**
   * The number of items in the archive.
   * @format int32
   */
  totalEntryCount?: number;
}

export interface AttachmentArchive {
  moreAvailable?: boolean;

  /** @format int32 */
  totalNumberOfEntriesAvailable?: number;

  /** @format int32 */
  totalEntryCount?: number;
  entries?: AttachmentArchiveEntry[];
}

/**
 * Metadata for an item in an attachment archive.
 */
export interface AttachmentArchiveItemReadable {
  /** The path of the archive item. */
  path?: string;

  /**
   * The position of the item within the archive.
   * @format int64
   */
  index?: number;

  /** The size of the archive item. */
  size?: string;

  /** The MIME type of the archive item. */
  mediaType?: string;

  /** The label for the archive item. */
  label?: string;
}

/**
 * Metadata for an archive (for example a zip) and its contents.
 */
export interface AttachmentArchiveMetadataReadable {
  /**
   * The ID of the attachment.
   * @format int64
   */
  id?: number;

  /** The name of the archive file. */
  name?: string;

  /** The list of the items included in the archive. */
  entries?: AttachmentArchiveItemReadable[];

  /**
   * The number of items included in the archive.
   * @format int64
   */
  totalEntryCount?: number;

  /** The MIME type of the attachment. */
  mediaType?: string;
}

/**
 * Details of an issue type scheme.
 */
export interface IssueTypeScheme {
  /** The ID of the issue type scheme. */
  id: string;

  /** The name of the issue type scheme. */
  name: string;

  /** The description of the issue type scheme. */
  description?: string;

  /** The ID of the default issue type of the issue type scheme. */
  defaultIssueTypeId?: string;

  /** Whether the issue type scheme is the default. */
  isDefault?: boolean;
}

/**
 * A page of items.
 */
export interface PageBeanIssueTypeScheme {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueTypeScheme[];
}

/**
 * Issue type scheme with a list of the projects that use it.
 */
export interface IssueTypeSchemeProjects {
  /** Details of an issue type scheme. */
  issueTypeScheme: IssueTypeScheme;

  /** The IDs of the projects using the issue type scheme. */
  projectIds: string[];
}

/**
 * A page of items.
 */
export interface PageBeanIssueTypeSchemeProjects {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueTypeSchemeProjects[];
}

/**
 * Issue type scheme item.
 */
export interface IssueTypeSchemeMapping {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: string;

  /** The ID of the issue type. */
  issueTypeId: string;
}

/**
 * A page of items.
 */
export interface PageBeanIssueTypeSchemeMapping {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: IssueTypeSchemeMapping[];
}

/**
 * Details of the association between an issue type scheme and project.
 */
export interface IssueTypeSchemeProjectAssociation {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: string;

  /** The ID of the project. */
  projectId: string;
}

/**
 * Details of an issue type scheme and its associated issue types.
 */
export interface IssueTypeSchemeDetails {
  /** The name of the issue type scheme. The name must be unique. The maximum length is 255 characters. */
  name: string;

  /** The description of the issue type scheme. The maximum length is 4000 characters. */
  description?: string;

  /** The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`. */
  defaultIssueTypeId?: string;

  /** The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required. */
  issueTypeIds: string[];
}

/**
 * The ID of an issue type scheme.
 */
export interface IssueTypeSchemeID {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: string;
}

/**
 * Details of the name, description, and default issue type for an issue type scheme.
 */
export interface IssueTypeSchemeUpdateDetails {
  /** The name of the issue type scheme. The name must be unique. The maximum length is 255 characters. */
  name?: string;

  /** The description of the issue type scheme. The maximum length is 4000 characters. */
  description?: string;

  /** The ID of the default issue type of the issue type scheme. */
  defaultIssueTypeId?: string;
}

/**
 * An ordered list of issue type IDs and information about where to move them.
 */
export interface OrderOfIssueTypes {
  /** A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move. */
  issueTypeIds: string[];

  /** The ID of the issue type to place the moved issue types after. Required if `position` isn't provided. */
  after?: string;

  /** The position the issue types should be moved to. Required if `after` isn't provided. */
  position?: 'First' | 'Last';
}

export interface CreateUpdateRoleRequestBean {
  /** The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role. */
  name?: string;

  /** A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. */
  description?: string;
}

export interface ActorInputBean {
  /** The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, `"user":["5b10a2844c20165700ede21g", "5b109f2e9729b51b54dc274d"]`. */
  user?: string[];

  /** The name of the group to add as a default actor. This parameter accepts a comma-separated list. For example, `"group":["project-admin", "jira-developers"]`. */
  group?: string[];
}

export interface ProjectRoleActorsUpdateBean {
  /**
   * The ID of the project role. Use [Get all project roles](#api-rest-api-2-role-get) to get a list of project role IDs.
   * @format int64
   */
  id?: number;

  /** The actors to add to the project role. Add groups using `atlassian-group-role-actor` and a list of group names. For example, `"atlassian-group-role-actor":["another","administrators"]}`. Add users using `atlassian-user-role-actor` and a list of account IDs. For example, `"atlassian-user-role-actor":["12345678-9abc-def1-2345-6789abcdef12", "abcdef12-3456-789a-bcde-f123456789ab"]`. */
  categorisedActors?: Record<string, string[]>;
}

export interface ActorsMap {
  /** The user account ID of the user to add. */
  user?: string[];

  /** The name of the group to add. */
  group?: string[];
}

/**
 * Details about a project role.
 */
export interface ProjectRoleDetails {
  /**
   * The URL the project role details.
   * @format uri
   */
  self?: string;

  /** The name of the project role. */
  name?: string;

  /**
   * The ID of the project role.
   * @format int64
   */
  id?: number;

  /** The description of the project role. */
  description?: string;

  /** Whether this role is the admin role for the project. */
  admin?: boolean;

  /** The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO). */
  scope?: Scope;

  /** Whether the roles are configurable for this project. */
  roleConfigurable?: boolean;

  /** The translated name of the project role. */
  translatedName?: string;

  /** Whether this role is the default role for the project. */
  default?: boolean;
}

/**
 * A page of items.
 */
export interface PageBeanScreenScheme {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: ScreenScheme[];
}

/**
 * A screen scheme.
 */
export interface ScreenScheme {
  /**
   * The ID of the screen scheme.
   * @format int64
   */
  id?: number;

  /** The name of the screen scheme. */
  name?: string;

  /** The description of the screen scheme. */
  description?: string;

  /** The IDs of the screens for the screen types of the screen scheme. */
  screens?: ScreenTypes;

  /** Details of the issue type screen schemes associated with the screen scheme. */
  issueTypeScreenSchemes?: PageBeanIssueTypeScreenScheme;
}

/**
 * The IDs of the screens for the screen types of the screen scheme.
 */
export interface ScreenTypes {
  /**
   * The ID of the edit screen.
   * @format int64
   */
  edit?: number;

  /**
   * The ID of the create screen.
   * @format int64
   */
  create?: number;

  /**
   * The ID of the view screen.
   * @format int64
   */
  view?: number;

  /**
   * The ID of the default screen. Required when creating a screen scheme.
   * @format int64
   */
  default?: number;
}

/**
 * Details of a screen scheme.
 */
export interface ScreenSchemeDetails {
  /** The name of the screen scheme. The name must be unique. The maximum length is 255 characters. */
  name: string;

  /** The description of the screen scheme. The maximum length is 255 characters. */
  description?: string;

  /** The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted. */
  screens: ScreenTypes;
}

/**
 * The ID of a screen scheme.
 */
export interface ScreenSchemeId {
  /**
   * The ID of the screen scheme.
   * @format int64
   */
  id: number;
}

/**
 * Details of a screen scheme.
 */
export interface UpdateScreenSchemeDetails {
  /** The name of the screen scheme. The name must be unique. The maximum length is 255 characters. */
  name?: string;

  /** The description of the screen scheme. The maximum length is 255 characters. */
  description?: string;

  /** The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted. */
  screens?: UpdateScreenTypes;
}

/**
 * The IDs of the screens for the screen types of the screen scheme.
 */
export interface UpdateScreenTypes {
  /** The ID of the edit screen. To remove the screen association, pass a null. */
  edit?: string;

  /** The ID of the create screen. To remove the screen association, pass a null. */
  create?: string;

  /** The ID of the view screen. To remove the screen association, pass a null. */
  view?: string;

  /** The ID of the default screen. When specified, must include a screen ID as a default screen is required. */
  default?: string;
}

export interface UserMigrationBean {
  key?: string;
  username?: string;
  accountId?: string;
}

export interface UnrestrictedUserEmail {
  /** The accountId of the user */
  accountId?: string;

  /** The email of the user */
  email?: string;
}

export interface IdBean {
  /**
   * The ID of the permission scheme to associate with the project. Use the [Get all permission schemes](#api-rest-api-2-permissionscheme-get) resource to get a list of permission scheme IDs.
   * @format int64
   */
  id: number;
}

/**
 * Details about a permission granted to a user or group.
 */
export interface PermissionGrant {
  /**
   * The ID of the permission granted details.
   * @format int64
   */
  id?: number;

  /**
   * The URL of the permission granted details.
   * @format uri
   */
  self?: string;

  /** The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information. */
  holder?: PermissionHolder;

  /** The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions. */
  permission?: string;
}

/**
 * Details of a permission scheme.
 */
export interface PermissionScheme {
  /** The expand options available for the permission scheme. */
  expand?: string;

  /**
   * The ID of the permission scheme.
   * @format int64
   */
  id?: number;

  /**
   * The URL of the permission scheme.
   * @format uri
   */
  self?: string;

  /** The name of the permission scheme. Must be unique. */
  name: string;

  /** A description for the permission scheme. */
  description?: string;

  /** The scope of the permission scheme. */
  scope?: Scope;

  /** The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information. */
  permissions?: PermissionGrant[];
  [key: string]: any;
}

/**
 * Details about permissions.
 */
export interface Permissions {
  /** List of permissions. */
  permissions?: Record<string, UserPermission>;
}

/**
 * Details of a permission and its availability to a user.
 */
export interface UserPermission {
  /** The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-2-permissions-get) to get the list of permissions. */
  id?: string;

  /** The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-2-permissions-get) to get the list of permissions. */
  key?: string;

  /** The name of the permission. */
  name?: string;

  /** The type of the permission. */
  type?: 'GLOBAL' | 'PROJECT';

  /** The description of the permission. */
  description?: string;

  /** Whether the permission is available to the user in the queried context. */
  havePermission?: boolean;

  /** Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the `permissions parameter of Get my permissions. Deprecated keys are not returned by Get all permissions.` */
  deprecatedKey?: boolean;
  [key: string]: any;
}

/**
 * Details of global permissions to look up and project permissions with associated projects and issues to look up.
 */
export interface BulkPermissionsRequestBean {
  /** Project permissions with associated projects and issues to look up. */
  projectPermissions?: BulkProjectPermissions[];

  /** Global permissions to look up. */
  globalPermissions?: string[];

  /** The account ID of a user. */
  accountId?: string;
}

/**
 * Details of project permissions and associated issues and projects to look up.
 */
export interface BulkProjectPermissions {
  /** List of issue IDs. */
  issues?: number[];

  /** List of project IDs. */
  projects?: number[];

  /** List of project permissions. */
  permissions: string[];
}

/**
 * Details of global and project permissions granted to the user.
 */
export interface BulkPermissionGrants {
  /** List of project permissions and the projects and issues those permissions provide access to. */
  projectPermissions: BulkProjectPermissionGrants[];

  /** List of permissions granted to the user. */
  globalPermissions: string[];
}

/**
 * List of project permissions and the projects and issues those permissions grant access to.
 */
export interface BulkProjectPermissionGrants {
  /** A project permission, */
  permission: string;

  /** IDs of the issues the user has the permission for. */
  issues: number[];

  /** IDs of the projects the user has the permission for. */
  projects: number[];
}

export interface PermissionsKeysBean {
  /** A list of permission keys. */
  permissions: string[];
}

/**
 * A list of projects in which a user is granted permissions.
 */
export interface PermittedProjects {
  /** A list of projects. */
  projects?: ProjectIdentifierBean[];
}

/**
 * The identifiers for a project.
 */
export interface ProjectIdentifierBean {
  /**
   * The ID of the project.
   * @format int64
   */
  id?: number;

  /** The key of the project. */
  key?: string;
}

/**
 * A list of JQL queries to parse.
 */
export interface JqlQueriesToParse {
  /** A list of queries to parse. */
  queries: string[];
}

/**
 * A JQL query clause that consists of nested clauses. For example, `(labels in (urgent, blocker) OR lastCommentedBy = currentUser()). Note that, where nesting is not defined, the parser nests JQL clauses based on the operator precedence. For example, "A OR B AND C" is parsed as "(A OR B) AND C". See Setting the precedence of operators for more information about precedence in JQL queries.`
 */
export interface CompoundClause {
  /** The list of nested clauses. */
  clauses: JqlQueryClause[];

  /** The operator between the clauses. */
  operator: 'and' | 'or' | 'not';
}

/**
 * A clause that asserts whether a field was changed. For example, `status CHANGED AFTER startOfMonth(-1M)`.See [CHANGED](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for more information about the CHANGED operator.
 */
export interface FieldChangedClause {
  /** A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries. */
  field: JqlQueryField;

  /** The operator applied to the field. */
  operator: 'changed';

  /** The list of time predicates. */
  predicates: JqlQueryClauseTimePredicate[];
}

/**
 * A clause that asserts the current value of a field. For example, `summary ~ test`.
 */
export interface FieldValueClause {
  /** A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries. */
  field: JqlQueryField;

  /** The operator between the field and operand. */
  operator: '=' | '!=' | '>' | '<' | '>=' | '<=' | 'in' | 'not in' | '~' | '~=' | 'is' | 'is not';

  /** Details of an operand in a JQL clause. */
  operand: JqlQueryClauseOperand;
}

/**
 * A clause that asserts a previous value of a field. For example, `status WAS "Resolved" BY currentUser() BEFORE "2019/02/02"`. See [WAS](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-WASWAS) for more information about the WAS operator.
 */
export interface FieldWasClause {
  /** A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries. */
  field: JqlQueryField;

  /** The operator between the field and operand. */
  operator: 'was' | 'was in' | 'was not in' | 'was not';

  /** Details of an operand in a JQL clause. */
  operand: JqlQueryClauseOperand;

  /** The list of time predicates. */
  predicates: JqlQueryClauseTimePredicate[];
}

/**
 * An operand that is a function. See [Advanced searching - functions reference](https://confluence.atlassian.com/x/dwiiLQ) for more information about JQL functions.
 */
export interface FunctionOperand {
  /** The name of the function. */
  function: string;

  /** The list of function arguments. */
  arguments: string[];
}

/**
 * A parsed JQL query.
 */
export interface JqlQuery {
  /** A JQL query clause. */
  where?: JqlQueryClause;

  /** Details of the order-by JQL clause. */
  orderBy?: JqlQueryOrderByClause;
}

/**
 * A JQL query clause.
 */
export type JqlQueryClause =
  | CompoundClause
  | FieldValueClause
  | FieldWasClause
  | FieldChangedClause
  | (CompoundClause & FieldValueClause & FieldWasClause & FieldChangedClause);

/**
 * Details of an operand in a JQL clause.
 */
export type JqlQueryClauseOperand =
  | ListOperand
  | ValueOperand
  | FunctionOperand
  | KeywordOperand
  | (ListOperand & ValueOperand & FunctionOperand & KeywordOperand);

/**
 * A time predicate for a temporal JQL clause.
 */
export interface JqlQueryClauseTimePredicate {
  /** The operator between the field and the operand. */
  operator: 'before' | 'after' | 'from' | 'to' | 'on' | 'during' | 'by';

  /** Details of an operand in a JQL clause. */
  operand: JqlQueryClauseOperand;
}

/**
 * A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries.
 */
export interface JqlQueryField {
  /** The name of the field. */
  name: string;

  /** When the field refers to a value in an entity property, details of the entity property value. */
  property?: JqlQueryFieldEntityProperty[];
}

/**
 * Details of an entity property.
 */
export interface JqlQueryFieldEntityProperty {
  /**
   * The object on which the property is set.
   * @example issue
   */
  entity: string;

  /**
   * The key of the property.
   * @example stats
   */
  key: string;

  /**
   * The path in the property value to query.
   * @example comments.count
   */
  path: string;

  /**
   * The type of the property value extraction. Not available if the extraction for the property is not registered on the instance with the [Entity property](https://developer.atlassian.com/cloud/jira/platform/modules/entity-property/) module.
   * @example number
   */
  type?: 'number' | 'string' | 'text' | 'date' | 'user';
}

/**
 * Details of the order-by JQL clause.
 */
export interface JqlQueryOrderByClause {
  /** The list of order-by clause fields and their ordering directives. */
  fields: JqlQueryOrderByClauseElement[];
}

/**
 * An element of the order-by JQL clause.
 */
export interface JqlQueryOrderByClauseElement {
  /** A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries. */
  field: JqlQueryField;

  /** The direction in which to order the results. */
  direction?: 'asc' | 'desc';
}

/**
 * An operand that can be part of a list operand.
 */
export type JqlQueryUnitaryOperand =
  | ValueOperand
  | FunctionOperand
  | KeywordOperand
  | (ValueOperand & FunctionOperand & KeywordOperand);

/**
 * An operand that is a JQL keyword. See [Advanced searching - keywords reference](https://confluence.atlassian.com/jiracorecloud/advanced-searching-keywords-reference-765593717.html#Advancedsearching-keywordsreference-EMPTYEMPTY) for more information about operand keywords.
 */
export interface KeywordOperand {
  /** The keyword that is the operand value. */
  keyword: 'empty';
}

/**
 * An operand that is a list of values.
 */
export interface ListOperand {
  /** The list of operand values. */
  values: JqlQueryUnitaryOperand[];
}

/**
 * A list of parsed JQL queries.
 */
export interface ParsedJqlQueries {
  /** A list of parsed JQL queries. */
  queries: ParsedJqlQuery[];
}

/**
 * Details of a parsed JQL query.
 */
export interface ParsedJqlQuery {
  /** The JQL query that was parsed and validated. */
  query: string;

  /** The syntax tree of the query. Empty if the query was invalid. */
  structure?: JqlQuery;

  /** The list of syntax or validation errors. */
  errors?: string[];
}

/**
 * An operand that is a user-provided value.
 */
export interface ValueOperand {
  /** The operand value. */
  value: string;
}

export interface IdOrKeyBean {
  /**
   * The ID of the referenced item.
   * @format int64
   */
  id?: number;

  /** The key of the referenced item. */
  key?: string;
}

/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable.
 */
export interface JexpIssues {
  /** The JQL query that specifies the set of issues available in the Jira expression. */
  jql?: JexpJqlIssues;
}

/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `startAt` and `maxResults` properties. To determine whether it is necessary to iterate to ensure all the issues returned by the JQL query are evaluated, inspect `meta.issues.jql.count` in the response.
 */
export interface JexpJqlIssues {
  /** The JQL query. */
  query?: string;

  /**
   * The index of the first issue to return from the JQL query.
   * @format int64
   */
  startAt?: number;

  /**
   * The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
   * @format int32
   */
  maxResults?: number;

  /** Determines how to validate the JQL query and treat the validation results. */
  validation?: 'strict' | 'warn' | 'none';
}

export interface JiraExpressionEvalContextBean {
  /** The issue that is available under the `issue` variable when evaluating the expression. */
  issue?: IdOrKeyBean;

  /** The collection of issues that is available under the `issues` variable when evaluating the expression. */
  issues?: JexpIssues;

  /** The project that is available under the `project` variable when evaluating the expression. */
  project?: IdOrKeyBean;

  /**
   * The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
   * @format int64
   */
  sprint?: number;

  /**
   * The ID of the board that is available under the `board` variable when evaluating the expression.
   * @format int64
   */
  board?: number;

  /**
   * The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
   * @format int64
   */
  serviceDesk?: number;

  /**
   * The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
   * @format int64
   */
  customerRequest?: number;

  /**
   * Custom context variables and their types. These variable types are available for use in a custom context:
   *
   *  *  `user`: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.
   *  *  `issue`: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.
   *  *  `json`: A JSON object with custom content.
   *  *  `list`: A JSON list of `user`, `issue`, or `json` variable types.
   */
  custom?: Record<string, any>;
}

export interface JiraExpressionEvalRequestBean {
  /**
   * The Jira expression to evaluate.
   * @example { key: issue.key, type: issue.issueType.name, links: issue.links.map(link => link.linkedIssue.id) }
   */
  expression: string;

  /** The context in which the Jira expression is evaluated. */
  context?: JiraExpressionEvalContextBean;
}

/**
 * The description of the page of issues loaded by the provided JQL query.
 */
export interface IssuesJqlMetaDataBean {
  /**
   * The index of the first issue.
   * @format int64
   */
  startAt: number;

  /**
   * The maximum number of issues that could be loaded in this evaluation.
   * @format int32
   */
  maxResults: number;

  /**
   * The number of issues that were loaded in this evaluation.
   * @format int32
   */
  count: number;

  /**
   * The total number of issues the JQL returned.
   * @format int64
   */
  totalCount: number;

  /** Any warnings related to the JQL query. Present only if the validation mode was set to `warn`. */
  validationWarnings?: string[];
}

/**
 * Meta data describing the `issues` context variable.
 */
export interface IssuesMetaBean {
  /** The description of the page of issues loaded by the provided JQL query. */
  jql?: IssuesJqlMetaDataBean;
}

export interface JiraExpressionEvaluationMetaDataBean {
  /** Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression. */
  complexity?: JiraExpressionsComplexityBean;

  /** Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here. */
  issues?: IssuesMetaBean;
}

/**
 * The result of evaluating a Jira expression.
 */
export interface JiraExpressionResult {
  /** The value of the evaluated expression. It may be a primitive JSON value or a Jira REST API object. (Some expressions do not produce any meaningful results—for example, an expression that returns a lambda function—if that's the case a simple string representation is returned. These string representations should not be relied upon and may change without notice.) */
  value: any;

  /** Contains various characteristics of the performed expression evaluation. */
  meta?: JiraExpressionEvaluationMetaDataBean;
}

export interface JiraExpressionsComplexityBean {
  /** The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function. */
  steps: JiraExpressionsComplexityValueBean;

  /** The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields. */
  expensiveOperations: JiraExpressionsComplexityValueBean;

  /** The number of Jira REST API beans returned in the response. */
  beans: JiraExpressionsComplexityValueBean;

  /** The number of primitive values returned in the response. */
  primitiveValues: JiraExpressionsComplexityValueBean;
}

export interface JiraExpressionsComplexityValueBean {
  /**
   * The complexity value of the current expression.
   * @format int32
   */
  value: number;

  /**
   * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
   * @format int32
   */
  limit: number;
}

/**
 * Details of Jira expressions for analysis.
 */
export interface JiraExpressionForAnalysis {
  /**
   * The list of Jira expressions to analyse.
   * @example issues.map(issue => issue.properties['property_key'])
   */
  expressions: string[];

  /** Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as `issue` or `project`, are available in context and sets their type. Use this property to override the default types or provide details of new variables. */
  contextVariables?: Record<string, string>;
}

/**
 * Details about the analysed Jira expression.
 */
export interface JiraExpressionAnalysis {
  /** The analysed expression. */
  expression: string;

  /** A list of validation errors. Not included if the expression is valid. */
  errors?: JiraExpressionValidationError[];

  /** Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations). */
  valid: boolean;

  /** EXPERIMENTAL. The inferred type of the expression. */
  type?: string;

  /** Details about the complexity of the analysed Jira expression. */
  complexity?: JiraExpressionComplexity;
}

/**
 * Details about the complexity of the analysed Jira expression.
 */
export interface JiraExpressionComplexity {
  /**
   * Information that can be used to determine how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) the evaluation of the expression will perform. This information may be a formula or number. For example:
   *
   *  *  `issues.map(i => i.comments)` performs as many expensive operations as there are issues on the issues list. So this parameter returns `N`, where `N` is the size of issue list.
   *  *  `new Issue(10010).comments` gets comments for one issue, so its complexity is `2` (`1` to retrieve issue 10010 from the database plus `1` to get its comments).
   */
  expensiveOperations: string;

  /** Variables used in the formula, mapped to the parts of the expression they refer to. */
  variables?: Record<string, string>;
}

/**
* Details about syntax and type errors. The error details apply to the entire expression, unless the object includes:

 *  `line` and `column`
 *  `expression`
*/
export interface JiraExpressionValidationError {
  /**
   * The text line in which the error occurred.
   * @format int32
   */
  line?: number;

  /**
   * The text column in which the error occurred.
   * @format int32
   */
  column?: number;

  /** The part of the expression in which the error occurred. */
  expression?: string;

  /**
   * Details about the error.
   * @example !, -, typeof, (, IDENTIFIER, null, true, false, NUMBER, STRING, TEMPLATE_LITERAL, new, [ or { expected, > encountered.
   */
  message: string;

  /** The error type. */
  type: 'syntax' | 'type' | 'other';
}

/**
 * Details about the analysed Jira expression.
 */
export interface JiraExpressionsAnalysis {
  /** The results of Jira expressions analysis. */
  results: JiraExpressionAnalysis[];
}

/**
 * A page of items.
 */
export interface PageBeanString {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: string[];
}

/**
 * A project's sender email address.
 */
export interface ProjectEmailAddress {
  /** The email address. */
  emailAddress?: string;
}

/**
 * Details about a project type.
 */
export interface ProjectType {
  /** The key of the project type. */
  key?: string;

  /** The formatted key of the project type. */
  formattedKey?: string;

  /** The key of the project type's description. */
  descriptionI18nKey?: string;

  /** The icon of the project type. */
  icon?: string;

  /** The color of the project type. */
  color?: string;
}

/**
 * A page of items.
 */
export interface PageBeanWorkflowScheme {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: WorkflowScheme[];
}

/**
 * Details about a workflow scheme.
 */
export interface WorkflowScheme {
  /**
   * The ID of the workflow scheme.
   * @format int64
   */
  id?: number;

  /** The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme. */
  name?: string;

  /** The description of the workflow scheme. */
  description?: string;

  /** The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*. */
  defaultWorkflow?: string;

  /** The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme. */
  issueTypeMappings?: Record<string, string>;

  /** For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. */
  originalDefaultWorkflow?: string;

  /** For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme. */
  originalIssueTypeMappings?: Record<string, string>;

  /** Whether the workflow scheme is a draft or not. */
  draft?: boolean;

  /** The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows. */
  lastModifiedUser?: User;

  /** The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows. */
  lastModified?: string;

  /** @format uri */
  self?: string;

  /**
   * Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:
   *
   *  *  Update an active workflow scheme with `updateDraftIfNeeded` set to `true`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.
   *  *  Update an active workflow scheme with `updateDraftIfNeeded` set to `false`: An error is returned, as active workflow schemes cannot be updated.
   *  *  Update an inactive workflow scheme with `updateDraftIfNeeded` set to `true`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.
   * Defaults to `false`.
   */
  updateDraftIfNeeded?: boolean;

  /** The issue types available in Jira. */
  issueTypes?: Record<string, IssueTypeDetails>;
}

/**
 * Details about the mapping between issue types and a workflow.
 */
export interface IssueTypesWorkflowMapping {
  /** The name of the workflow. Optional if updating the workflow-issue types mapping. */
  workflow?: string;

  /** The list of issue type IDs. */
  issueTypes?: string[];

  /** Whether the workflow is the default workflow for the workflow scheme. */
  defaultMapping?: boolean;

  /** Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
}

/**
 * Details about the mapping between an issue type and a workflow.
 */
export interface IssueTypeWorkflowMapping {
  /** The ID of the issue type. Not required if updating the issue type-workflow mapping. */
  issueType?: string;

  /** The name of the workflow. */
  workflow?: string;

  /** Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping. */
  updateDraftIfNeeded?: boolean;
}

/**
 * Details about the default workflow.
 */
export interface DefaultWorkflow {
  /** The name of the workflow to set as the default workflow. */
  workflow: string;

  /** Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
}

/**
 * Details about the status mappings for publishing a draft workflow scheme.
 */
export interface PublishDraftWorkflowScheme {
  /** Mappings of statuses to new statuses for issue types. */
  statusMappings?: StatusMapping[];
}

/**
 * Details about the mapping from a status to a new status for an issue type.
 */
export interface StatusMapping {
  /** The ID of the issue type. */
  issueTypeId: string;

  /** The ID of the status. */
  statusId: string;

  /** The ID of the new status. */
  newStatusId: string;
}

/**
 * A container for a list of workflow schemes together with the projects they are associated with.
 */
export interface ContainerOfWorkflowSchemeAssociations {
  /** A list of workflow schemes together with projects they are associated with. */
  values: WorkflowSchemeAssociations[];
}

/**
 * A workflow scheme along with a list of projects that use it.
 */
export interface WorkflowSchemeAssociations {
  /** The list of projects that use the workflow scheme. */
  projectIds: string[];

  /** The workflow scheme. */
  workflowScheme: WorkflowScheme;
}

/**
 * An associated workflow scheme and project.
 */
export interface WorkflowSchemeProjectAssociation {
  /** The ID of the workflow scheme. If the workflow scheme ID is `null`, the operation assigns the default workflow scheme. */
  workflowSchemeId?: string;

  /** The ID of the project. */
  projectId: string;
}

/**
 * Details about a license for the Jira instance.
 */
export interface License {
  /** The applications under this license. */
  applications: LicensedApplication[];
}

/**
 * Details about a licensed Jira application.
 */
export interface LicensedApplication {
  /** The ID of the application. */
  id: string;

  /** The licensing plan. */
  plan: 'UNLICENSED' | 'FREE' | 'PAID';
}

/**
 * Details about an issue event.
 */
export interface IssueEvent {
  /**
   * The ID of the event.
   * @format int64
   */
  id?: number;

  /** The name of the event. */
  name?: string;
}

/**
 * Details about the configuration of Jira.
 */
export interface Configuration {
  /** Whether the ability for users to vote on issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. */
  votingEnabled?: boolean;

  /** Whether the ability for users to watch issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. */
  watchingEnabled?: boolean;

  /** Whether the ability to create unassigned issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. */
  unassignedIssuesAllowed?: boolean;

  /** Whether the ability to create subtasks for issues is enabled. */
  subTasksEnabled?: boolean;

  /** Whether the ability to link issues is enabled. */
  issueLinkingEnabled?: boolean;

  /** Whether the ability to track time is enabled. This property is deprecated. */
  timeTrackingEnabled?: boolean;

  /** Whether the ability to add attachments to issues is enabled. */
  attachmentsEnabled?: boolean;

  /** The configuration of time tracking. */
  timeTrackingConfiguration?: TimeTrackingConfiguration;
}

/**
 * Details of the time tracking configuration.
 */
export interface TimeTrackingConfiguration {
  /**
   * The number of hours in a working day.
   * @format double
   */
  workingHoursPerDay: number;

  /**
   * The number of days in a working week.
   * @format double
   */
  workingDaysPerWeek: number;

  /** The format that will appear on an issue's *Time Spent* field. */
  timeFormat: 'pretty' | 'days' | 'hours';

  /** The default unit of time applied to logged time. */
  defaultUnit: 'minute' | 'hour' | 'day' | 'week';
}

/**
 * Details of an application property.
 */
export interface ApplicationProperty {
  /** The ID of the application property. The ID and key are the same. */
  id?: string;

  /** The key of the application property. The ID and key are the same. */
  key?: string;

  /** The new value. */
  value?: string;

  /** The name of the application property. */
  name?: string;

  /** The description of the application property. */
  desc?: string;

  /** The data type of the application property. */
  type?: string;

  /** The default value of the application property. */
  defaultValue?: string;
  example?: string;

  /** The allowed values, if applicable. */
  allowedValues?: string[];
}

export interface SimpleApplicationPropertyBean {
  /** The ID of the application property. */
  id?: string;

  /** The new value. */
  value?: string;
}

/**
 * List of all permission schemes.
 */
export interface PermissionSchemes {
  /** Permission schemes list. */
  permissionSchemes?: PermissionScheme[];
}

/**
 * List of permission grants.
 */
export interface PermissionGrants {
  /** Permission grants list. */
  permissions?: PermissionGrant[];

  /** Expand options that include additional permission grant details in the response. */
  expand?: string;
}

/**
 * Details about a workflow.
 */
export interface DeprecatedWorkflow {
  /** The name of the workflow. */
  name?: string;

  /** The description of the workflow. */
  description?: string;

  /** The datetime the workflow was last modified. */
  lastModifiedDate?: string;

  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  lastModifiedUser?: string;

  /** The account ID of the user that last modified the workflow. */
  lastModifiedUserAccountId?: string;

  /**
   * The number of steps included in the workflow.
   * @format int32
   */
  steps?: number;

  /** The scope where this workflow applies */
  scope?: Scope;
  default?: boolean;
}

/**
 * A workflow transition condition.
 */
export interface CreateWorkflowCondition {
  /** The compound condition operator. */
  operator?: 'AND' | 'OR';

  /** The list of workflow conditions. */
  conditions?: CreateWorkflowCondition[];

  /** The type of the transition rule. */
  type?: string;

  /** EXPERIMENTAL. The configuration of the transition rule. */
  configuration?: Record<string, any>;
}

/**
 * The details of a workflow.
 */
export interface CreateWorkflowDetails {
  /** The name of the workflow. The name must be unique. The maximum length is 255 characters. Characters can be separated by a whitespace but the name cannot start or end with a whitespace. */
  name: string;

  /** The description of the workflow. The maximum length is 1000 characters. */
  description?: string;

  /**
   * The transitions of the workflow. For the request to be valid, these transitions must:
   *
   *  *  include one *initial* transition.
   *  *  not use the same name for a *global* and *directed* transition.
   *  *  have a unique name for each *global* transition.
   *  *  have a unique 'to' status for each *global* transition.
   *  *  have unique names for each transition from a status.
   *  *  not have a 'from' status on *initial* and *global* transitions.
   *  *  have a 'from' status on *directed* transitions.
   * All the transition statuses must be included in `statuses`.
   */
  transitions: CreateWorkflowTransitionDetails[];

  /** The statuses of the workflow. Any status that does not include a transition is added to the workflow without a transition. */
  statuses: CreateWorkflowStatusDetails[];
}

/**
 * The details of a transition status.
 */
export interface CreateWorkflowStatusDetails {
  /** The ID of the status. */
  id: string;

  /** The properties of the status. */
  properties?: Record<string, string>;
}

/**
 * The details of a workflow transition.
 */
export interface CreateWorkflowTransitionDetails {
  /** The name of the transition. The maximum length is 60 characters. */
  name: string;

  /** The description of the transition. The maximum length is 1000 characters. */
  description?: string;

  /** The statuses the transition can start from. */
  from?: string[];

  /** The status the transition goes to. */
  to: string;

  /** The type of the transition. */
  type: 'global' | 'initial' | 'directed';

  /** The rules of the transition. */
  rules?: CreateWorkflowTransitionRulesDetails;

  /** The screen of the transition. */
  screen?: CreateWorkflowTransitionScreenDetails;

  /** The properties of the transition. */
  properties?: Record<string, string>;
}

/**
 * A workflow transition rule.
 */
export interface CreateWorkflowTransitionRule {
  /** The type of the transition rule. */
  type: string;

  /** EXPERIMENTAL. The configuration of the transition rule. */
  configuration?: Record<string, any>;
}

/**
 * The details of a workflow transition rules.
 */
export interface CreateWorkflowTransitionRulesDetails {
  /** The workflow conditions. */
  conditions?: CreateWorkflowCondition;

  /** The workflow validators. */
  validators?: CreateWorkflowTransitionRule[];

  /** The workflow post functions. */
  postFunctions?: CreateWorkflowTransitionRule[];
}

/**
 * The details of a transition screen.
 */
export interface CreateWorkflowTransitionScreenDetails {
  /** The ID of the screen. */
  id: string;
}

/**
 * The classic workflow identifiers.
 */
export interface WorkflowIDs {
  /** The name of the workflow. */
  name: string;

  /** The entity ID of the workflow. */
  entityId?: string;
}

/**
 * Details about the server Jira is running on.
 */
export interface WorkflowTransitionProperty {
  /** The key of the transition property. Also known as the name of the transition property. */
  key?: string;

  /** The value of the transition property. */
  value: string;

  /** The ID of the transition property. */
  id?: string;
  [key: string]: any;
}

/**
 * A page of items.
 */
export interface PageBeanWorkflow {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Workflow[];
}

/**
 * Properties that identify a published workflow.
 */
export interface PublishedWorkflowId {
  /** The name of the workflow. */
  name: string;

  /** The entity ID of the workflow. */
  entityId?: string;
}

/**
 * Details of a workflow transition.
 */
export interface Transition {
  /** The ID of the transition. */
  id: string;

  /** The name of the transition. */
  name: string;

  /** The description of the transition. */
  description: string;

  /** The statuses the transition can start from. */
  from: string[];

  /** The status the transition goes to. */
  to: string;

  /** The type of the transition. */
  type: 'global' | 'initial' | 'directed';

  /** The details of a transition screen. */
  screen?: TransitionScreenDetails;

  /** A collection of transition rules. */
  rules?: WorkflowRules;

  /** The properties of the transition. */
  properties?: Record<string, any>;
}

/**
 * The details of a transition screen.
 */
export interface TransitionScreenDetails {
  /** The ID of the screen. */
  id: string;

  /** The name of the screen. */
  name?: string;
}

/**
 * Details about a workflow.
 */
export interface Workflow {
  /** Properties that identify a published workflow. */
  id: PublishedWorkflowId;

  /** The description of the workflow. */
  description: string;

  /** The transitions of the workflow. */
  transitions?: Transition[];

  /** The statuses of the workflow. */
  statuses?: WorkflowStatus[];

  /** Whether this is the default workflow. */
  isDefault?: boolean;

  /** The workflow schemes the workflow is assigned to. */
  schemes?: WorkflowSchemeIdName[];

  /**
   * The date when the workflow was created
   * @format date-time
   */
  created?: string;

  /**
   * The date when the workflow was last edited
   * @format date-time
   */
  updated?: string;
}

/**
 * A compound workflow transition rule condition. This object returns `nodeType` as `compound`.
 */
export interface WorkflowCompoundCondition {
  /** The compound condition operator. */
  operator: 'AND' | 'OR';

  /** The list of workflow conditions. */
  conditions: WorkflowCondition[];
  nodeType: string;
}

/**
 * The workflow transition rule conditions tree.
 */
export type WorkflowCondition = WorkflowSimpleCondition | WorkflowCompoundCondition;

/**
 * A collection of transition rules.
 */
export interface WorkflowRules {
  /** The workflow conditions. ([Deprecated](https://community.developer.atlassian.com/t/deprecation-of-conditions-body-param/48884)) */
  conditions?: WorkflowTransitionRule[];

  /** The workflow transition rule conditions tree. */
  conditionsTree?: WorkflowCondition;

  /** The workflow validators. */
  validators?: WorkflowTransitionRule[];

  /** The workflow post functions. */
  postFunctions?: WorkflowTransitionRule[];
}

/**
 * The ID and the name of the workflow scheme.
 */
export interface WorkflowSchemeIdName {
  /** The ID of the workflow scheme. */
  id: string;

  /** The name of the workflow scheme. */
  name: string;
}

/**
 * A workflow transition rule condition. This object returns `nodeType` as `simple`.
 */
export interface WorkflowSimpleCondition {
  /** The type of the transition rule. */
  type: string;

  /** EXPERIMENTAL. The configuration of the transition rule. */
  configuration?: object;
  nodeType: string;
}

/**
 * Details of a workflow status.
 */
export interface WorkflowStatus {
  /** The ID of the issue status. */
  id: string;

  /** The name of the status in the workflow. */
  name: string;

  /** Additional properties that modify the behavior of issues in this status. Supports the properties `jira.issue.editable` and `issueEditable` (deprecated) that indicate whether issues are editable. */
  properties?: Record<string, any>;
}

/**
 * A workflow transition rule.
 */
export interface WorkflowTransitionRule {
  /** The type of the transition rule. */
  type: string;

  /** EXPERIMENTAL. The configuration of the transition rule. */
  configuration?: any;
}

/**
 * A workflow transition rule.
 */
export interface ConnectWorkflowTransitionRule {
  /** The ID of the transition rule. */
  id: string;

  /** The key of the rule, as defined in the Connect app descriptor. */
  key: string;

  /** A rule configuration. */
  configuration: RuleConfiguration;
  transition?: WorkflowTransition;
}

/**
 * A page of items.
 */
export interface PageBeanWorkflowTransitionRules {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: WorkflowTransitionRules[];
}

/**
 * A rule configuration.
 */
export interface RuleConfiguration {
  /** Configuration of the rule, as it is stored by the Connect app on the rule configuration page. */
  value: string;

  /** EXPERIMENTAL: Whether the rule is disabled. */
  disabled?: boolean;

  /** EXPERIMENTAL: A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get). */
  tag?: string;
}

/**
 * Properties that identify a workflow.
 */
export interface WorkflowId {
  /** The name of the workflow. */
  name: string;

  /** Whether the workflow is in the draft state. */
  draft: boolean;
}

/**
 * A workflow transition.
 */
export interface WorkflowTransition {
  /**
   * The transition ID.
   * @format int32
   */
  id: number;

  /** The transition name. */
  name: string;
}

/**
 * A workflow with transition rules.
 */
export interface WorkflowTransitionRules {
  /** Properties that identify a workflow. */
  workflowId: WorkflowId;

  /** The list of post functions within the workflow. */
  postFunctions: ConnectWorkflowTransitionRule[];

  /** The list of conditions within the workflow. */
  conditions: ConnectWorkflowTransitionRule[];

  /** The list of validators within the workflow. */
  validators: ConnectWorkflowTransitionRule[];
}

/**
 * Details about a workflow configuration update request.
 */
export interface WorkflowTransitionRulesUpdate {
  /** The list of workflows with transition rules to update. */
  workflows: WorkflowTransitionRules[];
}

/**
 * Details of any errors encountered while updating workflow transition rules for a workflow.
 */
export interface WorkflowTransitionRulesUpdateErrorDetails {
  /** Properties that identify a workflow. */
  workflowId: WorkflowId;

  /** A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn't updated. */
  ruleUpdateErrors: Record<string, string[]>;

  /** The list of errors that specify why the workflow update failed. The workflow was not updated if the list contains any entries. */
  updateErrors: string[];
}

/**
 * Details of any errors encountered while updating workflow transition rules.
 */
export interface WorkflowTransitionRulesUpdateErrors {
  /** A list of workflows. */
  updateResults: WorkflowTransitionRulesUpdateErrorDetails[];
}

/**
 * Details about a workflow configuration update request.
 */
export interface WorkflowTransitionRulesDetails {
  /** Properties that identify a workflow. */
  workflowId: WorkflowId;

  /** The list of connect workflow rule IDs. */
  workflowRuleIds: string[];
}

/**
 * Details of workflows and their transition rules to delete.
 */
export interface WorkflowsWithTransitionRulesDetails {
  /** The list of workflows with transition rules to delete. */
  workflows: WorkflowTransitionRulesDetails[];
}

/**
 * Details about the time tracking provider.
 */
export interface TimeTrackingProvider {
  /** The key for the time tracking provider. For example, *JIRA*. */
  key: string;

  /** The name of the time tracking provider. For example, *JIRA provided time tracking*. */
  name?: string;

  /** The URL of the configuration page for the time tracking provider app. For example, example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app. */
  url?: string;
}

/**
 * Details of an item associated with the changed record.
 */
export interface AssociatedItemBean {
  /** The ID of the associated record. */
  id?: string;

  /** The name of the associated record. */
  name?: string;

  /** The type of the associated record. */
  typeName?: string;

  /** The ID of the associated parent record. */
  parentId?: string;

  /** The name of the associated parent record. */
  parentName?: string;
}

/**
 * An audit record.
 */
export interface AuditRecordBean {
  /**
   * The ID of the audit record.
   * @format int64
   */
  id?: number;

  /** The summary of the audit record. */
  summary?: string;

  /** The URL of the computer where the creation of the audit record was initiated. */
  remoteAddress?: string;

  /** Deprecated, use `authorAccountId` instead. The key of the user who created the audit record. */
  authorKey?: string;

  /**
   * The date and time on which the audit record was created.
   * @format date-time
   */
  created?: string;

  /** The category of the audit record. For a list of these categories, see the help article [Auditing in Jira applications](https://confluence.atlassian.com/x/noXKM). */
  category?: string;

  /** The event the audit record originated from. */
  eventSource?: string;

  /** The description of the audit record. */
  description?: string;

  /** Details of an item associated with the changed record. */
  objectItem?: AssociatedItemBean;

  /** The list of values changed in the record event. */
  changedValues?: ChangedValueBean[];

  /** The list of items associated with the changed record. */
  associatedItems?: AssociatedItemBean[];
}

/**
 * Container for a list of audit records.
 */
export interface AuditRecords {
  /**
   * The number of audit items skipped before the first item in this list.
   * @format int32
   */
  offset?: number;

  /**
   * The requested or default limit on the number of audit items to be returned.
   * @format int32
   */
  limit?: number;

  /**
   * The total number of audit items returned.
   * @format int64
   */
  total?: number;

  /** The list of audit items. */
  records?: AuditRecordBean[];
}

/**
 * Details of names changed in the record event.
 */
export interface ChangedValueBean {
  /** The name of the field changed. */
  fieldName?: string;

  /** The value of the field before the change. */
  changedFrom?: string;

  /** The value of the field after the change. */
  changedTo?: string;
}

/**
 * Details about a notification associated with an event.
 */
export interface EventNotification {
  /** Expand options that include additional event notification details in the response. */
  expand?: string;

  /**
   * The ID of the notification.
   * @format int64
   */
  id?: number;

  /** Identifies the recipients of the notification. */
  notificationType?:
    | 'CurrentAssignee'
    | 'Reporter'
    | 'CurrentUser'
    | 'ProjectLead'
    | 'ComponentLead'
    | 'User'
    | 'Group'
    | 'ProjectRole'
    | 'EmailAddress'
    | 'AllWatchers'
    | 'UserCustomField'
    | 'GroupCustomField';

  /**
   * The value of the `notificationType`:
   *
   *  *  `User` The `parameter` is the user account ID.
   *  *  `Group` The `parameter` is the group name.
   *  *  `ProjectRole` The `parameter` is the project role ID.
   *  *  `UserCustomField` The `parameter` is the ID of the custom field.
   *  *  `GroupCustomField` The `parameter` is the ID of the custom field.
   */
  parameter?: string;

  /** The specified group. */
  group?: GroupName;

  /** The custom user or group field. */
  field?: FieldDetails;

  /** The email address. */
  emailAddress?: string;

  /** The specified project role. */
  projectRole?: ProjectRole;

  /** The specified user. */
  user?: UserDetails;
}

/**
 * Details about a notification event.
 */
export interface NotificationEvent {
  /**
   * The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
   * @format int64
   */
  id?: number;

  /** The name of the event. */
  name?: string;

  /** The description of the event. */
  description?: string;

  /** The template of the event. Only custom events configured by Jira administrators have template. */
  templateEvent?: NotificationEvent;
}

/**
 * Details about a notification scheme.
 */
export interface NotificationScheme {
  /** Expand options that include additional notification scheme details in the response. */
  expand?: string;

  /**
   * The ID of the notification scheme.
   * @format int64
   */
  id?: number;
  self?: string;

  /** The name of the notification scheme. */
  name?: string;

  /** The description of the notification scheme. */
  description?: string;

  /** The notification events and associated recipients. */
  notificationSchemeEvents?: NotificationSchemeEvent[];

  /** The scope of the notification scheme. */
  scope?: Scope;
}

/**
 * Details about a notification scheme event.
 */
export interface NotificationSchemeEvent {
  /** Details about a notification event. */
  event?: NotificationEvent;
  notifications?: EventNotification[];
}

/**
 * A page of items.
 */
export interface PageBeanNotificationScheme {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: NotificationScheme[];
}

/**
 * Details of an issue type.
 */
export interface IssueTypeInfo {
  /**
   * The ID of the issue type.
   * @format int64
   */
  id?: number;

  /** The name of the issue type. */
  name?: string;

  /**
   * The avatar of the issue type.
   * @format int64
   */
  avatarId?: number;
}

/**
 * The hierarchy of issue types within a project.
 */
export interface ProjectIssueTypeHierarchy {
  /**
   * The ID of the project.
   * @format int64
   */
  projectId?: number;

  /** Details of an issue type hierarchy level. */
  hierarchy?: ProjectIssueTypesHierarchyLevel[];
}

/**
 * Details of an issue type hierarchy level.
 */
export interface ProjectIssueTypesHierarchyLevel {
  /**
   * The ID of the issue type hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
   * @format uuid
   */
  entityId?: string;

  /**
   * The level of the issue type hierarchy level.
   * @format int32
   */
  level?: number;

  /** The name of the issue type hierarchy level. */
  name?: string;

  /** The list of issue types in the hierarchy level. */
  issueTypes?: IssueTypeInfo[];
}

/**
 * Details of a dashboard.
 */
export interface Dashboard {
  description?: string;

  /** The ID of the dashboard. */
  id?: string;

  /** Whether the dashboard is selected as a favorite by the user. */
  isFavourite?: boolean;

  /** The name of the dashboard. */
  name?: string;

  /** The owner of the dashboard. */
  owner?: UserBean;

  /**
   * The number of users who have this dashboard as a favorite.
   * @format int64
   */
  popularity?: number;

  /**
   * The rank of this dashboard.
   * @format int32
   */
  rank?: number;

  /**
   * The URL of these dashboard details.
   * @format uri
   */
  self?: string;

  /** The details of any view share permissions for the dashboard. */
  sharePermissions?: SharePermission[];

  /** The details of any edit share permissions for the dashboard. */
  editPermissions?: SharePermission[];

  /** The URL of the dashboard. */
  view?: string;

  /** Whether the current user has permission to edit the dashboard. */
  isWritable?: boolean;
}

/**
 * A page containing dashboard details.
 */
export interface PageOfDashboards {
  /**
   * The index of the first item returned on the page.
   * @format int32
   */
  startAt?: number;

  /**
   * The maximum number of results that could be on the page.
   * @format int32
   */
  maxResults?: number;

  /**
   * The number of results on the page.
   * @format int32
   */
  total?: number;

  /** The URL of the previous page of results, if any. */
  prev?: string;

  /** The URL of the next page of results, if any. */
  next?: string;

  /** List of dashboards. */
  dashboards?: Dashboard[];
}

/**
 * A page of items.
 */
export interface PageBeanDashboard {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Dashboard[];
}

/**
 * Details of a dashboard.
 */
export interface DashboardDetails {
  /** The name of the dashboard. */
  name: string;

  /** The description of the dashboard. */
  description?: string;

  /** The share permissions for the dashboard. */
  sharePermissions: SharePermission[];

  /** The edit permissions for the dashboard. */
  editPermissions: SharePermission[];
}

/**
 * List of issue level security items in a project.
 */
export interface ProjectIssueSecurityLevels {
  /** Issue level security items list. */
  levels: SecurityLevel[];
}

/**
 * Details about a failed webhook.
 */
export interface FailedWebhook {
  /** The webhook ID, as sent in the `X-Atlassian-Webhook-Identifier` header with the webhook. */
  id: string;

  /** The webhook body. */
  body?: string;

  /** The original webhook destination. */
  url: string;

  /**
   * The time the webhook was added to the list of failed webhooks (that is, the time of the last failed retry).
   * @format int64
   */
  failureTime: number;
}

/**
 * A page of failed webhooks.
 */
export interface FailedWebhooks {
  /** The list of webhooks. */
  values: FailedWebhook[];

  /**
   * The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages.
   * @format int32
   */
  maxResults: number;

  /**
   * The URL to the next page of results. Present only if the request returned at least one result.The next page may be empty at the time of receiving the response, but new failed webhooks may appear in time. You can save the URL to the next page and query for new results periodically (for example, every hour).
   * @format uri
   */
  next?: string;
}

/**
 * A list of webhooks.
 */
export interface WebhookDetails {
  /**
   * The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:
   *
   *  *  Fields: `issueKey`, `project`, `issuetype`, `status`, `assignee`, `reporter`, `issue.property`, and `cf[id]`. For custom fields (`cf[id]`), only the epic label custom field is supported.".
   *  *  Operators: `=`, `!=`, `IN`, and `NOT IN`.
   */
  jqlFilter: string;

  /** A list of field IDs. When the issue changelog contains any of the fields, the webhook `jira:issue_updated` is sent. If this parameter is not present, the app is notified about all field updates. */
  fieldIdsFilter?: string[];

  /** A list of issue property keys. A change of those issue properties triggers the `issue_property_set` or `issue_property_deleted` webhooks. If this parameter is not present, the app is notified about all issue property updates. */
  issuePropertyKeysFilter?: string[];

  /** The Jira events that trigger the webhook. */
  events: (
    | 'jira:issue_created'
    | 'jira:issue_updated'
    | 'jira:issue_deleted'
    | 'comment_created'
    | 'comment_updated'
    | 'comment_deleted'
    | 'issue_property_set'
    | 'issue_property_deleted'
  )[];
}

/**
 * Details of webhooks to register.
 */
export interface WebhookRegistrationDetails {
  /** A list of webhooks. */
  webhooks: WebhookDetails[];

  /** The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. */
  url: string;
}

/**
 * Container for a list of registered webhooks. Webhook details are returned in the same order as the request.
 */
export interface ContainerForRegisteredWebhooks {
  /** A list of registered webhooks. */
  webhookRegistrationResult?: RegisteredWebhook[];
}

/**
 * ID of a registered webhook or error messages explaining why a webhook wasn't registered.
 */
export interface RegisteredWebhook {
  /**
   * The ID of the webhook. Returned if the webhook is created.
   * @format int64
   */
  createdWebhookId?: number;

  /** Error messages specifying why the webhook creation failed. */
  errors?: string[];
}

/**
 * A page of items.
 */
export interface PageBeanWebhook {
  /**
   * The URL of the page.
   * @format uri
   */
  self?: string;

  /**
   * If there is another page of results, the URL of the next page.
   * @format uri
   */
  nextPage?: string;

  /**
   * The maximum number of items that could be returned.
   * @format int32
   */
  maxResults?: number;

  /**
   * The index of the first item returned.
   * @format int64
   */
  startAt?: number;

  /**
   * The number of items returned.
   * @format int64
   */
  total?: number;

  /** Whether this is the last page. */
  isLast?: boolean;

  /** The list of items. */
  values?: Webhook[];
}

/**
 * A webhook.
 */
export interface Webhook {
  /**
   * The ID of the webhook.
   * @format int64
   */
  id: number;

  /** The JQL filter that specifies which issues the webhook is sent for. */
  jqlFilter: string;

  /** A list of field IDs. When the issue changelog contains any of the fields, the webhook `jira:issue_updated` is sent. If this parameter is not present, the app is notified about all field updates. */
  fieldIdsFilter?: string[];

  /** A list of issue property keys. A change of those issue properties triggers the `issue_property_set` or `issue_property_deleted` webhooks. If this parameter is not present, the app is notified about all issue property updates. */
  issuePropertyKeysFilter?: string[];

  /** The Jira events that trigger the webhook. */
  events: (
    | 'jira:issue_created'
    | 'jira:issue_updated'
    | 'jira:issue_deleted'
    | 'comment_created'
    | 'comment_updated'
    | 'comment_deleted'
    | 'issue_property_set'
    | 'issue_property_deleted'
  )[];

  /** @format int64 */
  expirationDate?: number;
}

/**
 * Container for a list of webhook IDs.
 */
export interface ContainerForWebhookIDs {
  /** A list of webhook IDs. */
  webhookIds: number[];
}

/**
 * The date the newly refreshed webhooks expire.
 */
export interface WebhooksExpirationDate {
  /** @format int64 */
  expirationDate: number;
}

/**
 * Details of a locale.
 */
export interface Locale {
  /** The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en\_US represents a locale of English (United States). Required on create. */
  locale?: string;
}

/**
 * @example {"message":"An example message.","statusCode":200}
 */
export interface OperationMessage {
  /** The human-readable message that describes the result. */
  message: string;

  /** The status code of the response. */
  statusCode: number;
}

/**
 * @example {"message":"The request is not from a Connect app."}
 */
export interface ErrorMessage {
  /** The error message. */
  message: string;
}

/**
 * @example {"jiraEntityProperties":[{"keyConfigurations":[{"extractions":[{"objectName":"extension","type":"text","alias":"attachmentExtension"}],"propertyKey":"attachment"}],"entityType":"issue","name":{"value":"Attachment Index Document"},"key":"dynamic-attachment-entity-property"}],"jiraIssueFields":[{"description":{"value":"A dynamically added single-select field"},"type":"single_select","extractions":[{"path":"category","type":"text","name":"categoryName"}],"name":{"value":"Dynamic single select"},"key":"dynamic-select-field"}]}
 */
export interface ConnectModules {
  /**
   * A list of app modules in the same format as the `modules` property in the
   * [app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).
   */
  modules: ConnectModule[];
}

/**
* A [Connect module](https://developer.atlassian.com/cloud/jira/platform/about-jira-modules/) in the same format as in the
[app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).
* @example {"description":{"value":"field with team"},"type":"single_select","extractions":[{"path":"category","type":"text","name":"categoryName"}],"name":{"value":"Team"},"key":"team-field"}
*/
export type ConnectModule = object;

/**
 * Details of the workflow and its transition rules.
 */
export interface WorkflowRulesSearch {
  /**
   * The workflow ID.
   * @format uuid
   * @example a498d711-685d-428d-8c3e-bc03bb450ea7
   */
  workflowEntityId: string;

  /** The list of workflow rule IDs. */
  ruleIds: string[];

  /**
   * Use expand to include additional information in the response. This parameter accepts `transition` which, for each rule, returns information about the transition the rule is assigned to.
   * @example transition
   */
  expand?: string;
}

/**
 * Details of workflow transition rules.
 */
export interface WorkflowRulesSearchDetails {
  /**
   * The workflow ID.
   * @format uuid
   * @example a498d711-685d-428d-8c3e-bc03bb450ea7
   */
  workflowEntityId?: string;

  /** List of workflow rule IDs that do not belong to the workflow or can not be found. */
  invalidRules?: string[];

  /** List of valid workflow transition rules. */
  validRules?: WorkflowTransitionRules[];
}

export interface EntityPropertyDetails {
  /**
   * The entity property ID.
   * @example 123
   */
  entityId: number;

  /**
   * The entity property key.
   * @example mykey
   */
  key: string;

  /**
   * The new value of the entity property.
   * @example newValue
   */
  value: string;
}

/**
 * A list of custom field details.
 */
export interface ConnectCustomFieldValue {
  /** The type of custom field. */
  _type:
    | 'StringIssueField'
    | 'NumberIssueField'
    | 'RichTextIssueField'
    | 'SingleSelectIssueField'
    | 'MultiSelectIssueField'
    | 'TextIssueField';

  /** The issue ID. */
  issueID: number;

  /** The custom field ID. */
  fieldID: number;

  /** The value of string type custom field when `_type` is `StringIssueField`. */
  string?: string;

  /** The value of number type custom field when `_type` is `NumberIssueField`. */
  number?: number;

  /** The value of richText type custom field when `_type` is `RichTextIssueField`. */
  richText?: string;

  /** The value of single select and multiselect custom field type when `_type` is `SingleSelectIssueField` or `MultiSelectIssueField`. */
  optionID?: string;

  /** The value of of text custom field type when `_type` is `TextIssueField`. */
  text?: string;
}

/**
 * Details of updates for a custom field.
 */
export interface ConnectCustomFieldValues {
  /** The list of custom field update details. */
  updateValueList?: ConnectCustomFieldValue[];
}
